import Media from './Media';
import Ticker from '../core/Ticker';

export default class Image extends Media {

	protected $element: HTMLImageElement;

	public constructor(ticker: Ticker) {
		super(ticker);
		let image = document.createElement('img');
		image.crossOrigin = '*';
		image.addEventListener('load', this.$boundOnLoad);
		image.addEventListener('error', this.$boundOnError);
		this.$element = image;
	}

	public get element(): HTMLImageElement {
		return this.$element;
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