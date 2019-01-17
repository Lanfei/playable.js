import Stage from './Stage';
import Layer from './Layer';
import Ease from '../tween/Ease';
import Tween from '../tween/Tween';
import Matrix from '../geom/Matrix';
import TouchEvent from '../event/TouchEvent';

export default class ScrollView extends Layer {

	protected static scrollingView: ScrollView;

	protected $scrollTop: number = 0;
	protected $scrollLeft: number = 0;
	protected $scrollWidth: number = 0;
	protected $scrollHeight: number = 0;
	protected $touchingX: number = null;
	protected $touchingY: number = null;
	protected $touchingId: number = null;
	protected $touchingTime: number = null;
	protected $velocitiesX: Array<number> = [];
	protected $velocitiesY: Array<number> = [];
	protected $inertiaTween: Tween = null;

	public constructor() {
		super();
		this.width = 200;
		this.height = 200;
		this.on(TouchEvent.TOUCH_START, this.$onTouchStart);
		this.on(TouchEvent.TOUCH_MOVE, this.$onTouchMove);
		this.on(TouchEvent.TOUCH_END, this.$onTouchEnd);
		this.on(TouchEvent.TOUCH_CANCEL, this.$onTouchCancel);
	}

	public get scrollTop(): number {
		return this.$scrollTop;
	}

	public set scrollTop(scrollTop: number) {
		let bounds = this.$getContentBounds();
		let maxScrollTop = this.$scrollHeight - this.$height;
		scrollTop = Math.max(0, Math.min(scrollTop, maxScrollTop));
		if (scrollTop !== this.$scrollTop) {
			this.$scrollTop = scrollTop;
			this.$markDirty();
		}
		bounds.release();
	}

	public get scrollLeft(): number {
		return this.$scrollLeft;
	}

	public set scrollLeft(scrollLeft: number) {
		let bounds = this.$getContentBounds();
		let maxScrollLeft = this.$scrollWidth - this.width;
		scrollLeft = Math.max(0, Math.min(scrollLeft, maxScrollLeft));
		if (scrollLeft !== this.$scrollLeft) {
			this.$scrollLeft = scrollLeft;
			this.$markDirty();
		}
		bounds.release();
	}

	protected $getChildTransform(child: Layer): Matrix {
		let matrix = super.$getChildTransform(child);
		matrix.translate(-this.$scrollLeft, -this.$scrollTop);
		return matrix;
	}

	protected $resizeCanvas(): void {
		super.$resizeCanvas();
		let bounds = this.$getContentBounds();
		this.$scrollWidth = this.$scrollLeft + bounds.right + this.$anchorX;
		this.$scrollHeight = this.$scrollTop + bounds.bottom + this.$anchorY;
		this.scrollTop = this.$scrollTop;
		this.scrollLeft = this.$scrollLeft;
	}

	protected $onTouchStart(e: TouchEvent): void {
		this.$touchingX = e.localX;
		this.$touchingY = e.localY;
		this.$velocitiesX.length = 0;
		this.$velocitiesY.length = 0;
		this.$touchingTime = Date.now();
		this.$touchingId = e.identifier;
		if (this.$inertiaTween) {
			this.$inertiaTween.pause();
			this.$inertiaTween = null;
		}
	}

	protected $onTouchMove(e: TouchEvent): void {
		if (e.identifier !== this.$touchingId) {
			return;
		}
		let now = Date.now();
		let scrollTop = this.scrollTop;
		let scrollLeft = this.scrollLeft;
		let dt = now - this.$touchingTime;
		let velocitiesX = this.$velocitiesX;
		let velocitiesY = this.$velocitiesY;
		let offsetX = e.localX - this.$touchingX;
		let offsetY = e.localY - this.$touchingY;
		let scrollingView = ScrollView.scrollingView || this;
		velocitiesX.push(offsetX / dt);
		velocitiesY.push(offsetY / dt);
		if (velocitiesX.length > 5) {
			velocitiesX.shift();
			velocitiesY.shift();
		}
		this.$touchingX = e.localX;
		this.$touchingY = e.localY;
		if (scrollingView === this) {
			this.$touchingTime = now;
			this.scrollTop -= offsetY;
			this.scrollLeft -= offsetX;
			if (this.$scrollLeft !== scrollLeft || this.$scrollTop !== scrollTop) {
				ScrollView.scrollingView = this;
			}
		}
	}

	protected $onTouchEnd(e: TouchEvent): void {
		if (e.identifier !== this.$touchingId) {
			return;
		}
		if (ScrollView.scrollingView === this) {
			ScrollView.scrollingView = null;
		} else {
			return;
		}
		let sumVelocityX = 0;
		let sumVelocityY = 0;
		let scrollTop = this.$scrollTop;
		let scrollLeft = this.$scrollLeft;
		let velocitiesX = this.$velocitiesX;
		let velocitiesY = this.$velocitiesY;
		let numVelocities = velocitiesX.length;
		for (let i = 0; i < numVelocities; ++i) {
			sumVelocityX += velocitiesX[i];
			sumVelocityY += velocitiesY[i];
		}
		let velocityX = sumVelocityX / numVelocities;
		let velocityY = sumVelocityY / numVelocities;
		let absVelocityX = Math.abs(velocityX);
		let absVelocityY = Math.abs(velocityY);
		if (absVelocityX > 0.01 || absVelocityY > 0.01) {
			let duration = Math.max(absVelocityX, absVelocityY, 1) * 1000;
			this.$inertiaTween = Tween.get(this).to({
				scrollTop: scrollTop - velocityY * (absVelocityY + 1) * 200,
				scrollLeft: scrollLeft - velocityX * (absVelocityX + 1) * 200
			}, duration, Ease.easeOutQuart).play();
		}
		this.$touchingId = null;
	}

	protected $onTouchCancel(e: TouchEvent): void {
		if (e.identifier === this.$touchingId) {
			this.$touchingId = null;
		}
	}

	protected $onRemovedFromStage(stage: Stage): void {
		super.$onRemovedFromStage(stage);
		if (this.$inertiaTween) {
			this.$inertiaTween.pause();
		}
	}

}
