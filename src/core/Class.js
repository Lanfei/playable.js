/**
 * Go2d 的基础类，Go2d 的所有类都继承于该类。
 * @author Lanfei
 * @class Class
 */
var Class = go2d.Class = function() {};

/**
 * 创建一个继承于该类的新类
 * @static
 * @function extend
 * @param {object} props 新类的属性或方法
 * @param {object} [statics] 新类的静态属性或方法
 * @return {function} 新类的构造函数
 */
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
