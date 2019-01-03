export default class Event {

	public static ADDED: string = 'added';
	public static REMOVED: string = 'removed';
	public static ADDED_TO_STAGE: string = 'addToStage';
	public static REMOVED_FROM_STAGE: string = 'removeFromStage';
	public static ENTER_FRAME: string = 'enterFrame';
	public static TICK: string = 'tick';
	public static TICKER_PAUSE: string = 'tickerPause';
	public static TICKER_RESUME: string = 'tickerResume';
	public static PROGRESS: string = 'progress';
	public static COMPLETE: string = 'complete';
	public static LOAD: string = 'load';
	public static ERROR: string = 'error';
	public static SOUND_COMPLETE: string = 'soundComplete';

	public type: string = null;

	public constructor(type: string) {
		this.type = type;
	}

}