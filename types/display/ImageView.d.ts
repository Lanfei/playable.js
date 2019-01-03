import DisplayObject from "./DisplayObject";
import Image from "../media/Image";
export default class ImageView extends DisplayObject {
    protected $image: Image;
    private readonly $boundOnImageLoad;
    constructor(image?: Image);
    constructor(image: Image, width: number, height: number);
    image: Image;
    protected $onImageLoad(): void;
    protected $render(): void;
}
