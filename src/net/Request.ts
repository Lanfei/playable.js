import {Event} from '../event/Event';
import {EventEmitter} from '../event/EventEmitter';

export class Request extends EventEmitter {

	protected $xhr: XMLHttpRequest = new XMLHttpRequest();

	public constructor(options: RequestOption);
	public constructor(url: string, options?: RequestOption);
	public constructor(url?: string | RequestOption, options?: RequestOption) {
		super();
		let method;
		let headers;
		let data;
		let responseType;
		let xhr = this.$xhr;
		if (url instanceof Object) {
			options = url;
			url = options.url;
		}
		if (options) {
			url = options.url || url;
			method = options.method;
			headers = options.headers;
			data = options.data;
			responseType = options.responseType;
		}
		if (data instanceof Object) {
			let contentType = Request.$getContentType(headers);
			if (method.toLowerCase() === 'get') {
				let qs = Request.$getQueryString(data);
				url += url.indexOf('?') < 0 ? '?' + qs : '&' + qs;
			} else if (contentType === 'application/x-www-form-urlencoded') {
				data = Request.$getQueryString(data);
			} else if (contentType === 'application/json') {
				data = JSON.stringify(data);
			}
		}
		xhr.open(method || 'get', url);
		xhr.responseType = responseType;
		if (headers) {
			Object.keys(headers).forEach(key => {
				xhr.setRequestHeader(key, headers[key]);
			});
		}
		xhr.addEventListener('progress', this.$onProgress.bind(this));
		xhr.addEventListener('readystatechange', this.$onReadyStateChange.bind(this));
		xhr.send(data);
	}

	public get status(): number {
		return this.$xhr.status;
	}

	public get response(): any {
		return this.$xhr.response;
	}

	public get responseHeaders(): Object {
		let headers = {};
		let str = this.$xhr.getAllResponseHeaders();
		let arr = str.split('\n');
		for (let header of arr) {
			let index = header.indexOf(':');
			let key = header.slice(0, index).trim();
			let value = header.slice(index + 1).trim();
			if (headers[key]) {
				if (!Array.isArray(headers[key])) {
					headers[key] = [headers[key]];
				}
				headers[key].push(value);
			} else if (key) {
				headers[key] = value;
			}
		}
		return headers;
	}

	public abort(): void {
		this.$xhr.abort();
	}

	protected $onProgress(e: ProgressEvent): void {
		if (e.lengthComputable) {
			this.emit(Event.PROGRESS, e.loaded / e.total);
		}
	}

	protected $onReadyStateChange(e: Event): void {
		let xhr = this.$xhr;
		if (xhr.readyState === 4) {
			if (xhr.status >= 400 || xhr.status === 0) {
				this.emit(Event.ERROR, e);
			} else {
				this.emit(Event.COMPLETE);
			}
		}
	}

	protected static $getContentType(headers: Object): string {
		for (let key in headers) {
			if (key.toLowerCase() === 'content-type') {
				return headers[key].toLowerCase();
			}
		}
		return null;
	}

	protected static $getQueryString(data: Object): string {
		return Object.keys(data).map(key => key + '=' + data[key]).join('&');
	}

}

export interface RequestOption {
	url?: string,
	method?: string,
	headers?: object,
	responseType?: XMLHttpRequestResponseType,
	data?: any
}

