import * as playable from '../../src/';
import {assert} from 'chai';

describe('Image', () => {
	let stage = new playable.Stage();

	afterEach(() => {
		// Emit an `enterFrame` event to render the stage
		stage.emit(playable.Event.ENTER_FRAME);
		stage.removeAllChildren();
	});

	after(() => {
		stage.removeSelf();
	});

	it('.texture', done => {
		let image = new playable.Image();
		let texture = new playable.Texture(stage);
		texture.url = '/base/test/fixtures/image@1x.jpg';
		assert.isNull(image.texture);
		texture.on(playable.Event.LOAD, () => {
			image.texture = texture;
			stage.addChild(image);
			assert.strictEqual(image.texture, texture);
			image.texture = null;
			assert.isNull(image.texture);
			done();
		});
	});

	it('.texture', done => {
		let image = new playable.Image();
		let texture = new playable.Texture(stage);
		texture.url = '/base/test/fixtures/image@1x.jpg';
		texture.on(playable.Event.LOAD, () => {
			assert.strictEqual(image.fillMode, playable.Image.SCALE);
			image.texture = texture;
			image.width = 100;
			image.height = 100;
			image.fillMode = playable.Image.REPEAT;
			stage.addChild(image);
			assert.strictEqual(image.fillMode, playable.Image.REPEAT);
			done();
		});
	});

	it('.clipRect', () => {
		let texture = new playable.Texture(stage);
		let image = new playable.Image(texture);
		let clipRect = playable.Rectangle.create(10, 10, 10, 10);
		texture.url = '/base/test/fixtures/image@1x.jpg';
		assert.isNull(image.clipRect);
		image.clipRect = clipRect;
		stage.addChild(image);
		assert.strictEqual(image.clipRect, clipRect);
	});

	it('.scale9Grid', () => {
		let texture = new playable.Texture(stage);
		let image = new playable.Image(texture);
		let scale9Grid = playable.Rectangle.create(10, 10, 10, 10);
		texture.url = '/base/test/fixtures/image@1x.jpg';
		assert.isNull(image.scale9Grid);
		image.scale9Grid = scale9Grid;
		stage.addChild(image);
		assert.strictEqual(image.scale9Grid, scale9Grid);
	});

});
