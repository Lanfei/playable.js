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
