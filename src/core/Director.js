/**
 * 导演类，负责游戏逻辑流程的管理。
 * @author Lanfei
 * @class Director
 * @extends Class
 * 
 * @constructor
 * @param {go2d.Stage} stage
 * @param {Object} [options] 配置参数
 * @param {Object} [options.frameRate] 默认帧频
 * @todo 导演类是否单例？
 */
var Director = go2d.Director = Class.extend({
	__init: function(stage, options) {
		options = options || {};

		/**
		 * 当前帧频
		 * @readonly
		 * @property fps
		 * @type number
		 */
		this.fps = 0;

		/**
		 * 默认帧频
		 * @property frameRate
		 * @type number
		 * @default 60
		 */
		this.frameRate = options.frameRate || 60;

		/**
		 * 舞台对象
		 * @protected
		 * @property _stage
		 * @type Stage
		 */
		this._stage = stage;

		/**
		 * 是否已暂停
		 * @protected
		 * @property _paused
		 * @type Boolean
		 * @default true
		 */
		this._paused = true;

		/**
		 * 主循环定时器
		 * @protected
		 * @property _timer
		 * @type Object
		 */
		this._timer = null;

		/**
		 * 上一帧时间戳，用于计算帧频
		 * @protected
		 * @property _prevTime
		 * @type number
		 */
		this._prevTime = null;
		this._initEvent();
		this._initTimer();
	},
	_initEvent: function() {
		var that = this;
		var sleep = false;
		var prefixes = ['', 'ms', 'moz', 'webkit'];
		forEach(prefixes, function(prefix) {
			if (document[prefix + 'hidden'] !== undefined) {
				document.addEventListener(prefix + 'visibilitychange', function() {
					if (document[prefix + 'hidden']) {
						if (!that._paused) {
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
	/**
	 * 游戏主循环
	 * @protected
	 * @function _mainLoop
	 */
	_mainLoop: function() {
		var deltaTime,
			now = +new Date();
		if (this._prevTime) {
			deltaTime = now - this._prevTime;
			this.fps = Math.round(1000 / deltaTime);
		} else {
			deltaTime = Math.round(1000 / this.frameRate);
		}
		this._stage.render().tick(deltaTime);
		this._prevTime = now;
	},
	/**
	 * 开始游戏主循环
	 * @function play
	 * @return {this}
	 */
	play: function() {
		var that = this;
		this._timer = this.setAnimationInterval(function() {
			that._mainLoop();
			that.play();
		});
		this._paused = false;
		return this;
	},
	/**
	 * 暂停游戏主循环
	 * @function pause
	 * @return {this}
	 */
	pause: function() {
		this.clearAnimationInterval(this._timer);
		this._paused = true;
		this._prevTime = 0;
		return this;
	}
});
