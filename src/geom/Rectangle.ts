import {Vector} from './Vector';

export class Rectangle {

	public x: number;
	public y: number;
	public width: number;
	public height: number;

	private constructor(x?: number, y?: number, width?: number, height?: number) {
		this.set(x, y, width, height);
	}

	public set(x: number, y: number, width: number, height: number): this {
		this.x = x || 0;
		this.y = y || 0;
		this.width = width || 0;
		this.height = height || 0;
		return this;
	}

	public get top(): number {
		return this.y;
	}

	public set top(top: number) {
		this.height += this.y - top;
		this.y = top;
	}

	public get bottom(): number {
		return this.y + this.height;
	}

	public set bottom(bottom: number) {
		this.height = bottom - this.y;
	}

	public get left(): number {
		return this.x;
	}

	public set left(left: number) {
		this.width += this.x - left;
		this.x = left;
	}

	public get right(): number {
		return this.x + this.width;
	}

	public set right(right: number) {
		this.width = right - this.x;
	}

	public get topLeft(): Vector {
		return Vector.create(this.left, this.top);
	}

	public set topLeft(v: Vector) {
		this.top = v.y;
		this.left = v.x;
	}

	public get bottomRight(): Vector {
		return Vector.create(this.right, this.bottom);
	}

	public set bottomRight(v: Vector) {
		this.bottom = v.y;
		this.right = v.x;
	}

	public contains(x: number, y: number): boolean {
		return x >= this.x && x <= this.x + this.width &&
			y <= this.y && y <= this.y + this.height;
	}

	public release(): void {
		Rectangle.recycle(this);
	}

	private static readonly $pool: Array<Rectangle> = [];

	public static create(x?: number, y?: number, width?: number, height?: number): Rectangle {
		let pool = this.$pool;
		if (pool.length > 0) {
			return pool.pop().set(x, y, width, height);
		} else {
			return new Rectangle(x, y, width, height);
		}
	}

	public static recycle(r: Rectangle) {
		this.$pool.push(r);
	}
}