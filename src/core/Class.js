/**
 * Class
 */
var Class = go2d.Class = function() {};

Class.extend = function(props, statics) {
	var prototype = this.prototype;

	function Go2dClass() {
		this._super = prototype;
		this.constructor = Go2dClass;
		if (isFunction(this.__init)) {
			return this.__init.apply(this, arguments);
		}
	}

	Go2dClass.prototype = Object.create(prototype);
	Go2dClass.extend = Class.extend;

	forEach(props, function(value, name) {
		var desc = Object.getOwnPropertyDescriptor(props, name);
		// Extend Getter/Setter
		if (desc.get || desc.set) {
			Object.defineProperty(Go2dClass.prototype, name, desc);
		} else {
			if (isFunction(value) && /\bthis\._super\(/.test(value)) {
				Go2dClass.prototype[name] = (function(name, fn) {
					return function() {
						this._super = prototype[name];
						var ret = fn.apply(this, arguments);
						this._super = prototype;
						return ret;
					};
				})(name, value);
			} else {
				Go2dClass.prototype[name] = value;
			}
		}
	});
	forEach(statics, function(value, name) {
		Go2dClass[name] = value;
	});
	return Go2dClass;
};
