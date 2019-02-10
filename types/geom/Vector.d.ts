import { Matrix } from './Matrix';
export declare class Vector {
    x: number;
    y: number;
    protected constructor(x?: number, y?: number);
    readonly length: number;
    readonly angle: number;
    set(x: number, y: number): this;
    add(v: Vector): this;
    add(x: number, y: number): this;
    subtract(v: Vector): this;
    subtract(x: number, y: number): this;
    dotProduct(v: Vector): number;
    dotProduct(x: number, y: number): number;
    normalize(): this;
    negate(): this;
    scale(x: number, y?: number): this;
    rotate(angle: number): this;
    transform(m: Matrix): Vector;
    distance(v: Vector): number;
    equal(v: Vector): boolean;
    release(): this;
    protected static readonly $pool: Array<Vector>;
    static create(x?: number, y?: number): Vector;
    static recycle(v: Vector): void;
}
