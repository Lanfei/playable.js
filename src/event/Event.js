/**
 * Event
 */
var Event = go2d.Event = Class.extend({
	__init: function(type, data) {
		for (var key in data) {
			this[key] = data[key];
		}
		this.type = type;
		this._stoped = false;
		this._defaultPrevented = false;
	},
	stopPropagation: function() {
		this._stoped = true;
	},
	isStopped: function() {
		return this._stoped;
	},
	preventDefault: function() {
		this._defaultPrevented = true;
	},
	isDefaultPrevented: function() {
		return this._defaultPrevented;
	}
});
