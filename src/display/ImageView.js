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
