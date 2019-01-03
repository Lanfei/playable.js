import EventEmitter from '../event/EventEmitter';
import Stage from '../display/Stage';
import DisplayObject from '../display/DisplayObject';
export default class Ticker extends EventEmitter {
    private $stage;
    private $paused;
    private $shouldResume;
    private $timerIndex;
    private $lastTimestamp;
    private readonly $timers;
    private readonly $boundTick;
    private readonly $enterFrameCallbackList;
    constructor(stage: Stage);
    readonly paused: boolean;
    private $start;
    pause(): this;
    resume(): this;
    setTimeout(handler: Function, timeout?: number): number;
    clearTimeout(handle: number): void;
    setInterval(handler: Function, timeout: number): number;
    clearInterval(handle: number): void;
    registerEnterFrameCallback(displayObject: DisplayObject): this;
    unregisterEnterFrameCallback(displayObject: DisplayObject): this;
    private $tick;
    private $checkTimers;
}
