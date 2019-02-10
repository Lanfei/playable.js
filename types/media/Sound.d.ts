import { Media } from './Media';
import { Stage } from '../display/Stage';
export declare class Sound extends Media {
    protected $loops: number;
    protected $startTime: number;
    protected $paused: boolean;
    protected readonly $element: HTMLAudioElement;
    protected readonly $boundOnTouch: () => void;
    constructor(stage: Stage);
    readonly element: HTMLAudioElement;
    url: string;
    volume: number;
    readonly paused: boolean;
    play(startTime?: number, loops?: number): this;
    stop(): this;
    protected $checkOnTouch(): void;
    protected $checkStatus(): void;
    protected $onTouch(): void;
    protected $onEnded(): void;
    protected $onTickerPause(): void;
    protected $onTickerResume(): void;
    protected $onRemovedFromStage(): void;
    protected $onLoad(): void;
}
