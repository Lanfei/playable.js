/**
 * 导演类，负责游戏逻辑流程的管理。
 * @author Lanfei
 * @class Director
 * @extends EventEmitter
 */
var Director = go2d.Director = EventEmitter.extend({
	__init: function() {
		this._super();

		/**
		 * 当前帧频
		 * @readonly
		 * @property fps
		 * @type number
		 */
		this.fps = 0;

		/**
		 * 舞台对象
		 * @protected
		 * @property _stage
		 * @type Stage
		 */
		this._stage = stage;

		/**
		 * 上一帧时间戳
		 * @protected
		 * @property _lastTime
		 * @type number
		 */
		this._lastTime = null;

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

		this._initTimer();
		this._initEvent();
		this.run();
		Director.instance = this;
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
						that.run();
					}
				});
				return false;
			}
		});
	},
	_initTimer: function() {

		function setTimeBasedTimer(callback) {
			return setTimeout(callback, 1000 / 60);
		}

		function clearTimeBasedTimer(timer) {
			return clearTimeout(timer);
		}

		window.requestAnimationFrame =
			window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			setTimeBasedTimer;
		window.cancelAnimationFrame =
			window.cancelAnimationFrame ||
			window.webkitCancelAnimationFrame ||
			window.webkitCancelRequestAnimationFrame ||
			window.mozCancelAnimationFrame ||
			window.mozCancelRequestAnimationFrame ||
			clearTimeBasedTimer;
	},
	/**
	 * 游戏心跳
	 * @protected
	 * @function _tick
	 */
	_tick: function() {
		var deltaTime,
			now = +new Date();
		if (this._lastTime > 0) {
			deltaTime = now - this._lastTime;
			this.fps = Math.round(1000 / deltaTime);
		} else {
			deltaTime = 1000 / 60;
			this.fps = 60;
		}
		this._lastTime = now;
		this.emit('tick', deltaTime);
	},
	/**
	 * 开始心跳
	 * @function run
	 * @return {this}
	 */
	run: function() {
		var that = this;
		this._timer = requestAnimationFrame(function() {
			that._tick();
			that.run();
		});
		this._paused = false;
		return this;
	},
	/**
	 * 暂停心跳
	 * @function pause
	 * @return {this}
	 */
	pause: function() {
		cancelAnimationFrame(this._timer);
		this._paused = true;
		this._lastTime = 0;
		return this;
	}
}, {
	/**
	 * 暂停心跳
	 * @static
	 * @protected
	 * @property _instance
	 * @type Director
	 */
	_instance: null,
	/**
	 * 暂停心跳
	 * @static
	 * @function getInstance
	 * @return {Director}
	 */
	getInstance: function() {
		if (!Director._instance) {
			Director._instance = new Director();
		}
		return Director._instance;
	}
});