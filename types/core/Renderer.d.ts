export default class Renderer {
    static createCanvas(): Canvas;
}
export declare class Canvas {
    private readonly _canvas;
    constructor();
    getContext(): CanvasContext;
    readonly nativeCanvas: HTMLCanvasElement;
    width: number;
    height: number;
}
export declare class CanvasContext {
    private _context;
    constructor(context: any);
    setAlpha(alpha: number): this;
    beginPath(): this;
    clearRect(x: number, y: number, w: number, h: number): this;
    fillRect(x: number, y: number, w: number, h: number, color: string): this;
    drawImage(canvas: Canvas, sx: number, sy: number, sw?: number, sh?: number, dx?: number, dy?: number, dw?: number, dh?: number): this;
    save(): this;
    restore(): this;
    transform(a: number, b: number, c: number, d: number, dx: number, dy: number): this;
    setTransform(a: number, b: number, c: number, d: number, dx: number, dy: number): this;
}
