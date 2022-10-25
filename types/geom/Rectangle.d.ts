import { Vector } from './Vector';
export declare class Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
    protected constructor(x?: number, y?: number, width?: number, height?: number);
    get top(): number;
    set top(top: number);
    get bottom(): number;
    set bottom(bottom: number);
    get left(): number;
    set left(left: number);
    get right(): number;
    set right(right: number);
    get topLeft(): Vector;
    set topLeft(v: Vector);
    get bottomRight(): Vector;
    set bottomRight(v: Vector);
    set(x: number, y: number, width: number, height: number): this;
    contains(v: Vector): boolean;
    contains(x: number, y: number): boolean;
    equal(r: Rectangle): boolean;
    release(): void;
    protected static readonly $pool: Array<Rectangle>;
    static create(x?: number, y?: number, width?: number, height?: number): Rectangle;
    static recycle(r: Rectangle): void;
}
