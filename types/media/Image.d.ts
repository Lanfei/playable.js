import Media from './Media';
import Ticker from '../core/Ticker';
export default class Image extends Media {
    static defaultPixelRatio: number;
    pixelRatio: number;
    protected $element: HTMLImageElement;
    constructor(ticker: Ticker);
    readonly element: HTMLImageElement;
    width: number;
    height: number;
}
