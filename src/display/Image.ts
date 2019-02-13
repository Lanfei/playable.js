import {Layer} from './Layer';
import {Event} from '../event/Event';
import {Texture} from '../media/Texture';
import {Rectangle} from '../geom/Rectangle';

export class Image extends Layer {

	public static SCALE: FillMode = 'scale';
	public static REPEAT: FillMode = 'repeat';
	public static REPEAT_X: FillMode = 'repeat-x';
	public static REPEAT_Y: FillMode = 'repeat-y';

	protected $texture: Texture = null;
	protected $fillMode: FillMode = Image.SCALE;
	protected $clipRect: Rectangle = null;
	protected $scale9Grid: Rectangle = null;
	protected $pattern: CanvasPattern = null;
	protected readonly $boundOnTextureLoad: () => void;

	public constructor(texture?: Texture);
	public constructor(texture: Texture, width: number, height: number);
	public constructor(texture?: Texture, width?: number, height?: number) {
		super();
		this.$boundOnTextureLoad = this.$onTextureLoad.bind(this);
		if (texture) {
			this.$width = width;
			this.$height = height;
			this.texture = texture;
		}
	}

	public get texture(): Texture {
		return this.$texture;
	}

	public set texture(texture: Texture) {
		if (this.$texture) {
			this.$texture.off(Event.LOAD, this.$boundOnTextureLoad);
		}
		this.$texture = texture;
		if (texture) {
			texture.on(Event.LOAD, this.$boundOnTextureLoad);
		} else {
			this.$updatePattern();
			this.$resizeCanvas();
		}
	}

	public get fillMode(): FillMode {
		return this.$fillMode;
	}

	public set fillMode(fillMode: FillMode) {
		this.$fillMode = fillMode;
		this.$updatePattern();
		this.$markDirty();
	}

	public get clipRect(): Rectangle {
		return this.$clipRect;
	}

	public set clipRect(clipRect: Rectangle) {
		this.$clipRect = clipRect;
		this.$markDirty();
	}

	public get scale9Grid(): Rectangle {
		return this.$scale9Grid;
	}

	public set scale9Grid(scale9Grid: Rectangle) {
		this.$scale9Grid = scale9Grid;
		this.$markDirty();
	}

	protected $onTextureLoad(): void {
		this.$updatePattern();
		this.$resizeCanvas();
		this.$texture.off(Event.LOAD, this.$boundOnTextureLoad);
	}

	protected $updatePattern(): void {
		let width = this.$width;
		let height = this.$height;
		let texture = this.$texture;
		let fillMode = this.$fillMode;
		if ((width || height) && texture && fillMode && fillMode !== Image.SCALE) {
			this.$pattern = this.$context.createPattern(texture.element, fillMode);
		} else {
			this.$pattern = null;
		}
	}

	protected $getContentBounds(): Rectangle {
		let texture = this.$texture;
		let clipRect = this.$clipRect;
		let bounds = super.$getContentBounds();
		bounds.x = Math.min(bounds.left, -this.$anchorX);
		bounds.y = Math.min(bounds.top, -this.$anchorY);
		if (clipRect) {
			bounds.width = Math.max(bounds.width, clipRect.width);
			bounds.height = Math.max(bounds.height, clipRect.height);
		} else if (texture) {
			bounds.width = Math.max(bounds.width, texture.width);
			bounds.height = Math.max(bounds.height, texture.height);
		}
		return bounds;
	}

	protected $drawPattern(targetX, targetY, targetW, targetH): void {
		let ctx = this.$context;
		let texture = this.$texture;
		let pattern = this.$pattern;
		let scale = Layer.pixelRatio / texture.pixelRatio;
		scale !== 1 && ctx.scale(scale, scale);
		ctx.fillStyle = pattern;
		ctx.fillRect(targetX, targetY, targetW, targetH);
	}

	protected $drawTexture(sourceX: number, sourceY: number, sourceW: number, sourceH: number, targetX: number, targetY: number, targetW: number, targetH: number): void {
		if (sourceW <= 0 || sourceH <= 0 || targetW <= 0 || targetH <= 0) {
			return;
		}
		let ctx = this.$context;
		let texture = this.$texture;
		let pixelRatio = texture.pixelRatio;
		if (sourceW > 0 && sourceH > 0 && targetW > 0 && targetH > 0) {
			ctx.drawImage(texture.element, sourceX * pixelRatio, sourceY * pixelRatio, sourceW * pixelRatio, sourceH * pixelRatio, targetX, targetY, targetW, targetH);
		}
	}

	protected $render(): number {
		if (!this.$dirty) {
			return 0;
		}
		let canvas = this.$canvas;
		let anchorX = this.$anchorX;
		let anchorY = this.$anchorY;
		let texture = this.$texture;
		let pattern = this.$pattern;
		let clipRect = this.$clipRect;
		let scale9Grid = this.$scale9Grid;
		let drawCalls = super.$render();
		let pixelRatio = Layer.pixelRatio;
		let x = -anchorX * pixelRatio;
		let y = -anchorY * pixelRatio;
		let width = canvas.width;
		let height = canvas.height;
		let clipX = clipRect ? clipRect.x : 0;
		let clipY = clipRect ? clipRect.y : 0;
		let clipWidth = clipRect ? clipRect.width : texture ? texture.width : 0;
		let clipHeight = clipRect ? clipRect.height : texture ? texture.height : 0;
		if (!texture) {
			return drawCalls;
		} else if (pattern) {
			this.$drawPattern(x, y, width, height);
		} else if (scale9Grid) {
			let sourceX0 = clipX;
			let sourceY0 = clipY;
			let sourceW0 = scale9Grid.x;
			let sourceH0 = scale9Grid.y;
			let sourceX1 = sourceX0 + sourceW0;
			let sourceY1 = sourceY0 + sourceH0;
			let sourceW1 = scale9Grid.width;
			let sourceH1 = scale9Grid.height;
			let sourceX2 = sourceX1 + sourceW1;
			let sourceY2 = sourceY1 + sourceH1;
			let sourceW2 = clipWidth - sourceW0 - sourceW1;
			let sourceH2 = clipHeight - sourceH0 - sourceH1;
			let targetX0 = -anchorX * pixelRatio;
			let targetY0 = -anchorY * pixelRatio;
			let targetW0 = sourceW0 * pixelRatio;
			let targetH0 = sourceH0 * pixelRatio;
			let targetX1 = targetX0 + targetW0;
			let targetY1 = targetY0 + targetH0;
			let targetW1 = width - (sourceW0 + sourceW2) * pixelRatio;
			let targetH1 = height - (sourceH0 + sourceH2) * pixelRatio;
			let targetX2 = targetX1 + targetW1;
			let targetY2 = targetY1 + targetH1;
			let targetW2 = width - targetW0 - targetW1;
			let targetH2 = height - targetH0 - targetH1;
			this.$drawTexture(sourceX0, sourceY0, sourceW0, sourceH0, targetX0, targetY0, targetW0, targetH0);
			this.$drawTexture(sourceX1, sourceY0, sourceW1, sourceH0, targetX1, targetY0, targetW1, targetH0);
			this.$drawTexture(sourceX2, sourceY0, sourceW2, sourceH0, targetX2, targetY0, targetW2, targetH0);
			this.$drawTexture(sourceX0, sourceY1, sourceW0, sourceH1, targetX0, targetY1, targetW0, targetH1);
			this.$drawTexture(sourceX1, sourceY1, sourceW1, sourceH1, targetX1, targetY1, targetW1, targetH1);
			this.$drawTexture(sourceX2, sourceY1, sourceW2, sourceH1, targetX2, targetY1, targetW2, targetH1);
			this.$drawTexture(sourceX0, sourceY2, sourceW0, sourceH2, targetX0, targetY2, targetW0, targetH2);
			this.$drawTexture(sourceX1, sourceY2, sourceW1, sourceH2, targetX1, targetY2, targetW1, targetH2);
			this.$drawTexture(sourceX2, sourceY2, sourceW2, sourceH2, targetX2, targetY2, targetW2, targetH2);
		} else {
			this.$drawTexture(clipX, clipY, clipWidth, clipHeight, x, y, width, height);
		}
		return drawCalls;
	}

}

export type FillMode = 'scale' | 'repeat' | 'repeat-x' | 'repeat-y';
