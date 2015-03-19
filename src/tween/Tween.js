/**
 * 缓动动画控制类，负责处理显示对象的缓动动画。
 * @author Lanfei
 * @class Tween
 * @extends Class
 * @todo 缓动时间控制应依据全局还是对象？
 * @todo 代码结构有待整理
 *
 * @constructor
 * @param {Sprite} target 动画应用对象
 * @param {Object} [options] 配置参数
 * @param {Object} [options.loops=1] 循环次数，为 0 时无限循环
 */
var Tween = go2d.Tween = Class.extend({
	__init: function(target, options) {
		options = options || {};

		/**
		 * 动画步骤
		 * @protected
		 * @property _steps
		 * @type {Array}
		 */
		this._steps = [];

		/**
		 * 动画应用对象
		 * @protected
		 * @property _target
		 * @type {Sprite}
		 */
		this._target = target;

		/**
		 * 循环次数，为 0 时无限循环
		 * @protected
		 * @property _loops
		 * @type {number}
		 */
		this._loops = options.loops === undefined ? 1 : options.loops;

		/**
		 * 是否已暂停
		 * @protected
		 * @property _paused
		 * @type {Boolean}
		 */
		this._paused = false;

		/**
		 * 动画步骤数量
		 * @readonly
		 * @property length
		 * @type {number}
		 */
		Object.defineProperty(this, 'length', {
			set: function() {},
			get: function() {
				return this._steps.length;
			}
		});
		this._initEvent();
		this.play();
	},
	_initEvent: function() {
		var that = this,
			target = this._target,
			steps = this._steps,
			loops = this._loops,
			current = 0,
			reversing = false,
			beginProps = {},
			offsetTime = 0,
			prevProps;
		this._onStep = function(deltaTime) {
			if (that._paused) {
				return;
			}
			var step = steps[current],
				props = step.props,
				duration = step.duration || 0,
				ease = step.ease,
				callback = step.callback;

			if (callback) {
				callback();
			} else {
				if (prevProps === undefined) {
					prevProps = {};
					forEach(props, function(value, name) {
						beginProps[name] = beginProps[name] === undefined ? target[name] : beginProps[name];
						prevProps[name] = target[name];
					}, target);
				}

				offsetTime = Math.min(offsetTime + deltaTime, duration);
				forEach(props, function(value, name) {
					if (duration > 0) {
						target[name] = ease(offsetTime, prevProps[name], value - prevProps[name], duration);
					} else {
						target[name] = value;
					}
				});
			}

			if (offsetTime === duration) {
				prevProps = undefined;
				offsetTime = 0;
				if (++current >= steps.length) {
					current = 0;
					if (loops > 0 && --loops === 0) {
						that.pause();
					} else {
						forEach(beginProps, function(value, name) {
							target[name] = value;
						});
					}
				}
			}
		};
	},
	/**
	 * 等待指定时间后进行下一个动画
	 * @function wait
	 * @param {number} duration 毫秒数
	 * @return {this}
	 */
	wait: function(duration) {
		this._steps.push({
			duration: duration
		});
		return this;
	},
	/**
	 * 更新属性值后进行下一个动画
	 * @function from
	 * @param {Object} props 要更新的属性集合
	 * @return {this}
	 */
	from: function(props) {
		this._steps.push({
			props: props
		});
		return this;
	},
	/**
	 * 为指定属性集合设置动画
	 * @function to
	 * @param {Object} props 要动画的属性集合
	 * @param {number} duration 持续毫秒数
	 * @param {function} [ease=linear] 缓动函数
	 * @return {this}
	 */
	to: function(props, duration, ease) {
		this._steps.push({
			props: props,
			duration: duration,
			ease: ease || Ease.linear
		});
		return this;
	},
	/**
	 * 执行回调后进行下一个动画
	 * @function call
	 * @param {function} callback 回调函数
	 * @return {this}
	 */
	call: function(callback) {
		this._steps.push({
			callback: callback
		});
		return this;
	},
	play: function() {
		this._paused = false;
		this._target.on('step', this._onStep);
		return this;
	},
	pause: function() {
		this._paused = true;
		this._target.off('step', this._onStep);
		return this;
	}
});
