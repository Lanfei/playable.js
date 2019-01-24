export class Event {

	public static readonly ADDED: string = 'added';
	public static readonly REMOVED: string = 'removed';
	public static readonly ADDED_TO_STAGE: string = 'addToStage';
	public static readonly REMOVED_FROM_STAGE: string = 'removeFromStage';
	public static readonly ENTER_FRAME: string = 'enterFrame';
	public static readonly TICK: string = 'tick';
	public static readonly TICKER_PAUSE: string = 'tickerPause';
	public static readonly TICKER_RESUME: string = 'tickerResume';
	public static readonly VIEWPORT_RESIZE: string = 'viewportResize';
	public static readonly LOAD: string = 'load';
	public static readonly ERROR: string = 'error';
	public static readonly PROGRESS: string = 'progress';
	public static readonly COMPLETE: string = 'complete';
	public static readonly SOUND_COMPLETE: string = 'soundComplete';

	public type: string = null;

	public constructor(type: string) {
		this.type = type;
	}

}