import Event from './Event';
import DisplayObject from "../display/DisplayObject";
export default class TouchEvent extends Event {
    static TOUCH_START: string;
    static TOUCH_MOVE: string;
    static TOUCH_END: string;
    static TOUCH_CANCEL: string;
    static TOUCH_TAP: string;
    targetX: number;
    targetY: number;
    localX: number;
    localY: number;
    stageX: number;
    stageY: number;
    identifier: number;
    target: DisplayObject;
    currentTarget: DisplayObject;
    propagationStopped: boolean;
    constructor(type: string);
    protected $init(type: string): this;
    stopPropagation(): void;
    release(): void;
    private static $pool;
    static create(type: string): TouchEvent;
    static recycle(displayObject: TouchEvent): void;
}
