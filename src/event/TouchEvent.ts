import Event from './Event';
import DisplayObject from '../display/DisplayObject';

export default class TouchEvent extends Event {

	public static TOUCH_START: string = 'touchStart';
	public static TOUCH_MOVE: string = 'touchMove';
	public static TOUCH_END: string = 'touchEnd';
	public static TOUCH_CANCEL: string = 'touchCancel';
	public static TOUCH_TAP: string = 'touchTap';

	public targetX: number;
	public targetY: number;
	public localX: number;
	public localY: number;
	public stageX: number;
	public stageY: number;
	public identifier: number;
	public target: DisplayObject;
	public currentTarget: DisplayObject;
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

	private static $pool: Array<TouchEvent> = [];

	public static create(type: string): TouchEvent {
		let pool = this.$pool;
		if (pool.length > 0) {
			return pool.pop().$init(type);
		} else {
			return new TouchEvent(type);
		}
	}

	public static recycle(displayObject: TouchEvent) {
		this.$pool.push(displayObject);
	}

}