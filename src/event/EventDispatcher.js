/**
 * EventDispatcher
 */
var EventDispatcher = go2d.EventDispatcher = Class.extend({
	__init: function() {
		this.__events = {};
	},
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
	dispose: function() {
		this.__events = null;
	}
});
