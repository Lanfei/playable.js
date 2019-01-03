import Event from "../event/Event";
import EventEmitter from "../event/EventEmitter";
export default class Media extends EventEmitter {
    protected $element: HTMLImageElement | HTMLAudioElement;
    protected $boundOnLoad: () => void;
    protected $boundOnError: (e: Event) => void;
    constructor();
    readonly element: HTMLImageElement | HTMLAudioElement;
    url: string;
    protected $onLoad(): void;
    protected $onError(e: Event): void;
}
