import Layer from '../display/Layer';
import Stage from '../display/Stage';
import Event from '../event/Event';
import EventEmitter from '../event/EventEmitter';

export default class Ticker extends EventEmitter {

	protected $fps: number = 0;

	private $stage: Stage = null;
	private $paused: boolean = false;
	private $shouldResume: boolean = false;
	private $timerIndex: number = 0;
	private $lastTimestamp: number = 0;
	private $tickHandle: number = null;
	private readonly $timers: Object;
	private readonly $boundTick: () => void;
	private readonly $enterFrameCallbackList: Array<Layer>;

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

	public get paused(): boolean {
		return this.$paused;
	}

	private $start(): this {
		let prefixes = ['', 'o', 'ms', 'moz', 'webkit'];

		for (let prefix of prefixes) {
			let requestKey = prefix ? prefix + 'RequestAnimationFrame' : 'requestAnimationFrame';
			let cancelKey = prefix ? prefix + 'CancelAnimationFrame' : 'cancelAnimationFrame';
			let cancelRequestKey = prefix ? prefix + 'CancelRequestAnimationFrame' : 'cancelRequestAnimationFrame';
			window.requestAnimationFrame = window.requestAnimationFrame || window[requestKey];
			window.cancelAnimationFrame = window.cancelAnimationFrame || window[cancelKey];
			window.cancelAnimationFrame = window.cancelAnimationFrame || window[cancelRequestKey];
		}
		if (!window.requestAnimationFrame) {
			window.requestAnimationFrame = function (callback) {
				return window.setTimeout(callback, 1000 / 60);
			};
			window.cancelAnimationFrame = function (handle) {
				window.clearTimeout(handle);
			}
		}

		for (let prefix of prefixes) {
			let hiddenKey = prefix ? prefix + 'Hidden' : 'hidden';
			if (document[hiddenKey] === undefined) {
				break;
			}
			document.addEventListener(prefix + 'visibilitychange', () => {
				let paused = this.$paused;
				let hidden = document[hiddenKey];
				if (hidden && !paused) {
					this.pause();
					this.$shouldResume = true;
				} else if (this.$shouldResume) {
					this.resume();
					this.$shouldResume = false;
				}
			});
		}

		this.$tick();
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

	private $tick(): void {
		let now = Date.now();
		let lastTimestamp = this.$lastTimestamp;
		let deltaTime = lastTimestamp ? now - this.$lastTimestamp : 1000 / 60;
		let enterFrameCallbackList = this.$enterFrameCallbackList;
		for (let layer of enterFrameCallbackList) {
			layer.emit(Event.ENTER_FRAME, deltaTime);
		}
		this.$fps = Math.round(1000 / deltaTime);
		this.emit(Event.TICK, deltaTime);
		this.$checkTimers(deltaTime);
		this.$lastTimestamp = now;
		this.$tickHandle = requestAnimationFrame(this.$boundTick);
	}

	private $checkTimers(dt: number): void {
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