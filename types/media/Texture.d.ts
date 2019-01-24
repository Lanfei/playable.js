import { Media } from './Media';
import { Stage } from '../display/Stage';
export declare class Texture extends Media {
    static defaultPixelRatio: number;
    pixelRatio: number;
    protected $element: HTMLImageElement;
    constructor(stage: Stage);
    readonly element: HTMLImageElement;
    width: number;
    height: number;
}
