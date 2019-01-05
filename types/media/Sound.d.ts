import Media from './Media';
import Ticker from '../core/Ticker';
export default class Sound extends Media {
    protected $loops: number;
    protected $startTime: number;
    protected $paused: boolean;
    protected $element: HTMLAudioElement;
    protected $boundOnTouch: () => void;
    constructor(ticker: Ticker);
    readonly element: HTMLAudioElement;
    url: string;
    volume: number;
    protected $checkOnTouch(): void;
    protected $checkStatus(): void;
    protected $onTouch(): void;
    protected $onEnded(): void;
    protected $onTickerPause(): void;
    protected $onTickerResume(): void;
    play(startTime?: number, loops?: number): this;
    stop(): this;
    protected $onLoad(): void;
}
