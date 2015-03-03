/**
 * Lang
 */
function isType(type) {
	return function(obj) {
		return {}.toString.call(obj) === '[object ' + type + ']';
	};
}

var isObject = go2d.isObject = isType('Object'),
	isNumber = go2d.isNumber = isType('Number'),
	isString = go2d.isString = isType('String'),
	isFunction = go2d.isFunction = isType('Function'),
	isArray = go2d.isArray = Array.isArray || isType('Array');

var forEach = go2d.forEach = function(obj, iterator, thisArg) {
	thisArg = thisArg || obj;
	if (isArray(obj)) {
		obj.forEach(iterator, thisArg);
	} else if (isObject(obj)) {
		for (var key in obj) {
			if (iterator.call(thisArg, obj[key], key, obj) === false) {
				break;
			}
		}
	}
};
