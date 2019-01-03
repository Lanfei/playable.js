import Rectangle from '../geom/Rectangle';
import DisplayObject from './DisplayObject';

export default class TextView extends DisplayObject {

	private static wordRe: RegExp = /\w+/;
	private static boundaryRe: RegExp = /\b/;

	protected $text: string = '';
	protected $color: string = 'black';
	protected $fontSize: number = 16;
	protected $fontStyle: FontStyle = 'normal';
	protected $fontWeight: FontWeight = 'normal';
	protected $textAlign: TextAlign = 'left';
	protected $verticalAlign: VerticalAlign = 'top';
	protected $lineHeight: number = 1;
	protected $strokeSize: number = 0;
	protected $strokeColor: string = null;
	protected $fontFamily: string = 'Helvetica';
	protected $multiline: boolean = false;
	protected $breakWord: boolean = false;
	protected $lines: Array<string> = [];

	public constructor(text?: string, options: TextViewOption = {}) {
		super();
		this.$text = text || this.$text;
		this.$color = options.color || this.$color;
		this.$fontSize = options.fontSize || this.$fontSize;
		this.$fontStyle = options.fontStyle || this.$fontStyle;
		this.$fontWeight = options.fontWeight || this.$fontWeight;
		this.$textAlign = options.textAlign || this.$textAlign;
		this.$verticalAlign = options.verticalAlign || this.$verticalAlign;
		this.$lineHeight = options.lineHeight || this.$lineHeight;
		this.$strokeSize = options.strokeSize || this.$strokeSize;
		this.$strokeColor = options.strokeColor || this.$strokeColor;
		this.$fontFamily = options.fontFamily || this.$fontFamily;
		this.$multiline = options.multiline || this.$multiline;
		this.$breakWord = options.breakWord || this.$breakWord;
		this.$resizeCanvas();
	}

	public get text(): string {
		return this.$text;
	}

	public set text(text: string) {
		this.$text = text;
		this.$resizeCanvas();
	}

	public get color(): string {
		return this.$color;
	}

	public set color(color: string) {
		this.$color = color;
		this.$markDirty();
	}

	public get fontSize(): number {
		return this.$fontSize;
	}

	public set fontSize(fontSize: number) {
		this.$fontSize = fontSize;
		this.$resizeCanvas();
	}

	public get fontStyle(): FontStyle {
		return this.$fontStyle;
	}

	public set fontStyle(fontStyle: FontStyle) {
		this.$fontStyle = fontStyle;
		this.$resizeCanvas();
	}

	public get fontWeight(): FontWeight {
		return this.$fontWeight;
	}

	public set fontWeight(fontWeight: FontWeight) {
		this.$fontWeight = fontWeight;
		this.$resizeCanvas();
	}

	public get textAlign(): TextAlign {
		return this.$textAlign;
	}

	public set textAlign(textAlign: TextAlign) {
		this.$textAlign = textAlign;
		this.$markDirty();
	}

	public get verticalAlign(): VerticalAlign {
		return this.$verticalAlign;
	}

	public set verticalAlign(verticalAlign: VerticalAlign) {
		this.$verticalAlign = verticalAlign;
		this.$markDirty();
	}

	public get lineHeight(): number {
		return this.$lineHeight;
	}

	public set lineHeight(lineHeight: number) {
		this.$lineHeight = lineHeight;
		this.$resizeCanvas();
	}

	public get strokeSize(): number {
		return this.$strokeSize;
	}

	public set strokeSize(strokeSize: number) {
		this.$strokeSize = strokeSize;
		this.$markDirty();
	}

	public get strokeColor(): string {
		return this.$strokeColor;
	}

	public set strokeColor(strokeColor: string) {
		this.$strokeColor = strokeColor;
		this.$markDirty();
	}

	public get fontFamily(): string {
		return this.$fontFamily;
	}

	public set fontFamily(fontFamily: string) {
		this.$fontFamily = fontFamily;
		this.$resizeCanvas();
	}

	public get multiline(): boolean {
		return this.$multiline;
	}

	public set multiline(multiline: boolean) {
		this.$multiline = multiline;
		this.$resizeCanvas();
	}

	public get breakWord(): boolean {
		return this.$breakWord;
	}

	public set breakWord(breakWord: boolean) {
		this.$breakWord = breakWord;
		this.$resizeCanvas();
	}

	protected $updateContext(): void {
		let ctx = this.$context;
		let fontStyle = this.fontStyle;
		let fontWeight = this.fontWeight;
		let pixelRatio = this.$pixelRatio;
		let sizeStr = this.fontSize * pixelRatio + 'px';
		ctx.font = fontStyle + ' ' + fontWeight + ' ' + sizeStr + ' ' + this.fontFamily;
		ctx.textAlign = this.textAlign;
		ctx.textBaseline = 'top';
		ctx.fillStyle = this.color;
		ctx.lineWidth = this.strokeSize * pixelRatio;
		ctx.strokeStyle = this.strokeColor;
	}

	protected $divideUnits(): Array<string> {
		let units;
		let text = this.$text;
		let breakWord = this.$breakWord;
		let wordRe = TextView.wordRe;
		let boundaryRe = TextView.boundaryRe;
		if (breakWord) {
			units = text.split('');
		} else {
			let words = text.split(boundaryRe);
			units = [];
			for (let unit of words) {
				if (wordRe.test(unit)) {
					units.push(unit);
				} else {
					units = units.concat(unit.split(''));
				}
			}
		}
		return units;
	}

	protected $divideLines(): void {
		let text = this.$text;
		if (!this.$multiline) {
			this.$lines = [text];
			return;
		} else if (!this.$width) {
			this.$lines = text.split('\n');
			return;
		}
		let line = '';
		let ctx = this.$context;
		let width = this.$width;
		let lines = this.$lines = [];
		let units = this.$divideUnits();
		this.$updateContext();
		for (let unit of units) {
			if (unit === '\n') {
				lines.push(line);
				line = '';
				continue;
			}
			let lineWidth = ctx.measureText(line + unit).width;
			if (lineWidth <= width) {
				line += unit;
			} else {
				line && lines.push(line);
				line = unit;
			}
		}
		lines.push(line);
	}

	protected $resizeCanvas(): void {
		this.$divideLines();
		super.$resizeCanvas();
	}

	protected $getContentBounds(): Rectangle {
		let ctx = this.$context;
		let bounds = super.$getContentBounds();
		let lines = this.$lines;
		let fontSize = this.$fontSize;
		let lineHeight = this.$lineHeight;
		let pixelRatio = this.$pixelRatio;
		this.$updateContext();
		for (let line of lines) {
			bounds.width = Math.max(bounds.width, ctx.measureText(line).width / pixelRatio);
		}
		bounds.height = Math.max(bounds.height, fontSize * lineHeight * lines.length);
		return bounds;
	}

	protected $render(): void {
		if (!this.$dirty) {
			return;
		}
		let x = 0;
		let y = 0;
		let width = this.width;
		let height = this.height;
		let ctx = this.$context;
		let lines = this.$lines;
		let color = this.$color;
		let fontSize = this.$fontSize;
		let textAlign = this.$textAlign;
		let verticalAlign = this.$verticalAlign;
		let lineHeight = this.$lineHeight;
		let pixelRatio = this.$pixelRatio;
		let strokeSize = this.$strokeSize;
		let strokeColor = this.$strokeColor;
		super.$render();
		this.$updateContext();
		if (textAlign === 'center') {
			x = width * pixelRatio / 2;
		} else if (textAlign === 'right') {
			x = width * pixelRatio;
		}
		if (verticalAlign === 'middle') {
			y = (height - fontSize * lineHeight * lines.length) * pixelRatio / 2;
		} else if (verticalAlign === 'bottom') {
			y = (height - fontSize * lineHeight * lines.length) * pixelRatio;
		}
		for (let line of lines) {
			if (color) {
				ctx.fillText(line, x, y);
			}
			if (strokeSize && strokeColor) {
				ctx.strokeText(line, x, y);
			}
			y += fontSize * lineHeight * pixelRatio;
		}
	}

}

type FontStyle = 'normal' | 'italic' | 'oblique';
type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type TextAlign = 'left' | 'right' | 'center';
type VerticalAlign = 'top' | 'middle' | 'bottom';

interface TextViewOption {
	color?: string;
	fontSize?: number;
	fontWeight?: FontWeight;
	fontStyle?: FontStyle;
	textAlign?: TextAlign;
	verticalAlign?: VerticalAlign;
	lineHeight?: number;
	strokeSize?: number;
	strokeColor?: string;
	fontFamily?: string;
	multiline?: boolean;
	breakWord?: boolean;
}
