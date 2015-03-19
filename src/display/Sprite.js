/**
 * 显示对象元素类，所有舞台上的显示对象都基于此类。
 * @author Lanfei
 * @class Sprite
 * @extends DisplayObject
 *
 * @constructor
 */
var Sprite = go2d.Sprite = DisplayObject.extend({
	__init: function() {
		this._super();

		/**
		 * 父对象
		 * @property parent
		 * @type DisplayObject
		 */
		this.parent = null;

		var properties = {

			/**
			 * 水平坐标
			 * @property x
			 * @type number
			 * @default 0
			 */
			x: 0,

			/**
			 * 垂直坐标
			 * @property y
			 * @type number
			 * @default 0
			 */
			y: 0,

			/**
			 * 水平方向斜切
			 * @property skewX
			 * @type number
			 * @default 0
			 */
			skewX: 0,

			/**
			 * 垂直方向斜切
			 * @property skewY
			 * @type number
			 * @default 0
			 */
			skewY: 0,

			/**
			 * 水平方向缩放
			 * @property scaleX
			 * @type number
			 * @default 1
			 */
			scaleX: 1,

			/**
			 * 垂直方向缩放
			 * @property scaleY
			 * @type number
			 * @default 1
			 */
			scaleY: 1,

			/**
			 * 旋转角度
			 * @property rotation
			 * @type number
			 * @default 0
			 */
			rotation: 0,

			/**
			 * 是否可见
			 * @property visible
			 * @type Boolean
			 * @default true
			 */
			visible: true,

			/**
			 * 混合模式
			 * @property blendMode
			 * @type string
			 * @default source-over
			 * @todo 应有一个 BlendMode 类
			 */
			blendMode: 'source-over'
		};

		forEach(properties, function(value, key) {
			Object.defineProperty(this, key, {
				set: function(value) {
					if (properties[key] !== value) {
						properties[key] = value;
						this.updateParent();
					}
				},
				get: function() {
					return properties[key];
				}
			});
		}, this);
	},
	/**
	 * 获取变换矩阵
	 * @function getTransform
	 * @return {Matrix} 仿射变换矩阵
	 */
	getTransform: function() {
		var matrix = new Matrix(),
			anchorOffset = this.getAnchor();
		matrix.translate(-anchorOffset.x, -anchorOffset.y);
		matrix.rotate(this.rotation).scale(this.scaleX, this.scaleY).skew(this.skewX, this.skewY);
		matrix.translate(this.x, this.y);
		return matrix;
	},
	/**
	 * 显示该对象
	 * @function show
	 * @return {this}
	 */
	show: function() {
		this.visible = true;
		return this;
	},
	/**
	 * 隐藏该对象
	 * @function hide
	 * @return {this}
	 */
	hide: function() {
		this.visible = false;
		return this;
	}
});