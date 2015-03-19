/**
 * 滑动距离变化事件类。
 * @author Lanfei
 * @class ScrollEvent
 * @extends Event
 * 
 * @constructor
 * @param {Object} oldPos 对象原滑动距离
 * @param {number} oldPos.top 对象原水平方向滑动距离
 * @param {number} oldPos.left 对象原垂直方向滑动距离
 * @param {Object} newPos 对象新滑动距离
 * @param {number} newPos.top 对象新水平方向滑动距离
 * @param {number} newPos.left 对象新垂直方向滑动距离
 */
var ScrollEvent = Event.ScrollEvent = Event.extend({
	__init: function(oldPos, newPos) {
		this._super('scroll', {

			/**
			 * 对象原滑动距离
			 * @property oldPos
			 * @type Object
			 * @property {number} top 对象原水平方向滑动距离
			 * @property {number} left 对象原垂直方向滑动距离
			 */
			oldPos: oldPos,

			/**
			 * 对象新滑动距离
			 * @property newPos
			 * @type Object
			 * @property {number} top 对象新水平方向滑动距离
			 * @property {number} left 对象新垂直方向滑动距离
			 */
			newPos: newPos
		});
	}
});
