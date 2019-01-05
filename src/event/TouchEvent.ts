import Event from './Event';
import Layer from '../display/Layer';

export default class TouchEvent extends Event {

	public static readonly TOUCH_START: string = 'touchStart';
	public static readonly TOUCH_MOVE: string = 'touchMove';
	public static readonly TOUCH_END: string = 'touchEnd';
	public static readonly TOUCH_CANCEL: string = 'touchCancel';
	public static readonly TOUCH_TAP: string = 'touchTap';

	public target: Layer;
	public currentTarget: Layer;
	public targetX: number;
	public targetY: number;
	public localX: number;
	public localY: number;
	public stageX: number;
	public stageY: number;
	public identifier: number;
	public propagationStopped: boolean;

	public constructor(type: string) {
		super(type);
		this.$init(type);
	}

	protected $init(type: string): this {
		this.type = type;
		this.targetX = 0;
		this.targetY = 0;
		this.stageX = 0;
		this.stageY = 0;
		this.identifier = 0;
		this.target = null;
		this.currentTarget = null;
		this.propagationStopped = false;
		return this;
	}

	public stopPropagation() {
		this.propagationStopped = true;
	}

	public release(): void {
		TouchEvent.recycle(this);
	}

	private static readonly $pool: Array<TouchEvent> = [];

	public static create(type: string): TouchEvent {
		let pool = this.$pool;
		if (pool.length > 0) {
			return pool.pop().$init(type);
		} else {
			return new TouchEvent(type);
		}
	}

	public static recycle(e: TouchEvent) {
		this.$pool.push(e);
	}

}