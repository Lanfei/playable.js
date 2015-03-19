/**
 * 向量类，实现向量基本运算，可表达一个二维坐标。
 * @author Lanfei
 * @class Vector
 * @extends Class
 *
 * @constructor
 * @param {number} x 向量水平坐标
 * @param {number} y 向量垂直坐标
 */
var Vector = go2d.Vector = Class.extend({
	__init: function(x, y) {
		this.set(x, y);

		/**
		 * 向量长度
		 * @readonly
		 * @property length
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
	 * @function set
	 * @return {this}
	 */
	set: function(x, y) {
		if (x instanceof Vector) {
			this.set(x.x, x.y);
		} else {

			/**
			 * 向量水平坐标
			 * @property x
			 * @type {number}
			 */
			this.x = x || 0;

			/**
			 * 向量垂直坐标
			 * @property y
			 * @type {number}
			 */
			this.y = y || 0;
		}
		return this;
	},
	/**
	 * 向量加法
	 * @function add
	 * @param {Vector} vector 要相加的向量
	 * @return {this}
	 */
	add: function(v) {
		this.x += v.x;
		this.y += v.y;
		return this;
	},
	/**
	 * 向量减法
	 * @function subtract
	 * @param {Vector} vector 要相减的向量
	 * @return {this}
	 */
	subtract: function(v) {
		this.x -= v.x;
		this.y -= v.y;
		return this;
	},
	/**
	 * 向量除法
	 * @function divide
	 * @param {Vector} vector 要除以的向量
	 * @return {this}
	 */
	divide: function(v) {
		this.x /= v.x;
		this.y /= v.y;
		return this;
	},
	/**
	 * 向量点乘
	 * @function dotProduct
	 * @param {Vector} vector 要点乘的向量
	 * @return {this}
	 */
	dotProduct: function(v) {
		return this.x * v.x + this.y * v.y;
	},
	/**
	 * 求单位向量
	 * @function normalize
	 * @return {this}
	 */
	normalize: function() {
		var length = this.length;
		this.x = this.x / length;
		this.y = this.y / length;
		return this;
	},
	/**
	 * 向量反向
	 * @function negate
	 * @return {this}
	 */
	negate: function() {
		this.x *= -1;
		this.y *= -1;
		return this;
	},
	/**
	 * 向量缩放
	 * @function scale
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
	 * @function rotate
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
	 * @function angle
	 * @return {number} 向量与水平方向的夹角（弧度制）
	 */
	angle: function() {
		return Math.atan2(this.y, this.x);
	},
	/**
	 * 求与另一个向量之间的距离
	 * @function distance
	 * @param {Vector} vector 另一个向量
	 * @return {number} 两向量之间的距离
	 */
	distance: function(v) {
		return Math.sqrt((this.x - v.x) * (this.x - v.x) + (this.y - v.y) * (this.y - v.y));
	},
	/**
	 * 判断两个向量是否相等
	 * @function equals
	 * @param {Vector} vector 另一个向量
	 * @return {Boolean} 是否相等
	 */
	equals: function(v) {
		return this.x === v.x && this.y === v.y;
	},
	/**
	 * 创建当前向量的克隆对象
	 * @function clone
	 * @return {Vector} 当前向量的克隆对象
	 */
	clone: function() {
		return new Vector(this);
	},
	/**
	 * 将向量转换为数组
	 * @function toArray
	 * @return {Array} 转换后的数组
	 */
	toArray: function() {
		return [this.x, this.y];
	}
});