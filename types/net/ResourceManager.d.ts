import Ticker from "../core/Ticker";
import Image from '../media/Image';
import Sound from '../media/Sound';
import EventEmitter from "../event/EventEmitter";
import SoundEffect from "../media/SoundEffect";
import Media from "../media/Media";
export default class ResourceManager extends EventEmitter {
    static TYPE_IMAGE: string;
    static TYPE_SOUND: string;
    static TYPE_SOUND_EFFECT: string;
    threads: number;
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
    get(name: string): Media;
    getImage(name: string): Image;
    getSound(name: string): Sound;
    getSoundEffect(name: string): SoundEffect;
}
export interface ResourceInfo {
    name: string;
    type: string;
    url: string;
}
export interface ResourceManagerOption {
    threads?: number;
    retryTimes?: number;
}
