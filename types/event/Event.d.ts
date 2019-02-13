import { EventEmitter } from './EventEmitter';
export declare class Event {
    /** @event added */
    static readonly ADDED: string;
    /** @event removed */
    static readonly REMOVED: string;
    /** @event addedToStage */
    static readonly ADDED_TO_STAGE: string;
    /** @event removeFromStage */
    static readonly REMOVED_FROM_STAGE: string;
    /** @event activate */
    static readonly ACTIVATE: string;
    /** @event deactivate */
    static readonly DEACTIVATE: string;
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
    /** @event abort */
    static readonly ABORT: string;
    /** @event error */
    static readonly ERROR: string;
    /** @event progress */
    static readonly PROGRESS: string;
    /** @event complete */
    static readonly COMPLETE: string;
    /** @event ended */
    static readonly ENDED: string;
    /** @event soundComplete */
    static readonly SOUND_COMPLETE: string;
    type: string;
    data: any;
    target: EventEmitter;
    currentTarget: EventEmitter;
    protected constructor(type: string, data?: any);
    protected $init(type: string, data?: any): this;
    release(): void;
    protected static readonly $pool: Array<Event>;
    static create(type: string, data?: any): Event;
    static recycle(e: Event): void;
}
