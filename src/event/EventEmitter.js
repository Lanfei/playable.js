/**
 * 事件派发器类，负责事件的派发和侦听。
 * @author Lanfei
 * @class EventEmitter
 * @extends Class
 *
 * @constructor
 * @param {string} type 事件类型
 * @param {Object} [data] 事件参数
 */
var EventEmitter = go2d.EventEmitter = Class.extend({
	__init: function() {
		/**
		 * 侦听器哈希表
		 * @private
		 * @property __events
		 * @type Object
		 */
		this.__events = {};
	},
	/**
	 * 添加事件侦听器
	 * @function on
	 * @param {string} name 事件名称
	 * @param {function} callback 回调函数
	 * @param {Object} [thisArg] 回调执行时 this 关键字所引用的对象
	 * @return {this}
	 */
	/**
	 * 批量添加事件侦听器
	 * @function on
	 * @param {Object} listeners 以事件名称为键名，回调函数为键值的哈希表
	 * @param {Object} [thisArg] 回调执行时 this 关键字所引用的对象
	 * @return {this}
	 */
	on: function(name, callback, thisArg) {
		if (isObject(arguments[0]) === 1) {
			forEach(arguments[0], function(callback, name) {
				this.on(name, callback, arguments[1]);
			}, this);
		} else {
			name = name.toLowerCase();
			this.__events[name] = this.__events[name] || [];
			this.__events[name].push({
				callback: callback,
				thisArg: thisArg
			});
		}
		return this;
	},
	/**
	 * 移除事件侦听器
	 * @function off
	 * @param {string} name 事件名称
	 * @param {function} [callback] 回调函数，当该参数为空时将移除该事件的所有回调
	 * @param {Object} [thisArg] 回调执行时 this 关键字所引用的对象
	 * @return {this}
	 */
	off: function(name, callback, thisArg) {
		name = name.toLowerCase();
		if (callback === undefined) {
			delete this.__events[name];
			return this;
		}
		var callbacks = this.__events[name] || [];
		for (var i = callbacks.length - 1; i >= 0; --i) {
			if (callbacks[i].callback === callback && callbacks[i].thisArg === thisArg) {
				callbacks.splice(i, 1);
				break;
			}
		}
		return this;
	},
	/**
	 * 通过事件对象派发事件
	 * @function emit
	 * @param {string} name 事件名称
	 * @param {go2d.Event} [event] 事件对象
	 * @return {this}
	 */
	/**
	 * 通过任意事件参数派发事件
	 * @function emit
	 * @param {string} name 事件名称
	 * @param {...*} [params] 事件参数
	 * @return {this}
	 */
	emit: function(name, event) {
		name = name.toLowerCase();
		var callbacks = this.__events[name] || [],
			args = Array.prototype.slice.call(arguments, 1);
		forEach(callbacks, function(item) {
			if (item.callback.apply(item.thisArg || this, args) === false) {
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
	 * @function dispose
	 */
	dispose: function() {
		this.__events = null;
	}
});