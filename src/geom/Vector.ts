import Matrix from './Matrix';

export default class Vector {

	public x: number;
	public y: number;

	private constructor(x?: number, y?: number) {
		this.set(x, y);
	}

	get length(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	public set(x: number, y: number): this {
		this.x = x || 0;
		this.y = y || 0;
		return this;
	}

	public add(v: Vector): this;
	public add(x: number, y: number): this;
	public add(x: number | Vector, y?: number): this {
		if (x instanceof Vector) {
			this.x += x.x;
			this.y += x.y;
		} else {
			this.x += x;
			this.y += y;
		}
		return this;
	}

	public subtract(v: Vector): this;
	public subtract(x: number, y: number): this;
	public subtract(x: number | Vector, y?: number): this {
		if (x instanceof Vector) {
			this.x -= x.x;
			this.y -= x.y;
		} else {
			this.x -= x;
			this.y -= y;
		}
		return this;
	}

	public divide(v: Vector): this;
	public divide(x: number, y: number): this;
	public divide(x: number | Vector, y?: number): this {
		if (x instanceof Vector) {
			this.x /= x.x;
			this.y /= x.y;
		} else {
			this.x /= x;
			this.y /= y;
		}
		return this;
	}

	public dotProduct(v: Vector): number;
	public dotProduct(x: number, y: number): number;
	public dotProduct(x: number | Vector, y?: number): number {
		if (x instanceof Vector) {
			return this.x * x.x + this.y * x.y;
		} else {
			return this.x * x + this.y * y;
		}
	}

	public normalize(): this {
		let length = this.length;
		this.x = this.x / length;
		this.y = this.y / length;
		return this;
	}

	public negate(): this {
		this.x *= -1;
		this.y *= -1;
		return this;
	}

	public scale(x: number, y?: number): this {
		this.x *= x;
		this.y *= y === undefined ? x : y;
		return this;
	}

	public rotate(angle: number): this {
		let x = this.x;
		let y = this.y;
		this.x = x * Math.cos(angle) - y * Math.sin(angle);
		this.y = x * Math.sin(angle) + y * Math.cos(angle);
		return this;
	}

	public angle(): number {
		return Math.atan2(this.y, this.x);
	}

	public distance(v: Vector): number {
		return Math.sqrt((this.x - v.x) * (this.x - v.x) + (this.y - v.y) * (this.y - v.y));
	}

	public equals(v: Vector): boolean {
		return this.x === v.x && this.y === v.y;
	}

	public transform(m: Matrix): Vector {
		let x = this.x;
		let y = this.y;
		this.x = m.a * x + m.c * y + m.tx;
		this.y = m.b * x + m.d * y + m.ty;
		return this;
	}

	public release(): this {
		Vector.recycle(this);
		return this;
	}

	private static readonly $pool: Array<Vector> = [];

	public static create(x?: number, y?: number): Vector {
		let pool = this.$pool;
		if (pool.length > 0) {
			return pool.pop().set(x, y);
		} else {
			return new Vector(x, y);
		}
	}

	public static recycle(v: Vector) {
		this.$pool.push(v);
	}
}