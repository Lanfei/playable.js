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
