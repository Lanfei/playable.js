import Stage from '../display/Stage';
import Event from '../event/Event';
import EventEmitter from '../event/EventEmitter';

export default class Media extends EventEmitter {

	protected $element: HTMLImageElement | HTMLAudioElement;

	protected $stage: Stage;
	protected $boundOnLoad: () => void;
	protected $boundOnError: (e: Event) => void;

	public constructor(stage: Stage) {
		super();
		this.$stage = stage;
		this.$boundOnLoad = this.$onLoad.bind(this);
		this.$boundOnError = this.$onError.bind(this);
	}

	public get element(): HTMLImageElement | HTMLAudioElement {
		return this.$element;
	}

	public set url(url: string) {
		this.$element.src = url;
	}

	protected $onLoad(): void {
		this.emit('load');
		this.$element.removeEventListener(Event.LOAD, this.$boundOnLoad);
	}

	protected $onError(e: Event): void {
		this.emit('error', e);
		this.$element.removeEventListener(Event.ERROR, this.$boundOnError);
	}

}