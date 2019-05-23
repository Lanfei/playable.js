import {Event} from './Event';

export class EventEmitter {

	protected $events: Object = {};
	protected $emittingType: string = null;
	protected $removedListeners: Listener[] = [];

	public on(type: string, listener: Listener): this {
		let listeners: Array<Function> = this.$events[type] || [];
		listeners.push(listener);
		this.$events[type] = listeners;
		return this;
	}

	public off(type: string, listener?: Listener): this {
		if (this.$emittingType === type && listener) {
			this.$removedListeners.push(listener);
		} else {
			let listeners: Array<Function> = this.$events[type] || [];
			if (listener) {
				let index = listeners.indexOf(listener);
				if (index >= 0) {
					listeners.splice(index, 1);
				}
			} else {
				listeners.length = 0;
			}
		}
		return this;
	}

	public once(type: string, listener: Listener): this {
		let that = this;
		let wrapper = function () {
			listener.apply(this, arguments);
			that.off(type, wrapper);
		};
		return this.on(type, wrapper);
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
			this.$emittingType = type;
			for (let listener of listeners) {
				listener.apply(this, args);
			}
			this.$emittingType = null;
		}
		if (event) {
			event.release();
		}
		this.$removedListeners.forEach(listener => {
			this.off(<string>type, listener);
		});
		this.$removedListeners.length = 0;
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

export type Listener = (...args: any[]) => any;
