import Ticker from '../core/Ticker';
import Media from '../media/Media';
import Image from '../media/Image';
import Sound from '../media/Sound';
import SoundEffect from '../media/SoundEffect';
import Event from '../event/Event';
import EventEmitter from '../event/EventEmitter';

export default class ResourceManager extends EventEmitter {

	public static TYPE_IMAGE: string = 'image';
	public static TYPE_SOUND: string = 'sound';
	public static TYPE_SOUND_EFFECT: string = 'soundEffect';

	public threads: number;
	public timeout: number;
	public retryTimes: number;

	private $errorCount: number = 0;
	private $loadedCount: number = 0;
	private $loadingCount: number = 0;
	private $list: Array<ResourceInfo>;
	private readonly $total: number;
	private readonly $ticker: Ticker;
	private readonly $resources: Object;

	public constructor(ticker: Ticker, list: Array<ResourceInfo>, options?: ResourceManagerOption) {
		super();
		this.$ticker = ticker;
		this.threads = options && options.threads || 2;
		this.timeout = options && options.timeout || 10000;
		this.retryTimes = options && options.retryTimes || 3;
		this.$list = list.concat();
		this.$total = list.length;
		this.$resources = {};
		this.$checkPendingTasks();
	}

	public get total(): number {
		return this.$total;
	}

	public get errorCount(): number {
		return this.$errorCount;
	}

	public get loadedCount(): number {
		return this.$loadedCount;
	}

	private $checkPendingTasks(): void {
		if (this.$loadingCount < this.threads && this.$list.length > 0) {
			++this.$loadingCount;
			this.$load(this.$list.shift(), 1);
		}
	}

	private $load(info: ResourceInfo, attempts: number): void {
		let timer;
		let resource;
		let name = info.name;
		let type = info.type;
		let url = info.url;
		let total = this.$total;
		let ticker = this.$ticker;
		let resources = this.$resources;
		let retryTimes = this.retryTimes;
		let loadedCallback = () => {
			let errorCount = this.$errorCount;
			let loadedCount = ++this.$loadedCount;
			--this.$loadingCount;
			resources[name] = resource;
			ticker.clearTimeout(timer);
			resource.off(Event.LOAD, loadedCallback);
			resource.off(Event.ERROR, errorCallback);
			this.emit(Event.PROGRESS, (loadedCount + errorCount) / total);
			if (loadedCount + errorCount === total) {
				this.emit(Event.COMPLETE);
			} else {
				this.$checkPendingTasks();
			}
		};
		let errorCallback = () => {
			if (attempts < retryTimes) {
				this.$load(info, attempts + 1);
			} else {
				--this.$loadingCount;
				let loadedCount = this.$loadedCount;
				let errorCount = ++this.$errorCount;
				resources[name] = resource;
				this.emit(Event.PROGRESS, (loadedCount + errorCount) / total);
				if (loadedCount + errorCount === total) {
					this.emit(Event.COMPLETE);
				} else {
					this.$checkPendingTasks();
				}
			}
			ticker.clearTimeout(timer);
			resource.off(Event.LOAD, loadedCallback);
			resource.off(Event.ERROR, errorCallback);
		};
		if (type === ResourceManager.TYPE_IMAGE) {
			resource = new Image(ticker);
			resource.on(Event.LOAD, loadedCallback);
			resource.on(Event.ERROR, errorCallback);
			resource.url = url;
		} else if (type === ResourceManager.TYPE_SOUND) {
			resource = new Sound(ticker);
			resource.on(Event.LOAD, loadedCallback);
			resource.on(Event.ERROR, errorCallback);
			resource.url = url;
		} else if (type === ResourceManager.TYPE_SOUND_EFFECT) {
			resource = new SoundEffect(ticker);
			resource.on(Event.LOAD, loadedCallback);
			resource.on(Event.ERROR, errorCallback);
			resource.url = url;
		} else {
			throw new Error('Unsupported resource type: ' + type);
		}
		timer = ticker.setTimeout(errorCallback, this.timeout);
	}

	public has(name: string): boolean {
		return !!this.$resources[name];
	}

	public get(name: string): Media {
		let resource = this.$resources[name];
		if (!resource) {
			throw new Error('Resource not exists');
		}
		return resource;
	}

	public getImage(name: string): Image {
		return <Image>this.get(name);
	}

	public getSound(name: string): Sound {
		return <Sound>this.get(name);
	}

	public getSoundEffect(name: string): SoundEffect {
		return <SoundEffect>this.get(name);
	}

}

export interface ResourceInfo {
	name: string,
	type: string,
	url: string
}

export interface ResourceManagerOption {
	threads?: number,
	timeout?: number,
	retryTimes?: number
}
