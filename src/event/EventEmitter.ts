import {Event} from './Event';

export class EventEmitter {

	protected $events: Object = {};

	public on(type: string, listener: (...args: any[]) => void): this {
		let listeners: Array<Function> = this.$events[type] || [];
		listeners.push(listener);
		this.$events[type] = listeners;
		return this;
	}

	public off(type: string, listener?: (...args: any[]) => void): this {
		let listeners: Array<Function> = this.$events[type] || [];
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

	public emit(event: Event): boolean;
	public emit(type: string, ...args: any[]): boolean;
	public emit(type: string | Event, ...args: any[]): boolean {
		let event;
		if (type instanceof Event) {
			args = [type];
			type.target = type.target || this;
			type.currentTarget = this;
			type = type.type;
		}
		let listeners: Array<Function> = this.$events[type];
		let hasListeners = listeners && listeners.length > 0;
		if (!event && hasListeners && args.length === 0) {
			event = Event.create(type);
			event.target = this;
			event.currentTarget = this;
			args.push(event);
		}
		if (hasListeners) {
			for (let listener of listeners) {
				listener.apply(this, args);
			}
		}
		if (event) {
			event.release();
		}
		return hasListeners;
	}

	public hasEventListener(type: string): boolean {
		let listeners: Array<Function> = this.$events[type];
		return !!listeners && listeners.length > 0;
	}

	public removeAllListeners(): this {
		this.$events = {};
		return this;
	}

}
