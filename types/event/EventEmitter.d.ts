export default class EventEmitter {
    protected $events: Object;
    on(event: string, listener: (...args: any[]) => void): this;
    off(event: string, listener?: (...args: any[]) => void): this;
    emit(event: string, ...args: any[]): boolean;
    hasEventListener(event: string): boolean;
    removeAllListeners(): this;
}
