import Ticker from "../core/Ticker";
import Event from "../event/Event";
import TouchEvent from "../event/TouchEvent";
import DisplayObject from "./DisplayObject";
import ResourceManager, {ResourceInfo, ResourceManagerOption} from "../net/ResourceManager";

export default class Stage extends DisplayObject {

	protected readonly $ticker: Ticker;
	protected readonly $stageCanvas: HTMLCanvasElement;
	protected readonly $stageContext: CanvasRenderingContext2D;

	public constructor(canvas?: HTMLCanvasElement) {
		super();
		this.$stageCanvas = canvas || document.createElement('canvas');
		this.$stageContext = this.$stageCanvas.getContext('2d');
		this.$initStageSize();
		this.$addTouchEventListeners();
		this.$ticker = new Ticker(this);
		this.$ticker.setTimeout(() => {
			this.emit(Event.ADDED_TO_STAGE, this);
		});
		this.on(Event.ENTER_FRAME, this.$render);
		if (!canvas) {
			document.body.appendChild(this.$stageCanvas);
		}
	}

	public get stageWidth(): number {
		return this.$stageCanvas.width / this.$pixelRatio;
	}

	public set stageWidth(width: number) {
		this.$stageCanvas.width = width * this.$pixelRatio;
		this.$stageCanvas.style.width = width + 'px';
	}

	public get stageHeight(): number {
		return this.$stageCanvas.height / this.$pixelRatio;
	}

	public set stageHeight(height: number) {
		this.$stageCanvas.height = height * this.$pixelRatio;
		this.$stageCanvas.style.height = height + 'px';
	}

	public get ticker(): Ticker {
		return this.$ticker;
	}

	public createResourceManager(list: Array<ResourceInfo>, options?: ResourceManagerOption): ResourceManager {
		return new ResourceManager(this.$ticker, list, options);
	}

	protected $initStageSize(): void {
		this.stageWidth = window.innerWidth;
		this.stageHeight = window.innerHeight;
	}

	protected $addTouchEventListeners(): void {
		let canvas = this.$stageCanvas;
		canvas.addEventListener('touchstart', event => {
			this.$dispatchTouches(TouchEvent.TOUCH_START, event);
		});
		canvas.addEventListener('touchmove', event => {
			this.$dispatchTouches(TouchEvent.TOUCH_MOVE, event);
			event.preventDefault();
		}, {passive: false});
		canvas.addEventListener('touchend', event => {
			this.$dispatchTouches(TouchEvent.TOUCH_TAP, event);
			this.$dispatchTouches(TouchEvent.TOUCH_END, event);
		});
		canvas.addEventListener('touchcancel', event => {
			this.$dispatchTouches(TouchEvent.TOUCH_CANCEL, event);
		});
	}

	protected $dispatchTouches(type: string, event: Event): void {
		let touches = event['changedTouches'];
		for (let i = 0, l = touches.length; i < l; ++i) {
			this.$dispatchTouchEvent(type, touches[i]);
		}
	}

	protected $dispatchTouchEvent(type: string, touch: Touch | MouseEvent): void {
		let event = TouchEvent.create(type);
		let bounds = this.$stageCanvas.getBoundingClientRect();
		event.targetX = event.stageX = touch.pageX - bounds.left - this.$anchorX;
		event.targetY = event.stageY = touch.pageY - bounds.top - this.$anchorY;
		event.identifier = touch instanceof Touch ? touch.identifier : 0;
		this.$emitTouchEvent(event);
		event.release();
	}

	protected $render(): void {
		if (this.$dirty) {
			super.$render();
			let pixelRatio = this.$pixelRatio;
			let x = this.$x * pixelRatio;
			let y = this.$y * pixelRatio;
			let width = this.$width * pixelRatio;
			let height = this.$height * pixelRatio;
			let canvas = this.$canvas;
			let context = this.$stageContext;
			context.clearRect(x, y, width, height);
			context.drawImage(canvas, x, y);
		}
	}

}