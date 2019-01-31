export declare class Event {
    /** @event added */
    static readonly ADDED: string;
    /** @event removed */
    static readonly REMOVED: string;
    /** @event addedToStage */
    static readonly ADDED_TO_STAGE: string;
    /** @event removeFromStage */
    static readonly REMOVED_FROM_STAGE: string;
    /** @event enterFrame */
    static readonly ENTER_FRAME: string;
    /** @event tick */
    static readonly TICK: string;
    /** @event tickerPause */
    static readonly TICKER_PAUSE: string;
    /** @event tickerResume */
    static readonly TICKER_RESUME: string;
    /** @event viewportResize */
    static readonly VIEWPORT_RESIZE: string;
    /** @event load */
    static readonly LOAD: string;
    /** @event error */
    static readonly ERROR: string;
    /** @event progress */
    static readonly PROGRESS: string;
    /** @event complete */
    static readonly COMPLETE: string;
    /** @event soundComplete */
    static readonly SOUND_COMPLETE: string;
    type: string;
    constructor(type: string);
}
