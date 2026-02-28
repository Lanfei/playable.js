import * as playable from '../../src/';
import {assert} from 'vitest';

describe('Vector', () => {

	it('.length', () => {
		let v = playable.Vector.create(3, 4);
		assert.strictEqual(v.length, 5);
	});

	it('.angle', () => {
		let v = playable.Vector.create(-1, 0);
		assert.strictEqual(v.angle, Math.PI);
	});

	it('.set(x: number, y: number): this', () => {
		let v = playable.Vector.create();
		v.set(1, 1);
		assert.strictEqual(v.x, 1);
		assert.strictEqual(v.y, 1);
	});

	it('.add(v: Vector): this', () => {
		let v = playable.Vector.create(1, 1);
		v.add(playable.Vector.create(1, 1));
		assert.strictEqual(v.x, 2);
		assert.strictEqual(v.y, 2);
	});

	it('.add(x: number, y: number): this', () => {
		let v = playable.Vector.create(1, 1);
		v.add(1, 1);
		assert.strictEqual(v.x, 2);
		assert.strictEqual(v.y, 2);
	});

	it('.subtract(v: Vector): this', () => {
		let v = playable.Vector.create(1, 1);
		v.subtract(playable.Vector.create(1, 1));
		assert.strictEqual(v.x, 0);
		assert.strictEqual(v.y, 0);
	});

	it('.subtract(x: number, y: number): this', () => {
		let v = playable.Vector.create(1, 1);
		v.subtract(1, 1);
		assert.strictEqual(v.x, 0);
		assert.strictEqual(v.y, 0);
	});

	it('.dotProduct(v: Vector): number', () => {
		let v = playable.Vector.create(1, 1);
		let value = v.dotProduct(playable.Vector.create(2, 2));
		assert.strictEqual(value, 4);
	});

	it('.dotProduct(x: number, y: number): number', () => {
		let v = playable.Vector.create(1, 1);
		let value = v.dotProduct(2, 2);
		assert.strictEqual(value, 4);
	});

	it('.normalize(): this', () => {
		let v = playable.Vector.create(1, 1);
		v.normalize();
		assert.strictEqual(Math.round(v.length), 1);
	});

	it('.negate(): this', () => {
		let v = playable.Vector.create(1, 1);
		v.negate();
		assert.strictEqual(v.x, -1);
		assert.strictEqual(v.y, -1);
	});

	it('.scale(x: number, y?: number): this', () => {
		let v = playable.Vector.create(1, 1);
		v.scale(2);
		assert.strictEqual(v.x, 2);
		assert.strictEqual(v.y, 2);
		v.scale(2, 3);
		assert.strictEqual(v.x, 4);
		assert.strictEqual(v.y, 6);
	});

	it('.rotate(angle: number): this', () => {
		let v = playable.Vector.create(1, 1);
		v.rotate(Math.PI);
		assert.strictEqual(Math.round(v.x), -1);
		assert.strictEqual(Math.round(v.y), -1);
	});

	it('.transform(m: Matrix): Vector', () => {
		let v = playable.Vector.create(1, 1);
		v.transform(playable.Matrix.create(2, 0, 0, 2, 1, 1));
		assert.strictEqual(v.x, 3);
		assert.strictEqual(v.y, 3);
	});

	it('.distance(v: Vector): number', () => {
		let v = playable.Vector.create(0, 3);
		let distance = v.distance(playable.Vector.create(4, 0));
		assert.strictEqual(distance, 5);
	});

	it('.equal(v: Vector): boolean', () => {
		let v1 = playable.Vector.create(1, 1);
		let v2 = playable.Vector.create(1, 1);
		let v3 = playable.Vector.create(2, 2);
		assert.isTrue(v1.equal(v2));
		assert.isFalse(v1.equal(v3));
	});

	it('.release(): this', () => {
		let v = playable.Vector.create(1, 1);
		v.release();
	});

});
