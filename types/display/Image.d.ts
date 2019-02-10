import { Layer } from './Layer';
import { Texture } from '../media/Texture';
import { Rectangle } from '../geom/Rectangle';
export declare class Image extends Layer {
    protected $texture: Texture;
    protected $clipRect: Rectangle;
    protected $scale9Grid: Rectangle;
    protected readonly $boundOnTextureLoad: () => void;
    constructor(texture?: Texture);
    constructor(texture: Texture, width: number, height: number);
    texture: Texture;
    clipRect: Rectangle;
    scale9Grid: Rectangle;
    protected $onTextureLoad(): void;
    protected $getContentBounds(): Rectangle;
    protected $drawTexture(sourceX: number, sourceY: number, sourceW: number, sourceH: number, targetX: number, targetY: number, targetW: number, targetH: number): void;
    protected $render(): number;
}
