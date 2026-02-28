import * as playable from '../../src/';
import {assert} from 'vitest';

describe('Text', () => {
	let stage = new playable.Stage();

	afterEach(() => {
		// Emit an `enterFrame` event to render the stage
		stage.emit(playable.Event.ENTER_FRAME);
		stage.removeAllChildren();
	});

	afterAll(() => {
		stage.removeSelf();
	});

	it('.text', () => {
		let text = new playable.Text();
		assert.strictEqual(text.text, '');
		text.text = 'text';
		assert.strictEqual(text.text, 'text');
		stage.addChild(text);
	});

	it('.color', () => {
		let text = new playable.Text('color');
		assert.strictEqual(text.color, 'black');
		text.color = null;
		assert.isNull(text.color);
		stage.addChild(text);
	});

	it('.fontSize', () => {
		let text = new playable.Text('fontSize');
		assert.strictEqual(text.fontSize, playable.Text.defaultFontSize);
		text.fontSize = 12;
		assert.strictEqual(text.fontSize, 12);
		stage.addChild(text);
	});

	it('.fontStyle', () => {
		let text = new playable.Text('fontStyle');
		assert.strictEqual(text.fontStyle, 'normal');
		text.fontStyle = 'italic';
		assert.strictEqual(text.fontStyle, 'italic');
		stage.addChild(text);
	});

	it('.fontWeight', () => {
		let text = new playable.Text('fontWeight');
		assert.strictEqual(text.fontWeight, 'normal');
		text.fontWeight = 'bold';
		assert.strictEqual(text.fontWeight, 'bold');
		stage.addChild(text);
	});

	it('.textAlign', () => {
		let text = new playable.Text('textAlign');
		assert.strictEqual(text.textAlign, 'left');
		text.textAlign = 'center';
		assert.strictEqual(text.textAlign, 'center');
		stage.addChild(text);
	});

	it('.verticalAlign', () => {
		let text = new playable.Text('verticalAlign');
		assert.strictEqual(text.verticalAlign, 'top');
		text.verticalAlign = 'middle';
		assert.strictEqual(text.verticalAlign, 'middle');
		stage.addChild(text);
	});

	it('.lineHeight', () => {
		let text = new playable.Text('lineHeight');
		assert.strictEqual(text.lineHeight, 1.2);
		text.lineHeight = 2;
		assert.strictEqual(text.lineHeight, 2);
		stage.addChild(text);
	});

	it('.strokeSize', () => {
		let text = new playable.Text('strokeSize');
		assert.strictEqual(text.strokeSize, 0);
		text.strokeSize = 1;
		assert.strictEqual(text.strokeSize, 1);
		stage.addChild(text);
	});

	it('.strokeColor', () => {
		let text = new playable.Text('strokeColor');
		assert.isNull(text.strokeColor);
		text.strokeSize = 1;
		text.strokeColor = 'black';
		assert.strictEqual(text.strokeColor, 'black');
		stage.addChild(text);
	});

	it('.fontFamily', () => {
		let text = new playable.Text('fontFamily');
		assert.strictEqual(text.fontFamily, 'Helvetica');
		text.fontFamily = 'Arial';
		assert.strictEqual(text.fontFamily, 'Arial');
		stage.addChild(text);
	});

	it('.multiline', () => {
		let text = new playable.Text('multiline\nnew line');
		assert.strictEqual(text.multiline, false);
		text.width = 50;
		let height = text.height;
		text.multiline = true;
		assert.isAbove(text.height, height);
		assert.strictEqual(text.multiline, true);
		stage.addChild(text);
	});

	it('.breakWord', () => {
		let text = new playable.Text('breakWord');
		assert.strictEqual(text.breakWord, false);
		text.width = 50;
		text.multiline = true;
		text.breakWord = true;
		assert.strictEqual(text.breakWord, true);
		stage.addChild(text);
	});

	it('.autoFitSize', () => {
		let text = new playable.Text('autoFitSize');
		assert.strictEqual(text.autoFitSize, false);
		text.autoFitSize = true;
		assert.strictEqual(text.autoFitSize, true);
		stage.addChild(text);
	});

	it('.minFontSize', () => {
		let text = new playable.Text('minFontSize');
		assert.strictEqual(text.minFontSize, 0);
		text.width = 50;
		text.autoFitSize = true;
		text.minFontSize = 10;
		assert.strictEqual(text.minFontSize, 10);
		stage.addChild(text);
	});

});
