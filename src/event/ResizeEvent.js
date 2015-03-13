/**
 * 事件类，所有事件对象的基类。
 * @author Lanfei
 * @class ResizeEvent
 * @extends Event
 * 
 * @constructor
 * @param {Object} oldSize 对象原宽高
 * @param {number} oldSize.width 对象原宽度
 * @param {number} oldSize.height 对象原高度
 * @param {Object} newSize 对象新宽高
 * @param {number} newSize.width 对象新宽度
 * @param {number} newSize.height 对象新高度
 */
var ResizeEvent = Event.ResizeEvent = Event.extend({
	__init: function(oldSize, newSize) {
		this._super('resize', {

			/**
			 * 对象原宽高
			 * @property oldSize
			 * @type Object
			 * @property {number} width 对象原宽度
			 * @property {number} height 对象原高度
			 */
			oldSize: oldSize,

			/**
			 * 对象新宽高
			 * @property newSize
			 * @type Object
			 * @property {number} width 对象新宽度
			 * @property {number} height 对象新高度
			 */
			newSize: newSize
		});
	}
});
