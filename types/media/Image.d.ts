import Media from './Media';
import Ticker from '../core/Ticker';
export default class Image extends Media {
    protected $element: HTMLImageElement;
    constructor(ticker: Ticker);
    width: number;
    height: number;
}
