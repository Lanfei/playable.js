import {Stage} from './Stage';
import {Ticker} from '../system/Ticker';
import {Matrix} from '../geom/Matrix';
import {Vector} from '../geom/Vector';
import {Rectangle} from '../geom/Rectangle';
import {Texture, FillMode} from '../media/Texture';
import {Event} from '../event/Event';
import {TouchEvent} from '../event/TouchEvent';
import {EventEmitter} from '../event/EventEmitter';

export class Layer extends EventEmitter {

	public static pixelRatio: number = typeof window === 'undefined' ? 1 : window.devicePixelRatio || 1;

	public name: string = '';
	public tag: string = '';
	public touchable: boolean = true;

	protected $x: number = 0;
	protected $y: number = 0;
	protected $width: number = 0;
	protected $height: number = 0;
	protected $anchorX: number = 0;
	protected $anchorY: number = 0;
	protected $skewX: number = 0;
	protected $skewY: number = 0;
	protected $scaleX: number = 1;
	protected $scaleY: number = 1;
	protected $rotation: number = 0;
	protected $alpha: number = 1;
	protected $visible: boolean = true;
	protected $smoothing: boolean = true;
	protected $backgroundColor: string = null;
	protected $backgroundImage: Texture = null;
	protected $backgroundPattern: CanvasPattern = null;
	protected $backgroundFillMode: FillMode = Texture.SCALE;
	protected $dirty: boolean = true;
	protected $stage: Stage = null;
	protected $parent: Layer = null;
	protected $children: Array<Layer> = [];
	protected $shouldEmitTap: boolean = true;
	protected $touches: Array<boolean> = [];
	protected readonly $canvas: HTMLCanvasElement;
	protected readonly $context: CanvasRenderingContext2D;

	public constructor() {
		super();
		this.$canvas = document.createElement('canvas');
		this.$context = this.$canvas.getContext('2d');
	}

	public get x(): number {
		return this.$x;
	}

	public set x(x: number) {
		if (this.$x !== x) {
			this.$x = x;
			this.$markParentDirty();
		}
	}

	public get y(): number {
		return this.$y;
	}

	public set y(y: number) {
		if (this.$y !== y) {
			this.$y = y;
			this.$markParentDirty();
		}
	}

	public get width(): number {
		return this.$width ? this.$width : this.$canvas.width / Layer.pixelRatio;
	}

	public set width(width: number) {
		if (this.$width !== width) {
			this.$width = width;
			this.$resizeCanvas();
		}
	}

	public get height(): number {
		return this.$height ? this.$height : this.$canvas.height / Layer.pixelRatio;
	}

	public set height(height: number) {
		if (this.$height !== height) {
			this.$height = height;
			this.$resizeCanvas();
		}
	}

	public get anchorX(): number {
		return this.$anchorX;
	}

	public set anchorX(anchorX: number) {
		if (this.$anchorX !== anchorX) {
			this.$anchorX = anchorX;
			this.$resizeCanvas();
		}
	}

	public get anchorY(): number {
		return this.$anchorY;
	}

	public set anchorY(anchorY: number) {
		if (this.$anchorY !== anchorY) {
			this.$anchorY = anchorY;
			this.$resizeCanvas();
		}
	}

	public get skewX(): number {
		return this.$skewX;
	}

	public set skewX(skewX: number) {
		if (this.$skewX !== skewX) {
			this.$skewX = skewX;
			this.$markParentDirty();
		}
	}

	public get skewY(): number {
		return this.$skewY;
	}

	public set skewY(skewY: number) {
		if (this.$skewY !== skewY) {
			this.$skewY = skewY;
			this.$markParentDirty();
		}
	}

	public get scaleX(): number {
		return this.$scaleX;
	}

	public set scaleX(scaleX: number) {
		if (this.$scaleX !== scaleX) {
			this.$scaleX = scaleX;
			this.$markParentDirty();
		}
	}

	public get scaleY(): number {
		return this.$scaleY;
	}

	public set scaleY(scaleY: number) {
		if (this.$scaleY !== scaleY) {
			this.$scaleY = scaleY;
			this.$markParentDirty();
		}
	}

	public get rotation(): number {
		return this.$rotation;
	}

	public set rotation(rotation: number) {
		if (this.$rotation !== rotation) {
			this.$rotation = rotation;
			this.$markParentDirty();
		}
	}

	public get alpha(): number {
		return this.$alpha;
	}

	public set alpha(alpha: number) {
		if (this.$alpha !== alpha) {
			this.$alpha = alpha;
			this.$markParentDirty();
		}
	}

	public get visible(): boolean {
		return this.$visible;
	}

	public set visible(visible: boolean) {
		if (this.$visible !== visible) {
			this.$visible = visible;
			this.$markParentDirty();
		}
	}

	public get smoothing(): boolean {
		return this.$smoothing;
	}

	public set smoothing(smoothing: boolean) {
		this.$smoothing = smoothing;
		this.$resizeCanvas();
	}

	public get backgroundColor(): string {
		return this.$backgroundColor;
	}

	public set backgroundColor(backgroundColor: string) {
		if (this.$backgroundColor !== backgroundColor) {
			this.$backgroundColor = backgroundColor;
			this.$markDirty();
		}
	}

	public get backgroundImage(): Texture {
		return this.$backgroundImage;
	}

	public set backgroundImage(backgroundImage: Texture) {
		if (this.$backgroundImage !== backgroundImage) {
			this.$backgroundImage = backgroundImage;
			this.$backgroundPattern = this.$getPattern(this.$backgroundImage, this.$backgroundFillMode);
			this.$markDirty();
		}
	}

	public get backgroundFillMode(): FillMode {
		return this.$backgroundFillMode;
	}

	public set backgroundFillMode(backgroundFillMode: FillMode) {
		if (backgroundFillMode && this.$backgroundFillMode !== backgroundFillMode) {
			this.$backgroundFillMode = backgroundFillMode;
			this.$backgroundPattern = this.$getPattern(this.$backgroundImage, this.$backgroundFillMode);
			this.$markDirty();
		}
	}

	public get dirty(): boolean {
		return this.$dirty;
	}

	public get stage(): Stage {
		return this.$stage;
	}

	public get parent(): Layer {
		return this.$parent;
	}

	public get children(): Array<Layer> {
		return this.$children;
	}

	public get ticker(): Ticker {
		return this.$stage ? this.$stage.ticker : null;
	}

	public get canvas(): HTMLCanvasElement {
		return this.$canvas;
	}

	public resize(width: number, height: number): this {
		this.$width = width;
		this.height = height;
		return this;
	}

	public addChild(child: Layer): this {
		return this.addChildAt(child, this.$children.length);
	}

	public addChildAt(child: Layer, index: number): this {
		if (child.$parent) {
			child.$parent.removeChild(child);
		}
		child.$emitAdded(this);
		this.$children.splice(index, 0, child);
		this.$resizeCanvas();
		return this;
	}

	public replaceChild(oldChild: Layer, newChild: Layer): this {
		let index = this.getChildIndex(oldChild);
		this.removeChildAt(index);
		this.addChildAt(newChild, index);
		return this;
	}

	public getChildByName(name: string): Layer {
		let children = this.$children;
		for (let child of children) {
			if (child.name === name) {
				return child;
			}
		}
		return null;
	}

	public getChildrenByTag(tag: string): Array<Layer> {
		let result = [];
		let children = this.$children;
		for (let child of children) {
			if (child.tag === tag) {
				result.push(child);
			}
		}
		return result;
	}

	public getChildAt(index: number): Layer {
		return this.$children[index] || null;
	}

	public getChildIndex(child: Layer): number {
		return this.$children.indexOf(child);
	}

	public hasChild(child: Layer): boolean {
		return this.getChildIndex(child) >= 0;
	}

	public swapChildren(child1: Layer, child2: Layer): this {
		let index1 = this.getChildIndex(child1);
		let index2 = this.getChildIndex(child2);
		if (index1 >= 0 && index2 >= 0) {
			this.swapChildrenAt(index1, index2);
		}
		return this;
	}

	public swapChildrenAt(index1: number, index2: number): this {
		if (index1 !== index2) {
			let child1 = this.$children[index1];
			let child2 = this.$children[index2];
			if (child1 && child2) {
				this.$children[index1] = child2;
				this.$children[index2] = child1;
				this.$markDirty();
			}
		}
		return this;
	}

	public setChildIndex(child: Layer, index: number): this {
		let children = this.$children;
		let oldIndex = this.getChildIndex(child);
		if (oldIndex >= 0 && index > oldIndex) {
			for (let i = oldIndex + 1; i <= index; ++i) {
				children[i - 1] = children[i];
			}
			children[index] = child;
			this.$markDirty();
		} else if (oldIndex >= 0 && index < oldIndex) {
			for (let i = oldIndex - 1; i >= index; --i) {
				children[i + 1] = children[i];
			}
			children[index] = child;
			this.$markDirty();
		}
		return this;
	}

	public removeChild(child: Layer): this {
		let index = this.$children.indexOf(child);
		return this.removeChildAt(index);
	}

	public removeChildAt(index: number): this {
		if (index >= 0) {
			let child = this.$children.splice(index, 1)[0];
			child.$emitRemoved();
			this.$resizeCanvas();
		}
		return this;
	}

	public removeChildByName(name: string): this {
		let children = this.$children;
		for (let i = 0, l = children.length; i < l; ++i) {
			let child = children[i];
			if (child.name === name) {
				this.removeChildAt(i);
				break;
			}
		}
		return this;
	}

	public removeChildrenByTag(tag: string): this {
		let children = this.$children;
		for (let i = children.length - 1; i >= 0; --i) {
			let child = children[i];
			if (child.tag === tag) {
				this.removeChildAt(i);
			}
		}
		return this;
	}

	public removeAllChildren(): this {
		let children = this.$children;
		for (let child of children) {
			child.$emitRemoved();
		}
		this.$children.length = 0;
		this.$resizeCanvas();
		return this;
	}

	public removeSelf(): this {
		if (this.$parent) {
			this.$parent.removeChild(this);
		}
		return this;
	}

	protected $markDirty(sizeDirty?: boolean): void {
		if (sizeDirty) {
			this.$resizeParentCanvas();
		} else if (!this.$dirty) {
			this.$markParentDirty();
		}
		this.$dirty = true;
	}

	protected $markParentDirty(): void {
		if (this.$parent) {
			this.$parent.$markDirty();
		}
	}

	protected $resizeCanvas(): void {
		let width = this.$width;
		let height = this.$height;
		let canvas = this.$canvas;
		let anchorX = this.$anchorX;
		let anchorY = this.$anchorY;
		let context = this.$context;
		let smoothing = this.$smoothing;
		let pixelRatio = Layer.pixelRatio;
		if (width && height) {
			canvas.width = width * pixelRatio;
			canvas.height = height * pixelRatio;
		} else {
			let bounds = this.$getContentBounds();
			canvas.width = (width || bounds.right + anchorX) * pixelRatio;
			canvas.height = (height || bounds.bottom + anchorY) * pixelRatio;
			bounds.release();
		}
		if (context.imageSmoothingEnabled !== smoothing) {
			context.imageSmoothingEnabled = smoothing;
		}
		this.$markDirty(true);
	}

	protected $resizeParentCanvas(): void {
		if (this.$parent) {
			this.$parent.$resizeCanvas();
		}
	}

	protected $getTransform(): Matrix {
		let matrix = Matrix.create();
		matrix.translate(-this.$anchorX, -this.$anchorY);
		matrix.rotate(this.rotation * Math.PI / 180).scale(this.scaleX, this.scaleY).skew(this.skewX, this.skewY);
		matrix.translate(this.x, this.y);
		return matrix;
	}

	protected $getChildTransform(child: Layer): Matrix {
		return child.$getTransform();
	}

	protected $getChildBounds(child: Layer): Rectangle {
		let width = child.width;
		let height = child.height;
		let bounds = Rectangle.create();
		let matrix = this.$getChildTransform(child);
		let topLeft = Vector.create(0, 0).transform(matrix);
		let topRight = Vector.create(width, 0).transform(matrix);
		let bottomLeft = Vector.create(0, height).transform(matrix);
		let bottomRight = Vector.create(width, height).transform(matrix);
		let minX = Math.min(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
		let maxX = Math.max(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
		let minY = Math.min(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
		let maxY = Math.max(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
		bounds.top = minY;
		bounds.bottom = maxY;
		bounds.left = minX;
		bounds.right = maxX;
		matrix.release();
		topLeft.release();
		topRight.release();
		bottomLeft.release();
		bottomRight.release();
		return bounds;
	}

	protected $getContentBounds(): Rectangle {
		let bounds;
		let children = this.$children;
		for (let child of children) {
			if (child.$visible) {
				let childBounds = this.$getChildBounds(child);
				if (bounds) {
					bounds.top = Math.min(bounds.top, childBounds.top);
					bounds.bottom = Math.max(bounds.bottom, childBounds.bottom);
					bounds.left = Math.min(bounds.left, childBounds.left);
					bounds.right = Math.max(bounds.right, childBounds.right);
					childBounds.release();
				} else {
					bounds = childBounds;
				}
			}
		}
		bounds = bounds || Rectangle.create();
		return bounds;
	}

	protected $emitTouchEvent(event: TouchEvent, inside: boolean): boolean {
		let type = event.type;
		let localX = event.localX;
		let localY = event.localY;
		let touches = this.$touches;
		let identifier = event.identifier;
		if (type === TouchEvent.TOUCH_START) {
			this.$shouldEmitTap = true;
			touches[identifier] = true;
		} else if (!touches[identifier]) {
			return false;
		} else if (type === TouchEvent.TOUCH_TAP || type === TouchEvent.TOUCH_CANCEL) {
			touches[identifier] = false;
		}
		if (type === TouchEvent.TOUCH_MOVE) {
			this.$shouldEmitTap = false;
		}
		let children = this.$children;
		for (let i = children.length - 1; i >= 0; --i) {
			let child = children[i];
			if (!child.$visible || !child.touchable) {
				continue;
			}
			let matrix = this.$getChildTransform(child);
			let localPos = Vector.create(localX, localY).transform(matrix.invert()).subtract(child.$anchorX, child.$anchorY);
			let inside = child.$localHitTest(localPos);
			localPos.release();
			matrix.release();
			if (inside || type !== TouchEvent.TOUCH_START) {
				event.target = child;
				event.localX = event.targetX = localPos.x;
				event.localY = event.targetY = localPos.y;
				if (child.$emitTouchEvent(event, inside)) {
					break;
				}
			}
		}
		if (type === TouchEvent.TOUCH_TAP && (!inside || !this.$shouldEmitTap)) {
			return true;
		}
		if (!event.cancelBubble) {
			event.localX = localX;
			event.localY = localY;
			this.emit(event);
		}
		return true;
	}

	protected $emitAdded(parent: Layer): void {
		let stage = parent.$stage;
		this.$parent = parent;
		this.emit(Event.ADDED);
		if (stage) {
			this.$emitAddedToStage(stage);
		}
	}

	protected $emitRemoved(): void {
		let stage = this.$stage;
		this.$parent = null;
		this.emit(Event.REMOVED);
		if (stage) {
			this.$emitRemovedFromStage();
		}
	}

	protected $emitAddedToStage(stage: Stage): void {
		let children = this.$children;
		this.$stage = stage;
		this.emit(Event.ADDED_TO_STAGE);

		if (this.hasEventListener(Event.ENTER_FRAME)) {
			stage.ticker.registerEnterFrameCallback(this);
		}
		for (let child of children) {
			child.$emitAddedToStage(stage);
		}
	}

	protected $emitRemovedFromStage(): void {
		let stage = this.$stage;
		let children = this.$children;
		this.$stage = null;
		this.emit(Event.REMOVED_FROM_STAGE);
		if (this.hasEventListener(Event.ENTER_FRAME)) {
			stage.ticker.unregisterEnterFrameCallback(this);
		}
		for (let child of children) {
			child.$emitRemovedFromStage();
		}
	}

	protected $getPattern(texture: Texture, fillMode: FillMode): CanvasPattern {
		if (texture && fillMode && fillMode !== Texture.SCALE && fillMode !== Texture.NO_REPEAT) {
			return this.$context.createPattern(texture.element, fillMode);
		} else {
			return null;
		}
	}

	protected $localHitTest(vector: Vector): boolean {
		return vector.x >= -this.anchorX && vector.x <= this.width - this.anchorX && vector.y >= -this.anchorY && vector.y <= this.height - this.anchorY;
	}

	protected $isChildVisible(child: Layer): boolean {
		if (!child.visible || !child.alpha || !child.width || !child.height) {
			return false;
		}
		let minX = -this.$anchorX;
		let maxX = this.width + minX;
		let minY = -this.$anchorY;
		let maxY = this.height + minY;
		let bounds = this.$getChildBounds(child);
		let inside = bounds.left <= maxX && bounds.right >= minX && bounds.top <= maxY && bounds.bottom >= minY;
		bounds.release();
		return inside;
	}

	protected $drawBackground(color: string, texture: Texture, pattern: CanvasPattern, fillMode: FillMode, context?: CanvasRenderingContext2D): void {
		let ctx = context || this.$context;
		let canvas = ctx.canvas;
		let width = canvas.width;
		let height = canvas.height;
		let pixelRatio = Layer.pixelRatio;
		if (color) {
			ctx.fillStyle = color;
			ctx.fillRect(0, 0, width, height);
		}
		if (texture) {
			if (fillMode === Texture.SCALE) {
				ctx.drawImage(texture.element, 0, 0, width, height);
			} else if (fillMode === Texture.NO_REPEAT) {
				ctx.drawImage(texture.element, 0, 0, texture.width * pixelRatio, texture.height * pixelRatio);
			} else if (pattern) {
				let scale = pixelRatio / texture.pixelRatio;
				scale !== 1 && ctx.scale(scale, scale);
				ctx.fillStyle = pattern;
				ctx.fillRect(0, 0, width, height);
			}
		}
	}

	protected $drawChild(child: Layer): number {
		let ctx = this.$context;
		let canvas = child.$canvas;
		let width = child.width;
		let height = child.height;
		let pixelRatio = Layer.pixelRatio;
		let matrix = this.$getChildTransform(child).scale(pixelRatio);
		let drawCalls = child.$render();
		let globalAlpha = ctx.globalAlpha;
		if (globalAlpha !== child.alpha) {
			ctx.globalAlpha = child.alpha;
		}
		if (matrix.b === 0 && matrix.c === 0) {
			let tx = (matrix.tx + 0.5) | 0;
			let ty = (matrix.ty + 0.5) | 0;
			width = (width * matrix.a) + 0.5 | 0;
			height = (height * matrix.d) + 0.5 | 0;
			ctx.drawImage(canvas, tx, ty, width, height);
		} else {
			ctx.save();
			ctx.transform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
			ctx.drawImage(canvas, 0, 0, width, height);
			ctx.restore();
		}
		if (globalAlpha !== child.alpha) {
			ctx.globalAlpha = globalAlpha;
		}
		matrix.release();
		return drawCalls + 1;
	}

	protected $render(): number {
		if (!this.$dirty) {
			return 0;
		}
		let drawCalls = 0;
		let ctx = this.$context;
		let canvas = this.$canvas;
		let children = this.$children;
		let canvasWidth = canvas.width;
		let canvasHeight = canvas.height;
		let anchorX = (this.$anchorX + 0.5) | 0;
		let anchorY = (this.$anchorY + 0.5) | 0;
		let backgroundColor = this.$backgroundColor;
		let backgroundImage = this.$backgroundImage;
		let backgroundPattern = this.$backgroundPattern;
		let backgroundFillMode = this.$backgroundFillMode;
		let pixelRatio = Layer.pixelRatio;

		ctx.globalAlpha = 1;
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		this.$drawBackground(backgroundColor, backgroundImage, backgroundPattern, backgroundFillMode);
		ctx.translate(anchorX * pixelRatio, anchorY * pixelRatio);
		for (let child of children) {
			if (this.$isChildVisible(child)) {
				drawCalls += this.$drawChild(child);
			}
		}
		this.$dirty = false;
		return drawCalls;
	}

	public on(type: string, listener: (...args: any[]) => void): this {
		super.on(type, listener);
		if (type === Event.ENTER_FRAME && this.ticker) {
			this.ticker.registerEnterFrameCallback(this);
		} else if (type === Event.ADDED && this.$parent) {
			let event = Event.create(type);
			listener.call(this, event);
			event.release();
		} else if (type === Event.ADDED_TO_STAGE && this.$stage) {
			let event = Event.create(type);
			listener.call(this, event);
			event.release();
		}
		return this;
	}

	public off(type: string, listener?: (...args: any[]) => void): this {
		super.off(type, listener);
		if (type === Event.ENTER_FRAME && !this.hasEventListener(Event.ENTER_FRAME) && this.ticker) {
			this.ticker.unregisterEnterFrameCallback(this);
		}
		return this;
	}

}
