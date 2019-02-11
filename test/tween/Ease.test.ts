import * as playable from '../../src/';
import {assert} from 'chai';

describe('Ease', () => {

	it('#linear(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.linear;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeInQuad(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeInQuad;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeOutQuad(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeOutQuad;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeInOutQuad(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeInOutQuad;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeInCubic(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeInCubic;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeOutCubic(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeOutCubic;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeInOutCubic(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeInOutCubic;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeInQuart(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeInQuart;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeOutQuart(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeOutQuart;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeInOutQuart(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeInOutQuart;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeInQuint(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeInQuint;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeOutQuint(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeOutQuint;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeInOutQuint(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeInOutQuint;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeInSine(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeInSine;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeOutSine(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeOutSine;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeInOutSine(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeInOutSine;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeInExpo(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeInExpo;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeOutExpo(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeOutExpo;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeInOutExpo(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeInOutExpo;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeInCirc(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeInCirc;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeOutCirc(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeOutCirc;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeInOutCirc(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeInOutCirc;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeInElastic(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeInElastic;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeOutElastic(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeOutElastic;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeInOutElastic(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeInOutElastic;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeInBack(t: number, b: number, c: number, d: number, s: number): number', () => {
		let fn = playable.Ease.easeInBack;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeOutBack(t: number, b: number, c: number, d: number, s: number): number', () => {
		let fn = playable.Ease.easeOutBack;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeInOutBack(t: number, b: number, c: number, d: number, s: number): number', () => {
		let fn = playable.Ease.easeInOutBack;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeInBounce(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeInBounce;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeOutBounce(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeOutBounce;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

	it('#easeInOutBounce(t: number, b: number, c: number, d: number): number', () => {
		let fn = playable.Ease.easeInOutBounce;
		assert.strictEqual(fn(0, 0, 1, 1), 0);
		assert.isNumber(fn(0.05, 0, 1, 1));
		assert.isNumber(fn(0.5, 0, 1, 1));
		assert.isNumber(fn(0.95, 0, 1, 1));
		assert.strictEqual(fn(1, 0, 1, 1), 1);
	});

});
