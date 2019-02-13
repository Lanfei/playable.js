import {Stage} from '../display/Stage';
import {Event} from '../event/Event';
import {EventEmitter} from '../event/EventEmitter';

export class Media extends EventEmitter {

	protected readonly $element: HTMLImageElement | HTMLAudioElement;

	protected $loaded: boolean = false;
	protected $errored: boolean = false;
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
		this.$loaded = false;
		this.$errored = false;
		this.$element.src = url;
	}

	public on(type: string, listener: (...args: any[]) => void): this {
		super.on(type, listener);
		if (type === Event.LOAD && this.$loaded) {
			let event = Event.create(type);
			listener.call(this, event);
			event.release();
		} else if (type === Event.ERROR && this.$errored) {
			let event = Event.create(type);
			listener.call(this, event);
			event.release();
		}
		return this;
	}

	protected $onLoad(): void {
		this.$loaded = true;
		this.emit(Event.LOAD);
		this.$element.removeEventListener(Event.LOAD, this.$boundOnLoad);
	}

	protected $onError(): void {
		this.$errored = true;
		this.emit(Event.ERROR);
		this.$element.removeEventListener(Event.ERROR, this.$boundOnError);
	}

}
