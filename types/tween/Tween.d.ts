import { Layer } from '../display/Layer';
import { Event } from '../event/Event';
import { EventEmitter } from '../event/EventEmitter';
export declare class Tween extends EventEmitter {
    loop: boolean;
    protected $target: Layer;
    protected $paused: boolean;
    protected $stopped: boolean;
    protected $stepIndex: number;
    protected $stepPosition: number;
    protected $steps: Array<TweenStep>;
    protected $stepProps: Array<Object>;
    protected $shouldSaveProps: boolean;
    protected $boundOnEnterFrame: () => void;
    protected constructor(target: Layer, option?: TweenOption);
    readonly paused: boolean;
    readonly stopped: boolean;
    set(props: Object): this;
    to(props: Object, duration: number, ease?: Function): this;
    wait(duration: number): this;
    call(callback: Function): this;
    play(): this;
    pause(): this;
    resume(): this;
    stop(): this;
    protected $onEnterFrame(e: Event): void;
    protected $nextFrame(dt: number): void;
    protected $saveOriginalProps(stepIndex: number, props: Object): void;
    protected $easeProps(stepIndex: number, props: Object, position: number, duration: number, ease: Function): void;
    protected $setProps(props: Object): void;
    protected static readonly $tweens: Array<Tween>;
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
export interface TweenOption {
    loop?: boolean;
}
