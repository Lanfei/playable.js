import {Layer} from '../display/Layer';
import {Stage} from '../display/Stage';
import {Event} from '../event/Event';
import {EventEmitter} from '../event/EventEmitter';

export class Ticker extends EventEmitter {

	protected $stage: Stage = null;
	protected $fps: number = 0;
	protected $deltaTime: number = 0;
	protected $paused: boolean = true;
	protected $shouldResume: boolean = false;
	protected $timerIndex: number = 0;
	protected $lastTimestamp: number = 0;
	protected $tickHandle: number = null;
	protected readonly $timers: Object;
	protected readonly $boundTick: () => void;
	protected readonly $enterFrameCallbackList: Array<Layer>;

	public constructor(stage: Stage) {
		super();
		this.$stage = stage;
		this.$timers = [];
		this.$boundTick = this.$tick.bind(this);
		this.$enterFrameCallbackList = [stage];
		this.$start();
	}

	public get fps(): number {
		return this.$fps;
	}

	public get deltaTime(): number {
		return this.$deltaTime;
	}

	public get paused(): boolean {
		return this.$paused;
	}

	protected $start(): this {
		let stage = this.$stage;
		let prefixes = ['', 'o', 'ms', 'moz', 'webkit'];

		for (let prefix of prefixes) {
			let requestKey = prefix ? prefix + 'RequestAnimationFrame' : 'requestAnimationFrame';
			let cancelKey = prefix ? prefix + 'CancelAnimationFrame' : 'cancelAnimationFrame';
			let cancelRequestKey = prefix ? prefix + 'CancelRequestAnimationFrame' : 'cancelRequestAnimationFrame';
			window.requestAnimationFrame = window.requestAnimationFrame || window[requestKey];
			window.cancelAnimationFrame = window.cancelAnimationFrame || window[cancelKey] || window[cancelRequestKey];
		}
		if (!window.requestAnimationFrame) {
			window.requestAnimationFrame = function (callback) {
				return window.setTimeout(callback, 1000 / 60);
			};
			window.cancelAnimationFrame = function (handle) {
				window.clearTimeout(handle);
			}
		}

		stage.on(Event.ACTIVATE, () => {
			if (this.$shouldResume) {
				this.resume();
				this.$shouldResume = false;
			}
		});
		stage.on(Event.DEACTIVATE, () => {
			if (!this.$paused) {
				this.pause();
				this.$shouldResume = true;
			}
		});

		if (stage.activated) {
			this.$paused = false;
			this.$tick();
		} else {
			this.$shouldResume = true;
		}

		return this;
	}

	public pause(): this {
		if (!this.$paused) {
			this.$paused = true;
			this.$lastTimestamp = 0;
			this.emit(Event.TICKER_PAUSE);
			cancelAnimationFrame(this.$tickHandle);
		}
		return this;
	}

	public resume(): this {
		if (this.$paused) {
			this.$paused = false;
			this.$tick();
			this.emit(Event.TICKER_RESUME);
		}
		return this;
	}

	public setTimeout(handler: Function, timeout: number = 0): number {
		let handle = ++this.$timerIndex;
		this.$timers[handle] = {handler, timeout, resetTime: timeout};
		return handle;
	}

	public clearTimeout(handle: number): void {
		delete this.$timers[handle];
	}

	public setInterval(handler: Function, timeout: number): number {
		let handle = ++this.$timerIndex;
		this.$timers[handle] = {handler, timeout, resetTime: timeout, interval: true};
		return handle;
	}

	public clearInterval(handle: number): void {
		delete this.$timers[handle];
	}

	public registerEnterFrameCallback(layer: Layer): this {
		let list = this.$enterFrameCallbackList;
		if (list.indexOf(layer) < 0) {
			list.push(layer);
		}
		return this;
	}

	public unregisterEnterFrameCallback(layer: Layer): this {
		let list = this.$enterFrameCallbackList;
		let index = list.indexOf(layer);
		if (index >= 0) {
			list.splice(index, 1);
		}
		return this;
	}

	protected $tick(): void {
		let now = Date.now();
		let lastTimestamp = this.$lastTimestamp;
		let deltaTime = lastTimestamp ? now - this.$lastTimestamp : 1000 / 60;
		let enterFrameCallbackList = this.$enterFrameCallbackList;
		this.$fps = Math.round(1000 / deltaTime);
		this.$deltaTime = deltaTime;
		this.$lastTimestamp = now;
		this.$tickHandle = window.requestAnimationFrame(this.$boundTick);
		this.$checkTimers(deltaTime);
		let event = Event.create(Event.ENTER_FRAME, deltaTime);
		for (let layer of enterFrameCallbackList) {
			layer.emit(event);
		}
		event.release();
		let tickEvent = Event.create(Event.TICK, deltaTime);
		this.emit(tickEvent);
		tickEvent.release();
	}

	protected $checkTimers(dt: number): void {
		let timers = this.$timers;
		for (let key in timers) {
			let timer = timers[key];
			let restTime = timer.resetTime = timer.resetTime - dt;
			if (restTime <= 0) {
				timer.handler();
				if (timer.interval) {
					timer.resetTime += timer.timeout;
				} else {
					this.clearTimeout(+key);
				}
			}
		}
	}

}