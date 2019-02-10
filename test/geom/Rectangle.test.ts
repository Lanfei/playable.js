import * as playable from '../../src/';
import {assert} from 'chai';

describe('Rectangle', () => {

	it('.top', () => {
		let r = playable.Rectangle.create(1, 1, 1, 1);
		assert.strictEqual(r.top, r.y);
		r.top = 2;
		assert.strictEqual(r.y, 2);
	});

	it('.bottom', () => {
		let r = playable.Rectangle.create(1, 1, 1, 1);
		assert.strictEqual(r.bottom, r.y + r.height);
		r.bottom = 3;
		assert.strictEqual(r.height, 2);
	});

	it('.left', () => {
		let r = playable.Rectangle.create(1, 1, 1, 1);
		assert.strictEqual(r.left, r.x);
		r.left = 2;
		assert.strictEqual(r.x, 2);
	});

	it('.right', () => {
		let r = playable.Rectangle.create(1, 1, 1, 1);
		assert.strictEqual(r.right, r.x + r.width);
		r.right = 3;
		assert.strictEqual(r.width, 2);
	});

	it('.topLeft', () => {
		let r = playable.Rectangle.create(1, 1, 1, 1);
		let v = playable.Vector.create(1, 1);
		assert.isTrue(r.topLeft.equal(v));
		r.topLeft = playable.Vector.create(2, 2);
		assert.strictEqual(r.x, 2);
		assert.strictEqual(r.y, 2);
	});

	it('.bottomRight', () => {
		let r = playable.Rectangle.create(1, 1, 1, 1);
		let v = playable.Vector.create(2, 2);
		assert.isTrue(r.bottomRight.equal(v));
		r.bottomRight = playable.Vector.create(3, 3);
		assert.strictEqual(r.width, 2);
		assert.strictEqual(r.height, 2);
	});

	it('.set(x: number, y: number, width: number, height: number): this', () => {
		let r = playable.Rectangle.create();
		r.set(1, 1, 1, 1);
		assert.strictEqual(r.x, 1);
		assert.strictEqual(r.y, 1);
		assert.strictEqual(r.width, 1);
		assert.strictEqual(r.height, 1);
	});

	it('.contains(v: Vector): boolean', () => {
		let r = playable.Rectangle.create(1, 1, 1, 1);
		assert.isTrue(r.contains(playable.Vector.create(1, 1)));
		assert.isTrue(r.contains(playable.Vector.create(1.5, 1.5)));
		assert.isTrue(r.contains(playable.Vector.create(2, 2)));
		assert.isFalse(r.contains(playable.Vector.create(0, 0)));
		assert.isFalse(r.contains(playable.Vector.create(3, 3)));
	});

	it('.contains(x: number, y: number): boolean', () => {
		let r = playable.Rectangle.create(1, 1, 1, 1);
		assert.isTrue(r.contains(1, 1));
		assert.isTrue(r.contains(1.5, 1.5));
		assert.isTrue(r.contains(2, 2));
		assert.isFalse(r.contains(0, 0));
		assert.isFalse(r.contains(3, 3));
	});

	it('.equal(r: Rectangle): boolean', () => {
		let r1 = playable.Rectangle.create(1, 1, 1, 1);
		let r2 = playable.Rectangle.create(1, 1, 1, 1);
		let r3 = playable.Rectangle.create(1, 1, 2, 2);
		assert.isTrue(r1.equal(r2));
		assert.isFalse(r1.equal(r3));
	});

	it('.release(): void', () => {
		let r = playable.Rectangle.create(1, 1, 1, 1);
		r.release();
	});

});
