import { Image } from './Image';
import { Texture } from '../media/Texture';
import { Rectangle } from '../geom/Rectangle';
export declare class MovieClip extends Image {
    protected $loop: boolean;
    protected $paused: boolean;
    protected $currentFrame: number;
    protected $frames: Array<MovieClipFrameData>;
    protected $interval: number;
    protected $timer: number;
    protected $boundNextFrame: Function;
    constructor(texture: Texture, frames: Array<MovieClipFrameData>);
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
