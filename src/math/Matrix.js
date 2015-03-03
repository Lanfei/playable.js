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
