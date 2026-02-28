import * as playable from '../../src/';
import {assert} from 'vitest';

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

	it('.viewportBackground', () => {
		assert.isNull(stage.viewportBackground);
		stage.viewportBackground = 'black';
		assert.strictEqual(stage.viewportBackground, 'black');
	});

	it('.createResourceManager(list: Array<ResourceInfo>, options?: ResourceManagerOption): ResourceManager', () => {
		let rm = stage.createResourceManager([]);
		assert.instanceOf(rm, playable.ResourceManager);
	});

	it('.removeSelf(): this', () => new Promise<void>(resolve => {
		stage.on(playable.Event.ADDED_TO_STAGE, () => {
			assert.strictEqual(stage.viewportCanvas.parentElement, document.body);
			assert.strictEqual(stage.stage, stage);
			stage.removeSelf();
			assert.isNull(stage.viewportCanvas.parentElement);
			assert.strictEqual(stage.activated, false);
			assert.isNull(stage.stage);
			resolve();
		});
	}));

});
