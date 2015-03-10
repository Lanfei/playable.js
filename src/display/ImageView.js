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
