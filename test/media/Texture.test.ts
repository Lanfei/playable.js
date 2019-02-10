import * as playable from '../../src/';
import {assert} from 'chai';

describe('Texture', () => {
	let stage = new playable.Stage();

	after(() => {
		stage.removeSelf();
	});

	it('.element', () => {
		let texture = new playable.Texture(stage);
		assert.instanceOf(texture.element, HTMLImageElement);
	});

	it('.url', () => {
		let texture = new playable.Texture(stage);
		assert.strictEqual(texture.url, '');
		texture.url = '/base/test/fixtures/image@1x.jpg';
		assert.isOk(texture.url);
	});

	it('.width', done => {
		let texture = new playable.Texture(stage);
		texture.on(playable.Event.LOAD, () => {
			assert.strictEqual(texture.width, 100);
			done();
		});
		texture.url = '/base/test/fixtures/image@1x.jpg';
	});

	it('.height', done => {
		let texture = new playable.Texture(stage);
		texture.on(playable.Event.LOAD, () => {
			assert.strictEqual(texture.height, 100);
			done();
		});
		texture.url = '/base/test/fixtures/image@1x.jpg';
	});

	it('.pixelRatio', done => {
		let texture = new playable.Texture(stage);
		texture.on(playable.Event.LOAD, () => {
			assert.strictEqual(texture.width, 200);
			texture.pixelRatio = 2;
			assert.strictEqual(texture.width, 100);
			done();
		});
		texture.url = '/base/test/fixtures/image@2x.jpg';
	});

});
