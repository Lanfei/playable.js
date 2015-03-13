/**
 * 获取类型判断函数
 * @ignore
 */
function isType(type) {
	return function(obj) {
		return {}.toString.call(obj) === '[object ' + type + ']';
	};
}

/**
 * 判断是否对象类型
 * @static
 * @method isObject
 * @param {mixed} obj 要判断的对象
 * @return {Boolean} 是否对象类型
 */
var isObject = go2d.isObject = isType('Object');

/**
 * 判断是否数值类型
 * @static
 * @method isNumber
 * @param {mixed} obj 要判断的对象
 * @return {Boolean} 是否数值类型
 */
var isNumber = go2d.isNumber = isType('Number');

/**
 * 判断是否字符串类型
 * @static
 * @method isString
 * @param {mixed} obj 要判断的对象
 * @return {Boolean} 是否字符串类型
 */
var isString = go2d.isString = isType('String');

/**
 * 判断是否函数类型
 * @static
 * @method isFunction
 * @param {mixed} obj 要判断的对象
 * @return {Boolean} 是否函数类型
 */
var isFunction = go2d.isFunction = isType('Function');

/**
 * 判断是否数组类型
 * @static
 * @method isArray
 * @param {mixed} obj 要判断的对象
 * @return {Boolean} 是否数组类型
 */
var isArray = go2d.isArray = Array.isArray || isType('Array');

/**
 * 遍历对象或数组
 * @static
 * @method forEach
 * @param {Object|Array} obj 要遍历的对象或数组
 * @param {function} iterator 遍历函数，共有三个参数：元素值、元素索引、被遍历的对象或数组
 * @param {mixed} [thisArg=obj] 遍历时 this 关键字所引用的对象
 */
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
