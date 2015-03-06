/**
 * 触摸事件类
 * @author Lanfei
 * @class go2d.TouchEvent
 * @extends go2d.Event
 * @param {string} type 事件类型
 * @param {number} x 事件水平坐标
 * @param {number} y 事件垂直坐标
 * @param {number} globalX 全局水平坐标
 * @param {number} globalY 全局垂直坐标
 * @param {number} identifier 触摸对象唯一标识，用于多点触摸识别
 */
var TouchEvent = Event.TouchEvent = Event.extend({
	__init: function(type, x, y, globalX, globalY, identifier) {
		this._super(type, {

			/**
			 * 事件水平坐标
			 * @member go2d.TouchEvent#x
			 * @type number
			 */
			x: x,

			/**
			 * 事件垂直坐标
			 * @member go2d.TouchEvent#y
			 * @type number
			 */
			y: y,

			/**
			 * 全局水平坐标
			 * @member go2d.TouchEvent#globalX
			 * @type number
			 */
			globalX: globalX,

			/**
			 * 全局垂直坐标
			 * @member go2d.TouchEvent#globalY
			 * @type number
			 */
			globalY: globalY,

			/**
			 * 触摸对象唯一标识，用于多点触摸识别
			 * @member go2d.TouchEvent#identifier
			 * @type number
			 */
			identifier: identifier
		});
	}
}, {
	/**
	 * 触摸开始事件
	 * @constant go2d.TouchEvent.TOUCH_START
	 * @type {string}
	 * @default touchstart
	 */
	TOUCH_START: 'touchstart',
	/**
	 * 触摸移动事件
	 * @constant go2d.TouchEvent.TOUCH_MOVE
	 * @type {string}
	 * @default touchmove
	 */
	TOUCH_MOVE: 'touchmove',
	/**
	 * 触摸结束事件
	 * @constant go2d.TouchEvent.TOUCH_END
	 * @type {string}
	 * @default touchend
	 */
	TOUCH_END: 'touchend',
	/**
	 * 触摸点击事件
	 * @constant go2d.TouchEvent.TOUCH_TAP
	 * @type {string}
	 * @default touchtap
	 */
	TOUCH_TAP: 'touchtap'
});
