import EventEmitter from "../event/EventEmitter";
import DisplayObject from "../display/DisplayObject";
export default class Tween extends EventEmitter {
    loop: boolean;
    protected $target: DisplayObject;
    protected $paused: boolean;
    protected $stepIndex: number;
    protected $stepPosition: number;
    protected $steps: Array<Step>;
    protected $stepProps: Array<Object>;
    protected $shouldSaveProps: boolean;
    protected $boundOnEnterFrame: () => void;
    private constructor();
    readonly paused: boolean;
    set(props: Object): this;
    to(props: Object, duration: number, ease?: Function): this;
    wait(duration: number): this;
    call(callback: Function): this;
    play(): this;
    pause(): this;
    protected $onEnterFrame(dt: number): void;
    protected $saveOriginalProps(stepIndex: number, props: Object): void;
    protected $easeProps(stepIndex: number, props: Object, position: number, duration: number, ease: Function): void;
    protected $setProps(props: Object): void;
    private static $tweens;
    static get(target: DisplayObject, option?: {
        loop?: boolean;
    }): Tween;
    static pauseTweens(target: DisplayObject): void;
    static resumeTweens(target: DisplayObject): void;
    static removeTweens(target: DisplayObject): void;
    static removeAllTweens(): void;
}
interface Step {
    type: string;
    props?: Object;
    duration?: number;
    ease?: Function;
    callback?: Function;
}
export {};
