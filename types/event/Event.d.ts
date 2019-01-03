export default class Event {
    static ADDED: string;
    static REMOVED: string;
    static ADDED_TO_STAGE: string;
    static REMOVED_FROM_STAGE: string;
    static ENTER_FRAME: string;
    static TICK: string;
    static TICKER_PAUSE: string;
    static TICKER_RESUME: string;
    static PROGRESS: string;
    static COMPLETE: string;
    static LOAD: string;
    static ERROR: string;
    static SOUND_COMPLETE: string;
    type: string;
    constructor(type: string);
}
