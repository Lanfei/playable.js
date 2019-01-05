export default class Event {
    static readonly ADDED: string;
    static readonly REMOVED: string;
    static readonly ADDED_TO_STAGE: string;
    static readonly REMOVED_FROM_STAGE: string;
    static readonly ENTER_FRAME: string;
    static readonly TICK: string;
    static readonly TICKER_PAUSE: string;
    static readonly TICKER_RESUME: string;
    static readonly PROGRESS: string;
    static readonly COMPLETE: string;
    static readonly LOAD: string;
    static readonly ERROR: string;
    static readonly SOUND_COMPLETE: string;
    type: string;
    constructor(type: string);
}
