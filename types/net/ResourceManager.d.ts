import { Stage } from '../display/Stage';
import { EventEmitter } from '../event/EventEmitter';
export declare class ResourceManager extends EventEmitter {
    static readonly TYPE_TEXT: string;
    static readonly TYPE_JSON: string;
    static readonly TYPE_BINARY: string;
    static readonly TYPE_TEXTURE: string;
    static readonly TYPE_SOUND: string;
    threads: number;
    timeout: number;
    retryTimes: number;
    private $errorCount;
    private $loadedCount;
    private $loadingCount;
    private $list;
    private readonly $total;
    private readonly $stage;
    private readonly $resources;
    constructor(stage: Stage, list: Array<ResourceInfo>, options?: ResourceManagerOption);
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
