export class Event {

	/** @event added */
	public static readonly ADDED: string = 'added';
	/** @event removed */
	public static readonly REMOVED: string = 'removed';
	/** @event addedToStage */
	public static readonly ADDED_TO_STAGE: string = 'addedToStage';
	/** @event removeFromStage */
	public static readonly REMOVED_FROM_STAGE: string = 'removeFromStage';
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
	/** @event error */
	public static readonly ERROR: string = 'error';
	/** @event progress */
	public static readonly PROGRESS: string = 'progress';
	/** @event complete */
	public static readonly COMPLETE: string = 'complete';
	/** @event soundComplete */
	public static readonly SOUND_COMPLETE: string = 'soundComplete';

	public type: string = null;

	public constructor(type: string) {
		this.type = type;
	}

}