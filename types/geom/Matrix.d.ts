import { Vector } from './Vector';
export declare class Matrix {
    a: number;
    b: number;
    c: number;
    d: number;
    tx: number;
    ty: number;
    private constructor();
    set(a: number, b: number, c: number, d: number, tx: number, ty: number): this;
    identity(): this;
    invert(): this;
    prepend(a: number | Matrix, b?: number, c?: number, d?: number, tx?: number, ty?: number): this;
    append(a: number | Matrix, b?: number, c?: number, d?: number, tx?: number, ty?: number): this;
    multiply(v: Vector): Vector;
    scale(x: number, y?: number): this;
    rotate(angle: number): this;
    skew(skewX: number, skewY: number): this;
    translate(v: Vector): this;
    translate(x: number, y: number): this;
    equals(m: Matrix): boolean;
    release(): void;
    private static readonly $pool;
    static create(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number): Matrix;
    static recycle(m: Matrix): void;
}
