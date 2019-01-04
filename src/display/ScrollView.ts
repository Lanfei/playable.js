import DisplayObject from './DisplayObject';

export default class ScrollView extends DisplayObject {

	protected $scrollX: number = 0;
	protected $scrollY: number = 0;
	protected readonly $scrollCanvas: HTMLCanvasElement;
	protected readonly $scrollContext: CanvasRenderingContext2D;

	public constructor() {
		super();
		this.$scrollCanvas = document.createElement('canvas');
		this.$scrollContext = this.$scrollCanvas.getContext('2d');
	}

	protected $render(): void {
		if (!this.dirty) {
			return;
		}
	}

}
