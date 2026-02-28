import * as playable from '../../src/';
import {assert} from 'vitest';

describe('Ticker', () => {
	let stage = new playable.Stage();
	let ticker = stage.ticker;

	afterAll(() => {
		stage.removeSelf();
	});

	it('.fps', () => {
		assert.isNumber(ticker.fps);
	});

	it('.deltaTime', () => {
		assert.isNumber(ticker.deltaTime);
	});

	it('.paused', () => {
		assert.isBoolean(ticker.paused);
	});

	it('.pause(): this', () => {
		ticker.pause();
		assert.strictEqual(ticker.paused, true);
	});

	it('.resume(): this', () => {
		ticker.resume();
		assert.strictEqual(ticker.paused, false);
	});

	it('.setTimeout(handler: Function, timeout: number = 0): number', () => new Promise<void>(resolve => {
		ticker.setTimeout(() => {
			resolve();
		}, 50);
	}));

	it('.clearTimeout(handle: number): void', () => new Promise<void>(resolve => {
		let handle = ticker.setTimeout(() => {
			assert.notOk(true);
		}, 10);
		ticker.clearTimeout(handle);
		ticker.setTimeout(() => {
			resolve();
		}, 50);
	}));

	it('.setInterval(handler: Function, timeout: number): number', () => new Promise<void>(resolve => {
		let counter = 0;
		ticker.setInterval(() => {
			if (++counter > 5) {
				resolve();
			}
		}, 50);
	}));

	it('.clearInterval(handle: number): void', () => new Promise<void>(resolve => {
		let counter = 0;
		let handle = ticker.setInterval(() => {
			++counter;
			if (counter === 1) {
				ticker.clearInterval(handle);
			} else {
				assert.notOk(true);
			}
		}, 10);
		ticker.setTimeout(() => {
			resolve();
		}, 50);
	}));

	it('.registerEnterFrameCallback(layer: Layer): this', () => new Promise<void>(resolve => {
		let layer = new playable.Layer();
		ticker.registerEnterFrameCallback(layer);
		let eventType = playable.Event.ENTER_FRAME;
		layer.on(eventType, e => {
			assert.strictEqual(e.type, eventType);
			resolve();
		});
	}));

	it('.unregisterEnterFrameCallback(layer: Layer): this', () => new Promise<void>(resolve => {
		let layer = new playable.Layer();
		ticker.registerEnterFrameCallback(layer);
		let eventType = playable.Event.ENTER_FRAME;
		layer.on(eventType, () => {
			assert.notOk(true);
		});
		ticker.unregisterEnterFrameCallback(layer);
		ticker.on(playable.Event.TICK, () => {
			resolve();
		});
	}));

});
