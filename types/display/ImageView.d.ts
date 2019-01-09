import Layer from './Layer';
import Image from '../media/Image';
import Rectangle from '../geom/Rectangle';
export default class ImageView extends Layer {
    protected $image: Image;
    protected $smoothing: boolean;
    protected $clipRect: Rectangle;
    protected $scale9Grid: Rectangle;
    private readonly $boundOnImageLoad;
    constructor(image?: Image);
    constructor(image: Image, width: number, height: number);
    image: Image;
    smoothing: boolean;
    clipRect: Rectangle;
    scale9Grid: Rectangle;
    protected $onImageLoad(): void;
    protected $resizeCanvas(): void;
    protected $drawImage(sourceX: number, sourceY: number, sourceW: number, sourceH: number, targetX: number, targetY: number, targetW: number, targetH: number): void;
    protected $render(): number;
}
