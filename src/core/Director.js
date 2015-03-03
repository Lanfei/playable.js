/**
 * Director
 */
var Director = go2d.Director = Class.extend({
	__init: function(stage, options) {
		options = options || {};
		this.fps = 0;
		this.stage = stage;
		this.paused = true;
		this.frameRate = options.frameRate || 60;
		this._initEvent();
		this._initTimer();
		this._timer = null;
		this._prevTime = null;
	},
	_initEvent: function() {
		var that = this;
		var sleep = false;
		var prefixes = ['', 'ms', 'moz', 'webkit'];
		forEach(prefixes, function(prefix) {
			if (document[prefix + 'hidden'] !== undefined) {
				document.addEventListener(prefix + 'visibilitychange', function() {
					if (document[prefix + 'hidden']) {
						if (!that.paused) {
							that.pause();
							sleep = true;
						}
					} else if (sleep) {
						sleep = false;
						that.play();
					}
				});
				return false;
			}
		});
	},
	_initTimer: function() {
		var frameRate = this.frameRate;

		function setTimeBasedTimer(callback) {
			return setTimeout(callback, 1000 / frameRate);
		}

		function clearTimeBasedTimer(timer) {
			return clearTimeout(timer);
		}

		if (this.frameRate === 60) {
			window.requestAnimationFrame =
				window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				setTimeBasedTimer;
			this.setAnimationInterval = function(callback) {
				return requestAnimationFrame.call(null, callback);
			};
			window.cancelAnimationFrame =
				window.cancelAnimationFrame ||
				window.webkitCancelAnimationFrame ||
				window.webkitCancelRequestAnimationFrame ||
				window.mozCancelAnimationFrame ||
				window.mozCancelRequestAnimationFrame ||
				clearTimeBasedTimer;
			this.clearAnimationInterval = function(timer) {
				cancelAnimationFrame(timer);
			};
		} else {
			this.setAnimationInterval = setTimeBasedTimer;
			this.clearAnimationInterval = clearTimeBasedTimer;
		}
	},
	mainLoop: function() {
		var deltaTime,
			now = +new Date();
		if (this._prevTime) {
			deltaTime = Math.min(1000, now - this._prevTime);
			this.fps = Math.round(1000 / deltaTime);
		} else {
			deltaTime = Math.round(1000 / this.frameRate);
		}
		this.stage.render().tick(deltaTime);
		this._prevTime = now;
	},
	play: function() {
		var that = this;
		this._timer = this.setAnimationInterval(function() {
			that.mainLoop();
			that.play();
		});
		this.paused = false;
	},
	pause: function() {
		this.clearAnimationInterval(this._timer);
		this.paused = true;
		this._prevTime = 0;
	}
});
