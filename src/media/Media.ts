import {Stage} from '../display/Stage';
import {Event} from '../event/Event';
import {EventEmitter} from '../event/EventEmitter';

export class Media extends EventEmitter {

	protected readonly $element: HTMLImageElement | HTMLAudioElement;

	protected readonly $stage: Stage;
	protected readonly $boundOnLoad: () => void;
	protected readonly $boundOnError: (e: ErrorEvent) => void;

	protected constructor(stage: Stage) {
		super();
		this.$stage = stage;
		this.$boundOnLoad = this.$onLoad.bind(this);
		this.$boundOnError = this.$onError.bind(this);
	}

	public get element(): HTMLImageElement | HTMLAudioElement {
		return this.$element;
	}

	public get url(): string {
		return this.$element.src || '';
	}

	public set url(url: string) {
		this.$element.src = url;
	}

	protected $onLoad(): void {
		this.emit(Event.LOAD);
		this.$element.removeEventListener(Event.LOAD, this.$boundOnLoad);
	}

	protected $onError(e: ErrorEvent): void {
		this.emit(Event.ERROR, e);
		this.$element.removeEventListener(Event.ERROR, this.$boundOnError);
	}

}
