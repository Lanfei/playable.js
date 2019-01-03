import Ticker from "../core/Ticker";
import Event from "../event/Event";
import DisplayObject from "./DisplayObject";
import ResourceManager, { ResourceInfo, ResourceManagerOption } from "../net/ResourceManager";
export default class Stage extends DisplayObject {
    protected readonly $ticker: Ticker;
    protected readonly $stageCanvas: HTMLCanvasElement;
    protected readonly $stageContext: CanvasRenderingContext2D;
    constructor(canvas?: HTMLCanvasElement);
    stageWidth: number;
    stageHeight: number;
    readonly ticker: Ticker;
    createResourceManager(list: Array<ResourceInfo>, options?: ResourceManagerOption): ResourceManager;
    protected $initStageSize(): void;
    protected $addTouchEventListeners(): void;
    protected $dispatchTouches(type: string, event: Event): void;
    protected $dispatchTouchEvent(type: string, touch: Touch | MouseEvent): void;
    protected $render(): void;
}
