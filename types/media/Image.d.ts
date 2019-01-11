import Media from './Media';
import Stage from '../display/Stage';
export default class Image extends Media {
    static defaultPixelRatio: number;
    pixelRatio: number;
    protected $element: HTMLImageElement;
    constructor(stage: Stage);
    readonly element: HTMLImageElement;
    width: number;
    height: number;
}
