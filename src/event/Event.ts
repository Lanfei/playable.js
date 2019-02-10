import {EventEmitter} from './EventEmitter';

export class Event {

	/** @event added */
	public static readonly ADDED: string = 'added';
	/** @event removed */
	public static readonly REMOVED: string = 'removed';
	/** @event addedToStage */
	public static readonly ADDED_TO_STAGE: string = 'addedToStage';
	/** @event removeFromStage */
	public static readonly REMOVED_FROM_STAGE: string = 'removeFromStage';
	/** @event activate */
	public static readonly ACTIVATE: string = 'activate';
	/** @event deactivate */
	public static readonly DEACTIVATE: string = 'deactivate';
	/** @event enterFrame */
	public static readonly ENTER_FRAME: string = 'enterFrame';
	/** @event tick */
	public static readonly TICK: string = 'tick';
	/** @event tickerPause */
	public static readonly TICKER_PAUSE: string = 'tickerPause';
	/** @event tickerResume */
	public static readonly TICKER_RESUME: string = 'tickerResume';
	/** @event viewportResize */
	public static readonly VIEWPORT_RESIZE: string = 'viewportResize';
	/** @event load */
	public static readonly LOAD: string = 'load';
	/** @event abort */
	public static readonly ABORT: string = 'abort';
	/** @event error */
	public static readonly ERROR: string = 'error';
	/** @event progress */
	public static readonly PROGRESS: string = 'progress';
	/** @event complete */
	public static readonly COMPLETE: string = 'complete';
	/** @event soundComplete */
	public static readonly SOUND_COMPLETE: string = 'soundComplete';

	public type: string = null;
	public data: any = null;
	public target: EventEmitter = null;
	public currentTarget: EventEmitter = null;

	protected constructor(type: string, data: any = null) {
		this.$init(type, data);
	}

	protected $init(type: string, data: any = null): this {
		this.type = type;
		this.data = data;
		return this;
	}

	public release(): void {
		this.type = null;
		this.data = null;
		Event.recycle(this);
	}

	protected static readonly $pool: Array<Event> = [];

	public static create(type: string, data: any = null): Event {
		let pool = this.$pool;
		if (pool.length > 0) {
			return pool.pop().$init(type, data);
		} else {
			return new Event(type, data);
		}
	}

	public static recycle(e: Event) {
		this.$pool.push(e);
	}

}