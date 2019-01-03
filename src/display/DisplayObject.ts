import Stage from './Stage';
import Ticker from '../core/Ticker';
import Matrix from '../geom/Matrix';
import Vector from '../geom/Vector';
import Rectangle from '../geom/Rectangle';
import Event from '../event/Event';
import TouchEvent from '../event/TouchEvent';
import EventEmitter from '../event/EventEmitter';

export default class DisplayObject extends EventEmitter {

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
	protected $background: string = null;
	protected $dirty: boolean = true;
	protected $stage: Stage = null;
	protected $parent: DisplayObject = null;
	protected readonly $pixelRatio: number;
	protected readonly $children: Array<DisplayObject> = [];
	protected readonly $touches: Array<boolean> = [];
	protected readonly $canvas: HTMLCanvasElement;
	protected readonly $context: CanvasRenderingContext2D;

	public constructor() {
		super();
		this.$pixelRatio = window.devicePixelRatio || 1;
		this.$canvas = document.createElement('canvas');
		this.$context = this.$canvas.getContext('2d');
		this.on(Event.ADDED, this.$onAdded);
		this.on(Event.REMOVED, this.$onRemoved);
		this.on(Event.ADDED_TO_STAGE, this.$onAddedToStage);
		this.on(Event.REMOVED_FROM_STAGE, this.$onRemovedFromStage);
	}

	public get width(): number {
		return this.$width ? this.$width : this.$canvas.width / this.$pixelRatio;
	}

	public set width(width: number) {
		if (this.$width !== width) {
			this.$width = width;
			this.$resizeCanvas();
		}
	}

	public get height(): number {
		return this.$height ? this.$height : this.$canvas.height / this.$pixelRatio;
	}

	public set height(height: number) {
		if (this.$height !== height) {
			this.$height = height;
			this.$resizeCanvas();
		}
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

	public get anchorX(): number {
		return this.$anchorX;
	}

	public set anchorX(anchorX: number) {
		if (this.$anchorX !== anchorX) {
			this.$anchorX = anchorX;
			this.$markDirty();
		}
	}

	public get anchorY(): number {
		return this.$anchorY;
	}

	public set anchorY(anchorY: number) {
		if (this.$anchorY !== anchorY) {
			this.$anchorY = anchorY;
			this.$markDirty();
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

	public get background(): string {
		return this.$background;
	}

	public set background(background: string) {
		if (this.$background !== background) {
			this.$background = background;
			this.$markDirty();
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

	public get dirty(): boolean {
		return this.$dirty;
	}

	public get stage(): Stage {
		return this.$stage;
	}

	public get parent(): DisplayObject {
		return this.$parent;
	}

	public get children(): Array<DisplayObject> {
		return this.$children;
	}

	public get ticker(): Ticker {
		return this.$stage ? this.$stage.ticker : null;
	}

	public get canvas(): HTMLCanvasElement {
		return this.$canvas;
	}

	public addChild(child: DisplayObject): this {
		return this.addChildAt(child, this.$children.length);
	}

	public addChildAt(child: DisplayObject, index: number): this {
		if (child.$parent) {
			child.$parent.removeChild(child);
		}
		if (this.$stage) {
			child.emit(Event.ADDED_TO_STAGE, this.$stage);
		}
		child.emit(Event.ADDED, this);
		this.$children.splice(index, 0, child);
		this.$resizeCanvas();
		return this;
	}

	public removeChild(child: DisplayObject): this {
		let index = this.$children.indexOf(child);
		return this.removeChildAt(index);
	}

	public removeChildAt(index: number): this {
		if (index >= 0) {
			let child = this.$children.splice(index, 1)[0];
			child.emit(Event.REMOVED, this);
			this.$stage && child.emit(Event.REMOVED_FROM_STAGE, this.$stage);
			this.$resizeCanvas();
		}
		return this;
	}

	public removeChildrenByName(name: string): this {
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

	public removeChildrenByTag(tag): this {
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
			child.emit(Event.REMOVED, this);
			this.$stage && child.emit(Event.REMOVED_FROM_STAGE);
		}
		this.$children.length = 0;
		this.$resizeCanvas();
		return this;
	}

	getChildByName(name): DisplayObject {
		let children = this.$children;
		for (let child of children) {
			if (child.name === name) {
				return child;
			}
		}
		return null;
	}

	public getChildrenByTag(tag): Array<DisplayObject> {
		let result = [];
		let children = this.$children;
		for (let child of children) {
			if (child.tag === tag) {
				result.push(child);
			}
		}
		return result;
	}

	public getChildAt(index): DisplayObject {
		return this.$children[index] || null;
	}

	public getChildIndex(child): number {
		return this.$children.indexOf(child);
	}

	public swapChildren(child1, child2): this {
		let index1 = this.getChildIndex(child1);
		let index2 = this.getChildIndex(child2);
		if (index1 >= 0 && index2 >= 0) {
			this.swapChildrenAt(index1, index2);
		}
		return this;
	}

	public swapChildrenAt(index1, index2) {
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

	protected $getTransform(): Matrix {
		let matrix = Matrix.create();
		matrix.translate(-this.$anchorX, -this.$anchorY);
		matrix.rotate(this.rotation * Math.PI / 180).scale(this.scaleX, this.scaleY).skew(this.skewX, this.skewY);
		matrix.translate(this.x, this.y);
		return matrix;
	}

	protected $resizeCanvas() {
		if (this.$width && this.$height) {
			this.$canvas.width = this.$width * this.$pixelRatio;
			this.$canvas.height = this.$height * this.$pixelRatio;
		} else {
			let bounds = this.$getContentBounds();
			this.$canvas.width = (this.$width || bounds.right + this.anchorX) * this.$pixelRatio;
			this.$canvas.height = (this.$height || bounds.bottom + this.anchorY) * this.$pixelRatio;
			bounds.release();
		}
		if (this.$parent) {
			this.$parent.$resizeCanvas();
		}
		this.$dirty = true;
	}

	protected $getChildBounds(child: DisplayObject): Rectangle {
		let bounds = Rectangle.create();
		let matrix = child.$getTransform();
		let topLeft = Vector.create(0, 0).transform(matrix);
		let topRight = Vector.create(this.width, 0).transform(matrix);
		let bottomLeft = Vector.create(0, this.height).transform(matrix);
		let bottomRight = Vector.create(this.width, this.height).transform(matrix);
		let minX = Math.min(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
		let maxX = Math.max(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
		let minY = Math.min(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
		let maxY = Math.max(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
		bounds.top = minY;
		bounds.bottom = maxY;
		bounds.left = minX;
		bounds.right = maxX;
		topLeft.release();
		topRight.release();
		bottomLeft.release();
		bottomRight.release();
		return bounds;
	}

	protected $getContentBounds(): Rectangle {
		let children = this.$children;
		let bounds = Rectangle.create();
		for (let child of children) {
			let childBounds = this.$getChildBounds(child);
			bounds.top = Math.min(bounds.top ? bounds.top : Infinity, childBounds.top);
			bounds.bottom = Math.max(bounds.bottom ? bounds.bottom : -Infinity, childBounds.bottom);
			bounds.left = Math.min(bounds.left ? bounds.left : Infinity, childBounds.left);
			bounds.right = Math.max(bounds.right ? bounds.right : -Infinity, childBounds.right);
			childBounds.release();
		}
		return bounds;
	}

	protected $emitTouchEvent(event: TouchEvent): boolean {
		if (!this.touchable) {
			return false;
		}
		let type = event.type;
		let identifier = event.identifier;
		let matrix = this.$getTransform();
		let localPos = Vector.create(event.targetX, event.targetY).transform(matrix.invert()).subtract(this.$anchorX, this.$anchorY);
		let outside = localPos.x < -this.anchorX || localPos.x > this.width - this.anchorX || localPos.y < -this.anchorY || localPos.y > this.height - this.anchorY;
		if ((type === TouchEvent.TOUCH_START || type === TouchEvent.TOUCH_TAP) && outside) {
			return false;
		}
		if (type === TouchEvent.TOUCH_START) {
			this.$touches[identifier] = true;
		} else if (!this.$touches[identifier]) {
			return false;
		} else if (type === TouchEvent.TOUCH_END || type === TouchEvent.TOUCH_CANCEL) {
			this.$touches[identifier] = false;
		}
		let children = this.$children;
		event.targetX = localPos.x;
		event.targetY = localPos.y;
		for (let i = children.length - 1; i >= 0; --i) {
			let child = children[i];
			if (child.$emitTouchEvent(event)) {
				break;
			}
		}
		if (!event.propagationStopped) {
			event.target = event.target || this;
			event.currentTarget = this;
			event.localX = localPos.x;
			event.localY = localPos.y;
			this.emit(event.type, event);
		}
		matrix.release();
		localPos.release();
		return true;
	}

	protected $drawChild(child: DisplayObject): void {
		if (!child.width || !child.height) {
			return;
		}
		let ctx = this.$context;
		let pixelRatio = this.$pixelRatio;
		let matrix = child.$getTransform().scale(pixelRatio);

		child.$render();

		ctx.globalAlpha = child.alpha;

		if (matrix.a === 1 && matrix.b === 0 && matrix.c === 0 && matrix.d === 1) {
			ctx.drawImage(child.$canvas, matrix.tx, matrix.ty, child.width, child.height);
		} else {
			ctx.save();
			ctx.transform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
			ctx.drawImage(child.$canvas, 0, 0, child.width, child.height);
			ctx.restore();
		}
		matrix.release();
	}

	protected $render(): void {
		if (!this.$dirty) {
			return;
		}
		let ctx = this.$context;
		let canvas = this.$canvas;
		let children = this.$children;
		let pixelRatio = this.$pixelRatio;
		let anchorX = this.$anchorX * pixelRatio;
		let anchorY = this.$anchorY * pixelRatio;
		ctx.setTransform(1, 0, 0, 1, anchorX, anchorY);
		ctx.clearRect(-anchorX, -anchorY, canvas.width, canvas.height);
		ctx.beginPath();

		if (this.$background) {
			ctx.save();
			ctx.fillStyle = this.$background;
			ctx.fillRect(-anchorX, -anchorY, canvas.width, canvas.height);
			ctx.restore();
		}

		for (let child of children) {
			if (child.visible && child.alpha) {
				this.$drawChild(child);
			}
		}
		this.$dirty = false;
	}

	public on(event: string, listener: (...args: any[]) => void): this {
		super.on(event, listener);
		if (event === Event.ENTER_FRAME && this.$stage) {
			this.$stage.ticker.registerEnterFrameCallback(this);
		} else if (event === Event.ADDED && this.$parent) {
			listener();
		} else if (event === Event.ADDED_TO_STAGE && this.$stage) {
			listener();
		}
		return this;
	}

	public off(event: string, listener?: (...args: any[]) => void): this {
		super.off(event, listener);
		if (this.$stage && event === Event.ENTER_FRAME && !this.hasEventListener(Event.ENTER_FRAME)) {
			this.$stage.ticker.unregisterEnterFrameCallback(this);
		}
		return this;
	}

	protected $onAdded(parent: DisplayObject): void {
		this.$parent = parent;
	}

	protected $onRemoved(): void {
		this.$parent = null;
	}

	protected $onAddedToStage(stage: Stage): void {
		let children = this.$children;
		if (this.hasEventListener(Event.ENTER_FRAME)) {
			stage.ticker.registerEnterFrameCallback(this);
		}
		this.$stage = stage;
		for (let child of children) {
			child.emit(Event.ADDED_TO_STAGE, stage);
		}
	}

	protected $onRemovedFromStage(stage: Stage): void {
		let children = this.$children;
		if (this.hasEventListener(Event.ENTER_FRAME)) {
			stage.ticker.unregisterEnterFrameCallback(this);
		}
		this.$stage = null;
		for (let child of children) {
			child.emit(Event.ADDED_TO_STAGE);
		}
	}

	protected $markDirty(): void {
		this.$dirty = true;
		this.$markParentDirty();
	}

	protected $markParentDirty(): void {
		if (this.$parent) {
			this.$parent.$markDirty();
		}
	}

}
