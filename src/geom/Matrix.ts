import {Vector} from './Vector';

export class Matrix {

	public a: number;
	public b: number;
	public c: number;
	public d: number;
	public tx: number;
	public ty: number;

	private constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number) {
		if (arguments.length > 0) {
			this.set(a, b, c, d, tx, ty);
		} else {
			this.identity();
		}
	}

	public set(a: number, b: number, c: number, d: number, tx: number, ty: number): this {
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.tx = tx;
		this.ty = ty;
		return this;
	}

	public identity(): this {
		return this.set(1, 0, 0, 1, 0, 0);
	}

	public invert(): this {
		let a = this.a;
		let b = this.b;
		let c = this.c;
		let d = this.d;
		let tx = this.tx;
		let ty = this.ty;
		let n = a * d - c * b;
		this.a = d / n;
		this.b = -b / n;
		this.c = -c / n;
		this.d = a / n;
		this.tx = (c * ty - d * tx) / n;
		this.ty = (b * tx - a * ty) / n;
		return this;
	}

	public prepend(a: number | Matrix, b?: number, c?: number, d?: number, tx?: number, ty?: number): this {
		if (a instanceof Matrix) {
			return this.append(a.a, a.b, a.c, a.d, a.tx, a.ty);
		}
		let a1 = this.a;
		let b1 = this.b;
		let c1 = this.c;
		let d1 = this.d;
		let tx1 = this.tx;
		let ty1 = this.ty;
		this.a = a * a1 + b * c1;
		this.b = a * b1 + b * d1;
		this.c = c * a1 + d * c1;
		this.d = c * b1 + d * d1;
		this.tx = tx * a1 + ty * c1 + tx1;
		this.ty = tx * b1 + ty * d1 + ty1;
		return this;
	}

	public append(a: number | Matrix, b?: number, c?: number, d?: number, tx?: number, ty?: number): this {
		if (a instanceof Matrix) {
			return this.append(a.a, a.b, a.c, a.d, a.tx, a.ty);
		}
		let a1 = this.a;
		let b1 = this.b;
		let c1 = this.c;
		let d1 = this.d;
		let tx1 = this.tx;
		let ty1 = this.ty;
		this.a = a * a1 + c * b1;
		this.b = b * a1 + d * b1;
		this.c = a * c1 + c * d1;
		this.d = b * c1 + d * d1;
		this.tx = a * tx1 + c * ty1 + tx;
		this.ty = b * tx1 + d * ty1 + ty;
		return this;
	}

	public multiply(v: Vector): Vector {
		let x = this.a * v.x + this.c * v.y + this.tx;
		let y = this.b * v.x + this.d * v.y + this.ty;
		return Vector.create(x, y);
	}

	public scale(x: number, y?: number): this {
		return this.append(x, 0, 0, y === undefined ? x : y, 0, 0);
	}

	public rotate(angle: number): this {
		let sin = Math.sin(angle);
		let cos = Math.cos(angle);
		return this.append(cos, sin, -sin, cos, 0, 0);
	}

	public skew(skewX: number, skewY: number): this {
		return this.append(1, Math.tan(skewY), Math.tan(skewX), 1, 0, 0);
	}

	public translate(v: Vector): this;
	public translate(x: number, y: number): this;
	public translate(x: number | Vector, y?: number): this {
		if (x instanceof Vector) {
			return this.append(1, 0, 0, 1, x.x, x.y);
		}
		return this.append(1, 0, 0, 1, x, y);
	}

	public equals(m: Matrix): boolean {
		return m instanceof Matrix &&
			this.a === m.a && this.b === m.b &&
			this.c === m.c && this.d === m.d &&
			this.tx === m.tx && this.ty === m.ty;
	}

	public release(): void {
		Matrix.recycle(this);
	}

	private static readonly $pool: Array<Matrix> = [];

	public static create(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number): Matrix {
		let m;
		let pool = this.$pool;
		if (pool.length > 0) {
			m = pool.pop();
		} else {
			m = new Matrix();
		}
		if (arguments.length) {
			m.set(a, b, c, d, tx, ty);
		} else {
			m.identity();
		}
		return m;
	}

	public static recycle(m: Matrix) {
		this.$pool.push(m);
	}

}