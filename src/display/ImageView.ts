import Layer from './Layer';
import Image from '../media/Image';
import Rectangle from '../geom/Rectangle';

export default class ImageView extends Layer {

	protected $image: Image;
	protected $smoothing: boolean;
	protected $clipRect: Rectangle;
	protected $scale9Grid: Rectangle;
	private readonly $boundOnImageLoad: () => void;

	public constructor(image?: Image);
	public constructor(image: Image, width: number, height: number);
	public constructor(image?: Image, width?: number, height?: number) {
		super();
		if (image) {
			this.$width = width || image.width;
			this.$height = height || image.height;
			this.$boundOnImageLoad = this.$onImageLoad.bind(this);
			this.image = image;
		}
	}

	public get image(): Image {
		return this.$image;
	}

	public set image(image: Image) {
		this.$image = image;
		this.$width = this.$width || image.width;
		this.$height = this.$height || image.height;
		this.$resizeCanvas();
		if (!this.$width && !this.$height) {
			image.on('load', this.$boundOnImageLoad);
		}
	}

	public get smoothing(): boolean {
		return this.$smoothing;
	}

	public set smoothing(smoothing: boolean) {
		this.$smoothing = smoothing;
		this.$resizeCanvas();
	}

	public get clipRect(): Rectangle {
		return this.$clipRect;
	}

	public set clipRect(clipRect: Rectangle) {
		this.$clipRect = clipRect;
		this.$markDirty();
	}

	public get scale9Grid(): Rectangle {
		return this.$scale9Grid;
	}

	public set scale9Grid(scale9Grid: Rectangle) {
		this.$scale9Grid = scale9Grid;
		this.$markDirty();
	}

	protected $onImageLoad() {
		let image = this.$image;
		this.$width = this.$width || image.width;
		this.$height = this.$height || image.height;
		this.$resizeCanvas();
		image.off('load', this.$boundOnImageLoad);
	}

	protected $resizeCanvas(): void {
		super.$resizeCanvas();
		this.$context.imageSmoothingEnabled = this.$smoothing;
	}

	protected $drawImage(sourceX: number, sourceY: number, sourceW: number, sourceH: number, targetX: number, targetY: number, targetW: number, targetH: number): void {
		let image = this.$image;
		let ctx = this.$context;
		if (sourceW > 0 && sourceH > 0 && targetW > 0 && targetH > 0) {
			ctx.drawImage(image.element, sourceX, sourceY, sourceW, sourceH, targetX, targetY, targetW, targetH);
		}
	}

	protected $render(): number {
		if (!this.$dirty) {
			return 0;
		}
		let image = this.$image;
		let canvas = this.$canvas;
		let anchorX = this.$anchorX;
		let anchorY = this.$anchorY;
		let clipRect = this.$clipRect;
		let scale9Grid = this.$scale9Grid;
		let drawCalls = super.$render();
		let pixelRatio = Layer.pixelRatio;
		let x = -anchorX * pixelRatio;
		let y = -anchorY * pixelRatio;
		let width = canvas.width;
		let height = canvas.height;
		let clipX = clipRect ? clipRect.x : 0;
		let clipY = clipRect ? clipRect.y : 0;
		let clipWidth = clipRect ? clipRect.width : image.width;
		let clipHeight = clipRect ? clipRect.height : image.height;
		if (scale9Grid) {
			let sourceX0 = clipX;
			let sourceY0 = clipY;
			let sourceW0 = scale9Grid.x;
			let sourceH0 = scale9Grid.y;
			let sourceX1 = sourceX0 + sourceW0;
			let sourceY1 = sourceY0 + sourceH0;
			let sourceW1 = scale9Grid.width;
			let sourceH1 = scale9Grid.height;
			let sourceX2 = sourceX1 + sourceW1;
			let sourceY2 = sourceY1 + sourceH1;
			let sourceW2 = clipWidth - sourceW0 - sourceW1;
			let sourceH2 = clipHeight - sourceH0 - sourceH1;
			let targetX0 = -anchorX * pixelRatio;
			let targetY0 = -anchorY * pixelRatio;
			let targetW0 = sourceW0 * pixelRatio;
			let targetH0 = sourceH0 * pixelRatio;
			let targetX1 = targetX0 + sourceW0 * pixelRatio;
			let targetY1 = targetY0 + sourceH1 * pixelRatio;
			let targetW1 = width - (sourceW0 + sourceW2) * pixelRatio;
			let targetH1 = height - (sourceH0 + sourceH2) * pixelRatio;
			let targetX2 = targetX1 + targetW1;
			let targetY2 = targetY1 + targetH1;
			let targetW2 = width - targetW0 - targetW1;
			let targetH2 = height - targetH0 - targetH1;
			this.$drawImage(sourceX0, sourceY0, sourceW0, sourceH0, targetX0, targetY0, targetW0, targetH0);
			this.$drawImage(sourceX1, sourceY0, sourceW1, sourceH0, targetX1, targetY0, targetW1, targetH0);
			this.$drawImage(sourceX2, sourceY0, sourceW2, sourceH0, targetX2, targetY0, targetW2, targetH0);
			this.$drawImage(sourceX0, sourceY1, sourceW0, sourceH1, targetX0, targetY1, targetW0, targetH1);
			this.$drawImage(sourceX1, sourceY1, sourceW1, sourceH1, targetX1, targetY1, targetW1, targetH1);
			this.$drawImage(sourceX2, sourceY1, sourceW2, sourceH1, targetX2, targetY1, targetW2, targetH1);
			this.$drawImage(sourceX0, sourceY2, sourceW0, sourceH2, targetX0, targetY2, targetW0, targetH2);
			this.$drawImage(sourceX1, sourceY2, sourceW1, sourceH2, targetX1, targetY2, targetW1, targetH2);
			this.$drawImage(sourceX2, sourceY2, sourceW2, sourceH2, targetX2, targetY2, targetW2, targetH2);
		} else {
			this.$drawImage(clipX, clipY, clipWidth, clipHeight, x, y, width, height);
		}
		return drawCalls;
	}

}