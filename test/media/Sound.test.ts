import * as playable from '../../src/';
import {assert} from 'vitest';

describe('Sound', () => {
	let stage = new playable.Stage();

	afterAll(() => {
		stage.removeSelf();
	});

	it('.element', () => {
		let sound = new playable.Sound(stage);
		assert.instanceOf(sound.element, HTMLAudioElement);
	});

	it('.url', () => {
		let sound = new playable.Sound(stage);
		assert.strictEqual(sound.url, '');
		sound.url = '/test/fixtures/sound.mp3';
		assert.isOk(sound.url);
	});

	it('.volume', () => {
		let sound = new playable.Sound(stage);
		assert.strictEqual(sound.volume, 1);
		sound.volume = 0;
		assert.strictEqual(sound.volume, 0);
	});

	it('.paused', () => {
		let sound = new playable.Sound(stage);
		assert.isBoolean(sound.paused);
	});

	it('.play(startTime: number = 0, loops: number = 1): this', () => {
		let sound = new playable.Sound(stage);
		sound.url = '/test/fixtures/sound.mp3';
		assert.strictEqual(sound.paused, true);
		sound.play();
		assert.strictEqual(sound.paused, false);
	});

	it('.stop(): this', () => {
		let sound = new playable.Sound(stage);
		assert.strictEqual(sound.paused, true);
		sound.play();
		assert.strictEqual(sound.paused, false);
		sound.stop();
		assert.strictEqual(sound.paused, true);
	});

});
