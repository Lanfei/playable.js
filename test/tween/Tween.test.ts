import * as playable from '../../src/';
import {assert} from 'chai';

describe('Tween', () => {
	let stage = new playable.Stage();

	stage.emit(playable.Event.ACTIVATE);

	window.requestAnimationFrame = function (fn) {
		return window.setTimeout(fn, 1000 / 60);
	};

	afterEach(() => {
		// Emit an `enterFrame` event to render the stage
		stage.emit(playable.Event.ENTER_FRAME);
		stage.removeAllChildren();
	});

	after(() => {
		stage.removeSelf();
	});

	it('.paused', () => {
		let layer = new playable.Layer();
		let tween = playable.Tween.get(layer);
		assert.isTrue(tween.paused);
	});

	it('.stopped', () => {
		let layer = new playable.Layer();
		let tween = playable.Tween.get(layer);
		assert.isTrue(tween.stopped);
	});

	it('.set(props: Object): this', done => {
		let layer = new playable.Layer();
		let tween = playable.Tween.get(layer);
		tween.set({x: 10, y: 10}).play();
		stage.addChild(layer);
		stage.ticker.setTimeout(() => {
			assert.strictEqual(layer.x, 10);
			assert.strictEqual(layer.y, 10);
			done();
		}, 500);
	});

	it('.to(props: Object, duration: number, ease?: Function): this', done => {
		let layer = new playable.Layer();
		let tween = playable.Tween.get(layer);
		tween.to({x: 10, y: 10}, 300).play();
		stage.addChild(layer);
		stage.ticker.setTimeout(() => {
			assert.isBelow(layer.x, 10);
			assert.isBelow(layer.y, 10);
			stage.ticker.setTimeout(() => {
				assert.strictEqual(layer.x, 10);
				assert.strictEqual(layer.y, 10);
				done();
			}, 500);
		}, 100);
	});

	it('.wait(duration: number): this', done => {
		let layer = new playable.Layer();
		let tween = playable.Tween.get(layer);
		tween.wait(300).set({x: 10, y: 10}).play();
		stage.addChild(layer);
		stage.ticker.setTimeout(() => {
			assert.strictEqual(layer.x, 0);
			assert.strictEqual(layer.y, 0);
			stage.ticker.setTimeout(() => {
				assert.strictEqual(layer.x, 10);
				assert.strictEqual(layer.y, 10);
				done();
			}, 500);
		}, 100);
	});

	it('.call(callback: Function): this', done => {
		let layer = new playable.Layer();
		let tween = playable.Tween.get(layer);
		tween.call(() => {
			done();
		}).play();
		stage.addChild(layer);
	});

	it('.play(): this', done => {
		let counter = 0;
		let layer = new playable.Layer();
		let tween = playable.Tween.get(layer, {loop: true});
		stage.addChild(layer);
		tween.to({x: 10, y: 10}, 50).call(() => {
			++counter;
			if (counter >= 5) {
				done();
			}
		}).play();
		assert.isFalse(tween.paused);
		assert.isFalse(tween.stopped);
	});

	it('.pause(): this', () => {
		let layer = new playable.Layer();
		let tween = playable.Tween.get(layer);
		tween.play();
		stage.addChild(layer);
		tween.pause();
		assert.isTrue(tween.paused);
		assert.isFalse(tween.stopped);
	});

	it('.resume(): this', () => {
		let layer = new playable.Layer();
		let tween = playable.Tween.get(layer);
		tween.play();
		stage.addChild(layer);
		tween.pause();
		assert.isTrue(tween.paused);
		assert.isFalse(tween.stopped);
		tween.resume();
		assert.isFalse(tween.paused);
		assert.isFalse(tween.stopped);
	});

	it('.resume(): this', () => {
		let layer = new playable.Layer();
		let tween = playable.Tween.get(layer);
		tween.play();
		stage.addChild(layer);
		tween.stop();
		assert.isTrue(tween.paused);
		assert.isTrue(tween.stopped);
	});

	it('#get(target: Layer, option?: { loop?: boolean }): Tween', () => {
		let layer = new playable.Layer();
		let tween = playable.Tween.get(layer);
		assert.instanceOf(tween, playable.Tween);
	});

	it('#pauseTweens(target: Layer): void', () => {
		let layer = new playable.Layer();
		let tween = playable.Tween.get(layer);
		tween.play();
		stage.addChild(layer);
		playable.Tween.pauseTweens(layer);
		assert.isTrue(tween.paused);
		assert.isFalse(tween.stopped);
	});

	it('#resumeTweens(target: Layer): void', () => {
		let layer = new playable.Layer();
		let tween = playable.Tween.get(layer);
		tween.play().pause();
		stage.addChild(layer);
		playable.Tween.resumeTweens(layer);
		assert.isFalse(tween.paused);
		assert.isFalse(tween.stopped);
	});

	it('#removeTweens(target: Layer): void', () => {
		let layer = new playable.Layer();
		let tween = playable.Tween.get(layer);
		tween.play();
		stage.addChild(layer);
		playable.Tween.removeTweens(layer);
		assert.isTrue(tween.paused);
		assert.isTrue(tween.stopped);
	});

	it('#removeAllTweens(): void', () => {
		let layer1 = new playable.Layer();
		let layer2 = new playable.Layer();
		let tween1 = playable.Tween.get(layer1);
		let tween2 = playable.Tween.get(layer2);
		tween1.play();
		tween2.play();
		stage.addChild(layer1);
		stage.addChild(layer2);
		playable.Tween.removeAllTweens();
		assert.isTrue(tween1.paused);
		assert.isTrue(tween1.stopped);
		assert.isTrue(tween2.paused);
		assert.isTrue(tween2.stopped);
	});

});
