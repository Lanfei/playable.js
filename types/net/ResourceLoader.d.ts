export default class ResourceLoader {
    threads: number;
    retryTimes: number;
    private _total;
    private _errorCount;
    private _loadedCount;
    private _list;
    constructor(list: Array<{
        name: string;
        type: string;
        url: string;
    }>, { threads, retryTimes }: {
        threads?: number;
        retryTimes?: number;
    });
    readonly total: number;
    readonly errorCount: number;
    readonly loadedCount: number;
    load(): void;
}
