import { Event } from './Event';
export declare class EventEmitter {
    protected $events: Object;
    protected $emittingType: string;
    protected $removedListeners: Listener[];
    on(type: string, listener: Listener): this;
    off(type: string, listener?: Listener): this;
    once(type: string, listener: Listener): this;
    emit(event: Event): boolean;
    emit(type: string, ...args: any[]): boolean;
    hasEventListener(type: string): boolean;
    removeAllListeners(): this;
}
export type Listener = (...args: any[]) => any;
