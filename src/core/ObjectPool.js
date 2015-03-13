/**
 * 对象池类，一个简单的对象池实现，适用于构造函数无参数的对象。
 * @author Lanfei
 * @class ObjectPool
 * @extends Class
 * 
 * @constructor
 * @param {function} factory 要进行缓存的类
 * @param {number} size 对象池的最大容量
 */
var ObjectPool = go2d.ObjectPool = Class.extend({
	__init: function(factory, size) {

		/**
		 * 已缓存的对象数组
		 * @protected
		 * @property _pool
		 * @type Array
		 */
		this._pool = [];

		/**
		 * 要进行缓存的类
		 * @protected
		 * @property _factory
		 * @type function
		 */
		this._factory = factory;

		/**
		 * 对象池的最大容量
		 * @property size
		 * @type number
		 * @default 30
		 */
		this.size = size || 30;

		/**
		 * 已缓存的对象数量
		 * @readonly
		 * @property length
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
	 * @function _create
	 * @return {mixed} 新的对象
	 */
	_create: function() {
		return new this._factory();
	},
	/**
	 * 初始化对象，可以重载该方法，以初始化从对象池中获取到的对象
	 * @protected
	 * @function _initialize
	 * @param {mixed} obj 要重置的对象
	 * @return {mixed} 重置后的对象
	 */
	_initialize: function(obj) {
		return obj;
	},
	/**
	 * 获取一个对象
	 * @function get
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
	 * @function recycle
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
	 * @function clear
	 * @return {this}
	 */
	clear: function() {
		this._pool = [];
		return this;
	},
	/**
	 * 释放对象池内存
	 * @function dispose
	 */
	dispose: function() {
		this._pool = null;
		this._factory = null;
		this._super();
	}
});