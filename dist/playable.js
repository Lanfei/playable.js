(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.playable = {}));
})(this, (function (exports) { 'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var Event = /** @class */ (function () {
        function Event(type, data) {
            if (data === void 0) { data = null; }
            this.type = null;
            this.data = null;
            this.target = null;
            this.currentTarget = null;
            this.$init(type, data);
        }
        Event.prototype.$init = function (type, data) {
            if (data === void 0) { data = null; }
            this.type = type;
            this.data = data;
            return this;
        };
        Event.prototype.release = function () {
            this.type = null;
            this.data = null;
            Event.recycle(this);
        };
        Event.create = function (type, data) {
            if (data === void 0) { data = null; }
            var pool = this.$pool;
            if (pool.length > 0) {
                return pool.pop().$init(type, data);
            }
            else {
                return new Event(type, data);
            }
        };
        Event.recycle = function (e) {
            this.$pool.push(e);
        };
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
        return Event;
    }());

    var Event$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Event: Event
    });

    var EventEmitter = /** @class */ (function () {
        function EventEmitter() {
            this.$events = {};
            this.$emittingType = null;
            this.$removedListeners = [];
        }
        EventEmitter.prototype.on = function (type, listener) {
            var listeners = this.$events[type] || [];
            listeners.push(listener);
            this.$events[type] = listeners;
            return this;
        };
        EventEmitter.prototype.off = function (type, listener) {
            if (this.$emittingType === type && listener) {
                this.$removedListeners.push(listener);
            }
            else {
                var listeners = this.$events[type] || [];
                if (listener) {
                    var index = listeners.indexOf(listener);
                    if (index >= 0) {
                        listeners.splice(index, 1);
                    }
                }
                else {
                    listeners.length = 0;
                }
            }
            return this;
        };
        EventEmitter.prototype.once = function (type, listener) {
            var that = this;
            var wrapper = function () {
                listener.apply(this, arguments);
                that.off(type, wrapper);
            };
            return this.on(type, wrapper);
        };
        EventEmitter.prototype.emit = function (type) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var event;
            if (type instanceof Event) {
                args = [type];
                type.target = type.target || this;
                type.currentTarget = this;
                type = type.type;
            }
            var listeners = this.$events[type];
            var hasListeners = listeners && listeners.length > 0;
            var removedListeners = this.$removedListeners;
            if (!event && hasListeners && args.length === 0) {
                event = Event.create(type);
                event.target = this;
                event.currentTarget = this;
                args.push(event);
            }
            if (hasListeners) {
                this.$emittingType = type;
                for (var _a = 0, listeners_1 = listeners; _a < listeners_1.length; _a++) {
                    var listener = listeners_1[_a];
                    if (removedListeners.indexOf(listener) < 0) {
                        listener.apply(this, args);
                    }
                }
                this.$emittingType = null;
            }
            if (event) {
                event.release();
            }
            for (var _b = 0, removedListeners_1 = removedListeners; _b < removedListeners_1.length; _b++) {
                var listener = removedListeners_1[_b];
                this.off(type, listener);
            }
            removedListeners.length = 0;
            return hasListeners;
        };
        EventEmitter.prototype.hasEventListener = function (type) {
            var listeners = this.$events[type];
            return !!listeners && listeners.length > 0;
        };
        EventEmitter.prototype.removeAllListeners = function () {
            this.$events = {};
            return this;
        };
        return EventEmitter;
    }());

    var EventEmitter$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        EventEmitter: EventEmitter
    });

    var Ticker = /** @class */ (function (_super) {
        __extends(Ticker, _super);
        function Ticker(stage) {
            var _this = _super.call(this) || this;
            _this.$stage = null;
            _this.$fps = 0;
            _this.$deltaTime = 0;
            _this.$paused = true;
            _this.$shouldResume = false;
            _this.$timerIndex = 0;
            _this.$lastTimestamp = 0;
            _this.$tickHandle = null;
            _this.$stage = stage;
            _this.$timers = [];
            _this.$boundTick = _this.$tick.bind(_this);
            _this.$enterFrameCallbackList = [stage];
            _this.$start();
            return _this;
        }
        Object.defineProperty(Ticker.prototype, "fps", {
            get: function () {
                return this.$fps;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Ticker.prototype, "deltaTime", {
            get: function () {
                return this.$deltaTime;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Ticker.prototype, "paused", {
            get: function () {
                return this.$paused;
            },
            enumerable: false,
            configurable: true
        });
        Ticker.prototype.$start = function () {
            var _this = this;
            var stage = this.$stage;
            var prefixes = ['', 'o', 'ms', 'moz', 'webkit'];
            for (var _i = 0, prefixes_1 = prefixes; _i < prefixes_1.length; _i++) {
                var prefix = prefixes_1[_i];
                var requestKey = prefix ? prefix + 'RequestAnimationFrame' : 'requestAnimationFrame';
                var cancelKey = prefix ? prefix + 'CancelAnimationFrame' : 'cancelAnimationFrame';
                var cancelRequestKey = prefix ? prefix + 'CancelRequestAnimationFrame' : 'cancelRequestAnimationFrame';
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
            stage.on(Event.ACTIVATE, function () {
                if (_this.$shouldResume) {
                    _this.resume();
                    _this.$shouldResume = false;
                }
            });
            stage.on(Event.DEACTIVATE, function () {
                if (!_this.$paused) {
                    _this.pause();
                    _this.$shouldResume = true;
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
        };
        Ticker.prototype.pause = function () {
            if (!this.$paused) {
                this.$paused = true;
                this.$lastTimestamp = 0;
                this.emit(Event.TICKER_PAUSE);
                cancelAnimationFrame(this.$tickHandle);
            }
            return this;
        };
        Ticker.prototype.resume = function () {
            if (this.$paused) {
                this.$paused = false;
                this.$tick();
                this.emit(Event.TICKER_RESUME);
            }
            return this;
        };
        Ticker.prototype.setTimeout = function (handler, timeout) {
            if (timeout === void 0) { timeout = 0; }
            var handle = ++this.$timerIndex;
            this.$timers[handle] = { handler: handler, timeout: timeout, resetTime: timeout };
            return handle;
        };
        Ticker.prototype.clearTimeout = function (handle) {
            delete this.$timers[handle];
        };
        Ticker.prototype.setInterval = function (handler, timeout) {
            var handle = ++this.$timerIndex;
            this.$timers[handle] = { handler: handler, timeout: timeout, resetTime: timeout, interval: true };
            return handle;
        };
        Ticker.prototype.clearInterval = function (handle) {
            delete this.$timers[handle];
        };
        Ticker.prototype.registerEnterFrameCallback = function (layer) {
            var list = this.$enterFrameCallbackList;
            if (list.indexOf(layer) < 0) {
                list.push(layer);
            }
            return this;
        };
        Ticker.prototype.unregisterEnterFrameCallback = function (layer) {
            var list = this.$enterFrameCallbackList;
            var index = list.indexOf(layer);
            if (index >= 0) {
                list.splice(index, 1);
            }
            return this;
        };
        Ticker.prototype.$tick = function () {
            var now = Date.now();
            var lastTimestamp = this.$lastTimestamp;
            var deltaTime = lastTimestamp ? now - this.$lastTimestamp : 1000 / 60;
            var enterFrameCallbackList = this.$enterFrameCallbackList;
            this.$fps = Math.round(1000 / deltaTime);
            this.$deltaTime = deltaTime;
            this.$lastTimestamp = now;
            this.$tickHandle = window.requestAnimationFrame(this.$boundTick);
            this.$checkTimers(deltaTime);
            var event = Event.create(Event.ENTER_FRAME, deltaTime);
            for (var _i = 0, enterFrameCallbackList_1 = enterFrameCallbackList; _i < enterFrameCallbackList_1.length; _i++) {
                var layer = enterFrameCallbackList_1[_i];
                layer.emit(event);
            }
            event.release();
            var tickEvent = Event.create(Event.TICK, deltaTime);
            this.emit(tickEvent);
            tickEvent.release();
        };
        Ticker.prototype.$checkTimers = function (dt) {
            var timers = this.$timers;
            for (var key in timers) {
                var timer = timers[key];
                var restTime = timer.resetTime = timer.resetTime - dt;
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
        };
        return Ticker;
    }(EventEmitter));

    var Ticker$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Ticker: Ticker
    });

    var Vector = /** @class */ (function () {
        function Vector(x, y) {
            this.set(x, y);
        }
        Object.defineProperty(Vector.prototype, "length", {
            get: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vector.prototype, "angle", {
            get: function () {
                return Math.atan2(this.y, this.x);
            },
            enumerable: false,
            configurable: true
        });
        Vector.prototype.set = function (x, y) {
            this.x = x || 0;
            this.y = y || 0;
            return this;
        };
        Vector.prototype.add = function (x, y) {
            if (x instanceof Vector) {
                this.x += x.x;
                this.y += x.y;
            }
            else {
                this.x += x;
                this.y += y;
            }
            return this;
        };
        Vector.prototype.subtract = function (x, y) {
            if (x instanceof Vector) {
                this.x -= x.x;
                this.y -= x.y;
            }
            else {
                this.x -= x;
                this.y -= y;
            }
            return this;
        };
        Vector.prototype.dotProduct = function (x, y) {
            if (x instanceof Vector) {
                return this.x * x.x + this.y * x.y;
            }
            else {
                return this.x * x + this.y * y;
            }
        };
        Vector.prototype.normalize = function () {
            var length = this.length;
            this.x = this.x / length;
            this.y = this.y / length;
            return this;
        };
        Vector.prototype.negate = function () {
            this.x *= -1;
            this.y *= -1;
            return this;
        };
        Vector.prototype.scale = function (x, y) {
            this.x *= x;
            this.y *= y === undefined ? x : y;
            return this;
        };
        Vector.prototype.rotate = function (angle) {
            var x = this.x;
            var y = this.y;
            this.x = x * Math.cos(angle) - y * Math.sin(angle);
            this.y = x * Math.sin(angle) + y * Math.cos(angle);
            return this;
        };
        Vector.prototype.transform = function (m) {
            var x = this.x;
            var y = this.y;
            this.x = m.a * x + m.c * y + m.tx;
            this.y = m.b * x + m.d * y + m.ty;
            return this;
        };
        Vector.prototype.distance = function (v) {
            return Math.sqrt((this.x - v.x) * (this.x - v.x) + (this.y - v.y) * (this.y - v.y));
        };
        Vector.prototype.equal = function (v) {
            return this.x === v.x && this.y === v.y;
        };
        Vector.prototype.release = function () {
            Vector.recycle(this);
            return this;
        };
        Vector.create = function (x, y) {
            var pool = this.$pool;
            if (pool.length > 0) {
                return pool.pop().set(x, y);
            }
            else {
                return new Vector(x, y);
            }
        };
        Vector.recycle = function (v) {
            this.$pool.push(v);
        };
        Vector.$pool = [];
        return Vector;
    }());

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
    var Matrix = /** @class */ (function () {
        function Matrix(a, b, c, d, tx, ty) {
            if (arguments.length > 0) {
                this.set(a, b, c, d, tx, ty);
            }
            else {
                this.identity();
            }
        }
        Matrix.prototype.set = function (a, b, c, d, tx, ty) {
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
            this.tx = tx;
            this.ty = ty;
            return this;
        };
        Matrix.prototype.identity = function () {
            return this.set(1, 0, 0, 1, 0, 0);
        };
        Matrix.prototype.invert = function () {
            var a = this.a;
            var b = this.b;
            var c = this.c;
            var d = this.d;
            var tx = this.tx;
            var ty = this.ty;
            var n = a * d - c * b;
            this.a = d / n;
            this.b = -b / n;
            this.c = -c / n;
            this.d = a / n;
            this.tx = (c * ty - d * tx) / n;
            this.ty = (b * tx - a * ty) / n;
            return this;
        };
        Matrix.prototype.prepend = function (a, b, c, d, tx, ty) {
            if (a instanceof Matrix) {
                return this.prepend(a.a, a.b, a.c, a.d, a.tx, a.ty);
            }
            var a1 = this.a;
            var b1 = this.b;
            var c1 = this.c;
            var d1 = this.d;
            var tx1 = this.tx;
            var ty1 = this.ty;
            this.a = a * a1 + b * c1;
            this.b = a * b1 + b * d1;
            this.c = c * a1 + d * c1;
            this.d = c * b1 + d * d1;
            this.tx = tx * a1 + ty * c1 + tx1;
            this.ty = tx * b1 + ty * d1 + ty1;
            return this;
        };
        Matrix.prototype.append = function (a, b, c, d, tx, ty) {
            if (a instanceof Matrix) {
                return this.append(a.a, a.b, a.c, a.d, a.tx, a.ty);
            }
            var a1 = this.a;
            var b1 = this.b;
            var c1 = this.c;
            var d1 = this.d;
            var tx1 = this.tx;
            var ty1 = this.ty;
            this.a = a * a1 + c * b1;
            this.b = b * a1 + d * b1;
            this.c = a * c1 + c * d1;
            this.d = b * c1 + d * d1;
            this.tx = a * tx1 + c * ty1 + tx;
            this.ty = b * tx1 + d * ty1 + ty;
            return this;
        };
        Matrix.prototype.scale = function (x, y) {
            return this.append(x, 0, 0, y === undefined ? x : y, 0, 0);
        };
        Matrix.prototype.rotate = function (angle) {
            var sin = Math.sin(angle);
            var cos = Math.cos(angle);
            return this.append(cos, sin, -sin, cos, 0, 0);
        };
        Matrix.prototype.skew = function (skewX, skewY) {
            return this.append(1, Math.tan(skewY), Math.tan(skewX), 1, 0, 0);
        };
        Matrix.prototype.translate = function (x, y) {
            if (x instanceof Vector) {
                return this.append(1, 0, 0, 1, x.x, x.y);
            }
            return this.append(1, 0, 0, 1, x, y);
        };
        Matrix.prototype.equal = function (m) {
            return m instanceof Matrix &&
                this.a === m.a && this.b === m.b &&
                this.c === m.c && this.d === m.d &&
                this.tx === m.tx && this.ty === m.ty;
        };
        Matrix.prototype.release = function () {
            Matrix.recycle(this);
        };
        Matrix.create = function (a, b, c, d, tx, ty) {
            var m;
            var pool = this.$pool;
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
        };
        Matrix.recycle = function (m) {
            this.$pool.push(m);
        };
        Matrix.$pool = [];
        return Matrix;
    }());

    var Matrix$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Matrix: Matrix
    });

    var Rectangle = /** @class */ (function () {
        function Rectangle(x, y, width, height) {
            this.set(x, y, width, height);
        }
        Object.defineProperty(Rectangle.prototype, "top", {
            get: function () {
                return this.y;
            },
            set: function (top) {
                this.height += this.y - top;
                this.y = top;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "bottom", {
            get: function () {
                return this.y + this.height;
            },
            set: function (bottom) {
                this.height = bottom - this.y;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "left", {
            get: function () {
                return this.x;
            },
            set: function (left) {
                this.width += this.x - left;
                this.x = left;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "right", {
            get: function () {
                return this.x + this.width;
            },
            set: function (right) {
                this.width = right - this.x;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "topLeft", {
            get: function () {
                return Vector.create(this.left, this.top);
            },
            set: function (v) {
                this.top = v.y;
                this.left = v.x;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "bottomRight", {
            get: function () {
                return Vector.create(this.right, this.bottom);
            },
            set: function (v) {
                this.bottom = v.y;
                this.right = v.x;
            },
            enumerable: false,
            configurable: true
        });
        Rectangle.prototype.set = function (x, y, width, height) {
            this.x = x || 0;
            this.y = y || 0;
            this.width = width || 0;
            this.height = height || 0;
            return this;
        };
        Rectangle.prototype.contains = function (x, y) {
            if (x instanceof Vector) {
                return this.contains(x.x, x.y);
            }
            return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
        };
        Rectangle.prototype.equal = function (r) {
            return r instanceof Rectangle &&
                r.x === this.x && r.y === this.y && r.width === this.width && r.height === this.height;
        };
        Rectangle.prototype.release = function () {
            Rectangle.recycle(this);
        };
        Rectangle.create = function (x, y, width, height) {
            var pool = this.$pool;
            if (pool.length > 0) {
                return pool.pop().set(x, y, width, height);
            }
            else {
                return new Rectangle(x, y, width, height);
            }
        };
        Rectangle.recycle = function (r) {
            this.$pool.push(r);
        };
        Rectangle.$pool = [];
        return Rectangle;
    }());

    var Rectangle$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Rectangle: Rectangle
    });

    var TouchEvent = /** @class */ (function (_super) {
        __extends(TouchEvent, _super);
        function TouchEvent(type) {
            var _this = _super.call(this, type) || this;
            _this.$init(type);
            return _this;
        }
        TouchEvent.prototype.$init = function (type) {
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
        };
        TouchEvent.prototype.stopPropagation = function () {
            this.cancelBubble = true;
        };
        TouchEvent.prototype.release = function () {
            TouchEvent.recycle(this);
        };
        TouchEvent.create = function (type) {
            var pool = this.$pool;
            if (pool.length > 0) {
                return pool.pop().$init(type);
            }
            else {
                return new TouchEvent(type);
            }
        };
        TouchEvent.recycle = function (e) {
            this.$pool.push(e);
        };
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
        return TouchEvent;
    }(Event));

    var TouchEvent$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        TouchEvent: TouchEvent
    });

    var Layer = /** @class */ (function (_super) {
        __extends(Layer, _super);
        function Layer() {
            var _this = _super.call(this) || this;
            _this.name = '';
            _this.tag = '';
            _this.touchable = true;
            _this.$x = 0;
            _this.$y = 0;
            _this.$width = 0;
            _this.$height = 0;
            _this.$anchorX = 0;
            _this.$anchorY = 0;
            _this.$skewX = 0;
            _this.$skewY = 0;
            _this.$scaleX = 1;
            _this.$scaleY = 1;
            _this.$rotation = 0;
            _this.$alpha = 1;
            _this.$visible = true;
            _this.$smoothing = true;
            _this.$background = null;
            _this.$stage = null;
            _this.$parent = null;
            _this.$children = [];
            _this.$dirty = true;
            _this.$shouldEmitTap = true;
            _this.$touches = [];
            _this.$canvas = document.createElement('canvas');
            _this.$context = _this.$canvas.getContext('2d');
            return _this;
        }
        Object.defineProperty(Layer.prototype, "x", {
            get: function () {
                return this.$x;
            },
            set: function (x) {
                if (this.$x !== x) {
                    this.$x = x;
                    this.$markParentDirty();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "y", {
            get: function () {
                return this.$y;
            },
            set: function (y) {
                if (this.$y !== y) {
                    this.$y = y;
                    this.$markParentDirty();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "width", {
            get: function () {
                return this.$width ? this.$width : this.$canvas.width / Layer.pixelRatio;
            },
            set: function (width) {
                if (this.$width !== width) {
                    this.$width = width;
                    this.$resizeCanvas();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "height", {
            get: function () {
                return this.$height ? this.$height : this.$canvas.height / Layer.pixelRatio;
            },
            set: function (height) {
                if (this.$height !== height) {
                    this.$height = height;
                    this.$resizeCanvas();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "anchorX", {
            get: function () {
                return this.$anchorX;
            },
            set: function (anchorX) {
                if (this.$anchorX !== anchorX) {
                    this.$anchorX = anchorX;
                    this.$resizeCanvas();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "anchorY", {
            get: function () {
                return this.$anchorY;
            },
            set: function (anchorY) {
                if (this.$anchorY !== anchorY) {
                    this.$anchorY = anchorY;
                    this.$resizeCanvas();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "skewX", {
            get: function () {
                return this.$skewX;
            },
            set: function (skewX) {
                if (this.$skewX !== skewX) {
                    this.$skewX = skewX;
                    this.$markParentDirty();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "skewY", {
            get: function () {
                return this.$skewY;
            },
            set: function (skewY) {
                if (this.$skewY !== skewY) {
                    this.$skewY = skewY;
                    this.$markParentDirty();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "scaleX", {
            get: function () {
                return this.$scaleX;
            },
            set: function (scaleX) {
                if (this.$scaleX !== scaleX) {
                    this.$scaleX = scaleX;
                    this.$markParentDirty();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "scaleY", {
            get: function () {
                return this.$scaleY;
            },
            set: function (scaleY) {
                if (this.$scaleY !== scaleY) {
                    this.$scaleY = scaleY;
                    this.$markParentDirty();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "rotation", {
            get: function () {
                return this.$rotation;
            },
            set: function (rotation) {
                if (this.$rotation !== rotation) {
                    this.$rotation = rotation;
                    this.$markParentDirty();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "alpha", {
            get: function () {
                return this.$alpha;
            },
            set: function (alpha) {
                if (this.$alpha !== alpha) {
                    this.$alpha = alpha;
                    this.$markParentDirty();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "visible", {
            get: function () {
                return this.$visible;
            },
            set: function (visible) {
                if (this.$visible !== visible) {
                    this.$visible = visible;
                    this.$markParentDirty();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "smoothing", {
            get: function () {
                return this.$smoothing;
            },
            set: function (smoothing) {
                this.$smoothing = smoothing;
                this.$resizeCanvas();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "background", {
            get: function () {
                return this.$background;
            },
            set: function (background) {
                if (this.$background !== background) {
                    this.$background = background;
                    this.$markDirty();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "stage", {
            get: function () {
                return this.$stage;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "parent", {
            get: function () {
                return this.$parent;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "numChildren", {
            get: function () {
                return this.$children.length;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "ticker", {
            get: function () {
                return this.$stage ? this.$stage.ticker : null;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "canvas", {
            get: function () {
                return this.$canvas;
            },
            enumerable: false,
            configurable: true
        });
        Layer.prototype.addChild = function (child) {
            return this.addChildAt(child, this.$children.length);
        };
        Layer.prototype.addChildAt = function (child, index) {
            var children = this.$children;
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
        };
        Layer.prototype.replaceChild = function (oldChild, newChild) {
            var index = this.getChildIndex(oldChild);
            this.removeChildAt(index);
            this.addChildAt(newChild, index);
            return this;
        };
        Layer.prototype.getChildByName = function (name) {
            var children = this.$children;
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var child = children_1[_i];
                if (child.name === name) {
                    return child;
                }
            }
            return null;
        };
        Layer.prototype.getChildrenByTag = function (tag) {
            var result = [];
            var children = this.$children;
            for (var _i = 0, children_2 = children; _i < children_2.length; _i++) {
                var child = children_2[_i];
                if (child.tag === tag) {
                    result.push(child);
                }
            }
            return result;
        };
        Layer.prototype.getChildAt = function (index) {
            return this.$children[index] || null;
        };
        Layer.prototype.getChildIndex = function (child) {
            return this.$children.indexOf(child);
        };
        Layer.prototype.hasChild = function (child) {
            return this.getChildIndex(child) >= 0;
        };
        Layer.prototype.swapChildren = function (child1, child2) {
            var index1 = this.getChildIndex(child1);
            var index2 = this.getChildIndex(child2);
            if (index1 >= 0 && index2 >= 0) {
                this.swapChildrenAt(index1, index2);
            }
            return this;
        };
        Layer.prototype.swapChildrenAt = function (index1, index2) {
            var child1 = this.$children[index1];
            var child2 = this.$children[index2];
            if (index1 !== index2 && child1 && child2) {
                this.$children[index1] = child2;
                this.$children[index2] = child1;
                this.$markDirty();
            }
            return this;
        };
        Layer.prototype.setChildIndex = function (child, index) {
            var children = this.$children;
            var oldIndex = this.getChildIndex(child);
            if (index < 0) {
                index = 0;
            }
            else if (index > children.length) {
                index = children.length;
            }
            if (oldIndex >= 0 && index > oldIndex) {
                for (var i = oldIndex + 1; i <= index; ++i) {
                    children[i - 1] = children[i];
                }
                children[index] = child;
                this.$markDirty();
            }
            else if (oldIndex >= 0 && index < oldIndex) {
                for (var i = oldIndex - 1; i >= index; --i) {
                    children[i + 1] = children[i];
                }
                children[index] = child;
                this.$markDirty();
            }
            return this;
        };
        Layer.prototype.removeChild = function (child) {
            var index = this.getChildIndex(child);
            return this.removeChildAt(index);
        };
        Layer.prototype.removeChildAt = function (index) {
            var children = this.$children;
            var child = children[index];
            if (child) {
                children.splice(index, 1);
                child.$emitRemoved();
                this.$resizeCanvas();
            }
            return this;
        };
        Layer.prototype.removeChildByName = function (name) {
            var children = this.$children;
            for (var i = 0, l = children.length; i < l; ++i) {
                var child = children[i];
                if (child.name === name) {
                    this.removeChildAt(i);
                    break;
                }
            }
            return this;
        };
        Layer.prototype.removeChildrenByTag = function (tag) {
            var children = this.$children;
            for (var i = children.length - 1; i >= 0; --i) {
                var child = children[i];
                if (child.tag === tag) {
                    this.removeChildAt(i);
                }
            }
            return this;
        };
        Layer.prototype.removeAllChildren = function () {
            var children = this.$children;
            for (var _i = 0, children_3 = children; _i < children_3.length; _i++) {
                var child = children_3[_i];
                child.$emitRemoved();
            }
            this.$children.length = 0;
            this.$resizeCanvas();
            return this;
        };
        Layer.prototype.removeSelf = function () {
            if (this.$parent) {
                this.$parent.removeChild(this);
            }
            return this;
        };
        Layer.prototype.$markDirty = function (sizeDirty) {
            if (sizeDirty) {
                this.$resizeParentCanvas();
            }
            else if (!this.$dirty) {
                this.$markParentDirty();
            }
            this.$dirty = true;
        };
        Layer.prototype.$markParentDirty = function () {
            if (this.$parent) {
                this.$parent.$markDirty();
            }
        };
        Layer.prototype.$resizeCanvas = function () {
            var width = this.$width;
            var height = this.$height;
            var canvas = this.$canvas;
            var anchorX = this.$anchorX;
            var anchorY = this.$anchorY;
            var context = this.$context;
            var smoothing = this.$smoothing;
            var pixelRatio = Layer.pixelRatio;
            if (width && height) {
                canvas.width = width * pixelRatio;
                canvas.height = height * pixelRatio;
            }
            else {
                var bounds = this.$getContentBounds();
                canvas.width = (width || bounds.right + anchorX) * pixelRatio;
                canvas.height = (height || bounds.bottom + anchorY) * pixelRatio;
                bounds.release();
            }
            if (context.imageSmoothingEnabled !== smoothing) {
                context.imageSmoothingEnabled = smoothing;
            }
            this.$markDirty(true);
        };
        Layer.prototype.$resizeParentCanvas = function () {
            if (this.$parent) {
                this.$parent.$resizeCanvas();
            }
        };
        Layer.prototype.$getTransform = function () {
            var degToRad = Math.PI / 180;
            var matrix = Matrix.create();
            matrix.translate(-this.$anchorX, -this.$anchorY);
            matrix.skew(this.skewX * degToRad, this.skewY * degToRad);
            matrix.rotate(this.rotation * degToRad);
            matrix.scale(this.scaleX, this.scaleY);
            matrix.translate(this.x, this.y);
            return matrix;
        };
        Layer.prototype.$getChildTransform = function (child) {
            return child.$getTransform();
        };
        Layer.prototype.$getChildBounds = function (child) {
            var width = child.width;
            var height = child.height;
            var bounds = Rectangle.create();
            var matrix = this.$getChildTransform(child);
            var topLeft = Vector.create(0, 0).transform(matrix);
            var topRight = Vector.create(width, 0).transform(matrix);
            var bottomLeft = Vector.create(0, height).transform(matrix);
            var bottomRight = Vector.create(width, height).transform(matrix);
            var minX = Math.min(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
            var maxX = Math.max(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
            var minY = Math.min(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
            var maxY = Math.max(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
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
        };
        Layer.prototype.$getContentBounds = function () {
            var bounds;
            var children = this.$children;
            for (var _i = 0, children_4 = children; _i < children_4.length; _i++) {
                var child = children_4[_i];
                if (child.$visible) {
                    var childBounds = this.$getChildBounds(child);
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
        };
        Layer.prototype.$emitTouchEvent = function (event, inside) {
            var type = event.type;
            var localX = event.localX;
            var localY = event.localY;
            var touches = this.$touches;
            var identifier = event.identifier;
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
            var children = this.$children;
            for (var i = children.length - 1; i >= 0; --i) {
                var child = children[i];
                if (!child.$visible || !child.touchable) {
                    continue;
                }
                var matrix = this.$getChildTransform(child);
                var localPos = Vector.create(localX, localY).transform(matrix.invert()).subtract(child.$anchorX, child.$anchorY);
                var inside_1 = child.$localHitTest(localPos);
                localPos.release();
                matrix.release();
                if (inside_1 || type !== TouchEvent.TOUCH_START) {
                    event.target = child;
                    event.localX = event.targetX = localPos.x;
                    event.localY = event.targetY = localPos.y;
                    if (child.$emitTouchEvent(event, inside_1)) {
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
        };
        Layer.prototype.$emitAdded = function (parent) {
            var stage = parent.$stage;
            this.$parent = parent;
            this.emit(Event.ADDED);
            if (stage) {
                this.$emitAddedToStage(stage);
            }
        };
        Layer.prototype.$emitRemoved = function () {
            var stage = this.$stage;
            this.$parent = null;
            this.emit(Event.REMOVED);
            if (stage) {
                this.$emitRemovedFromStage();
            }
        };
        Layer.prototype.$emitAddedToStage = function (stage) {
            var children = this.$children;
            this.$stage = stage;
            this.emit(Event.ADDED_TO_STAGE);
            if (this.hasEventListener(Event.ENTER_FRAME)) {
                stage.ticker.registerEnterFrameCallback(this);
            }
            for (var _i = 0, children_5 = children; _i < children_5.length; _i++) {
                var child = children_5[_i];
                child.$emitAddedToStage(stage);
            }
        };
        Layer.prototype.$emitRemovedFromStage = function () {
            var stage = this.$stage;
            var children = this.$children;
            this.$stage = null;
            this.emit(Event.REMOVED_FROM_STAGE);
            if (this.hasEventListener(Event.ENTER_FRAME)) {
                stage.ticker.unregisterEnterFrameCallback(this);
            }
            for (var _i = 0, children_6 = children; _i < children_6.length; _i++) {
                var child = children_6[_i];
                child.$emitRemovedFromStage();
            }
        };
        Layer.prototype.$localHitTest = function (vector) {
            return vector.x >= -this.anchorX && vector.x <= this.width - this.anchorX && vector.y >= -this.anchorY && vector.y <= this.height - this.anchorY;
        };
        Layer.prototype.$isChildVisible = function (child) {
            if (!child.visible || !child.alpha || !child.width || !child.height) {
                return false;
            }
            var minX = -this.$anchorX;
            var maxX = this.width + minX;
            var minY = -this.$anchorY;
            var maxY = this.height + minY;
            var bounds = this.$getChildBounds(child);
            var inside = bounds.left <= maxX && bounds.right >= minX && bounds.top <= maxY && bounds.bottom >= minY;
            bounds.release();
            return inside;
        };
        Layer.prototype.$drawChild = function (child) {
            var ctx = this.$context;
            var canvas = child.$canvas;
            var width = child.width;
            var height = child.height;
            var pixelRatio = Layer.pixelRatio;
            var matrix = this.$getChildTransform(child).scale(pixelRatio);
            var drawCalls = child.$render();
            var globalAlpha = ctx.globalAlpha;
            if (globalAlpha !== child.alpha) {
                ctx.globalAlpha = child.alpha;
            }
            if (matrix.b === 0 && matrix.c === 0) {
                var tx = (matrix.tx + 0.5) | 0;
                var ty = (matrix.ty + 0.5) | 0;
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
        };
        Layer.prototype.$render = function () {
            if (!this.$dirty) {
                return 0;
            }
            var drawCalls = 0;
            var ctx = this.$context;
            var canvas = this.$canvas;
            var children = this.$children;
            var canvasWidth = canvas.width;
            var canvasHeight = canvas.height;
            var anchorX = (this.$anchorX + 0.5) | 0;
            var anchorY = (this.$anchorY + 0.5) | 0;
            var background = this.$background;
            var pixelRatio = Layer.pixelRatio;
            ctx.globalAlpha = 1;
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            if (background) {
                ctx.fillStyle = background;
                ctx.fillRect(0, 0, canvasWidth, canvasHeight);
            }
            ctx.translate(anchorX * pixelRatio, anchorY * pixelRatio);
            for (var _i = 0, children_7 = children; _i < children_7.length; _i++) {
                var child = children_7[_i];
                if (this.$isChildVisible(child)) {
                    drawCalls += this.$drawChild(child);
                }
            }
            this.$dirty = false;
            return drawCalls;
        };
        Layer.prototype.on = function (type, listener) {
            _super.prototype.on.call(this, type, listener);
            if (type === Event.ENTER_FRAME && this.ticker) {
                this.ticker.registerEnterFrameCallback(this);
            }
            else if (type === Event.ADDED && this.$parent) {
                var event = Event.create(type);
                listener.call(this, event);
                event.release();
            }
            else if (type === Event.ADDED_TO_STAGE && this.$stage) {
                var event = Event.create(type);
                listener.call(this, event);
                event.release();
            }
            return this;
        };
        Layer.prototype.off = function (type, listener) {
            _super.prototype.off.call(this, type, listener);
            if (type === Event.ENTER_FRAME && !this.hasEventListener(Event.ENTER_FRAME) && this.ticker) {
                this.ticker.unregisterEnterFrameCallback(this);
            }
            return this;
        };
        Layer.pixelRatio = typeof window === 'undefined' ? 1 : window.devicePixelRatio || 1;
        return Layer;
    }(EventEmitter));

    var Layer$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Layer: Layer
    });

    var Ease = /** @class */ (function () {
        function Ease() {
        }
        Ease.linear = function (t, b, c, d) {
            return c * t / d + b;
        };
        Ease.easeInQuad = function (t, b, c, d) {
            return c * (t /= d) * t + b;
        };
        Ease.easeOutQuad = function (t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        };
        Ease.easeInOutQuad = function (t, b, c, d) {
            if ((t /= d / 2) < 1)
                return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        };
        Ease.easeInCubic = function (t, b, c, d) {
            return c * (t /= d) * t * t + b;
        };
        Ease.easeOutCubic = function (t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        };
        Ease.easeInOutCubic = function (t, b, c, d) {
            if ((t /= d / 2) < 1)
                return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        };
        Ease.easeInQuart = function (t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        };
        Ease.easeOutQuart = function (t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        };
        Ease.easeInOutQuart = function (t, b, c, d) {
            if ((t /= d / 2) < 1)
                return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        };
        Ease.easeInQuint = function (t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        };
        Ease.easeOutQuint = function (t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        };
        Ease.easeInOutQuint = function (t, b, c, d) {
            if ((t /= d / 2) < 1)
                return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        };
        Ease.easeInSine = function (t, b, c, d) {
            return (t === d) ? b + c : -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        };
        Ease.easeOutSine = function (t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        };
        Ease.easeInOutSine = function (t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        };
        Ease.easeInExpo = function (t, b, c, d) {
            return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        };
        Ease.easeOutExpo = function (t, b, c, d) {
            return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        };
        Ease.easeInOutExpo = function (t, b, c, d) {
            if (t === 0)
                return b;
            if (t === d)
                return b + c;
            if ((t /= d / 2) < 1)
                return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        };
        Ease.easeInCirc = function (t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        };
        Ease.easeOutCirc = function (t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        };
        Ease.easeInOutCirc = function (t, b, c, d) {
            if ((t /= d / 2) < 1)
                return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        };
        Ease.easeInElastic = function (t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
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
        };
        Ease.easeOutElastic = function (t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
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
        };
        Ease.easeInOutElastic = function (t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
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
        };
        Ease.easeInBack = function (t, b, c, d, s) {
            if (s === void 0) { s = 1.70158; }
            return (t === d) ? b + c : c * (t /= d) * t * ((s + 1) * t - s) + b;
        };
        Ease.easeOutBack = function (t, b, c, d, s) {
            if (s === void 0) { s = 1.70158; }
            return (t === 0) ? b : c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        };
        Ease.easeInOutBack = function (t, b, c, d, s) {
            if (s === void 0) { s = 1.70158; }
            if ((t /= d / 2) < 1)
                return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        };
        Ease.easeInBounce = function (t, b, c, d) {
            return c - Ease.easeOutBounce(d - t, 0, c, d) + b;
        };
        Ease.easeOutBounce = function (t, b, c, d) {
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
        };
        Ease.easeInOutBounce = function (t, b, c, d) {
            if (t < d / 2)
                return Ease.easeInBounce(t * 2, 0, c, d) * 0.5 + b;
            return Ease.easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
        };
        return Ease;
    }());

    var Ease$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Ease: Ease
    });

    var Tween = /** @class */ (function (_super) {
        __extends(Tween, _super);
        function Tween(target, option) {
            var _this = _super.call(this) || this;
            _this.loop = false;
            _this.$target = null;
            _this.$paused = true;
            _this.$stopped = true;
            _this.$stepIndex = 0;
            _this.$stepPosition = 0;
            _this.$steps = [];
            _this.$stepProps = [];
            _this.$shouldSaveProps = true;
            _this.$target = target;
            _this.loop = option ? option.loop : false;
            _this.$boundOnEnterFrame = _this.$onEnterFrame.bind(_this);
            return _this;
        }
        Object.defineProperty(Tween.prototype, "paused", {
            get: function () {
                return this.$paused;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Tween.prototype, "stopped", {
            get: function () {
                return this.$stopped;
            },
            enumerable: false,
            configurable: true
        });
        Tween.prototype.set = function (props) {
            this.$steps.push({
                type: 'set',
                props: props
            });
            return this;
        };
        Tween.prototype.to = function (props, duration, ease) {
            this.$steps.push({
                type: 'to',
                duration: duration,
                props: props,
                ease: ease
            });
            return this;
        };
        Tween.prototype.wait = function (duration) {
            this.$steps.push({
                type: 'wait',
                duration: duration
            });
            return this;
        };
        Tween.prototype.call = function (callback) {
            this.$steps.push({
                type: 'call',
                callback: callback
            });
            return this;
        };
        Tween.prototype.play = function () {
            if (this.$stopped) {
                this.resume();
                Tween.$tweens.push(this);
            }
            return this;
        };
        Tween.prototype.pause = function () {
            this.$paused = true;
            this.$target.off(Event.ENTER_FRAME, this.$boundOnEnterFrame);
            return this;
        };
        Tween.prototype.resume = function () {
            if (this.$paused) {
                this.$paused = false;
                this.$stopped = false;
                this.$target.on(Event.ENTER_FRAME, this.$boundOnEnterFrame);
            }
            return this;
        };
        Tween.prototype.stop = function () {
            this.pause();
            this.$stopped = true;
            var index = Tween.$tweens.indexOf(this);
            if (index >= 0) {
                Tween.$tweens.splice(index, 1);
            }
            return this;
        };
        Tween.prototype.$onEnterFrame = function (e) {
            this.$nextFrame(e.data);
        };
        Tween.prototype.$nextFrame = function (dt) {
            var loop = this.loop;
            var steps = this.$steps;
            var stepLength = this.$steps.length;
            var stepIndex = this.$stepIndex;
            var stepPosition = this.$stepPosition + dt;
            var step = steps[stepIndex];
            var type = step.type;
            var duration = step.duration || 0;
            var props = step.props;
            var ease = step.ease || Ease.linear;
            var callback = step.callback;
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
        };
        Tween.prototype.$saveOriginalProps = function (stepIndex, props) {
            var target = this.$target;
            var stepProps = this.$stepProps;
            var originalProps = stepProps[stepIndex] = stepProps[stepIndex] || {};
            for (var key in props) {
                originalProps[key] = target[key];
            }
            this.$shouldSaveProps = false;
        };
        Tween.prototype.$easeProps = function (stepIndex, props, position, duration, ease) {
            if (this.$shouldSaveProps) {
                this.$saveOriginalProps(stepIndex, props);
            }
            var target = this.$target;
            var originalProps = this.$stepProps[stepIndex] || {};
            if (position > duration) {
                position = duration;
            }
            for (var key in props) {
                var originalValue = originalProps[key];
                var offsetValue = props[key] - originalValue;
                target[key] = ease(position, originalValue, offsetValue, duration);
            }
        };
        Tween.prototype.$setProps = function (props) {
            var target = this.$target;
            for (var key in props) {
                target[key] = props[key];
            }
        };
        Tween.get = function (target, option) {
            return new Tween(target, option);
        };
        Tween.pauseTweens = function (target) {
            var tweens = this.$tweens;
            for (var _i = 0, tweens_1 = tweens; _i < tweens_1.length; _i++) {
                var tween = tweens_1[_i];
                if (tween.$target === target) {
                    tween.pause();
                }
            }
        };
        Tween.resumeTweens = function (target) {
            var tweens = this.$tweens;
            for (var _i = 0, tweens_2 = tweens; _i < tweens_2.length; _i++) {
                var tween = tweens_2[_i];
                if (tween.$target === target) {
                    tween.resume();
                }
            }
        };
        Tween.removeTweens = function (target) {
            var tweens = this.$tweens;
            for (var i = tweens.length - 1; i >= 0; --i) {
                var tween = tweens[i];
                if (tween.$target === target) {
                    tween.stop();
                }
            }
        };
        Tween.removeAllTweens = function () {
            var tweens = this.$tweens;
            for (var i = tweens.length - 1; i >= 0; --i) {
                var tween = tweens[i];
                tween.stop();
            }
        };
        Tween.$tweens = [];
        return Tween;
    }(EventEmitter));

    var Tween$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Tween: Tween
    });

    var Scroller = /** @class */ (function (_super) {
        __extends(Scroller, _super);
        function Scroller() {
            var _this = _super.call(this) || this;
            _this.$scrollTop = 0;
            _this.$scrollLeft = 0;
            _this.$scrollWidth = 0;
            _this.$scrollHeight = 0;
            _this.$touchingX = null;
            _this.$touchingY = null;
            _this.$touchingId = null;
            _this.$touchingTime = null;
            _this.$velocitiesX = [];
            _this.$velocitiesY = [];
            _this.$inertiaTween = null;
            _this.width = 200;
            _this.height = 200;
            _this.on(TouchEvent.TOUCH_START, _this.$onTouchStart);
            _this.on(TouchEvent.TOUCH_MOVE, _this.$onTouchMove);
            _this.on(TouchEvent.TOUCH_END, _this.$onTouchEnd);
            _this.on(TouchEvent.TOUCH_CANCEL, _this.$onTouchCancel);
            return _this;
        }
        Object.defineProperty(Scroller.prototype, "scrollTop", {
            get: function () {
                return this.$scrollTop;
            },
            set: function (scrollTop) {
                var bounds = this.$getContentBounds();
                var maxScrollTop = this.$scrollHeight - this.$height;
                scrollTop = Math.max(0, Math.min(scrollTop, maxScrollTop));
                if (scrollTop !== this.$scrollTop) {
                    this.$scrollTop = scrollTop;
                    this.$markDirty();
                }
                bounds.release();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Scroller.prototype, "scrollLeft", {
            get: function () {
                return this.$scrollLeft;
            },
            set: function (scrollLeft) {
                var bounds = this.$getContentBounds();
                var maxScrollLeft = this.$scrollWidth - this.width;
                scrollLeft = Math.max(0, Math.min(scrollLeft, maxScrollLeft));
                if (scrollLeft !== this.$scrollLeft) {
                    this.$scrollLeft = scrollLeft;
                    this.$markDirty();
                }
                bounds.release();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Scroller.prototype, "scrollWidth", {
            get: function () {
                return this.$scrollWidth;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Scroller.prototype, "scrollHeight", {
            get: function () {
                return this.$scrollHeight;
            },
            enumerable: false,
            configurable: true
        });
        Scroller.prototype.$getChildTransform = function (child) {
            var matrix = _super.prototype.$getChildTransform.call(this, child);
            matrix.translate(-this.$scrollLeft, -this.$scrollTop);
            return matrix;
        };
        Scroller.prototype.$resizeCanvas = function () {
            _super.prototype.$resizeCanvas.call(this);
            var bounds = this.$getContentBounds();
            this.$scrollWidth = this.$scrollLeft + bounds.right + this.$anchorX;
            this.$scrollHeight = this.$scrollTop + bounds.bottom + this.$anchorY;
            this.scrollTop = this.$scrollTop;
            this.scrollLeft = this.$scrollLeft;
        };
        Scroller.prototype.$onTouchStart = function (e) {
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
        };
        Scroller.prototype.$onTouchMove = function (e) {
            if (e.identifier !== this.$touchingId) {
                return;
            }
            var now = Date.now();
            var scrollTop = this.scrollTop;
            var scrollLeft = this.scrollLeft;
            var dt = now - this.$touchingTime;
            var velocitiesX = this.$velocitiesX;
            var velocitiesY = this.$velocitiesY;
            var offsetX = e.localX - this.$touchingX;
            var offsetY = e.localY - this.$touchingY;
            var scrollingView = Scroller.scrollingView || this;
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
        };
        Scroller.prototype.$onTouchEnd = function (e) {
            if (e.identifier !== this.$touchingId) {
                return;
            }
            if (Scroller.scrollingView === this) {
                Scroller.scrollingView = null;
            }
            else {
                return;
            }
            var sumVelocityX = 0;
            var sumVelocityY = 0;
            var scrollTop = this.$scrollTop;
            var scrollLeft = this.$scrollLeft;
            var velocitiesX = this.$velocitiesX;
            var velocitiesY = this.$velocitiesY;
            var numVelocities = velocitiesX.length;
            for (var i = 0; i < numVelocities; ++i) {
                sumVelocityX += velocitiesX[i];
                sumVelocityY += velocitiesY[i];
            }
            var velocityX = sumVelocityX / numVelocities;
            var velocityY = sumVelocityY / numVelocities;
            var absVelocityX = Math.abs(velocityX);
            var absVelocityY = Math.abs(velocityY);
            if (absVelocityX > 0.01 || absVelocityY > 0.01) {
                var duration = Math.max(absVelocityX, absVelocityY, 1) * 1000;
                this.$inertiaTween = Tween.get(this).to({
                    scrollTop: scrollTop - velocityY * (absVelocityY + 1) * 200,
                    scrollLeft: scrollLeft - velocityX * (absVelocityX + 1) * 200
                }, duration, Ease.easeOutQuart).play();
            }
            this.$touchingId = null;
        };
        Scroller.prototype.$onTouchCancel = function (e) {
            if (e.identifier === this.$touchingId) {
                this.$touchingId = null;
            }
        };
        Scroller.prototype.$emitRemovedFromStage = function () {
            _super.prototype.$emitRemovedFromStage.call(this);
            if (this.$inertiaTween) {
                this.$inertiaTween.pause();
                this.$inertiaTween = null;
            }
        };
        return Scroller;
    }(Layer));

    var Scroller$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Scroller: Scroller
    });

    var Image = /** @class */ (function (_super) {
        __extends(Image, _super);
        function Image(texture, width, height) {
            var _this = _super.call(this) || this;
            _this.$texture = null;
            _this.$fillMode = Image.SCALE;
            _this.$clipRect = null;
            _this.$scale9Grid = null;
            _this.$pattern = null;
            _this.$boundOnTextureLoad = _this.$onTextureLoad.bind(_this);
            if (texture) {
                _this.$width = width;
                _this.$height = height;
                _this.texture = texture;
            }
            return _this;
        }
        Object.defineProperty(Image.prototype, "texture", {
            get: function () {
                return this.$texture;
            },
            set: function (texture) {
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
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Image.prototype, "fillMode", {
            get: function () {
                return this.$fillMode;
            },
            set: function (fillMode) {
                this.$fillMode = fillMode;
                this.$updatePattern();
                this.$markDirty();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Image.prototype, "clipRect", {
            get: function () {
                return this.$clipRect;
            },
            set: function (clipRect) {
                this.$clipRect = clipRect;
                this.$markDirty();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Image.prototype, "scale9Grid", {
            get: function () {
                return this.$scale9Grid;
            },
            set: function (scale9Grid) {
                this.$scale9Grid = scale9Grid;
                this.$markDirty();
            },
            enumerable: false,
            configurable: true
        });
        Image.prototype.$onTextureLoad = function () {
            this.$updatePattern();
            this.$resizeCanvas();
            this.$texture.off(Event.LOAD, this.$boundOnTextureLoad);
        };
        Image.prototype.$updatePattern = function () {
            var width = this.$width;
            var height = this.$height;
            var texture = this.$texture;
            var fillMode = this.$fillMode;
            if ((width || height) && texture && fillMode && fillMode !== Image.SCALE) {
                this.$pattern = this.$context.createPattern(texture.element, fillMode);
            }
            else {
                this.$pattern = null;
            }
        };
        Image.prototype.$getContentBounds = function () {
            var texture = this.$texture;
            var clipRect = this.$clipRect;
            var bounds = _super.prototype.$getContentBounds.call(this);
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
        };
        Image.prototype.$drawPattern = function (targetX, targetY, targetW, targetH) {
            var ctx = this.$context;
            var texture = this.$texture;
            var pattern = this.$pattern;
            var scale = Layer.pixelRatio / texture.pixelRatio;
            scale !== 1 && ctx.scale(scale, scale);
            ctx.fillStyle = pattern;
            ctx.fillRect(targetX, targetY, targetW, targetH);
        };
        Image.prototype.$drawTexture = function (sourceX, sourceY, sourceW, sourceH, targetX, targetY, targetW, targetH) {
            if (sourceW <= 0 || sourceH <= 0 || targetW <= 0 || targetH <= 0) {
                return;
            }
            var ctx = this.$context;
            var texture = this.$texture;
            var pixelRatio = texture.pixelRatio;
            if (sourceW > 0 && sourceH > 0 && targetW > 0 && targetH > 0) {
                ctx.drawImage(texture.element, sourceX * pixelRatio, sourceY * pixelRatio, sourceW * pixelRatio, sourceH * pixelRatio, targetX, targetY, targetW, targetH);
            }
        };
        Image.prototype.$render = function () {
            if (!this.$dirty) {
                return 0;
            }
            var canvas = this.$canvas;
            var anchorX = this.$anchorX;
            var anchorY = this.$anchorY;
            var texture = this.$texture;
            var pattern = this.$pattern;
            var clipRect = this.$clipRect;
            var scale9Grid = this.$scale9Grid;
            var drawCalls = _super.prototype.$render.call(this);
            var pixelRatio = Layer.pixelRatio;
            var x = -anchorX * pixelRatio;
            var y = -anchorY * pixelRatio;
            var width = canvas.width;
            var height = canvas.height;
            var clipX = clipRect ? clipRect.x : 0;
            var clipY = clipRect ? clipRect.y : 0;
            var clipWidth = clipRect ? clipRect.width : texture ? texture.width : 0;
            var clipHeight = clipRect ? clipRect.height : texture ? texture.height : 0;
            if (!texture) {
                return drawCalls;
            }
            else if (pattern) {
                this.$drawPattern(x, y, width, height);
            }
            else if (scale9Grid) {
                var sourceX0 = clipX;
                var sourceY0 = clipY;
                var sourceW0 = scale9Grid.x;
                var sourceH0 = scale9Grid.y;
                var sourceX1 = sourceX0 + sourceW0;
                var sourceY1 = sourceY0 + sourceH0;
                var sourceW1 = scale9Grid.width;
                var sourceH1 = scale9Grid.height;
                var sourceX2 = sourceX1 + sourceW1;
                var sourceY2 = sourceY1 + sourceH1;
                var sourceW2 = clipWidth - sourceW0 - sourceW1;
                var sourceH2 = clipHeight - sourceH0 - sourceH1;
                var targetX0 = -anchorX * pixelRatio;
                var targetY0 = -anchorY * pixelRatio;
                var targetW0 = sourceW0 * pixelRatio;
                var targetH0 = sourceH0 * pixelRatio;
                var targetX1 = targetX0 + targetW0;
                var targetY1 = targetY0 + targetH0;
                var targetW1 = width - (sourceW0 + sourceW2) * pixelRatio;
                var targetH1 = height - (sourceH0 + sourceH2) * pixelRatio;
                var targetX2 = targetX1 + targetW1;
                var targetY2 = targetY1 + targetH1;
                var targetW2 = width - targetW0 - targetW1;
                var targetH2 = height - targetH0 - targetH1;
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
        };
        Image.SCALE = 'scale';
        Image.REPEAT = 'repeat';
        Image.REPEAT_X = 'repeat-x';
        Image.REPEAT_Y = 'repeat-y';
        return Image;
    }(Layer));

    var Image$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Image: Image
    });

    var Text = /** @class */ (function (_super) {
        __extends(Text, _super);
        function Text(text, options) {
            if (options === void 0) { options = {}; }
            var _this = _super.call(this) || this;
            _this.$text = '';
            _this.$color = 'black';
            _this.$fontSize = Text.defaultFontSize;
            _this.$fontStyle = 'normal';
            _this.$fontWeight = 'normal';
            _this.$textAlign = 'left';
            _this.$verticalAlign = 'top';
            _this.$lineHeight = 1.2;
            _this.$strokeSize = 0;
            _this.$strokeColor = null;
            _this.$fontFamily = 'Helvetica';
            _this.$multiline = false;
            _this.$breakWord = false;
            _this.$autoFitSize = false;
            _this.$minFontSize = 0;
            _this.$explicitSize = 0;
            _this.$lines = [];
            _this.$text = text || _this.$text;
            _this.$color = options.color || _this.$color;
            _this.$fontSize = options.fontSize || _this.$fontSize;
            _this.$fontStyle = options.fontStyle || _this.$fontStyle;
            _this.$fontWeight = options.fontWeight || _this.$fontWeight;
            _this.$textAlign = options.textAlign || _this.$textAlign;
            _this.$verticalAlign = options.verticalAlign || _this.$verticalAlign;
            _this.$lineHeight = options.lineHeight || _this.$lineHeight;
            _this.$strokeSize = options.strokeSize || _this.$strokeSize;
            _this.$strokeColor = options.strokeColor || _this.$strokeColor;
            _this.$fontFamily = options.fontFamily || _this.$fontFamily;
            _this.$multiline = options.multiline || _this.$multiline;
            _this.$breakWord = options.breakWord || _this.$breakWord;
            _this.$autoFitSize = options.autoFitSize || _this.autoFitSize;
            _this.$minFontSize = options.minFontSize || _this.minFontSize;
            _this.$resizeCanvas();
            return _this;
        }
        Object.defineProperty(Text.prototype, "text", {
            get: function () {
                return this.$text;
            },
            set: function (text) {
                this.$text = text;
                this.$resizeCanvas();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Text.prototype, "color", {
            get: function () {
                return this.$color;
            },
            set: function (color) {
                this.$color = color;
                this.$markDirty();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Text.prototype, "fontSize", {
            get: function () {
                return this.$fontSize;
            },
            set: function (fontSize) {
                this.$fontSize = fontSize;
                this.$resizeCanvas();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Text.prototype, "fontStyle", {
            get: function () {
                return this.$fontStyle;
            },
            set: function (fontStyle) {
                this.$fontStyle = fontStyle;
                this.$resizeCanvas();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Text.prototype, "fontWeight", {
            get: function () {
                return this.$fontWeight;
            },
            set: function (fontWeight) {
                this.$fontWeight = fontWeight;
                this.$resizeCanvas();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Text.prototype, "textAlign", {
            get: function () {
                return this.$textAlign;
            },
            set: function (textAlign) {
                this.$textAlign = textAlign;
                this.$markDirty();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Text.prototype, "verticalAlign", {
            get: function () {
                return this.$verticalAlign;
            },
            set: function (verticalAlign) {
                this.$verticalAlign = verticalAlign;
                this.$markDirty();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Text.prototype, "lineHeight", {
            get: function () {
                return this.$lineHeight;
            },
            set: function (lineHeight) {
                this.$lineHeight = lineHeight;
                this.$resizeCanvas();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Text.prototype, "strokeSize", {
            get: function () {
                return this.$strokeSize;
            },
            set: function (strokeSize) {
                this.$strokeSize = strokeSize;
                this.$markDirty();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Text.prototype, "strokeColor", {
            get: function () {
                return this.$strokeColor;
            },
            set: function (strokeColor) {
                this.$strokeColor = strokeColor;
                this.$markDirty();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Text.prototype, "fontFamily", {
            get: function () {
                return this.$fontFamily;
            },
            set: function (fontFamily) {
                this.$fontFamily = fontFamily;
                this.$resizeCanvas();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Text.prototype, "multiline", {
            get: function () {
                return this.$multiline;
            },
            set: function (multiline) {
                this.$multiline = multiline;
                this.$resizeCanvas();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Text.prototype, "breakWord", {
            get: function () {
                return this.$breakWord;
            },
            set: function (breakWord) {
                this.$breakWord = breakWord;
                this.$resizeCanvas();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Text.prototype, "autoFitSize", {
            get: function () {
                return this.$autoFitSize;
            },
            set: function (autoFitSize) {
                this.$autoFitSize = autoFitSize;
                this.$resizeCanvas();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Text.prototype, "minFontSize", {
            get: function () {
                return this.$minFontSize;
            },
            set: function (minFontSize) {
                this.$minFontSize = minFontSize;
                this.$resizeCanvas();
            },
            enumerable: false,
            configurable: true
        });
        Text.prototype.$updateContext = function () {
            var ctx = this.$context;
            var fontStyle = this.$fontStyle;
            var fontWeight = this.$fontWeight;
            var pixelRatio = Layer.pixelRatio;
            var fontSize = this.$explicitSize || this.$fontSize;
            var sizeStr = fontSize * pixelRatio + 'px';
            ctx.font = fontStyle + ' ' + fontWeight + ' ' + sizeStr + ' ' + this.$fontFamily;
            ctx.textAlign = this.$textAlign;
            ctx.textBaseline = 'top';
            ctx.fillStyle = this.$color;
            ctx.lineWidth = this.$strokeSize * pixelRatio;
            ctx.strokeStyle = this.$strokeColor;
        };
        Text.prototype.$divideUnits = function () {
            var units;
            var text = this.$text;
            var breakWord = this.$breakWord;
            var wordRe = Text.wordRe;
            var boundaryRe = Text.boundaryRe;
            if (breakWord) {
                units = text.split('');
            }
            else {
                var words = text.split(boundaryRe);
                units = [];
                for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
                    var unit = words_1[_i];
                    if (wordRe.test(unit)) {
                        units.push(unit);
                    }
                    else {
                        units = units.concat(unit.split(''));
                    }
                }
            }
            return units;
        };
        Text.prototype.$divideLines = function () {
            var text = this.$text;
            if (!this.$multiline) {
                this.$lines = [text];
                return;
            }
            else if (!this.$width) {
                this.$lines = text.split('\n');
                return;
            }
            var line = '';
            var ctx = this.$context;
            var lines = this.$lines = [];
            var units = this.$divideUnits();
            var width = this.$width * Layer.pixelRatio;
            this.$updateContext();
            for (var _i = 0, units_1 = units; _i < units_1.length; _i++) {
                var unit = units_1[_i];
                if (unit === '\n') {
                    lines.push(line);
                    line = '';
                    continue;
                }
                var lineWidth = ctx.measureText(line + unit).width;
                if (lineWidth <= width) {
                    line += unit;
                }
                else {
                    line && lines.push(line);
                    line = unit;
                }
            }
            lines.push(line);
        };
        Text.prototype.$resizeCanvas = function () {
            var width = this.$width;
            var height = this.$height;
            this.$divideLines();
            if (this.$autoFitSize && (width || height)) {
                var minFontSize = this.$minFontSize || 1;
                this.$explicitSize = this.$fontSize;
                while (this.$explicitSize > minFontSize) {
                    var bounds = this.$getContentBounds();
                    if ((width && bounds.width > width) || (height && bounds.height > height)) {
                        --this.$explicitSize;
                    }
                    else {
                        break;
                    }
                    bounds.release();
                }
            }
            _super.prototype.$resizeCanvas.call(this);
        };
        Text.prototype.$getContentBounds = function () {
            var ctx = this.$context;
            var bounds = _super.prototype.$getContentBounds.call(this);
            var lines = this.$lines;
            var lineHeight = this.$lineHeight;
            var pixelRatio = Layer.pixelRatio;
            var fontSize = this.$explicitSize || this.$fontSize;
            this.$updateContext();
            for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
                var line = lines_1[_i];
                bounds.width = Math.max(bounds.width, ctx.measureText(line).width / pixelRatio);
            }
            bounds.height = Math.max(bounds.height, fontSize * lineHeight * lines.length);
            return bounds;
        };
        Text.prototype.$render = function () {
            if (!this.$dirty) {
                return 0;
            }
            var x = 0;
            var y = 0;
            var width = this.width;
            var height = this.height;
            var anchorX = this.anchorX;
            var anchorY = this.anchorY;
            var ctx = this.$context;
            var lines = this.$lines;
            var color = this.$color;
            var textAlign = this.$textAlign;
            var verticalAlign = this.$verticalAlign;
            var lineHeight = this.$lineHeight;
            var strokeSize = this.$strokeSize;
            var strokeColor = this.$strokeColor;
            var pixelRatio = Layer.pixelRatio;
            var fontSize = this.$explicitSize || this.$fontSize;
            var drawCalls = _super.prototype.$render.call(this);
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
            for (var _i = 0, lines_2 = lines; _i < lines_2.length; _i++) {
                var line = lines_2[_i];
                if (color) {
                    ctx.fillText(line, x, y);
                }
                if (strokeSize && strokeColor) {
                    ctx.strokeText(line, x, y);
                }
                y += fontSize * lineHeight * pixelRatio;
            }
            return drawCalls;
        };
        Text.defaultFontSize = 16;
        Text.wordRe = /\w+/;
        Text.boundaryRe = /\b/;
        return Text;
    }(Layer));

    var Text$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Text: Text
    });

    var Input = /** @class */ (function (_super) {
        __extends(Input, _super);
        function Input(value, options) {
            if (options === void 0) { options = {}; }
            var _this = _super.call(this, '', options) || this;
            _this.$value = '';
            _this.$type = 'text';
            _this.$maxLength = 0xffffff;
            _this.$placeholder = '';
            _this.$placeholderColor = '#888';
            _this.$explicitColor = 'black';
            _this.$value = value || _this.$value;
            _this.$type = options.type || _this.$type;
            _this.$maxLength = options.maxLength || _this.$maxLength;
            _this.$placeholder = options.placeholder || _this.$placeholder;
            _this.$placeholderColor = options.placeholderColor || _this.$placeholderColor;
            _this.$boundFocus = _this.focus.bind(_this);
            _this.$updateText();
            _this.on(TouchEvent.TOUCH_TAP, _this.$onTouchTap);
            return _this;
        }
        Object.defineProperty(Input.prototype, "text", {
            set: function (text) {
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Input.prototype, "value", {
            get: function () {
                return this.$value;
            },
            set: function (value) {
                this.$value = value;
                this.$updateText();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Input.prototype, "type", {
            get: function () {
                return this.$type;
            },
            set: function (type) {
                this.$type = type;
                this.$updateText();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Input.prototype, "color", {
            get: function () {
                return this.$explicitColor;
            },
            set: function (color) {
                this.$explicitColor = color;
                if (this.$value) {
                    this.$color = color;
                }
                else {
                    this.$color = this.$placeholderColor;
                }
                this.$markDirty();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Input.prototype, "maxLength", {
            get: function () {
                return this.$maxLength;
            },
            set: function (maxLength) {
                this.$maxLength = maxLength;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Input.prototype, "placeholder", {
            get: function () {
                return this.$placeholder;
            },
            set: function (placeholder) {
                this.$placeholder = placeholder;
                this.$updateText();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Input.prototype, "placeholderColor", {
            get: function () {
                return this.$placeholderColor;
            },
            set: function (placeholderColor) {
                this.$placeholderColor = placeholderColor;
                this.$markDirty();
            },
            enumerable: false,
            configurable: true
        });
        Input.prototype.selectAll = function () {
            var element = this.$updateElement();
            this.focus();
            element.selectionStart = 0;
            element.selectionEnd = this.$value.length;
            return this;
        };
        Input.prototype.focus = function () {
            var element = this.$updateElement();
            element.style.display = 'block';
            element.value = this.$value;
            element.focus();
            Input.$focusedInput = this;
            return this;
        };
        Input.prototype.blur = function () {
            var element = this.$updateElement();
            element.style.display = 'none';
            element.blur();
            if (Input.$focusedInput === this) {
                this.value = element.value;
                Input.$focusedInput = null;
            }
            return this;
        };
        Input.prototype.$updateText = function () {
            var text;
            var type = this.$type;
            var value = this.$value;
            if (type === 'password') {
                text = '';
                for (var i = 0, l = value.length; i < l; ++i) {
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
        };
        Input.prototype.$updateElement = function () {
            var tagName = this.$multiline && this.$type === 'text' ? 'textarea' : 'input';
            var element = Input.$getElement(tagName);
            var isInput = tagName === 'input';
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
        };
        Input.prototype.$markDirty = function (sizeDirty) {
            _super.prototype.$markDirty.call(this, sizeDirty);
            if (Input.$focusedInput) {
                this.$updateElement();
            }
        };
        Input.prototype.$onTouchTap = function () {
            setTimeout(this.$boundFocus, 100);
        };
        Input.$getElement = function (tagName) {
            var element;
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
                element.addEventListener('input', function () {
                    Input.$focusedInput.value = element.value;
                });
                element.addEventListener('blur', function () {
                    Input.$focusedInput.blur();
                });
                if (tagName === 'input') {
                    element.addEventListener('keydown', function (e) {
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
        };
        return Input;
    }(Text));

    var Input$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Input: Input
    });

    var MovieClip = /** @class */ (function (_super) {
        __extends(MovieClip, _super);
        function MovieClip(texture, frames) {
            var _this = _super.call(this, texture) || this;
            _this.$loop = true;
            _this.$interval = 30;
            _this.$paused = false;
            _this.$currentFrame = 0;
            _this.$frames = null;
            _this.$frames = frames;
            _this.$boundNextFrame = _this.nextFrame.bind(_this);
            _this.play();
            return _this;
        }
        Object.defineProperty(MovieClip.prototype, "loop", {
            get: function () {
                return this.$loop;
            },
            set: function (loop) {
                this.$loop = loop;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MovieClip.prototype, "interval", {
            get: function () {
                return this.$interval;
            },
            set: function (interval) {
                this.$interval = interval;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MovieClip.prototype, "paused", {
            get: function () {
                return this.$paused;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MovieClip.prototype, "currentFrame", {
            get: function () {
                return this.$currentFrame;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MovieClip.prototype, "totalFrames", {
            get: function () {
                return this.$frames.length;
            },
            enumerable: false,
            configurable: true
        });
        MovieClip.prototype.play = function () {
            this.off(Event.ADDED_TO_STAGE, this.play);
            return this.gotoAndPlay(this.$currentFrame);
        };
        MovieClip.prototype.pause = function () {
            var ticker = this.ticker;
            this.$paused = true;
            if (ticker) {
                ticker.clearTimeout(this.$timer);
            }
            this.off(Event.ADDED_TO_STAGE, this.play);
            return this;
        };
        MovieClip.prototype.nextFrame = function () {
            return this.gotoAndPlay(this.$currentFrame + 1);
        };
        MovieClip.prototype.gotoAndPlay = function (frame) {
            this.$paused = false;
            this.$gotoFrame(frame);
            var loop = this.$loop;
            var ticker = this.ticker;
            var frames = this.$frames;
            var totalFrames = frames.length;
            var frameData = frames[this.$currentFrame];
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
        };
        MovieClip.prototype.gotoAndStop = function (frame) {
            this.$paused = true;
            this.$gotoFrame(frame);
            return this;
        };
        MovieClip.prototype.$gotoFrame = function (frame) {
            var totalFrames = this.$frames.length;
            if (frame < 0 || frame >= totalFrames) {
                frame = (frame + totalFrames) % totalFrames;
            }
            if (frame < 0) {
                frame = 0;
            }
            var frameData = this.$frames[frame];
            if (!frameData) {
                return;
            }
            this.$currentFrame = frame;
            this.clipRect = frameData.clip;
            if (this.stage && frameData.callback) {
                frameData.callback.call(this);
            }
        };
        return MovieClip;
    }(Image));

    var MovieClip$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        MovieClip: MovieClip
    });

    var Request = /** @class */ (function (_super) {
        __extends(Request, _super);
        function Request(url, options) {
            var _this = _super.call(this) || this;
            _this.$xhr = new XMLHttpRequest();
            var method;
            var headers;
            var data;
            var responseType;
            var xhr = _this.$xhr;
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
                var contentType = Request.$getContentType(headers);
                if (method.toLowerCase() === 'get') {
                    var qs = Request.$getQueryString(data);
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
                Object.keys(headers).forEach(function (key) {
                    xhr.setRequestHeader(key, headers[key]);
                });
            }
            xhr.addEventListener('abort', _this.$onAbort.bind(_this));
            xhr.addEventListener('progress', _this.$onProgress.bind(_this));
            xhr.addEventListener('readystatechange', _this.$onReadyStateChange.bind(_this));
            xhr.send(data);
            return _this;
        }
        Object.defineProperty(Request.prototype, "status", {
            get: function () {
                return this.$xhr.status;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Request.prototype, "response", {
            get: function () {
                return this.$xhr.response;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Request.prototype, "responseHeaders", {
            get: function () {
                var headers = {};
                var str = this.$xhr.getAllResponseHeaders();
                var arr = str.split('\n');
                for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                    var header = arr_1[_i];
                    var index = header.indexOf(':');
                    var key = header.slice(0, index).trim();
                    var value = header.slice(index + 1).trim();
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
            },
            enumerable: false,
            configurable: true
        });
        Request.prototype.abort = function () {
            this.$xhr.abort();
        };
        Request.prototype.$onAbort = function () {
            this.emit(Event.ABORT);
        };
        Request.prototype.$onProgress = function (e) {
            if (e.lengthComputable) {
                var event = Event.create(Event.PROGRESS, e.loaded / e.total);
                this.emit(event);
                event.release();
            }
        };
        Request.prototype.$onReadyStateChange = function (e) {
            var xhr = this.$xhr;
            if (xhr.readyState === 4) {
                if (xhr.status >= 400 || xhr.status === 0) {
                    this.emit(Event.ERROR, e);
                }
                else {
                    var event = Event.create(Event.LOAD, xhr.response);
                    this.emit(event);
                    event.release();
                }
                this.emit(Event.COMPLETE);
            }
        };
        Request.$getContentType = function (headers) {
            for (var key in headers) {
                if (key.toLowerCase() === 'content-type') {
                    return headers[key].toLowerCase();
                }
            }
            return null;
        };
        Request.$getQueryString = function (data) {
            return Object.keys(data).map(function (key) { return key + '=' + data[key]; }).join('&');
        };
        return Request;
    }(EventEmitter));

    var Request$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Request: Request
    });

    var Media = /** @class */ (function (_super) {
        __extends(Media, _super);
        function Media(stage) {
            var _this = _super.call(this) || this;
            _this.$loaded = false;
            _this.$errored = false;
            _this.$stage = stage;
            _this.$boundOnLoad = _this.$onLoad.bind(_this);
            _this.$boundOnError = _this.$onError.bind(_this);
            return _this;
        }
        Object.defineProperty(Media.prototype, "element", {
            get: function () {
                return this.$element;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Media.prototype, "url", {
            get: function () {
                return this.$element.src || '';
            },
            set: function (url) {
                this.$loaded = false;
                this.$errored = false;
                this.$element.src = url;
            },
            enumerable: false,
            configurable: true
        });
        Media.prototype.on = function (type, listener) {
            _super.prototype.on.call(this, type, listener);
            if (type === Event.LOAD && this.$loaded) {
                var event = Event.create(type);
                listener.call(this, event);
                event.release();
            }
            else if (type === Event.ERROR && this.$errored) {
                var event = Event.create(type);
                listener.call(this, event);
                event.release();
            }
            return this;
        };
        Media.prototype.$onLoad = function () {
            this.$loaded = true;
            this.emit(Event.LOAD);
            this.$element.removeEventListener(Event.LOAD, this.$boundOnLoad);
        };
        Media.prototype.$onError = function () {
            this.$errored = true;
            this.emit(Event.ERROR);
            this.$element.removeEventListener(Event.ERROR, this.$boundOnError);
        };
        return Media;
    }(EventEmitter));

    var Media$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Media: Media
    });

    var Sound = /** @class */ (function (_super) {
        __extends(Sound, _super);
        function Sound(stage, url) {
            var _this = _super.call(this, stage) || this;
            _this.$loops = 1;
            _this.$startTime = 0;
            _this.$paused = true;
            var audio = document.createElement('audio');
            audio.crossOrigin = '*';
            audio.addEventListener('canplaythrough', _this.$boundOnLoad);
            audio.addEventListener('error', _this.$boundOnError);
            audio.addEventListener('ended', _this.$onEnded.bind(_this));
            _this.$element = audio;
            _this.$boundOnTouch = _this.$onTouch.bind(_this);
            if (url) {
                _this.url = url;
            }
            stage.ticker.on(Event.TICKER_PAUSE, _this.$onTickerPause.bind(_this));
            stage.ticker.on(Event.TICKER_RESUME, _this.$onTickerResume.bind(_this));
            stage.on(Event.REMOVED_FROM_STAGE, _this.$onRemovedFromStage.bind(_this));
            return _this;
        }
        Object.defineProperty(Sound.prototype, "element", {
            get: function () {
                return this.$element;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Sound.prototype, "url", {
            get: function () {
                return this.$element.src;
            },
            set: function (url) {
                this.$paused = true;
                this.$element.src = url;
                this.$element.load();
                if (url.indexOf('data:') === 0) {
                    this.$stage.ticker.setTimeout(this.$boundOnLoad);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Sound.prototype, "volume", {
            get: function () {
                return this.$element.volume;
            },
            set: function (volume) {
                this.$element.volume = volume;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Sound.prototype, "paused", {
            get: function () {
                return this.$paused;
            },
            enumerable: false,
            configurable: true
        });
        Sound.prototype.play = function (startTime, loops) {
            if (startTime === void 0) { startTime = 0; }
            if (loops === void 0) { loops = 1; }
            this.$loops = loops;
            this.$startTime = startTime;
            this.$element.currentTime = startTime;
            this.$paused = false;
            this.$checkStatus();
            return this;
        };
        Sound.prototype.stop = function () {
            this.$paused = true;
            this.$element.pause();
            return this;
        };
        Sound.prototype.$checkOnTouch = function () {
            document.addEventListener('click', this.$boundOnTouch);
            document.addEventListener('touchend', this.$boundOnTouch);
        };
        Sound.prototype.$checkStatus = function () {
            var promise = this.$element.play();
            if (promise) {
                promise.catch();
            }
            if (this.$paused) {
                this.$element.pause();
            }
        };
        Sound.prototype.$onTouch = function () {
            this.$checkStatus();
            document.removeEventListener('click', this.$boundOnTouch);
            document.removeEventListener('touchend', this.$boundOnTouch);
        };
        Sound.prototype.$onEnded = function () {
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
        };
        Sound.prototype.$onTickerPause = function () {
            if (!this.$paused) {
                this.$element.pause();
            }
        };
        Sound.prototype.$onTickerResume = function () {
            if (!this.$paused) {
                this.$checkStatus();
            }
        };
        Sound.prototype.$onRemovedFromStage = function () {
            this.stop();
            document.removeEventListener('click', this.$boundOnTouch);
            document.removeEventListener('touchend', this.$boundOnTouch);
        };
        Sound.prototype.$onLoad = function () {
            _super.prototype.$onLoad.call(this);
            var promise = this.$element.play();
            if (promise) {
                promise
                    .then(this.$checkStatus.bind(this))
                    .catch(this.$checkOnTouch.bind(this));
            }
            else {
                this.$checkOnTouch();
            }
        };
        return Sound;
    }(Media));

    var Sound$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Sound: Sound
    });

    var Texture = /** @class */ (function (_super) {
        __extends(Texture, _super);
        function Texture(stage, url) {
            var _this = _super.call(this, stage) || this;
            _this.pixelRatio = Texture.defaultPixelRatio;
            var image = document.createElement('img');
            image.crossOrigin = '*';
            image.addEventListener('load', _this.$boundOnLoad);
            image.addEventListener('error', _this.$boundOnError);
            _this.$element = image;
            if (url) {
                _this.url = url;
            }
            return _this;
        }
        Object.defineProperty(Texture.prototype, "element", {
            get: function () {
                return this.$element;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Texture.prototype, "width", {
            get: function () {
                return this.$element.width / this.pixelRatio;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Texture.prototype, "height", {
            get: function () {
                return this.$element.height / this.pixelRatio;
            },
            enumerable: false,
            configurable: true
        });
        Texture.defaultPixelRatio = 1;
        return Texture;
    }(Media));

    var Texture$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Texture: Texture
    });

    var ResourceManager = /** @class */ (function (_super) {
        __extends(ResourceManager, _super);
        function ResourceManager(stage, list, options) {
            var _this = _super.call(this) || this;
            _this.$errorCount = 0;
            _this.$loadedCount = 0;
            _this.$loadingCount = 0;
            _this.$stage = stage;
            _this.threads = options && options.threads || 2;
            _this.timeout = options && options.timeout || 10000;
            _this.retryTimes = options && options.retryTimes || 3;
            _this.$list = list.concat();
            _this.$total = list.length;
            _this.$resources = {};
            _this.$checkPendingTasks();
            return _this;
        }
        Object.defineProperty(ResourceManager.prototype, "total", {
            get: function () {
                return this.$total;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ResourceManager.prototype, "errorCount", {
            get: function () {
                return this.$errorCount;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ResourceManager.prototype, "loadedCount", {
            get: function () {
                return this.$loadedCount;
            },
            enumerable: false,
            configurable: true
        });
        ResourceManager.prototype.$checkPendingTasks = function () {
            if (this.$loadingCount < this.threads && this.$list.length > 0) {
                ++this.$loadingCount;
                this.$load(this.$list.shift(), 1);
            }
        };
        ResourceManager.prototype.$load = function (info, attempts) {
            var _this = this;
            var timer;
            var resource;
            var name = info.name;
            var type = info.type;
            var url = info.url;
            var total = this.$total;
            var stage = this.$stage;
            var ticker = stage.ticker;
            var resources = this.$resources;
            var retryTimes = this.retryTimes;
            var successCallback = function () {
                var errorCount = _this.$errorCount;
                var loadedCount = ++_this.$loadedCount;
                --_this.$loadingCount;
                ticker.clearTimeout(timer);
                if (resource instanceof Request) {
                    resources[name] = resource.response;
                }
                else if (resource instanceof Media) {
                    resources[name] = resource;
                }
                resource.off(Event.LOAD, successCallback);
                resource.off(Event.ERROR, errorCallback);
                var event = Event.create(Event.PROGRESS, (loadedCount + errorCount) / total);
                _this.emit(event);
                event.release();
                if (loadedCount + errorCount === total) {
                    _this.emit(Event.COMPLETE);
                }
                else {
                    _this.$checkPendingTasks();
                }
            };
            var errorCallback = function () {
                if (attempts < retryTimes) {
                    _this.$load(info, attempts + 1);
                }
                else {
                    --_this.$loadingCount;
                    var loadedCount = _this.$loadedCount;
                    var errorCount = ++_this.$errorCount;
                    if (resource instanceof Request) {
                        resources[name] = resource.response;
                    }
                    else if (resource instanceof Media) {
                        resources[name] = resource;
                    }
                    _this.emit(Event.PROGRESS, (loadedCount + errorCount) / total);
                    if (loadedCount + errorCount === total) {
                        _this.emit(Event.COMPLETE);
                    }
                    else {
                        _this.$checkPendingTasks();
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
        };
        ResourceManager.prototype.has = function (name) {
            return !!this.$resources[name];
        };
        ResourceManager.prototype.get = function (name) {
            return this.$resources[name];
        };
        ResourceManager.TYPE_TEXT = 'text';
        ResourceManager.TYPE_JSON = 'json';
        ResourceManager.TYPE_BINARY = 'binary';
        ResourceManager.TYPE_TEXTURE = 'texture';
        ResourceManager.TYPE_SOUND = 'sound';
        return ResourceManager;
    }(EventEmitter));

    var ResourceManager$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ResourceManager: ResourceManager
    });

    var Stage = /** @class */ (function (_super) {
        __extends(Stage, _super);
        function Stage(canvas) {
            var _this = _super.call(this) || this;
            _this.$drawCalls = 0;
            _this.$activated = false;
            _this.$scaleMode = Stage.SHOW_ALL;
            _this.$viewportWidth = 0;
            _this.$viewportHeight = 0;
            _this.$viewportBackground = null;
            _this.$renderBounds = Rectangle.create();
            _this.$ticker = new Ticker(_this);
            _this.$elementEvents = [];
            _this.$viewportCanvas = canvas || document.createElement('canvas');
            _this.$viewportContext = _this.$viewportCanvas.getContext('2d');
            _this.$boundResizeViewportCanvas = _this.$resizeViewportCanvas.bind(_this);
            _this.$resizeViewportCanvas();
            _this.$initEvents();
            _this.width = 320;
            _this.height = 568;
            if (!canvas) {
                _this.$viewportCanvas.style.top = '0';
                _this.$viewportCanvas.style.left = '0';
                _this.$viewportCanvas.style.position = 'fixed';
                document.body.appendChild(_this.$viewportCanvas);
            }
            return _this;
        }
        Object.defineProperty(Stage.prototype, "x", {
            get: function () {
                return 0;
            },
            set: function (x) {
                this.$x = 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Stage.prototype, "y", {
            get: function () {
                return 0;
            },
            set: function (y) {
                this.$y = 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Stage.prototype, "ticker", {
            get: function () {
                return this.$ticker;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Stage.prototype, "fps", {
            get: function () {
                return this.$ticker.fps;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Stage.prototype, "drawCalls", {
            get: function () {
                return this.$drawCalls;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Stage.prototype, "activated", {
            get: function () {
                return this.$activated;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Stage.prototype, "scaleMode", {
            get: function () {
                return this.$scaleMode;
            },
            set: function (scaleMode) {
                if (this.scaleMode !== scaleMode) {
                    this.$scaleMode = scaleMode;
                    this.$resizeCanvas();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Stage.prototype, "viewportCanvas", {
            get: function () {
                return this.$viewportCanvas;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Stage.prototype, "viewportWidth", {
            get: function () {
                return this.$viewportWidth ? this.$viewportWidth : this.$viewportCanvas.width / Layer.pixelRatio;
            },
            set: function (width) {
                if (this.$viewportWidth !== width) {
                    this.$viewportWidth = width;
                    this.$resizeViewportCanvas();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Stage.prototype, "viewportHeight", {
            get: function () {
                return this.$viewportHeight ? this.$viewportHeight : this.$viewportCanvas.height / Layer.pixelRatio;
            },
            set: function (height) {
                if (this.$viewportHeight !== height) {
                    this.$viewportHeight = height;
                    this.$resizeViewportCanvas();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Stage.prototype, "viewportBackground", {
            get: function () {
                return this.$viewportBackground;
            },
            set: function (viewportBackground) {
                this.$viewportBackground = viewportBackground;
                this.$viewportCanvas.style.background = viewportBackground;
            },
            enumerable: false,
            configurable: true
        });
        Stage.prototype.createResourceManager = function (list, options) {
            return new ResourceManager(this, list, options);
        };
        Stage.prototype.removeSelf = function () {
            var canvas = this.$viewportCanvas;
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
        };
        Stage.prototype.$initEvents = function () {
            var _this = this;
            var prefix;
            var hiddenKey;
            var resizeTimer;
            var ticker = this.$ticker;
            var prefixes = ['', 'o', 'ms', 'moz', 'webkit'];
            for (var _i = 0, prefixes_1 = prefixes; _i < prefixes_1.length; _i++) {
                prefix = prefixes_1[_i];
                hiddenKey = prefix ? prefix + 'Hidden' : 'hidden';
                if (document[hiddenKey] !== undefined) {
                    break;
                }
            }
            this.$addTouchEventListeners();
            this.$addElementEvent(window, 'orientationchange', function () {
                ticker.clearTimeout(resizeTimer);
                resizeTimer = ticker.setTimeout(_this.$boundResizeViewportCanvas, 100);
            });
            this.$addElementEvent(window, prefix + 'visibilitychange', function () {
                var hidden = document[hiddenKey];
                _this.$activated = !hidden;
                _this.emit(hidden ? Event.DEACTIVATE : Event.ACTIVATE);
            });
            this.on(Event.ENTER_FRAME, this.$render);
            setTimeout(function () {
                if (!document[hiddenKey]) {
                    _this.$activated = true;
                    _this.emit(Event.ACTIVATE);
                }
                _this.$emitAddedToStage(_this);
            });
        };
        Stage.prototype.$addElementEvent = function (target, type, listener, options) {
            target.addEventListener(type, listener, options);
            this.$elementEvents.push({ target: target, type: type, listener: listener });
        };
        Stage.prototype.$removeElementEvents = function () {
            var listeners = this.$elementEvents;
            for (var _i = 0, listeners_1 = listeners; _i < listeners_1.length; _i++) {
                var _a = listeners_1[_i], target = _a.target, type = _a.type, listener = _a.listener;
                target.removeEventListener(type, listener);
            }
            listeners.length = 0;
        };
        Stage.prototype.$addTouchEventListeners = function () {
            var _this = this;
            if (document.ontouchstart !== undefined) {
                this.$addElementEvent(document, 'touchstart', function (event) {
                    _this.$dispatchTouches(TouchEvent.TOUCH_START, event);
                });
                this.$addElementEvent(document, 'touchmove', function (event) {
                    _this.$dispatchTouches(TouchEvent.TOUCH_MOVE, event);
                    event.preventDefault();
                }, { passive: false });
                this.$addElementEvent(document, 'touchend', function (event) {
                    _this.$dispatchTouches(TouchEvent.TOUCH_END, event);
                    _this.$dispatchTouches(TouchEvent.TOUCH_TAP, event);
                });
                this.$addElementEvent(document, 'touchcancel', function (event) {
                    _this.$dispatchTouches(TouchEvent.TOUCH_CANCEL, event);
                });
            }
            else {
                var touching_1 = false;
                this.$addElementEvent(window, 'mousedown', function (event) {
                    _this.$dispatchTouchEvent(TouchEvent.TOUCH_START, event.pageX, event.pageY, 0);
                    touching_1 = true;
                });
                this.$addElementEvent(window, 'mousemove', function (event) {
                    if (touching_1) {
                        _this.$dispatchTouchEvent(TouchEvent.TOUCH_MOVE, event.pageX, event.pageY, 0);
                    }
                });
                this.$addElementEvent(window, 'mouseup', function (event) {
                    _this.$dispatchTouchEvent(TouchEvent.TOUCH_END, event.pageX, event.pageY, 0);
                    touching_1 = false;
                });
                this.$addElementEvent(window, 'click', function (event) {
                    _this.$dispatchTouchEvent(TouchEvent.TOUCH_TAP, event.pageX, event.pageY, 0);
                });
                this.$addElementEvent(window, 'blur', function () {
                    _this.$dispatchTouchEvent(TouchEvent.TOUCH_CANCEL, 0, 0, 0);
                    touching_1 = false;
                });
            }
        };
        Stage.prototype.$dispatchTouches = function (type, event) {
            var touches = event['changedTouches'];
            for (var i = 0, l = touches.length; i < l; ++i) {
                var touch = touches[i];
                this.$dispatchTouchEvent(type, touch.pageX, touch.pageY, touch.identifier);
            }
        };
        Stage.prototype.$dispatchTouchEvent = function (type, pageX, pageY, identifier) {
            if (this.$ticker.paused || !this.$visible || !this.touchable) {
                return;
            }
            var event = TouchEvent.create(type);
            var scrollX = window.scrollX || 0;
            var scrollY = window.scrollY || 0;
            var width = this.$canvas.width;
            var height = this.$canvas.height;
            var bounds = this.$renderBounds;
            var pixelRatio = Layer.pixelRatio;
            var viewportBounds = this.$viewportCanvas.getBoundingClientRect();
            var x = (pageX - scrollX - viewportBounds.left - bounds.x / pixelRatio) * width / bounds.width - this.$anchorX;
            var y = (pageY - scrollY - viewportBounds.top - bounds.y / pixelRatio) * height / bounds.height - this.$anchorY;
            var matrix = this.$getTransform();
            var localPos = Vector.create(x, y).transform(matrix.invert()).subtract(this.$anchorX, this.$anchorY);
            var inside = this.$localHitTest(localPos);
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
        };
        Stage.prototype.$calculateRenderBounds = function () {
            var x = 0;
            var y = 0;
            var canvas = this.$canvas;
            var width = canvas.width;
            var height = canvas.height;
            var scaleMode = this.$scaleMode;
            var bounds = this.$renderBounds;
            var aspectRatio = width / height;
            var viewportCanvas = this.$viewportCanvas;
            var viewportWidth = viewportCanvas.width;
            var viewportHeight = viewportCanvas.height;
            var viewportAspectRatio = viewportWidth / viewportHeight;
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
        };
        Stage.prototype.$resizeCanvas = function () {
            _super.prototype.$resizeCanvas.call(this);
            this.$calculateRenderBounds();
        };
        Stage.prototype.$resizeViewportCanvas = function () {
            var canvas = this.$viewportCanvas;
            var pixelRatio = Layer.pixelRatio;
            var viewportWidth = this.$viewportWidth || window.innerWidth;
            var viewportHeight = this.$viewportHeight || window.innerHeight;
            var canvasWidth = viewportWidth * pixelRatio;
            var canvasHeight = viewportHeight * pixelRatio;
            if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
                canvas.width = canvasWidth;
                canvas.height = canvasHeight;
                canvas.style.width = viewportWidth + 'px';
                canvas.style.height = viewportHeight + 'px';
                this.$calculateRenderBounds();
                this.$markDirty();
                this.emit(Event.VIEWPORT_RESIZE);
            }
        };
        Stage.prototype.$render = function () {
            if (!this.$dirty) {
                this.$drawCalls = 0;
                return 0;
            }
            var drawCalls = _super.prototype.$render.call(this);
            var canvas = this.$canvas;
            var ctx = this.$viewportContext;
            var bounds = this.$renderBounds;
            var viewportCanvas = this.$viewportCanvas;
            var viewportWidth = viewportCanvas.width;
            var viewportHeight = viewportCanvas.height;
            ctx.clearRect(0, 0, viewportWidth, viewportHeight);
            ctx.drawImage(canvas, (bounds.x + 0.5) | 0, (bounds.y + 0.5) | 0, (bounds.width + 0.5) | 0, (bounds.height + 0.5) | 0);
            this.$drawCalls = ++drawCalls;
            return drawCalls;
        };
        Stage.SHOW_ALL = 'showAll';
        Stage.EXACT_FIT = 'exactFit';
        Stage.NO_SCALE = 'noScale';
        Stage.NO_BORDER = 'noBorder';
        Stage.FIXED_WIDE = 'fixedWide';
        Stage.FIXED_NARROW = 'fixedNarrow';
        Stage.FIXED_WIDTH = 'fixedWidth';
        Stage.FIXED_HEIGHT = 'fixedHeight';
        return Stage;
    }(Layer));

    var Stage$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Stage: Stage
    });

    var index = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, Ticker$1), Layer$1), Scroller$1), Image$1), Text$1), Input$1), MovieClip$1), Stage$1), Event$1), TouchEvent$1), EventEmitter$1), Matrix$1), Vector$1), Rectangle$1), Media$1), Texture$1), Sound$1), Ease$1), Tween$1), Request$1), ResourceManager$1);

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
