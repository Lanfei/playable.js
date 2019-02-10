import { Stage } from '../display/Stage';
import { EventEmitter } from '../event/EventEmitter';
export declare class Media extends EventEmitter {
    protected readonly $element: HTMLImageElement | HTMLAudioElement;
    protected readonly $stage: Stage;
    protected readonly $boundOnLoad: () => void;
    protected readonly $boundOnError: (e: ErrorEvent) => void;
    protected constructor(stage: Stage);
    readonly element: HTMLImageElement | HTMLAudioElement;
    url: string;
    protected $onLoad(): void;
    protected $onError(e: ErrorEvent): void;
}
