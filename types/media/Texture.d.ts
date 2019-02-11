import { Media } from './Media';
import { Stage } from '../display/Stage';
export declare class Texture extends Media {
    static defaultPixelRatio: number;
    pixelRatio: number;
    protected readonly $element: HTMLImageElement;
    constructor(stage: Stage);
    readonly element: HTMLImageElement;
    readonly width: number;
    readonly height: number;
}
