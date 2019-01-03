import Ticker from '../core/Ticker';
import Event from '../event/Event';
import Rectangle from '../geom/Rectangle';
import TouchEvent from '../event/TouchEvent';
import DisplayObject from './DisplayObject';
import ResourceManager, {ResourceInfo, ResourceManagerOption} from '../net/ResourceManager';

export default class Stage extends DisplayObject {

	public static NO_SCALE: string = 'noScale';
	public static NO_BORDER: string = 'noBorder';
	public static SHOW_ALL: string = 'showAll';
	public static EXACT_FIT: string = 'exactFit';
	public static FIXED_WIDE: string = 'fixedWide';
	public static FIXED_NARROW: string = 'fixedNarrow';
	public static FIXED_WIDTH: string = 'fixedWidth';
	public static FIXED_HEIGHT: string = 'fixedHeight';

	protected $scaleMode: string;
	protected $fullscreen: boolean;
	protected $renderBounds: Rectangle;
	protected readonly $ticker: Ticker;
	protected readonly $stageCanvas: HTMLCanvasElement;
	protected readonly $stageContext: CanvasRenderingContext2D;

	public constructor(canvas?: HTMLCanvasElement) {
		super();
		this.$scaleMode = Stage.SHOW_ALL;
		this.$stageCanvas = canvas || document.createElement('canvas');
		this.$stageContext = this.$stageCanvas.getContext('2d');
		this.$ticker = new Ticker(this);
		this.fullscreen = true;
		this.$initEvents();
		if (!canvas) {
			document.body.appendChild(this.$stageCanvas);
		}
	}

	protected $initEvents(): void {
		let resizeTimer;
		let ticker = this.$ticker;
		this.$addTouchEventListeners();
		this.on(Event.ENTER_FRAME, this.$render);
		ticker.setTimeout(() => {
			this.emit(Event.ADDED_TO_STAGE, this);
		});
		window.addEventListener('resize', () => {
			ticker.clearTimeout(resizeTimer);
			resizeTimer = ticker.setTimeout(() => {
				this.fullscreen = this.fullscreen;
			}, 100);
		});
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

	public get stageWidth(): number {
		return this.$stageCanvas.width / this.$pixelRatio;
	}

	public set stageWidth(width: number) {
		this.$fullscreen = false;
		this.$stageCanvas.width = width * this.$pixelRatio;
		this.$stageCanvas.style.width = width + 'px';
		this.$markDirty();
	}

	public get stageHeight(): number {
		return this.$stageCanvas.height / this.$pixelRatio;
	}

	public set stageHeight(height: number) {
		this.$fullscreen = false;
		this.$stageCanvas.height = height * this.$pixelRatio;
		this.$stageCanvas.style.height = height + 'px';
		this.$markDirty();
	}

	public get fullscreen(): boolean {
		return this.$fullscreen;
	}

	public set fullscreen(fullscreen: boolean) {
		if (fullscreen) {
			this.stageWidth = window.innerWidth;
			this.stageHeight = window.innerHeight;
			this.$stageCanvas.style.top = '0';
			this.$stageCanvas.style.left = '0';
			this.$stageCanvas.style.position = 'absolute';
		}
		this.$fullscreen = fullscreen;
	}

	public get scaleMode(): string {
		return this.$scaleMode;
	}

	public set scaleMode(scaleMode: string) {
		this.$scaleMode = scaleMode;
		this.$markDirty();
	}

	public get ticker(): Ticker {
		return this.$ticker;
	}

	public createResourceManager(list: Array<ResourceInfo>, options?: ResourceManagerOption): ResourceManager {
		return new ResourceManager(this.$ticker, list, options);
	}

	protected $addTouchEventListeners(): void {
		let canvas = this.$stageCanvas;
		if (canvas.ontouchstart !== undefined) {
			canvas.addEventListener('touchstart', event => {
				this.$dispatchTouches(TouchEvent.TOUCH_START, event);
				event.preventDefault();
			});
			canvas.addEventListener('touchmove', event => {
				this.$dispatchTouches(TouchEvent.TOUCH_MOVE, event);
				event.preventDefault();
			}, {passive: false});
			canvas.addEventListener('touchend', event => {
				this.$dispatchTouches(TouchEvent.TOUCH_END, event);
				this.$dispatchTouches(TouchEvent.TOUCH_TAP, event);
			});
			canvas.addEventListener('touchcancel', event => {
				this.$dispatchTouches(TouchEvent.TOUCH_CANCEL, event);
			});
		} else {
			let touching = false;
			canvas.addEventListener('mousedown', event => {
				this.$dispatchTouchEvent(TouchEvent.TOUCH_START, event);
				touching = true;
			});
			canvas.addEventListener('mousemove', event => {
				if (touching) {
					this.$dispatchTouchEvent(TouchEvent.TOUCH_MOVE, event);
				}
			});
			canvas.addEventListener('mouseup', event => {
				this.$dispatchTouchEvent(TouchEvent.TOUCH_END, event);
				touching = false;
			});
			canvas.addEventListener('click', event => {
				this.$dispatchTouchEvent(TouchEvent.TOUCH_TAP, event);
			});
		}
	}

	protected $dispatchTouches(type: string, event: Event): void {
		let touches = event['changedTouches'];
		for (let i = 0, l = touches.length; i < l; ++i) {
			this.$dispatchTouchEvent(type, touches[i]);
		}
	}

	protected $dispatchTouchEvent(type: string, touch: Touch | MouseEvent): void {
		let event = TouchEvent.create(type);
		let width = this.$canvas.width;
		let height = this.$canvas.height;
		let pixelRatio = this.$pixelRatio;
		let bounds = this.getRenderBounds();
		let stageBounds = this.$stageCanvas.getBoundingClientRect();
		let x = (touch.pageX - stageBounds.left - bounds.x / pixelRatio) * width / bounds.width - this.$anchorX;
		let y = (touch.pageY - stageBounds.top - bounds.y / pixelRatio) * height / bounds.height - this.$anchorY;
		event.targetX = event.stageX = x;
		event.targetY = event.stageY = y;
		event.identifier = touch instanceof Touch ? touch.identifier : 0;
		this.$emitTouchEvent(event);
		event.release();
	}

	protected getRenderBounds(): Rectangle {
		let bounds = this.$renderBounds = this.$renderBounds || Rectangle.create();
		if (!this.$dirty) {
			return bounds;
		}
		let x = 0;
		let y = 0;
		let canvas = this.$canvas;
		let stageCanvas = this.$stageCanvas;
		let scaleMode = this.scaleMode;
		let width = canvas.width;
		let height = canvas.height;
		let stageWidth = stageCanvas.width;
		let stageHeight = stageCanvas.height;
		let aspectRatio = width / height;
		let stageAspectRatio = stageWidth / stageHeight;
		if (scaleMode === Stage.NO_SCALE) {
		} else if (scaleMode === Stage.NO_BORDER) {
			if (aspectRatio < stageAspectRatio) {
				width = stageWidth;
				height = width / aspectRatio;
			} else {
				height = stageHeight;
				width = height * aspectRatio;
			}
			x = (stageWidth - width) / 2;
			y = (stageHeight - height) / 2;
		} else if (scaleMode === Stage.SHOW_ALL) {
			if (aspectRatio > stageAspectRatio) {
				width = stageWidth;
				height = width / aspectRatio;
			} else {
				height = stageHeight;
				width = height * aspectRatio;
			}
		} else if (scaleMode === Stage.EXACT_FIT) {
			width = stageWidth;
			height = stageHeight;
		} else if (scaleMode === Stage.FIXED_WIDTH) {
			width = stageWidth;
			height = width / aspectRatio;
		} else if (scaleMode === Stage.FIXED_HEIGHT) {
			height = stageHeight;
			width = height * aspectRatio;
		} else if (scaleMode === Stage.FIXED_WIDE) {
			if (stageWidth > stageHeight) {
				width = stageWidth;
				height = width / aspectRatio;
			} else {
				height = stageHeight;
				width = height * aspectRatio;
			}
		} else if (scaleMode === Stage.FIXED_NARROW) {
			if (stageWidth < stageHeight) {
				width = stageWidth;
				height = width / aspectRatio;
			} else {
				height = stageHeight;
				width = height * aspectRatio;
			}
		}
		if (width < stageWidth) {
			x = (stageWidth - width) / 2;
		}
		if (height < stageHeight) {
			y = (stageHeight - height) / 2;
		}
		bounds.x = x;
		bounds.y = y;
		bounds.width = width;
		bounds.height = height;
		return bounds;
	}

	protected $render(): void {
		let bounds = this.getRenderBounds();
		if (this.$dirty) {
			super.$render();
			let canvas = this.$canvas;
			let ctx = this.$stageContext;
			let stageCanvas = this.$stageCanvas;
			let stageWidth = stageCanvas.width;
			let stageHeight = stageCanvas.height;
			ctx.clearRect(0, 0, stageWidth, stageHeight);
			ctx.drawImage(canvas, bounds.x, bounds.y, bounds.width, bounds.height);
		}
	}

}