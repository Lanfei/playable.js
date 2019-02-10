import * as playable from '../../src/';
import {assert} from 'chai';

describe('Stage', () => {
	let stage: playable.Stage;

	beforeEach(() => {
		stage = new playable.Stage();
		stage.emit(playable.Event.ACTIVATE);
	});

	afterEach(() => {
		stage.removeSelf();
		stage = null;
	});

	it('.x', () => {
		assert.strictEqual(stage.x, 0);
		stage.x = 100;
		assert.strictEqual(stage.x, 0);
	});

	it('.y', () => {
		assert.strictEqual(stage.y, 0);
		stage.y = 100;
		assert.strictEqual(stage.y, 0);
	});

	it('.ticker', () => {
		assert.isOk(stage.ticker);
	});

	it('.fps', () => {
		assert.isNumber(stage.fps);
	});

	it('.drawCalls', () => {
		assert.isNumber(stage.drawCalls);
	});

	it('.activated', () => {
		assert.isBoolean(stage.activated);
	});

	it('.scaleMode', () => {
		assert.strictEqual(stage.scaleMode, playable.Stage.SHOW_ALL);
		stage.scaleMode = playable.Stage.NO_SCALE;
		assert.strictEqual(stage.scaleMode, playable.Stage.NO_SCALE);
	});

	it('.viewportWidth', () => {
		assert.strictEqual(stage.viewportWidth, stage.viewportCanvas.width / playable.Layer.pixelRatio);
		stage.viewportWidth = 100;
		assert.strictEqual(stage.viewportWidth, 100);
	});

	it('.viewportHeight', () => {
		assert.strictEqual(stage.viewportHeight, stage.viewportCanvas.height / playable.Layer.pixelRatio);
		stage.viewportHeight = 100;
		assert.strictEqual(stage.viewportHeight, 100);
	});

	it('.viewportBackgroundColor', () => {
		assert.strictEqual(stage.viewportBackgroundColor, null);
		stage.viewportBackgroundColor = 'black';
		assert.strictEqual(stage.viewportBackgroundColor, 'black');
	});

	it('.viewportBackgroundImage', () => {
		let texture = new playable.Texture(stage);
		assert.strictEqual(stage.viewportBackgroundImage, null);
		stage.viewportBackgroundImage = texture;
		assert.strictEqual(stage.viewportBackgroundImage, texture);
	});

	it('.viewportBackgroundFillMode', done => {
		let texture = new playable.Texture(stage);
		texture.url = '/base/test/fixtures/image@1x.jpg';
		texture.on(playable.Event.LOAD, () => {
			assert.strictEqual(stage.viewportBackgroundFillMode, 'scale');
			stage.viewportBackgroundImage = texture;
			stage.viewportBackgroundFillMode = 'repeat';
			assert.strictEqual(stage.viewportBackgroundFillMode, 'repeat');
			done();
		});
	});

	it('.createResourceManager(list: Array<ResourceInfo>, options?: ResourceManagerOption): ResourceManager', () => {
		let rm = stage.createResourceManager([]);
		assert.instanceOf(rm, playable.ResourceManager);
	});

	it('.removeSelf(): this', done => {
		stage.on(playable.Event.ADDED_TO_STAGE, () => {
			assert.strictEqual(stage.viewportCanvas.parentElement, document.body);
			assert.strictEqual(stage.stage, stage);
			stage.removeSelf();
			assert.strictEqual(stage.viewportCanvas.parentElement, null);
			assert.strictEqual(stage.activated, false);
			assert.strictEqual(stage.stage, null);
			done();
		});
	});

});
