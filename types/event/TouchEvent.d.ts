import Event from './Event';
import Layer from '../display/Layer';
export default class TouchEvent extends Event {
    static readonly TOUCH_START: string;
    static readonly TOUCH_MOVE: string;
    static readonly TOUCH_END: string;
    static readonly TOUCH_CANCEL: string;
    static readonly TOUCH_TAP: string;
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
    private static readonly $pool;
    static create(type: string): TouchEvent;
    static recycle(e: TouchEvent): void;
}
