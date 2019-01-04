var playable = (function (exports) {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var Event = /** @class */ (function () {
        function Event(type) {
            this.type = null;
            this.type = type;
        }
        Event.ADDED = 'added';
        Event.REMOVED = 'removed';
        Event.ADDED_TO_STAGE = 'addToStage';
        Event.REMOVED_FROM_STAGE = 'removeFromStage';
        Event.ENTER_FRAME = 'enterFrame';
        Event.TICK = 'tick';
        Event.TICKER_PAUSE = 'tickerPause';
        Event.TICKER_RESUME = 'tickerResume';
        Event.PROGRESS = 'progress';
        Event.COMPLETE = 'complete';
        Event.LOAD = 'load';
        Event.ERROR = 'error';
        Event.SOUND_COMPLETE = 'soundComplete';
        return Event;
    }());
    //# sourceMappingURL=Event.js.map

    var EventEmitter = /** @class */ (function () {
        function EventEmitter() {
            this.$events = {};
        }
        EventEmitter.prototype.on = function (event, listener) {
            var listeners = this.$events[event] || [];
            listeners.push(listener);
            this.$events[event] = listeners;
            return this;
        };
        EventEmitter.prototype.off = function (event, listener) {
            var listeners = this.$events[event] || [];
            if (listener) {
                var index = listeners.indexOf(listener);
                if (index >= 0) {
                    listeners.splice(index, 1);
                }
            }
            else {
                listeners.length = 0;
            }
            return this;
        };
        EventEmitter.prototype.emit = function (event) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var listeners = this.$events[event];
            if (listeners && listeners.length) {
                for (var _a = 0, listeners_1 = listeners; _a < listeners_1.length; _a++) {
                    var listener = listeners_1[_a];
                    listener.apply(this, args);
                }
                return true;
            }
            return false;
        };
        EventEmitter.prototype.hasEventListener = function (event) {
            var listeners = this.$events[event];
            return listeners && listeners.length > 0;
        };
        EventEmitter.prototype.removeAllListeners = function () {
            this.$events = {};
            return this;
        };
        return EventEmitter;
    }());
    //# sourceMappingURL=EventEmitter.js.map

    var Media = /** @class */ (function (_super) {
        __extends(Media, _super);
        function Media(ticker) {
            var _this = _super.call(this) || this;
            _this.$ticker = ticker;
            _this.$boundOnLoad = _this.$onLoad.bind(_this);
            _this.$boundOnError = _this.$onError.bind(_this);
            return _this;
        }
        Object.defineProperty(Media.prototype, "element", {
            get: function () {
                return this.$element;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Media.prototype, "url", {
            set: function (url) {
                this.$element.src = url;
                if (url.indexOf('data:') === 0) {
                    this.$ticker.setTimeout(this.$boundOnLoad);
                }
            },
            enumerable: true,
            configurable: true
        });
        Media.prototype.$onLoad = function () {
            this.emit('load');
            this.$element.removeEventListener(Event.LOAD, this.$boundOnLoad);
        };
        Media.prototype.$onError = function (e) {
            this.emit('error', e);
            this.$element.removeEventListener(Event.ERROR, this.$boundOnError);
        };
        return Media;
    }(EventEmitter));
    //# sourceMappingURL=Media.js.map

    var Image = /** @class */ (function (_super) {
        __extends(Image, _super);
        function Image(ticker) {
            var _this = _super.call(this, ticker) || this;
            var image = document.createElement('img');
            image.crossOrigin = '*';
            image.addEventListener('load', _this.$boundOnLoad);
            image.addEventListener('error', _this.$boundOnError);
            _this.$element = image;
            return _this;
        }
        Object.defineProperty(Image.prototype, "element", {
            get: function () {
                return this.$element;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Image.prototype, "width", {
            get: function () {
                return this.$element.width;
            },
            set: function (width) {
                this.$element.width = width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Image.prototype, "height", {
            get: function () {
                return this.$element.height;
            },
            set: function (height) {
                this.$element.height = height;
            },
            enumerable: true,
            configurable: true
        });
        return Image;
    }(Media));
    //# sourceMappingURL=Image.js.map

    var Ticker = /** @class */ (function (_super) {
        __extends(Ticker, _super);
        function Ticker(stage) {
            var _this = _super.call(this) || this;
            _this.$stage = stage;
            _this.$timerIndex = 0;
            _this.$timers = [];
            _this.$shouldResume = false;
            _this.$boundTick = _this.$tick.bind(_this);
            _this.$enterFrameCallbackList = [stage];
            _this.$start();
            return _this;
        }
        Object.defineProperty(Ticker.prototype, "paused", {
            get: function () {
                return this.$paused;
            },
            enumerable: true,
            configurable: true
        });
        Ticker.prototype.$start = function () {
            var _this = this;
            window.requestAnimationFrame =
                window['requestAnimationFrame'] ||
                    window['webkitRequestAnimationFrame'] ||
                    window['mozRequestAnimationFrame'] ||
                    window['oRequestAnimationFrame'] ||
                    window['msRequestAnimationFrame'] ||
                    function (callback) {
                        return setTimeout(callback, 1000 / 60);
                    };
            var prefixes = ['', 'ms', 'moz', 'webkit'];
            var _loop_1 = function (prefix) {
                var hidden = prefix ? prefix + 'Hidden' : 'hidden';
                if (document[hidden] === undefined) {
                    return "break";
                }
                document.addEventListener(prefix + 'visibilitychange', function () {
                    var paused = _this.$paused;
                    var hidden = document[prefix + 'hidden'];
                    if (hidden && !paused) {
                        _this.pause();
                        _this.$shouldResume = true;
                    }
                    else if (_this.$shouldResume) {
                        _this.resume();
                        _this.$shouldResume = false;
                    }
                });
            };
            for (var _i = 0, prefixes_1 = prefixes; _i < prefixes_1.length; _i++) {
                var prefix = prefixes_1[_i];
                var state_1 = _loop_1(prefix);
                if (state_1 === "break")
                    break;
            }
            return this.resume();
        };
        Ticker.prototype.pause = function () {
            this.$paused = true;
            this.emit(Event.TICKER_PAUSE);
            return this;
        };
        Ticker.prototype.resume = function () {
            this.$paused = false;
            this.$lastTimestamp = Date.now();
            this.emit(Event.TICKER_RESUME);
            requestAnimationFrame(this.$boundTick);
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
        Ticker.prototype.registerEnterFrameCallback = function (displayObject) {
            var list = this.$enterFrameCallbackList;
            if (list.indexOf(displayObject) < 0) {
                list.push(displayObject);
            }
            return this;
        };
        Ticker.prototype.unregisterEnterFrameCallback = function (displayObject) {
            var list = this.$enterFrameCallbackList;
            var index = list.indexOf(displayObject);
            if (index >= 0) {
                list.splice(index, 1);
            }
            return this;
        };
        Ticker.prototype.$tick = function () {
            if (this.$paused) {
                return;
            }
            var now = Date.now();
            var deltaTime = now - this.$lastTimestamp;
            var enterFrameCallbackList = this.$enterFrameCallbackList;
            for (var _i = 0, enterFrameCallbackList_1 = enterFrameCallbackList; _i < enterFrameCallbackList_1.length; _i++) {
                var displayObject = enterFrameCallbackList_1[_i];
                displayObject.emit(Event.ENTER_FRAME, deltaTime);
            }
            this.emit(Event.TICK, deltaTime);
            this.$lastTimestamp = Date.now();
            this.$checkTimers(deltaTime);
            requestAnimationFrame(this.$boundTick);
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
    //# sourceMappingURL=Ticker.js.map

    var Vector = /** @class */ (function () {
        function Vector(x, y) {
            this.set(x, y);
        }
        Object.defineProperty(Vector.prototype, "length", {
            get: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            },
            enumerable: true,
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
        Vector.prototype.divide = function (x, y) {
            if (x instanceof Vector) {
                this.x /= x.x;
                this.y /= x.y;
            }
            else {
                this.x /= x;
                this.y /= y;
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
        Vector.prototype.angle = function () {
            return Math.atan2(this.y, this.x);
        };
        Vector.prototype.distance = function (v) {
            return Math.sqrt((this.x - v.x) * (this.x - v.x) + (this.y - v.y) * (this.y - v.y));
        };
        Vector.prototype.equals = function (v) {
            return this.x === v.x && this.y === v.y;
        };
        Vector.prototype.transform = function (m) {
            var x = this.x;
            var y = this.y;
            this.x = m.a * x + m.c * y + m.tx;
            this.y = m.b * x + m.d * y + m.ty;
            return this;
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
    //# sourceMappingURL=Vector.js.map

    var Rectangle = /** @class */ (function () {
        function Rectangle(x, y, width, height) {
            this.set(x, y, width, height);
        }
        Rectangle.prototype.set = function (x, y, width, height) {
            this.x = x || 0;
            this.y = y || 0;
            this.width = width || 0;
            this.height = height || 0;
            return this;
        };
        Object.defineProperty(Rectangle.prototype, "top", {
            get: function () {
                return this.y;
            },
            set: function (top) {
                this.height += this.y - top;
                this.y = top;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "bottom", {
            get: function () {
                return this.y + this.height;
            },
            set: function (bottom) {
                this.height = bottom - this.y;
            },
            enumerable: true,
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
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "right", {
            get: function () {
                return this.x + this.width;
            },
            set: function (right) {
                this.width = right - this.x;
            },
            enumerable: true,
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
            enumerable: true,
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
            enumerable: true,
            configurable: true
        });
        Rectangle.prototype.contains = function (x, y) {
            return x >= this.x && x <= this.x + this.width &&
                y <= this.y && y <= this.y + this.height;
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
    //# sourceMappingURL=Rectangle.js.map

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
            this.stageX = 0;
            this.stageY = 0;
            this.identifier = 0;
            this.target = null;
            this.currentTarget = null;
            this.propagationStopped = false;
            return this;
        };
        TouchEvent.prototype.stopPropagation = function () {
            this.propagationStopped = true;
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
        TouchEvent.recycle = function (displayObject) {
            this.$pool.push(displayObject);
        };
        TouchEvent.TOUCH_START = 'touchStart';
        TouchEvent.TOUCH_MOVE = 'touchMove';
        TouchEvent.TOUCH_END = 'touchEnd';
        TouchEvent.TOUCH_CANCEL = 'touchCancel';
        TouchEvent.TOUCH_TAP = 'touchTap';
        TouchEvent.$pool = [];
        return TouchEvent;
    }(Event));
    //# sourceMappingURL=TouchEvent.js.map

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
                return this.append(a.a, a.b, a.c, a.d, a.tx, a.ty);
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
        Matrix.prototype.multiply = function (v) {
            var x = this.a * v.x + this.c * v.y + this.tx;
            var y = this.b * v.x + this.d * v.y + this.ty;
            return Vector.create(x, y);
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
        Matrix.prototype.equals = function (m) {
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
    //# sourceMappingURL=Matrix.js.map

    var DisplayObject = /** @class */ (function (_super) {
        __extends(DisplayObject, _super);
        function DisplayObject() {
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
            _this.$background = null;
            _this.$dirty = true;
            _this.$stage = null;
            _this.$parent = null;
            _this.$children = [];
            _this.$touches = [];
            _this.$pixelRatio = window.devicePixelRatio || 1;
            _this.$canvas = document.createElement('canvas');
            _this.$context = _this.$canvas.getContext('2d');
            _this.on(Event.ADDED, _this.$onAdded);
            _this.on(Event.REMOVED, _this.$onRemoved);
            _this.on(Event.ADDED_TO_STAGE, _this.$onAddedToStage);
            _this.on(Event.REMOVED_FROM_STAGE, _this.$onRemovedFromStage);
            return _this;
        }
        Object.defineProperty(DisplayObject.prototype, "width", {
            get: function () {
                return this.$width ? this.$width : this.$canvas.width / this.$pixelRatio;
            },
            set: function (width) {
                if (this.$width !== width) {
                    this.$width = width;
                    this.$resizeCanvas();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DisplayObject.prototype, "height", {
            get: function () {
                return this.$height ? this.$height : this.$canvas.height / this.$pixelRatio;
            },
            set: function (height) {
                if (this.$height !== height) {
                    this.$height = height;
                    this.$resizeCanvas();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DisplayObject.prototype, "x", {
            get: function () {
                return this.$x;
            },
            set: function (x) {
                if (this.$x !== x) {
                    this.$x = x;
                    this.$markParentDirty();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DisplayObject.prototype, "y", {
            get: function () {
                return this.$y;
            },
            set: function (y) {
                if (this.$y !== y) {
                    this.$y = y;
                    this.$markParentDirty();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DisplayObject.prototype, "anchorX", {
            get: function () {
                return this.$anchorX;
            },
            set: function (anchorX) {
                if (this.$anchorX !== anchorX) {
                    this.$anchorX = anchorX;
                    this.$markDirty();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DisplayObject.prototype, "anchorY", {
            get: function () {
                return this.$anchorY;
            },
            set: function (anchorY) {
                if (this.$anchorY !== anchorY) {
                    this.$anchorY = anchorY;
                    this.$markDirty();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DisplayObject.prototype, "skewX", {
            get: function () {
                return this.$skewX;
            },
            set: function (skewX) {
                if (this.$skewX !== skewX) {
                    this.$skewX = skewX;
                    this.$markParentDirty();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DisplayObject.prototype, "skewY", {
            get: function () {
                return this.$skewY;
            },
            set: function (skewY) {
                if (this.$skewY !== skewY) {
                    this.$skewY = skewY;
                    this.$markParentDirty();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DisplayObject.prototype, "scaleX", {
            get: function () {
                return this.$scaleX;
            },
            set: function (scaleX) {
                if (this.$scaleX !== scaleX) {
                    this.$scaleX = scaleX;
                    this.$markParentDirty();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DisplayObject.prototype, "scaleY", {
            get: function () {
                return this.$scaleY;
            },
            set: function (scaleY) {
                if (this.$scaleY !== scaleY) {
                    this.$scaleY = scaleY;
                    this.$markParentDirty();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DisplayObject.prototype, "rotation", {
            get: function () {
                return this.$rotation;
            },
            set: function (rotation) {
                if (this.$rotation !== rotation) {
                    this.$rotation = rotation;
                    this.$markParentDirty();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DisplayObject.prototype, "alpha", {
            get: function () {
                return this.$alpha;
            },
            set: function (alpha) {
                if (this.$alpha !== alpha) {
                    this.$alpha = alpha;
                    this.$markParentDirty();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DisplayObject.prototype, "background", {
            get: function () {
                return this.$background;
            },
            set: function (background) {
                if (this.$background !== background) {
                    this.$background = background;
                    this.$markDirty();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DisplayObject.prototype, "visible", {
            get: function () {
                return this.$visible;
            },
            set: function (visible) {
                if (this.$visible !== visible) {
                    this.$visible = visible;
                    this.$markParentDirty();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DisplayObject.prototype, "dirty", {
            get: function () {
                return this.$dirty;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DisplayObject.prototype, "stage", {
            get: function () {
                return this.$stage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DisplayObject.prototype, "parent", {
            get: function () {
                return this.$parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DisplayObject.prototype, "children", {
            get: function () {
                return this.$children;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DisplayObject.prototype, "ticker", {
            get: function () {
                return this.$stage ? this.$stage.ticker : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DisplayObject.prototype, "canvas", {
            get: function () {
                return this.$canvas;
            },
            enumerable: true,
            configurable: true
        });
        DisplayObject.prototype.addChild = function (child) {
            return this.addChildAt(child, this.$children.length);
        };
        DisplayObject.prototype.addChildAt = function (child, index) {
            if (child.$parent) {
                child.$parent.removeChild(child);
            }
            if (this.$stage) {
                child.emit(Event.ADDED_TO_STAGE, this.$stage);
            }
            child.emit(Event.ADDED, this);
            this.$children.splice(index, 0, child);
            this.$resizeCanvas();
            return this;
        };
        DisplayObject.prototype.removeChild = function (child) {
            var index = this.$children.indexOf(child);
            return this.removeChildAt(index);
        };
        DisplayObject.prototype.removeChildAt = function (index) {
            if (index >= 0) {
                var child = this.$children.splice(index, 1)[0];
                child.emit(Event.REMOVED, this);
                this.$stage && child.emit(Event.REMOVED_FROM_STAGE, this.$stage);
                this.$resizeCanvas();
            }
            return this;
        };
        DisplayObject.prototype.removeChildrenByName = function (name) {
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
        DisplayObject.prototype.removeChildrenByTag = function (tag) {
            var children = this.$children;
            for (var i = children.length - 1; i >= 0; --i) {
                var child = children[i];
                if (child.tag === tag) {
                    this.removeChildAt(i);
                }
            }
            return this;
        };
        DisplayObject.prototype.removeAllChildren = function () {
            var children = this.$children;
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var child = children_1[_i];
                child.emit(Event.REMOVED, this);
                this.$stage && child.emit(Event.REMOVED_FROM_STAGE);
            }
            this.$children.length = 0;
            this.$resizeCanvas();
            return this;
        };
        DisplayObject.prototype.getChildByName = function (name) {
            var children = this.$children;
            for (var _i = 0, children_2 = children; _i < children_2.length; _i++) {
                var child = children_2[_i];
                if (child.name === name) {
                    return child;
                }
            }
            return null;
        };
        DisplayObject.prototype.getChildrenByTag = function (tag) {
            var result = [];
            var children = this.$children;
            for (var _i = 0, children_3 = children; _i < children_3.length; _i++) {
                var child = children_3[_i];
                if (child.tag === tag) {
                    result.push(child);
                }
            }
            return result;
        };
        DisplayObject.prototype.getChildAt = function (index) {
            return this.$children[index] || null;
        };
        DisplayObject.prototype.getChildIndex = function (child) {
            return this.$children.indexOf(child);
        };
        DisplayObject.prototype.swapChildren = function (child1, child2) {
            var index1 = this.getChildIndex(child1);
            var index2 = this.getChildIndex(child2);
            if (index1 >= 0 && index2 >= 0) {
                this.swapChildrenAt(index1, index2);
            }
            return this;
        };
        DisplayObject.prototype.swapChildrenAt = function (index1, index2) {
            if (index1 !== index2) {
                var child1 = this.$children[index1];
                var child2 = this.$children[index2];
                if (child1 && child2) {
                    this.$children[index1] = child2;
                    this.$children[index2] = child1;
                    this.$markDirty();
                }
            }
            return this;
        };
        DisplayObject.prototype.$getTransform = function () {
            var matrix = Matrix.create();
            matrix.translate(-this.$anchorX, -this.$anchorY);
            matrix.rotate(this.rotation * Math.PI / 180).scale(this.scaleX, this.scaleY).skew(this.skewX, this.skewY);
            matrix.translate(this.x, this.y);
            return matrix;
        };
        DisplayObject.prototype.$resizeCanvas = function () {
            if (this.$width && this.$height) {
                this.$canvas.width = this.$width * this.$pixelRatio;
                this.$canvas.height = this.$height * this.$pixelRatio;
            }
            else {
                var bounds = this.$getContentBounds();
                this.$canvas.width = (this.$width || bounds.right + this.anchorX) * this.$pixelRatio;
                this.$canvas.height = (this.$height || bounds.bottom + this.anchorY) * this.$pixelRatio;
                bounds.release();
            }
            if (this.$parent) {
                this.$parent.$resizeCanvas();
            }
            this.$dirty = true;
        };
        DisplayObject.prototype.$getChildBounds = function (child) {
            var bounds = Rectangle.create();
            var matrix = child.$getTransform();
            var topLeft = Vector.create(0, 0).transform(matrix);
            var topRight = Vector.create(this.width, 0).transform(matrix);
            var bottomLeft = Vector.create(0, this.height).transform(matrix);
            var bottomRight = Vector.create(this.width, this.height).transform(matrix);
            var minX = Math.min(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
            var maxX = Math.max(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
            var minY = Math.min(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
            var maxY = Math.max(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
            bounds.top = minY;
            bounds.bottom = maxY;
            bounds.left = minX;
            bounds.right = maxX;
            topLeft.release();
            topRight.release();
            bottomLeft.release();
            bottomRight.release();
            return bounds;
        };
        DisplayObject.prototype.$getContentBounds = function () {
            var children = this.$children;
            var bounds = Rectangle.create();
            for (var _i = 0, children_4 = children; _i < children_4.length; _i++) {
                var child = children_4[_i];
                var childBounds = this.$getChildBounds(child);
                bounds.top = Math.min(bounds.top ? bounds.top : Infinity, childBounds.top);
                bounds.bottom = Math.max(bounds.bottom ? bounds.bottom : -Infinity, childBounds.bottom);
                bounds.left = Math.min(bounds.left ? bounds.left : Infinity, childBounds.left);
                bounds.right = Math.max(bounds.right ? bounds.right : -Infinity, childBounds.right);
                childBounds.release();
            }
            return bounds;
        };
        DisplayObject.prototype.$emitTouchEvent = function (event) {
            if (!this.touchable) {
                return false;
            }
            var type = event.type;
            var identifier = event.identifier;
            var matrix = this.$getTransform();
            var localPos = Vector.create(event.targetX, event.targetY).transform(matrix.invert()).subtract(this.$anchorX, this.$anchorY);
            var outside = localPos.x < -this.anchorX || localPos.x > this.width - this.anchorX || localPos.y < -this.anchorY || localPos.y > this.height - this.anchorY;
            if (type === TouchEvent.TOUCH_START && outside) {
                return false;
            }
            if (type === TouchEvent.TOUCH_START) {
                this.$touches[identifier] = true;
            }
            else if (type === TouchEvent.TOUCH_TAP) {
                this.$touches[identifier] = false;
            }
            else if (!this.$touches[identifier]) {
                return false;
            }
            var children = this.$children;
            event.targetX = localPos.x;
            event.targetY = localPos.y;
            for (var i = children.length - 1; i >= 0; --i) {
                var child = children[i];
                if (child.$emitTouchEvent(event)) {
                    break;
                }
            }
            if (!event.propagationStopped && !(type === TouchEvent.TOUCH_TAP && outside)) {
                event.target = event.target || this;
                event.currentTarget = this;
                event.localX = localPos.x;
                event.localY = localPos.y;
                this.emit(event.type, event);
            }
            matrix.release();
            localPos.release();
            return true;
        };
        DisplayObject.prototype.$drawChild = function (child) {
            if (!child.width || !child.height) {
                return;
            }
            var ctx = this.$context;
            var pixelRatio = this.$pixelRatio;
            var matrix = child.$getTransform().scale(pixelRatio);
            child.$render();
            ctx.globalAlpha = child.alpha;
            if (matrix.a === 1 && matrix.b === 0 && matrix.c === 0 && matrix.d === 1) {
                ctx.drawImage(child.$canvas, matrix.tx, matrix.ty, child.width, child.height);
            }
            else {
                ctx.save();
                ctx.transform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
                ctx.drawImage(child.$canvas, 0, 0, child.width, child.height);
                ctx.restore();
            }
            matrix.release();
        };
        DisplayObject.prototype.$render = function () {
            if (!this.$dirty) {
                return;
            }
            var ctx = this.$context;
            var canvas = this.$canvas;
            var children = this.$children;
            var pixelRatio = this.$pixelRatio;
            var background = this.$background;
            var anchorX = this.$anchorX * pixelRatio;
            var anchorY = this.$anchorY * pixelRatio;
            var canvasWidth = canvas.width;
            var canvasHeight = canvas.height;
            ctx.setTransform(1, 0, 0, 1, anchorX, anchorY);
            ctx.clearRect(-anchorX, -anchorY, canvasWidth, canvasHeight);
            ctx.beginPath();
            ctx.save();
            if (background) {
                if (background instanceof Image) {
                    ctx.drawImage(background.element, -anchorX, -anchorY, canvasWidth, canvasHeight);
                }
                else {
                    ctx.save();
                    ctx.fillStyle = this.$background;
                    ctx.fillRect(-anchorX, -anchorY, canvasWidth, canvasHeight);
                    ctx.restore();
                }
            }
            for (var _i = 0, children_5 = children; _i < children_5.length; _i++) {
                var child = children_5[_i];
                if (child.visible && child.alpha) {
                    this.$drawChild(child);
                }
            }
            ctx.restore();
            this.$dirty = false;
        };
        DisplayObject.prototype.on = function (event, listener) {
            _super.prototype.on.call(this, event, listener);
            if (event === Event.ENTER_FRAME && this.$stage) {
                this.$stage.ticker.registerEnterFrameCallback(this);
            }
            else if (event === Event.ADDED && this.$parent) {
                listener();
            }
            else if (event === Event.ADDED_TO_STAGE && this.$stage) {
                listener();
            }
            return this;
        };
        DisplayObject.prototype.off = function (event, listener) {
            _super.prototype.off.call(this, event, listener);
            if (this.$stage && event === Event.ENTER_FRAME && !this.hasEventListener(Event.ENTER_FRAME)) {
                this.$stage.ticker.unregisterEnterFrameCallback(this);
            }
            return this;
        };
        DisplayObject.prototype.$onAdded = function (parent) {
            this.$parent = parent;
        };
        DisplayObject.prototype.$onRemoved = function () {
            this.$parent = null;
        };
        DisplayObject.prototype.$onAddedToStage = function (stage) {
            var children = this.$children;
            if (this.hasEventListener(Event.ENTER_FRAME)) {
                stage.ticker.registerEnterFrameCallback(this);
            }
            this.$stage = stage;
            for (var _i = 0, children_6 = children; _i < children_6.length; _i++) {
                var child = children_6[_i];
                child.emit(Event.ADDED_TO_STAGE, stage);
            }
        };
        DisplayObject.prototype.$onRemovedFromStage = function (stage) {
            var children = this.$children;
            if (this.hasEventListener(Event.ENTER_FRAME)) {
                stage.ticker.unregisterEnterFrameCallback(this);
            }
            this.$stage = null;
            for (var _i = 0, children_7 = children; _i < children_7.length; _i++) {
                var child = children_7[_i];
                child.emit(Event.ADDED_TO_STAGE);
            }
        };
        DisplayObject.prototype.$markDirty = function () {
            this.$dirty = true;
            this.$markParentDirty();
        };
        DisplayObject.prototype.$markParentDirty = function () {
            if (this.$parent) {
                this.$parent.$markDirty();
            }
        };
        return DisplayObject;
    }(EventEmitter));

    var Sound = /** @class */ (function (_super) {
        __extends(Sound, _super);
        function Sound(ticker) {
            var _this = _super.call(this, ticker) || this;
            _this.$loops = 1;
            _this.$startTime = 0;
            _this.$paused = false;
            var audio = document.createElement('audio');
            audio.crossOrigin = '*';
            audio.addEventListener('canplaythrough', _this.$boundOnLoad);
            audio.addEventListener('error', _this.$boundOnError);
            audio.addEventListener('ended', _this.$onEnded.bind(_this));
            _this.$element = audio;
            _this.$ticker = ticker;
            _this.$boundOnTouch = _this.$onTouch.bind(_this);
            ticker.on(Event.TICKER_PAUSE, _this.$onTickerPause.bind(_this));
            ticker.on(Event.TICKER_RESUME, _this.$onTickerResume.bind(_this));
            return _this;
        }
        Object.defineProperty(Sound.prototype, "element", {
            get: function () {
                return this.$element;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Sound.prototype, "url", {
            set: function (url) {
                this.$paused = true;
                this.$element.src = url;
                this.$element.load();
                if (url.indexOf('data:') === 0) {
                    this.$ticker.setTimeout(this.$boundOnLoad);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Sound.prototype, "volume", {
            get: function () {
                return this.$element.volume;
            },
            set: function (volume) {
                this.$element.volume = volume;
            },
            enumerable: true,
            configurable: true
        });
        Sound.prototype.$checkOnTouch = function () {
            document.addEventListener('click', this.$boundOnTouch);
            document.addEventListener('touchend', this.$boundOnTouch);
        };
        Sound.prototype.$checkStatus = function () {
            this.$element.play()["catch"]();
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
        Sound.prototype.$onLoad = function () {
            _super.prototype.$onLoad.call(this);
            this.$element.play()
                .then(this.$checkStatus.bind(this))["catch"](this.$checkOnTouch.bind(this));
        };
        return Sound;
    }(Media));
    //# sourceMappingURL=Sound.js.map

    var SoundEffect = /** @class */ (function (_super) {
        __extends(SoundEffect, _super);
        function SoundEffect(ticker) {
            return _super.call(this, ticker) || this;
        }
        return SoundEffect;
    }(Sound));
    //# sourceMappingURL=SoundEffect.js.map

    var ResourceManager = /** @class */ (function (_super) {
        __extends(ResourceManager, _super);
        function ResourceManager(ticker, list, options) {
            var _this = _super.call(this) || this;
            _this.$errorCount = 0;
            _this.$loadedCount = 0;
            _this.$loadingCount = 0;
            _this.$ticker = ticker;
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
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ResourceManager.prototype, "errorCount", {
            get: function () {
                return this.$errorCount;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ResourceManager.prototype, "loadedCount", {
            get: function () {
                return this.$loadedCount;
            },
            enumerable: true,
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
            var ticker = this.$ticker;
            var resources = this.$resources;
            var retryTimes = this.retryTimes;
            var loadedCallback = function () {
                var errorCount = _this.$errorCount;
                var loadedCount = ++_this.$loadedCount;
                --_this.$loadingCount;
                resources[name] = resource;
                ticker.clearTimeout(timer);
                resource.off(Event.LOAD, loadedCallback);
                resource.off(Event.ERROR, errorCallback);
                _this.emit(Event.PROGRESS, (loadedCount + errorCount) / total);
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
                    resources[name] = resource;
                    _this.emit(Event.PROGRESS, (loadedCount + errorCount) / total);
                    if (loadedCount + errorCount === total) {
                        _this.emit(Event.COMPLETE);
                    }
                    else {
                        _this.$checkPendingTasks();
                    }
                }
                ticker.clearTimeout(timer);
                resource.off(Event.LOAD, loadedCallback);
                resource.off(Event.ERROR, errorCallback);
            };
            if (type === ResourceManager.TYPE_IMAGE) {
                resource = new Image(ticker);
                resource.on(Event.LOAD, loadedCallback);
                resource.on(Event.ERROR, errorCallback);
                resource.url = url;
            }
            else if (type === ResourceManager.TYPE_SOUND) {
                resource = new Sound(ticker);
                resource.on(Event.LOAD, loadedCallback);
                resource.on(Event.ERROR, errorCallback);
                resource.url = url;
            }
            else if (type === ResourceManager.TYPE_SOUND_EFFECT) {
                resource = new SoundEffect(ticker);
                resource.on(Event.LOAD, loadedCallback);
                resource.on(Event.ERROR, errorCallback);
                resource.url = url;
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
            var resource = this.$resources[name];
            if (!resource) {
                throw new Error('Resource not exists');
            }
            return resource;
        };
        ResourceManager.prototype.getImage = function (name) {
            return this.get(name);
        };
        ResourceManager.prototype.getSound = function (name) {
            return this.get(name);
        };
        ResourceManager.prototype.getSoundEffect = function (name) {
            return this.get(name);
        };
        ResourceManager.TYPE_IMAGE = 'image';
        ResourceManager.TYPE_SOUND = 'sound';
        ResourceManager.TYPE_SOUND_EFFECT = 'soundEffect';
        return ResourceManager;
    }(EventEmitter));
    //# sourceMappingURL=ResourceManager.js.map

    var Stage = /** @class */ (function (_super) {
        __extends(Stage, _super);
        function Stage(canvas) {
            var _this = _super.call(this) || this;
            _this.$scaleMode = Stage.SHOW_ALL;
            _this.$ticker = new Ticker(_this);
            _this.$viewportCanvas = canvas || document.createElement('canvas');
            _this.$viewportContext = _this.$viewportCanvas.getContext('2d');
            _this.$boundOnWindowResize = _this.$onWindowResize.bind(_this);
            _this.$initEvents();
            _this.width = 640;
            _this.height = 1136;
            _this.viewportWidth = 0;
            _this.viewportHeight = 0;
            if (!canvas) {
                _this.$viewportCanvas.style.top = '0';
                _this.$viewportCanvas.style.left = '0';
                _this.$viewportCanvas.style.position = 'fixed';
                document.body.appendChild(_this.$viewportCanvas);
            }
            return _this;
        }
        Stage.prototype.$initEvents = function () {
            var _this = this;
            var resizeTimer;
            var ticker = this.$ticker;
            this.$addTouchEventListeners();
            this.on(Event.ENTER_FRAME, this.$render);
            ticker.setTimeout(function () {
                _this.emit(Event.ADDED_TO_STAGE, _this);
            });
            window.addEventListener('resize', function () {
                ticker.clearTimeout(resizeTimer);
                resizeTimer = ticker.setTimeout(_this.$boundOnWindowResize, 100);
            });
        };
        Object.defineProperty(Stage.prototype, "x", {
            get: function () {
                return 0;
            },
            set: function (x) {
                this.$x = 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Stage.prototype, "y", {
            get: function () {
                return 0;
            },
            set: function (y) {
                this.$y = 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Stage.prototype, "scaleMode", {
            get: function () {
                return this.$scaleMode;
            },
            set: function (scaleMode) {
                this.$scaleMode = scaleMode;
                this.$resizeCanvas();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Stage.prototype, "viewportWidth", {
            get: function () {
                return this.$viewportWidth ? this.$viewportWidth : this.$viewportCanvas.width / this.$pixelRatio;
            },
            set: function (width) {
                this.$viewportWidth = width;
                width = width || window.innerWidth;
                this.$viewportCanvas.width = width * this.$pixelRatio;
                this.$viewportCanvas.style.width = width + 'px';
                this.$resizeCanvas();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Stage.prototype, "viewportHeight", {
            get: function () {
                return this.$viewportHeight ? this.$viewportHeight : this.$viewportCanvas.height / this.$pixelRatio;
            },
            set: function (height) {
                this.$viewportHeight = height;
                height = height || window.innerHeight;
                this.$viewportCanvas.height = height * this.$pixelRatio;
                this.$viewportCanvas.style.height = height + 'px';
                this.$resizeCanvas();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Stage.prototype, "viewportBackground", {
            get: function () {
                return this.$viewportBackground;
            },
            set: function (viewportBackground) {
                this.$viewportBackground = viewportBackground;
                this.$markDirty();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Stage.prototype, "ticker", {
            get: function () {
                return this.$ticker;
            },
            enumerable: true,
            configurable: true
        });
        Stage.prototype.createResourceManager = function (list, options) {
            return new ResourceManager(this.$ticker, list, options);
        };
        Stage.prototype.$addTouchEventListeners = function () {
            var _this = this;
            var canvas = this.$viewportCanvas;
            if (canvas.ontouchstart !== undefined) {
                canvas.addEventListener('touchstart', function (event) {
                    _this.$dispatchTouches(TouchEvent.TOUCH_START, event);
                    event.preventDefault();
                });
                canvas.addEventListener('touchmove', function (event) {
                    _this.$dispatchTouches(TouchEvent.TOUCH_MOVE, event);
                    event.preventDefault();
                }, { passive: false });
                canvas.addEventListener('touchend', function (event) {
                    _this.$dispatchTouches(TouchEvent.TOUCH_END, event);
                    _this.$dispatchTouches(TouchEvent.TOUCH_TAP, event);
                });
                canvas.addEventListener('touchcancel', function (event) {
                    _this.$dispatchTouches(TouchEvent.TOUCH_CANCEL, event);
                });
            }
            else {
                var touching_1 = false;
                canvas.addEventListener('mousedown', function (event) {
                    _this.$dispatchTouchEvent(TouchEvent.TOUCH_START, event);
                    touching_1 = true;
                });
                canvas.addEventListener('mousemove', function (event) {
                    if (touching_1) {
                        _this.$dispatchTouchEvent(TouchEvent.TOUCH_MOVE, event);
                    }
                });
                canvas.addEventListener('mouseup', function (event) {
                    _this.$dispatchTouchEvent(TouchEvent.TOUCH_END, event);
                    touching_1 = false;
                });
                canvas.addEventListener('click', function (event) {
                    _this.$dispatchTouchEvent(TouchEvent.TOUCH_TAP, event);
                });
                window.addEventListener('mouseout', function (event) {
                    _this.$dispatchTouchEvent(TouchEvent.TOUCH_CANCEL, event);
                });
            }
        };
        Stage.prototype.$dispatchTouches = function (type, event) {
            var touches = event['changedTouches'];
            for (var i = 0, l = touches.length; i < l; ++i) {
                this.$dispatchTouchEvent(type, touches[i]);
            }
        };
        Stage.prototype.$dispatchTouchEvent = function (type, touch) {
            if (this.$ticker.paused) {
                return;
            }
            var event = TouchEvent.create(type);
            var width = this.$canvas.width;
            var height = this.$canvas.height;
            var pixelRatio = this.$pixelRatio;
            var bounds = this.$renderBounds;
            var viewportBounds = this.$viewportCanvas.getBoundingClientRect();
            var x = (touch.pageX - viewportBounds.left - bounds.x / pixelRatio) * width / bounds.width - this.$anchorX;
            var y = (touch.pageY - viewportBounds.top - bounds.y / pixelRatio) * height / bounds.height - this.$anchorY;
            event.targetX = event.stageX = x;
            event.targetY = event.stageY = y;
            event.identifier = touch instanceof Touch ? touch.identifier : 0;
            this.$emitTouchEvent(event);
            event.release();
        };
        Stage.prototype.$calculateRenderBounds = function () {
            var x = 0;
            var y = 0;
            var canvas = this.$canvas;
            var width = canvas.width;
            var height = canvas.height;
            var scaleMode = this.scaleMode;
            var aspectRatio = width / height;
            var viewportCanvas = this.$viewportCanvas;
            var viewportWidth = viewportCanvas.width;
            var viewportHeight = viewportCanvas.height;
            var viewportAspectRatio = viewportWidth / viewportHeight;
            var bounds = this.$renderBounds || Rectangle.create();
            if (scaleMode === Stage.NO_SCALE) ;
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
            else if (scaleMode === Stage.SHOW_ALL) {
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
            this.$renderBounds = bounds;
        };
        Stage.prototype.$resizeCanvas = function () {
            _super.prototype.$resizeCanvas.call(this);
            this.$calculateRenderBounds();
        };
        Stage.prototype.$render = function () {
            if (!this.$dirty) {
                return;
            }
            _super.prototype.$render.call(this);
            var canvas = this.$canvas;
            var ctx = this.$viewportContext;
            var bounds = this.$renderBounds;
            var viewportCanvas = this.$viewportCanvas;
            var viewportWidth = viewportCanvas.width;
            var viewportHeight = viewportCanvas.height;
            var viewportBackground = this.viewportBackground;
            ctx.clearRect(0, 0, viewportWidth, viewportHeight);
            if (viewportBackground) {
                if (viewportBackground instanceof Image) {
                    ctx.drawImage(viewportBackground.element, 0, 0, viewportWidth, viewportHeight);
                }
                else {
                    ctx.save();
                    ctx.fillStyle = this.$background;
                    ctx.fillRect(0, 0, viewportWidth, viewportHeight);
                    ctx.restore();
                }
            }
            ctx.drawImage(canvas, bounds.x, bounds.y, bounds.width, bounds.height);
        };
        Stage.prototype.$onWindowResize = function () {
            var viewportWidth = this.$viewportWidth;
            var viewportHeight = this.$viewportHeight;
            this.viewportWidth = viewportWidth;
            this.viewportHeight = viewportHeight;
            this.$viewportWidth = viewportWidth;
            this.$viewportHeight = viewportHeight;
        };
        Stage.NO_SCALE = 'noScale';
        Stage.NO_BORDER = 'noBorder';
        Stage.SHOW_ALL = 'showAll';
        Stage.EXACT_FIT = 'exactFit';
        Stage.FIXED_WIDE = 'fixedWide';
        Stage.FIXED_NARROW = 'fixedNarrow';
        Stage.FIXED_WIDTH = 'fixedWidth';
        Stage.FIXED_HEIGHT = 'fixedHeight';
        return Stage;
    }(DisplayObject));
    //# sourceMappingURL=Stage.js.map

    var ImageView = /** @class */ (function (_super) {
        __extends(ImageView, _super);
        function ImageView(image, width, height) {
            var _this = _super.call(this) || this;
            if (image) {
                _this.$width = width || image.width;
                _this.$height = height || image.height;
                _this.image = image;
                _this.$boundOnImageLoad = _this.$onImageLoad.bind(_this);
            }
            return _this;
        }
        Object.defineProperty(ImageView.prototype, "image", {
            get: function () {
                return this.$image;
            },
            set: function (image) {
                this.$image = image;
                this.$width = this.$width || image.width;
                this.$height = this.$height || image.height;
                this.$resizeCanvas();
                if (!this.$width && !this.$height) {
                    image.on('load', this.$boundOnImageLoad);
                }
            },
            enumerable: true,
            configurable: true
        });
        ImageView.prototype.$onImageLoad = function () {
            var image = this.$image;
            this.$width = this.$width || image.width;
            this.$height = this.$height || image.height;
            this.$resizeCanvas();
            image.off('load', this.$boundOnImageLoad);
        };
        ImageView.prototype.$render = function () {
            if (!this.$dirty) {
                return;
            }
            _super.prototype.$render.call(this);
            var image = this.$image;
            var ctx = this.$context;
            var canvas = this.$canvas;
            var pixelRatio = this.$pixelRatio;
            var anchorX = this.$anchorX * pixelRatio;
            var anchorY = this.$anchorY * pixelRatio;
            ctx.drawImage(image.element, -anchorX, -anchorY, canvas.width, canvas.height);
        };
        return ImageView;
    }(DisplayObject));
    //# sourceMappingURL=ImageView.js.map

    var TextView = /** @class */ (function (_super) {
        __extends(TextView, _super);
        function TextView(text, options) {
            if (options === void 0) { options = {}; }
            var _this = _super.call(this) || this;
            _this.$text = '';
            _this.$color = 'black';
            _this.$fontSize = 16;
            _this.$fontStyle = 'normal';
            _this.$fontWeight = 'normal';
            _this.$textAlign = 'left';
            _this.$verticalAlign = 'top';
            _this.$lineHeight = 1;
            _this.$strokeSize = 0;
            _this.$strokeColor = null;
            _this.$fontFamily = 'Helvetica';
            _this.$multiline = false;
            _this.$breakWord = false;
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
            _this.$resizeCanvas();
            return _this;
        }
        Object.defineProperty(TextView.prototype, "text", {
            get: function () {
                return this.$text;
            },
            set: function (text) {
                this.$text = text;
                this.$resizeCanvas();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextView.prototype, "color", {
            get: function () {
                return this.$color;
            },
            set: function (color) {
                this.$color = color;
                this.$markDirty();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextView.prototype, "fontSize", {
            get: function () {
                return this.$fontSize;
            },
            set: function (fontSize) {
                this.$fontSize = fontSize;
                this.$resizeCanvas();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextView.prototype, "fontStyle", {
            get: function () {
                return this.$fontStyle;
            },
            set: function (fontStyle) {
                this.$fontStyle = fontStyle;
                this.$resizeCanvas();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextView.prototype, "fontWeight", {
            get: function () {
                return this.$fontWeight;
            },
            set: function (fontWeight) {
                this.$fontWeight = fontWeight;
                this.$resizeCanvas();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextView.prototype, "textAlign", {
            get: function () {
                return this.$textAlign;
            },
            set: function (textAlign) {
                this.$textAlign = textAlign;
                this.$markDirty();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextView.prototype, "verticalAlign", {
            get: function () {
                return this.$verticalAlign;
            },
            set: function (verticalAlign) {
                this.$verticalAlign = verticalAlign;
                this.$markDirty();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextView.prototype, "lineHeight", {
            get: function () {
                return this.$lineHeight;
            },
            set: function (lineHeight) {
                this.$lineHeight = lineHeight;
                this.$resizeCanvas();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextView.prototype, "strokeSize", {
            get: function () {
                return this.$strokeSize;
            },
            set: function (strokeSize) {
                this.$strokeSize = strokeSize;
                this.$markDirty();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextView.prototype, "strokeColor", {
            get: function () {
                return this.$strokeColor;
            },
            set: function (strokeColor) {
                this.$strokeColor = strokeColor;
                this.$markDirty();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextView.prototype, "fontFamily", {
            get: function () {
                return this.$fontFamily;
            },
            set: function (fontFamily) {
                this.$fontFamily = fontFamily;
                this.$resizeCanvas();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextView.prototype, "multiline", {
            get: function () {
                return this.$multiline;
            },
            set: function (multiline) {
                this.$multiline = multiline;
                this.$resizeCanvas();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextView.prototype, "breakWord", {
            get: function () {
                return this.$breakWord;
            },
            set: function (breakWord) {
                this.$breakWord = breakWord;
                this.$resizeCanvas();
            },
            enumerable: true,
            configurable: true
        });
        TextView.prototype.$updateContext = function () {
            var ctx = this.$context;
            var fontStyle = this.fontStyle;
            var fontWeight = this.fontWeight;
            var pixelRatio = this.$pixelRatio;
            var sizeStr = this.fontSize * pixelRatio + 'px';
            ctx.font = fontStyle + ' ' + fontWeight + ' ' + sizeStr + ' ' + this.fontFamily;
            ctx.textAlign = this.textAlign;
            ctx.textBaseline = 'top';
            ctx.fillStyle = this.color;
            ctx.lineWidth = this.strokeSize * pixelRatio;
            ctx.strokeStyle = this.strokeColor;
        };
        TextView.prototype.$divideUnits = function () {
            var units;
            var text = this.$text;
            var breakWord = this.$breakWord;
            var wordRe = TextView.wordRe;
            var boundaryRe = TextView.boundaryRe;
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
        TextView.prototype.$divideLines = function () {
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
            var width = this.$width;
            var lines = this.$lines = [];
            var units = this.$divideUnits();
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
        TextView.prototype.$resizeCanvas = function () {
            this.$divideLines();
            _super.prototype.$resizeCanvas.call(this);
        };
        TextView.prototype.$getContentBounds = function () {
            var ctx = this.$context;
            var bounds = _super.prototype.$getContentBounds.call(this);
            var lines = this.$lines;
            var fontSize = this.$fontSize;
            var lineHeight = this.$lineHeight;
            var pixelRatio = this.$pixelRatio;
            this.$updateContext();
            for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
                var line = lines_1[_i];
                bounds.width = Math.max(bounds.width, ctx.measureText(line).width / pixelRatio);
            }
            bounds.height = Math.max(bounds.height, fontSize * lineHeight * lines.length);
            return bounds;
        };
        TextView.prototype.$render = function () {
            if (!this.$dirty) {
                return;
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
            var fontSize = this.$fontSize;
            var textAlign = this.$textAlign;
            var verticalAlign = this.$verticalAlign;
            var lineHeight = this.$lineHeight;
            var strokeSize = this.$strokeSize;
            var strokeColor = this.$strokeColor;
            var pixelRatio = this.$pixelRatio;
            _super.prototype.$render.call(this);
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
                y = (height - fontSize * lineHeight * lines.length) * pixelRatio / 2 - anchorY * pixelRatio;
            }
            else if (verticalAlign === 'bottom') {
                y = (height - fontSize * lineHeight * lines.length) * pixelRatio - anchorY * pixelRatio;
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
        };
        TextView.wordRe = /\w+/;
        TextView.boundaryRe = /\b/;
        return TextView;
    }(DisplayObject));
    //# sourceMappingURL=TextView.js.map

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
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
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
            else
                s = p / (2 * Math.PI) * Math.asin(c / a);
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
            else
                s = p / (2 * Math.PI) * Math.asin(c / a);
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
            else
                s = p / (2 * Math.PI) * Math.asin(c / a);
            if (t < 1)
                return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
        };
        Ease.easeInBack = function (t, b, c, d, s) {
            if (s === undefined)
                s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        };
        Ease.easeOutBack = function (t, b, c, d, s) {
            if (s === undefined)
                s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        };
        Ease.easeInOutBack = function (t, b, c, d, s) {
            if (s === undefined)
                s = 1.70158;
            if ((t /= d / 2) < 1)
                return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        };
        Ease.easeInBounce = function (t, b, c, d) {
            return c - this.easeOutBounce(d - t, 0, c, d) + b;
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
                return this.easeInBounce(t * 2, 0, c, d) * 0.5 + b;
            return this.easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
        };
        return Ease;
    }());
    //# sourceMappingURL=Ease.js.map

    var Tween = /** @class */ (function (_super) {
        __extends(Tween, _super);
        function Tween(target, option) {
            var _this = _super.call(this) || this;
            _this.loop = false;
            _this.$target = null;
            _this.$paused = true;
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
            enumerable: true,
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
            if (this.$paused) {
                this.$paused = false;
                this.$target.on(Event.ENTER_FRAME, this.$boundOnEnterFrame);
                Tween.$tweens.push(this);
            }
            return this;
        };
        Tween.prototype.pause = function () {
            if (!this.$paused) {
                this.$paused = true;
                this.$target.off(Event.ENTER_FRAME, this.$boundOnEnterFrame);
                var index = Tween.$tweens.indexOf(this);
                if (index >= 0) {
                    Tween.$tweens.splice(index, 1);
                }
            }
            return this;
        };
        Tween.prototype.$onEnterFrame = function (dt) {
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
                this.$onEnterFrame(stepPosition - duration);
            }
            else if (loop) {
                this.$stepIndex = 0;
                this.$stepPosition = 0;
                this.$shouldSaveProps = true;
                this.$setProps(props);
                this.$onEnterFrame(stepPosition - duration);
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
            var tween = new Tween(target, option);
            Tween.$tweens.push(tween);
            return tween;
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
                    tween.play();
                }
            }
        };
        Tween.removeTweens = function (target) {
            var tweens = this.$tweens;
            for (var i = tweens.length - 1; i >= 0; --i) {
                var tween = tweens[i];
                if (tween.$target === target) {
                    tween.pause();
                }
            }
        };
        Tween.removeAllTweens = function () {
            var tweens = this.$tweens;
            for (var i = tweens.length - 1; i >= 0; --i) {
                var tween = tweens[i];
                tween.pause();
            }
        };
        Tween.$tweens = [];
        return Tween;
    }(EventEmitter));
    //# sourceMappingURL=Tween.js.map

    //# sourceMappingURL=index.js.map

    exports.Matrix = Matrix;
    exports.Rectangle = Rectangle;
    exports.Vector = Vector;
    exports.Stage = Stage;
    exports.ImageView = ImageView;
    exports.TextView = TextView;
    exports.DisplayObject = DisplayObject;
    exports.Event = Event;
    exports.TouchEvent = TouchEvent;
    exports.Tween = Tween;
    exports.Ease = Ease;
    exports.ResourceManager = ResourceManager;

    return exports;

}({}));
