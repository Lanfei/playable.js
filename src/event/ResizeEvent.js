/**
 * Resize Event
 */
var ResizeEvent = Event.ResizeEvent = Event.extend({
	__init: function(oldSize, newSize) {
		this._super('resize', {
			oldSize: oldSize,
			newSize: newSize
		});
	}
});
