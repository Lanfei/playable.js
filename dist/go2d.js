/**
 * Go2d 1.4.2
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

/**
 * Go2d 命名空间
 * @namespace
 * @property {string} version Go2d 版本号
 */
var go2d = {
	version: '1.4.2'
};

/**
 * 获取类型判断函数
 * @ignore
 */
function isType(type) {
	return function(obj) {
		return {}.toString.call(obj) === '[object ' + type + ']';
	};
}

/**
 * 判断是否对象类型
 * @function go2d.isObject
 * @param {mixed} obj 要判断的对象
 * @return {Boolean} 是否对象类型
 */
var isObject = go2d.isObject = isType('Object');

/**
 * 判断是否数值类型
 * @function go2d.isNumber
 * @param {mixed} obj 要判断的对象
 * @return {Boolean} 是否数值类型
 */
var isNumber = go2d.isNumber = isType('Number');

/**
 * 判断是否字符串类型
 * @function go2d.isString
 * @param {mixed} obj 要判断的对象
 * @return {Boolean} 是否字符串类型
 */
var isString = go2d.isString = isType('String');

/**
 * 判断是否函数类型
 * @function go2d.isFunction
 * @param {mixed} obj 要判断的对象
 * @return {Boolean} 是否函数类型
 */
var isFunction = go2d.isFunction = isType('Function');

/**
 * 判断是否数组类型
 * @function go2d.isArray
 * @param {mixed} obj 要判断的对象
 * @return {Boolean} 是否数组类型
 */
var isArray = go2d.isArray = Array.isArray || isType('Array');

/**
 * 遍历对象或数组
 * @function go2d.forEach
 * @param {Object|Array} obj 要遍历的对象或数组
 * @param {function} iterator 遍历函数，共有三个参数：元素值、元素索引、被遍历的对象或数组
 * @param {mixed} [thisArg=obj] 遍历时 this 关键字所引用的对象
 */
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
 * Go2d 的基础类，Go2d 的所有类都继承于该类。
 * @author Lanfei
 * @class go2d.Class
 */
var Class = go2d.Class = function() {};

/**
 * 创建一个继承于该类的新类
 * @static
 * @function go2d.Class.extend
 * @param {object} props 新类的属性或方法
 * @param {object} [statics] 新类的静态属性或方法
 * @return {function} 新类的构造函数
 */
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
 * 对象池类，一个简单的对象池实现，适用于构造函数无参数的对象。
 * @author Lanfei
 * @class go2d.ObjectPool
 * @extends go2d.Class
 * @param {function} factory 要进行缓存的类
 * @param {number} size 对象池的最大容量
 */
var ObjectPool = go2d.ObjectPool = Class.extend({
	__init: function(factory, size) {

		/**
		 * 已缓存的对象数组
		 * @protected
		 * @member go2d.ObjectPool#_pool
		 * @type Array
		 */
		this._pool = [];

		/**
		 * 要进行缓存的类
		 * @protected
		 * @member go2d.ObjectPool#_factory
		 * @type function
		 */
		this._factory = factory;

		/**
		 * 对象池的最大容量
		 * @member go2d.ObjectPool#size
		 * @type number
		 * @default 30
		 */
		this.size = size || 30;

		/**
		 * 已缓存的对象数量
		 * @readonly
		 * @member go2d.ObjectPool#length
		 * @type number
		 */
		Object.defineProperty(this, 'length', {
			set: function() {},
			get: function() {
				return this._pool.length;
			}
		});
	},
	/**
	 * 创建一个新的对象，可以重载该方法，以实现适用于类构造函数有参数的对象池
	 * @protected
	 * @function go2d.ObjectPool#_create
	 * @return {mixed} 新的对象
	 */
	_create: function() {
		return new this._factory();
	},
	/**
	 * 初始化对象，可以重载该方法，以初始化从对象池中获取到的对象
	 * @protected
	 * @function go2d.ObjectPool#_initialize
	 * @param {mixed} obj 要重置的对象
	 * @return {mixed} 重置后的对象
	 */
	_initialize: function(obj) {
		return obj;
	},
	/**
	 * 获取一个对象
	 * @function go2d.ObjectPool#get
	 * @return {mixed} 取出的对象
	 */
	get: function() {
		var obj;
		if (this._pool.length) {
			obj = this._pool.shift();
		} else {
			obj = this._create();
		}
		return this._initialize(obj);
	},
	/**
	 * 回收一个对象
	 * @function go2d.ObjectPool#recycle
	 * @param {mixed} 要回收的对象
	 * @return {this}
	 */
	recycle: function(obj) {
		this._pool.push(obj);
		if (this._pool.length > this._size) {
			this._pool.shift();
		}
		return this;
	},
	/**
	 * 清空对象池
	 * @function go2d.ObjectPool#clear
	 * @return {this}
	 */
	clear: function() {
		this._pool = [];
		return this;
	},
	/**
	 * 释放对象池内存
	 * @function go2d.ObjectPool#dispose
	 */
	dispose: function() {
		this._pool = null;
		this._factory = null;
		this._super();
	}
});
/**
 * 导演类，负责游戏逻辑流程的管理。
 * @class go2d.Director
 * @author Lanfei
 * @extends go2d.Class
 * @param {go2d.Stage} stage
 * @param {Object} [options] 配置参数
 * @param {Object} [options.frameRate] 默认帧频
 * @todo 导演类是否单例？
 */
var Director = go2d.Director = Class.extend({
	__init: function(stage, options) {
		options = options || {};

		/**
		 * 当前帧频
		 * @readonly
		 * @member go2d.Director#fps
		 * @type number
		 */
		this.fps = 0;

		/**
		 * 默认帧频
		 * @member go2d.Director#frameRate
		 * @type number
		 * @default 60
		 */
		this.frameRate = options.frameRate || 60;

		/**
		 * 舞台对象
		 * @protected
		 * @member go2d.DisplayObject#_stage
		 * @type go2d.Stage
		 */
		this._stage = stage;

		/**
		 * 是否已暂停
		 * @protected
		 * @member go2d.Director#_paused
		 * @type Boolean
		 * @default true
		 */
		this._paused = true;

		/**
		 * 主循环定时器
		 * @protected
		 * @member go2d.DisplayObject#_timer
		 * @type Object
		 */
		this._timer = null;

		/**
		 * 上一帧时间戳，用于计算帧频
		 * @protected
		 * @member go2d.DisplayObject#_prevTime
		 * @type number
		 */
		this._prevTime = null;
		this._initEvent();
		this._initTimer();
	},
	_initEvent: function() {
		var that = this;
		var sleep = false;
		var prefixes = ['', 'ms', 'moz', 'webkit'];
		forEach(prefixes, function(prefix) {
			if (document[prefix + 'hidden'] !== undefined) {
				document.addEventListener(prefix + 'visibilitychange', function() {
					if (document[prefix + 'hidden']) {
						if (!that._paused) {
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
	/**
	 * 游戏主循环
	 * @protected
	 * @function go2d.Director#_mainLoop
	 */
	_mainLoop: function() {
		var deltaTime,
			now = +new Date();
		if (this._prevTime) {
			deltaTime = now - this._prevTime;
			this.fps = Math.round(1000 / deltaTime);
		} else {
			deltaTime = Math.round(1000 / this.frameRate);
		}
		this._stage.render().tick(deltaTime);
		this._prevTime = now;
	},
	/**
	 * 开始游戏主循环
	 * @function go2d.Director#play
	 * @return {this}
	 */
	play: function() {
		var that = this;
		this._timer = this.setAnimationInterval(function() {
			that._mainLoop();
			that.play();
		});
		this._paused = false;
		return this;
	},
	/**
	 * 暂停游戏主循环
	 * @function go2d.Director#pause
	 * @return {this}
	 */
	pause: function() {
		this.clearAnimationInterval(this._timer);
		this._paused = true;
		this._prevTime = 0;
		return this;
	}
});

/**
 * 向量类，实现向量基本运算，可表达一个二维坐标。
 * @author Lanfei
 * @class go2d.Vector
 * @extends go2d.Class
 * @param {number} x 向量水平坐标
 * @param {number} y 向量垂直坐标
 */
var Vector = go2d.Vector = Class.extend({
	__init: function(x, y) {
		this.set(x, y);

		/**
		 * 向量长度
		 * @readonly
		 * @member go2d.Vector#length
		 * @type {number}
		 */
		Object.defineProperty(this, 'length', {
			set: function() {},
			get: function() {
				return Math.sqrt(this.x * this.x + this.y * this.y);
			}
		});
	},
	/**
	 * 设置向量属性值，参数同构造函数
	 * @function go2d.Vector#set
	 * @return {this}
	 */
	set: function(x, y) {
		if (x instanceof Vector) {
			this.set(x.x, x.y);
		} else {

			/**
			 * 向量水平坐标
			 * @member go2d.Vector#x
			 * @type {number}
			 */
			this.x = x || 0;

			/**
			 * 向量垂直坐标
			 * @member go2d.Vector#y
			 * @type {number}
			 */
			this.y = y || 0;
		}
		return this;
	},
	/**
	 * 向量加法
	 * @function go2d.Vector#add
	 * @param {go2d.Vector} vector 要相加的向量
	 * @return {this}
	 */
	add: function(v) {
		this.x += v.x;
		this.y += v.y;
		return this;
	},
	/**
	 * 向量减法
	 * @function go2d.Vector#subtract
	 * @param {go2d.Vector} vector 要相减的向量
	 * @return {this}
	 */
	subtract: function(v) {
		this.x -= v.x;
		this.y -= v.y;
		return this;
	},
	/**
	 * 向量除法
	 * @function go2d.Vector#divide
	 * @param {go2d.Vector} vector 要除以的向量
	 * @return {this}
	 */
	divide: function(v) {
		this.x /= v.x;
		this.y /= v.y;
		return this;
	},
	/**
	 * 向量点乘
	 * @function go2d.Vector#dotProduct
	 * @param {go2d.Vector} vector 要点乘的向量
	 * @return {this}
	 */
	dotProduct: function(v) {
		return this.x * v.x + this.y * v.y;
	},
	/**
	 * 求单位向量
	 * @function go2d.Vector#normalize
	 * @return {this}
	 */
	normalize: function() {
		var length = this.length;
		this.x = this.x / length;
		this.y = this.y / length;
		return this;
	},
	/**
	 * 向量缩放
	 * @function go2d.Vector#scale
	 * @param {number} x 水平方向缩放比例
	 * @param {number} y 垂直方向缩放比例
	 * @return {this}
	 */
	scale: function(x, y) {
		this.x *= x;
		this.y *= y === undefined ? x : y;
		return this;
	},
	/**
	 * 向量缩放
	 * @function go2d.Vector#rotate
	 * @param {number} angle 旋转的角度（弧度制）
	 * @return {this}
	 */
	rotate: function(angle) {
		var x = this.x;
		var y = this.y;
		this.x = x * Math.cos(angle) - y * Math.sin(angle);
		this.y = x * Math.sin(angle) + y * Math.cos(angle);
		return this;
	},
	/**
	 * 求向量与水平方向的夹角
	 * @function go2d.Vector#angle
	 * @return {number} 向量与水平方向的夹角（弧度制）
	 */
	angle: function() {
		return Math.atan2(this.y, this.x);
	},
	/**
	 * 求与另一个向量之间的距离
	 * @function go2d.Vector#distance
	 * @param {go2d.Vector} vector 要求距离的向量
	 * @return {number} 两向量之间的距离
	 */
	distance: function(v) {
		return Math.sqrt((this.x - v.x) * (this.x - v.x) + (this.y - v.y) * (this.y - v.y));
	},
	/**
	 * 创建当前向量的克隆对象
	 * @function go2d.Vector#clone
	 * @return {go2d.Vector} 当前向量的克隆对象
	 */
	clone: function() {
		return new Vector(this);
	}
});

/**
 * 变化矩阵类，实现矩阵基本运算，可表达两个二维向量空间之间的仿射变换。
 * <pre><code>
 *             |a  b  0|
 * (x, y, 1) * |c  d  0| = (ax + cy + tx, bx + dy + ty, 1)
 *             |tx ty 1|
 * </code></pre>
 * @author Lanfei
 * @class go2d.Matrix
 * @extends go2d.Class
 * @param {number} a 缩放或旋转时水平方向的参数
 * @param {number} b 旋转或倾斜时垂直方向的参数
 * @param {number} c 旋转或倾斜时水平方向的参数
 * @param {number} d 缩放或旋转时垂直方向的参数
 * @param {number} tx 水平方向的平移距离
 * @param {number} ty 垂直方向的平移距离
 */
var Matrix = go2d.Matrix = Class.extend({
	__init: function(a, b, c, d, tx, ty) {
		this.set.apply(this, arguments);
	},
	/**
	 * 设置矩阵属性值，参数同构造函数
	 * @function go2d.Matrix#set
	 * @return {this}
	 */
	set: function(a, b, c, d, tx, ty) {
		if (arguments.length === 6) {

			/**
			 * 缩放或旋转时水平方向的参数
			 * @member go2d.Matrix#a
			 * @type {number}
			 */
			this.a = a;

			/**
			 * 旋转或倾斜时垂直方向的参数
			 * @member go2d.Matrix#b
			 * @type {number}
			 */
			this.b = b;

			/**
			 * 旋转或倾斜时水平方向的参数
			 * @member go2d.Matrix#c
			 * @type {number}
			 */
			this.c = c;

			/**
			 * 缩放或旋转时垂直方向的参数
			 * @member go2d.Matrix#d
			 * @type {number}
			 */
			this.d = d;

			/**
			 * 水平方向的平移距离
			 * @member go2d.Matrix#tx
			 * @type {number}
			 */
			this.tx = tx;

			/**
			 * 垂直方向的平移距离
			 * @member go2d.Matrix#ty
			 * @type {number}
			 */
			this.ty = ty;
		} else if (a instanceof Matrix) {
			this.set(a.a, a.b, a.c, a.d, a.tx, a.ty);
		} else {
			this.identity();
		}
		return this;
	},
	/**
	 * 设置当前矩阵为单位矩阵
	 * @function go2d.Matrix#identity
	 * @return {this}
	 */
	identity: function() {
		this.set(1, 0, 0, 1, 0, 0);
	},
	/**
	 * 执行当前矩阵的逆转换
	 * @function go2d.Matrix#invert
	 * @return {this}
	 */
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
	/**
	 * 前置相乘
	 * @param {go2d.Matrix} matrix 前置矩阵
	 * @function go2d.Matrix#prepend
	 * @return {this}
	 */
	prepend: function(a, b, c, d, tx, ty) {
		if (a instanceof Matrix) {
			return this.prepend(a.a, a.b, a.c, a.d, a.tx, a.ty);
		}
		var a1 = this.a,
			b1 = this.b,
			c1 = this.c,
			d1 = this.d,
			tx1 = this.tx,
			ty1 = this.ty;
		this.a = a * a1 + b * c1;
		this.b = a * b1 + b * d1;
		this.c = c * a1 + d * c1;
		this.d = c * b1 + d * d1;
		this.tx = tx * a1 + ty * c1 + tx1;
		this.ty = tx * b1 + ty * d1 + ty1;
		return this;
	},
	/**
	 * 后置相乘
	 * @param {go2d.Matrix} matrix 后置矩阵
	 * @function go2d.Matrix#append
	 * @return {this}
	 */
	append: function(a, b, c, d, tx, ty) {
		if (a instanceof Matrix) {
			return this.append(a.a, a.b, a.c, a.d, a.tx, a.ty);
		}
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
	/**
	 * 将变换矩阵乘以向量
	 * @function go2d.Matrix#multiply
	 * @param {go2d.Vector} vector 变换前的向量
	 * @return {go2d.Vector} 变换后的向量
	 */
	multiply: function(v) {
		var x = this.a * v.x + this.c * v.y + this.tx;
		var y = this.b * v.x + this.d * v.y + this.ty;
		return new Vector(x, y);
	},
	/**
	 * 缩放
	 * @function go2d.Matrix#scale
	 * @param {number} x 水平方向的缩放比例
	 * @param {number} y 垂直方向的缩放比例
	 * @return {this}
	 */
	scale: function(x, y) {
		return this.append(x, 0, 0, y === undefined ? x : y, 0, 0);
	},
	/**
	 * 旋转
	 * @function go2d.Matrix#rotate
	 * @param {number} angle 旋转的角度（弧度制）
	 * @return {this}
	 */
	rotate: function(angle) {
		var sin = Math.sin(angle),
			cos = Math.cos(angle);
		return this.append(cos, sin, -sin, cos, 0, 0);
	},
	/**
	 * 斜切
	 * @function go2d.Matrix#skew
	 * @param {number} x 水平方向的斜切角度（弧度制）
	 * @param {number} y 垂直方向的斜切角度（弧度制）
	 * @return {this}
	 */
	skew: function(skewX, skewY) {
		return this.append(1, Math.tan(skewY), Math.tan(skewX), 1, 0, 0);
	},
	/**
	 * 平移
	 * @function go2d.Matrix#translate
	 * @param {number} x 水平方向的平移像素
	 * @param {number} y 垂直方向的平移像素
	 * @return {this}
	 */
	translate: function(x, y) {
		return this.append(1, 0, 0, 1, x, y);
	},
	/**
	 * 创建当前矩阵的克隆对象
	 * @function go2d.Matrix#clone
	 * @return {go2d.Matrix} 当前矩阵的克隆对象
	 */
	clone: function() {
		return new Matrix(this);
	}
}, {
	/**
	 * 角度制、弧度制换算比例
	 * @member go2d.Matrix.DEG_TO_RAD
	 * @type {number}
	 */
	DEG_TO_RAD: Math.PI / 180
});

/**
 * 事件派发器类，负责事件的派发和侦听。
 * @author Lanfei
 * @class go2d.EventDispatcher
 * @extends go2d.Class
 * @param {string} type 事件类型
 * @param {Object} [data] 事件参数
 */
var EventDispatcher = go2d.EventDispatcher = Class.extend({
	__init: function() {
		/**
		 * 侦听器哈希表
		 * @private
		 * @member go2d.EventDispatcher#__events
		 * @type Object
		 */
		this.__events = {};
	},
	/**
	 * 添加事件侦听器
	 * @function go2d.EventDispatcher#on
	 * @param {string} name 事件名称
	 * @param {function} callback 回调函数
	 * @return {this}
	 */
	/**
	 * 批量添加事件侦听器
	 * @function go2d.EventDispatcher#on
	 * @param {Object} listeners 以事件名称为键名，回调函数为键值的哈希表
	 * @return {this}
	 */
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
	/**
	 * 移除事件侦听器
	 * @function go2d.EventDispatcher#off
	 * @param {string} name 事件名称
	 * @param {function} [callback] 回调函数，当该参数为空时将移除该事件的所有回调
	 * @return {this}
	 */
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
	/**
	 * 通过事件对象派发事件
	 * @function go2d.EventDispatcher#emit
	 * @param {string} name 事件名称
	 * @param {go2d.Event} [event] 事件对象
	 * @return {this}
	 */
	/**
	 * 通过任意事件参数派发事件
	 * @function go2d.EventDispatcher#emit
	 * @param {string} name 事件名称
	 * @param {...*} [params] 事件参数
	 * @return {this}
	 */
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
	/**
	 * 释放事件派发器内存
	 * @function go2d.EventDispatcher#dispose
	 */
	dispose: function() {
		this.__events = null;
	}
});

/**
 * 事件类，所有事件对象的基类。
 * @author Lanfei
 * @class go2d.Event
 * @extends go2d.Class
 * @param {string} type 事件类型
 * @param {Object} [data] 事件参数
 */
var Event = go2d.Event = Class.extend({
	__init: function(type, data) {
		for (var key in data) {
			this[key] = data[key];
		}

		/**
		 * 事件类型
		 * @member go2d.Event#type
		 * @type string
		 */
		this.type = type;

		/**
		 * 是否已停止冒泡
		 * @protected
		 * @member go2d.Event#_propagationStopped
		 * @type Boolean
		 */
		this._propagationStopped = false;

		/**
		 * 是否已阻止默认事件
		 * @protected
		 * @member go2d.Event#_defaultPrevented
		 * @type Boolean
		 */
		this._defaultPrevented = false;
	},
	/**
	 * 停止冒泡
	 * @function go2d.Event#stopPropagation
	 * @return {this}
	 */
	stopPropagation: function() {
		this._propagationStopped = true;
		return this;
	},
	/**
	 * 获取是否已停止冒泡
	 * @function go2d.Event#isPropagationStopped
	 * @return {Boolean}
	 */
	isPropagationStopped: function() {
		return this._propagationStopped;
	},
	/**
	 * 阻止默认事件
	 * @function go2d.Event#preventDefault
	 * @return {this}
	 */
	preventDefault: function() {
		this._defaultPrevented = true;
		return this;
	},
	/**
	 * 获取是否已阻止默认事件
	 * @function go2d.Event#isDefaultPrevented
	 * @return {Boolean}
	 */
	isDefaultPrevented: function() {
		return this._defaultPrevented;
	}
});

/**
 * 触摸事件类
 * @author Lanfei
 * @class go2d.TouchEvent
 * @extends go2d.Event
 * @param {string} type 事件类型
 * @param {number} x 事件水平坐标
 * @param {number} y 事件垂直坐标
 * @param {number} globalX 全局水平坐标
 * @param {number} globalY 全局垂直坐标
 * @param {number} identifier 触摸对象唯一标识，用于多点触摸识别
 */
var TouchEvent = Event.TouchEvent = Event.extend({
	__init: function(type, x, y, globalX, globalY, identifier) {
		this._super(type, {

			/**
			 * 事件水平坐标
			 * @member go2d.TouchEvent#x
			 * @type number
			 */
			x: x,

			/**
			 * 事件垂直坐标
			 * @member go2d.TouchEvent#y
			 * @type number
			 */
			y: y,

			/**
			 * 全局水平坐标
			 * @member go2d.TouchEvent#globalX
			 * @type number
			 */
			globalX: globalX,

			/**
			 * 全局垂直坐标
			 * @member go2d.TouchEvent#globalY
			 * @type number
			 */
			globalY: globalY,

			/**
			 * 触摸对象唯一标识，用于多点触摸识别
			 * @member go2d.TouchEvent#identifier
			 * @type number
			 */
			identifier: identifier
		});
	}
}, {
	/**
	 * 触摸开始事件
	 * @constant go2d.TouchEvent.TOUCH_START
	 * @type {string}
	 * @default touchstart
	 */
	TOUCH_START: 'touchstart',
	/**
	 * 触摸移动事件
	 * @constant go2d.TouchEvent.TOUCH_MOVE
	 * @type {string}
	 * @default touchmove
	 */
	TOUCH_MOVE: 'touchmove',
	/**
	 * 触摸结束事件
	 * @constant go2d.TouchEvent.TOUCH_END
	 * @type {string}
	 * @default touchend
	 */
	TOUCH_END: 'touchend',
	/**
	 * 触摸点击事件
	 * @constant go2d.TouchEvent.TOUCH_TAP
	 * @type {string}
	 * @default touchtap
	 */
	TOUCH_TAP: 'touchtap'
});

/**
 * 事件类，所有事件对象的基类。
 * @author Lanfei
 * @class go2d.ResizeEvent
 * @extends go2d.Event
 * @param {Object} oldSize 对象原宽高
 * @param {number} oldSize.width 对象原宽度
 * @param {number} oldSize.height 对象原高度
 * @param {Object} newSize 对象新宽高
 * @param {number} newSize.width 对象新宽度
 * @param {number} newSize.height 对象新高度
 */
var ResizeEvent = Event.ResizeEvent = Event.extend({
	__init: function(oldSize, newSize) {
		this._super('resize', {

			/**
			 * 对象原宽高
			 * @member go2d.ResizeEvent#oldSize
			 * @type Object
			 * @property {number} width 对象原宽度
			 * @property {number} height 对象原高度
			 */
			oldSize: oldSize,

			/**
			 * 对象新宽高
			 * @member go2d.ResizeEvent#newSize
			 * @type Object
			 * @property {number} width 对象新宽度
			 * @property {number} height 对象新高度
			 */
			newSize: newSize
		});
	}
});

/**
 * URL 请求类，用于发起 AJAX 请求，并获取返回数据。
 * @author Lanfei
 * @class go2d.URLRequest
 * @extends go2d.EventDispatcher
 * @param {number} url 请求地址
 * @param {Object} [options] 配置参数
 * @param {string} [options.type=GET] 请求类型
 * @param {string} [options.dataType] 返回数据格式
 * @param {string} [options.contentType=application/x-www-form-urlencoded] 发送数据类型
 * @param {string} [options.responseType] 返回数据类型
 */
var URLRequest = go2d.URLRequest = EventDispatcher.extend({
	__init: function(url, options) {
		options = options || {};
		this._super();

		/**
		 * 请求地址
		 * @member go2d.URLRequest#url
		 * @type {string}
		 */
		this.url = url;

		/**
		 * 请求类型
		 * @member go2d.URLRequest#type
		 * @type {string}
		 * @default GET
		 */
		this.type = options.type || 'GET';

		/**
		 * 返回数据格式
		 * @member go2d.URLRequest#dataType
		 * @type {string}
		 * @default
		 */
		this.dataType = options.dataType || '';

		/**
		 * 发送数据类型
		 * @member go2d.URLRequest#contentType
		 * @type {string}
		 * @default application/x-www-form-urlencoded
		 */
		this.contentType = options.contentType || 'application/x-www-form-urlencoded';

		/**
		 * 返回数据类型
		 * @member go2d.URLRequest#responseType
		 * @type {string}
		 */
		this.responseType = options.responseType || '';

		/**
		 * XMLHttpRequest 对象
		 * @readonly
		 * @member go2d.URLRequest#xhr
		 * @type {Object}
		 */
		this.xhr = new window.XMLHttpRequest();
	},
	/**
	 * 发送请求
	 * @function go2d.URLRequest#send
	 * @param {string|Object} data 请求数据
	 * @return {this}
	 */
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

		xhr.responseType = this.responseType;
		xhr.open(type, url, true);
		xhr.setRequestHeader('Content-Type', this.contentType);
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
					} else if (dataType === 'text') {
						response = xhr.responseText;
					} else {
						response = xhr.response;
					}

					/**
					 * 请求成功事件
					 * @event go2d.URLRequest#success
					 * @param {mixed} response 返回数据
					 */
					that.emit('success', response);
				} else {

					/**
					 * 请求失败事件
					 * @event go2d.URLRequest#error
					 * @param {Object} xhr XMLHttpRequest 对象
					 * @param {string} textStatus 失败状态
					 */
					that.emit('error', xhr, xhr.status ? 'error' : 'abort');
				}
			}
		};
		xhr.send(dataStr);
		return this;
	},
	/**
	 * 中断请求
	 * @function go2d.URLRequest#abort
	 * @return {this}
	 */
	abort: function() {
		this.xhr.abort();
		return this;
	}
});

/**
 * 资源加载器类，可用于加载和管理游戏资源。
 * @author Lanfei
 * @class go2d.ResourceLoader
 * @extends go2d.EventDispatcher
 * @param {Object} resources 资源路径数据对象，格式如下：
 * <pre><code>
 * {
 *     text: {
 *         name1: url1,
 *         name2: url2
 *         // ...
 *     },
 *     image: {
 *         name1: url1,
 *         name2: url2
 *         // ...
 *     }
 *     // ...
 * }
 * @param {Object} [options] 配置参数
 * @param {Object} [options.retryTimes=3] 失败重试次数
 * </code></pre>
 */
var ResourceLoader = go2d.ResourceLoader = EventDispatcher.extend({
	__init: function(resources, options) {
		options = options || {};
		this._super();

		/**
		 * 缓存的资源对象
		 * @protected
		 * @member go2d.ResourceLoader#_cache
		 * @type {Object}
		 */
		this._cache = {};

		/**
		 * 资源路径数据对象
		 * @protected
		 * @member go2d.ResourceLoader#_resources
		 * @type {Object}
		 */
		this._resources = resources;

		/**
		 * 资源总数
		 * @readonly
		 * @member go2d.ResourceLoader#total
		 * @type {number}
		 */
		this.total = 0;

		/**
		 * 加载失败资源数量
		 * @readonly
		 * @member go2d.ResourceLoader#errorCount
		 * @type {number}
		 */
		this.errorCount = 0;

		/**
		 * 加载完成资源数量
		 * @readonly
		 * @member go2d.ResourceLoader#loadedCount
		 * @type {number}
		 */
		this.loadedCount = 0;

		/**
		 * 失败重试次数
		 * @member go2d.ResourceLoader#retryTimes
		 * @type {number}
		 * @default 3
		 */
		this.retryTimes = options.retryTimes === undefined ? 3 : options.retryTimes;
	},
	_request: function(type, name, url, retryTimes) {
		var errorHandler,
			that = this;

		if (retryTimes < this.retryTimes) {
			errorHandler = function() {
				that._request(type, name, url, retryTimes + 1);
			};
		} else {
			errorHandler = function() {
				that._onError(name);
			};
		}

		switch (type) {
			case ResourceLoader.TYPE_IMAGE:
				var image = new Image();
				image.addEventListener('load', function() {
					that._onLoad();
				});
				image.addEventListener('error', errorHandler);
				image.src = url;
				this._save(type, name, image);
				break;
			case ResourceLoader.TYPE_AUDIO:
				var audio = document.createElement('audio');
				// TODO (iOS)
				audio.addEventListener('canplay', function() {
					that._onLoad();
				});
				audio.addEventListener('error', errorHandler);
				audio.src = url;
				this._save(type, name, audio);
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
			case ResourceLoader.TYPE_XML:
			case ResourceLoader.TYPE_JSON:
			case ResourceLoader.TYPE_TEXT:
			default:
				var urlRequest = new URLRequest(url, {
					dataType: type,
					responseType: type === 'binary' ? 'arraybuffer' : ''
				});
				urlRequest.on('success', function(response) {
					that._save(type, name, response);
					that._onLoad();
				});
				urlRequest.on('error', errorHandler);
				urlRequest.send();
		}
	},
	_save: function(type, name, resource) {
		this._cache[type] = this._cache[type] || {};
		this._cache[type][name] = resource;
	},
	_onLoad: function() {
		/**
		 * 加载进度事件
		 * @event go2d.ResourceLoader#progress
		 * @param {number} loadedCount 已加载数量
		 * @param {number} total 总数量
		 */
		this.emit('progress', ++this.loadedCount, this.total);
		this._checkStatus();
	},
	_onError: function(name) {
		++this.errorCount;
		/**
		 * 加载错误事件
		 * @event go2d.ResourceLoader#error
		 * @param {string} name 加载出错资源名称
		 */
		this.emit('error', name);
		this._checkStatus();
	},
	_checkStatus: function() {
		if (this.loadedCount === this.total) {
			/**
			 * 加载完全事件
			 * @event go2d.ResourceLoader#complete
			 */
			this.emit('complete');
		}
		if (this.loadedCount + this.errorCount === this.total) {
			/**
			 * 加载完毕事件
			 * @event go2d.ResourceLoader#finish
			 */
			this.emit('finish');
		}
	},
	/**
	 * 开始加载资源
	 * @function go2d.ResourceLoader#load
	 * @return {this}
	 */
	load: function() {
		var that = this,
			data = this._resources;
		forEach(data, function(list, type) {
			forEach(list, function(url, name) {
				++that.total;
				that._request(type, name, url);
			});
		});
		return this;
	},
	/**
	 * 获取资源对象
	 * @function go2d.ResourceLoader#get
	 * @param {string} type 资源类型
	 * @param {string} name 资源名称
	 * @return {Object} 对应的资源对象
	 */
	get: function(type, name) {
		if (this._cache[type]) {
			return this._cache[type][name];
		}
	},
	/**
	 * 获取 XML 资源
	 * @function go2d.ResourceLoader#getXML
	 * @param {string} name 资源名称
	 * @return {Object} 对应的资源对象
	 */
	getXML: function(name) {
		return this.get(ResourceLoader.TYPE_XML, name);
	},
	/**
	 * 获取 JSON 资源
	 * @function go2d.ResourceLoader#getJSON
	 * @param {string} name 资源名称
	 * @return {Object} 对应的资源对象
	 */
	getJSON: function(name) {
		return this.get(ResourceLoader.TYPE_JSON, name);
	},
	/**
	 * 获取文本资源
	 * @function go2d.ResourceLoader#getText
	 * @param {string} name 资源名称
	 * @return {Object} 对应的资源对象
	 */
	getText: function(name) {
		return this.get(ResourceLoader.TYPE_TEXT, name);
	},
	/**
	 * 获取图像资源
	 * @function go2d.ResourceLoader#getImage
	 * @param {string} name 资源名称
	 * @return {Object} 对应的资源对象
	 */
	getImage: function(name) {
		return this.get(ResourceLoader.TYPE_IMAGE, name);
	},
	/**
	 * 获取音频资源
	 * @function go2d.ResourceLoader#getAudio
	 * @param {string} name 资源名称
	 * @return {Object} 对应的资源对象
	 */
	getAudio: function(name) {
		return this.get(ResourceLoader.TYPE_AUDIO, name);
	},
	/**
	 * 获取二进制资源
	 * @function go2d.ResourceLoader#getBinary
	 * @param {string} name 资源名称
	 * @return {Object} 对应的资源对象
	 */
	getBinary: function(name) {
		return this.get(ResourceLoader.TYPE_BINARY, name);
	},
	/**
	 * 移除资源
	 * @function go2d.ResourceLoader#destroy
	 * @param {string} [type] 资源类型，为空时移除所有资源
	 * @param {string} [name] 资源名称，为空时移除所有指定类型资源
	 * @return {this}
	 */
	destroy: function(type, name) {
		if (type === undefined) {
			this._cache = {};
		} else if (name === undefined) {
			delete this._cache[type];
		} else if (this._cache[type]) {
			delete this._cache[type][name];
		}
		return this;
	},
	/**
	 * 移除 XML 资源
	 * @function go2d.ResourceLoader#destroyXML
	 * @param {string} name 资源名称
	 * @return {this}
	 */
	destroyXML: function(name) {
		return this.destroy(ResourceLoader.TYPE_XML, name);
	},
	/**
	 * 移除 JSON 资源
	 * @function go2d.ResourceLoader#destroyJSON
	 * @param {string} name 资源名称
	 * @return {this}
	 */
	destroyJSON: function(name) {
		return this.destroy(ResourceLoader.TYPE_JSON, name);
	},
	/**
	 * 移除文本资源
	 * @function go2d.ResourceLoader#destroyText
	 * @param {string} name 资源名称
	 * @return {this}
	 */
	destroyText: function(name) {
		return this.destroy(ResourceLoader.TYPE_TEXT, name);
	},
	/**
	 * 移除图像资源
	 * @function go2d.ResourceLoader#destroyImage
	 * @param {string} name 资源名称
	 * @return {this}
	 */
	destroyImage: function(name) {
		return this.destroy(ResourceLoader.TYPE_IMAGE, name);
	},
	/**
	 * 移除音频资源
	 * @function go2d.ResourceLoader#destroyAudio
	 * @param {string} name 资源名称
	 * @return {this}
	 */
	destroyAudio: function(name) {
		return this.destroy(ResourceLoader.TYPE_AUDIO, name);
	},
	/**
	 * 移除二进制资源
	 * @function go2d.ResourceLoader#destroyBinary
	 * @param {string} name 资源名称
	 * @return {this}
	 */
	destroyBinary: function(name) {
		return this.destroy(ResourceLoader.TYPE_BINARY, name);
	},
	/**
	 * 移除所有资源
	 * @function go2d.ResourceLoader#destroyAll
	 * @return {this}
	 */
	destroyAll: function() {
		this._cache = {};
		return this;
	},
	/**
	 * 释放加载器内存
	 * @function go2d.ResourceLoader#dispose
	 */
	dispose: function() {
		this._resources = null;
		this._super();
	}
}, {
	
	/**
	 * XML 数据
	 * @constant go2d.ResourceLoader.TYPE_XML
	 * @type {string}
	 * @default xml
	 */
	TYPE_XML: 'xml',
	
	/**
	 * JSON 数据
	 * @constant go2d.ResourceLoader.TYPE_JSON
	 * @type {string}
	 * @default json
	 */
	TYPE_JSON: 'json',
	
	/**
	 * 文本数据
	 * @constant go2d.ResourceLoader.TYPE_TEXT
	 * @type {string}
	 * @default text
	 */
	TYPE_TEXT: 'text',
	
	/**
	 * 图像
	 * @constant go2d.ResourceLoader.TYPE_IMAGE
	 * @type {string}
	 * @default image
	 */
	TYPE_IMAGE: 'image',
	
	/**
	 * 音频
	 * @constant go2d.ResourceLoader.TYPE_AUDIO
	 * @type {string}
	 * @default audio
	 */
	TYPE_AUDIO: 'audio',
	
	/**
	 * 二进制数据
	 * @constant go2d.ResourceLoader.TYPE_BINARY
	 * @type {string}
	 * @default binary
	 */
	TYPE_BINARY: 'binary'
});

/**
 * 缓动函数集合，用于实现不同变化速度类型的动画。
 * @author Lanfei
 * @class go2d.Ease
 * @extends go2d.Class
 */
var Ease = go2d.Ease = Class.extend({}, {
	/**
	 * 匀速缓动函数
	 * @static
	 * @function go2d.Ease.linear
	 * @param {number} t 当前时间
	 * @param {number} b 初始值
	 * @param {number} c 变化量
	 * @param {number} d 持续时间
	 * @return {number} 当前值
	 */
	linear: function(t, b, c, d) {
		return c * t / d + b;
	},
	/**
	 * 加速的二次方缓动函数
	 * @function go2d.Ease.easeInQuad
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeInQuad: function(t, b, c, d) {
		return c * (t /= d) * t + b;
	},
	/**
	 * 减速的二次方缓动函数
	 * @function go2d.Ease.easeOutQuad
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeOutQuad: function(t, b, c, d) {
		return -c * (t /= d) * (t - 2) + b;
	},
	/**
	 * 先加速后减速的二次方缓动函数
	 * @function go2d.Ease.easeInOutQuad
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeInOutQuad: function(t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t + b;
		return -c / 2 * ((--t) * (t - 2) - 1) + b;
	},
	/**
	 * 加速的三次方缓动函数
	 * @function go2d.Ease.easeInCubic
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeInCubic: function(t, b, c, d) {
		return c * (t /= d) * t * t + b;
	},
	/**
	 * 减速的三次方缓动函数
	 * @function go2d.Ease.easeOutCubic
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeOutCubic: function(t, b, c, d) {
		return c * ((t = t / d - 1) * t * t + 1) + b;
	},
	/**
	 * 先加速后减速的三次方缓动函数
	 * @function go2d.Ease.easeInOutCubic
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeInOutCubic: function(t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t + 2) + b;
	},
	/**
	 * 加速的四次方缓动函数
	 * @function go2d.Ease.easeInQuart
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeInQuart: function(t, b, c, d) {
		return c * (t /= d) * t * t * t + b;
	},
	/**
	 * 减速的四次方缓动函数
	 * @function go2d.Ease.easeOutQuart
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeOutQuart: function(t, b, c, d) {
		return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	},
	/**
	 * 先加速后减速的四次方缓动函数
	 * @function go2d.Ease.easeInOutQuart
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeInOutQuart: function(t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
		return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	},
	/**
	 * 加速的五次方缓动函数
	 * @function go2d.Ease.easeInQuint
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeInQuint: function(t, b, c, d) {
		return c * (t /= d) * t * t * t * t + b;
	},
	/**
	 * 减速的五次方缓动函数
	 * @function go2d.Ease.easeOutQuint
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeOutQuint: function(t, b, c, d) {
		return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	},
	/**
	 * 先加速后减速的五次方缓动函数
	 * @function go2d.Ease.easeInOutQuint
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeInOutQuint: function(t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	},
	/**
	 * 加速的正弦曲线缓动函数
	 * @function go2d.Ease.easeInSine
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeInSine: function(t, b, c, d) {
		return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	},
	/**
	 * 减速的正弦曲线缓动函数
	 * @function go2d.Ease.easeOutSine
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeOutSine: function(t, b, c, d) {
		return c * Math.sin(t / d * (Math.PI / 2)) + b;
	},
	/**
	 * 先加速后减速的正弦曲线缓动函数
	 * @function go2d.Ease.easeInOutSine
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeInOutSine: function(t, b, c, d) {
		return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	},
	/**
	 * 加速的指数曲线缓动函数
	 * @function go2d.Ease.easeInExpo
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeInExpo: function(t, b, c, d) {
		return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
	},
	/**
	 * 减速的指数曲线缓动函数
	 * @function go2d.Ease.easeOutExpo
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeOutExpo: function(t, b, c, d) {
		return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	},
	/**
	 * 先加速后减速的指数曲线缓动函数
	 * @function go2d.Ease.easeInOutExpo
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeInOutExpo: function(t, b, c, d) {
		if (t === 0) return b;
		if (t === d) return b + c;
		if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
		return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	/**
	 * 加速的圆形曲线缓动函数
	 * @function go2d.Ease.easeInCirc
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeInCirc: function(t, b, c, d) {
		return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
	},
	/**
	 * 减速的圆形曲线缓动函数
	 * @function go2d.Ease.easeOutCirc
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeOutCirc: function(t, b, c, d) {
		return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	},
	/**
	 * 先加速后减速的圆形曲线缓动函数
	 * @function go2d.Ease.easeInOutCirc
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeInOutCirc: function(t, b, c, d) {
		if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
		return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	},
	/**
	 * 加速的指数衰减正弦曲线缓动
	 * @function go2d.Ease.easeInElastic
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeInElastic: function(t, b, c, d) {
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
	/**
	 * 减速的指数衰减正弦曲线缓动
	 * @function go2d.Ease.easeOutElastic
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeOutElastic: function(t, b, c, d) {
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
	/**
	 * 先加速后减速的指数衰减正弦曲线缓动
	 * @function go2d.Ease.easeInOutElastic
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeInOutElastic: function(t, b, c, d) {
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
	/**
	 * 加速的超范围三次方缓动
	 * @function go2d.Ease.easeInBack
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeInBack: function(t, b, c, d, s) {
		if (s === undefined) s = 1.70158;
		return c * (t /= d) * t * ((s + 1) * t - s) + b;
	},
	/**
	 * 减速的超范围三次方缓动
	 * @function go2d.Ease.easeOutBack
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeOutBack: function(t, b, c, d, s) {
		if (s === undefined) s = 1.70158;
		return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	},
	/**
	 * 先加速后减速的超范围三次方缓动
	 * @function go2d.Ease.easeInOutBack
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeInOutBack: function(t, b, c, d, s) {
		if (s === undefined) s = 1.70158;
		if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
		return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
	},
	/**
	 * 加速的指数衰减反弹缓动
	 * @function go2d.Ease.easeInBounce
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeInBounce: function(t, b, c, d) {
		return c - jQuery.easing.easeOutBounce(d - t, 0, c, d) + b;
	},
	/**
	 * 减速的指数衰减反弹缓动
	 * @function go2d.Ease.easeOutBounce
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeOutBounce: function(t, b, c, d) {
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
	/**
	 * 先加速后减速的指数衰减反弹缓动
	 * @function go2d.Ease.easeInOutBounce
	 * @see 参数及返回值同 {@link go2d.Ease.linear}
	 */
	easeInOutBounce: function(t, b, c, d) {
		if (t < d / 2) return jQuery.easing.easeInBounce(t * 2, 0, c, d) * 0.5 + b;
		return jQuery.easing.easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
	}
});

/**
 * 缓动动画控制类，负责处理显示对象的缓动动画。
 * @author Lanfei
 * @class go2d.Tween
 * @extends go2d.Class
 * @param {go2d.Sprite} target 动画应用对象
 * @param {Object} [options] 配置参数
 * @param {Object} [options.loops=1] 循环次数，为 0 时无限循环
 * @todo 缓动时间控制应依据全局还是对象？
 * @todo 代码结构有待整理
 */
var Tween = go2d.Tween = Class.extend({
	__init: function(target, options) {
		options = options || {};

		/**
		 * 动画步骤
		 * @protected
		 * @member go2d.Tween#_steps
		 * @type {Array}
		 */
		this._steps = [];

		/**
		 * 动画应用对象
		 * @protected
		 * @member go2d.Tween#_target
		 * @type {go2d.Sprite}
		 */
		this._target = target;

		/**
		 * 循环次数，为 0 时无限循环
		 * @protected
		 * @member go2d.Tween#_loops
		 * @type {number}
		 */
		this._loops = options.loops === undefined ? 1 : options.loops;

		/**
		 * 是否已暂停
		 * @protected
		 * @member go2d.Tween#_paused
		 * @type {Boolean}
		 */
		this._paused = false;

		/**
		 * 动画步骤数量
		 * @readonly
		 * @member go2d.Tween#length
		 * @type {number}
		 */
		Object.defineProperty(this, 'length', {
			set: function() {},
			get: function() {
				return this._steps.length;
			}
		});
		this._initEvent();
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
			if (that._paused) {
				return;
			}
			var step = steps[current],
				props = step.props,
				duration = step.duration || 0,
				ease = step.ease,
				callback = step.callback;

			if (callback) {
				callback();
			} else {
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
			}

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
	/**
	 * 等待指定时间后进行下一个动画
	 * @function go2d.Tween#wait
	 * @param {number} duration 毫秒数
	 * @return {this}
	 */
	wait: function(duration) {
		this._steps.push({
			duration: duration
		});
		return this;
	},
	/**
	 * 更新属性值后进行下一个动画
	 * @function go2d.Tween#from
	 * @param {Object} props 要更新的属性集合
	 * @return {this}
	 */
	from: function(props) {
		this._steps.push({
			props: props
		});
		return this;
	},
	/**
	 * 为指定属性集合设置动画
	 * @function go2d.Tween#to
	 * @param {Object} props 要动画的属性集合
	 * @param {number} duration 持续毫秒数
	 * @param {function} [ease=go2d.Ease.linear] 缓动函数
	 * @return {this}
	 */
	to: function(props, duration, ease) {
		this._steps.push({
			props: props,
			duration: duration,
			ease: ease || Ease.linear
		});
		return this;
	},
	/**
	 * 执行回调后进行下一个动画
	 * @function go2d.Tween#call
	 * @param {function} callback 回调函数
	 * @return {this}
	 */
	call: function(callback) {
		this._steps.push({
			callback: callback
		});
		return this;
	},
	play: function() {
		this._paused = false;
		this._target.on('step', this._onStep);
		return this;
	},
	pause: function() {
		this._paused = true;
		this._target.off('step', this._onStep);
		return this;
	}
});

/**
 * 显示对象基类，实现了显示对象的基本渲染和事件逻辑，显示对象元素类和舞台类都基于此类。
 * @author Lanfei
 * @class go2d.DisplayObject
 * @extends go2d.EventDispatcher
 * @param {object} canvas 用于渲染的画布对象
 */
var DisplayObject = go2d.DisplayObject = EventDispatcher.extend({
	__init: function(canvas) {
		this._super();

		/**
		 * 用于渲染的画布对象
		 * @readonly
		 * @member go2d.DisplayObject#canvas
		 * @type object
		 */
		this.canvas = canvas || document.createElement('canvas');

		/**
		 * 画布的上下文对象
		 * @readonly
		 * @member go2d.DisplayObject#context
		 * @type object
		 */
		this.context = this.canvas.getContext('2d');

		/**
		 * 用于标识该对象的名字，该属性在兄弟对象中应该唯一
		 * @member go2d.DisplayObject#name
		 * @type string
		 */
		this.name = '';

		/**
		 * 用于标识该对象的标签
		 * @member go2d.DisplayObject#tag
		 * @type string
		 */
		this.tag = '';

		/**
		 * 该对象所属的舞台对象
		 * @readonly
		 * @member go2d.DisplayObject#stage
		 * @type go2d.Stage
		 */
		this.stage = null;

		/**
		 * 是否已暂停
		 * @member go2d.DisplayObject#paused
		 * @type Boolean
		 * @default false
		 */
		this.paused = false;

		/**
		 * 是否可点击
		 * @member go2d.DisplayObject#touchable
		 * @type Boolean
		 * @default true
		 */
		this.touchable = true;

		/**
		 * 子节点是否可点击
		 * @member go2d.DisplayObject#touchChildren
		 * @type Boolean
		 * @default true
		 */
		this.touchChildren = true;

		/**
		 * 是否需要重新渲染
		 * @protected
		 * @member go2d.DisplayObject#_dirty
		 * @type Boolean
		 * @default true
		 */
		this._dirty = true;

		/**
		 * 触摸标识数组
		 * @protected
		 * @member go2d.DisplayObject#_touches
		 * @type Array
		 */
		this._touches = [];

		/**
		 * 子对象数组
		 * @protected
		 * @member go2d.DisplayObject#_children
		 * @type Array
		 */
		this._children = [];

		/**
		 * 遮罩层
		 * @member go2d.DisplayObject#mask
		 * @type go2d.Sprite
		 */
		this._mask = null;

		var properties = {

			/**
			 * 不透明度
			 * @member go2d.DisplayObject#opacity
			 * @type number
			 * @default 1
			 */
			opacity: 1,

			/**
			 * 背景颜色或样式
			 * @member go2d.DisplayObject#background
			 * @type null|string|Object
			 * @default null
			 */
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

		/**
		 * 宽度
		 * @member go2d.DisplayObject#width
		 * @type number
		 */
		Object.defineProperty(this, 'width', {
			set: function(width) {
				this._onResize(width, this.canvas.height);
			},
			get: function() {
				return this.canvas.width;
			}
		});

		/**
		 * 高度
		 * @member go2d.DisplayObject#height
		 * @type number
		 */
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
		var type = event.type,
			propagationStopped = false;
		if (this.touchChildren) {
			var children = this._children,
				identifier = event.identifier,
				touchPos = new Vector(event.x, event.y);
			for (var i = children.length - 1; i >= 0; --i) {
				var child = children[i];
				if (child.visible && child.touchable) {
					var emit = false,
						touches = child._touches,
						subPos = child.getTransform().invert().multiply(touchPos),
						inRect = subPos.x >= 0 && subPos.y >= 0 && subPos.x <= child.width && subPos.y <= child.height;
					switch (type) {
						case 'touchstart':
							if (inRect) {
								/**
								 * 触摸开始事件
								 * @event go2d.DisplayObject#touchstart
								 * @param {go2d.TouchEvent} event 触摸事件对象
								 */
								emit = true;
								touches[identifier] = true;
							}
							break;
						case 'touchmove':
							if (touches[identifier]) {
								/**
								 * 触摸移动事件
								 * @event go2d.DisplayObject#touchmove
								 * @param {go2d.TouchEvent} event 触摸事件对象
								 */
								emit = true;
							}
							break;
						case 'touchend':
							if (touches[identifier]) {
								/**
								 * 触摸结束事件
								 * @event go2d.DisplayObject#touchend
								 * @param {go2d.TouchEvent} event 触摸事件对象
								 */
								emit = true;
								touches[identifier] = false;
							}
							break;
						case 'touchtap':
							if (inRect && touches[identifier] !== undefined) {
								/**
								 * 触摸点击事件
								 * @event go2d.DisplayObject#touchtap
								 * @param {go2d.TouchEvent} event 触摸事件对象
								 */
								emit = true;
							}
							delete touches[identifier];
							break;
					}
					if (emit) {
						var subEvent = new TouchEvent(type, subPos.x, subPos.y, event.globalX, event.globalY, identifier);
						child._onTouch(subEvent);
						propagationStopped = subEvent.isPropagationStopped();
						break;
					}
				}
			}
		}
		if (propagationStopped) {
			event.stopPropagation();
		} else {
			this.emit(type, event);
		}
	},
	_onAddedToStage: function(stage) {
		/**
		 * 添加到舞台事件
		 * @event go2d.DisplayObject#addedtostage
		 * @param {go2d.Stage} stage 舞台对象
		 */
		this.stage = stage;
		this.emit('addedtostage', stage);
		forEach(this._children, function(child) {
			child._onAddedToStage(stage);
		});
	},
	_onRemovedFromStage: function(stage) {
		/**
		 * 移除出舞台事件
		 * @event go2d.DisplayObject#removedfromstage
		 * @param {go2d.Stage} stage 舞台对象
		 */
		this.stage = null;
		this.emit('removedfromstage', stage);
		forEach(this._children, function(child) {
			child._onRemovedFromStage(stage);
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
		/**
		 * 宽高变化事件
		 * @event go2d.DisplayObject#resize
		 * @param {go2d.ResizeEvent} event 宽高变化事件对象
		 */
		this.emit('resize', event);
		if (!event.isDefaultPrevented()) {
			this.canvas.width = width;
			this.canvas.height = height;
			this.update();
		}
	},
	/**
	 * 绘制子对象
	 * @function go2d.DisplayObject#_draw
	 * @param {go2d.Sprite} child 要绘制的对象
	 * @param {string} [blendMode] 混合模式
	 * @return {this}
	 */
	_draw: function(child, blendMode) {
		var ctx = this.context,
			matrix = child.getTransform();

		ctx.save();
		ctx.globalAlpha = child.opacity;
		ctx.globalCompositeOperation = blendMode || child.blendMode;
		child.render();

		if (matrix.a === 1 && matrix.b === 0 && matrix.c === 0 && matrix.d === 1) {
			ctx.drawImage(child.canvas, matrix.tx, matrix.ty, child.width, child.height);
		} else {
			ctx.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
			ctx.drawImage(child.canvas, 0, 0, child.width, child.height);
		}
		ctx.restore();
	},
	/**
	 * 渲染该对象
	 * @function go2d.DisplayObject#render
	 * @return {this}
	 */
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
			/**
			 * 开始渲染事件
			 * @event go2d.DisplayObject#render
			 * @param {go2d.Event} event 事件对象
			 */
			this.emit('render', event);
			if (!event.isDefaultPrevented()) {
				forEach(children, function(child) {
					if (child.visible && child.opacity) {
						this._draw(child);
					}
				}, this);
				if (this._mask) {
					this._draw(this._mask, 'destination-in');
				}
			}
			/**
			 * 绘制完毕事件
			 * @event go2d.DisplayObject#paint
			 * @param {object} context 绘制上下文对象
			 */
			this.emit('paint', ctx);
			this._dirty = false;
		}
		return this;
	},
	/**
	 * 更新对象渲染状态，当该对象需要重新渲染时调用
	 * @function go2d.DisplayObject#update
	 * @return {this}
	 */
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
	/**
	 * 添加子对象
	 * @function go2d.DisplayObject#addChild
	 * @param {go2d.DisplayObject} child 要添加的子对象
	 * @return {this}
	 */
	addChild: function(child) {
		this.addChildAt(child);
		return this;
	},
	/**
	 * 在指定深度添加子对象
	 * @function go2d.DisplayObject#addChildAt
	 * @param {go2d.DisplayObject} child 要添加的子对象
	 * @param {number} index 深度，数值越小层级越低
	 * @return {this}
	 */
	addChildAt: function(child, index) {
		if (child.parent) {
			if (child.parent.getMask() === child) {
				child.parent.removeMask();
			} else {
				child.parent.removeChild(child);
			}
		}
		child.parent = this;
		if (this.stage) {
			child._onAddedToStage(this.stage);
		}
		if (index === undefined || index < 0) {
			this._children.push(child);
		} else {
			this._children.splice(index, 0, child);
		}
		this.update();
		return this;
	},
	/**
	 * 获取指定名字的子对象
	 * @function go2d.DisplayObject#getChildByName
	 * @param {string} name 子对象名字
	 * @return {go2d.DisplayObject} 对应的子对象
	 */
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
	/**
	 * 获取指定标签的子对象
	 * @function go2d.DisplayObject#getChildrenByTag
	 * @param {string} tag 子对象标签
	 * @return {Array} 对应的子对象数组
	 */
	getChildrenByTag: function(tag) {
		var children = [];
		forEach(this._children, function(item) {
			if (item.tag === tag) {
				children.push(item);
			}
		});
		return children;
	},
	/**
	 * 获取指定深度的子对象
	 * @function go2d.DisplayObject#getChildAt
	 * @param {number} index 子对象深度
	 * @return {go2d.DisplayObject} 对应的子对象
	 */
	getChildAt: function(index) {
		return this._children[index];
	},
	/**
	 * 获取指定子对象的深度
	 * @function go2d.DisplayObject#getChildIndex
	 * @param {go2d.DisplayObject} child 对应的子对象
	 * @return {number} 子对象深度
	 */
	getChildIndex: function(child) {
		var index = -1;
		forEach(this._children, function(item, i) {
			if (item === child) {
				index = i;
			}
		});
		return index;
	},
	/**
	 * 交换两个子对象的深度
	 * @function go2d.DisplayObject#swapChildren
	 * @param {go2d.DisplayObject} child1 要交换的子对象一
	 * @param {go2d.DisplayObject} child2 要交换的子对象二
	 * @return {this}
	 */
	swapChildren: function(child1, child2) {
		var index1 = this.getChildIndex(child1);
		var index2 = this.getChildIndex(child2);
		if (index1 >= 0 && index2 >= 0) {
			this.swapChildrenAt(index1, index2);
		}
		return this;
	},
	/**
	 * 交换两个子对象的深度
	 * @function go2d.DisplayObject#swapChildrenAt
	 * @param {number} index1 要交换的子对象深度一
	 * @param {number} index2 要交换的子对象深度二
	 * @return {this}
	 */
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
	/**
	 * 排列子对象
	 * @function go2d.DisplayObject#sortChildren
	 * @param {function} compare 用于比较的函数
	 * @return {this}
	 */
	sortChildren: function(compare) {
		this._children.sort(compare);
		return this;
	},
	/**
	 * 获取所有子对象
	 * @function go2d.DisplayObject#getAllChildren
	 * @return {Array} 所有子对象数组
	 */
	getAllChildren: function() {
		return this._children;
	},
	/**
	 * 移除指定的子对象
	 * @function go2d.DisplayObject#removeChild
	 * @param {go2d.DisplayObject} child 对应的子对象
	 * @param {Boolean} cleanup 是否销毁子对象
	 * @return {this}
	 */
	removeChild: function(child, cleanup) {
		var children = this._children;
		for (var i = children.length - 1; i >= 0; --i) {
			if (children[i] === child) {
				this.removeChildAt(i, cleanup);
			}
		}
		return this;
	},
	/**
	 * 移除指定深度的子对象
	 * @function go2d.DisplayObject#removeChildAt
	 * @param {number} index 子对象的深度
	 * @param {Boolean} cleanup 是否销毁子对象
	 * @return {this}
	 */
	removeChildAt: function(index, cleanup) {
		var child = this._children.splice(index, 1)[0];
		if (child) {
			if (cleanup) {
				child.dispose();
			} else {
				child.parent = null;
				if (child.stage) {
					child._onRemovedFromStage(child.stage);
				}
			}
			this.update();
		}
		return this;
	},
	/**
	 * 移除指定名字的子对象
	 * @function go2d.DisplayObject#removeChildrenByName
	 * @param {string} name 子对象的名字
	 * @param {Boolean} cleanup 是否销毁子对象
	 * @return {this}
	 */
	removeChildrenByName: function(name, cleanup) {
		var children = this._children;
		for (var i = children.length - 1; i >= 0; --i) {
			if (children[i].name === name) {
				this.removeChildAt(i, cleanup);
				break;
			}
		}
		return this;
	},
	/**
	 * 移除指定标签的子对象
	 * @function go2d.DisplayObject#removeChildrenByTag
	 * @param {string} tag 子对象的标签
	 * @param {Boolean} cleanup 是否销毁子对象
	 * @return {this}
	 */
	removeChildrenByTag: function(tag, cleanup) {
		var children = this._children;
		for (var i = children.length - 1; i >= 0; --i) {
			if (children[i].tag === tag) {
				this.removeChildAt(i, cleanup);
			}
		}
		return this;
	},
	/**
	 * 移除所有子对象
	 * @function go2d.DisplayObject#removeAllChildren
	 * @param {Boolean} cleanup 是否销毁子对象
	 * @return {this}
	 */
	removeAllChildren: function(cleanup) {
		forEach(this._children, function(child) {
			child.parent = null;
			if (child.stage) {
				child._onRemovedFromStage(child.stage);
			}
			if (cleanup) {
				child.dispose();
			}
		});
		this._children = [];
		this.update();
		return this;
	},
	/**
	 * 设置遮罩对象
	 * @function go2d.DisplayObject#setMask
	 * @param {go2d.Sprite} mask 遮罩对象
	 * @return {this}
	 */
	setMask: function(mask) {
		if (!mask) {
			this.removeMask();
		}
		if (mask.parent) {
			if (mask.parent.getMask() === mask) {
				mask.parent.removeMask();
			} else {
				mask.parent.removeChild(mask);
			}
		}
		mask.parent = this;
		if (this.stage) {
			mask._onAddedToStage(this.stage);
		}
		this._mask = mask;
		this.update();
		return this;
	},
	/**
	 * 获取遮罩对象
	 * @function go2d.DisplayObject#getMask
	 * @return {go2d.Sprite}
	 */
	getMask: function() {
		return this._mask;
	},
	/**
	 * 移除遮罩对象
	 * @function go2d.DisplayObject#removeMask
	 * @param {Boolean} cleanup 是否销毁遮罩对象
	 * @return {this}
	 */
	removeMask: function(cleanup) {
		var mask = this._mask;
		mask.parent = null;
		if (cleanup) {
			mask.dispose();
		}
		this._mask = null;
		this.update();
	},
	/**
	 * 开始该对象的帧播放
	 * @function go2d.DisplayObject#play
	 * @return {this}
	 */
	play: function() {
		this.paused = false;
		return this;
	},
	/**
	 * 暂停该对象的帧播放
	 * @function go2d.DisplayObject#pause
	 * @return {this}
	 */
	pause: function() {
		this.paused = true;
		return this;
	},
	/**
	 * 进入下一帧，该方法应只由引擎本身调用
	 * @function go2d.DisplayObject#tick
	 * @return {this}
	 */
	tick: function(deltaTime) {
		if (!this.paused) {
			forEach(this._children, function(child) {
				child.tick(deltaTime);
			});
			/**
			 * 步进（进入下一帧）事件
			 * @event go2d.DisplayObject#step
			 * @param {number} deltaTime 两帧时间差
			 */
			this.emit('step', deltaTime);
		}
		return this;
	},
	/**
	 * 释放对象内存
	 * @function go2d.DisplayObject#dispose
	 */
	dispose: function() {
		if (this.parent) {
			this.parent.removeChild(this);
		}
		this.removeAllChildren(true);
		this._super();
	}
});
/**
 * 显示对象元素类，所有舞台上的显示对象都基于此类。
 * @author Lanfei
 * @class go2d.Sprite
 * @extends go2d.DisplayObject
 */
var Sprite = go2d.Sprite = DisplayObject.extend({
	__init: function() {
		this._super();

		/**
		 * 父对象
		 * @member go2d.DisplayObject#parent
		 * @type go2d.DisplayObject
		 */
		this.parent = null;

		var properties = {

			/**
			 * 水平坐标
			 * @member go2d.DisplayObject#x
			 * @type number
			 * @default 0
			 */
			x: 0,

			/**
			 * 垂直坐标
			 * @member go2d.DisplayObject#y
			 * @type number
			 * @default 0
			 */
			y: 0,

			/**
			 * 水平方向斜切
			 * @member go2d.DisplayObject#skewX
			 * @type number
			 * @default 0
			 */
			skewX: 0,

			/**
			 * 垂直方向斜切
			 * @member go2d.DisplayObject#skewY
			 * @type number
			 * @default 0
			 */
			skewY: 0,

			/**
			 * 水平方向缩放
			 * @member go2d.DisplayObject#scaleX
			 * @type number
			 * @default 1
			 */
			scaleX: 1,

			/**
			 * 垂直方向缩放
			 * @member go2d.DisplayObject#scaleY
			 * @type number
			 * @default 1
			 */
			scaleY: 1,

			/**
			 * 水平方向锚点偏移比例
			 * @member go2d.DisplayObject#anchorX
			 * @type number
			 * @default 0
			 */
			anchorX: 0,

			/**
			 * 垂直方向锚点偏移比例
			 * @member go2d.DisplayObject#anchorY
			 * @type number
			 * @default 0
			 */
			anchorY: 0,

			/**
			 * 水平方向锚点偏移像素
			 * @member go2d.DisplayObject#anchorOffsetX
			 * @type number
			 * @default 0
			 */
			anchorOffsetX: 0,

			/**
			 * 垂直方向锚点偏移像素
			 * @member go2d.DisplayObject#anchorOffsetY
			 * @type number
			 * @default 0
			 */
			anchorOffsetY: 0,

			/**
			 * 旋转角度
			 * @member go2d.DisplayObject#rotation
			 * @type number
			 * @default 0
			 */
			rotation: 0,

			/**
			 * 是否可见
			 * @member go2d.DisplayObject#visible
			 * @type Boolean
			 * @default true
			 */
			visible: true,

			/**
			 * 混合模式
			 * @member go2d.DisplayObject#blendMode
			 * @type string
			 * @default source-over
			 * @todo 应有一个 BlendMode 类
			 */
			blendMode: 'source-over'
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
	/**
	 * 获取变化矩阵
	 * @function go2d.Sprite#getTransform
	 * @return {go2d.Matrix}
	 */
	getTransform: function() {
		var matrix = new Matrix(),
			offsetX = this.anchorOffsetX + this.anchorX * this.width,
			offsetY = this.anchorOffsetY + this.anchorY * this.height;
		matrix.translate(-offsetX, -offsetY);
		matrix.rotate(this.rotation).scale(this.scaleX, this.scaleY).skew(this.skewX, this.skewY);
		matrix.translate(this.x, this.y);
		return matrix;
	},
	/**
	 * 显示该对象
	 * @function go2d.Sprite#show
	 * @return {this}
	 */
	show: function() {
		this.visible = true;
		return this;
	},
	/**
	 * 隐藏该对象
	 * @function go2d.Sprite#hide
	 * @return {this}
	 */
	hide: function() {
		this.visible = false;
		return this;
	}
});
/**
 * 图像显示类，用于显示一张图像。
 * @author Lanfei
 * @class go2d.ImageView
 * @extends go2d.Sprite
 * @param {object} image 要绘制的图像或画布元素
 */
var ImageView = go2d.ImageView = Sprite.extend({
	__init: function(image) {
		this._super();

		/**
		 * 要绘制的图像或画布元素
		 * @protected
		 * @member go2d.ImageView#_image
		 * @type object
		 */
		this._image = null;
		this.setImage(image);
		this.width = image.width;
		this.height = image.height;
		this.on('paint', this._onPaint);
	},
	_onPaint: function(ctx) {
		if (this._image) {
			ctx.drawImage(this._image, 0, 0, this.width, this.height);
		}
	},
	/**
	 * 设置要绘制的图像或画布元素
	 * @function go2d.ImageView#setImage
	 * @param {object} image 要绘制的图像或画布元素
	 * @return {this}
	 */
	setImage: function(image) {
		this._image = image;
		this.update();
		return this;
	}
});

/**
 * 滑动视图类，可以在该视图中显示超过视图大小的显示对象，并可以通过滑动来显示内容视图的不同部分。
 * @author Lanfei
 * @class go2d.ScrollView
 * @extends go2d.Sprite
 * @param {Sprite} content 滚动视图的内容对象
 * @待优化重构
 */
var ScrollView = go2d.ScrollView = Sprite.extend({
	__init: function(content) {
		this._super();

		/**
		 * 内容对象
		 * @protected
		 * @member go2d.ScrollView#_content
		 * @type go2d.Sprite
		 */
		this._content = null;
		this._scrollPos = {
			top: 0,
			left: 0
		};
		this._initTouch();
		this.setContent(content);
		this.on('render', this._onRender);

		/**
		 * 纵向滑动距离
		 * @member go2d.ScrollView#scrollTop
		 * @type number
		 * @default 0
		 */
		Object.defineProperty(this, 'scrollTop', {
			set: function(scrollTop) {
				this._onScroll(scrollTop, this.scrollLeft);
			},
			get: function() {
				return this._scrollPos.top;
			}
		});

		/**
		 * 横向滑动距离
		 * @member go2d.ScrollView#scrollLeft
		 * @type number
		 * @default 0
		 */
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
		var content = this.getContent(),
			scrollPos = this._scrollPos;
		if (content) {
			var newPos = {
				top: Math.max(0, Math.min(scrollTop, content.height - this.height)),
				left: Math.max(0, Math.min(scrollLeft, content.width - this.width))
			};
			if (newPos.top !== scrollPos.top || newPos.left !== scrollPos.left) {
				/**
				 * 触摸移动事件
				 * @event go2d.ScrollView#scroll
				 */
				var event = new Event('scroll', scrollPos, newPos);
				this.emit('scroll', event);
				if (!event.isDefaultPrevented()) {
					this._scrollPos = newPos;
					this.update();
				}
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
	/**
	 * 设置滚动视图的内容对象
	 * @function go2d.ScrollView#setContent
	 * @param {Sprite} content 滚动视图的内容对象
	 * @return {this}
	 */
	setContent: function(content) {
		this.removeContent();
		if (content) {
			this._children[0] = content;
		}
		return this;
	},
	/**
	 * 获取滚动视图的内容对象
	 * @function go2d.ScrollView#getContent
	 * @return {Sprite} content 滚动视图的内容对象
	 */
	getContent: function() {
		return this._children[0];
	},
	/**
	 * 移除滚动视图的内容对象
	 * @function go2d.ScrollView#removeContent
	 * @param {Boolean} cleanup 是否销毁内容对象
	 * @return {this}
	 */
	removeContent: function(cleanup) {
		var content = this.getContent();
		if (content) {
			content.parent = null;
			if (cleanup) {
				content.dispose();
			}
			this._children = [];
		}
		return this;
	},
	addChildAt: function(child) {
		this.setContent(child);
		console.error('NotSupportError: Please use `setConent` instead.');
		return this;
	},
	removeChildAt: function(index, cleanup) {
		this.removeContent(cleanup);
		console.error('NotSupportError: Please use `removeConent` instead.');
		return this;
	},
	removeAllChildren: function(cleanup) {
		this.removeContent(cleanup);
		console.error('NotSupportError: Please use `removeConent` instead.');
		return this;
	}
});

/**
 * 文本显示类，用于文本排列和显示。
 * @author Lanfei
 * @class go2d.TextField
 * @extends go2d.Sprite
 * @param {string} [text] 要显示的文本
 */
var TextField = go2d.TextField = Sprite.extend({
	__init: function(text, options) {
		this._super();
		this.on('render', this._onRender);
		options = options || {};
		var properties = {
			
			/**
			 * 是否粗体
			 * @member go2d.TextField#bold
			 * @type Boolean
			 * @default false 
			 */
			bold: options.bold || false,
			
			/**
			 * 是否斜体
			 * @member go2d.TextField#italic
			 * @type Boolean
			 * @default false 
			 */
			italic: options.italic || false,
			
			/**
			 * 字体大小
			 * @member go2d.TextField#fontSize
			 * @type number
			 * @default 24 
			 */
			fontSize: options.fontSize || 24,
			
			/**
			 * 字体颜色或样式
			 * @member go2d.TextField#color
			 * @type string
			 * @default black |Object
			 */
			color: options.color || 'black',
			
			/**
			 * 对齐方式
			 * @member go2d.TextField#textAlign
			 * @type string
			 * @default left 
			 */
			textAlign: options.textAlign || 'left',
			
			/**
			 * 行高，可为百分比
			 * @member go2d.TextField#lineHeight
			 * @type number
			 * @default 120% |string
			 */
			lineHeight: options.lineHeight || '120%',
			
			/**
			 * 描边大小
			 * @member go2d.TextField#strokeSize
			 * @type number
			 * @default 0 
			 */
			strokeSize: options.strokeSize || 0,
			
			/**
			 * 描边颜色或样式
			 * @member go2d.TextField#strokeColor
			 * @type string
			 * @default null |Object
			 */
			strokeColor: options.strokeColor || null,
			
			/**
			 * 文本字体
			 * @member go2d.TextField#fontFamily
			 * @type string
			 * @default Arial 
			 */
			fontFamily: options.fontFamily || 'Arial',
			
			/**
			 * 是否允许在单词内部换行
			 * @member go2d.TextField#breakWord
			 * @type Boolean
			 * @default false 
			 */
			breakWord: options.breakWord || false,
			
			/**
			 * 是否自动调整宽高
			 * @member go2d.TextField#autoResize
			 * @type Boolean
			 * @default false 
			 */
			autoResize: options.autoResize || false,
			
			/**
			 * 顶部内边距
			 * @member go2d.TextField#paddingTop
			 * @type number
			 * @default 0 
			 */
			paddingTop: options.paddingTop || 0,
			
			/**
			 * 左部内边距
			 * @member go2d.TextField#paddingLeft
			 * @type number
			 * @default 0 
			 */
			paddingLeft: options.paddingLeft || 0,
			
			/**
			 * 右部内边距
			 * @member go2d.TextField#paddingRight
			 * @type number
			 * @default 0 
			 */
			paddingRight: options.paddingRight || 0,
			
			/**
			 * 底部内边距
			 * @member go2d.TextField#paddingBottom
			 * @type number
			 * @default 0 
			 */
			paddingBottom: options.paddingBottom || 0,
			
			/**
			 * 自动调整宽高时的最大宽度
			 * @member go2d.TextField#maxWidth
			 * @type number
			 * @default 0xffffff 
			 */
			maxWidth: options.maxWidth || 0xffffff,
			
			/**
			 * 自动调整宽高时的最大高度
			 * @member go2d.TextField#maxHeight
			 * @type number
			 * @default 0xffffff 
			 */
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

		/**
		 * 文字渲染的宽高
		 * @member go2d.TextField#textRange
		 * @type number
		 */
		Object.defineProperty(this, 'textRange', {
			set: function() {},
			get: function() {
				return this._getTextRange(this._splitLines());
			}
		});
		
		/**
		 * 文字渲染的宽度
		 * @member go2d.TextField#textWidth
		 * @type number
		 */
		Object.defineProperty(this, 'textWidth', {
			set: function() {},
			get: function() {
				return this.textRange.width;
			}
		});
		
		/**
		 * 文字渲染的高度
		 * @member go2d.TextField#textHeight
		 * @type number
		 */
		Object.defineProperty(this, 'textHeight', {
			set: function() {},
			get: function() {
				return this.textRange.height;
			}
		});
		
		/**
		 * 要显示的文字
		 * @member go2d.TextField#text
		 * @type string
		 */
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
			return Math.round(parseFloat(lineHeight) * this.fontSize / 100);
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
		if (this.strokeColor) {
			ctx.lineWidth = this.strokeSize;
			ctx.strokeStyle = this.strokeColor;
			ctx.strokeText(text, x, y);
		}
		ctx.restore();
	},
	/**
	 * 设置要显示的文字
	 * @function go2d.DisplayObject#setText
	 * @return {this}
	 */
	setText: function(text) {
		this.text = text;
		return this;
	}
});

/**
 * 舞台类，最顶层的显示对象，游戏内容的主绘图区。
 * @author Lanfei
 * @class go2d.Stage
 * @extends go2d.DisplayObject
 * @param {object} canvas 用于渲染的画布对象
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