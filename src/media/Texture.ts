import {Media} from './Media';
import {Stage} from '../display/Stage';

export class Texture extends Media {

	public static defaultPixelRatio: number = 1;

	public pixelRatio: number = Texture.defaultPixelRatio;

	protected readonly $element: HTMLImageElement;

	public constructor(stage: Stage) {
		super(stage);
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
		return this.$element.width / this.pixelRatio;
	}

	public get height(): number {
		return this.$element.height / this.pixelRatio;
	}

}
