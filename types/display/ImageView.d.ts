import Layer from './Layer';
import Image from '../media/Image';
export default class ImageView extends Layer {
    protected $image: Image;
    private readonly $boundOnImageLoad;
    constructor(image?: Image);
    constructor(image: Image, width: number, height: number);
    image: Image;
    protected $onImageLoad(): void;
    protected $render(): number;
}
