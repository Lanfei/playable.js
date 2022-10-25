import { Event } from '../event/Event';
import { EventEmitter } from '../event/EventEmitter';
export declare class Request extends EventEmitter {
    protected $xhr: XMLHttpRequest;
    constructor(options: RequestOption);
    constructor(url: string, options?: RequestOption);
    get status(): number;
    get response(): any;
    get responseHeaders(): Object;
    abort(): void;
    protected $onAbort(): void;
    protected $onProgress(e: ProgressEvent): void;
    protected $onReadyStateChange(e: Event): void;
    protected static $getContentType(headers: Object): string;
    protected static $getQueryString(data: Object): string;
}
export interface RequestOption {
    url?: string;
    method?: string;
    headers?: object;
    responseType?: XMLHttpRequestResponseType;
    data?: any;
}
