/**
 * Go2d 1.3.0
 * https://github.com/Lanfei/Go2d
 * (c) 2014 [Lanfei](http://www.clanfei.com/)
 * A lightweight HTML5 game engine
 */

(function(global, factory) {
	if (typeof define === "function") {
		define(factory);
	} else {
		global.go2d = factory();
	}
})(this, function() {

var go2d = {
	version: '1.3.0'
};

/**
 * Lang
 */
function isType(type) {
	return function(obj) {
		return {}.toString.call(obj) === '[object ' + type + ']';
	};
}

var isObject = go2d.isObject = isType('Object'),
	isNumber = go2d.isNumber = isType('Number'),
	isString = go2d.isString = isType('String'),
	isFunction = go2d.isFunction = isType('Function'),
	isArray = go2d.isArray = Array.isArray || isType('Array');

var forEach = go2d.forEach = function(obj, iterator, thisArg) {
	thisArg = thisArg || obj;
	if (isArray(obj)) {
		obj.forEach(iterator, thisArg);
	} else if (isObject(obj)) {
		for (var key in obj) {
			if (iterator.call(thisArg, obj[key], key, obj) === false) {
				break;
			}
		}
	}
};

/**
 * Class
 */
var Class = go2d.Class = function() {};

Class.extend = function(props, statics) {
	var prototype = this.prototype;

	function Go2dClass() {
		this._super = prototype;
		this.constructor = Go2dClass;
		if (isFunction(this.__init)) {
			return this.__init.apply(this, arguments);
		}
	}

	Go2dClass.prototype = Object.create(prototype);
	Go2dClass.extend = Class.extend;

	forEach(props, function(value, name) {
		var desc = Object.getOwnPropertyDescriptor(props, name);
		// Extend Getter/Setter
		if (desc.get || desc.set) {
			Object.defineProperty(Go2dClass.prototype, name, desc);
		} else {
			if (isFunction(value) && /\bthis\._super\(/.test(value)) {
				Go2dClass.prototype[name] = (function(name, fn) {
					return function() {
						this._super = prototype[name];
						var ret = fn.apply(this, arguments);
						this._super = prototype;
						return ret;
					};
				})(name, value);
			} else {
				Go2dClass.prototype[name] = value;
			}
		}
	});
	forEach(statics, function(value, name) {
		Go2dClass[name] = value;
	});
	return Go2dClass;
};

/**
 * Object Pool
 */
var ObjectPool = go2d.ObjectPool = Class.extend({
	__init: function(constructor, size) {
		this._pool = [];
		this._class = constructor;
		this.size = size || 30;

		Object.defineProperty(this, 'length', {
			set: function() {},
			get: function() {
				return this._pool.length;
			}
		});
	},
	create: function() {
		return new this._class();
	},
	get: function() {
		if (this._pool.length) {
			return this._pool.shift();
		} else {
			return this.create();
		}
	},
	recycle: function(obj) {
		this._pool.push(obj);
		if (this._pool.length > this._size) {
			this._pool.shift();
		}
		return this;
	},
	clear: function() {
		this._pool = [];
		return this;
	},
	dispose: function() {
		this._pool = null;
		this._constructor = null;
	}
});

/**
 * Director
 */
var Director = go2d.Director = Class.extend({
	__init: function(stage, options) {
		options = options || {};
		this.fps = 0;
		this.stage = stage;
		this.paused = true;
		this.frameRate = options.frameRate || 60;
		this._initEvent();
		this._initTimer();
		this._timer = null;
		this._prevTime = null;
	},
	_initEvent: function() {
		var that = this;
		var sleep = false;
		var prefixes = ['', 'ms', 'moz', 'webkit'];
		forEach(prefixes, function(prefix) {
			if (document[prefix + 'hidden'] !== undefined) {
				document.addEventListener(prefix + 'visibilitychange', function() {
					if (document[prefix + 'hidden']) {
						if (!that.paused) {
							that.pause();
							sleep = true;
						}
					} else if (sleep) {
						sleep = false;
						that.play();
					}
				});
				return false;
			}
		});
	},
	_initTimer: function() {
		var frameRate = this.frameRate;

		function setTimeBasedTimer(callback) {
			return setTimeout(callback, 1000 / frameRate);
		}

		function clearTimeBasedTimer(timer) {
			return clearTimeout(timer);
		}

		if (this.frameRate === 60) {
			window.requestAnimationFrame =
				window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				setTimeBasedTimer;
			this.setAnimationInterval = function(callback) {
				return requestAnimationFrame.call(null, callback);
			};
			window.cancelAnimationFrame =
				window.cancelAnimationFrame ||
				window.webkitCancelAnimationFrame ||
				window.webkitCancelRequestAnimationFrame ||
				window.mozCancelAnimationFrame ||
				window.mozCancelRequestAnimationFrame ||
				clearTimeBasedTimer;
			this.clearAnimationInterval = function(timer) {
				cancelAnimationFrame(timer);
			};
		} else {
			this.setAnimationInterval = setTimeBasedTimer;
			this.clearAnimationInterval = clearTimeBasedTimer;
		}
	},
	mainLoop: function() {
		var deltaTime,
			now = +new Date();
		if (this._prevTime) {
			deltaTime = Math.min(1000, now - this._prevTime);
			this.fps = Math.round(1000 / deltaTime);
		} else {
			deltaTime = Math.round(1000 / this.frameRate);
		}
		this.stage.render().tick(deltaTime);
		this._prevTime = now;
	},
	play: function() {
		var that = this;
		this._timer = this.setAnimationInterval(function() {
			that.mainLoop();
			that.play();
		});
		this.paused = false;
	},
	pause: function() {
		this.clearAnimationInterval(this._timer);
		this.paused = true;
		this._prevTime = 0;
	}
});

/**
 * Vector
 */
var Vector = go2d.Vector = Class.extend({
	__init: function(x, y) {
		this.set(x, y);
		Object.defineProperty(this, 'length', {
			set: function() {},
			get: function() {
				return Math.sqrt(this.x * this.x + this.y * this.y);
			}
		});
	},
	set: function(x, y) {
		if (x instanceof Vector) {
			this.set(x.x, x.y);
		} else {
			this.x = x || 0;
			this.y = y || 0;
		}
		return this;
	},
	add: function(v) {
		this.x += v.x;
		this.y += v.y;
	},
	subtract: function(v) {
		this.x -= v.x;
		this.y -= v.y;
	},
	divide: function(v) {
		this.x /= v.x;
		this.y /= v.y;
	},
	dotProduct: function(v) {
		return this.x * v.x + this.y * v.y;
	},
	normalize: function() {
		var length = this.length;
		this.x = this.x / length;
		this.y = this.y / length;
		return this;
	},
	scale: function(x, y) {
		this.x *= x;
		this.y *= y === undefined ? x : y;
	},
	rotate: function(angle) {
		var x = this.x;
		var y = this.y;
		this.x = x * Math.cos(angle) - y * Math.sin(angle);
		this.y = x * Math.sin(angle) + y * Math.cos(angle);
		return this;
	},
	angle: function() {
		return Math.atan2(this.y, this.x);
	},
	distance: function(v) {
		return Math.sqrt((this.x - v.x) * (this.x - v.x) + (this.y - v.y) * (this.y - v.y));
	},
	clone: function() {
		return new Vector(this);
	}
});

/**
 * Matrix
 */
var Matrix = go2d.Matrix = Class.extend({
	__init: function(a, b, c, d, tx, ty) {
		this.set.apply(this, arguments);
	},
	set: function(a, b, c, d, tx, ty) {
		if (arguments.length === 6) {
			this.a = a;
			this.b = b;
			this.c = c;
			this.d = d;
			this.tx = tx;
			this.ty = ty;
		} else if (a instanceof Matrix) {
			this.set(a.a, a.b, a.c, a.d, a.tx, a.ty);
		} else {
			this.identity();
		}
		return this;
	},
	identity: function() {
		this.set(1, 0, 0, 1, 0, 0);
	},
	invert: function() {
		var a = this.a,
			b = this.b,
			c = this.c,
			d = this.d,
			tx = this.tx,
			ty = this.ty,
			n = a * d - c * b;
		this.a = d / n;
		this.b = -b / n;
		this.c = -c / n;
		this.d = a / n;
		this.tx = (c * ty - d * tx) / n;
		this.ty = (b * tx - a * ty) / n;
		return this;
	},
	multiply: function(a, b, c, d, tx, ty) {
		var a1 = this.a,
			b1 = this.b,
			c1 = this.c,
			d1 = this.d,
			tx1 = this.tx,
			ty1 = this.ty;
		this.a = a * a1 + c * b1;
		this.b = b * a1 + d * b1;
		this.c = a * c1 + c * d1;
		this.d = b * c1 + d * d1;
		this.tx = a * tx1 + c * ty1 + tx;
		this.ty = b * tx1 + d * ty1 + ty;
		return this;
	},
	vectorMultiply: function(v) {
		var x = this.a * v.x + this.c * v.y + this.tx;
		var y = this.b * v.x + this.d * v.y + this.ty;
		return {
			x: x,
			y: y
		};
	},
	append: function(m) {
		return this.multiply(m.a, m.b, m.c, m.d, m.tx, m.ty);
	},
	scale: function(x, y) {
		return this.multiply(x, 0, 0, y === undefined ? x : y, 0, 0);
	},
	rotate: function(angle) {
		var sin = Math.sin(angle),
			cos = Math.cos(angle);
		return this.multiply(cos, sin, -sin, cos, 0, 0);
	},
	skew: function(x, y) {
		return this.multiply(1, x, y, 1, 0, 0);
	},
	translate: function(x, y) {
		return this.multiply(1, 0, 0, 1, x, y);
	},
	clone: function() {
		return new Matrix(this);
	}
});

/**
 * EventDispatcher
 */
var EventDispatcher = go2d.EventDispatcher = Class.extend({
	__init: function() {
		this.__events = {};
	},
	on: function(name, callback) {
		if (arguments.length === 1) {
			var listeners = arguments[0];
			for (name in listeners) {
				this.on(name, listeners[name]);
			}
		} else {
			name = name.toLowerCase();
			this.__events[name] = this.__events[name] || [];
			this.__events[name].push(callback);
		}
		return this;
	},
	off: function(name, callback) {
		name = name.toLowerCase();
		if (callback === undefined) {
			delete this.__events[name];
			return this;
		}
		var callbacks = this.__events[name] || [];
		for (var i = callbacks.length - 1; i >= 0; --i) {
			if (callbacks[i] === callback) {
				callbacks.splice(i, 1);
				break;
			}
		}
		return this;
	},
	emit: function(name, event) {
		name = name.toLowerCase();
		var callbacks = this.__events[name] || [],
			args = Array.prototype.slice.call(arguments, 1);
		forEach(callbacks, function(callback) {
			if (isFunction(callback) && callback.apply(this, args) === false) {
				if (event instanceof Event) {
					event.preventDefault();
					event.stopPropagation();
				}
				return false;
			}
		}, this);
		return this;
	},
	dispose: function() {
		this.__events = null;
	}
});

/**
 * Event
 */
var Event = go2d.Event = Class.extend({
	__init: function(type, data) {
		for (var key in data) {
			this[key] = data[key];
		}
		this.type = type;
		this._stoped = false;
		this._defaultPrevented = false;
	},
	stopPropagation: function() {
		this._stoped = true;
	},
	isStopped: function() {
		return this._stoped;
	},
	preventDefault: function() {
		this._defaultPrevented = true;
	},
	isDefaultPrevented: function() {
		return this._defaultPrevented;
	}
});

/**
 * Touch Event
 */
var TouchEvent = Event.TouchEvent = Event.extend({
	__init: function(type, x, y, globalX, globalY, identifier) {
		this._super(type, {
			x: x,
			y: y,
			globalX: globalX,
			globalY: globalY,
			identifier: identifier
		});
	}
});

/**
 * Resize Event
 */
var ResizeEvent = Event.ResizeEvent = Event.extend({
	__init: function(oldSize, newSize) {
		this._super('resize', {
			oldSize: oldSize,
			newSize: newSize
		});
	}
});

/**
 * URL Request
 */
var URLRequest = go2d.URLRequest = EventDispatcher.extend({
	__init: function(url, options) {
		options = options || {};
		this._super();
		this.url = url;
		this.type = options.type || 'GET';
		this.dataType = options.dataType;
		this.contentType = options.contentType;
		this.xhr = new window.XMLHttpRequest();
	},
	send: function(data) {
		var dataStr = null,
			that = this,
			xhr = this.xhr,
			url = this.url,
			type = this.type,
			dataType = this.dataType;

		if (isString(data)) {
			dataStr = data;
		} else {
			dataStr = '';
			forEach(data, function(value, key) {
				dataStr += '&' + key + '=' + value;
			});
			dataStr = dataStr.slice(1);
		}
		if (dataStr && type.toUpperCase() === 'GET') {
			url += (url.indexOf('?') < 0 ? '?' : '&') + dataStr;
			dataStr = null;
		}

		xhr.open(type, url, true);
		xhr.setRequestHeader('Content-Type', this.contentType || 'application/x-www-form-urlencoded');
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					var response;
					if (dataType === 'xml') {
						response = xhr.responseXML;
						if (response === null) {
							that.emit('error', xhr, 'parseError');
							return;
						}
					} else if (dataType === 'json') {
						try {
							response = JSON.parse(xhr.responseText);
						} catch (e) {
							that.emit('error', xhr, 'parseError');
							return;
						}
					} else {
						response = xhr.responseText;
					}
					that.emit('success', response);
				} else {
					that.emit('error', xhr, xhr.status ? 'error' : 'abort');
				}
			}
		};
		xhr.send(dataStr);
		return this;
	},
	abort: function() {
		this.xhr.abort();
		return this;
	}
});

/**
 * Resource (TODO)
 */
var Resource = go2d.Resource = EventDispatcher.extend({
	__init: function(data) {
		this._super();
		this._data = data;
		this._resources = [];
		this.total = 0;
		this.errorCount = 0;
		this.loadedCount = 0;
	},
	_load: function(name, url, type, retry) {
		var errorHandler,
			that = this;

		if (retry) {
			errorHandler = function() {
				that._onError(name);
			};
		} else {
			errorHandler = function() {
				that._load(name, url, type, true);
			};
		}

		switch (type) {
			case Resource.Type.XML:
			case Resource.Type.JSON:
			case Resource.Type.TEXT:
				var urlRequest = new URLRequest(url, {
					dataType: type
				});
				urlRequest.on('success', function(response) {
					that._save(name, response);
					that._onLoad();
				});
				urlRequest.on('error', errorHandler);
				urlRequest.send();
				break;
			case Resource.Type.IMAGE:
				var image = new Image();
				image.addEventListener('load', function() {
					that._onLoad();
				});
				image.addEventListener('error', errorHandler);
				image.src = url;
				this._save(name, image);
				break;
			case Resource.Type.AUDIO:
				var audio = document.createElement('audio');
				// TODO (iOS)
				audio.addEventListener('canplay', function() {
					that._onLoad();
				});
				audio.addEventListener('error', errorHandler);
				audio.src = url;
				this._save(name, audio);
				if ('ontouchend' in document) {
					var playing = false;
					var fnPlay = audio.play;
					var fnPause = audio.pause;
					audio.play = function() {
						playing = true;
						fnPlay.call(this);
					};
					audio.pause = function() {
						playing = false;
						fnPause.call(this);
					};
					document.addEventListener('touchstart', function() {
						if (playing) {
							audio.play();
						} else {
							audio.play();
							audio.pause();
						}
						document.removeEventListener('touchstart', arguments.callee, true);
					}, true);
				}
				break;
			default:
				that._request(url, {
					success: function(xhr) {
						that._save(name, xhr.response);
						that._onLoad();
					},
					error: errorHandler
				});
		}
	},
	_save: function(name, resouce) {
		this._resources[name] = resouce;
	},
	_onLoad: function() {
		this.emit('progress', ++this.loadedCount, this.total);
		this._checkStatus();
	},
	_onError: function(name) {
		++this.errorCount;
		this.emit('error', name);
		this._checkStatus();
	},
	_checkStatus: function() {
		if (this.loadedCount === this.total) {
			this.emit('complete');
		}
		if (this.loadedCount + this.errorCount === this.total) {
			this.emit('finish');
		}
	},
	load: function() {
		var data = this._data;
		for (var type in data) {
			var list = data[type];
			this.total += list.length;
			for (var i = 0, l = list.length; i < l; ++i) {
				var item = list[i];
				this._load(item.name, item.url, type);
			}
		}
		delete this._data;
		return this;
	},
	get: function(name) {
		return this._resources[name];
	},
	destroy: function(name) {
		return delete this._resources[name];
	},
	destroyAll: function(name) {
		this._resources = [];
	}
}, {
	Type: {
		XML: 'xml',
		JSON: 'json',
		TEXT: 'text',
		IMAGE: 'image',
		AUDIO: 'audio',
		BINARY: 'binary'
	}
});

var Ease = go2d.Ease = Class.extend({}, {
	linear: function(t, b, c, d) {
		return c * t / d + b;
	},
	easeInQuad: function(x, t, b, c, d) {
		return c * (t /= d) * t + b;
	},
	easeOutQuad: function(x, t, b, c, d) {
		return -c * (t /= d) * (t - 2) + b;
	},
	easeInOutQuad: function(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t + b;
		return -c / 2 * ((--t) * (t - 2) - 1) + b;
	},
	easeInCubic: function(x, t, b, c, d) {
		return c * (t /= d) * t * t + b;
	},
	easeOutCubic: function(x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t + 1) + b;
	},
	easeInOutCubic: function(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t + 2) + b;
	},
	easeInQuart: function(x, t, b, c, d) {
		return c * (t /= d) * t * t * t + b;
	},
	easeOutQuart: function(x, t, b, c, d) {
		return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	},
	easeInOutQuart: function(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
		return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	},
	easeInQuint: function(x, t, b, c, d) {
		return c * (t /= d) * t * t * t * t + b;
	},
	easeOutQuint: function(x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	},
	easeInOutQuint: function(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	},
	easeInSine: function(x, t, b, c, d) {
		return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	},
	easeOutSine: function(x, t, b, c, d) {
		return c * Math.sin(t / d * (Math.PI / 2)) + b;
	},
	easeInOutSine: function(x, t, b, c, d) {
		return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	},
	easeInExpo: function(x, t, b, c, d) {
		return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
	},
	easeOutExpo: function(x, t, b, c, d) {
		return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	},
	easeInOutExpo: function(x, t, b, c, d) {
		if (t === 0) return b;
		if (t === d) return b + c;
		if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
		return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function(x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
	},
	easeOutCirc: function(x, t, b, c, d) {
		return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	},
	easeInOutCirc: function(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
		return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	},
	easeInElastic: function(x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t === 0) return b;
		if ((t /= d) === 1) return b + c;
		if (!p) p = d * 0.3;
		if (a < Math.abs(c)) {
			a = c;
			s = p / 4;
		} else s = p / (2 * Math.PI) * Math.asin(c / a);
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	},
	easeOutElastic: function(x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t === 0) return b;
		if ((t /= d) === 1) return b + c;
		if (!p) p = d * 0.3;
		if (a < Math.abs(c)) {
			a = c;
			s = p / 4;
		} else s = p / (2 * Math.PI) * Math.asin(c / a);
		return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	},
	easeInOutElastic: function(x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t === 0) return b;
		if ((t /= d / 2) === 2) return b + c;
		if (!p) p = d * (0.3 * 1.5);
		if (a < Math.abs(c)) {
			a = c;
			s = p / 4;
		} else s = p / (2 * Math.PI) * Math.asin(c / a);
		if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
	},
	easeInBack: function(x, t, b, c, d, s) {
		if (s === undefined) s = 1.70158;
		return c * (t /= d) * t * ((s + 1) * t - s) + b;
	},
	easeOutBack: function(x, t, b, c, d, s) {
		if (s === undefined) s = 1.70158;
		return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	},
	easeInOutBack: function(x, t, b, c, d, s) {
		if (s === undefined) s = 1.70158;
		if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
		return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
	},
	easeInBounce: function(x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
	},
	easeOutBounce: function(x, t, b, c, d) {
		if ((t /= d) < (1 / 2.75)) {
			return c * (7.5625 * t * t) + b;
		} else if (t < (2 / 2.75)) {
			return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
		} else if (t < (2.5 / 2.75)) {
			return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
		} else {
			return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
		}
	},
	easeInOutBounce: function(x, t, b, c, d) {
		if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * 0.5 + b;
		return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
	}
});

/**
 * Tween
 */
var Tween = go2d.Tween = EventDispatcher.extend({
	__init: function(target, options) {
		options = options || {};
		this._super();
		this._target = target;
		this._steps = [];
		this._loops = options.loops === undefined ? 1 : options.loops;
		this._initEvent();
		this.paused = false;
		this.play();
	},
	_initEvent: function() {
		var that = this,
			target = this._target,
			steps = this._steps,
			loops = this._loops,
			current = 0,
			reversing = false,
			beginProps = {},
			offsetTime = 0,
			prevProps;
		this._onStep = function(deltaTime) {
			if (that.paused) {
				return;
			}
			var step = steps[current];
			var props = step.props;
			var duration = step.duration || 0;
			var ease = step.ease || Ease.linear;
			if (prevProps === undefined) {
				prevProps = {};
				forEach(props, function(value, name) {
					beginProps[name] = beginProps[name] === undefined ? target[name] : beginProps[name];
					prevProps[name] = target[name];
				}, target);
			}
			offsetTime = Math.min(offsetTime + deltaTime, duration);
			forEach(props, function(value, name) {
				if (duration > 0) {
					target[name] = ease(offsetTime, prevProps[name], value - prevProps[name], duration);
				} else {
					target[name] = value;
				}
			});
			if (offsetTime === duration) {
				prevProps = undefined;
				offsetTime = 0;
				if (++current >= steps.length) {
					current = 0;
					if (loops > 0 && --loops === 0) {
						that.pause();
					} else {
						forEach(beginProps, function(value, name) {
							target[name] = value;
						});
					}
				}
			}
		};
	},
	wait: function(duration) {
		this._steps.push({
			duration: duration
		});
		return this;
	},
	from: function(props) {
		this._steps.push({
			props: props
		});
		return this;
	},
	to: function(props, duration, ease) {
		this._steps.push({
			props: props,
			duration: duration,
			ease: ease
		});
		return this;
	},
	play: function() {
		this.paused = false;
		this._target.on('step', this._onStep);
		return this;
	},
	pause: function() {
		this.paused = true;
		this._target.off('step', this._onStep);
		return this;
	}
});

/**
 * Display Object
 */
var DisplayObject = go2d.DisplayObject = EventDispatcher.extend({
	__init: function(canvas) {
		this._super();
		this.canvas = canvas || document.createElement('canvas');
		this.context = this.canvas.getContext('2d');
		this.name = '';
		this.tag = '';
		this.stage = null;
		this.paused = false;
		this.touchable = true;
		this.touchChildren = true;
		this._dirty = true;
		this._touches = [];
		this._children = [];

		var properties = {
			opacity: 1,
			background: null
		};
		forEach(properties, function(value, key) {
			Object.defineProperty(this, key, {
				set: function(value) {
					if (properties[key] !== value) {
						properties[key] = value;
					}
					this.update();
				},
				get: function() {
					return properties[key];
				}
			});
		}, this);

		Object.defineProperty(this, 'width', {
			set: function(width) {
				this._onResize(width, this.canvas.height);
			},
			get: function() {
				return this.canvas.width;
			}
		});
		Object.defineProperty(this, 'height', {
			set: function(height) {
				this._onResize(this.canvas.width, height);
			},
			get: function() {
				return this.canvas.height;
			}
		});
	},
	_onTouch: function(event) {
		if (!this.touchable) {
			return;
		}
		var stoped = false,
			type = event.type;
		if (this.touchChildren) {
			var children = this._children,
				identifier = event.identifier,
				touchPos = new Vector(event.x, event.y);
			for (var i = children.length - 1; i >= 0; --i) {
				var child = children[i];
				if (child.visible && child.touchable) {
					var emit = false,
						touches = child._touches,
						subPos = child.getTransform().invert().vectorMultiply(touchPos),
						inRect = subPos.x >= 0 && subPos.y >= 0 && subPos.x <= child.width && subPos.y <= child.height;
					switch (type) {
						case 'touchstart':
							if (inRect) {
								emit = true;
								touches[identifier] = true;
							}
							break;
						case 'touchmove':
							if (touches[identifier]) {
								emit = true;
							}
							break;
						case 'touchend':
							if (touches[identifier]) {
								emit = true;
								touches[identifier] = false;
							}
							break;
						case 'touchtap':
							if (inRect && touches[identifier] !== undefined) {
								emit = true;
							}
							delete touches[identifier];
							break;
					}
					if (emit) {
						var subEvent = new TouchEvent(type, subPos.x, subPos.y, event.globalX, event.globalY, identifier);
						child._onTouch(subEvent);
						stoped = stoped || subEvent.isStopped();
						break;
					}
				}
			}
		}
		if (stoped) {
			event.stopPropagation();
		} else {
			this.emit(type, event);
		}
	},
	_onAddedToStage: function(stage) {
		this.stage = stage;
		this.emit('addedtostage');
		forEach(this._children, function(child) {
			child._onAddedToStage(stage);
		});
	},
	_onRemovedFromStage: function() {
		this.stage = null;
		this.emit('removedfromstage');
		forEach(this._children, function(child) {
			child._onRemovedFromStage();
		});
	},
	_onResize: function(width, height) {
		var oldWidth = this.width,
			oldHeight = this.height;
		if (width === oldWidth && height === oldHeight) {
			return;
		}
		var event = new ResizeEvent({
			width: oldWidth,
			height: oldHeight
		}, {
			width: width,
			height: height
		});
		this.emit('resize', event);
		if (!event.isDefaultPrevented()) {
			this.canvas.width = width;
			this.canvas.height = height;
			this.update();
		}
	},
	render: function() {
		if (this._dirty) {
			var ctx = this.context,
				children = this._children,
				event = new Event('render');
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.clearRect(0, 0, this.width, this.height);
			ctx.beginPath();
			if (this.background) {
				ctx.save();
				ctx.fillStyle = this.background;
				ctx.fillRect(0, 0, this.width, this.height);
				ctx.restore();
			}
			this.emit('render', event);
			if (!event.isDefaultPrevented()) {
				forEach(children, function(child) {
					if (child.visible && child.opacity) {
						var matrix = child.getTransform();
						child.render();
						ctx.globalAlpha = child.opacity;
						if (matrix.a === 1 && matrix.b === 0 && matrix.c === 0 && matrix.d === 1) {
							ctx.drawImage(child.canvas, child.x, child.y, child.width, child.height);
						} else {
							ctx.save();
							ctx.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
							ctx.drawImage(child.canvas, 0, 0, child.width, child.height);
							ctx.restore();
						}
					}
				});
			}
			this.emit('paint', ctx);
			this._dirty = false;
		}
		return this;
	},
	tick: function(deltaTime) {
		if (!this.paused) {
			forEach(this._children, function(child) {
				child.tick(deltaTime);
			});
			this.emit('step', deltaTime);
		}
		return this;
	},
	update: function() {
		this._dirty = true;
		this.updateParent();
		return this;
	},
	updateParent: function() {
		if (this.parent) {
			this.parent.update();
		}
		return this;
	},
	addChild: function(child) {
		this.addChildAt(child);
		return this;
	},
	addChildAt: function(child, index) {
		if (child.parent) {
			child.parent.removeChild(child);
		}
		child.parent = this;
		if (this.stage) {
			child._onAddedToStage(this.stage);
		}
		if (index === undefined) {
			this._children.push(child);
		} else {
			this._children.splice(index, 0, child);
		}
		this.update();
		return this;
	},
	getChildByName: function(name) {
		var child;
		forEach(this._children, function(item) {
			if (item.name === name) {
				child = item;
				return false;
			}
		});
		return child;
	},
	getChildrenByTag: function(tag) {
		var children = [];
		forEach(this._children, function(item) {
			if (item.tag === tag) {
				children.push(item);
			}
		});
		return children;
	},
	getChildAt: function(index) {
		return this._children[index];
	},
	getChildIndex: function(child) {
		var index = -1;
		forEach(this._children, function(item, i) {
			if (item === child) {
				index = i;
			}
		});
		return index;
	},
	swapChildren: function(child1, child2) {
		var index1 = this.getChildIndex(child1);
		var index2 = this.getChildIndex(child2);
		if (index1 >= 0 && index2 >= 0) {
			this.swapChildrenAt(index1, index2);
		}
		return this;
	},
	swapChildrenAt: function(index1, index2) {
		if (index1 !== index2) {
			var child1 = this._children[index1];
			var child2 = this._children[index2];
			if (child1 && child2) {
				this._children[index1] = child2;
				this._children[index2] = child1;
				this.update();
			}
		}
		return this;
	},
	sortChildren: function(compare) {
		this._children.sort(compare);
		return this;
	},
	getAllChildren: function() {
		return this._children;
	},
	removeChild: function(child, cleanup) {
		var children = this._children;
		for (var i = children.length - 1; i >= 0; --i) {
			if (children[i] === child) {
				this.removeChildAt(i, cleanup);
			}
		}
		return this;
	},
	removeChildAt: function(index, cleanup) {
		var child = this._children.splice(index, 1)[0];
		if (child) {
			if (cleanup) {
				child.dispose();
			} else {
				child.parent = null;
				if (child.stage) {
					child._onRemovedFromStage();
				}
			}
			this.update();
		}
		return this;
	},
	removeChildrenByTag: function(tag, cleanup) {
		var children = this._children;
		for (var i = children.length - 1; i >= 0; --i) {
			if (children[i].tag === tag) {
				this.removeChildAt(i, cleanup);
			}
		}
		return this;
	},
	removeAllChildren: function(cleanup) {
		forEach(this._children, function(child) {
			child.parent = null;
			if (child.stage) {
				child._onRemovedFromStage();
			}
			if (cleanup) {
				child.dispose();
			}
		});
		this._children = [];
		this.update();
		return this;
	},
	play: function() {
		this.paused = false;
		return this;
	},
	pause: function() {
		this.paused = true;
		return this;
	},
	dispose: function() {
		if (this.parent) {
			this.parent.removeChild(this);
		}
		this.removeAllChildren(true);
		this._super();
		return this;
	}
});

/**
 * Sprite
 */
var Sprite = go2d.Sprite = DisplayObject.extend({
	__init: function() {
		this._super();
		this.parent = null;
		var properties = {
			x: 0,
			y: 0,
			skewX: 0,
			skewY: 0,
			scaleX: 1,
			scaleY: 1,
			anchorX: 0,
			anchorY: 0,
			anchorOffsetX: 0,
			anchorOffsetY: 0,
			rotation: 0,
			visible: true
		};
		forEach(properties, function(value, key) {
			Object.defineProperty(this, key, {
				set: function(value) {
					properties[key] = value;
					this.updateParent();
				},
				get: function() {
					return properties[key];
				}
			});
		}, this);
	},
	getTransform: function() {
		var matrix = new Matrix(),
			offsetX = this.anchorOffsetX + this.anchorX * this.width,
			offsetY = this.anchorOffsetY + this.anchorY * this.height;
		matrix.translate(-offsetX, -offsetY);
		matrix.rotate(this.rotation).scale(this.scaleX, this.scaleY).skew(this.skewX, this.skewY);
		matrix.translate(this.x + offsetX, this.y + offsetY);
		return matrix;
	},
	show: function() {
		this.visible = true;
		return this;
	},
	hide: function() {
		this.visible = false;
		return this;
	}
});

/**
 * Image View
 */
var ImageView = go2d.ImageView = Sprite.extend({
	__init: function(image) {
		this._super();
		this.setImage(image);
		this.on('render', this._onRender);
	},
	setImage: function(image) {
		this._image = image;
		this.update();
	},
	_onRender: function() {
		var ctx = this.context;
		ctx.drawImage(this._image, 0, 0, this.width, this.height);
	}
});

/**
 * Scroll View
 */
var ScrollView = go2d.ScrollView = Sprite.extend({
	__init: function(content) {
		this._super();
		this._content = null;
		this._scrollPos = {
			top: 0,
			left: 0
		};
		this._initTouch();
		this.setContent(content);
		this.on('render', this._onRender);

		Object.defineProperty(this, 'scrollTop', {
			set: function(scrollTop) {
				this._onScroll(scrollTop, this.scrollLeft);
			},
			get: function() {
				return this._scrollPos.top;
			}
		});

		Object.defineProperty(this, 'scrollLeft', {
			set: function(scrollLeft) {
				this._onScroll(this.scrollTop, scrollLeft);
			},
			get: function() {
				return this._scrollPos.left;
			}
		});
	},
	_initTouch: function() {
		var beginPos, beginTouch, prevTouch, prevTime, speed;
		this.on({
			touchstart: function(e) {
				beginPos = {
					top: this.scrollTop,
					left: this.scrollLeft
				};
				prevTime = +new Date();
				beginTouch = prevTouch = e;
			},
			touchmove: function(e) {
				var offsetTime = +new Date() - prevTime;
				var scrollTop = this.scrollTop = beginPos.top - e.y + beginTouch.y;
				var scrollLeft = this.scrollLeft = beginPos.left - e.x + beginTouch.x;
				speed = {
					top: (e.y - prevTouch.y) / offsetTime,
					left: (e.x - prevTouch.x) / offsetTime
				};
				prevTime = +new Date();
				prevTouch = e;
				if (this.scrollTop !== scrollTop || this.scrollLeft !== scrollLeft) {
					e.stopPropagation();
				}
			},
			touchend: function(e) {
				beginPos = beginTouch = prevTouch = prevTime = null;
			},
			step: function(deltaTime) {
				if (!beginPos && speed) {
					var friction = 0.9;
					var minOffset = 1;
					var prevTop = this.scrollTop;
					var prevLeft = this.scrollLeft;
					var offsetTop = (speed.top *= friction) * deltaTime;
					var offsetLeft = (speed.left *= friction) * deltaTime;
					this.scrollTop -= offsetTop;
					this.scrollLeft -= offsetLeft;
					if (Math.sqrt(offsetTop * offsetTop + offsetLeft * offsetLeft) < minOffset) {
						speed = null;
					}
				}
			}
		});
	},
	_onScroll: function(scrollTop, scrollLeft) {
		var content = this.getContent();
		if (content) {
			var newPos = {
				top: Math.max(0, Math.min(scrollTop, content.height - this.height)),
				left: Math.max(0, Math.min(scrollLeft, content.width - this.width))
			};
			var event = new Event('scroll', this._scrollPos, newPos);
			this.emit('scroll', event);
			if (!event.isDefaultPrevented()) {
				this._scrollPos = newPos;
				this.update();
			}
		}
	},
	_onRender: function() {
		var ctx = this.context,
			children = this._children;
		if (this.background) {
			ctx.save();
			ctx.fillStyle = this.background;
			ctx.fillRect(0, 0, this.width, this.height);
			ctx.restore();
		} else {
			ctx.clearRect(0, 0, this.width, this.height);
		}
		forEach(children, function(child) {
			if (child.visible) {
				var matrix = child.getTransform();
				child.render();
				ctx.save();
				ctx.globalAlpha = child.opacity;
				ctx.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx - this.scrollLeft, matrix.ty - this.scrollTop);
				ctx.drawImage(child.canvas, 0, 0, child.width, child.height);
				ctx.restore();
			}
		}, this);
		return false;
	},
	setContent: function(content) {
		this.removeContent();
		if (content) {
			this._children[0] = content;
		}
	},
	getContent: function() {
		return this._children[0];
	},
	removeContent: function(cleanup) {
		var content = this.getContent();
		if (content) {
			content.parent = null;
			if (cleanup) {
				content.dispose();
			}
			this._children = [];
		}
	},
	addChildAt: function(child) {
		this.setContent(child);
		console.warn('NotSupportError: Please use `setConent` instead.');
	},
	removeChildAt: function(index, cleanup) {
		this.removeContent(cleanup);
		console.warn('NotSupportError: Please use `removeConent` instead.');
	},
	removeAllChildren: function(cleanup) {
		this.removeContent(cleanup);
	}
});

/**
 * Text Field
 */
var TextField = go2d.TextField = Sprite.extend({
	__init: function(text, options) {
		this._super();
		this.on('render', this._onRender);
		options = options || {};
		var properties = {
			bold: options.bold || false,
			italic: options.italic || false,
			fontSize: options.fontSize || 12,
			color: options.color || 'black',
			textAlign: options.textAlign || 'left',
			lineHeight: options.lineHeight || '120%',
			strokeSize: options.strokeSize || 0,
			strokeStyle: options.strokeStyle || null,
			fontFamily: options.fontFamily || 'Arial',
			breakWord: options.breakWord || false,
			autoResize: options.autoResize || false,
			paddingTop: options.paddingTop || 0,
			paddingLeft: options.paddingLeft || 0,
			paddingRight: options.paddingRight || 0,
			paddingBottom: options.paddingBottom || 0,
			maxWidth: options.maxWidth || 0xffffff,
			maxHeight: options.maxHeight || 0xffffff
		};
		forEach(properties, function(value, key) {
			Object.defineProperty(this, key, {
				set: function(value) {
					if (properties[key] !== value) {
						properties[key] = value;
						this._updateFont();
						this.update();
					}
				},
				get: function() {
					return properties[key];
				}
			});
		}, this);
		Object.defineProperty(this, 'textWidth', {
			set: function() {},
			get: function() {
				return this._getTextRange(this._splitLines()).width;
			}
		});
		Object.defineProperty(this, 'textHeight', {
			set: function() {},
			get: function() {
				return this._getTextRange(this._splitLines()).height;
			}
		});
		Object.defineProperty(this, 'text', {
			set: function(value) {
				if (value === undefined || value === null) {
					value = '';
				} else {
					value = '' + value;
				}
				if (text !== value) {
					text = value;
					this.update();
				}
			},
			get: function() {
				return text;
			}
		});
		this.text = text;
		this._updateFont();
	},
	_updateFont: function() {
		var ctx = this.context,
			italicStr = this.italic ? 'italic' : 'normal',
			boldStr = this.bold ? 'bold' : 'normal',
			sizeStr = this.fontSize + 'px';
		ctx.font = italicStr + ' ' + boldStr + ' ' + sizeStr + ' ' + this.fontFamily;
		ctx.textAlign = this.textAlign;
		ctx.textBaseline = 'top';
	},
	_getLineHeight: function() {
		var lineHeight = this.lineHeight;
		if (/%/.test(lineHeight)) {
			return parseFloat(lineHeight) * this.fontSize / 100;
		}
		return lineHeight;
	},
	_splitLines: function() {
		var newLines = [],
			ctx = this.context,
			lines = this.text.split('\n'),
			breakWord = this.breakWord,
			width = this.autoResize ? this.maxWidth : this.width;
		width -= this.paddingLeft + this.paddingRight;
		forEach(lines, function(line) {
			if (ctx.measureText(line).width < width) {
				newLines.push(line);
			} else if (breakWord) {
				var i = 0;
				while (line.length > 0) {
					++i;
					if (ctx.measureText(line.substr(0, i + 1)).width > width || i === line.length) {
						newLines.push(line.substr(0, i));
						line = line.substr(i);
						i = 0;
					}
				}
			} else {
				var word, bound,
					words = [],
					newLine = '',
					splits = line.split(/\b/);
				while (splits.length) {
					word = splits.shift();
					if (/\w+/i.test(word)) {
						words.push(word);
					} else {
						words = words.concat(word.split(''));
					}
				}
				while (words.length) {
					word = words[0];
					if (ctx.measureText(newLine + word).width > width && newLine) {
						newLines.push(newLine);
						newLine = '';
					} else {
						newLine += words.shift();
					}
				}
				if (newLine) {
					newLines.push(newLine);
				}
			}
		}, this);
		return newLines;
	},
	_onResize: function(width, height) {
		this._super(width, height);
		this._updateFont();
	},
	_onRender: function() {
		var lines = this._splitLines();
		if (this.autoResize) {
			var range = this._getTextRange(lines);
			this.width = Math.min(range.width, this.maxWidth) + this.paddingLeft + this.paddingRight;
			this.height = Math.min(range.height, this.maxHeight) + this.paddingTop + this.paddingBottom;
		}
		this._drawLines(lines);
	},
	_getTextRange: function(lines) {
		var width = 0,
			height = 0,
			ctx = this.context,
			lineHeight = this._getLineHeight();
		forEach(lines, function(line) {
			width = Math.max(width, ctx.measureText(line).width);
			height += lineHeight;
		});
		return {
			width: width,
			height: height
		};
	},
	_drawLines: function(lines) {
		var x = 0,
			y = 0,
			paddingLeft = this.paddingLeft,
			paddingTop = this.paddingTop,
			lineHeight = this._getLineHeight();
		if (this.textAlign === 'center') {
			x = paddingLeft + this.width / 2;
		} else if (this.textAlign === 'right') {
			x = paddingLeft + this.width;
		} else {
			x = paddingLeft;
		}
		forEach(lines, function(line, i) {
			y = paddingTop + i * lineHeight;
			this._drawText(line, x, y);
		}, this);
	},
	_drawText: function(text, x, y) {
		var ctx = this.context;
		ctx.save();
		if (this.color) {
			ctx.fillStyle = this.color;
			ctx.fillText(text, x, y);
		}
		if (this.strokeStyle) {
			ctx.lineWidth = this.strokeSize;
			ctx.strokeStyle = this.strokeStyle;
			ctx.strokeText(text, x, y);
		}
		ctx.restore();
	},
	setText: function(text) {
		this.text = text;
		return this;
	}
});

/**
 * Stage
 */
var Stage = go2d.Stage = DisplayObject.extend({
	__init: function(canvas) {
		if (typeof canvas === 'string') {
			canvas = document.getElementById(canvas);
		}
		this._super(canvas);
		this.__dispatchEvents();
		this.stage = this;
	},
	__dispatchEvents: function() {
		var timer,
			that = this,
			canvas = this.canvas;

		function createTouchEvent(type, event) {
			var bound = canvas.getBoundingClientRect(),
				scaleX = bound.width / canvas.width,
				scaleY = bound.height / canvas.height,
				x = (event.pageX - bound.left) / scaleX,
				y = (event.pageY - bound.top) / scaleY,
				identifier = event.identifier || 0;
			return new TouchEvent(type, x, y, x, y, identifier);
		}

		function emitTouch(type, event) {
			var touches = event.changedTouches;
			if (touches) {
				touches = Array.prototype.slice.call(touches);
				forEach(touches, function(event) {
					that._onTouch.call(that, createTouchEvent(type, event));
				});
			} else {
				that._onTouch.call(that, createTouchEvent(type, event));
			}
		}

		if ('ontouchend' in document) {
			canvas.addEventListener('touchstart', function(event) {
				emitTouch('touchstart', event);
				event.preventDefault();
			});
			canvas.addEventListener('touchmove', function(event) {
				emitTouch('touchmove', event);
				event.preventDefault();
			});
			canvas.addEventListener('touchend', function(event) {
				emitTouch('touchend', event);
				emitTouch('touchtap', event);
				event.preventDefault();
			});
			canvas.addEventListener('touchcancel', function(event) {
				emitTouch('touchend', event);
				emitTouch('touchtap', event);
			});
		} else {
			var touched = false;
			canvas.addEventListener('mousedown', function(event) {
				touched = true;
				emitTouch('touchstart', event);
			});
			canvas.addEventListener('mousemove', function(event) {
				if (touched) {
					emitTouch('touchmove', event);
				}
			});
			canvas.addEventListener('mouseup', function(event) {
				touched = false;
				emitTouch('touchend', event);
				emitTouch('touchtap', event);
			});
		}
	}
});

return go2d;

});