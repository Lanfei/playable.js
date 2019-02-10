import { Event } from './Event';
import { Layer } from '../display/Layer';
export declare class TouchEvent extends Event {
    /** @event touchStart */
    static readonly TOUCH_START: string;
    /** @event touchMove */
    static readonly TOUCH_MOVE: string;
    /** @event touchEnd */
    static readonly TOUCH_END: string;
    /** @event touchCancel */
    static readonly TOUCH_CANCEL: string;
    /** @event touchTap */
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
    cancelBubble: boolean;
    protected constructor(type: string);
    protected $init(type: string): this;
    stopPropagation(): void;
    release(): void;
    protected static readonly $pool: Array<TouchEvent>;
    static create(type: string): TouchEvent;
    static recycle(e: TouchEvent): void;
}
