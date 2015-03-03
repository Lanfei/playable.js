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
