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
    protected $errorCount: number;
    protected $loadedCount: number;
    protected $loadingCount: number;
    protected $list: Array<ResourceInfo>;
    protected readonly $total: number;
    protected readonly $stage: Stage;
    protected readonly $resources: Object;
    constructor(stage: Stage, list: Array<ResourceInfo>, options?: ResourceManagerOption);
    get total(): number;
    get errorCount(): number;
    get loadedCount(): number;
    protected $checkPendingTasks(): void;
    protected $load(info: ResourceInfo, attempts: number): void;
    has(name: string): boolean;
    get<Resource>(name: string): Resource;
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
