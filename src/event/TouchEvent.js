/**
 * Touch Event
 */
var TouchEvent = Event.TouchEvent = Event.extend({
	__init: function(type, x, y, globalX, globalY, identifier) {
		this._super(type, {
			x: x,
			y: y,
			globalX: globalX,
			globalY: globalY,
			identifier: identifier
		});
	}
});
