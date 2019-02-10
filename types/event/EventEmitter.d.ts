import { Event } from './Event';
export declare class EventEmitter {
    protected $events: Object;
    on(type: string, listener: (...args: any[]) => void): this;
    off(type: string, listener?: (...args: any[]) => void): this;
    emit(event: Event): boolean;
    emit(type: string, ...args: any[]): boolean;
    hasEventListener(type: string): boolean;
    removeAllListeners(): this;
}
