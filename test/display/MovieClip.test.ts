import * as playable from '../../src/';
import {assert} from 'vitest';

describe('MovieClip', () => {
	let stage = new playable.Stage();
	let texture = new playable.Texture(stage);
	let frameData: playable.MovieClipFrame[] = [
		{clip: playable.Rectangle.create(0, 0, 10, 10)},
		{clip: playable.Rectangle.create(0, 10, 10, 10)}
	];

	// The ticker won't start when the window is not visible, emit an `activate` event to start ticking.
	stage.emit(playable.Event.ACTIVATE);

	texture.url = '/test/fixtures/image@1x.jpg';

	afterEach(() => {
		// Emit an `enterFrame` event to render the stage
		stage.emit(playable.Event.ENTER_FRAME);
		stage.removeAllChildren();
	});

	afterAll(() => {
		stage.removeSelf();
	});

	it('.loop', () => {
		let movieClip = new playable.MovieClip(texture, frameData);
		assert.strictEqual(movieClip.loop, true);
		movieClip.loop = false;
		assert.strictEqual(movieClip.loop, false);
	});

	it('.interval', () => {
		let movieClip = new playable.MovieClip(texture, frameData);
		stage.addChild(movieClip);
		assert.strictEqual(movieClip.interval, 30);
		movieClip.interval = 60;
		assert.strictEqual(movieClip.interval, 60);
	});

	it('.paused', () => {
		let movieClip = new playable.MovieClip(texture, frameData);
		stage.addChild(movieClip);
		assert.strictEqual(movieClip.paused, false);
	});

	it('.currentFrame', () => {
		let movieClip = new playable.MovieClip(texture, frameData);
		stage.addChild(movieClip);
		assert.strictEqual(movieClip.currentFrame, 0);
	});

	it('.totalFrames', () => {
		let movieClip = new playable.MovieClip(texture, frameData);
		stage.addChild(movieClip);
		assert.strictEqual(movieClip.totalFrames, frameData.length);
	});

	it('.play(): this', () => {
		let movieClip = new playable.MovieClip(texture, frameData);
		stage.addChild(movieClip);
		movieClip.play();
		assert.strictEqual(movieClip.paused, false);
	});

	it('.pause(): this', () => {
		let movieClip = new playable.MovieClip(texture, frameData);
		stage.addChild(movieClip);
		movieClip.pause();
		assert.strictEqual(movieClip.paused, true);
	});

	it('.nextFrame(): this', () => new Promise<void>(resolve => {
		let movieClip = new playable.MovieClip(texture, frameData.concat({
			clip: playable.Rectangle.create(0, 20, 10, 10),
			callback: () => {
				assert.strictEqual(movieClip.currentFrame, 2);
				resolve();
			}
		}));
		stage.addChild(movieClip);
		assert.strictEqual(movieClip.currentFrame, 0);
		movieClip.nextFrame();
		assert.strictEqual(movieClip.currentFrame, 1);
	}));

	it('.gotoAndPlay(frame: number): this', () => {
		let movieClip = new playable.MovieClip(texture, frameData);
		stage.addChild(movieClip);
		assert.strictEqual(movieClip.currentFrame, 0);
		movieClip.gotoAndPlay(1);
		assert.strictEqual(movieClip.currentFrame, 1);
		movieClip.gotoAndPlay(2);
		assert.strictEqual(movieClip.currentFrame, 0);
		movieClip.gotoAndPlay(-1);
		assert.strictEqual(movieClip.currentFrame, 1);
		assert.strictEqual(movieClip.paused, false);
	});

	it('.gotoAndStop(frame: number): this', () => {
		let movieClip = new playable.MovieClip(texture, frameData);
		stage.addChild(movieClip);
		assert.strictEqual(movieClip.currentFrame, 0);
		movieClip.gotoAndStop(1);
		assert.strictEqual(movieClip.currentFrame, 1);
		movieClip.gotoAndStop(2);
		assert.strictEqual(movieClip.currentFrame, 0);
		movieClip.gotoAndStop(-1);
		assert.strictEqual(movieClip.currentFrame, 1);
		assert.strictEqual(movieClip.paused, true);
	});

});
