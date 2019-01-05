export default class EventEmitter {

	protected $events: Object = {};

	public on(event: string, listener: (...args: any[]) => void): this {
		let listeners: Array<Function> = this.$events[event] || [];
		listeners.push(listener);
		this.$events[event] = listeners;
		return this;
	}

	public off(event: string, listener?: (...args: any[]) => void): this {
		let listeners: Array<Function> = this.$events[event] || [];
		if (listener) {
			let index = listeners.indexOf(listener);
			if (index >= 0) {
				listeners.splice(index, 1);
			}
		} else {
			listeners.length = 0;
		}
		return this;
	}

	public emit(event: string, ...args: any[]): boolean {
		let listeners: Array<Function> = this.$events[event];
		if (listeners && listeners.length) {
			for (let listener of listeners) {
				listener.apply(this, args);
			}
			return true;
		}
		return false;
	}

	public hasEventListener(event: string): boolean {
		let listeners: Array<Function> = this.$events[event];
		return listeners && listeners.length > 0;
	}

	public removeAllListeners(): this {
		this.$events = {};
		return this;
	}

}
