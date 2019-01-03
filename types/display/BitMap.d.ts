import DisplayObject from "./DisplayObject";
export default class BitMap extends DisplayObject {
    protected $image: HTMLImageElement;
    private readonly $imageLoadCallback;
    constructor(image?: HTMLImageElement | string);
    constructor(image: HTMLImageElement | string, width: number, height: number);
    image: HTMLImageElement;
    protected $onImageLoad(): void;
    protected $render(): void;
}
