import * as playable from '../../src/';
import {assert} from 'vitest';

describe('Scroller', () => {
	let stage = new playable.Stage();

	afterEach(() => {
		// Emit an `enterFrame` event to render the stage
		stage.emit(playable.Event.ENTER_FRAME);
		stage.removeAllChildren();
	});

	afterAll(() => {
		stage.removeSelf();
	});

	it('.scrollTop', () => {
		let scroller = new playable.Scroller();
		let child = new playable.Layer();
		child.height = 600;
		scroller.addChild(child);
		stage.addChild(scroller);
		assert.strictEqual(scroller.scrollTop, 0);
		scroller.scrollTop = 300;
		assert.strictEqual(scroller.scrollTop, 300);
		scroller.scrollTop = Infinity;
		assert.strictEqual(scroller.scrollTop, child.height - scroller.height);
		let touchStartEvent = playable.TouchEvent.create(playable.TouchEvent.TOUCH_START);
		scroller.emit(touchStartEvent);
		touchStartEvent.release();
		let touchMoveEvent = playable.TouchEvent.create(playable.TouchEvent.TOUCH_MOVE);
		touchStartEvent.localY = child.height;
		scroller.emit(touchMoveEvent);
		touchMoveEvent.release();
		let touchEndEvent = playable.TouchEvent.create(playable.TouchEvent.TOUCH_END);
		touchStartEvent.localY = child.height;
		scroller.emit(touchEndEvent);
		touchEndEvent.release();
		assert.strictEqual(scroller.scrollTop, 0);
	});

	it('.scrollLeft', () => {
		let scroller = new playable.Scroller();
		let child = new playable.Layer();
		child.width = 600;
		scroller.addChild(child);
		stage.addChild(scroller);
		assert.strictEqual(scroller.scrollLeft, 0);
		scroller.scrollLeft = 300;
		assert.strictEqual(scroller.scrollLeft, 300);
		scroller.scrollLeft = Infinity;
		assert.strictEqual(scroller.scrollLeft, child.width - scroller.width);
		let touchStartEvent = playable.TouchEvent.create(playable.TouchEvent.TOUCH_START);
		scroller.emit(touchStartEvent);
		touchStartEvent.release();
		let touchMoveEvent = playable.TouchEvent.create(playable.TouchEvent.TOUCH_MOVE);
		touchStartEvent.localX = child.width;
		scroller.emit(touchMoveEvent);
		touchMoveEvent.release();
		let touchEndEvent = playable.TouchEvent.create(playable.TouchEvent.TOUCH_END);
		touchStartEvent.localX = child.width;
		scroller.emit(touchEndEvent);
		touchEndEvent.release();
		assert.strictEqual(scroller.scrollLeft, 0);
	});

	it('.scrollWidth', () => {
		let scroller = new playable.Scroller();
		assert.strictEqual(scroller.scrollWidth, 0);
		let child = new playable.Layer();
		child.width = 600;
		scroller.addChild(child);
		stage.addChild(scroller);
		assert.strictEqual(scroller.scrollWidth, child.width);
		child.width = 800;
		assert.strictEqual(scroller.scrollWidth, child.width);
	});

	it('.scrollHeight', () => {
		let scroller = new playable.Scroller();
		assert.strictEqual(scroller.scrollHeight, 0);
		let child = new playable.Layer();
		child.height = 600;
		scroller.addChild(child);
		stage.addChild(scroller);
		assert.strictEqual(scroller.scrollHeight, child.height);
		child.height = 800;
		assert.strictEqual(scroller.scrollHeight, child.height);
	});

});
