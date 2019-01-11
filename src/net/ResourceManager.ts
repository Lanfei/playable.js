import Request from './Request';
import Media from '../media/Media';
import Image from '../media/Image';
import Sound from '../media/Sound';
import SoundEffect from '../media/SoundEffect';
import Stage from '../display/Stage';
import Event from '../event/Event';
import EventEmitter from '../event/EventEmitter';

export default class ResourceManager extends EventEmitter {

	public static readonly TYPE_TEXT: string = 'text';
	public static readonly TYPE_JSON: string = 'json';
	public static readonly TYPE_BINARY: string = 'binary';
	public static readonly TYPE_IMAGE: string = 'image';
	public static readonly TYPE_SOUND: string = 'sound';
	public static readonly TYPE_SOUND_EFFECT: string = 'soundEffect';

	public threads: number;
	public timeout: number;
	public retryTimes: number;

	private $errorCount: number = 0;
	private $loadedCount: number = 0;
	private $loadingCount: number = 0;
	private $list: Array<ResourceInfo>;
	private readonly $total: number;
	private readonly $stage: Stage;
	private readonly $resources: Object;

	public constructor(stage: Stage, list: Array<ResourceInfo>, options?: ResourceManagerOption) {
		super();
		this.$stage = stage;
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
		let stage = this.$stage;
		let ticker = stage.ticker;
		let resources = this.$resources;
		let retryTimes = this.retryTimes;
		let successCallback = () => {
			let errorCount = this.$errorCount;
			let loadedCount = ++this.$loadedCount;
			--this.$loadingCount;
			ticker.clearTimeout(timer);
			if (resource instanceof Request) {
				resources[name] = resource.response;
			} else if (resource instanceof Media) {
				resources[name] = resource;
			}
			resource.off(Event.COMPLETE, successCallback);
			resource.off(Event.LOAD, successCallback);
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
				if (resource instanceof Request) {
					resources[name] = resource.response;
				} else if (resource instanceof Media) {
					resources[name] = resource;
				}
				this.emit(Event.PROGRESS, (loadedCount + errorCount) / total);
				if (loadedCount + errorCount === total) {
					this.emit(Event.COMPLETE);
				} else {
					this.$checkPendingTasks();
				}
			}
			ticker.clearTimeout(timer);
			resource.off(Event.COMPLETE, successCallback);
			resource.off(Event.LOAD, successCallback);
			resource.off(Event.ERROR, errorCallback);
		};
		if (type === ResourceManager.TYPE_TEXT) {
			resource = new Request(url, {responseType: 'text'});
			resource.on(Event.COMPLETE, successCallback);
			resource.on(Event.ERROR, errorCallback);
		} else if (type === ResourceManager.TYPE_JSON) {
			resource = new Request(url, {responseType: 'json'});
			resource.on(Event.COMPLETE, successCallback);
			resource.on(Event.ERROR, errorCallback);
		} else if (type === ResourceManager.TYPE_BINARY) {
			resource = new Request(url, {responseType: 'arraybuffer'});
			resource.on(Event.COMPLETE, successCallback);
			resource.on(Event.ERROR, errorCallback);
		} else if (type === ResourceManager.TYPE_IMAGE) {
			resource = new Image(stage);
			resource.on(Event.LOAD, successCallback);
			resource.on(Event.ERROR, errorCallback);
			resource.url = url;
		} else if (type === ResourceManager.TYPE_SOUND) {
			resource = new Sound(stage);
			resource.on(Event.LOAD, successCallback);
			resource.on(Event.ERROR, errorCallback);
			resource.url = url;
		} else if (type === ResourceManager.TYPE_SOUND_EFFECT) {
			resource = new SoundEffect(stage);
			resource.on(Event.LOAD, successCallback);
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

	public get<Media>(name: string): Media {
		return this.$resources[name];
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
