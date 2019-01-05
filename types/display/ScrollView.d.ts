import Layer from './Layer';
import Tween from '../tween/Tween';
import Matrix from '../geom/Matrix';
import TouchEvent from '../event/TouchEvent';
export default class ScrollView extends Layer {
    protected $scrollX: number;
    protected $scrollY: number;
    protected $scrollWidth: number;
    protected $scrollHeight: number;
    protected $touchingX: number;
    protected $touchingY: number;
    protected $touchingTime: number;
    protected $velocitiesX: Array<number>;
    protected $velocitiesY: Array<number>;
    protected $inertiaTween: Tween;
    constructor();
    scrollX: number;
    scrollY: number;
    protected $getChildTransform(child: Layer): Matrix;
    protected $resizeCanvas(): void;
    protected $onTouchStart(e: TouchEvent): void;
    protected $onTouchMove(e: TouchEvent): void;
    protected $onTouchEnd(): void;
}
