import { Matrix } from './Matrix';
export declare class Vector {
    x: number;
    y: number;
    private constructor();
    readonly length: number;
    set(x: number, y: number): this;
    add(v: Vector): this;
    add(x: number, y: number): this;
    subtract(v: Vector): this;
    subtract(x: number, y: number): this;
    divide(v: Vector): this;
    divide(x: number, y: number): this;
    dotProduct(v: Vector): number;
    dotProduct(x: number, y: number): number;
    normalize(): this;
    negate(): this;
    scale(x: number, y?: number): this;
    rotate(angle: number): this;
    angle(): number;
    distance(v: Vector): number;
    equals(v: Vector): boolean;
    transform(m: Matrix): Vector;
    release(): this;
    private static readonly $pool;
    static create(x?: number, y?: number): Vector;
    static recycle(v: Vector): void;
}
