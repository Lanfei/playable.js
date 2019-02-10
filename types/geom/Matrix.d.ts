import { Vector } from './Vector';
export declare class Matrix {
    a: number;
    b: number;
    c: number;
    d: number;
    tx: number;
    ty: number;
    protected constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);
    set(a: number, b: number, c: number, d: number, tx: number, ty: number): this;
    identity(): this;
    invert(): this;
    prepend(m: Matrix): this;
    prepend(a: number, b: number, c: number, d: number, tx: number, ty: number): this;
    append(m: Matrix): this;
    append(a: number, b: number, c: number, d: number, tx: number, ty: number): this;
    scale(x: number, y?: number): this;
    rotate(angle: number): this;
    skew(skewX: number, skewY: number): this;
    translate(v: Vector): this;
    translate(x: number, y: number): this;
    equal(m: Matrix): boolean;
    release(): void;
    protected static readonly $pool: Array<Matrix>;
    static create(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number): Matrix;
    static recycle(m: Matrix): void;
}
