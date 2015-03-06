/**
 * 事件类，所有事件对象的基类。
 * @author Lanfei
 * @class go2d.Event
 * @extends go2d.Class
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
		 * @member go2d.Event#type
		 * @type string
		 */
		this.type = type;

		/**
		 * 是否已停止冒泡
		 * @protected
		 * @member go2d.Event#_propagationStopped
		 * @type Boolean
		 */
		this._propagationStopped = false;

		/**
		 * 是否已阻止默认事件
		 * @protected
		 * @member go2d.Event#_defaultPrevented
		 * @type Boolean
		 */
		this._defaultPrevented = false;
	},
	/**
	 * 停止冒泡
	 * @function go2d.Event#stopPropagation
	 * @return {this}
	 */
	stopPropagation: function() {
		this._propagationStopped = true;
		return this;
	},
	/**
	 * 获取是否已停止冒泡
	 * @function go2d.Event#isPropagationStopped
	 * @return {Boolean}
	 */
	isPropagationStopped: function() {
		return this._propagationStopped;
	},
	/**
	 * 阻止默认事件
	 * @function go2d.Event#preventDefault
	 * @return {this}
	 */
	preventDefault: function() {
		this._defaultPrevented = true;
		return this;
	},
	/**
	 * 获取是否已阻止默认事件
	 * @function go2d.Event#isDefaultPrevented
	 * @return {Boolean}
	 */
	isDefaultPrevented: function() {
		return this._defaultPrevented;
	}
});
