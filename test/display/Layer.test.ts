import * as playable from '../../src/';
import {assert} from 'vitest';

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

	afterAll(() => {
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

	it('.background', () => {
		let layer = new playable.Layer();
		assert.isNull(layer.background);
		layer.background = 'black';
		stage.addChild(layer);
		assert.strictEqual(layer.background, 'black');
	});

	it('stage', () => {
		let layer = new playable.Layer();
		let child1 = new playable.Layer();
		let child2 = new playable.Layer();
		assert.isNull(layer.stage);
		assert.isNull(child1.stage);
		assert.isNull(child2.stage);
		layer.addChild(child1);
		stage.addChild(layer);
		layer.addChild(child2);
		assert.strictEqual(layer.stage, stage);
		assert.strictEqual(child1.stage, stage);
		assert.strictEqual(child2.stage, stage);
	});

	it('parent', () => {
		let layer = new playable.Layer();
		let child = new playable.Layer();
		assert.isNull(layer.parent);
		assert.isNull(child.parent);
		stage.addChild(layer);
		assert.strictEqual(layer.parent, stage);
		layer.addChild(child);
		assert.strictEqual(child.parent, layer);
	});

	it('numChildren', () => {
		let layer = new playable.Layer();
		let child = new playable.Layer();
		assert.strictEqual(layer.numChildren, 0);
		layer.addChild(child);
		assert.strictEqual(layer.numChildren, 1);
		layer.removeChild(child);
		assert.strictEqual(layer.numChildren, 0);
	});

	it('ticker', () => {
		let layer = new playable.Layer();
		assert.isNull(layer.ticker);
		stage.addChild(layer);
		assert.instanceOf(layer.ticker, playable.Ticker);
	});

	it('canvas', () => {
		let layer = new playable.Layer();
		assert.instanceOf(layer.canvas, HTMLCanvasElement);
	});

	it('.addChild(child: Layer)', () => {
		let layer = new playable.Layer();
		let child = new playable.Layer();
		let parent = new playable.Layer();
		stage.addChild(layer);
		parent.addChild(child);
		assert.isTrue(parent.hasChild(child));
		layer.addChild(child);
		assert.isTrue(layer.hasChild(child));
		assert.isFalse(parent.hasChild(child));
		assert.strictEqual(child.parent, layer);
		assert.strictEqual(child.stage, stage);
	});

	it('.addChildAt(child: Layer, index: number)', () => {
		let layer = new playable.Layer();
		let child = new playable.Layer();
		let parent = new playable.Layer();
		stage.addChild(layer);
		parent.addChild(child);
		assert.isTrue(parent.hasChild(child));
		layer.addChildAt(child, 0);
		assert.strictEqual(layer.getChildIndex(child), 0);
		assert.isFalse(parent.hasChild(child));
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
		assert.isTrue(parent.hasChild(newChild));
		layer.replaceChild(oldChild, newChild);
		assert.strictEqual(layer.getChildAt(0), newChild);
		assert.isFalse(parent.hasChild(newChild));
		assert.strictEqual(newChild.parent, layer);
		assert.isNull(oldChild.parent);
		assert.isNull(oldChild.stage);
	});

	it('.getChildByName(name: string)', () => {
		let layer = new playable.Layer();
		let name = 'child';
		let child = new playable.Layer();
		child.name = name;
		layer.addChild(child);
		assert.strictEqual(layer.getChildByName(name), child);
		assert.isNull(layer.getChildByName('not-found'));
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
		assert.strictEqual(layer.getChildAt(0), layer.getChildAt(0));
		assert.isNull(layer.getChildAt(layer.numChildren));
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
		assert.strictEqual(layer.getChildAt(0), child2);
		assert.strictEqual(layer.getChildAt(1), child1);
	});

	it('.swapChildrenAt(index1: number, index2: number)', () => {
		let layer = new playable.Layer();
		let child1 = new playable.Layer();
		let child2 = new playable.Layer();
		layer.addChild(child1);
		layer.addChild(child2);
		layer.swapChildrenAt(0, 1);
		assert.strictEqual(layer.getChildAt(0), child2);
		assert.strictEqual(layer.getChildAt(1), child1);
	});

	it('.setChildIndex(child: Layer, index: number)', () => {
		let layer = new playable.Layer();
		while (layer.numChildren < 5) {
			layer.addChild(new playable.Layer());
		}
		let child1 = layer.getChildAt(1);
		let beforeChild1 = layer.getChildAt(0);
		let targetChild1 = layer.getChildAt(2);
		let afterChild1 = layer.getChildAt(3);
		layer.setChildIndex(child1, 2);
		assert.strictEqual(layer.getChildIndex(beforeChild1), 0);
		assert.strictEqual(layer.getChildIndex(targetChild1), 1);
		assert.strictEqual(layer.getChildIndex(child1), 2);
		assert.strictEqual(layer.getChildIndex(afterChild1), 3);
		let child2 = layer.getChildAt(2);
		let beforeChild2 = layer.getChildAt(0);
		let targetChild2 = layer.getChildAt(1);
		let afterChild2 = layer.getChildAt(3);
		layer.setChildIndex(child2, 1);
		assert.strictEqual(layer.getChildIndex(beforeChild2), 0);
		assert.strictEqual(layer.getChildIndex(targetChild2), 2);
		assert.strictEqual(layer.getChildIndex(child2), 1);
		assert.strictEqual(layer.getChildIndex(afterChild2), 3);
	});

	it('.removeChild(child: Layer)', () => {
		let layer = new playable.Layer();
		let child = new playable.Layer();
		layer.addChild(child);
		assert.isTrue(layer.hasChild(child));
		layer.removeChild(child);
		assert.isFalse(layer.hasChild(child));
		assert.isNull(child.parent);
		assert.isNull(child.stage);
	});

	it('.removeChildAt(index: number)', () => {
		let layer = new playable.Layer();
		let child = new playable.Layer();
		layer.addChildAt(child, 0);
		assert.isTrue(layer.hasChild(child));
		layer.removeChildAt(0);
		assert.isFalse(layer.hasChild(child));
		assert.isNull(child.parent);
		assert.isNull(child.stage);
	});

	it('.removeChildByName(name: string)', () => {
		let layer = new playable.Layer();
		let child1 = new playable.Layer();
		let child2 = new playable.Layer();
		child1.name = 'name';
		layer.addChild(child1);
		layer.addChild(child2);
		assert.isTrue(layer.hasChild(child1));
		layer.removeChildByName('name');
		assert.isTrue(layer.hasChild(child2));
		assert.isFalse(layer.hasChild(child1));
		assert.isNull(child1.parent);
		assert.isNull(child1.stage);
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
		assert.isTrue(layer.hasChild(child3));
		assert.isFalse(layer.hasChild(child1));
		assert.isFalse(layer.hasChild(child2));
		assert.isNull(child1.parent);
		assert.isNull(child1.stage);
		assert.isNull(child2.parent);
		assert.isNull(child2.stage);
	});

	it('.removeAllChildren()', () => {
		let layer = new playable.Layer();
		let child = new playable.Layer();
		layer.addChild(child);
		while (layer.numChildren < 5) {
			layer.addChild(new playable.Layer());
		}
		layer.removeAllChildren();
		assert.isNull(child.stage);
		assert.isNull(child.parent);
		assert.strictEqual(layer.numChildren, 0);
	});

	it('.removeSelf()', () => {
		let layer = new playable.Layer();
		stage.addChild(layer);
		assert.isTrue(stage.hasChild(layer));
		layer.removeSelf();
		assert.isFalse(stage.hasChild(layer));
		assert.isNull(layer.parent);
		assert.isNull(layer.stage);
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
			assert.isNull(child1.stage);
			assert.isNull(child1.parent);
		});
		child2.on(eventType, e => {
			++counter;
			assert.strictEqual(e.type, eventType);
			assert.isNull(child2.stage);
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

	it('.on(Event.ENTER_FRAME, listener: (...args: any[]) => void)', () => new Promise<void>(resolve => {
		let layer = new playable.Layer();
		let localStage = new playable.Stage();
		let eventType = playable.Event.ENTER_FRAME;
		localStage.emit(playable.Event.ACTIVATE);
		layer.on(eventType, e => {
			let deltaTime = e.data;
			assert.strictEqual(e.type, eventType);
			layer.off(eventType);
			localStage.ticker.on(playable.Event.TICK, e => {
				assert.strictEqual(e.data, deltaTime);
				assert.isAbove(e.data, 0);
				localStage.ticker.off(playable.Event.TICK);
				localStage.removeSelf();
				resolve();
			});
		});
		localStage.addChild(layer);
	}));

	it('.on(Event.TOUCH_TAP, listener: (...args: any[]) => void)', () => {
		let counter = 0;
		let layer = new playable.Layer();
		layer.width = 200;
		layer.height = 200;
		layer.anchorX = 100;
		layer.anchorY = 100;
		layer.rotation = 30;
		layer.background = 'rgba(0, 0, 0, .1)';
		let child = new playable.Layer();
		child.x = 50;
		child.y = 50;
		child.anchorX = 50;
		child.anchorY = 50;
		child.width = 100;
		child.height = 100;
		child.rotation = -30;
		child.background = 'rgba(0, 0, 0, .1)';
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
