import * as playable from '../../src/';
import {assert} from 'chai';

describe('Matrix', () => {

	it('.set(a: number, b: number, c: number, d: number, tx: number, ty: number): this', () => {
		let m = playable.Matrix.create();
		m.set(3, 1, 1, 3, 1, 1);
		assert.strictEqual(m.a, 3);
		assert.strictEqual(m.b, 1);
		assert.strictEqual(m.c, 1);
		assert.strictEqual(m.d, 3);
		assert.strictEqual(m.tx, 1);
		assert.strictEqual(m.ty, 1);
	});

	it('.identity(): this', () => {
		let m = playable.Matrix.create(3, 1, 1, 3, 1, 1);
		m.identity();
		assert.strictEqual(m.a, 1);
		assert.strictEqual(m.b, 0);
		assert.strictEqual(m.c, 0);
		assert.strictEqual(m.d, 1);
		assert.strictEqual(m.tx, 0);
		assert.strictEqual(m.ty, 0);
	});

	it('.invert(): this', () => {
		let m = playable.Matrix.create(3, 1, 1, 3, 1, 1);
		m.invert();
		assert.strictEqual(m.a, 0.375);
		assert.strictEqual(m.b, -0.125);
		assert.strictEqual(m.c, -0.125);
		assert.strictEqual(m.d, 0.375);
		assert.strictEqual(m.tx, -0.25);
		assert.strictEqual(m.ty, -0.25);
	});

	it('.prepend(m: Matrix): this', () => {
		let m1 = playable.Matrix.create(2, 1, 1, 2, 1, 1);
		let m2 = playable.Matrix.create(3, 1, 1, 3, 1, 1);
		m1.prepend(m2);
		assert.strictEqual(m1.a, 7);
		assert.strictEqual(m1.b, 5);
		assert.strictEqual(m1.c, 5);
		assert.strictEqual(m1.d, 7);
		assert.strictEqual(m1.tx, 4);
		assert.strictEqual(m1.ty, 4);
	});

	it('.prepend(a: number, b: number, c: number, d: number, tx: number, ty: number): this', () => {
		let m1 = playable.Matrix.create(2, 1, 1, 2, 1, 1);
		m1.prepend(3, 1, 1, 3, 1, 1);
		assert.strictEqual(m1.a, 7);
		assert.strictEqual(m1.b, 5);
		assert.strictEqual(m1.c, 5);
		assert.strictEqual(m1.d, 7);
		assert.strictEqual(m1.tx, 4);
		assert.strictEqual(m1.ty, 4);
	});

	it('.append(m: Matrix): this', () => {
		let m1 = playable.Matrix.create(3, 1, 1, 3, 1, 1);
		let m2 = playable.Matrix.create(2, 1, 1, 2, 1, 1);
		m1.append(m2);
		assert.strictEqual(m1.a, 7);
		assert.strictEqual(m1.b, 5);
		assert.strictEqual(m1.c, 5);
		assert.strictEqual(m1.d, 7);
		assert.strictEqual(m1.tx, 4);
		assert.strictEqual(m1.ty, 4);
	});

	it('.append(a: number, b: number, c: number, d: number, tx: number, ty: number): this', () => {
		let m1 = playable.Matrix.create(3, 1, 1, 3, 1, 1);
		m1.append(2, 1, 1, 2, 1, 1);
		assert.strictEqual(m1.a, 7);
		assert.strictEqual(m1.b, 5);
		assert.strictEqual(m1.c, 5);
		assert.strictEqual(m1.d, 7);
		assert.strictEqual(m1.tx, 4);
		assert.strictEqual(m1.ty, 4);
	});

	it('.scale(x: number, y?: number): this', () => {
		let m = playable.Matrix.create();
		m.scale(2);
		assert.strictEqual(m.a, 2);
		assert.strictEqual(m.b, 0);
		assert.strictEqual(m.c, 0);
		assert.strictEqual(m.d, 2);
		assert.strictEqual(m.tx, 0);
		assert.strictEqual(m.ty, 0);
		m.scale(2, 3);
		assert.strictEqual(m.a, 4);
		assert.strictEqual(m.b, 0);
		assert.strictEqual(m.c, 0);
		assert.strictEqual(m.d, 6);
		assert.strictEqual(m.tx, 0);
		assert.strictEqual(m.ty, 0);
	});

	it('.rotate(angle: number): this', () => {
		let m = playable.Matrix.create();
		m.rotate(Math.PI);
		assert.strictEqual(Math.round(m.a), -1);
		assert.strictEqual(Math.round(m.b), 0);
		assert.strictEqual(Math.round(m.c), 0);
		assert.strictEqual(Math.round(m.d), -1);
		assert.strictEqual(Math.round(m.tx), 0);
		assert.strictEqual(Math.round(m.ty), 0);
	});

	it('.skew(skewX: number, skewY: number): this', () => {
		let m = playable.Matrix.create();
		m.skew(Math.PI / 4, Math.PI / 4);
		assert.strictEqual(Math.round(m.a), 1);
		assert.strictEqual(Math.round(m.b), 1);
		assert.strictEqual(Math.round(m.c), 1);
		assert.strictEqual(Math.round(m.d), 1);
		assert.strictEqual(Math.round(m.tx), 0);
		assert.strictEqual(Math.round(m.ty), 0);
	});

	it('.translate(v: Vector): this', () => {
		let m = playable.Matrix.create();
		m.translate(playable.Vector.create(1, 1));
		assert.strictEqual(Math.round(m.a), 1);
		assert.strictEqual(Math.round(m.b), 0);
		assert.strictEqual(Math.round(m.c), 0);
		assert.strictEqual(Math.round(m.d), 1);
		assert.strictEqual(Math.round(m.tx), 1);
		assert.strictEqual(Math.round(m.ty), 1);
	});

	it('.translate(x: number, y: number): this', () => {
		let m = playable.Matrix.create();
		m.translate(1, 1);
		assert.strictEqual(Math.round(m.a), 1);
		assert.strictEqual(Math.round(m.b), 0);
		assert.strictEqual(Math.round(m.c), 0);
		assert.strictEqual(Math.round(m.d), 1);
		assert.strictEqual(Math.round(m.tx), 1);
		assert.strictEqual(Math.round(m.ty), 1);
	});

	it('.equals(m: Matrix): boolean', () => {
		let m1 = playable.Matrix.create();
		let m2 = playable.Matrix.create();
		let m3 = playable.Matrix.create(1, 0, 0, 1, 1, 1);
		assert.isTrue(m1.equal(m2));
		assert.isFalse(m1.equal(m3));
	});

	it('.release(): void', () => {
		let m = playable.Matrix.create();
		m.release();
	});

});
