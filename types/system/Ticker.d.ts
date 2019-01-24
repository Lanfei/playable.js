import { Layer } from '../display/Layer';
import { Stage } from '../display/Stage';
import { EventEmitter } from '../event/EventEmitter';
export declare class Ticker extends EventEmitter {
    protected $fps: number;
    private $stage;
    private $paused;
    private $shouldResume;
    private $timerIndex;
    private $lastTimestamp;
    private $tickHandle;
    private readonly $timers;
    private readonly $boundTick;
    private readonly $enterFrameCallbackList;
    constructor(stage: Stage);
    readonly fps: number;
    readonly paused: boolean;
    private $start;
    pause(): this;
    resume(): this;
    setTimeout(handler: Function, timeout?: number): number;
    clearTimeout(handle: number): void;
    setInterval(handler: Function, timeout: number): number;
    clearInterval(handle: number): void;
    registerEnterFrameCallback(layer: Layer): this;
    unregisterEnterFrameCallback(layer: Layer): this;
    private $tick;
    private $checkTimers;
}
