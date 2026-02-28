import * as playable from '../../src/';
import {assert} from 'vitest';

describe('Texture', () => {
	let stage = new playable.Stage();

	afterAll(() => {
		stage.removeSelf();
	});

	it('.element', () => {
		let texture = new playable.Texture(stage);
		assert.instanceOf(texture.element, HTMLImageElement);
	});

	it('.url', () => {
		let texture = new playable.Texture(stage);
		assert.strictEqual(texture.url, '');
		texture.url = '/test/fixtures/image@1x.jpg';
		assert.isOk(texture.url);
	});

	it('.width', () => new Promise<void>(resolve => {
		let texture = new playable.Texture(stage);
		texture.on(playable.Event.LOAD, () => {
			assert.strictEqual(texture.width, 100);
			resolve();
		});
		texture.url = '/test/fixtures/image@1x.jpg';
	}));

	it('.height', () => new Promise<void>(resolve => {
		let texture = new playable.Texture(stage);
		texture.on(playable.Event.LOAD, () => {
			assert.strictEqual(texture.height, 100);
			resolve();
		});
		texture.url = '/test/fixtures/image@1x.jpg';
	}));

	it('.pixelRatio', () => new Promise<void>(resolve => {
		let texture = new playable.Texture(stage);
		texture.on(playable.Event.LOAD, () => {
			assert.strictEqual(texture.width, 200);
			texture.pixelRatio = 2;
			assert.strictEqual(texture.width, 100);
			resolve();
		});
		texture.url = '/test/fixtures/image@2x.jpg';
	}));

});
