import { Stage } from '../display/Stage';
import { EventEmitter } from '../event/EventEmitter';
export declare class Media extends EventEmitter {
    protected readonly $element: HTMLImageElement | HTMLAudioElement;
    protected $loaded: boolean;
    protected $errored: boolean;
    protected readonly $stage: Stage;
    protected readonly $boundOnLoad: () => void;
    protected readonly $boundOnError: (e: ErrorEvent) => void;
    protected constructor(stage: Stage);
    get element(): HTMLImageElement | HTMLAudioElement;
    get url(): string;
    set url(url: string);
    on(type: string, listener: (...args: any[]) => void): this;
    protected $onLoad(): void;
    protected $onError(): void;
}
