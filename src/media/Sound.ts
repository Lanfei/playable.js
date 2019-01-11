import Media from './Media';
import Event from '../event/Event';
import Stage from '../display/Stage';

export default class Sound extends Media {

	protected $loops: number = 1;
	protected $startTime: number = 0;
	protected $paused: boolean = false;
	protected $element: HTMLAudioElement;
	protected $boundOnTouch: () => void;

	public constructor(stage: Stage) {
		super(stage);
		let audio = document.createElement('audio');
		audio.crossOrigin = '*';
		audio.addEventListener('canplaythrough', this.$boundOnLoad);
		audio.addEventListener('error', this.$boundOnError);
		audio.addEventListener('ended', this.$onEnded.bind(this));
		this.$element = audio;
		this.$boundOnTouch = this.$onTouch.bind(this);
		stage.ticker.on(Event.TICKER_PAUSE, this.$onTickerPause.bind(this));
		stage.ticker.on(Event.TICKER_RESUME, this.$onTickerResume.bind(this));
	}

	public get element(): HTMLAudioElement {
		return this.$element;
	}

	public set url(url: string) {
		this.$paused = true;
		this.$element.src = url;
		this.$element.load();
		if (url.indexOf('data:') === 0) {
			this.$stage.ticker.setTimeout(this.$boundOnLoad);
		}
	}

	public get volume(): number {
		return this.$element.volume;
	}

	public set volume(volume: number) {
		this.$element.volume = volume;
	}

	protected $checkOnTouch(): void {
		document.addEventListener('click', this.$boundOnTouch);
		document.addEventListener('touchend', this.$boundOnTouch);
	}

	protected $checkStatus(): void {
		this.$element.play().catch();
		if (this.$paused) {
			this.$element.pause();
		}
	}

	protected $onTouch(): void {
		this.$checkStatus();
		document.removeEventListener('click', this.$boundOnTouch);
		document.removeEventListener('touchend', this.$boundOnTouch);
	}

	protected $onEnded(): void {
		if (this.$loops === 1) {
			this.stop();
			this.emit(Event.SOUND_COMPLETE);
		} else if (this.$loops === 0) {
			this.play(this.$startTime, 0);
		} else {
			this.play(this.$startTime, this.$loops - 1)
		}
	}

	protected $onTickerPause(): void {
		if (!this.$paused) {
			this.$element.pause();
		}
	}

	protected $onTickerResume(): void {
		if (!this.$paused) {
			this.$checkStatus();
		}
	}

	public play(startTime: number = 0, loops: number = 1): this {
		this.$loops = loops;
		this.$startTime = startTime;
		this.$element.currentTime = startTime;
		this.$paused = false;
		this.$checkStatus();
		return this;
	}

	public stop(): this {
		this.$paused = true;
		this.$element.pause();
		return this;
	}

	protected $onLoad(): void {
		super.$onLoad();
		this.$element.play()
			.then(this.$checkStatus.bind(this))
			.catch(this.$checkOnTouch.bind(this));
	}

}