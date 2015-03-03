/**
 * Go2d @VERSION
 * https://github.com/Lanfei/Go2d
 * (c) 2014 [Lanfei](http://www.clanfei.com/)
 * A lightweight HTML5 game engine
 */

(function(global, factory) {
	if (typeof define === "function") {
		define(factory);
	} else {
		global.go2d = factory();
	}
})(this, function() {

var go2d = {
	version: '@VERSION'
};
