import * as playable from '../../src/';
import {assert} from 'chai';

describe('Layer', () => {
	let stage = new playable.Stage();

	// The ticker won't start when the window is not visible, emit an `activate` event to start ticking.
	stage.emit(playable.Event.ACTIVATE);

	// `requestAnimationFrame` won't invoke callback when the window is not visible, fallback to `setTimeout`.
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

	it('.x', () => {
		let layer = new playable.Layer();
		assert.strictEqual(layer.x, 0);
		layer.x = 100;
		assert.strictEqual(layer.x, 100);
	});

	it('.y', () => {
		let layer = new playable.Layer();
		assert.strictEqual(layer.y, 0);
		layer.y = 100;
		assert.strictEqual(layer.y, 100);
	});

	it('.width', () => {
		let layer = new playable.Layer();
		let child1 = new playable.Layer();
		child1.width = 100;
		layer.addChild(child1);
		assert.strictEqual(layer.width, 100);
		let child2 = new playable.Layer();
		layer.addChild(child2);
		child2.x = -100;
		child2.width = 200;
		assert.strictEqual(layer.width, 100);
		let child3 = new playable.Layer();
		child3.width = 300;
		child3.visible = false;
		layer.addChild(child3);
		assert.strictEqual(layer.width, 100);
		layer.width = 80;
		assert.strictEqual(layer.width, 80);
	});

	it('.height', () => {
		let layer = new playable.Layer();
		let child1 = new playable.Layer();
		child1.height = 100;
		layer.addChild(child1);
		assert.strictEqual(layer.height, 100);
		let child2 = new playable.Layer();
		layer.addChild(child2);
		child2.y = -100;
		child2.height = 200;
		assert.strictEqual(layer.height, 100);
		let child3 = new playable.Layer();
		child3.height = 300;
		child3.visible = false;
		layer.addChild(child3);
		assert.strictEqual(layer.height, 100);
		layer.height = 80;
		assert.strictEqual(layer.height, 80);
	});

	it('.anchorX', () => {
		let layer = new playable.Layer();
		assert.strictEqual(layer.anchorX, 0);
		layer.anchorX = 50;
		assert.strictEqual(layer.anchorX, 50);
	});

	it('.anchorY', () => {
		let layer = new playable.Layer();
		assert.strictEqual(layer.anchorY, 0);
		layer.anchorY = 50;
		assert.strictEqual(layer.anchorY, 50);
	});

	it('.skewX', () => {
		let layer = new playable.Layer();
		assert.strictEqual(layer.skewX, 0);
		layer.skewX = 0.5;
		assert.strictEqual(layer.skewX, 0.5);
	});

	it('.skewY', () => {
		let layer = new playable.Layer();
		assert.strictEqual(layer.skewY, 0);
		layer.skewY = 0.5;
		assert.strictEqual(layer.skewY, 0.5);
	});

	it('.scaleX', () => {
		let layer = new playable.Layer();
		assert.strictEqual(layer.scaleX, 1);
		layer.scaleX = 0.5;
		assert.strictEqual(layer.scaleX, 0.5);
	});

	it('.scaleY', () => {
		let layer = new playable.Layer();
		assert.strictEqual(layer.scaleY, 1);
		layer.scaleY = 0.5;
		assert.strictEqual(layer.scaleY, 0.5);
	});

	it('.rotation', () => {
		let layer = new playable.Layer();
		assert.strictEqual(layer.rotation, 0);
		layer.rotation = 90;
		stage.addChild(layer);
		assert.strictEqual(layer.rotation, 90);
	});

	it('.alpha', () => {
		let layer = new playable.Layer();
		assert.strictEqual(layer.alpha, 1);
		layer.alpha = 0.5;
		stage.addChild(layer);
		assert.strictEqual(layer.alpha, 0.5);
	});

	it('.visible', () => {
		let layer = new playable.Layer();
		assert.strictEqual(layer.visible, true);
		layer.visible = false;
		assert.strictEqual(layer.visible, false);
	});

	it('.smoothing', () => {
		let layer = new playable.Layer();
		assert.strictEqual(layer.smoothing, true);
		layer.smoothing = false;
		assert.strictEqual(layer.smoothing, false);
	});

	it('.backgroundColor', () => {
		let layer = new playable.Layer();
		assert.strictEqual(layer.backgroundColor, null);
		layer.backgroundColor = 'black';
		stage.addChild(layer);
		assert.strictEqual(layer.backgroundColor, 'black');
	});

	it('.backgroundImage', () => {
		let layer = new playable.Layer();
		let texture = new playable.Texture(stage);
		assert.strictEqual(layer.backgroundImage, null);
		layer.backgroundImage = texture;
		stage.addChild(layer);
		assert.strictEqual(layer.backgroundImage, texture);
	});

	it('.backgroundFillMode', done => {
		let layer = new playable.Layer();
		let texture = new playable.Texture(stage);
		texture.url = '/base/test/fixtures/image@1x.jpg';
		texture.on(playable.Event.LOAD, () => {
			assert.strictEqual(layer.backgroundFillMode, 'scale');
			layer.backgroundImage = texture;
			layer.backgroundFillMode = 'repeat';
			stage.addChild(layer);
			assert.strictEqual(layer.backgroundFillMode, 'repeat');
			done();
		});
	});

	it('.resize', () => {
		let layer = new playable.Layer();
		let child1 = new playable.Layer();
		child1.resize(100, 100);
		layer.addChild(child1);
		assert.strictEqual(layer.width, 100);
		assert.strictEqual(layer.height, 100);
		let child2 = new playable.Layer();
		layer.addChild(child2);
		child2.x = -100;
		child2.y = -100;
		child2.resize(200, 200);
		assert.strictEqual(layer.width, 100);
		assert.strictEqual(layer.height, 100);
		let child3 = new playable.Layer();
		child3.resize(300, 300);
		child3.visible = false;
		layer.addChild(child3);
		assert.strictEqual(layer.width, 100);
		assert.strictEqual(layer.height, 100);
		layer.resize(80, 80);
		assert.strictEqual(layer.width, 80);
		assert.strictEqual(layer.height, 80);
	});

	it('.addChild(child: Layer)', () => {
		let layer = new playable.Layer();
		let child = new playable.Layer();
		let parent = new playable.Layer();
		stage.addChild(layer);
		parent.addChild(child);
		assert.include(parent.children, child);
		layer.addChild(child);
		assert.include(layer.children, child);
		assert.notInclude(parent.children, child);
		assert.strictEqual(child.parent, layer);
		assert.strictEqual(child.stage, stage);
	});

	it('.addChildAt(child: Layer, index: number)', () => {
		let layer = new playable.Layer();
		let child = new playable.Layer();
		let parent = new playable.Layer();
		stage.addChild(layer);
		parent.addChild(child);
		assert.include(parent.children, child);
		layer.addChildAt(child, 0);
		assert.strictEqual(layer.children.indexOf(child), 0);
		assert.notInclude(parent.children, child);
		assert.strictEqual(child.parent, layer);
		assert.strictEqual(child.stage, stage);
	});

	it('.replaceChild(oldChild: Layer, newChild: Layer)', () => {
		let layer = new playable.Layer();
		let oldChild = new playable.Layer();
		let newChild = new playable.Layer();
		let parent = new playable.Layer();
		layer.addChild(oldChild);
		parent.addChild(newChild);
		assert.include(parent.children, newChild);
		layer.replaceChild(oldChild, newChild);
		assert.strictEqual(layer.children[0], newChild);
		assert.notInclude(parent.children, newChild);
		assert.strictEqual(newChild.parent, layer);
		assert.strictEqual(oldChild.parent, null);
		assert.strictEqual(oldChild.stage, null);
	});

	it('.getChildByName(name: string)', () => {
		let layer = new playable.Layer();
		let name = 'child';
		let child = new playable.Layer();
		child.name = name;
		layer.addChild(child);
		assert.strictEqual(layer.getChildByName(name), child);
		assert.strictEqual(layer.getChildByName('not-found'), null);
	});

	it('.getChildrenByTag(tag: string)', () => {
		let layer = new playable.Layer();
		let tag = 'tag';
		let child1 = new playable.Layer();
		let child2 = new playable.Layer();
		child1.tag = tag;
		child2.tag = tag;
		layer.addChild(child1);
		layer.addChild(child2);
		let children = layer.getChildrenByTag(tag);
		assert.include(children, child1);
		assert.include(children, child2);
	});

	it('.getChildAt(index: number)', () => {
		let layer = new playable.Layer();
		layer.addChild(new playable.Layer());
		assert.strictEqual(layer.getChildAt(0), layer.children[0]);
		assert.strictEqual(layer.getChildAt(layer.children.length), null);
	});

	it('.getChildIndex(child: Layer)', () => {
		let layer = new playable.Layer();
		let child = new playable.Layer();
		layer.addChild(child);
		let index = layer.getChildIndex(child);
		assert.strictEqual(index, 0);
	});

	it('.hasChild(child: Layer)', () => {
		let layer = new playable.Layer();
		let child = new playable.Layer();
		assert.isFalse(layer.hasChild(child));
		layer.addChild(child);
		assert.isTrue(layer.hasChild(child));
	});

	it('.swapChildren(child1: Layer, child2: Layer)', () => {
		let layer = new playable.Layer();
		let child1 = new playable.Layer();
		let child2 = new playable.Layer();
		layer.addChild(child1);
		layer.addChild(child2);
		layer.swapChildren(child1, child2);
		assert.strictEqual(layer.children[0], child2);
		assert.strictEqual(layer.children[1], child1);
	});

	it('.swapChildrenAt(index1: number, index2: number)', () => {
		let layer = new playable.Layer();
		let child1 = new playable.Layer();
		let child2 = new playable.Layer();
		layer.addChild(child1);
		layer.addChild(child2);
		layer.swapChildrenAt(0, 1);
		assert.strictEqual(layer.children[0], child2);
		assert.strictEqual(layer.children[1], child1);
	});

	it('.setChildIndex(child: Layer, index: number)', () => {
		let layer = new playable.Layer();
		while (layer.children.length < 5) {
			layer.addChild(new playable.Layer());
		}
		let child1 = layer.children[1];
		let beforeChild1 = layer.children[0];
		let targetChild1 = layer.children[2];
		let afterChild1 = layer.children[3];
		layer.setChildIndex(child1, 2);
		assert.strictEqual(layer.children.indexOf(beforeChild1), 0);
		assert.strictEqual(layer.children.indexOf(targetChild1), 1);
		assert.strictEqual(layer.children.indexOf(child1), 2);
		assert.strictEqual(layer.children.indexOf(afterChild1), 3);
		let child2 = layer.children[2];
		let beforeChild2 = layer.children[0];
		let targetChild2 = layer.children[1];
		let afterChild2 = layer.children[3];
		layer.setChildIndex(child2, 1);
		assert.strictEqual(layer.children.indexOf(beforeChild2), 0);
		assert.strictEqual(layer.children.indexOf(targetChild2), 2);
		assert.strictEqual(layer.children.indexOf(child2), 1);
		assert.strictEqual(layer.children.indexOf(afterChild2), 3);
	});

	it('.removeChild(child: Layer)', () => {
		let layer = new playable.Layer();
		let child = new playable.Layer();
		layer.addChild(child);
		assert.include(layer.children, child);
		layer.removeChild(child);
		assert.notInclude(layer.children, child);
		assert.strictEqual(child.parent, null);
		assert.strictEqual(child.stage, null);
	});

	it('.removeChildAt(index: number)', () => {
		let layer = new playable.Layer();
		let child = new playable.Layer();
		layer.addChildAt(child, 0);
		assert.include(layer.children, child);
		layer.removeChildAt(0);
		assert.notInclude(layer.children, child);
		assert.strictEqual(child.parent, null);
		assert.strictEqual(child.stage, null);
	});

	it('.removeChildByName(name: string)', () => {
		let layer = new playable.Layer();
		let child1 = new playable.Layer();
		let child2 = new playable.Layer();
		child1.name = 'name';
		layer.addChild(child1);
		layer.addChild(child2);
		assert.include(layer.children, child1);
		layer.removeChildByName('name');
		assert.include(layer.children, child2);
		assert.notInclude(layer.children, child1);
		assert.strictEqual(child1.parent, null);
		assert.strictEqual(child1.stage, null);
	});

	it('.removeChildrenByTag(tag: string)', () => {
		let layer = new playable.Layer();
		let child1 = new playable.Layer();
		let child2 = new playable.Layer();
		let child3 = new playable.Layer();
		child1.tag = 'tag';
		child2.tag = 'tag';
		layer.addChild(child1);
		layer.addChild(child2);
		layer.addChild(child3);
		layer.removeChildrenByTag('tag');
		assert.include(layer.children, child3);
		assert.notInclude(layer.children, child1);
		assert.notInclude(layer.children, child2);
		assert.strictEqual(child1.parent, null);
		assert.strictEqual(child1.stage, null);
		assert.strictEqual(child2.parent, null);
		assert.strictEqual(child2.stage, null);
	});

	it('.removeAllChildren()', () => {
		let layer = new playable.Layer();
		let child = new playable.Layer();
		layer.addChild(child);
		while (layer.children.length < 5) {
			layer.addChild(new playable.Layer());
		}
		layer.removeAllChildren();
		assert.strictEqual(child.stage, null);
		assert.strictEqual(child.parent, null);
		assert.strictEqual(layer.children.length, 0);
	});

	it('.removeSelf()', () => {
		let layer = new playable.Layer();
		stage.addChild(layer);
		assert.include(stage.children, layer);
		layer.removeSelf();
		assert.notInclude(stage.children, layer);
		assert.strictEqual(layer.parent, null);
		assert.strictEqual(layer.stage, null);
		stage.addChild(layer);
	});

	it('.on(Event.ADDED, listener: (...args: any[]) => void)', () => {
		let counter = 0;
		let layer = new playable.Layer();
		let child = new playable.Layer();
		let eventType = playable.Event.ADDED;
		child.on(eventType, e => {
			++counter;
			assert.strictEqual(e.type, eventType);
			assert.strictEqual(child.parent, layer);
		});
		layer.addChild(child);
		child.on(eventType, e => {
			++counter;
			assert.strictEqual(e.type, eventType);
			assert.strictEqual(child.parent, layer);
		});
		assert.strictEqual(counter, 2);
	});

	it('.on(Event.ADDED_TO_STAGE, listener: (...args: any[]) => void)', () => {
		let counter = 0;
		let layer = new playable.Layer();
		let child1 = new playable.Layer();
		let child2 = new playable.Layer();
		let child3 = new playable.Layer();
		let child4 = new playable.Layer();
		let eventType = playable.Event.ADDED_TO_STAGE;
		stage.addChild(layer);
		child1.addChild(child2);
		child1.on(eventType, e => {
			++counter;
			assert.strictEqual(e.type, eventType);
			assert.strictEqual(child1.stage, stage);
			assert.strictEqual(child1.parent, layer);
		});
		child2.on(eventType, e => {
			++counter;
			assert.strictEqual(e.type, eventType);
			assert.strictEqual(child2.stage, stage);
			assert.strictEqual(child2.parent, child1);
		});
		child4.on(eventType, () => {
			++counter;
			assert.isOk(false);
		});
		layer.addChild(child1);
		child3.addChild(child4);
		child1.on(eventType, e => {
			++counter;
			assert.strictEqual(e.type, eventType);
			assert.strictEqual(child1.stage, stage);
			assert.strictEqual(child1.parent, layer);
		});
		child2.on(eventType, e => {
			++counter;
			assert.strictEqual(e.type, eventType);
			assert.strictEqual(child2.stage, stage);
			assert.strictEqual(child2.parent, child1);
		});
		child4.on(eventType, () => {
			++counter;
			assert.isOk(false);
		});
		assert.strictEqual(counter, 4);
	});

	it('.on(Event.REMOVED, listener: (...args: any[]) => void)', () => {
		let counter = 0;
		let layer = new playable.Layer();
		let child = new playable.Layer();
		let eventType = playable.Event.REMOVED;
		child.on(eventType, e => {
			++counter;
			assert.strictEqual(e.type, eventType);
		});
		layer.addChild(child);
		layer.removeChild(child);
		assert.strictEqual(counter, 1);
	});

	it('.on(Event.REMOVED_FROM_STAGE, listener: (...args: any[]) => void)', () => {
		let counter = 0;
		let layer = new playable.Layer();
		let child1 = new playable.Layer();
		let child2 = new playable.Layer();
		let child3 = new playable.Layer();
		let child4 = new playable.Layer();
		let eventType = playable.Event.REMOVED_FROM_STAGE;
		stage.addChild(layer);
		layer.addChild(child1);
		child1.addChild(child2);
		child1.on(eventType, e => {
			++counter;
			assert.strictEqual(e.type, eventType);
			assert.strictEqual(child1.stage, null);
			assert.strictEqual(child1.parent, null);
		});
		child2.on(eventType, e => {
			++counter;
			assert.strictEqual(e.type, eventType);
			assert.strictEqual(child2.stage, null);
			assert.strictEqual(child2.parent, child1);
		});
		layer.removeChild(child1);
		child3.addChild(child4);
		child3.removeChild(child4);
		child4.on(eventType, () => {
			++counter;
			assert.isOk(false);
		});
		assert.strictEqual(counter, 2);
	});

	it('.on(Event.ENTER_FRAME, listener: (...args: any[]) => void)', done => {
		let deltaTime;
		let layer = new playable.Layer();
		let stage = new playable.Stage();
		let eventType = playable.Event.ENTER_FRAME;
		stage.emit(playable.Event.ACTIVATE);
		layer.on(eventType, e => {
			deltaTime = e.data;
			assert.strictEqual(e.type, eventType);
			layer.off(eventType);
		});
		stage.ticker.on(playable.Event.TICK, e => {
			assert.strictEqual(e.data, deltaTime);
			assert.isAbove(e.data, 0);
			stage.ticker.off(playable.Event.TICK);
			stage.removeSelf();
			done();
		});
		stage.addChild(layer);
	});

	it('.on(Event.TOUCH_TAP, listener: (...args: any[]) => void)', () => {
		let counter = 0;
		let layer = new playable.Layer();
		layer.width = 200;
		layer.height = 200;
		layer.anchorX = 100;
		layer.anchorY = 100;
		layer.rotation = 30;
		layer.backgroundColor = 'rgba(0, 0, 0, .1)';
		let child = new playable.Layer();
		child.x = 50;
		child.y = 50;
		child.anchorX = 50;
		child.anchorY = 50;
		child.width = 100;
		child.height = 100;
		child.rotation = -30;
		child.backgroundColor = 'rgba(0, 0, 0, .1)';
		stage.anchorX = stage.width / 2;
		stage.anchorY = stage.height / 2;
		stage.addChild(layer);
		layer.addChild(child);
		let touchStart = playable.TouchEvent.TOUCH_START;
		let touchMove = playable.TouchEvent.TOUCH_MOVE;
		let touchEnd = playable.TouchEvent.TOUCH_END;
		let touchCancel = playable.TouchEvent.TOUCH_CANCEL;
		let touchTap = playable.TouchEvent.TOUCH_TAP;
		child.on(touchStart, e => {
			++counter;
			assert.strictEqual(e.type, touchStart);
		});
		child.on(touchMove, e => {
			++counter;
			assert.strictEqual(e.type, touchMove);
		});
		child.on(touchEnd, e => {
			++counter;
			assert.strictEqual(e.type, touchEnd);
		});
		child.on(touchTap, e => {
			++counter;
			assert.strictEqual(e.type, touchTap);
		});
		child.on(touchCancel, e => {
			++counter;
			assert.strictEqual(e.type, touchCancel);
		});
		let eventInit = {
			clientX: window.innerWidth / 2,
			clientY: window.innerHeight / 2 + 50
		};
		// touchStart -> touchMove -> touchEnd
		window.dispatchEvent(new MouseEvent('mousedown', eventInit));
		window.dispatchEvent(new MouseEvent('mousemove', eventInit));
		window.dispatchEvent(new MouseEvent('mouseup', eventInit));
		window.dispatchEvent(new MouseEvent('click', eventInit));
		// touchStart -> touchEnd -> touchTap
		window.dispatchEvent(new MouseEvent('mousedown', eventInit));
		window.dispatchEvent(new MouseEvent('mouseup', eventInit));
		window.dispatchEvent(new MouseEvent('click', eventInit));
		// touchStart -> touchCancel
		window.dispatchEvent(new MouseEvent('mousedown', eventInit));
		window.dispatchEvent(new Event('blur'));
		// Outside
		window.dispatchEvent(new MouseEvent('mousedown'));
		// Paused
		stage.ticker.pause();
		window.dispatchEvent(new MouseEvent('mousedown', eventInit));
		assert.strictEqual(counter, 8);
	});

});
