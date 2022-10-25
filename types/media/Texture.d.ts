import { Media } from './Media';
import { Stage } from '../display/Stage';
export declare class Texture extends Media {
    static defaultPixelRatio: number;
    pixelRatio: number;
    protected readonly $element: HTMLImageElement;
    constructor(stage: Stage, url?: string);
    get element(): HTMLImageElement;
    get width(): number;
    get height(): number;
}
