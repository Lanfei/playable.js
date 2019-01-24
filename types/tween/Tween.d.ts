import { Layer } from '../display/Layer';
import { EventEmitter } from '../event/EventEmitter';
export declare class Tween extends EventEmitter {
    loop: boolean;
    protected $target: Layer;
    protected $paused: boolean;
    protected $stepIndex: number;
    protected $stepPosition: number;
    protected $steps: Array<TweenStep>;
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
    private static readonly $tweens;
    static get(target: Layer, option?: {
        loop?: boolean;
    }): Tween;
    static pauseTweens(target: Layer): void;
    static resumeTweens(target: Layer): void;
    static removeTweens(target: Layer): void;
    static removeAllTweens(): void;
}
export interface TweenStep {
    type: string;
    props?: Object;
    duration?: number;
    ease?: Function;
    callback?: Function;
}
