import Layer from './Layer';
import Ease from '../tween/Ease';
import Tween from '../tween/Tween';
import Matrix from '../geom/Matrix';
import TouchEvent from '../event/TouchEvent';

export default class ScrollView extends Layer {

	protected $scrollX: number = 0;
	protected $scrollY: number = 0;
	protected $scrollWidth: number = 0;
	protected $scrollHeight: number = 0;
	protected $touchingX: number = 0;
	protected $touchingY: number = 0;
	protected $touchingTime: number = 0;
	protected $velocitiesX: Array<number> = [];
	protected $velocitiesY: Array<number> = [];
	protected $inertiaTween: Tween = null;

	public constructor() {
		super();
		this.width = 400;
		this.height = 400;
		this.on(TouchEvent.TOUCH_START, this.$onTouchStart);
		this.on(TouchEvent.TOUCH_MOVE, this.$onTouchMove);
		this.on(TouchEvent.TOUCH_END, this.$onTouchEnd);
	}

	public get scrollX(): number {
		return this.$scrollX;
	}

	public set scrollX(scrollX: number) {
		let bounds = this.$getContentBounds();
		let maxScrollX = this.$scrollWidth - this.width;
		this.$scrollX = Math.max(0, Math.min(scrollX, maxScrollX));
		this.$markDirty();
		bounds.release();
	}

	public get scrollY(): number {
		return this.$scrollY;
	}

	public set scrollY(scrollY: number) {
		let bounds = this.$getContentBounds();
		let maxScrollY = this.$scrollHeight - this.$height;
		this.$scrollY = Math.max(0, Math.min(scrollY, maxScrollY));
		this.$markDirty();
		bounds.release();
	}

	protected $getChildTransform(child: Layer): Matrix {
		let matrix = super.$getChildTransform(child);
		matrix.translate(-this.$scrollX, -this.$scrollY);
		return matrix;
	}

	protected $resizeCanvas(): void {
		super.$resizeCanvas();
		let bounds = this.$getContentBounds();
		this.$scrollWidth = this.$scrollX + bounds.right;
		this.$scrollHeight = this.$scrollY + bounds.bottom;
	}

	protected $onTouchStart(e: TouchEvent): void {
		this.$touchingX = e.localX;
		this.$touchingY = e.localY;
		this.$velocitiesX.length = 0;
		this.$velocitiesY.length = 0;
		if (this.$inertiaTween) {
			this.$inertiaTween.pause();
			this.$inertiaTween = null;
		}
	}

	protected $onTouchMove(e: TouchEvent): void {
		let now = Date.now();
		let dt = now - this.$touchingTime;
		let velocitiesX = this.$velocitiesX;
		let velocitiesY = this.$velocitiesY;
		let offsetX = e.localX - this.$touchingX;
		let offsetY = e.localY - this.$touchingY;
		velocitiesX.push(offsetX / dt);
		velocitiesY.push(offsetY / dt);
		if (velocitiesX.length > 5) {
			velocitiesX.shift();
			velocitiesY.shift();
		}
		this.scrollX -= offsetX;
		this.scrollY -= offsetY;
		this.$touchingX = e.localX;
		this.$touchingY = e.localY;
		this.$touchingTime = now;
	}

	protected $onTouchEnd(): void {
		let scrollX = this.$scrollX;
		let scrollY = this.$scrollY;
		let sumVelocityX = 0;
		let sumVelocityY = 0;
		let velocitiesX = this.$velocitiesX;
		let velocitiesY = this.$velocitiesY;
		let numVelocities = velocitiesX.length;
		for (let i = 0; i < numVelocities; ++i) {
			sumVelocityX += velocitiesX[i];
			sumVelocityY += velocitiesY[i];
		}
		let velocityX = sumVelocityX / numVelocities;
		let velocityY = sumVelocityY / numVelocities;
		if (velocityX > 0.05 || velocityY > 0.05) {
			let duration = Math.max(Math.abs(velocityX), Math.abs(velocityY), 1) * 1000;
			this.$inertiaTween = Tween.get(this).to({
				scrollX: scrollX - velocityX * (Math.abs(velocityX) + 1) * 200,
				scrollY: scrollY - velocityY * (Math.abs(velocityY) + 1) * 200
			}, duration, Ease.easeOutQuart).play();
		}
	}

}
