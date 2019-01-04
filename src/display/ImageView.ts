import Image from '../media/Image';
import DisplayObject from './DisplayObject';

export default class ImageView extends DisplayObject {

	protected $image: Image;
	private readonly $boundOnImageLoad: () => void;

	public constructor(image?: Image);
	public constructor(image: Image, width: number, height: number);
	public constructor(image?: Image, width?: number, height?: number) {
		super();
		if (image) {
			this.$width = width || image.width;
			this.$height = height || image.height;
			this.image = image;
			this.$boundOnImageLoad = this.$onImageLoad.bind(this);
		}
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

	public get image(): Image {
		return this.$image;
	}

	protected $onImageLoad() {
		let image = this.$image;
		this.$width = this.$width || image.width;
		this.$height = this.$height || image.height;
		this.$resizeCanvas();
		image.off('load', this.$boundOnImageLoad);
	}

	protected $render(): void {
		if (!this.$dirty) {
			return;
		}
		super.$render();
		let image = this.$image;
		let ctx = this.$context;
		let canvas = this.$canvas;
		let pixelRatio = this.$pixelRatio;
		let anchorX = this.$anchorX * pixelRatio;
		let anchorY = this.$anchorY * pixelRatio;
		ctx.drawImage(image.element, -anchorX, -anchorY, canvas.width, canvas.height);
	}

}