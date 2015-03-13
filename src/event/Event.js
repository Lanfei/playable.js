/**
 * 事件类，所有事件对象的基类。
 * @author Lanfei
 * @class Event
 * @extends Class
 * 
 * @constructor
 * @param {string} type 事件类型
 * @param {Object} [data] 事件参数
 */
var Event = go2d.Event = Class.extend({
	__init: function(type, data) {
		for (var key in data) {
			this[key] = data[key];
		}

		/**
		 * 事件类型
		 * @property type
		 * @type string
		 */
		this.type = type;

		/**
		 * 是否已停止冒泡
		 * @protected
		 * @property _propagationStopped
		 * @type Boolean
		 */
		this._propagationStopped = false;

		/**
		 * 是否已阻止默认事件
		 * @protected
		 * @property _defaultPrevented
		 * @type Boolean
		 */
		this._defaultPrevented = false;
	},
	/**
	 * 停止冒泡
	 * @function stopPropagation
	 * @return {this}
	 */
	stopPropagation: function() {
		this._propagationStopped = true;
		return this;
	},
	/**
	 * 获取是否已停止冒泡
	 * @function isPropagationStopped
	 * @return {Boolean}
	 */
	isPropagationStopped: function() {
		return this._propagationStopped;
	},
	/**
	 * 阻止默认事件
	 * @function preventDefault
	 * @return {this}
	 */
	preventDefault: function() {
		this._defaultPrevented = true;
		return this;
	},
	/**
	 * 获取是否已阻止默认事件
	 * @function isDefaultPrevented
	 * @return {Boolean}
	 */
	isDefaultPrevented: function() {
		return this._defaultPrevented;
	}
});
