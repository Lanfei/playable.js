import * as playable from '../../src/';
import {assert} from 'vitest';

describe('Input', () => {
	let stage = new playable.Stage();

	afterEach(() => {
		// Emit an `enterFrame` event to render the stage
		stage.emit(playable.Event.ENTER_FRAME);
		stage.removeAllChildren();
	});

	afterAll(() => {
		stage.removeSelf();
	});

	it('.value', () => {
		let input = new playable.Input();
		assert.strictEqual(input.value, '');
		input.value = 'value';
		assert.strictEqual(input.value, 'value');
		input.focus();
		let element = document.querySelector('input');
		element.value = 'input';
		element.dispatchEvent(new Event('input'));
		assert.strictEqual(input.value, 'input');
		element.value = 'keydown';
		element.dispatchEvent(new KeyboardEvent('keydown', {key: 'Enter'}));
		assert.strictEqual(input.value, 'keydown');
	});

	it('.type', () => {
		let input = new playable.Input('type');
		assert.strictEqual(input.type, 'text');
		input.type = 'password';
		assert.strictEqual(input.type, 'password');
	});

	it('.color', () => {
		let input = new playable.Input('color');
		assert.strictEqual(input.color, 'black');
		input.color = 'red';
		assert.strictEqual(input.color, 'red');
	});

	it('.maxLength', () => {
		let input = new playable.Input('maxLength');
		assert.strictEqual(input.maxLength, 0xffffff);
		input.maxLength = 10;
		assert.strictEqual(input.maxLength, 10);
	});

	it('.placeholder', () => {
		let input = new playable.Input('placeholder');
		assert.strictEqual(input.placeholder, '');
		input.placeholder = 'placeholder';
		assert.strictEqual(input.placeholder, 'placeholder');
	});

	it('.placeholderColor', () => {
		let input = new playable.Input('placeholderColor');
		assert.strictEqual(input.placeholderColor, '#888');
		input.placeholderColor = '#aaa';
		assert.strictEqual(input.placeholderColor, '#aaa');
	});

	it('.selectAll()', () => {
		let input = new playable.Input('input');
		input.multiline = true;
		input.selectAll();
		let element = document.querySelector('textarea');
		assert.strictEqual(element.selectionStart, 0);
		assert.strictEqual(element.selectionEnd, input.value.length);
	});

	it('.focus()', () => {
		let input = new playable.Input('input');
		input.focus();
		let element = document.querySelector('input');
		assert.strictEqual(document.activeElement, element);
	});

	it('.blur()', () => {
		let input = new playable.Input('input');
		input.blur();
		let element = document.querySelector('input');
		assert.notStrictEqual(document.activeElement, element);
	});

});
