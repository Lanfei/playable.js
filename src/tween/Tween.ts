import Ease from './Ease';
import Layer from '../display/Layer';
import Event from '../event/Event';
import EventEmitter from '../event/EventEmitter';

export default class Tween extends EventEmitter {

	public loop: boolean = false;

	protected $target: Layer = null;
	protected $paused: boolean = true;
	protected $stepIndex: number = 0;
	protected $stepPosition: number = 0;
	protected $steps: Array<TweenStep> = [];
	protected $stepProps: Array<Object> = [];
	protected $shouldSaveProps: boolean = true;
	protected $boundOnEnterFrame: () => void;

	private constructor(target: Layer, option?: { loop?: boolean }) {
		super();
		this.$target = target;
		this.loop = option ? option.loop : false;
		this.$boundOnEnterFrame = this.$onEnterFrame.bind(this);
	}

	public get paused(): boolean {
		return this.$paused;
	}

	public set(props: Object): this {
		this.$steps.push({
			type: 'set',
			props
		});
		return this;
	}

	public to(props: Object, duration: number, ease?: Function): this {
		this.$steps.push({
			type: 'to',
			duration,
			props,
			ease
		});
		return this;
	}

	public wait(duration: number): this {
		this.$steps.push({
			type: 'wait',
			duration
		});
		return this;
	}

	public call(callback: Function): this {
		this.$steps.push({
			type: 'call',
			callback
		});
		return this;
	}

	public play(): this {
		if (this.$paused) {
			this.$paused = false;
			this.$target.on(Event.ENTER_FRAME, this.$boundOnEnterFrame);
			Tween.$tweens.push(this);
		}
		return this;
	}

	public pause(): this {
		if (!this.$paused) {
			this.$paused = true;
			this.$target.off(Event.ENTER_FRAME, this.$boundOnEnterFrame);
			let index = Tween.$tweens.indexOf(this);
			if (index >= 0) {
				Tween.$tweens.splice(index, 1);
			}
		}
		return this;
	}

	protected $onEnterFrame(dt: number): void {
		let loop = this.loop;
		let steps = this.$steps;
		let stepLength = this.$steps.length;
		let stepIndex = this.$stepIndex;
		let stepPosition = this.$stepPosition + dt;
		let step = steps[stepIndex];
		let type = step.type;
		let duration = step.duration || 0;
		let props = step.props;
		let ease = step.ease || Ease.linear;
		let callback = step.callback;
		if (type === 'set') {
			this.$setProps(props);
		} else if (type === 'to') {
			this.$easeProps(stepIndex, props, stepPosition, duration, ease);
		} else if (type === 'call') {
			callback.call(this.$target);
		}
		if (stepPosition < duration) {
			this.$stepPosition = stepPosition;
		} else if (stepIndex + 1 < stepLength) {
			this.$stepPosition = 0;
			this.$stepIndex = stepIndex + 1;
			this.$shouldSaveProps = true;
			this.$setProps(props);
			this.$onEnterFrame(stepPosition - duration);
		} else if (loop) {
			this.$stepIndex = 0;
			this.$stepPosition = 0;
			this.$shouldSaveProps = true;
			this.$setProps(props);
			this.$onEnterFrame(stepPosition - duration);
		} else {
			this.$stepIndex = 0;
			this.$stepPosition = 0;
			this.$shouldSaveProps = true;
			this.$setProps(props);
			this.pause();
		}
	}

	protected $saveOriginalProps(stepIndex: number, props: Object): void {
		let target = this.$target;
		let stepProps = this.$stepProps;
		let originalProps = stepProps[stepIndex] = stepProps[stepIndex] || {};
		for (let key in props) {
			originalProps[key] = target[key];
		}
		this.$shouldSaveProps = false;
	}

	protected $easeProps(stepIndex: number, props: Object, position: number, duration: number, ease: Function): void {
		if (this.$shouldSaveProps) {
			this.$saveOriginalProps(stepIndex, props);
		}
		let target = this.$target;
		let originalProps = this.$stepProps[stepIndex] || {};
		if (position > duration) {
			position = duration;
		}
		for (let key in props) {
			let originalValue = originalProps[key];
			let offsetValue = props[key] - originalValue;
			target[key] = ease(position, originalValue, offsetValue, duration);
		}
	}

	protected $setProps(props: Object): void {
		let target = this.$target;
		for (let key in props) {
			target[key] = props[key];
		}
	}

	private static $tweens: Array<Tween> = [];

	public static get(target: Layer, option?: { loop?: boolean }): Tween {
		let tween = new Tween(target, option);
		Tween.$tweens.push(tween);
		return tween;
	}

	public static pauseTweens(target: Layer): void {
		let tweens = this.$tweens;
		for (let tween of tweens) {
			if (tween.$target === target) {
				tween.pause();
			}
		}
	}

	public static resumeTweens(target: Layer): void {
		let tweens = this.$tweens;
		for (let tween of tweens) {
			if (tween.$target === target) {
				tween.play();
			}
		}
	}

	public static removeTweens(target: Layer): void {
		let tweens = this.$tweens;
		for (let i = tweens.length - 1; i >= 0; --i) {
			let tween = tweens[i];
			if (tween.$target === target) {
				tween.pause();
			}
		}
	}

	public static removeAllTweens(): void {
		let tweens = this.$tweens;
		for (let i = tweens.length - 1; i >= 0; --i) {
			let tween = tweens[i];
			tween.pause();
		}
	}

}

export interface TweenStep {
	type: string,
	props?: Object,
	duration?: number,
	ease?: Function,
	callback?: Function
}
