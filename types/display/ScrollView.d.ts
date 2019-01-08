import Stage from './Stage';
import Layer from './Layer';
import Tween from '../tween/Tween';
import Matrix from '../geom/Matrix';
import TouchEvent from '../event/TouchEvent';
export default class ScrollView extends Layer {
    protected static scrollingView: ScrollView;
    protected $scrollTop: number;
    protected $scrollLeft: number;
    protected $scrollWidth: number;
    protected $scrollHeight: number;
    protected $touchingX: number;
    protected $touchingY: number;
    protected $touchingTime: number;
    protected $touchingIdentifer: number;
    protected $velocitiesX: Array<number>;
    protected $velocitiesY: Array<number>;
    protected $inertiaTween: Tween;
    constructor();
    scrollTop: number;
    scrollLeft: number;
    protected $getChildTransform(child: Layer): Matrix;
    protected $resizeCanvas(): void;
    protected $onTouchStart(e: TouchEvent): void;
    protected $onTouchMove(e: TouchEvent): void;
    protected $onTouchEnd(e: TouchEvent): void;
    protected $onTouchCancel(e: TouchEvent): void;
    protected $onRemovedFromStage(stage: Stage): void;
}
