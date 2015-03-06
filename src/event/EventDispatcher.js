/**
 * 事件派发器类，负责事件的派发和侦听。
 * @author Lanfei
 * @class go2d.EventDispatcher
 * @extends go2d.Class
 * @param {string} type 事件类型
 * @param {Object} [data] 事件参数
 */
var EventDispatcher = go2d.EventDispatcher = Class.extend({
	__init: function() {
		/**
		 * 侦听器哈希表
		 * @private
		 * @member go2d.EventDispatcher#__events
		 * @type Object
		 */
		this.__events = {};
	},
	/**
	 * 添加事件侦听器
	 * @function go2d.EventDispatcher#on
	 * @param {string} name 事件名称
	 * @param {function} callback 回调函数
	 * @return {this}
	 */
	/**
	 * 批量添加事件侦听器
	 * @function go2d.EventDispatcher#on
	 * @param {Object} listeners 以事件名称为键名，回调函数为键值的哈希表
	 * @return {this}
	 */
	on: function(name, callback) {
		if (arguments.length === 1) {
			var listeners = arguments[0];
			for (name in listeners) {
				this.on(name, listeners[name]);
			}
		} else {
			name = name.toLowerCase();
			this.__events[name] = this.__events[name] || [];
			this.__events[name].push(callback);
		}
		return this;
	},
	/**
	 * 移除事件侦听器
	 * @function go2d.EventDispatcher#off
	 * @param {string} name 事件名称
	 * @param {function} [callback] 回调函数，当该参数为空时将移除该事件的所有回调
	 * @return {this}
	 */
	off: function(name, callback) {
		name = name.toLowerCase();
		if (callback === undefined) {
			delete this.__events[name];
			return this;
		}
		var callbacks = this.__events[name] || [];
		for (var i = callbacks.length - 1; i >= 0; --i) {
			if (callbacks[i] === callback) {
				callbacks.splice(i, 1);
				break;
			}
		}
		return this;
	},
	/**
	 * 通过事件对象派发事件
	 * @function go2d.EventDispatcher#emit
	 * @param {string} name 事件名称
	 * @param {go2d.Event} [event] 事件对象
	 * @return {this}
	 */
	/**
	 * 通过任意事件参数派发事件
	 * @function go2d.EventDispatcher#emit
	 * @param {string} name 事件名称
	 * @param {...*} [params] 事件参数
	 * @return {this}
	 */
	emit: function(name, event) {
		name = name.toLowerCase();
		var callbacks = this.__events[name] || [],
			args = Array.prototype.slice.call(arguments, 1);
		forEach(callbacks, function(callback) {
			if (isFunction(callback) && callback.apply(this, args) === false) {
				if (event instanceof Event) {
					event.preventDefault();
					event.stopPropagation();
				}
				return false;
			}
		}, this);
		return this;
	},
	/**
	 * 释放事件派发器内存
	 * @function go2d.EventDispatcher#dispose
	 */
	dispose: function() {
		this.__events = null;
	}
});
