import Ticker from "../core/Ticker";
import Image from '../media/Image';
import Sound from '../media/Sound';
import Event from '../event/Event';
import EventEmitter from "../event/EventEmitter";
import SoundEffect from "../media/SoundEffect";
import Media from "../media/Media";

export default class ResourceManager extends EventEmitter {

	public static TYPE_IMAGE: string = 'image';
	public static TYPE_SOUND: string = 'sound';
	public static TYPE_SOUND_EFFECT: string = 'soundEffect';

	public threads: number;
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
		let resource;
		let name = info.name;
		let type = info.type;
		let url = info.url;
		let ticker = this.$ticker;
		let resources = this.$resources;
		let retryTimes = this.retryTimes;
		let loadedCallback = () => {
			++this.$loadedCount;
			--this.$loadingCount;
			resources[name] = resource;
			resource.off(Event.LOAD, loadedCallback);
			resource.off(Event.ERROR, errorCallback);
			this.emit(Event.PROGRESS, this.$loadedCount / this.$total);
			if (this.$loadedCount + this.$errorCount === this.$total) {
				this.emit(Event.COMPLETE);
			} else {
				this.$checkPendingTasks();
			}
		};
		let errorCallback = () => {
			if (attempts < retryTimes) {
				this.$load(info, attempts + 1);
			} else {
				++this.$errorCount;
				--this.$loadingCount;
				if (this.$loadedCount + this.$errorCount === this.$total) {
					this.emit(Event.COMPLETE);
				} else {
					this.$checkPendingTasks();
				}
			}
			resource.off(Event.LOAD, loadedCallback);
			resource.off(Event.ERROR, errorCallback);
		};
		if (type === ResourceManager.TYPE_IMAGE) {
			resource = new Image();
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
	retryTimes?: number
}
