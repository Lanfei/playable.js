import { Image } from './Image';
import { Texture } from '../media/Texture';
import { Rectangle } from '../geom/Rectangle';
export declare class MovieClip extends Image {
    protected $loop: boolean;
    protected $interval: number;
    protected $paused: boolean;
    protected $currentFrame: number;
    protected $frames: Array<MovieClipFrame>;
    protected $timer: number;
    protected $boundNextFrame: Function;
    constructor(texture: Texture, frames: Array<MovieClipFrame>);
    get loop(): boolean;
    set loop(loop: boolean);
    get interval(): number;
    set interval(interval: number);
    get paused(): boolean;
    get currentFrame(): number;
    get totalFrames(): number;
    play(): this;
    pause(): this;
    nextFrame(): this;
    gotoAndPlay(frame: number): this;
    gotoAndStop(frame: number): this;
    protected $gotoFrame(frame: number): void;
}
export interface MovieClipFrame {
    clip: Rectangle;
    interval?: number;
    callback?: Function;
}
