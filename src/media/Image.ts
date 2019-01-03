import Media from './Media';

export default class Image extends Media {

	protected $element: HTMLImageElement;

	public constructor() {
		super();
		let image = document.createElement('img');
		image.addEventListener('load', this.$boundOnLoad);
		image.addEventListener('error', this.$boundOnError);
		this.$element = image;
	}

	public get width(): number {
		return this.$element.width;
	}

	public set width(width: number) {
		this.$element.width = width;
	}

	public get height(): number {
		return this.$element.height;
	}

	public set height(height: number) {
		this.$element.height = height;
	}

}