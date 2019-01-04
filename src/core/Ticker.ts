import Layer from '../display/Layer';
import Stage from '../display/Stage';
import Event from '../event/Event';
import EventEmitter from '../event/EventEmitter';

export default class Ticker extends EventEmitter {

	private $stage: Stage;
	private $paused: boolean;
	private $shouldResume: boolean;
	private $timerIndex: number;
	private $lastTimestamp: number;
	private readonly $timers: Object;
	private readonly $boundTick: () => void;
	private readonly $enterFrameCallbackList: Array<Layer>;

	public constructor(stage: Stage) {
		super();
		this.$stage = stage;
		this.$timerIndex = 0;
		this.$timers = [];
		this.$shouldResume = false;
		this.$boundTick = this.$tick.bind(this);
		this.$enterFrameCallbackList = [stage];
		this.$start();
	}

	public get paused(): boolean {
		return this.$paused;
	}

	private $start(): this {
		window.requestAnimationFrame =
			window['requestAnimationFrame'] ||
			window['webkitRequestAnimationFrame'] ||
			window['mozRequestAnimationFrame'] ||
			window['oRequestAnimationFrame'] ||
			window['msRequestAnimationFrame'] ||
			function (callback) {
				return setTimeout(callback, 1000 / 60);
			};

		let prefixes = ['', 'ms', 'moz', 'webkit'];
		for (let prefix of prefixes) {
			let hidden = prefix ? prefix + 'Hidden' : 'hidden';
			if (document[hidden] === undefined) {
				break;
			}
			document.addEventListener(prefix + 'visibilitychange', () => {
				let paused = this.$paused;
				let hidden = document[prefix + 'hidden'];
				if (hidden && !paused) {
					this.pause();
					this.$shouldResume = true;
				} else if (this.$shouldResume) {
					this.resume();
					this.$shouldResume = false;
				}
			});
		}

		return this.resume();
	}

	public pause(): this {
		this.$paused = true;
		this.emit(Event.TICKER_PAUSE);
		return this;
	}

	public resume(): this {
		this.$paused = false;
		this.$lastTimestamp = Date.now();
		this.emit(Event.TICKER_RESUME);
		requestAnimationFrame(this.$boundTick);
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
		if (this.$paused) {
			return;
		}
		let now = Date.now();
		let deltaTime = now - this.$lastTimestamp;
		let enterFrameCallbackList = this.$enterFrameCallbackList;
		for (let layer of enterFrameCallbackList) {
			layer.emit(Event.ENTER_FRAME, deltaTime);
		}
		this.emit(Event.TICK, deltaTime);
		this.$lastTimestamp = Date.now();
		this.$checkTimers(deltaTime);
		requestAnimationFrame(this.$boundTick);
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