import {Layer} from './Layer';
import {Ticker} from '../system/Ticker';
import {Vector} from '../geom/Vector';
import {Rectangle} from '../geom/Rectangle';
import {Texture, FillMode} from '../media/Texture';
import {Event} from '../event/Event';
import {TouchEvent} from '../event/TouchEvent';
import {ResourceManager, ResourceInfo, ResourceManagerOption} from '../net/ResourceManager';

export class Stage extends Layer {

	public static readonly NO_SCALE: string = 'noScale';
	public static readonly NO_BORDER: string = 'noBorder';
	public static readonly SHOW_ALL: string = 'showAll';
	public static readonly EXACT_FIT: string = 'exactFit';
	public static readonly FIXED_WIDE: string = 'fixedWide';
	public static readonly FIXED_NARROW: string = 'fixedNarrow';
	public static readonly FIXED_WIDTH: string = 'fixedWidth';
	public static readonly FIXED_HEIGHT: string = 'fixedHeight';

	protected $drawCalls: number = 0;
	protected $activated: boolean = false;
	protected $scaleMode: string = Stage.SHOW_ALL;
	protected $viewportWidth: number = 0;
	protected $viewportHeight: number = 0;
	protected $viewportBackgroundColor: string = null;
	protected $viewportBackgroundImage: Texture = null;
	protected $viewportBackgroundPattern: CanvasPattern = null;
	protected $viewportBackgroundFillMode: FillMode = Texture.SCALE;
	protected readonly $ticker: Ticker;
	protected readonly $browserListeners: DOMListener[];
	protected readonly $viewportCanvas: HTMLCanvasElement;
	protected readonly $viewportContext: CanvasRenderingContext2D;
	protected readonly $renderBounds: Rectangle = Rectangle.create();
	protected readonly $boundResizeViewportCanvas: () => void;

	public constructor(canvas?: HTMLCanvasElement) {
		super();
		this.$ticker = new Ticker(this);
		this.$browserListeners = [];
		this.$viewportCanvas = canvas || document.createElement('canvas');
		this.$viewportContext = this.$viewportCanvas.getContext('2d');
		this.$boundResizeViewportCanvas = this.$resizeViewportCanvas.bind(this);
		this.$resizeViewportCanvas();
		this.$initEvents();
		this.width = 320;
		this.height = 568;

		if (!canvas) {
			this.$viewportCanvas.style.top = '0';
			this.$viewportCanvas.style.left = '0';
			this.$viewportCanvas.style.position = 'fixed';
			document.body.appendChild(this.$viewportCanvas);
		}
	}

	public get x(): number {
		return 0;
	}

	public set x(x: number) {
		this.$x = 0;
	}

	public get y(): number {
		return 0;
	}

	public set y(y: number) {
		this.$y = 0;
	}

	public get ticker(): Ticker {
		return this.$ticker;
	}

	public get fps(): number {
		return this.$ticker.fps;
	}

	public get drawCalls(): number {
		return this.$drawCalls;
	}

	public get activated(): boolean {
		return this.$activated;
	}

	public get scaleMode(): string {
		return this.$scaleMode;
	}

	public set scaleMode(scaleMode: string) {
		if (this.scaleMode !== scaleMode) {
			this.$scaleMode = scaleMode;
			this.$resizeCanvas();
		}
	}

	public get viewportCanvas(): HTMLCanvasElement {
		return this.$viewportCanvas;
	}

	public get viewportWidth(): number {
		return this.$viewportWidth ? this.$viewportWidth : this.$viewportCanvas.width / Layer.pixelRatio;
	}

	public set viewportWidth(width: number) {
		if (this.$viewportWidth !== width) {
			this.$viewportWidth = width;
			this.$resizeViewportCanvas();
		}
	}

	public get viewportHeight(): number {
		return this.$viewportHeight ? this.$viewportHeight : this.$viewportCanvas.height / Layer.pixelRatio;
	}

	public set viewportHeight(height: number) {
		if (this.$viewportHeight !== height) {
			this.$viewportHeight = height;
			this.$resizeViewportCanvas();
		}
	}

	public get viewportBackgroundColor(): string {
		return this.$viewportBackgroundColor;
	}

	public set viewportBackgroundColor(viewportBackgroundColor: string) {
		if (this.$viewportBackgroundColor !== viewportBackgroundColor) {
			this.$viewportBackgroundColor = viewportBackgroundColor;
			this.$markDirty();
		}
	}

	public get viewportBackgroundImage(): Texture {
		return this.$viewportBackgroundImage;
	}

	public set viewportBackgroundImage(viewportBackgroundImage: Texture) {
		if (this.$viewportBackgroundImage !== viewportBackgroundImage) {
			this.$viewportBackgroundImage = viewportBackgroundImage;
			this.$viewportBackgroundPattern = this.$getPattern(this.$viewportBackgroundImage, this.$viewportBackgroundFillMode);
			this.$markDirty();
		}
	}

	public get viewportBackgroundFillMode(): FillMode {
		return this.$viewportBackgroundFillMode;
	}

	public set viewportBackgroundFillMode(viewportBackgroundFillMode: FillMode) {
		if (this.$viewportBackgroundFillMode !== viewportBackgroundFillMode) {
			this.$viewportBackgroundFillMode = viewportBackgroundFillMode || Texture.SCALE;
			this.$viewportBackgroundPattern = this.$getPattern(this.$viewportBackgroundImage, this.$viewportBackgroundFillMode);
			this.$markDirty();
		}
	}

	public createResourceManager(list: Array<ResourceInfo>, options?: ResourceManagerOption): ResourceManager {
		return new ResourceManager(this, list, options);
	}

	public removeSelf(): this {
		let canvas = this.$viewportCanvas;
		if (canvas.parentElement) {
			canvas.parentElement.removeChild(canvas);
		}
		if (this.$activated) {
			this.$activated = false;
			this.emit(Event.DEACTIVATE);
		}
		if (this.$stage) {
			this.$emitRemovedFromStage();
		}
		this.$removeElementListeners();
		return this;
	}

	protected $initEvents(): void {
		let prefix;
		let hiddenKey;
		let resizeTimer;
		let ticker = this.$ticker;
		let prefixes = ['', 'o', 'ms', 'moz', 'webkit'];
		for (prefix of prefixes) {
			hiddenKey = prefix ? prefix + 'Hidden' : 'hidden';
			if (document[hiddenKey] !== undefined) {
				break;
			}
		}
		this.$emitAddedToStage(this);
		this.$addTouchEventListeners();
		this.$addElementListener(window, 'orientationchange', () => {
			ticker.clearTimeout(resizeTimer);
			resizeTimer = ticker.setTimeout(this.$boundResizeViewportCanvas, 100);
		});
		this.$addElementListener(window, prefix + 'visibilitychange', () => {
			let hidden = document[hiddenKey];
			this.$activated = !hidden;
			this.emit(hidden ? Event.DEACTIVATE : Event.ACTIVATE);
		});
		this.on(Event.ENTER_FRAME, this.$render);
		if (!document[hiddenKey]) {
			this.$activated = true;
			this.emit(Event.ACTIVATE);
		}
	}

	protected $addElementListener(target: EventTarget, type: string, listener: (event) => void, options?: boolean | AddEventListenerOptions): void {
		target.addEventListener(type, listener, options);
		this.$browserListeners.push({target, type, listener});
	}

	protected $removeElementListeners(): void {
		let listeners = this.$browserListeners;
		for (let {target, type, listener} of listeners) {
			target.removeEventListener(type, listener);
		}
		listeners.length = 0;
	}

	protected $addTouchEventListeners(): void {
		if (document.ontouchstart !== undefined) {
			this.$addElementListener(document, 'touchstart', event => {
				this.$dispatchTouches(TouchEvent.TOUCH_START, event);
			});
			this.$addElementListener(document, 'touchmove', event => {
				this.$dispatchTouches(TouchEvent.TOUCH_MOVE, event);
				event.preventDefault();
			}, {passive: false});
			this.$addElementListener(document, 'touchend', event => {
				this.$dispatchTouches(TouchEvent.TOUCH_END, event);
				this.$dispatchTouches(TouchEvent.TOUCH_TAP, event);
			});
			this.$addElementListener(document, 'touchcancel', event => {
				this.$dispatchTouches(TouchEvent.TOUCH_CANCEL, event);
			});
		} else {
			let touching = false;
			this.$addElementListener(window, 'mousedown', event => {
				this.$dispatchTouchEvent(TouchEvent.TOUCH_START, event.pageX, event.pageY, 0);
				touching = true;
			});
			this.$addElementListener(window, 'mousemove', event => {
				if (touching) {
					this.$dispatchTouchEvent(TouchEvent.TOUCH_MOVE, event.pageX, event.pageY, 0);
				}
			});
			this.$addElementListener(window, 'mouseup', event => {
				this.$dispatchTouchEvent(TouchEvent.TOUCH_END, event.pageX, event.pageY, 0);
				touching = false;
			});
			this.$addElementListener(window, 'click', event => {
				this.$dispatchTouchEvent(TouchEvent.TOUCH_TAP, event.pageX, event.pageY, 0);
			});
			this.$addElementListener(window, 'blur', () => {
				this.$dispatchTouchEvent(TouchEvent.TOUCH_CANCEL, 0, 0, 0);
				touching = false;
			});
		}
	}

	protected $dispatchTouches(type: string, event: any): void {
		let touches = event['changedTouches'];
		for (let i = 0, l = touches.length; i < l; ++i) {
			let touch = touches[i];
			this.$dispatchTouchEvent(type, touch.pageX, touch.pageY, touch.identifier);
		}
	}

	protected $dispatchTouchEvent(type: string, pageX: number, pageY: number, identifier: number): void {
		if (this.$ticker.paused || !this.$visible || !this.touchable) {
			return;
		}
		let event = TouchEvent.create(type);
		let scrollX = window.scrollX || 0;
		let scrollY = window.scrollY || 0;
		let width = this.$canvas.width;
		let height = this.$canvas.height;
		let bounds = this.$renderBounds;
		let pixelRatio = Layer.pixelRatio;
		let viewportBounds = this.$viewportCanvas.getBoundingClientRect();
		let x = (pageX - scrollX - viewportBounds.left - bounds.x / pixelRatio) * width / bounds.width - this.$anchorX;
		let y = (pageY - scrollY - viewportBounds.top - bounds.y / pixelRatio) * height / bounds.height - this.$anchorY;
		let matrix = this.$getTransform();
		let localPos = Vector.create(x, y).transform(matrix.invert()).subtract(this.$anchorX, this.$anchorY);
		let inside = this.$localHitTest(localPos);
		if (inside || type !== TouchEvent.TOUCH_START) {
			event.localX = localPos.x;
			event.localY = localPos.y;
			event.targetX = event.stageX = x;
			event.targetY = event.stageY = y;
			event.identifier = identifier;
			this.$emitTouchEvent(event, inside);
		}
		event.release();
		matrix.release();
		localPos.release();
	}

	protected $calculateRenderBounds(): void {
		let x = 0;
		let y = 0;
		let canvas = this.$canvas;
		let width = canvas.width;
		let height = canvas.height;
		let scaleMode = this.$scaleMode;
		let bounds = this.$renderBounds;
		let aspectRatio = width / height;
		let viewportCanvas = this.$viewportCanvas;
		let viewportWidth = viewportCanvas.width;
		let viewportHeight = viewportCanvas.height;
		let viewportAspectRatio = viewportWidth / viewportHeight;
		if (scaleMode === Stage.NO_SCALE) {
		} else if (scaleMode === Stage.NO_BORDER) {
			if (aspectRatio < viewportAspectRatio) {
				width = viewportWidth;
				height = width / aspectRatio;
			} else {
				height = viewportHeight;
				width = height * aspectRatio;
			}
			x = (viewportWidth - width) / 2;
			y = (viewportHeight - height) / 2;
		} else if (scaleMode === Stage.SHOW_ALL) {
			if (aspectRatio > viewportAspectRatio) {
				width = viewportWidth;
				height = width / aspectRatio;
			} else {
				height = viewportHeight;
				width = height * aspectRatio;
			}
		} else if (scaleMode === Stage.EXACT_FIT) {
			width = viewportWidth;
			height = viewportHeight;
		} else if (scaleMode === Stage.FIXED_WIDTH) {
			width = viewportWidth;
			height = width / aspectRatio;
		} else if (scaleMode === Stage.FIXED_HEIGHT) {
			height = viewportHeight;
			width = height * aspectRatio;
		} else if (scaleMode === Stage.FIXED_WIDE) {
			if (viewportWidth > viewportHeight) {
				width = viewportWidth;
				height = width / aspectRatio;
			} else {
				height = viewportHeight;
				width = height * aspectRatio;
			}
		} else if (scaleMode === Stage.FIXED_NARROW) {
			if (viewportWidth < viewportHeight) {
				width = viewportWidth;
				height = width / aspectRatio;
			} else {
				height = viewportHeight;
				width = height * aspectRatio;
			}
		}
		if (width < viewportWidth) {
			x = (viewportWidth - width) / 2;
		}
		if (height < viewportHeight) {
			y = (viewportHeight - height) / 2;
		}
		bounds.x = x;
		bounds.y = y;
		bounds.width = width;
		bounds.height = height;
	}

	protected $resizeCanvas(): void {
		super.$resizeCanvas();
		this.$calculateRenderBounds();
	}

	protected $resizeViewportCanvas(): void {
		let canvas = this.$viewportCanvas;
		let pixelRatio = Layer.pixelRatio;
		let viewportWidth = this.$viewportWidth || window.innerWidth;
		let viewportHeight = this.$viewportHeight || window.innerHeight;
		let canvasWidth = viewportWidth * pixelRatio;
		let canvasHeight = viewportHeight * pixelRatio;
		if (canvas.width !== canvasWidth || canvasHeight !== canvasHeight) {
			this.$viewportCanvas.width = canvasWidth;
			this.$viewportCanvas.height = canvasHeight;
			this.$viewportCanvas.style.transformOrigin = '0 0';
			this.$viewportCanvas.style.transform = `scale(${1 / pixelRatio})`;
			this.$calculateRenderBounds();
			this.$markDirty();
			this.emit(Event.VIEWPORT_RESIZE);
		}
	}

	protected $render(): number {
		if (!this.$dirty) {
			this.$drawCalls = 0;
			return 0;
		}
		let drawCalls = super.$render();
		let canvas = this.$canvas;
		let ctx = this.$viewportContext;
		let bounds = this.$renderBounds;
		let viewportCanvas = this.$viewportCanvas;
		let viewportWidth = viewportCanvas.width;
		let viewportHeight = viewportCanvas.height;
		let backgroundColor = this.$viewportBackgroundColor;
		let backgroundImage = this.$viewportBackgroundImage;
		let backgroundPattern = this.$viewportBackgroundPattern;
		let backgroundFillMode = this.$viewportBackgroundFillMode;
		ctx.clearRect(0, 0, viewportWidth, viewportHeight);
		this.$drawBackground(backgroundColor, backgroundImage, backgroundPattern, backgroundFillMode, ctx);
		ctx.drawImage(canvas, (bounds.x + 0.5) | 0, (bounds.y + 0.5) | 0, (bounds.width + 0.5) | 0, (bounds.height + 0.5) | 0);
		this.$drawCalls = ++drawCalls;
		return drawCalls;
	}

}

export interface DOMListener {
	target: EventTarget,
	type: string,
	listener: (event) => void
}
