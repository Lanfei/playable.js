import { Vector } from './Vector';
export declare class Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
    protected constructor(x?: number, y?: number, width?: number, height?: number);
    top: number;
    bottom: number;
    left: number;
    right: number;
    topLeft: Vector;
    bottomRight: Vector;
    set(x: number, y: number, width: number, height: number): this;
    contains(v: Vector): boolean;
    contains(x: number, y: number): boolean;
    equal(r: Rectangle): boolean;
    release(): void;
    protected static readonly $pool: Array<Rectangle>;
    static create(x?: number, y?: number, width?: number, height?: number): Rectangle;
    static recycle(r: Rectangle): void;
}
