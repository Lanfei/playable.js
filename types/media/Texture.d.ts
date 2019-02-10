import { Media } from './Media';
import { Stage } from '../display/Stage';
export declare class Texture extends Media {
    static SCALE: FillMode;
    static REPEAT: FillMode;
    static REPEAT_X: FillMode;
    static REPEAT_Y: FillMode;
    static NO_REPEAT: FillMode;
    static defaultPixelRatio: number;
    pixelRatio: number;
    protected readonly $element: HTMLImageElement;
    constructor(stage: Stage);
    readonly element: HTMLImageElement;
    readonly width: number;
    readonly height: number;
}
export declare type FillMode = 'scale' | 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';
