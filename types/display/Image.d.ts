import { Layer } from './Layer';
import { Texture } from '../media/Texture';
import { Rectangle } from '../geom/Rectangle';
export declare class Image extends Layer {
    static SCALE: FillMode;
    static REPEAT: FillMode;
    static REPEAT_X: FillMode;
    static REPEAT_Y: FillMode;
    protected $texture: Texture;
    protected $fillMode: FillMode;
    protected $clipRect: Rectangle;
    protected $scale9Grid: Rectangle;
    protected $pattern: CanvasPattern;
    protected readonly $boundOnTextureLoad: () => void;
    constructor(texture?: Texture);
    constructor(texture: Texture, width: number, height: number);
    texture: Texture;
    fillMode: FillMode;
    clipRect: Rectangle;
    scale9Grid: Rectangle;
    protected $onTextureLoad(): void;
    protected $updatePattern(): void;
    protected $getContentBounds(): Rectangle;
    protected $drawPattern(targetX: any, targetY: any, targetW: any, targetH: any): void;
    protected $drawTexture(sourceX: number, sourceY: number, sourceW: number, sourceH: number, targetX: number, targetY: number, targetW: number, targetH: number): void;
    protected $render(): number;
}
export declare type FillMode = 'scale' | 'repeat' | 'repeat-x' | 'repeat-y';
