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
