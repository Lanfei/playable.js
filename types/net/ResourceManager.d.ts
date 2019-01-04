import Ticker from '../core/Ticker';
import EventEmitter from '../event/EventEmitter';
export default class ResourceManager extends EventEmitter {
    static TYPE_IMAGE: string;
    static TYPE_SOUND: string;
    static TYPE_SOUND_EFFECT: string;
    threads: number;
    timeout: number;
    retryTimes: number;
    private $errorCount;
    private $loadedCount;
    private $loadingCount;
    private $list;
    private readonly $total;
    private readonly $ticker;
    private readonly $resources;
    constructor(ticker: Ticker, list: Array<ResourceInfo>, options?: ResourceManagerOption);
    readonly total: number;
    readonly errorCount: number;
    readonly loadedCount: number;
    private $checkPendingTasks;
    private $load;
    has(name: string): boolean;
    get<Media>(name: string): Media;
}
export interface ResourceInfo {
    name: string;
    type: string;
    url: string;
}
export interface ResourceManagerOption {
    threads?: number;
    timeout?: number;
    retryTimes?: number;
}
