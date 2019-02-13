import {Layer} from './Layer';
import {Ticker} from '../system/Ticker';
import {Vector} from '../geom/Vector';
import {Rectangle} from '../geom/Rectangle';
import {Event} from '../event/Event';
import {TouchEvent} from '../event/TouchEvent';
import {ResourceManager, ResourceInfo, ResourceManagerOption} from '../net/ResourceManager';

export class Stage extends Layer {

	public static readonly SHOW_ALL: string = 'showAll';
	public static readonly EXACT_FIT: string = 'exactFit';
	public static readonly NO_SCALE: string = 'noScale';
	public static readonly NO_BORDER: string = 'noBorder';
	public static readonly FIXED_WIDE: string = 'fixedWide';
	public static readonly FIXED_NARROW: string = 'fixedNarrow';
	public static readonly FIXED_WIDTH: string = 'fixedWidth';
	public static readonly FIXED_HEIGHT: string = 'fixedHeight';

	protected $drawCalls: number = 0;
	protected $activated: boolean = false;
	protected $scaleMode: string = Stage.SHOW_ALL;
	protected $viewportWidth: number = 0;
	protected $viewportHeight: number = 0;
	protected $viewportBackground: string = null;
	protected readonly $ticker: Ticker;
	protected readonly $elementEvents: ElementEvent[];
	protected readonly $viewportCanvas: HTMLCanvasElement;
	protected readonly $viewportContext: CanvasRenderingContext2D;
	protected readonly $renderBounds: Rectangle = Rectangle.create();
	protected readonly $boundResizeViewportCanvas: () => void;

	public constructor(canvas?: HTMLCanvasElement) {
		super();
		this.$ticker = new Ticker(this);
		this.$elementEvents = [];
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

	public get viewportBackground(): string {
		return this.$viewportBackground;
	}

	public set viewportBackground(viewportBackground: string) {
		this.$viewportBackground = viewportBackground;
		this.$viewportCanvas.style.background = viewportBackground;
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
		this.$removeElementEvents();
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
		this.$addTouchEventListeners();
		this.$addElementEvent(window, 'orientationchange', () => {
			ticker.clearTimeout(resizeTimer);
			resizeTimer = ticker.setTimeout(this.$boundResizeViewportCanvas, 100);
		});
		this.$addElementEvent(window, prefix + 'visibilitychange', () => {
			let hidden = document[hiddenKey];
			this.$activated = !hidden;
			this.emit(hidden ? Event.DEACTIVATE : Event.ACTIVATE);
		});
		this.on(Event.ENTER_FRAME, this.$render);
		setTimeout(() => {
			if (!document[hiddenKey]) {
				this.$activated = true;
				this.emit(Event.ACTIVATE);
			}
			this.$emitAddedToStage(this);
		});
	}

	protected $addElementEvent(target: EventTarget, type: string, listener: (event) => void, options?: boolean | AddEventListenerOptions): void {
		target.addEventListener(type, listener, options);
		this.$elementEvents.push({target, type, listener});
	}

	protected $removeElementEvents(): void {
		let listeners = this.$elementEvents;
		for (let {target, type, listener} of listeners) {
			target.removeEventListener(type, listener);
		}
		listeners.length = 0;
	}

	protected $addTouchEventListeners(): void {
		if (document.ontouchstart !== undefined) {
			this.$addElementEvent(document, 'touchstart', event => {
				this.$dispatchTouches(TouchEvent.TOUCH_START, event);
			});
			this.$addElementEvent(document, 'touchmove', event => {
				this.$dispatchTouches(TouchEvent.TOUCH_MOVE, event);
				event.preventDefault();
			}, {passive: false});
			this.$addElementEvent(document, 'touchend', event => {
				this.$dispatchTouches(TouchEvent.TOUCH_END, event);
				this.$dispatchTouches(TouchEvent.TOUCH_TAP, event);
			});
			this.$addElementEvent(document, 'touchcancel', event => {
				this.$dispatchTouches(TouchEvent.TOUCH_CANCEL, event);
			});
		} else {
			let touching = false;
			this.$addElementEvent(window, 'mousedown', event => {
				this.$dispatchTouchEvent(TouchEvent.TOUCH_START, event.pageX, event.pageY, 0);
				touching = true;
			});
			this.$addElementEvent(window, 'mousemove', event => {
				if (touching) {
					this.$dispatchTouchEvent(TouchEvent.TOUCH_MOVE, event.pageX, event.pageY, 0);
				}
			});
			this.$addElementEvent(window, 'mouseup', event => {
				this.$dispatchTouchEvent(TouchEvent.TOUCH_END, event.pageX, event.pageY, 0);
				touching = false;
			});
			this.$addElementEvent(window, 'click', event => {
				this.$dispatchTouchEvent(TouchEvent.TOUCH_TAP, event.pageX, event.pageY, 0);
			});
			this.$addElementEvent(window, 'blur', () => {
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
		if (scaleMode === Stage.SHOW_ALL) {
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
		if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
			canvas.width = canvasWidth;
			canvas.height = canvasHeight;
			canvas.style.width = viewportWidth + 'px';
			canvas.style.height = viewportHeight + 'px';
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
		ctx.clearRect(0, 0, viewportWidth, viewportHeight);
		ctx.drawImage(canvas, (bounds.x + 0.5) | 0, (bounds.y + 0.5) | 0, (bounds.width + 0.5) | 0, (bounds.height + 0.5) | 0);
		this.$drawCalls = ++drawCalls;
		return drawCalls;
	}

}

interface ElementEvent {
	target: EventTarget,
	type: string,
	listener: (event) => void
}
