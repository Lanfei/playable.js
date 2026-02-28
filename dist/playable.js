(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.playable = {}));
})(this, (function (exports) { 'use strict';

    class Event {
        constructor(type, data = null) {
            this.type = null;
            this.data = null;
            this.target = null;
            this.currentTarget = null;
            this.$init(type, data);
        }
        $init(type, data = null) {
            this.type = type;
            this.data = data;
            return this;
        }
        release() {
            this.type = null;
            this.data = null;
            Event.recycle(this);
        }
        static create(type, data = null) {
            let pool = this.$pool;
            if (pool.length > 0) {
                return pool.pop().$init(type, data);
            }
            else {
                return new Event(type, data);
            }
        }
        static recycle(e) {
            this.$pool.push(e);
        }
    }
    /** @event added */
    Event.ADDED = 'added';
    /** @event removed */
    Event.REMOVED = 'removed';
    /** @event addedToStage */
    Event.ADDED_TO_STAGE = 'addedToStage';
    /** @event removeFromStage */
    Event.REMOVED_FROM_STAGE = 'removeFromStage';
    /** @event activate */
    Event.ACTIVATE = 'activate';
    /** @event deactivate */
    Event.DEACTIVATE = 'deactivate';
    /** @event enterFrame */
    Event.ENTER_FRAME = 'enterFrame';
    /** @event tick */
    Event.TICK = 'tick';
    /** @event tickerPause */
    Event.TICKER_PAUSE = 'tickerPause';
    /** @event tickerResume */
    Event.TICKER_RESUME = 'tickerResume';
    /** @event viewportResize */
    Event.VIEWPORT_RESIZE = 'viewportResize';
    /** @event load */
    Event.LOAD = 'load';
    /** @event abort */
    Event.ABORT = 'abort';
    /** @event error */
    Event.ERROR = 'error';
    /** @event progress */
    Event.PROGRESS = 'progress';
    /** @event complete */
    Event.COMPLETE = 'complete';
    /** @event ended */
    Event.ENDED = 'ended';
    /** @event soundComplete */
    Event.SOUND_COMPLETE = 'soundComplete';
    Event.$pool = [];

    var Event$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Event: Event
    });

    class EventEmitter {
        constructor() {
            this.$events = {};
            this.$emittingType = null;
            this.$removedListeners = [];
        }
        on(type, listener) {
            let listeners = this.$events[type] || [];
            listeners.push(listener);
            this.$events[type] = listeners;
            return this;
        }
        off(type, listener) {
            if (this.$emittingType === type && listener) {
                this.$removedListeners.push(listener);
            }
            else {
                let listeners = this.$events[type] || [];
                if (listener) {
                    let index = listeners.indexOf(listener);
                    if (index >= 0) {
                        listeners.splice(index, 1);
                    }
                }
                else {
                    listeners.length = 0;
                }
            }
            return this;
        }
        once(type, listener) {
            let that = this;
            let wrapper = function () {
                listener.apply(this, arguments);
                that.off(type, wrapper);
            };
            return this.on(type, wrapper);
        }
        emit(type, ...args) {
            let event;
            if (type instanceof Event) {
                args = [type];
                type.target = type.target || this;
                type.currentTarget = this;
                type = type.type;
            }
            let listeners = this.$events[type];
            let hasListeners = listeners && listeners.length > 0;
            let removedListeners = this.$removedListeners;
            if (!event && hasListeners && args.length === 0) {
                event = Event.create(type);
                event.target = this;
                event.currentTarget = this;
                args.push(event);
            }
            if (hasListeners) {
                this.$emittingType = type;
                for (let listener of listeners) {
                    if (removedListeners.indexOf(listener) < 0) {
                        listener.apply(this, args);
                    }
                }
                this.$emittingType = null;
            }
            if (event) {
                event.release();
            }
            for (let listener of removedListeners) {
                this.off(type, listener);
            }
            removedListeners.length = 0;
            return hasListeners;
        }
        hasEventListener(type) {
            let listeners = this.$events[type];
            return !!listeners && listeners.length > 0;
        }
        removeAllListeners() {
            this.$events = {};
            return this;
        }
    }

    var EventEmitter$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        EventEmitter: EventEmitter
    });

    class Ticker extends EventEmitter {
        constructor(stage) {
            super();
            this.$stage = null;
            this.$fps = 0;
            this.$deltaTime = 0;
            this.$paused = true;
            this.$shouldResume = false;
            this.$timerIndex = 0;
            this.$lastTimestamp = 0;
            this.$tickHandle = null;
            this.$stage = stage;
            this.$timers = [];
            this.$boundTick = this.$tick.bind(this);
            this.$enterFrameCallbackList = [stage];
            this.$start();
        }
        get fps() {
            return this.$fps;
        }
        get deltaTime() {
            return this.$deltaTime;
        }
        get paused() {
            return this.$paused;
        }
        $start() {
            let stage = this.$stage;
            let prefixes = ['', 'o', 'ms', 'moz', 'webkit'];
            for (let prefix of prefixes) {
                let requestKey = prefix ? prefix + 'RequestAnimationFrame' : 'requestAnimationFrame';
                let cancelKey = prefix ? prefix + 'CancelAnimationFrame' : 'cancelAnimationFrame';
                let cancelRequestKey = prefix ? prefix + 'CancelRequestAnimationFrame' : 'cancelRequestAnimationFrame';
                window.requestAnimationFrame = window.requestAnimationFrame || window[requestKey];
                window.cancelAnimationFrame = window.cancelAnimationFrame || window[cancelKey] || window[cancelRequestKey];
            }
            if (!window.requestAnimationFrame) {
                window.requestAnimationFrame = function (callback) {
                    return window.setTimeout(callback, 1000 / 60);
                };
                window.cancelAnimationFrame = function (handle) {
                    window.clearTimeout(handle);
                };
            }
            stage.on(Event.ACTIVATE, () => {
                if (this.$shouldResume) {
                    this.resume();
                    this.$shouldResume = false;
                }
            });
            stage.on(Event.DEACTIVATE, () => {
                if (!this.$paused) {
                    this.pause();
                    this.$shouldResume = true;
                }
            });
            if (stage.activated) {
                this.$paused = false;
                this.$tick();
            }
            else {
                this.$shouldResume = true;
            }
            return this;
        }
        pause() {
            if (!this.$paused) {
                this.$paused = true;
                this.$lastTimestamp = 0;
                this.emit(Event.TICKER_PAUSE);
                cancelAnimationFrame(this.$tickHandle);
            }
            return this;
        }
        resume() {
            if (this.$paused) {
                this.$paused = false;
                this.$tick();
                this.emit(Event.TICKER_RESUME);
            }
            return this;
        }
        setTimeout(handler, timeout = 0) {
            let handle = ++this.$timerIndex;
            this.$timers[handle] = { handler, timeout, resetTime: timeout };
            return handle;
        }
        clearTimeout(handle) {
            delete this.$timers[handle];
        }
        setInterval(handler, timeout) {
            let handle = ++this.$timerIndex;
            this.$timers[handle] = { handler, timeout, resetTime: timeout, interval: true };
            return handle;
        }
        clearInterval(handle) {
            delete this.$timers[handle];
        }
        registerEnterFrameCallback(layer) {
            let list = this.$enterFrameCallbackList;
            if (list.indexOf(layer) < 0) {
                list.push(layer);
            }
            return this;
        }
        unregisterEnterFrameCallback(layer) {
            let list = this.$enterFrameCallbackList;
            let index = list.indexOf(layer);
            if (index >= 0) {
                list.splice(index, 1);
            }
            return this;
        }
        $tick() {
            let now = Date.now();
            let lastTimestamp = this.$lastTimestamp;
            let deltaTime = lastTimestamp ? now - this.$lastTimestamp : 1000 / 60;
            let enterFrameCallbackList = this.$enterFrameCallbackList;
            this.$fps = Math.round(1000 / deltaTime);
            this.$deltaTime = deltaTime;
            this.$lastTimestamp = now;
            this.$tickHandle = window.requestAnimationFrame(this.$boundTick);
            this.$checkTimers(deltaTime);
            let event = Event.create(Event.ENTER_FRAME, deltaTime);
            for (let layer of enterFrameCallbackList) {
                layer.emit(event);
            }
            event.release();
            let tickEvent = Event.create(Event.TICK, deltaTime);
            this.emit(tickEvent);
            tickEvent.release();
        }
        $checkTimers(dt) {
            let timers = this.$timers;
            for (let key in timers) {
                let timer = timers[key];
                let restTime = timer.resetTime = timer.resetTime - dt;
                if (restTime <= 0) {
                    timer.handler();
                    if (timer.interval) {
                        timer.resetTime += timer.timeout;
                    }
                    else {
                        this.clearTimeout(+key);
                    }
                }
            }
        }
    }

    var Ticker$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Ticker: Ticker
    });

    class Vector {
        constructor(x, y) {
            this.set(x, y);
        }
        get length() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        get angle() {
            return Math.atan2(this.y, this.x);
        }
        set(x, y) {
            this.x = x || 0;
            this.y = y || 0;
            return this;
        }
        add(x, y) {
            if (x instanceof Vector) {
                this.x += x.x;
                this.y += x.y;
            }
            else {
                this.x += x;
                this.y += y;
            }
            return this;
        }
        subtract(x, y) {
            if (x instanceof Vector) {
                this.x -= x.x;
                this.y -= x.y;
            }
            else {
                this.x -= x;
                this.y -= y;
            }
            return this;
        }
        dotProduct(x, y) {
            if (x instanceof Vector) {
                return this.x * x.x + this.y * x.y;
            }
            else {
                return this.x * x + this.y * y;
            }
        }
        normalize() {
            let length = this.length;
            this.x = this.x / length;
            this.y = this.y / length;
            return this;
        }
        negate() {
            this.x *= -1;
            this.y *= -1;
            return this;
        }
        scale(x, y) {
            this.x *= x;
            this.y *= y === undefined ? x : y;
            return this;
        }
        rotate(angle) {
            let x = this.x;
            let y = this.y;
            this.x = x * Math.cos(angle) - y * Math.sin(angle);
            this.y = x * Math.sin(angle) + y * Math.cos(angle);
            return this;
        }
        transform(m) {
            let x = this.x;
            let y = this.y;
            this.x = m.a * x + m.c * y + m.tx;
            this.y = m.b * x + m.d * y + m.ty;
            return this;
        }
        distance(v) {
            return Math.sqrt((this.x - v.x) * (this.x - v.x) + (this.y - v.y) * (this.y - v.y));
        }
        equal(v) {
            return this.x === v.x && this.y === v.y;
        }
        release() {
            Vector.recycle(this);
            return this;
        }
        static create(x, y) {
            let pool = this.$pool;
            if (pool.length > 0) {
                return pool.pop().set(x, y);
            }
            else {
                return new Vector(x, y);
            }
        }
        static recycle(v) {
            this.$pool.push(v);
        }
    }
    Vector.$pool = [];

    var Vector$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Vector: Vector
    });

    /**
     * ```
     *             {a  b  0}
     * (x, y, 1) * {c  d  0} = (ax + cy + tx, bx + dy + ty, 1)
     *             {tx ty 1}
     * ```
     */
    class Matrix {
        constructor(a, b, c, d, tx, ty) {
            if (arguments.length > 0) {
                this.set(a, b, c, d, tx, ty);
            }
            else {
                this.identity();
            }
        }
        set(a, b, c, d, tx, ty) {
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
            this.tx = tx;
            this.ty = ty;
            return this;
        }
        identity() {
            return this.set(1, 0, 0, 1, 0, 0);
        }
        invert() {
            let a = this.a;
            let b = this.b;
            let c = this.c;
            let d = this.d;
            let tx = this.tx;
            let ty = this.ty;
            let n = a * d - c * b;
            this.a = d / n;
            this.b = -b / n;
            this.c = -c / n;
            this.d = a / n;
            this.tx = (c * ty - d * tx) / n;
            this.ty = (b * tx - a * ty) / n;
            return this;
        }
        prepend(a, b, c, d, tx, ty) {
            if (a instanceof Matrix) {
                return this.prepend(a.a, a.b, a.c, a.d, a.tx, a.ty);
            }
            let a1 = this.a;
            let b1 = this.b;
            let c1 = this.c;
            let d1 = this.d;
            let tx1 = this.tx;
            let ty1 = this.ty;
            this.a = a * a1 + b * c1;
            this.b = a * b1 + b * d1;
            this.c = c * a1 + d * c1;
            this.d = c * b1 + d * d1;
            this.tx = tx * a1 + ty * c1 + tx1;
            this.ty = tx * b1 + ty * d1 + ty1;
            return this;
        }
        append(a, b, c, d, tx, ty) {
            if (a instanceof Matrix) {
                return this.append(a.a, a.b, a.c, a.d, a.tx, a.ty);
            }
            let a1 = this.a;
            let b1 = this.b;
            let c1 = this.c;
            let d1 = this.d;
            let tx1 = this.tx;
            let ty1 = this.ty;
            this.a = a * a1 + c * b1;
            this.b = b * a1 + d * b1;
            this.c = a * c1 + c * d1;
            this.d = b * c1 + d * d1;
            this.tx = a * tx1 + c * ty1 + tx;
            this.ty = b * tx1 + d * ty1 + ty;
            return this;
        }
        scale(x, y) {
            return this.append(x, 0, 0, y === undefined ? x : y, 0, 0);
        }
        rotate(angle) {
            let sin = Math.sin(angle);
            let cos = Math.cos(angle);
            return this.append(cos, sin, -sin, cos, 0, 0);
        }
        skew(skewX, skewY) {
            return this.append(1, Math.tan(skewY), Math.tan(skewX), 1, 0, 0);
        }
        translate(x, y) {
            if (x instanceof Vector) {
                return this.append(1, 0, 0, 1, x.x, x.y);
            }
            return this.append(1, 0, 0, 1, x, y);
        }
        equal(m) {
            return m instanceof Matrix &&
                this.a === m.a && this.b === m.b &&
                this.c === m.c && this.d === m.d &&
                this.tx === m.tx && this.ty === m.ty;
        }
        release() {
            Matrix.recycle(this);
        }
        static create(a, b, c, d, tx, ty) {
            let m;
            let pool = this.$pool;
            if (pool.length > 0) {
                m = pool.pop();
            }
            else {
                m = new Matrix();
            }
            if (arguments.length) {
                m.set(a, b, c, d, tx, ty);
            }
            else {
                m.identity();
            }
            return m;
        }
        static recycle(m) {
            this.$pool.push(m);
        }
    }
    Matrix.$pool = [];

    var Matrix$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Matrix: Matrix
    });

    class Rectangle {
        constructor(x, y, width, height) {
            this.set(x, y, width, height);
        }
        get top() {
            return this.y;
        }
        set top(top) {
            this.height += this.y - top;
            this.y = top;
        }
        get bottom() {
            return this.y + this.height;
        }
        set bottom(bottom) {
            this.height = bottom - this.y;
        }
        get left() {
            return this.x;
        }
        set left(left) {
            this.width += this.x - left;
            this.x = left;
        }
        get right() {
            return this.x + this.width;
        }
        set right(right) {
            this.width = right - this.x;
        }
        get topLeft() {
            return Vector.create(this.left, this.top);
        }
        set topLeft(v) {
            this.top = v.y;
            this.left = v.x;
        }
        get bottomRight() {
            return Vector.create(this.right, this.bottom);
        }
        set bottomRight(v) {
            this.bottom = v.y;
            this.right = v.x;
        }
        set(x, y, width, height) {
            this.x = x || 0;
            this.y = y || 0;
            this.width = width || 0;
            this.height = height || 0;
            return this;
        }
        contains(x, y) {
            if (x instanceof Vector) {
                return this.contains(x.x, x.y);
            }
            return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
        }
        equal(r) {
            return r instanceof Rectangle &&
                r.x === this.x && r.y === this.y && r.width === this.width && r.height === this.height;
        }
        release() {
            Rectangle.recycle(this);
        }
        static create(x, y, width, height) {
            let pool = this.$pool;
            if (pool.length > 0) {
                return pool.pop().set(x, y, width, height);
            }
            else {
                return new Rectangle(x, y, width, height);
            }
        }
        static recycle(r) {
            this.$pool.push(r);
        }
    }
    Rectangle.$pool = [];

    var Rectangle$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Rectangle: Rectangle
    });

    class TouchEvent extends Event {
        constructor(type) {
            super(type);
            this.$init(type);
        }
        $init(type) {
            this.type = type;
            this.targetX = 0;
            this.targetY = 0;
            this.localX = 0;
            this.localY = 0;
            this.stageX = 0;
            this.stageY = 0;
            this.identifier = 0;
            this.target = null;
            this.currentTarget = null;
            this.cancelBubble = false;
            return this;
        }
        stopPropagation() {
            this.cancelBubble = true;
        }
        release() {
            TouchEvent.recycle(this);
        }
        static create(type) {
            let pool = this.$pool;
            if (pool.length > 0) {
                return pool.pop().$init(type);
            }
            else {
                return new TouchEvent(type);
            }
        }
        static recycle(e) {
            this.$pool.push(e);
        }
    }
    /** @event touchStart */
    TouchEvent.TOUCH_START = 'touchStart';
    /** @event touchMove */
    TouchEvent.TOUCH_MOVE = 'touchMove';
    /** @event touchEnd */
    TouchEvent.TOUCH_END = 'touchEnd';
    /** @event touchCancel */
    TouchEvent.TOUCH_CANCEL = 'touchCancel';
    /** @event touchTap */
    TouchEvent.TOUCH_TAP = 'touchTap';
    TouchEvent.$pool = [];

    var TouchEvent$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        TouchEvent: TouchEvent
    });

    class Layer extends EventEmitter {
        constructor() {
            super();
            this.name = '';
            this.tag = '';
            this.touchable = true;
            this.$x = 0;
            this.$y = 0;
            this.$width = 0;
            this.$height = 0;
            this.$anchorX = 0;
            this.$anchorY = 0;
            this.$skewX = 0;
            this.$skewY = 0;
            this.$scaleX = 1;
            this.$scaleY = 1;
            this.$rotation = 0;
            this.$alpha = 1;
            this.$visible = true;
            this.$smoothing = true;
            this.$background = null;
            this.$stage = null;
            this.$parent = null;
            this.$children = [];
            this.$dirty = true;
            this.$shouldEmitTap = true;
            this.$touches = [];
            this.$canvas = document.createElement('canvas');
            this.$context = this.$canvas.getContext('2d');
        }
        get x() {
            return this.$x;
        }
        set x(x) {
            if (this.$x !== x) {
                this.$x = x;
                this.$markParentDirty();
            }
        }
        get y() {
            return this.$y;
        }
        set y(y) {
            if (this.$y !== y) {
                this.$y = y;
                this.$markParentDirty();
            }
        }
        get width() {
            return this.$width ? this.$width : this.$canvas.width / Layer.pixelRatio;
        }
        set width(width) {
            if (this.$width !== width) {
                this.$width = width;
                this.$resizeCanvas();
            }
        }
        get height() {
            return this.$height ? this.$height : this.$canvas.height / Layer.pixelRatio;
        }
        set height(height) {
            if (this.$height !== height) {
                this.$height = height;
                this.$resizeCanvas();
            }
        }
        get anchorX() {
            return this.$anchorX;
        }
        set anchorX(anchorX) {
            if (this.$anchorX !== anchorX) {
                this.$anchorX = anchorX;
                this.$resizeCanvas();
            }
        }
        get anchorY() {
            return this.$anchorY;
        }
        set anchorY(anchorY) {
            if (this.$anchorY !== anchorY) {
                this.$anchorY = anchorY;
                this.$resizeCanvas();
            }
        }
        get skewX() {
            return this.$skewX;
        }
        set skewX(skewX) {
            if (this.$skewX !== skewX) {
                this.$skewX = skewX;
                this.$markParentDirty();
            }
        }
        get skewY() {
            return this.$skewY;
        }
        set skewY(skewY) {
            if (this.$skewY !== skewY) {
                this.$skewY = skewY;
                this.$markParentDirty();
            }
        }
        get scaleX() {
            return this.$scaleX;
        }
        set scaleX(scaleX) {
            if (this.$scaleX !== scaleX) {
                this.$scaleX = scaleX;
                this.$markParentDirty();
            }
        }
        get scaleY() {
            return this.$scaleY;
        }
        set scaleY(scaleY) {
            if (this.$scaleY !== scaleY) {
                this.$scaleY = scaleY;
                this.$markParentDirty();
            }
        }
        get rotation() {
            return this.$rotation;
        }
        set rotation(rotation) {
            if (this.$rotation !== rotation) {
                this.$rotation = rotation;
                this.$markParentDirty();
            }
        }
        get alpha() {
            return this.$alpha;
        }
        set alpha(alpha) {
            if (this.$alpha !== alpha) {
                this.$alpha = alpha;
                this.$markParentDirty();
            }
        }
        get visible() {
            return this.$visible;
        }
        set visible(visible) {
            if (this.$visible !== visible) {
                this.$visible = visible;
                this.$markParentDirty();
            }
        }
        get smoothing() {
            return this.$smoothing;
        }
        set smoothing(smoothing) {
            this.$smoothing = smoothing;
            this.$resizeCanvas();
        }
        get background() {
            return this.$background;
        }
        set background(background) {
            if (this.$background !== background) {
                this.$background = background;
                this.$markDirty();
            }
        }
        get stage() {
            return this.$stage;
        }
        get parent() {
            return this.$parent;
        }
        get numChildren() {
            return this.$children.length;
        }
        get ticker() {
            return this.$stage ? this.$stage.ticker : null;
        }
        get canvas() {
            return this.$canvas;
        }
        addChild(child) {
            return this.addChildAt(child, this.$children.length);
        }
        addChildAt(child, index) {
            let children = this.$children;
            if (child.$parent) {
                child.$parent.removeChild(child);
            }
            if (index < 0 || index > children.length) {
                index = children.length;
            }
            child.$emitAdded(this);
            children.splice(index, 0, child);
            this.$resizeCanvas();
            return this;
        }
        replaceChild(oldChild, newChild) {
            let index = this.getChildIndex(oldChild);
            this.removeChildAt(index);
            this.addChildAt(newChild, index);
            return this;
        }
        getChildByName(name) {
            let children = this.$children;
            for (let child of children) {
                if (child.name === name) {
                    return child;
                }
            }
            return null;
        }
        getChildrenByTag(tag) {
            let result = [];
            let children = this.$children;
            for (let child of children) {
                if (child.tag === tag) {
                    result.push(child);
                }
            }
            return result;
        }
        getChildAt(index) {
            return this.$children[index] || null;
        }
        getChildIndex(child) {
            return this.$children.indexOf(child);
        }
        hasChild(child) {
            return this.getChildIndex(child) >= 0;
        }
        swapChildren(child1, child2) {
            let index1 = this.getChildIndex(child1);
            let index2 = this.getChildIndex(child2);
            if (index1 >= 0 && index2 >= 0) {
                this.swapChildrenAt(index1, index2);
            }
            return this;
        }
        swapChildrenAt(index1, index2) {
            let child1 = this.$children[index1];
            let child2 = this.$children[index2];
            if (index1 !== index2 && child1 && child2) {
                this.$children[index1] = child2;
                this.$children[index2] = child1;
                this.$markDirty();
            }
            return this;
        }
        setChildIndex(child, index) {
            let children = this.$children;
            let oldIndex = this.getChildIndex(child);
            if (index < 0) {
                index = 0;
            }
            else if (index > children.length) {
                index = children.length;
            }
            if (oldIndex >= 0 && index > oldIndex) {
                for (let i = oldIndex + 1; i <= index; ++i) {
                    children[i - 1] = children[i];
                }
                children[index] = child;
                this.$markDirty();
            }
            else if (oldIndex >= 0 && index < oldIndex) {
                for (let i = oldIndex - 1; i >= index; --i) {
                    children[i + 1] = children[i];
                }
                children[index] = child;
                this.$markDirty();
            }
            return this;
        }
        removeChild(child) {
            let index = this.getChildIndex(child);
            return this.removeChildAt(index);
        }
        removeChildAt(index) {
            let children = this.$children;
            let child = children[index];
            if (child) {
                children.splice(index, 1);
                child.$emitRemoved();
                this.$resizeCanvas();
            }
            return this;
        }
        removeChildByName(name) {
            let children = this.$children;
            for (let i = 0, l = children.length; i < l; ++i) {
                let child = children[i];
                if (child.name === name) {
                    this.removeChildAt(i);
                    break;
                }
            }
            return this;
        }
        removeChildrenByTag(tag) {
            let children = this.$children;
            for (let i = children.length - 1; i >= 0; --i) {
                let child = children[i];
                if (child.tag === tag) {
                    this.removeChildAt(i);
                }
            }
            return this;
        }
        removeAllChildren() {
            let children = this.$children;
            for (let child of children) {
                child.$emitRemoved();
            }
            this.$children.length = 0;
            this.$resizeCanvas();
            return this;
        }
        removeSelf() {
            if (this.$parent) {
                this.$parent.removeChild(this);
            }
            return this;
        }
        $markDirty(sizeDirty) {
            if (sizeDirty) {
                this.$resizeParentCanvas();
            }
            else if (!this.$dirty) {
                this.$markParentDirty();
            }
            this.$dirty = true;
        }
        $markParentDirty() {
            if (this.$parent) {
                this.$parent.$markDirty();
            }
        }
        $resizeCanvas() {
            let width = this.$width;
            let height = this.$height;
            let canvas = this.$canvas;
            let anchorX = this.$anchorX;
            let anchorY = this.$anchorY;
            let context = this.$context;
            let smoothing = this.$smoothing;
            let pixelRatio = Layer.pixelRatio;
            if (width && height) {
                canvas.width = width * pixelRatio;
                canvas.height = height * pixelRatio;
            }
            else {
                let bounds = this.$getContentBounds();
                canvas.width = (width || bounds.right + anchorX) * pixelRatio;
                canvas.height = (height || bounds.bottom + anchorY) * pixelRatio;
                bounds.release();
            }
            if (context.imageSmoothingEnabled !== smoothing) {
                context.imageSmoothingEnabled = smoothing;
            }
            this.$markDirty(true);
        }
        $resizeParentCanvas() {
            if (this.$parent) {
                this.$parent.$resizeCanvas();
            }
        }
        $getTransform() {
            let degToRad = Math.PI / 180;
            let matrix = Matrix.create();
            matrix.translate(-this.$anchorX, -this.$anchorY);
            matrix.skew(this.skewX * degToRad, this.skewY * degToRad);
            matrix.rotate(this.rotation * degToRad);
            matrix.scale(this.scaleX, this.scaleY);
            matrix.translate(this.x, this.y);
            return matrix;
        }
        $getChildTransform(child) {
            return child.$getTransform();
        }
        $getChildBounds(child) {
            let width = child.width;
            let height = child.height;
            let bounds = Rectangle.create();
            let matrix = this.$getChildTransform(child);
            let topLeft = Vector.create(0, 0).transform(matrix);
            let topRight = Vector.create(width, 0).transform(matrix);
            let bottomLeft = Vector.create(0, height).transform(matrix);
            let bottomRight = Vector.create(width, height).transform(matrix);
            let minX = Math.min(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
            let maxX = Math.max(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
            let minY = Math.min(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
            let maxY = Math.max(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
            bounds.top = minY;
            bounds.bottom = maxY;
            bounds.left = minX;
            bounds.right = maxX;
            matrix.release();
            topLeft.release();
            topRight.release();
            bottomLeft.release();
            bottomRight.release();
            return bounds;
        }
        $getContentBounds() {
            let bounds;
            let children = this.$children;
            for (let child of children) {
                if (child.$visible) {
                    let childBounds = this.$getChildBounds(child);
                    if (bounds) {
                        bounds.top = Math.min(bounds.top, childBounds.top);
                        bounds.bottom = Math.max(bounds.bottom, childBounds.bottom);
                        bounds.left = Math.min(bounds.left, childBounds.left);
                        bounds.right = Math.max(bounds.right, childBounds.right);
                        childBounds.release();
                    }
                    else {
                        bounds = childBounds;
                    }
                }
            }
            bounds = bounds || Rectangle.create();
            return bounds;
        }
        $emitTouchEvent(event, inside) {
            let type = event.type;
            let localX = event.localX;
            let localY = event.localY;
            let touches = this.$touches;
            let identifier = event.identifier;
            if (type === TouchEvent.TOUCH_START) {
                this.$shouldEmitTap = true;
                touches[identifier] = true;
            }
            else if (!touches[identifier]) {
                return false;
            }
            else if (type === TouchEvent.TOUCH_TAP || type === TouchEvent.TOUCH_CANCEL) {
                touches[identifier] = false;
            }
            if (type === TouchEvent.TOUCH_MOVE) {
                this.$shouldEmitTap = false;
            }
            let children = this.$children;
            for (let i = children.length - 1; i >= 0; --i) {
                let child = children[i];
                if (!child.$visible || !child.touchable) {
                    continue;
                }
                let matrix = this.$getChildTransform(child);
                let localPos = Vector.create(localX, localY).transform(matrix.invert()).subtract(child.$anchorX, child.$anchorY);
                let inside = child.$localHitTest(localPos);
                localPos.release();
                matrix.release();
                if (inside || type !== TouchEvent.TOUCH_START) {
                    event.target = child;
                    event.localX = event.targetX = localPos.x;
                    event.localY = event.targetY = localPos.y;
                    if (child.$emitTouchEvent(event, inside)) {
                        break;
                    }
                }
            }
            if (type === TouchEvent.TOUCH_TAP && (!inside || !this.$shouldEmitTap)) {
                return true;
            }
            if (!event.cancelBubble) {
                event.localX = localX;
                event.localY = localY;
                this.emit(event);
            }
            return true;
        }
        $emitAdded(parent) {
            let stage = parent.$stage;
            this.$parent = parent;
            this.emit(Event.ADDED);
            if (stage) {
                this.$emitAddedToStage(stage);
            }
        }
        $emitRemoved() {
            let stage = this.$stage;
            this.$parent = null;
            this.emit(Event.REMOVED);
            if (stage) {
                this.$emitRemovedFromStage();
            }
        }
        $emitAddedToStage(stage) {
            let children = this.$children;
            this.$stage = stage;
            this.emit(Event.ADDED_TO_STAGE);
            if (this.hasEventListener(Event.ENTER_FRAME)) {
                stage.ticker.registerEnterFrameCallback(this);
            }
            for (let child of children) {
                child.$emitAddedToStage(stage);
            }
        }
        $emitRemovedFromStage() {
            let stage = this.$stage;
            let children = this.$children;
            this.$stage = null;
            this.emit(Event.REMOVED_FROM_STAGE);
            if (this.hasEventListener(Event.ENTER_FRAME)) {
                stage.ticker.unregisterEnterFrameCallback(this);
            }
            for (let child of children) {
                child.$emitRemovedFromStage();
            }
        }
        $localHitTest(vector) {
            return vector.x >= -this.anchorX && vector.x <= this.width - this.anchorX && vector.y >= -this.anchorY && vector.y <= this.height - this.anchorY;
        }
        $isChildVisible(child) {
            if (!child.visible || !child.alpha || !child.width || !child.height) {
                return false;
            }
            let minX = -this.$anchorX;
            let maxX = this.width + minX;
            let minY = -this.$anchorY;
            let maxY = this.height + minY;
            let bounds = this.$getChildBounds(child);
            let inside = bounds.left <= maxX && bounds.right >= minX && bounds.top <= maxY && bounds.bottom >= minY;
            bounds.release();
            return inside;
        }
        $drawChild(child) {
            let ctx = this.$context;
            let canvas = child.$canvas;
            let width = child.width;
            let height = child.height;
            let pixelRatio = Layer.pixelRatio;
            let matrix = this.$getChildTransform(child).scale(pixelRatio);
            let drawCalls = child.$render();
            let globalAlpha = ctx.globalAlpha;
            if (globalAlpha !== child.alpha) {
                ctx.globalAlpha = child.alpha;
            }
            if (matrix.b === 0 && matrix.c === 0) {
                let tx = (matrix.tx + 0.5) | 0;
                let ty = (matrix.ty + 0.5) | 0;
                width = (width * matrix.a) + 0.5 | 0;
                height = (height * matrix.d) + 0.5 | 0;
                ctx.drawImage(canvas, tx, ty, width, height);
            }
            else {
                ctx.save();
                ctx.transform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
                ctx.drawImage(canvas, 0, 0, width, height);
                ctx.restore();
            }
            if (globalAlpha !== child.alpha) {
                ctx.globalAlpha = globalAlpha;
            }
            matrix.release();
            return drawCalls + 1;
        }
        $render() {
            if (!this.$dirty) {
                return 0;
            }
            let drawCalls = 0;
            let ctx = this.$context;
            let canvas = this.$canvas;
            let children = this.$children;
            let canvasWidth = canvas.width;
            let canvasHeight = canvas.height;
            let anchorX = (this.$anchorX + 0.5) | 0;
            let anchorY = (this.$anchorY + 0.5) | 0;
            let background = this.$background;
            let pixelRatio = Layer.pixelRatio;
            ctx.globalAlpha = 1;
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            if (background) {
                ctx.fillStyle = background;
                ctx.fillRect(0, 0, canvasWidth, canvasHeight);
            }
            ctx.translate(anchorX * pixelRatio, anchorY * pixelRatio);
            for (let child of children) {
                if (this.$isChildVisible(child)) {
                    drawCalls += this.$drawChild(child);
                }
            }
            this.$dirty = false;
            return drawCalls;
        }
        on(type, listener) {
            super.on(type, listener);
            if (type === Event.ENTER_FRAME && this.ticker) {
                this.ticker.registerEnterFrameCallback(this);
            }
            else if (type === Event.ADDED && this.$parent) {
                let event = Event.create(type);
                listener.call(this, event);
                event.release();
            }
            else if (type === Event.ADDED_TO_STAGE && this.$stage) {
                let event = Event.create(type);
                listener.call(this, event);
                event.release();
            }
            return this;
        }
        off(type, listener) {
            super.off(type, listener);
            if (type === Event.ENTER_FRAME && !this.hasEventListener(Event.ENTER_FRAME) && this.ticker) {
                this.ticker.unregisterEnterFrameCallback(this);
            }
            return this;
        }
    }
    Layer.pixelRatio = typeof window === 'undefined' ? 1 : window.devicePixelRatio || 1;

    var Layer$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Layer: Layer
    });

    class Ease {
        static linear(t, b, c, d) {
            return c * t / d + b;
        }
        static easeInQuad(t, b, c, d) {
            return c * (t /= d) * t + b;
        }
        static easeOutQuad(t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        }
        static easeInOutQuad(t, b, c, d) {
            if ((t /= d / 2) < 1)
                return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        }
        static easeInCubic(t, b, c, d) {
            return c * (t /= d) * t * t + b;
        }
        static easeOutCubic(t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        }
        static easeInOutCubic(t, b, c, d) {
            if ((t /= d / 2) < 1)
                return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        }
        static easeInQuart(t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        }
        static easeOutQuart(t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        }
        static easeInOutQuart(t, b, c, d) {
            if ((t /= d / 2) < 1)
                return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        }
        static easeInQuint(t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        }
        static easeOutQuint(t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        }
        static easeInOutQuint(t, b, c, d) {
            if ((t /= d / 2) < 1)
                return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        }
        static easeInSine(t, b, c, d) {
            return (t === d) ? b + c : -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        }
        static easeOutSine(t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        }
        static easeInOutSine(t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        }
        static easeInExpo(t, b, c, d) {
            return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        }
        static easeOutExpo(t, b, c, d) {
            return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        }
        static easeInOutExpo(t, b, c, d) {
            if (t === 0)
                return b;
            if (t === d)
                return b + c;
            if ((t /= d / 2) < 1)
                return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
        static easeInCirc(t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        }
        static easeOutCirc(t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        }
        static easeInOutCirc(t, b, c, d) {
            if ((t /= d / 2) < 1)
                return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        }
        static easeInElastic(t, b, c, d) {
            let s = 1.70158;
            let p = 0;
            let a = c;
            if (t === 0)
                return b;
            if ((t /= d) === 1)
                return b + c;
            if (!p)
                p = d * 0.3;
            if (a < Math.abs(c)) {
                a = c;
                s = p / 4;
            }
            else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        }
        static easeOutElastic(t, b, c, d) {
            let s = 1.70158;
            let p = 0;
            let a = c;
            if (t === 0)
                return b;
            if ((t /= d) === 1)
                return b + c;
            if (!p)
                p = d * 0.3;
            if (a < Math.abs(c)) {
                a = c;
                s = p / 4;
            }
            else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
        }
        static easeInOutElastic(t, b, c, d) {
            let s = 1.70158;
            let p = 0;
            let a = c;
            if (t === 0)
                return b;
            if ((t /= d / 2) === 2)
                return b + c;
            if (!p)
                p = d * (0.3 * 1.5);
            if (a < Math.abs(c)) {
                a = c;
                s = p / 4;
            }
            else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            if (t < 1)
                return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
        }
        static easeInBack(t, b, c, d, s = 1.70158) {
            return (t === d) ? b + c : c * (t /= d) * t * ((s + 1) * t - s) + b;
        }
        static easeOutBack(t, b, c, d, s = 1.70158) {
            return (t === 0) ? b : c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        }
        static easeInOutBack(t, b, c, d, s = 1.70158) {
            if ((t /= d / 2) < 1)
                return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        }
        static easeInBounce(t, b, c, d) {
            return c - Ease.easeOutBounce(d - t, 0, c, d) + b;
        }
        static easeOutBounce(t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            }
            else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
            }
            else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
            }
            else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
            }
        }
        static easeInOutBounce(t, b, c, d) {
            if (t < d / 2)
                return Ease.easeInBounce(t * 2, 0, c, d) * 0.5 + b;
            return Ease.easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
        }
    }

    var Ease$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Ease: Ease
    });

    class Tween extends EventEmitter {
        constructor(target, option) {
            super();
            this.loop = false;
            this.$target = null;
            this.$paused = true;
            this.$stopped = true;
            this.$stepIndex = 0;
            this.$stepPosition = 0;
            this.$steps = [];
            this.$stepProps = [];
            this.$shouldSaveProps = true;
            this.$target = target;
            this.loop = option ? option.loop : false;
            this.$boundOnEnterFrame = this.$onEnterFrame.bind(this);
        }
        get paused() {
            return this.$paused;
        }
        get stopped() {
            return this.$stopped;
        }
        set(props) {
            this.$steps.push({
                type: 'set',
                props
            });
            return this;
        }
        to(props, duration, ease) {
            this.$steps.push({
                type: 'to',
                duration,
                props,
                ease
            });
            return this;
        }
        wait(duration) {
            this.$steps.push({
                type: 'wait',
                duration
            });
            return this;
        }
        call(callback) {
            this.$steps.push({
                type: 'call',
                callback
            });
            return this;
        }
        play() {
            if (this.$stopped) {
                this.resume();
                Tween.$tweens.push(this);
            }
            return this;
        }
        pause() {
            this.$paused = true;
            this.$target.off(Event.ENTER_FRAME, this.$boundOnEnterFrame);
            return this;
        }
        resume() {
            if (this.$paused) {
                this.$paused = false;
                this.$stopped = false;
                this.$target.on(Event.ENTER_FRAME, this.$boundOnEnterFrame);
            }
            return this;
        }
        stop() {
            this.pause();
            this.$stopped = true;
            let index = Tween.$tweens.indexOf(this);
            if (index >= 0) {
                Tween.$tweens.splice(index, 1);
            }
            return this;
        }
        $onEnterFrame(e) {
            this.$nextFrame(e.data);
        }
        $nextFrame(dt) {
            let loop = this.loop;
            let steps = this.$steps;
            let stepLength = this.$steps.length;
            let stepIndex = this.$stepIndex;
            let stepPosition = this.$stepPosition + dt;
            let step = steps[stepIndex];
            let type = step.type;
            let duration = step.duration || 0;
            let props = step.props;
            let ease = step.ease || Ease.linear;
            let callback = step.callback;
            if (type === 'set') {
                this.$setProps(props);
            }
            else if (type === 'to') {
                this.$easeProps(stepIndex, props, stepPosition, duration, ease);
            }
            else if (type === 'call') {
                callback.call(this.$target);
            }
            if (stepPosition < duration) {
                this.$stepPosition = stepPosition;
            }
            else if (stepIndex + 1 < stepLength) {
                this.$stepPosition = 0;
                this.$stepIndex = stepIndex + 1;
                this.$shouldSaveProps = true;
                this.$setProps(props);
                this.$nextFrame(stepPosition - duration);
            }
            else if (loop) {
                this.$stepIndex = 0;
                this.$stepPosition = 0;
                this.$shouldSaveProps = true;
                this.$setProps(props);
                this.$nextFrame(stepPosition - duration);
            }
            else {
                this.$stepIndex = 0;
                this.$stepPosition = 0;
                this.$shouldSaveProps = true;
                this.$setProps(props);
                this.pause();
            }
        }
        $saveOriginalProps(stepIndex, props) {
            let target = this.$target;
            let stepProps = this.$stepProps;
            let originalProps = stepProps[stepIndex] = stepProps[stepIndex] || {};
            for (let key in props) {
                originalProps[key] = target[key];
            }
            this.$shouldSaveProps = false;
        }
        $easeProps(stepIndex, props, position, duration, ease) {
            if (this.$shouldSaveProps) {
                this.$saveOriginalProps(stepIndex, props);
            }
            let target = this.$target;
            let originalProps = this.$stepProps[stepIndex] || {};
            if (position > duration) {
                position = duration;
            }
            for (let key in props) {
                let originalValue = originalProps[key];
                let offsetValue = props[key] - originalValue;
                target[key] = ease(position, originalValue, offsetValue, duration);
            }
        }
        $setProps(props) {
            let target = this.$target;
            for (let key in props) {
                target[key] = props[key];
            }
        }
        static get(target, option) {
            return new Tween(target, option);
        }
        static pauseTweens(target) {
            let tweens = this.$tweens;
            for (let tween of tweens) {
                if (tween.$target === target) {
                    tween.pause();
                }
            }
        }
        static resumeTweens(target) {
            let tweens = this.$tweens;
            for (let tween of tweens) {
                if (tween.$target === target) {
                    tween.resume();
                }
            }
        }
        static removeTweens(target) {
            let tweens = this.$tweens;
            for (let i = tweens.length - 1; i >= 0; --i) {
                let tween = tweens[i];
                if (tween.$target === target) {
                    tween.stop();
                }
            }
        }
        static removeAllTweens() {
            let tweens = this.$tweens;
            for (let i = tweens.length - 1; i >= 0; --i) {
                let tween = tweens[i];
                tween.stop();
            }
        }
    }
    Tween.$tweens = [];

    var Tween$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Tween: Tween
    });

    class Scroller extends Layer {
        constructor() {
            super();
            this.$scrollTop = 0;
            this.$scrollLeft = 0;
            this.$scrollWidth = 0;
            this.$scrollHeight = 0;
            this.$touchingX = null;
            this.$touchingY = null;
            this.$touchingId = null;
            this.$touchingTime = null;
            this.$velocitiesX = [];
            this.$velocitiesY = [];
            this.$inertiaTween = null;
            this.width = 200;
            this.height = 200;
            this.on(TouchEvent.TOUCH_START, this.$onTouchStart);
            this.on(TouchEvent.TOUCH_MOVE, this.$onTouchMove);
            this.on(TouchEvent.TOUCH_END, this.$onTouchEnd);
            this.on(TouchEvent.TOUCH_CANCEL, this.$onTouchCancel);
        }
        get scrollTop() {
            return this.$scrollTop;
        }
        set scrollTop(scrollTop) {
            let bounds = this.$getContentBounds();
            let maxScrollTop = this.$scrollHeight - this.$height;
            scrollTop = Math.max(0, Math.min(scrollTop, maxScrollTop));
            if (scrollTop !== this.$scrollTop) {
                this.$scrollTop = scrollTop;
                this.$markDirty();
            }
            bounds.release();
        }
        get scrollLeft() {
            return this.$scrollLeft;
        }
        set scrollLeft(scrollLeft) {
            let bounds = this.$getContentBounds();
            let maxScrollLeft = this.$scrollWidth - this.width;
            scrollLeft = Math.max(0, Math.min(scrollLeft, maxScrollLeft));
            if (scrollLeft !== this.$scrollLeft) {
                this.$scrollLeft = scrollLeft;
                this.$markDirty();
            }
            bounds.release();
        }
        get scrollWidth() {
            return this.$scrollWidth;
        }
        get scrollHeight() {
            return this.$scrollHeight;
        }
        $getChildTransform(child) {
            let matrix = super.$getChildTransform(child);
            matrix.translate(-this.$scrollLeft, -this.$scrollTop);
            return matrix;
        }
        $resizeCanvas() {
            super.$resizeCanvas();
            let bounds = this.$getContentBounds();
            this.$scrollWidth = this.$scrollLeft + bounds.right + this.$anchorX;
            this.$scrollHeight = this.$scrollTop + bounds.bottom + this.$anchorY;
            this.scrollTop = this.$scrollTop;
            this.scrollLeft = this.$scrollLeft;
        }
        $onTouchStart(e) {
            this.$touchingX = e.localX;
            this.$touchingY = e.localY;
            this.$velocitiesX.length = 0;
            this.$velocitiesY.length = 0;
            this.$touchingTime = Date.now();
            this.$touchingId = e.identifier;
            if (this.$inertiaTween) {
                this.$inertiaTween.pause();
                this.$inertiaTween = null;
            }
        }
        $onTouchMove(e) {
            if (e.identifier !== this.$touchingId) {
                return;
            }
            let now = Date.now();
            let scrollTop = this.scrollTop;
            let scrollLeft = this.scrollLeft;
            let dt = now - this.$touchingTime;
            let velocitiesX = this.$velocitiesX;
            let velocitiesY = this.$velocitiesY;
            let offsetX = e.localX - this.$touchingX;
            let offsetY = e.localY - this.$touchingY;
            let scrollingView = Scroller.scrollingView || this;
            velocitiesX.push(offsetX / dt);
            velocitiesY.push(offsetY / dt);
            if (velocitiesX.length > 5) {
                velocitiesX.shift();
                velocitiesY.shift();
            }
            this.$touchingX = e.localX;
            this.$touchingY = e.localY;
            if (scrollingView === this) {
                this.$touchingTime = now;
                this.scrollTop -= offsetY;
                this.scrollLeft -= offsetX;
                if (this.$scrollLeft !== scrollLeft || this.$scrollTop !== scrollTop) {
                    Scroller.scrollingView = this;
                }
            }
        }
        $onTouchEnd(e) {
            if (e.identifier !== this.$touchingId) {
                return;
            }
            if (Scroller.scrollingView === this) {
                Scroller.scrollingView = null;
            }
            else {
                return;
            }
            let sumVelocityX = 0;
            let sumVelocityY = 0;
            let scrollTop = this.$scrollTop;
            let scrollLeft = this.$scrollLeft;
            let velocitiesX = this.$velocitiesX;
            let velocitiesY = this.$velocitiesY;
            let numVelocities = velocitiesX.length;
            for (let i = 0; i < numVelocities; ++i) {
                sumVelocityX += velocitiesX[i];
                sumVelocityY += velocitiesY[i];
            }
            let velocityX = sumVelocityX / numVelocities;
            let velocityY = sumVelocityY / numVelocities;
            let absVelocityX = Math.abs(velocityX);
            let absVelocityY = Math.abs(velocityY);
            if (absVelocityX > 0.01 || absVelocityY > 0.01) {
                let duration = Math.max(absVelocityX, absVelocityY, 1) * 1000;
                this.$inertiaTween = Tween.get(this).to({
                    scrollTop: scrollTop - velocityY * (absVelocityY + 1) * 200,
                    scrollLeft: scrollLeft - velocityX * (absVelocityX + 1) * 200
                }, duration, Ease.easeOutQuart).play();
            }
            this.$touchingId = null;
        }
        $onTouchCancel(e) {
            if (e.identifier === this.$touchingId) {
                this.$touchingId = null;
            }
        }
        $emitRemovedFromStage() {
            super.$emitRemovedFromStage();
            if (this.$inertiaTween) {
                this.$inertiaTween.pause();
                this.$inertiaTween = null;
            }
        }
    }

    var Scroller$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Scroller: Scroller
    });

    class Image extends Layer {
        constructor(texture, width, height) {
            super();
            this.$texture = null;
            this.$fillMode = Image.SCALE;
            this.$clipRect = null;
            this.$scale9Grid = null;
            this.$pattern = null;
            this.$boundOnTextureLoad = this.$onTextureLoad.bind(this);
            if (texture) {
                this.$width = width;
                this.$height = height;
                this.texture = texture;
            }
        }
        get texture() {
            return this.$texture;
        }
        set texture(texture) {
            if (this.$texture) {
                this.$texture.off(Event.LOAD, this.$boundOnTextureLoad);
            }
            this.$texture = texture;
            if (texture) {
                texture.on(Event.LOAD, this.$boundOnTextureLoad);
            }
            else {
                this.$updatePattern();
                this.$resizeCanvas();
            }
        }
        get fillMode() {
            return this.$fillMode;
        }
        set fillMode(fillMode) {
            this.$fillMode = fillMode;
            this.$updatePattern();
            this.$markDirty();
        }
        get clipRect() {
            return this.$clipRect;
        }
        set clipRect(clipRect) {
            this.$clipRect = clipRect;
            this.$markDirty();
        }
        get scale9Grid() {
            return this.$scale9Grid;
        }
        set scale9Grid(scale9Grid) {
            this.$scale9Grid = scale9Grid;
            this.$markDirty();
        }
        $onTextureLoad() {
            this.$updatePattern();
            this.$resizeCanvas();
            this.$texture.off(Event.LOAD, this.$boundOnTextureLoad);
        }
        $updatePattern() {
            let width = this.$width;
            let height = this.$height;
            let texture = this.$texture;
            let fillMode = this.$fillMode;
            if ((width || height) && texture && fillMode && fillMode !== Image.SCALE) {
                this.$pattern = this.$context.createPattern(texture.element, fillMode);
            }
            else {
                this.$pattern = null;
            }
        }
        $getContentBounds() {
            let texture = this.$texture;
            let clipRect = this.$clipRect;
            let bounds = super.$getContentBounds();
            bounds.x = Math.min(bounds.left, -this.$anchorX);
            bounds.y = Math.min(bounds.top, -this.$anchorY);
            if (clipRect) {
                bounds.width = Math.max(bounds.width, clipRect.width);
                bounds.height = Math.max(bounds.height, clipRect.height);
            }
            else if (texture) {
                bounds.width = Math.max(bounds.width, texture.width);
                bounds.height = Math.max(bounds.height, texture.height);
            }
            return bounds;
        }
        $drawPattern(targetX, targetY, targetW, targetH) {
            let ctx = this.$context;
            let texture = this.$texture;
            let pattern = this.$pattern;
            let scale = Layer.pixelRatio / texture.pixelRatio;
            scale !== 1 && ctx.scale(scale, scale);
            ctx.fillStyle = pattern;
            ctx.fillRect(targetX, targetY, targetW, targetH);
        }
        $drawTexture(sourceX, sourceY, sourceW, sourceH, targetX, targetY, targetW, targetH) {
            if (sourceW <= 0 || sourceH <= 0 || targetW <= 0 || targetH <= 0) {
                return;
            }
            let ctx = this.$context;
            let texture = this.$texture;
            let pixelRatio = texture.pixelRatio;
            if (sourceW > 0 && sourceH > 0 && targetW > 0 && targetH > 0) {
                ctx.drawImage(texture.element, sourceX * pixelRatio, sourceY * pixelRatio, sourceW * pixelRatio, sourceH * pixelRatio, targetX, targetY, targetW, targetH);
            }
        }
        $render() {
            if (!this.$dirty) {
                return 0;
            }
            let canvas = this.$canvas;
            let anchorX = this.$anchorX;
            let anchorY = this.$anchorY;
            let texture = this.$texture;
            let pattern = this.$pattern;
            let clipRect = this.$clipRect;
            let scale9Grid = this.$scale9Grid;
            let drawCalls = super.$render();
            let pixelRatio = Layer.pixelRatio;
            let x = -anchorX * pixelRatio;
            let y = -anchorY * pixelRatio;
            let width = canvas.width;
            let height = canvas.height;
            let clipX = clipRect ? clipRect.x : 0;
            let clipY = clipRect ? clipRect.y : 0;
            let clipWidth = clipRect ? clipRect.width : texture ? texture.width : 0;
            let clipHeight = clipRect ? clipRect.height : texture ? texture.height : 0;
            if (!texture) {
                return drawCalls;
            }
            else if (pattern) {
                this.$drawPattern(x, y, width, height);
            }
            else if (scale9Grid) {
                let sourceX0 = clipX;
                let sourceY0 = clipY;
                let sourceW0 = scale9Grid.x;
                let sourceH0 = scale9Grid.y;
                let sourceX1 = sourceX0 + sourceW0;
                let sourceY1 = sourceY0 + sourceH0;
                let sourceW1 = scale9Grid.width;
                let sourceH1 = scale9Grid.height;
                let sourceX2 = sourceX1 + sourceW1;
                let sourceY2 = sourceY1 + sourceH1;
                let sourceW2 = clipWidth - sourceW0 - sourceW1;
                let sourceH2 = clipHeight - sourceH0 - sourceH1;
                let targetX0 = -anchorX * pixelRatio;
                let targetY0 = -anchorY * pixelRatio;
                let targetW0 = sourceW0 * pixelRatio;
                let targetH0 = sourceH0 * pixelRatio;
                let targetX1 = targetX0 + targetW0;
                let targetY1 = targetY0 + targetH0;
                let targetW1 = width - (sourceW0 + sourceW2) * pixelRatio;
                let targetH1 = height - (sourceH0 + sourceH2) * pixelRatio;
                let targetX2 = targetX1 + targetW1;
                let targetY2 = targetY1 + targetH1;
                let targetW2 = width - targetW0 - targetW1;
                let targetH2 = height - targetH0 - targetH1;
                this.$drawTexture(sourceX0, sourceY0, sourceW0, sourceH0, targetX0, targetY0, targetW0, targetH0);
                this.$drawTexture(sourceX1, sourceY0, sourceW1, sourceH0, targetX1, targetY0, targetW1, targetH0);
                this.$drawTexture(sourceX2, sourceY0, sourceW2, sourceH0, targetX2, targetY0, targetW2, targetH0);
                this.$drawTexture(sourceX0, sourceY1, sourceW0, sourceH1, targetX0, targetY1, targetW0, targetH1);
                this.$drawTexture(sourceX1, sourceY1, sourceW1, sourceH1, targetX1, targetY1, targetW1, targetH1);
                this.$drawTexture(sourceX2, sourceY1, sourceW2, sourceH1, targetX2, targetY1, targetW2, targetH1);
                this.$drawTexture(sourceX0, sourceY2, sourceW0, sourceH2, targetX0, targetY2, targetW0, targetH2);
                this.$drawTexture(sourceX1, sourceY2, sourceW1, sourceH2, targetX1, targetY2, targetW1, targetH2);
                this.$drawTexture(sourceX2, sourceY2, sourceW2, sourceH2, targetX2, targetY2, targetW2, targetH2);
            }
            else {
                this.$drawTexture(clipX, clipY, clipWidth, clipHeight, x, y, width, height);
            }
            return drawCalls;
        }
    }
    Image.SCALE = 'scale';
    Image.REPEAT = 'repeat';
    Image.REPEAT_X = 'repeat-x';
    Image.REPEAT_Y = 'repeat-y';

    var Image$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Image: Image
    });

    class Text extends Layer {
        constructor(text, options = {}) {
            super();
            this.$text = '';
            this.$color = 'black';
            this.$fontSize = Text.defaultFontSize;
            this.$fontStyle = 'normal';
            this.$fontWeight = 'normal';
            this.$textAlign = 'left';
            this.$verticalAlign = 'top';
            this.$lineHeight = 1.2;
            this.$strokeSize = 0;
            this.$strokeColor = null;
            this.$fontFamily = 'Helvetica';
            this.$multiline = false;
            this.$breakWord = false;
            this.$autoFitSize = false;
            this.$minFontSize = 0;
            this.$explicitSize = 0;
            this.$lines = [];
            this.$text = text || this.$text;
            this.$color = options.color || this.$color;
            this.$fontSize = options.fontSize || this.$fontSize;
            this.$fontStyle = options.fontStyle || this.$fontStyle;
            this.$fontWeight = options.fontWeight || this.$fontWeight;
            this.$textAlign = options.textAlign || this.$textAlign;
            this.$verticalAlign = options.verticalAlign || this.$verticalAlign;
            this.$lineHeight = options.lineHeight || this.$lineHeight;
            this.$strokeSize = options.strokeSize || this.$strokeSize;
            this.$strokeColor = options.strokeColor || this.$strokeColor;
            this.$fontFamily = options.fontFamily || this.$fontFamily;
            this.$multiline = options.multiline || this.$multiline;
            this.$breakWord = options.breakWord || this.$breakWord;
            this.$autoFitSize = options.autoFitSize || this.autoFitSize;
            this.$minFontSize = options.minFontSize || this.minFontSize;
            this.$resizeCanvas();
        }
        get text() {
            return this.$text;
        }
        set text(text) {
            this.$text = text;
            this.$resizeCanvas();
        }
        get color() {
            return this.$color;
        }
        set color(color) {
            this.$color = color;
            this.$markDirty();
        }
        get fontSize() {
            return this.$fontSize;
        }
        set fontSize(fontSize) {
            this.$fontSize = fontSize;
            this.$resizeCanvas();
        }
        get fontStyle() {
            return this.$fontStyle;
        }
        set fontStyle(fontStyle) {
            this.$fontStyle = fontStyle;
            this.$resizeCanvas();
        }
        get fontWeight() {
            return this.$fontWeight;
        }
        set fontWeight(fontWeight) {
            this.$fontWeight = fontWeight;
            this.$resizeCanvas();
        }
        get textAlign() {
            return this.$textAlign;
        }
        set textAlign(textAlign) {
            this.$textAlign = textAlign;
            this.$markDirty();
        }
        get verticalAlign() {
            return this.$verticalAlign;
        }
        set verticalAlign(verticalAlign) {
            this.$verticalAlign = verticalAlign;
            this.$markDirty();
        }
        get lineHeight() {
            return this.$lineHeight;
        }
        set lineHeight(lineHeight) {
            this.$lineHeight = lineHeight;
            this.$resizeCanvas();
        }
        get strokeSize() {
            return this.$strokeSize;
        }
        set strokeSize(strokeSize) {
            this.$strokeSize = strokeSize;
            this.$markDirty();
        }
        get strokeColor() {
            return this.$strokeColor;
        }
        set strokeColor(strokeColor) {
            this.$strokeColor = strokeColor;
            this.$markDirty();
        }
        get fontFamily() {
            return this.$fontFamily;
        }
        set fontFamily(fontFamily) {
            this.$fontFamily = fontFamily;
            this.$resizeCanvas();
        }
        get multiline() {
            return this.$multiline;
        }
        set multiline(multiline) {
            this.$multiline = multiline;
            this.$resizeCanvas();
        }
        get breakWord() {
            return this.$breakWord;
        }
        set breakWord(breakWord) {
            this.$breakWord = breakWord;
            this.$resizeCanvas();
        }
        get autoFitSize() {
            return this.$autoFitSize;
        }
        set autoFitSize(autoFitSize) {
            this.$autoFitSize = autoFitSize;
            this.$resizeCanvas();
        }
        get minFontSize() {
            return this.$minFontSize;
        }
        set minFontSize(minFontSize) {
            this.$minFontSize = minFontSize;
            this.$resizeCanvas();
        }
        $updateContext() {
            let ctx = this.$context;
            let fontStyle = this.$fontStyle;
            let fontWeight = this.$fontWeight;
            let pixelRatio = Layer.pixelRatio;
            let fontSize = this.$explicitSize || this.$fontSize;
            let sizeStr = fontSize * pixelRatio + 'px';
            ctx.font = fontStyle + ' ' + fontWeight + ' ' + sizeStr + ' ' + this.$fontFamily;
            ctx.textAlign = this.$textAlign;
            ctx.textBaseline = 'top';
            ctx.fillStyle = this.$color;
            ctx.lineWidth = this.$strokeSize * pixelRatio;
            ctx.strokeStyle = this.$strokeColor;
        }
        $divideUnits() {
            let units;
            let text = this.$text;
            let breakWord = this.$breakWord;
            let wordRe = Text.wordRe;
            let boundaryRe = Text.boundaryRe;
            if (breakWord) {
                units = text.split('');
            }
            else {
                let words = text.split(boundaryRe);
                units = [];
                for (let unit of words) {
                    if (wordRe.test(unit)) {
                        units.push(unit);
                    }
                    else {
                        units = units.concat(unit.split(''));
                    }
                }
            }
            return units;
        }
        $divideLines() {
            let text = this.$text;
            if (!this.$multiline) {
                this.$lines = [text];
                return;
            }
            else if (!this.$width) {
                this.$lines = text.split('\n');
                return;
            }
            let line = '';
            let ctx = this.$context;
            let lines = this.$lines = [];
            let units = this.$divideUnits();
            let width = this.$width * Layer.pixelRatio;
            this.$updateContext();
            for (let unit of units) {
                if (unit === '\n') {
                    lines.push(line);
                    line = '';
                    continue;
                }
                let lineWidth = ctx.measureText(line + unit).width;
                if (lineWidth <= width) {
                    line += unit;
                }
                else {
                    line && lines.push(line);
                    line = unit;
                }
            }
            lines.push(line);
        }
        $resizeCanvas() {
            let width = this.$width;
            let height = this.$height;
            this.$divideLines();
            if (this.$autoFitSize && (width || height)) {
                let minFontSize = this.$minFontSize || 1;
                this.$explicitSize = this.$fontSize;
                while (this.$explicitSize > minFontSize) {
                    let bounds = this.$getContentBounds();
                    if ((width && bounds.width > width) || (height && bounds.height > height)) {
                        --this.$explicitSize;
                    }
                    else {
                        break;
                    }
                    bounds.release();
                }
            }
            super.$resizeCanvas();
        }
        $getContentBounds() {
            let ctx = this.$context;
            let bounds = super.$getContentBounds();
            let lines = this.$lines;
            let lineHeight = this.$lineHeight;
            let pixelRatio = Layer.pixelRatio;
            let fontSize = this.$explicitSize || this.$fontSize;
            this.$updateContext();
            for (let line of lines) {
                bounds.width = Math.max(bounds.width, ctx.measureText(line).width / pixelRatio);
            }
            bounds.height = Math.max(bounds.height, fontSize * lineHeight * lines.length);
            return bounds;
        }
        $render() {
            if (!this.$dirty) {
                return 0;
            }
            let x = 0;
            let y = 0;
            let width = this.width;
            let height = this.height;
            let anchorX = this.anchorX;
            let anchorY = this.anchorY;
            let ctx = this.$context;
            let lines = this.$lines;
            let color = this.$color;
            let textAlign = this.$textAlign;
            let verticalAlign = this.$verticalAlign;
            let lineHeight = this.$lineHeight;
            let strokeSize = this.$strokeSize;
            let strokeColor = this.$strokeColor;
            let pixelRatio = Layer.pixelRatio;
            let fontSize = this.$explicitSize || this.$fontSize;
            let drawCalls = super.$render();
            this.$updateContext();
            if (textAlign === 'center') {
                x = width * pixelRatio / 2 - anchorX * pixelRatio;
            }
            else if (textAlign === 'right') {
                x = width * pixelRatio - anchorX * pixelRatio;
            }
            else {
                x = -anchorX * pixelRatio;
            }
            if (verticalAlign === 'middle') {
                y = (height - fontSize * lineHeight * (lines.length - 1) - fontSize) * pixelRatio / 2 - anchorY * pixelRatio;
            }
            else if (verticalAlign === 'bottom') {
                y = (height - fontSize * lineHeight * (lines.length - 1) - fontSize) * pixelRatio - anchorY * pixelRatio;
            }
            else {
                y = -anchorY * pixelRatio;
            }
            for (let line of lines) {
                if (color) {
                    ctx.fillText(line, x, y);
                }
                if (strokeSize && strokeColor) {
                    ctx.strokeText(line, x, y);
                }
                y += fontSize * lineHeight * pixelRatio;
            }
            return drawCalls;
        }
    }
    Text.defaultFontSize = 16;
    Text.wordRe = /\w+/;
    Text.boundaryRe = /\b/;

    var Text$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Text: Text
    });

    class Input extends Text {
        constructor(value, options = {}) {
            super('', options);
            this.$value = '';
            this.$type = 'text';
            this.$maxLength = 0xffffff;
            this.$placeholder = '';
            this.$placeholderColor = '#888';
            this.$explicitColor = 'black';
            this.$value = value || this.$value;
            this.$type = options.type || this.$type;
            this.$maxLength = options.maxLength || this.$maxLength;
            this.$placeholder = options.placeholder || this.$placeholder;
            this.$placeholderColor = options.placeholderColor || this.$placeholderColor;
            this.$boundFocus = this.focus.bind(this);
            this.$updateText();
            this.on(TouchEvent.TOUCH_TAP, this.$onTouchTap);
        }
        set text(text) {
        }
        get value() {
            return this.$value;
        }
        set value(value) {
            this.$value = value;
            this.$updateText();
        }
        get type() {
            return this.$type;
        }
        set type(type) {
            this.$type = type;
            this.$updateText();
        }
        get color() {
            return this.$explicitColor;
        }
        set color(color) {
            this.$explicitColor = color;
            if (this.$value) {
                this.$color = color;
            }
            else {
                this.$color = this.$placeholderColor;
            }
            this.$markDirty();
        }
        get maxLength() {
            return this.$maxLength;
        }
        set maxLength(maxLength) {
            this.$maxLength = maxLength;
        }
        get placeholder() {
            return this.$placeholder;
        }
        set placeholder(placeholder) {
            this.$placeholder = placeholder;
            this.$updateText();
        }
        get placeholderColor() {
            return this.$placeholderColor;
        }
        set placeholderColor(placeholderColor) {
            this.$placeholderColor = placeholderColor;
            this.$markDirty();
        }
        selectAll() {
            let element = this.$updateElement();
            this.focus();
            element.selectionStart = 0;
            element.selectionEnd = this.$value.length;
            return this;
        }
        focus() {
            let element = this.$updateElement();
            element.style.display = 'block';
            element.value = this.$value;
            element.focus();
            Input.$focusedInput = this;
            return this;
        }
        blur() {
            let element = this.$updateElement();
            element.style.display = 'none';
            element.blur();
            if (Input.$focusedInput === this) {
                this.value = element.value;
                Input.$focusedInput = null;
            }
            return this;
        }
        $updateText() {
            let text;
            let type = this.$type;
            let value = this.$value;
            if (type === 'password') {
                text = '';
                for (let i = 0, l = value.length; i < l; ++i) {
                    text += '•';
                }
            }
            else {
                text = value;
            }
            if (text) {
                this.$text = text;
            }
            else {
                this.$text = this.$placeholder;
            }
            this.color = this.$explicitColor;
            this.$resizeCanvas();
        }
        $updateElement() {
            let tagName = this.$multiline && this.$type === 'text' ? 'textarea' : 'input';
            let element = Input.$getElement(tagName);
            let isInput = tagName === 'input';
            if (isInput) {
                // @ts-ignore
                element.type = this.$type;
            }
            element.maxLength = this.$maxLength;
            element.placeholder = this.$placeholder;
            element.style.left = '0';
            element.style.bottom = '0';
            element.style.margin = '0';
            element.style.width = '100%';
            element.style.height = (isInput ? this.$fontSize * this.$lineHeight + 24 : this.height) + 'px';
            element.style.minHeight = isInput ? '0' : (this.$fontSize * this.$lineHeight) * 5 + 12 + 'px';
            element.style.maxHeight = '50%';
            element.style.padding = '6px';
            element.style.border = 'none';
            element.style.resize = 'none';
            element.style.outline = 'none';
            element.style.position = 'fixed';
            element.style.boxSizing = 'border-box';
            element.style.color = this.$explicitColor;
            element.style.fontSize = this.$fontSize + 'px';
            element.style.fontStyle = this.$fontStyle;
            element.style.fontFamily = this.$fontFamily;
            element.style.textAlign = this.$textAlign;
            element.style.lineHeight = this.$lineHeight + '';
            element.style.fontWeight = this.$fontWeight + '';
            element.style.wordBreak = this.$breakWord ? 'break-all' : 'normal';
            element.style.background = this.$background;
            // element.style.webkitTapHighlightColor = 'transparent';
            element.style.boxShadow = '0 0 8px #aaa';
            return element;
        }
        $markDirty(sizeDirty) {
            super.$markDirty(sizeDirty);
            if (Input.$focusedInput) {
                this.$updateElement();
            }
        }
        $onTouchTap() {
            setTimeout(this.$boundFocus, 100);
        }
        static $getElement(tagName) {
            let element;
            if (tagName === 'input') {
                element = this.$inputElement;
            }
            else if (tagName === 'textarea') {
                element = this.$textAreaElement;
            }
            if (!element) {
                element = document.createElement(tagName);
                element.style.display = 'none';
                document.body.appendChild(element);
                element.addEventListener('input', () => {
                    Input.$focusedInput.value = element.value;
                });
                element.addEventListener('blur', () => {
                    Input.$focusedInput.blur();
                });
                if (tagName === 'input') {
                    element.addEventListener('keydown', e => {
                        if (e.key === 'Enter' || e.keyCode === 13) {
                            Input.$focusedInput.blur();
                        }
                    });
                    this.$inputElement = element;
                }
                else if (tagName === 'textarea') {
                    this.$textAreaElement = element;
                }
            }
            return element;
        }
    }

    var Input$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Input: Input
    });

    class MovieClip extends Image {
        constructor(texture, frames) {
            super(texture);
            this.$loop = true;
            this.$interval = 30;
            this.$paused = false;
            this.$currentFrame = 0;
            this.$frames = null;
            this.$frames = frames;
            this.$boundNextFrame = this.nextFrame.bind(this);
            this.play();
        }
        get loop() {
            return this.$loop;
        }
        set loop(loop) {
            this.$loop = loop;
        }
        get interval() {
            return this.$interval;
        }
        set interval(interval) {
            this.$interval = interval;
        }
        get paused() {
            return this.$paused;
        }
        get currentFrame() {
            return this.$currentFrame;
        }
        get totalFrames() {
            return this.$frames.length;
        }
        play() {
            this.off(Event.ADDED_TO_STAGE, this.play);
            return this.gotoAndPlay(this.$currentFrame);
        }
        pause() {
            let ticker = this.ticker;
            this.$paused = true;
            if (ticker) {
                ticker.clearTimeout(this.$timer);
            }
            this.off(Event.ADDED_TO_STAGE, this.play);
            return this;
        }
        nextFrame() {
            return this.gotoAndPlay(this.$currentFrame + 1);
        }
        gotoAndPlay(frame) {
            this.$paused = false;
            this.$gotoFrame(frame);
            let loop = this.$loop;
            let ticker = this.ticker;
            let frames = this.$frames;
            let totalFrames = frames.length;
            let frameData = frames[this.$currentFrame];
            if (!frameData) {
                return;
            }
            if (ticker) {
                ticker.clearTimeout(this.$timer);
                if (frame < totalFrames - 1 || loop) {
                    this.$timer = ticker.setTimeout(this.$boundNextFrame, frameData.interval || this.$interval);
                }
            }
            else {
                this.on(Event.ADDED_TO_STAGE, this.play);
            }
            return this;
        }
        gotoAndStop(frame) {
            this.$paused = true;
            this.$gotoFrame(frame);
            return this;
        }
        $gotoFrame(frame) {
            let totalFrames = this.$frames.length;
            if (frame < 0 || frame >= totalFrames) {
                frame = (frame + totalFrames) % totalFrames;
            }
            if (frame < 0) {
                frame = 0;
            }
            let frameData = this.$frames[frame];
            if (!frameData) {
                return;
            }
            this.$currentFrame = frame;
            this.clipRect = frameData.clip;
            if (this.stage && frameData.callback) {
                frameData.callback.call(this);
            }
        }
    }

    var MovieClip$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        MovieClip: MovieClip
    });

    class Request extends EventEmitter {
        constructor(url, options) {
            super();
            this.$xhr = new XMLHttpRequest();
            let method;
            let headers;
            let data;
            let responseType;
            let xhr = this.$xhr;
            if (url instanceof Object) {
                options = url;
                url = options.url;
            }
            if (options) {
                url = options.url || url;
                method = options.method || 'get';
                headers = options.headers;
                data = options.data;
                responseType = options.responseType;
            }
            if (data instanceof Object) {
                let contentType = Request.$getContentType(headers);
                if (method.toLowerCase() === 'get') {
                    let qs = Request.$getQueryString(data);
                    url += url.indexOf('?') < 0 ? '?' + qs : '&' + qs;
                }
                else if (contentType === 'application/x-www-form-urlencoded') {
                    data = Request.$getQueryString(data);
                }
                else if (contentType === 'application/json') {
                    data = JSON.stringify(data);
                }
            }
            xhr.open(method || 'get', url);
            xhr.responseType = responseType;
            if (headers) {
                Object.keys(headers).forEach(key => {
                    xhr.setRequestHeader(key, headers[key]);
                });
            }
            xhr.addEventListener('abort', this.$onAbort.bind(this));
            xhr.addEventListener('progress', this.$onProgress.bind(this));
            xhr.addEventListener('readystatechange', this.$onReadyStateChange.bind(this));
            xhr.send(data);
        }
        get status() {
            return this.$xhr.status;
        }
        get response() {
            return this.$xhr.response;
        }
        get responseHeaders() {
            let headers = {};
            let str = this.$xhr.getAllResponseHeaders();
            let arr = str.split('\n');
            for (let header of arr) {
                let index = header.indexOf(':');
                let key = header.slice(0, index).trim();
                let value = header.slice(index + 1).trim();
                if (headers[key]) {
                    if (!Array.isArray(headers[key])) {
                        headers[key] = [headers[key]];
                    }
                    headers[key].push(value);
                }
                else if (key) {
                    headers[key] = value;
                }
            }
            return headers;
        }
        abort() {
            this.$xhr.abort();
        }
        $onAbort() {
            this.emit(Event.ABORT);
        }
        $onProgress(e) {
            if (e.lengthComputable) {
                let event = Event.create(Event.PROGRESS, e.loaded / e.total);
                this.emit(event);
                event.release();
            }
        }
        $onReadyStateChange(e) {
            let xhr = this.$xhr;
            if (xhr.readyState === 4) {
                if (xhr.status >= 400 || xhr.status === 0) {
                    this.emit(Event.ERROR, e);
                }
                else {
                    let event = Event.create(Event.LOAD, xhr.response);
                    this.emit(event);
                    event.release();
                }
                this.emit(Event.COMPLETE);
            }
        }
        static $getContentType(headers) {
            for (let key in headers) {
                if (key.toLowerCase() === 'content-type') {
                    return headers[key].toLowerCase();
                }
            }
            return null;
        }
        static $getQueryString(data) {
            return Object.keys(data).map(key => key + '=' + data[key]).join('&');
        }
    }

    var Request$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Request: Request
    });

    class Media extends EventEmitter {
        constructor(stage) {
            super();
            this.$loaded = false;
            this.$errored = false;
            this.$stage = stage;
            this.$boundOnLoad = this.$onLoad.bind(this);
            this.$boundOnError = this.$onError.bind(this);
        }
        get element() {
            return this.$element;
        }
        get url() {
            return this.$element.src || '';
        }
        set url(url) {
            this.$loaded = false;
            this.$errored = false;
            this.$element.src = url;
        }
        on(type, listener) {
            super.on(type, listener);
            if (type === Event.LOAD && this.$loaded) {
                let event = Event.create(type);
                listener.call(this, event);
                event.release();
            }
            else if (type === Event.ERROR && this.$errored) {
                let event = Event.create(type);
                listener.call(this, event);
                event.release();
            }
            return this;
        }
        $onLoad() {
            this.$loaded = true;
            this.emit(Event.LOAD);
            this.$element.removeEventListener(Event.LOAD, this.$boundOnLoad);
        }
        $onError() {
            this.$errored = true;
            this.emit(Event.ERROR);
            this.$element.removeEventListener(Event.ERROR, this.$boundOnError);
        }
    }

    var Media$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Media: Media
    });

    class Sound extends Media {
        constructor(stage, url) {
            super(stage);
            this.$loops = 1;
            this.$startTime = 0;
            this.$paused = true;
            let audio = document.createElement('audio');
            audio.crossOrigin = '*';
            audio.addEventListener('canplaythrough', this.$boundOnLoad);
            audio.addEventListener('error', this.$boundOnError);
            audio.addEventListener('ended', this.$onEnded.bind(this));
            this.$element = audio;
            this.$boundOnTouch = this.$onTouch.bind(this);
            if (url) {
                this.url = url;
            }
            stage.ticker.on(Event.TICKER_PAUSE, this.$onTickerPause.bind(this));
            stage.ticker.on(Event.TICKER_RESUME, this.$onTickerResume.bind(this));
            stage.on(Event.REMOVED_FROM_STAGE, this.$onRemovedFromStage.bind(this));
        }
        get element() {
            return this.$element;
        }
        get url() {
            return this.$element.src;
        }
        set url(url) {
            this.$paused = true;
            this.$element.src = url;
            this.$element.load();
            if (url.indexOf('data:') === 0) {
                this.$stage.ticker.setTimeout(this.$boundOnLoad);
            }
        }
        get volume() {
            return this.$element.volume;
        }
        set volume(volume) {
            this.$element.volume = volume;
        }
        get paused() {
            return this.$paused;
        }
        play(startTime = 0, loops = 1) {
            this.$loops = loops;
            this.$startTime = startTime;
            this.$element.currentTime = startTime;
            this.$paused = false;
            this.$checkStatus();
            return this;
        }
        stop() {
            this.$paused = true;
            this.$element.pause();
            return this;
        }
        $checkOnTouch() {
            document.addEventListener('click', this.$boundOnTouch);
            document.addEventListener('touchend', this.$boundOnTouch);
        }
        $checkStatus() {
            let promise = this.$element.play();
            if (promise) {
                promise.catch();
            }
            if (this.$paused) {
                this.$element.pause();
            }
        }
        $onTouch() {
            this.$checkStatus();
            document.removeEventListener('click', this.$boundOnTouch);
            document.removeEventListener('touchend', this.$boundOnTouch);
        }
        $onEnded() {
            this.emit(Event.ENDED);
            if (this.$loops === 1) {
                this.stop();
                this.emit(Event.SOUND_COMPLETE);
            }
            else if (this.$loops === 0) {
                this.play(this.$startTime, 0);
            }
            else {
                this.play(this.$startTime, this.$loops - 1);
            }
        }
        $onTickerPause() {
            if (!this.$paused) {
                this.$element.pause();
            }
        }
        $onTickerResume() {
            if (!this.$paused) {
                this.$checkStatus();
            }
        }
        $onRemovedFromStage() {
            this.stop();
            document.removeEventListener('click', this.$boundOnTouch);
            document.removeEventListener('touchend', this.$boundOnTouch);
        }
        $onLoad() {
            super.$onLoad();
            let promise = this.$element.play();
            if (promise) {
                promise
                    .then(this.$checkStatus.bind(this))
                    .catch(this.$checkOnTouch.bind(this));
            }
            else {
                this.$checkOnTouch();
            }
        }
    }

    var Sound$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Sound: Sound
    });

    class Texture extends Media {
        constructor(stage, url) {
            super(stage);
            this.pixelRatio = Texture.defaultPixelRatio;
            let image = document.createElement('img');
            image.crossOrigin = '*';
            image.addEventListener('load', this.$boundOnLoad);
            image.addEventListener('error', this.$boundOnError);
            this.$element = image;
            if (url) {
                this.url = url;
            }
        }
        get element() {
            return this.$element;
        }
        get width() {
            return this.$element.width / this.pixelRatio;
        }
        get height() {
            return this.$element.height / this.pixelRatio;
        }
    }
    Texture.defaultPixelRatio = 1;

    var Texture$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Texture: Texture
    });

    class ResourceManager extends EventEmitter {
        constructor(stage, list, options) {
            super();
            this.$errorCount = 0;
            this.$loadedCount = 0;
            this.$loadingCount = 0;
            this.$stage = stage;
            this.threads = options && options.threads || 2;
            this.timeout = options && options.timeout || 10000;
            this.retryTimes = options && options.retryTimes || 3;
            this.$list = list.concat();
            this.$total = list.length;
            this.$resources = {};
            this.$checkPendingTasks();
        }
        get total() {
            return this.$total;
        }
        get errorCount() {
            return this.$errorCount;
        }
        get loadedCount() {
            return this.$loadedCount;
        }
        $checkPendingTasks() {
            if (this.$loadingCount < this.threads && this.$list.length > 0) {
                ++this.$loadingCount;
                this.$load(this.$list.shift(), 1);
            }
        }
        $load(info, attempts) {
            let timer;
            let resource;
            let name = info.name;
            let type = info.type;
            let url = info.url;
            let total = this.$total;
            let stage = this.$stage;
            let ticker = stage.ticker;
            let resources = this.$resources;
            let retryTimes = this.retryTimes;
            let successCallback = () => {
                let errorCount = this.$errorCount;
                let loadedCount = ++this.$loadedCount;
                --this.$loadingCount;
                ticker.clearTimeout(timer);
                if (resource instanceof Request) {
                    resources[name] = resource.response;
                }
                else if (resource instanceof Media) {
                    resources[name] = resource;
                }
                resource.off(Event.LOAD, successCallback);
                resource.off(Event.ERROR, errorCallback);
                let event = Event.create(Event.PROGRESS, (loadedCount + errorCount) / total);
                this.emit(event);
                event.release();
                if (loadedCount + errorCount === total) {
                    this.emit(Event.COMPLETE);
                }
                else {
                    this.$checkPendingTasks();
                }
            };
            let errorCallback = () => {
                if (attempts < retryTimes) {
                    this.$load(info, attempts + 1);
                }
                else {
                    --this.$loadingCount;
                    let loadedCount = this.$loadedCount;
                    let errorCount = ++this.$errorCount;
                    if (resource instanceof Request) {
                        resources[name] = resource.response;
                    }
                    else if (resource instanceof Media) {
                        resources[name] = resource;
                    }
                    this.emit(Event.PROGRESS, (loadedCount + errorCount) / total);
                    if (loadedCount + errorCount === total) {
                        this.emit(Event.COMPLETE);
                    }
                    else {
                        this.$checkPendingTasks();
                    }
                }
                ticker.clearTimeout(timer);
                resource.off(Event.LOAD, successCallback);
                resource.off(Event.ERROR, errorCallback);
            };
            if (type === ResourceManager.TYPE_TEXT) {
                resource = new Request(url, { responseType: 'text' });
                resource.on(Event.LOAD, successCallback);
                resource.on(Event.ERROR, errorCallback);
            }
            else if (type === ResourceManager.TYPE_JSON) {
                resource = new Request(url, { responseType: 'json' });
                resource.on(Event.LOAD, successCallback);
                resource.on(Event.ERROR, errorCallback);
            }
            else if (type === ResourceManager.TYPE_BINARY) {
                resource = new Request(url, { responseType: 'arraybuffer' });
                resource.on(Event.LOAD, successCallback);
                resource.on(Event.ERROR, errorCallback);
            }
            else if (type === ResourceManager.TYPE_TEXTURE) {
                resource = new Texture(stage, url);
                resource.on(Event.LOAD, successCallback);
                resource.on(Event.ERROR, errorCallback);
            }
            else if (type === ResourceManager.TYPE_SOUND) {
                resource = new Sound(stage, url);
                resource.on(Event.LOAD, successCallback);
                resource.on(Event.ERROR, errorCallback);
            }
            else {
                throw new Error('Unsupported resource type: ' + type);
            }
            timer = ticker.setTimeout(errorCallback, this.timeout);
        }
        has(name) {
            return !!this.$resources[name];
        }
        get(name) {
            return this.$resources[name];
        }
    }
    ResourceManager.TYPE_TEXT = 'text';
    ResourceManager.TYPE_JSON = 'json';
    ResourceManager.TYPE_BINARY = 'binary';
    ResourceManager.TYPE_TEXTURE = 'texture';
    ResourceManager.TYPE_SOUND = 'sound';

    var ResourceManager$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ResourceManager: ResourceManager
    });

    class Stage extends Layer {
        constructor(canvas) {
            super();
            this.$drawCalls = 0;
            this.$activated = false;
            this.$scaleMode = Stage.SHOW_ALL;
            this.$viewportWidth = 0;
            this.$viewportHeight = 0;
            this.$viewportBackground = null;
            this.$renderBounds = Rectangle.create();
            this.$ticker = new Ticker(this);
            this.$elementEvents = [];
            this.$viewportCanvas = canvas || document.createElement('canvas');
            this.$viewportContext = this.$viewportCanvas.getContext('2d');
            this.$boundResizeViewportCanvas = this.$resizeViewportCanvas.bind(this);
            this.$resizeViewportCanvas();
            this.$initEvents();
            this.width = 320;
            this.height = 568;
            if (!canvas) {
                this.$viewportCanvas.style.top = '0';
                this.$viewportCanvas.style.left = '0';
                this.$viewportCanvas.style.position = 'fixed';
                document.body.appendChild(this.$viewportCanvas);
            }
        }
        get x() {
            return 0;
        }
        set x(x) {
            this.$x = 0;
        }
        get y() {
            return 0;
        }
        set y(y) {
            this.$y = 0;
        }
        get ticker() {
            return this.$ticker;
        }
        get fps() {
            return this.$ticker.fps;
        }
        get drawCalls() {
            return this.$drawCalls;
        }
        get activated() {
            return this.$activated;
        }
        get scaleMode() {
            return this.$scaleMode;
        }
        set scaleMode(scaleMode) {
            if (this.scaleMode !== scaleMode) {
                this.$scaleMode = scaleMode;
                this.$resizeCanvas();
            }
        }
        get viewportCanvas() {
            return this.$viewportCanvas;
        }
        get viewportWidth() {
            return this.$viewportWidth ? this.$viewportWidth : this.$viewportCanvas.width / Layer.pixelRatio;
        }
        set viewportWidth(width) {
            if (this.$viewportWidth !== width) {
                this.$viewportWidth = width;
                this.$resizeViewportCanvas();
            }
        }
        get viewportHeight() {
            return this.$viewportHeight ? this.$viewportHeight : this.$viewportCanvas.height / Layer.pixelRatio;
        }
        set viewportHeight(height) {
            if (this.$viewportHeight !== height) {
                this.$viewportHeight = height;
                this.$resizeViewportCanvas();
            }
        }
        get viewportBackground() {
            return this.$viewportBackground;
        }
        set viewportBackground(viewportBackground) {
            this.$viewportBackground = viewportBackground;
            this.$viewportCanvas.style.background = viewportBackground;
        }
        createResourceManager(list, options) {
            return new ResourceManager(this, list, options);
        }
        removeSelf() {
            let canvas = this.$viewportCanvas;
            if (canvas.parentElement) {
                canvas.parentElement.removeChild(canvas);
            }
            if (this.$activated) {
                this.$activated = false;
                this.emit(Event.DEACTIVATE);
            }
            if (this.$stage) {
                this.$emitRemovedFromStage();
            }
            this.$removeElementEvents();
            return this;
        }
        $initEvents() {
            let prefix;
            let hiddenKey;
            let resizeTimer;
            let ticker = this.$ticker;
            let prefixes = ['', 'o', 'ms', 'moz', 'webkit'];
            for (prefix of prefixes) {
                hiddenKey = prefix ? prefix + 'Hidden' : 'hidden';
                if (document[hiddenKey] !== undefined) {
                    break;
                }
            }
            this.$addTouchEventListeners();
            this.$addElementEvent(window, 'orientationchange', () => {
                ticker.clearTimeout(resizeTimer);
                resizeTimer = ticker.setTimeout(this.$boundResizeViewportCanvas, 100);
            });
            this.$addElementEvent(window, prefix + 'visibilitychange', () => {
                let hidden = document[hiddenKey];
                this.$activated = !hidden;
                this.emit(hidden ? Event.DEACTIVATE : Event.ACTIVATE);
            });
            this.on(Event.ENTER_FRAME, this.$render);
            setTimeout(() => {
                if (!document[hiddenKey]) {
                    this.$activated = true;
                    this.emit(Event.ACTIVATE);
                }
                this.$emitAddedToStage(this);
            });
        }
        $addElementEvent(target, type, listener, options) {
            target.addEventListener(type, listener, options);
            this.$elementEvents.push({ target, type, listener });
        }
        $removeElementEvents() {
            let listeners = this.$elementEvents;
            for (let { target, type, listener } of listeners) {
                target.removeEventListener(type, listener);
            }
            listeners.length = 0;
        }
        $addTouchEventListeners() {
            if (document.ontouchstart !== undefined) {
                this.$addElementEvent(document, 'touchstart', event => {
                    this.$dispatchTouches(TouchEvent.TOUCH_START, event);
                });
                this.$addElementEvent(document, 'touchmove', event => {
                    this.$dispatchTouches(TouchEvent.TOUCH_MOVE, event);
                    event.preventDefault();
                }, { passive: false });
                this.$addElementEvent(document, 'touchend', event => {
                    this.$dispatchTouches(TouchEvent.TOUCH_END, event);
                    this.$dispatchTouches(TouchEvent.TOUCH_TAP, event);
                });
                this.$addElementEvent(document, 'touchcancel', event => {
                    this.$dispatchTouches(TouchEvent.TOUCH_CANCEL, event);
                });
            }
            else {
                let touching = false;
                this.$addElementEvent(window, 'mousedown', event => {
                    this.$dispatchTouchEvent(TouchEvent.TOUCH_START, event.pageX, event.pageY, 0);
                    touching = true;
                });
                this.$addElementEvent(window, 'mousemove', event => {
                    if (touching) {
                        this.$dispatchTouchEvent(TouchEvent.TOUCH_MOVE, event.pageX, event.pageY, 0);
                    }
                });
                this.$addElementEvent(window, 'mouseup', event => {
                    this.$dispatchTouchEvent(TouchEvent.TOUCH_END, event.pageX, event.pageY, 0);
                    touching = false;
                });
                this.$addElementEvent(window, 'click', event => {
                    this.$dispatchTouchEvent(TouchEvent.TOUCH_TAP, event.pageX, event.pageY, 0);
                });
                this.$addElementEvent(window, 'blur', () => {
                    this.$dispatchTouchEvent(TouchEvent.TOUCH_CANCEL, 0, 0, 0);
                    touching = false;
                });
            }
        }
        $dispatchTouches(type, event) {
            let touches = event['changedTouches'];
            for (let i = 0, l = touches.length; i < l; ++i) {
                let touch = touches[i];
                this.$dispatchTouchEvent(type, touch.pageX, touch.pageY, touch.identifier);
            }
        }
        $dispatchTouchEvent(type, pageX, pageY, identifier) {
            if (this.$ticker.paused || !this.$visible || !this.touchable) {
                return;
            }
            let event = TouchEvent.create(type);
            let scrollX = window.scrollX || 0;
            let scrollY = window.scrollY || 0;
            let width = this.$canvas.width;
            let height = this.$canvas.height;
            let bounds = this.$renderBounds;
            let pixelRatio = Layer.pixelRatio;
            let viewportBounds = this.$viewportCanvas.getBoundingClientRect();
            let x = (pageX - scrollX - viewportBounds.left - bounds.x / pixelRatio) * width / bounds.width - this.$anchorX;
            let y = (pageY - scrollY - viewportBounds.top - bounds.y / pixelRatio) * height / bounds.height - this.$anchorY;
            let matrix = this.$getTransform();
            let localPos = Vector.create(x, y).transform(matrix.invert()).subtract(this.$anchorX, this.$anchorY);
            let inside = this.$localHitTest(localPos);
            if (inside || type !== TouchEvent.TOUCH_START) {
                event.localX = localPos.x;
                event.localY = localPos.y;
                event.targetX = event.stageX = x;
                event.targetY = event.stageY = y;
                event.identifier = identifier;
                this.$emitTouchEvent(event, inside);
            }
            event.release();
            matrix.release();
            localPos.release();
        }
        $calculateRenderBounds() {
            let x = 0;
            let y = 0;
            let canvas = this.$canvas;
            let width = canvas.width;
            let height = canvas.height;
            let scaleMode = this.$scaleMode;
            let bounds = this.$renderBounds;
            let aspectRatio = width / height;
            let viewportCanvas = this.$viewportCanvas;
            let viewportWidth = viewportCanvas.width;
            let viewportHeight = viewportCanvas.height;
            let viewportAspectRatio = viewportWidth / viewportHeight;
            if (scaleMode === Stage.SHOW_ALL) {
                if (aspectRatio > viewportAspectRatio) {
                    width = viewportWidth;
                    height = width / aspectRatio;
                }
                else {
                    height = viewportHeight;
                    width = height * aspectRatio;
                }
            }
            else if (scaleMode === Stage.EXACT_FIT) {
                width = viewportWidth;
                height = viewportHeight;
            }
            else if (scaleMode === Stage.NO_BORDER) {
                if (aspectRatio < viewportAspectRatio) {
                    width = viewportWidth;
                    height = width / aspectRatio;
                }
                else {
                    height = viewportHeight;
                    width = height * aspectRatio;
                }
                x = (viewportWidth - width) / 2;
                y = (viewportHeight - height) / 2;
            }
            else if (scaleMode === Stage.FIXED_WIDTH) {
                width = viewportWidth;
                height = width / aspectRatio;
            }
            else if (scaleMode === Stage.FIXED_HEIGHT) {
                height = viewportHeight;
                width = height * aspectRatio;
            }
            else if (scaleMode === Stage.FIXED_WIDE) {
                if (viewportWidth > viewportHeight) {
                    width = viewportWidth;
                    height = width / aspectRatio;
                }
                else {
                    height = viewportHeight;
                    width = height * aspectRatio;
                }
            }
            else if (scaleMode === Stage.FIXED_NARROW) {
                if (viewportWidth < viewportHeight) {
                    width = viewportWidth;
                    height = width / aspectRatio;
                }
                else {
                    height = viewportHeight;
                    width = height * aspectRatio;
                }
            }
            if (width < viewportWidth) {
                x = (viewportWidth - width) / 2;
            }
            if (height < viewportHeight) {
                y = (viewportHeight - height) / 2;
            }
            bounds.x = x;
            bounds.y = y;
            bounds.width = width;
            bounds.height = height;
        }
        $resizeCanvas() {
            super.$resizeCanvas();
            this.$calculateRenderBounds();
        }
        $resizeViewportCanvas() {
            let canvas = this.$viewportCanvas;
            let pixelRatio = Layer.pixelRatio;
            let viewportWidth = this.$viewportWidth || window.innerWidth;
            let viewportHeight = this.$viewportHeight || window.innerHeight;
            let canvasWidth = viewportWidth * pixelRatio;
            let canvasHeight = viewportHeight * pixelRatio;
            if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
                canvas.width = canvasWidth;
                canvas.height = canvasHeight;
                canvas.style.width = viewportWidth + 'px';
                canvas.style.height = viewportHeight + 'px';
                this.$calculateRenderBounds();
                this.$markDirty();
                this.emit(Event.VIEWPORT_RESIZE);
            }
        }
        $render() {
            if (!this.$dirty) {
                this.$drawCalls = 0;
                return 0;
            }
            let drawCalls = super.$render();
            let canvas = this.$canvas;
            let ctx = this.$viewportContext;
            let bounds = this.$renderBounds;
            let viewportCanvas = this.$viewportCanvas;
            let viewportWidth = viewportCanvas.width;
            let viewportHeight = viewportCanvas.height;
            ctx.clearRect(0, 0, viewportWidth, viewportHeight);
            ctx.drawImage(canvas, (bounds.x + 0.5) | 0, (bounds.y + 0.5) | 0, (bounds.width + 0.5) | 0, (bounds.height + 0.5) | 0);
            this.$drawCalls = ++drawCalls;
            return drawCalls;
        }
    }
    Stage.SHOW_ALL = 'showAll';
    Stage.EXACT_FIT = 'exactFit';
    Stage.NO_SCALE = 'noScale';
    Stage.NO_BORDER = 'noBorder';
    Stage.FIXED_WIDE = 'fixedWide';
    Stage.FIXED_NARROW = 'fixedNarrow';
    Stage.FIXED_WIDTH = 'fixedWidth';
    Stage.FIXED_HEIGHT = 'fixedHeight';

    var Stage$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Stage: Stage
    });

    var index = {
        ...Ticker$1,
        ...Layer$1,
        ...Scroller$1,
        ...Image$1,
        ...Text$1,
        ...Input$1,
        ...MovieClip$1,
        ...Stage$1,
        ...Event$1,
        ...TouchEvent$1,
        ...EventEmitter$1,
        ...Matrix$1,
        ...Vector$1,
        ...Rectangle$1,
        ...Media$1,
        ...Texture$1,
        ...Sound$1,
        ...Ease$1,
        ...Tween$1,
        ...Request$1,
        ...ResourceManager$1
    };

    exports.Ease = Ease;
    exports.Event = Event;
    exports.EventEmitter = EventEmitter;
    exports.Image = Image;
    exports.Input = Input;
    exports.Layer = Layer;
    exports.Matrix = Matrix;
    exports.Media = Media;
    exports.MovieClip = MovieClip;
    exports.Rectangle = Rectangle;
    exports.Request = Request;
    exports.ResourceManager = ResourceManager;
    exports.Scroller = Scroller;
    exports.Sound = Sound;
    exports.Stage = Stage;
    exports.Text = Text;
    exports.Texture = Texture;
    exports.Ticker = Ticker;
    exports.TouchEvent = TouchEvent;
    exports.Tween = Tween;
    exports.Vector = Vector;
    exports.default = index;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
