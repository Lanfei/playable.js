import { Vector } from './Vector';
export declare class Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
    private constructor();
    set(x: number, y: number, width: number, height: number): this;
    top: number;
    bottom: number;
    left: number;
    right: number;
    topLeft: Vector;
    bottomRight: Vector;
    contains(x: number, y: number): boolean;
    release(): void;
    private static readonly $pool;
    static create(x?: number, y?: number, width?: number, height?: number): Rectangle;
    static recycle(r: Rectangle): void;
}
