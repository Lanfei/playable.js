import Event from './Event';
import Layer from '../display/Layer';
export default class TouchEvent extends Event {
    static TOUCH_START: string;
    static TOUCH_MOVE: string;
    static TOUCH_END: string;
    static TOUCH_CANCEL: string;
    static TOUCH_TAP: string;
    target: Layer;
    currentTarget: Layer;
    targetX: number;
    targetY: number;
    localX: number;
    localY: number;
    stageX: number;
    stageY: number;
    identifier: number;
    propagationStopped: boolean;
    constructor(type: string);
    protected $init(type: string): this;
    stopPropagation(): void;
    release(): void;
    private static $pool;
    static create(type: string): TouchEvent;
    static recycle(e: TouchEvent): void;
}
