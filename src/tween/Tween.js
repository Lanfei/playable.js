/**
 * Tween
 */
var Tween = go2d.Tween = EventDispatcher.extend({
	__init: function(target, options) {
		options = options || {};
		this._super();
		this._target = target;
		this._steps = [];
		this._loops = options.loops === undefined ? 1 : options.loops;
		this._initEvent();
		this.paused = false;
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
			if (that.paused) {
				return;
			}
			var step = steps[current];
			var props = step.props;
			var duration = step.duration || 0;
			var ease = step.ease || Ease.linear;
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
	wait: function(duration) {
		this._steps.push({
			duration: duration
		});
		return this;
	},
	from: function(props) {
		this._steps.push({
			props: props
		});
		return this;
	},
	to: function(props, duration, ease) {
		this._steps.push({
			props: props,
			duration: duration,
			ease: ease
		});
		return this;
	},
	play: function() {
		this.paused = false;
		this._target.on('step', this._onStep);
		return this;
	},
	pause: function() {
		this.paused = true;
		this._target.off('step', this._onStep);
		return this;
	}
});
