import ImageView from './ImageView';
import Image from '../media/Image';
import Rectangle from '../geom/Rectangle';
export default class MovieClip extends ImageView {
    protected $loop: boolean;
    protected $paused: boolean;
    protected $currentFrame: number;
    protected $frames: Array<MovieClipFrameData>;
    protected $interval: number;
    protected $timer: number;
    protected $boundNextFrame: Function;
    constructor(image: Image, frames: Array<MovieClipFrameData>);
    loop: boolean;
    paused: boolean;
    currentFrame: number;
    readonly totalFrames: number;
    play(): this;
    pause(): this;
    nextFrame(): this;
    gotoAndPlay(frame: number): this;
    gotoAndStop(frame: number): this;
    protected $gotoFrame(frame: number): void;
}
export interface MovieClipFrameData {
    clip: Rectangle;
    interval: number;
    callback: Function;
}
