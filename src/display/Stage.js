/**
 * 舞台类，最顶层的显示对象，游戏内容的主绘图区。
 * @author Lanfei
 * @class Stage
 * @extends DisplayObject
 * 
 * @constructor
 * @param {object} canvas 用于渲染的画布对象
 */
var Stage = go2d.Stage = DisplayObject.extend({
	__init: function(canvas) {
		if (typeof canvas === 'string') {
			canvas = document.getElementById(canvas);
		}
		this._super(canvas);
		this.__dispatchEvents();
		this.stage = this;
	},
	__dispatchEvents: function() {
		var timer,
			that = this,
			canvas = this.canvas;

		function createTouchEvent(type, event) {
			var bound = canvas.getBoundingClientRect(),
				scaleX = bound.width / canvas.width,
				scaleY = bound.height / canvas.height,
				x = (event.pageX - bound.left) / scaleX,
				y = (event.pageY - bound.top) / scaleY,
				identifier = event.identifier || 0;
			return new TouchEvent(type, x, y, x, y, identifier);
		}

		function emitTouch(type, event) {
			var touches = event.changedTouches;
			if (touches) {
				touches = Array.prototype.slice.call(touches);
				forEach(touches, function(event) {
					that._onTouch.call(that, createTouchEvent(type, event));
				});
			} else {
				that._onTouch.call(that, createTouchEvent(type, event));
			}
		}

		if ('ontouchend' in document) {
			canvas.addEventListener('touchstart', function(event) {
				emitTouch('touchstart', event);
				event.preventDefault();
			});
			canvas.addEventListener('touchmove', function(event) {
				emitTouch('touchmove', event);
				event.preventDefault();
			});
			canvas.addEventListener('touchend', function(event) {
				emitTouch('touchend', event);
				emitTouch('touchtap', event);
				event.preventDefault();
			});
			canvas.addEventListener('touchcancel', function(event) {
				emitTouch('touchend', event);
				emitTouch('touchtap', event);
			});
		} else {
			var touched = false;
			canvas.addEventListener('mousedown', function(event) {
				touched = true;
				emitTouch('touchstart', event);
			});
			canvas.addEventListener('mousemove', function(event) {
				if (touched) {
					emitTouch('touchmove', event);
				}
			});
			canvas.addEventListener('mouseup', function(event) {
				touched = false;
				emitTouch('touchend', event);
				emitTouch('touchtap', event);
			});
		}
	}
});
