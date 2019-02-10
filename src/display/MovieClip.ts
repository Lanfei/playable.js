import {Image} from './Image';
import {Event} from '../event/Event';
import {Texture} from '../media/Texture';
import {Rectangle} from '../geom/Rectangle';

export class MovieClip extends Image {

	protected $loop: boolean = true;
	protected $interval: number = 30;
	protected $paused: boolean = false;
	protected $currentFrame: number = 0;
	protected $frames: Array<MovieClipFrameData> = null;
	protected $timer: number;
	protected $boundNextFrame: Function;

	public constructor(texture: Texture, frames: Array<MovieClipFrameData>) {
		super(texture);
		this.$frames = frames;
		this.$boundNextFrame = this.nextFrame.bind(this);
		this.play();
	}

	public get loop(): boolean {
		return this.$loop;
	}

	public set loop(loop: boolean) {
		this.$loop = loop;
	}

	public get interval(): number {
		return this.$interval;
	}

	public set interval(interval: number) {
		this.$interval = interval;
	}

	public get paused(): boolean {
		return this.$paused;
	}

	public get currentFrame(): number {
		return this.$currentFrame;
	}

	public get totalFrames(): number {
		return this.$frames.length;
	}

	public play(): this {
		this.off(Event.ADDED_TO_STAGE, this.play);
		return this.gotoAndPlay(this.$currentFrame);
	}

	public pause(): this {
		let ticker = this.ticker;
		this.$paused = true;
		if (ticker) {
			ticker.clearTimeout(this.$timer);
		}
		this.off(Event.ADDED_TO_STAGE, this.play);
		return this;
	}

	public nextFrame(): this {
		return this.gotoAndPlay(this.$currentFrame + 1);
	}

	public gotoAndPlay(frame: number): this {
		this.$paused = false;
		this.$gotoFrame(frame);
		let loop = this.$loop;
		let ticker = this.ticker;
		let frames = this.$frames;
		let totalFrames = frames.length;
		let frameData = frames[this.$currentFrame];
		if (!frameData) {
			return;
		}
		if (ticker) {
			ticker.clearTimeout(this.$timer);
			if (frame < totalFrames - 1 || loop) {
				this.$timer = ticker.setTimeout(this.$boundNextFrame, frameData.interval || this.$interval);
			}
		} else {
			this.on(Event.ADDED_TO_STAGE, this.play);
		}
		return this;
	}

	public gotoAndStop(frame: number): this {
		this.$paused = true;
		this.$gotoFrame(frame);
		return this;
	}

	protected $gotoFrame(frame: number): void {
		let totalFrames = this.$frames.length;
		if (frame < 0 || frame >= totalFrames) {
			frame = (frame + totalFrames) % totalFrames;
		}
		if (frame < 0) {
			frame = 0;
		}
		let frameData = this.$frames[frame];
		if (!frameData) {
			return;
		}
		this.$currentFrame = frame;
		this.clipRect = frameData.clip;
		if (this.stage && frameData.callback) {
			frameData.callback.call(this);
		}
	}

}

export interface MovieClipFrameData {
	clip: Rectangle,
	interval?: number,
	callback?: Function
}
