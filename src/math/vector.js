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
