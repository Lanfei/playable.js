[API Reference](../README.md) > [MovieClip](../classes/movieclip.md)

# Class: MovieClip

## Hierarchy

↳  [Image](image.md)

**↳ MovieClip**

## Index

### Constructors

* [constructor](movieclip.md#constructor)

### Properties

* [$alpha](movieclip.md#_alpha)
* [$anchorX](movieclip.md#_anchorx)
* [$anchorY](movieclip.md#_anchory)
* [$backgroundColor](movieclip.md#_backgroundcolor)
* [$backgroundFillMode](movieclip.md#_backgroundfillmode)
* [$backgroundImage](movieclip.md#_backgroundimage)
* [$backgroundPattern](movieclip.md#_backgroundpattern)
* [$boundNextFrame](movieclip.md#_boundnextframe)
* [$boundOnTextureLoad](movieclip.md#_boundontextureload)
* [$canvas](movieclip.md#_canvas)
* [$children](movieclip.md#_children)
* [$clipRect](movieclip.md#_cliprect)
* [$context](movieclip.md#_context)
* [$currentFrame](movieclip.md#_currentframe)
* [$dirty](movieclip.md#_dirty)
* [$events](movieclip.md#_events)
* [$frames](movieclip.md#_frames)
* [$height](movieclip.md#_height)
* [$interval](movieclip.md#_interval)
* [$loop](movieclip.md#_loop)
* [$parent](movieclip.md#_parent)
* [$paused](movieclip.md#_paused)
* [$rotation](movieclip.md#_rotation)
* [$scale9Grid](movieclip.md#_scale9grid)
* [$scaleX](movieclip.md#_scalex)
* [$scaleY](movieclip.md#_scaley)
* [$shouldEmitTap](movieclip.md#_shouldemittap)
* [$skewX](movieclip.md#_skewx)
* [$skewY](movieclip.md#_skewy)
* [$smoothing](movieclip.md#_smoothing)
* [$stage](movieclip.md#_stage)
* [$texture](movieclip.md#_texture)
* [$timer](movieclip.md#_timer)
* [$touches](movieclip.md#_touches)
* [$visible](movieclip.md#_visible)
* [$width](movieclip.md#_width)
* [$x](movieclip.md#_x)
* [$y](movieclip.md#_y)
* [name](movieclip.md#name)
* [tag](movieclip.md#tag)
* [touchable](movieclip.md#touchable)
* [pixelRatio](movieclip.md#pixelratio)

### Accessors

* [alpha](movieclip.md#alpha)
* [anchorX](movieclip.md#anchorx)
* [anchorY](movieclip.md#anchory)
* [backgroundColor](movieclip.md#backgroundcolor)
* [backgroundFillMode](movieclip.md#backgroundfillmode)
* [backgroundImage](movieclip.md#backgroundimage)
* [canvas](movieclip.md#canvas)
* [children](movieclip.md#children)
* [clipRect](movieclip.md#cliprect)
* [currentFrame](movieclip.md#currentframe)
* [dirty](movieclip.md#dirty)
* [height](movieclip.md#height)
* [interval](movieclip.md#interval)
* [loop](movieclip.md#loop)
* [parent](movieclip.md#parent)
* [paused](movieclip.md#paused)
* [rotation](movieclip.md#rotation)
* [scale9Grid](movieclip.md#scale9grid)
* [scaleX](movieclip.md#scalex)
* [scaleY](movieclip.md#scaley)
* [skewX](movieclip.md#skewx)
* [skewY](movieclip.md#skewy)
* [smoothing](movieclip.md#smoothing)
* [stage](movieclip.md#stage)
* [texture](movieclip.md#texture)
* [ticker](movieclip.md#ticker)
* [totalFrames](movieclip.md#totalframes)
* [visible](movieclip.md#visible)
* [width](movieclip.md#width)
* [x](movieclip.md#x)
* [y](movieclip.md#y)

### Methods

* [$drawBackground](movieclip.md#_drawbackground)
* [$drawChild](movieclip.md#_drawchild)
* [$drawTexture](movieclip.md#_drawtexture)
* [$emitAdded](movieclip.md#_emitadded)
* [$emitAddedToStage](movieclip.md#_emitaddedtostage)
* [$emitRemoved](movieclip.md#_emitremoved)
* [$emitRemovedFromStage](movieclip.md#_emitremovedfromstage)
* [$emitTouchEvent](movieclip.md#_emittouchevent)
* [$getChildBounds](movieclip.md#_getchildbounds)
* [$getChildTransform](movieclip.md#_getchildtransform)
* [$getContentBounds](movieclip.md#_getcontentbounds)
* [$getPattern](movieclip.md#_getpattern)
* [$getTransform](movieclip.md#_gettransform)
* [$gotoFrame](movieclip.md#_gotoframe)
* [$isChildVisible](movieclip.md#_ischildvisible)
* [$localHitTest](movieclip.md#_localhittest)
* [$markDirty](movieclip.md#_markdirty)
* [$markParentDirty](movieclip.md#_markparentdirty)
* [$onTextureLoad](movieclip.md#_ontextureload)
* [$render](movieclip.md#_render)
* [$resizeCanvas](movieclip.md#_resizecanvas)
* [$resizeParentCanvas](movieclip.md#_resizeparentcanvas)
* [addChild](movieclip.md#addchild)
* [addChildAt](movieclip.md#addchildat)
* [emit](movieclip.md#emit)
* [getChildAt](movieclip.md#getchildat)
* [getChildByName](movieclip.md#getchildbyname)
* [getChildIndex](movieclip.md#getchildindex)
* [getChildrenByTag](movieclip.md#getchildrenbytag)
* [gotoAndPlay](movieclip.md#gotoandplay)
* [gotoAndStop](movieclip.md#gotoandstop)
* [hasChild](movieclip.md#haschild)
* [hasEventListener](movieclip.md#haseventlistener)
* [nextFrame](movieclip.md#nextframe)
* [off](movieclip.md#off)
* [on](movieclip.md#on)
* [pause](movieclip.md#pause)
* [play](movieclip.md#play)
* [removeAllChildren](movieclip.md#removeallchildren)
* [removeAllListeners](movieclip.md#removealllisteners)
* [removeChild](movieclip.md#removechild)
* [removeChildAt](movieclip.md#removechildat)
* [removeChildByName](movieclip.md#removechildbyname)
* [removeChildrenByTag](movieclip.md#removechildrenbytag)
* [removeSelf](movieclip.md#removeself)
* [replaceChild](movieclip.md#replacechild)
* [resize](movieclip.md#resize)
* [setChildIndex](movieclip.md#setchildindex)
* [swapChildren](movieclip.md#swapchildren)
* [swapChildrenAt](movieclip.md#swapchildrenat)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MovieClip**(texture: *[Texture](texture.md)*, frames: *`Array`<[MovieClipFrameData](../interfaces/movieclipframedata.md)>*): [MovieClip](movieclip.md)

*Overrides [Image](image.md).[constructor](image.md#constructor)*

*Defined in [display/MovieClip.ts:14](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/MovieClip.ts#L14)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| texture | [Texture](texture.md) |
| frames | `Array`<[MovieClipFrameData](../interfaces/movieclipframedata.md)> |

**Returns:** [MovieClip](movieclip.md)

___

## Properties

<a id="_alpha"></a>

### `<Protected>` $alpha

**● $alpha**: *`number`* = 1

*Inherited from [Layer](layer.md).[$alpha](layer.md#_alpha)*

*Defined in [display/Layer.ts:30](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L30)*

___
<a id="_anchorx"></a>

### `<Protected>` $anchorX

**● $anchorX**: *`number`* = 0

*Inherited from [Layer](layer.md).[$anchorX](layer.md#_anchorx)*

*Defined in [display/Layer.ts:23](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L23)*

___
<a id="_anchory"></a>

### `<Protected>` $anchorY

**● $anchorY**: *`number`* = 0

*Inherited from [Layer](layer.md).[$anchorY](layer.md#_anchory)*

*Defined in [display/Layer.ts:24](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L24)*

___
<a id="_backgroundcolor"></a>

### `<Protected>` $backgroundColor

**● $backgroundColor**: *`string`* =  null

*Inherited from [Layer](layer.md).[$backgroundColor](layer.md#_backgroundcolor)*

*Defined in [display/Layer.ts:33](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L33)*

___
<a id="_backgroundfillmode"></a>

### `<Protected>` $backgroundFillMode

**● $backgroundFillMode**: *[FillMode](../#fillmode)* =  Texture.SCALE

*Inherited from [Layer](layer.md).[$backgroundFillMode](layer.md#_backgroundfillmode)*

*Defined in [display/Layer.ts:36](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L36)*

___
<a id="_backgroundimage"></a>

### `<Protected>` $backgroundImage

**● $backgroundImage**: *[Texture](texture.md)* =  null

*Inherited from [Layer](layer.md).[$backgroundImage](layer.md#_backgroundimage)*

*Defined in [display/Layer.ts:34](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L34)*

___
<a id="_backgroundpattern"></a>

### `<Protected>` $backgroundPattern

**● $backgroundPattern**: *`CanvasPattern`* =  null

*Inherited from [Layer](layer.md).[$backgroundPattern](layer.md#_backgroundpattern)*

*Defined in [display/Layer.ts:35](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L35)*

___
<a id="_boundnextframe"></a>

### `<Protected>` $boundNextFrame

**● $boundNextFrame**: *`Function`*

*Defined in [display/MovieClip.ts:14](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/MovieClip.ts#L14)*

___
<a id="_boundontextureload"></a>

### `<Protected>` $boundOnTextureLoad

**● $boundOnTextureLoad**: *`function`*

*Inherited from [Image](image.md).[$boundOnTextureLoad](image.md#_boundontextureload)*

*Defined in [display/Image.ts:10](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Image.ts#L10)*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="_canvas"></a>

### `<Protected>` $canvas

**● $canvas**: *`HTMLCanvasElement`*

*Inherited from [Layer](layer.md).[$canvas](layer.md#_canvas)*

*Defined in [display/Layer.ts:43](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L43)*

___
<a id="_children"></a>

### `<Protected>` $children

**● $children**: *`Array`<[Layer](layer.md)>* =  []

*Inherited from [Layer](layer.md).[$children](layer.md#_children)*

*Defined in [display/Layer.ts:40](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L40)*

___
<a id="_cliprect"></a>

### `<Protected>` $clipRect

**● $clipRect**: *[Rectangle](rectangle.md)* =  null

*Inherited from [Image](image.md).[$clipRect](image.md#_cliprect)*

*Defined in [display/Image.ts:8](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Image.ts#L8)*

___
<a id="_context"></a>

### `<Protected>` $context

**● $context**: *`CanvasRenderingContext2D`*

*Inherited from [Layer](layer.md).[$context](layer.md#_context)*

*Defined in [display/Layer.ts:44](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L44)*

___
<a id="_currentframe"></a>

### `<Protected>` $currentFrame

**● $currentFrame**: *`number`* = 0

*Defined in [display/MovieClip.ts:11](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/MovieClip.ts#L11)*

___
<a id="_dirty"></a>

### `<Protected>` $dirty

**● $dirty**: *`boolean`* = true

*Inherited from [Layer](layer.md).[$dirty](layer.md#_dirty)*

*Defined in [display/Layer.ts:37](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L37)*

___
<a id="_events"></a>

### `<Protected>` $events

**● $events**: *`Object`*

*Inherited from [EventEmitter](eventemitter.md).[$events](eventemitter.md#_events)*

*Defined in [event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/EventEmitter.ts#L5)*

___
<a id="_frames"></a>

### `<Protected>` $frames

**● $frames**: *`Array`<[MovieClipFrameData](../interfaces/movieclipframedata.md)>* =  null

*Defined in [display/MovieClip.ts:12](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/MovieClip.ts#L12)*

___
<a id="_height"></a>

### `<Protected>` $height

**● $height**: *`number`* = 0

*Inherited from [Layer](layer.md).[$height](layer.md#_height)*

*Defined in [display/Layer.ts:22](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L22)*

___
<a id="_interval"></a>

### `<Protected>` $interval

**● $interval**: *`number`* = 30

*Defined in [display/MovieClip.ts:9](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/MovieClip.ts#L9)*

___
<a id="_loop"></a>

### `<Protected>` $loop

**● $loop**: *`boolean`* = true

*Defined in [display/MovieClip.ts:8](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/MovieClip.ts#L8)*

___
<a id="_parent"></a>

### `<Protected>` $parent

**● $parent**: *[Layer](layer.md)* =  null

*Inherited from [Layer](layer.md).[$parent](layer.md#_parent)*

*Defined in [display/Layer.ts:39](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L39)*

___
<a id="_paused"></a>

### `<Protected>` $paused

**● $paused**: *`boolean`* = false

*Defined in [display/MovieClip.ts:10](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/MovieClip.ts#L10)*

___
<a id="_rotation"></a>

### `<Protected>` $rotation

**● $rotation**: *`number`* = 0

*Inherited from [Layer](layer.md).[$rotation](layer.md#_rotation)*

*Defined in [display/Layer.ts:29](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L29)*

___
<a id="_scale9grid"></a>

### `<Protected>` $scale9Grid

**● $scale9Grid**: *[Rectangle](rectangle.md)* =  null

*Inherited from [Image](image.md).[$scale9Grid](image.md#_scale9grid)*

*Defined in [display/Image.ts:9](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Image.ts#L9)*

___
<a id="_scalex"></a>

### `<Protected>` $scaleX

**● $scaleX**: *`number`* = 1

*Inherited from [Layer](layer.md).[$scaleX](layer.md#_scalex)*

*Defined in [display/Layer.ts:27](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L27)*

___
<a id="_scaley"></a>

### `<Protected>` $scaleY

**● $scaleY**: *`number`* = 1

*Inherited from [Layer](layer.md).[$scaleY](layer.md#_scaley)*

*Defined in [display/Layer.ts:28](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L28)*

___
<a id="_shouldemittap"></a>

### `<Protected>` $shouldEmitTap

**● $shouldEmitTap**: *`boolean`* = true

*Inherited from [Layer](layer.md).[$shouldEmitTap](layer.md#_shouldemittap)*

*Defined in [display/Layer.ts:41](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L41)*

___
<a id="_skewx"></a>

### `<Protected>` $skewX

**● $skewX**: *`number`* = 0

*Inherited from [Layer](layer.md).[$skewX](layer.md#_skewx)*

*Defined in [display/Layer.ts:25](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L25)*

___
<a id="_skewy"></a>

### `<Protected>` $skewY

**● $skewY**: *`number`* = 0

*Inherited from [Layer](layer.md).[$skewY](layer.md#_skewy)*

*Defined in [display/Layer.ts:26](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L26)*

___
<a id="_smoothing"></a>

### `<Protected>` $smoothing

**● $smoothing**: *`boolean`* = true

*Inherited from [Layer](layer.md).[$smoothing](layer.md#_smoothing)*

*Defined in [display/Layer.ts:32](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L32)*

___
<a id="_stage"></a>

### `<Protected>` $stage

**● $stage**: *[Stage](stage.md)* =  null

*Inherited from [Layer](layer.md).[$stage](layer.md#_stage)*

*Defined in [display/Layer.ts:38](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L38)*

___
<a id="_texture"></a>

### `<Protected>` $texture

**● $texture**: *[Texture](texture.md)* =  null

*Inherited from [Image](image.md).[$texture](image.md#_texture)*

*Defined in [display/Image.ts:7](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Image.ts#L7)*

___
<a id="_timer"></a>

### `<Protected>` $timer

**● $timer**: *`number`*

*Defined in [display/MovieClip.ts:13](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/MovieClip.ts#L13)*

___
<a id="_touches"></a>

### `<Protected>` $touches

**● $touches**: *`Array`<`boolean`>* =  []

*Inherited from [Layer](layer.md).[$touches](layer.md#_touches)*

*Defined in [display/Layer.ts:42](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L42)*

___
<a id="_visible"></a>

### `<Protected>` $visible

**● $visible**: *`boolean`* = true

*Inherited from [Layer](layer.md).[$visible](layer.md#_visible)*

*Defined in [display/Layer.ts:31](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L31)*

___
<a id="_width"></a>

### `<Protected>` $width

**● $width**: *`number`* = 0

*Inherited from [Layer](layer.md).[$width](layer.md#_width)*

*Defined in [display/Layer.ts:21](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L21)*

___
<a id="_x"></a>

### `<Protected>` $x

**● $x**: *`number`* = 0

*Inherited from [Layer](layer.md).[$x](layer.md#_x)*

*Defined in [display/Layer.ts:19](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L19)*

___
<a id="_y"></a>

### `<Protected>` $y

**● $y**: *`number`* = 0

*Inherited from [Layer](layer.md).[$y](layer.md#_y)*

*Defined in [display/Layer.ts:20](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L20)*

___
<a id="name"></a>

###  name

**● name**: *`string`* = ""

*Inherited from [Layer](layer.md).[name](layer.md#name)*

*Defined in [display/Layer.ts:15](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L15)*

___
<a id="tag"></a>

###  tag

**● tag**: *`string`* = ""

*Inherited from [Layer](layer.md).[tag](layer.md#tag)*

*Defined in [display/Layer.ts:16](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L16)*

___
<a id="touchable"></a>

###  touchable

**● touchable**: *`boolean`* = true

*Inherited from [Layer](layer.md).[touchable](layer.md#touchable)*

*Defined in [display/Layer.ts:17](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L17)*

___
<a id="pixelratio"></a>

### `<Static>` pixelRatio

**● pixelRatio**: *`number`* =  typeof window === 'undefined' ? 1 : window.devicePixelRatio || 1

*Inherited from [Layer](layer.md).[pixelRatio](layer.md#pixelratio)*

*Defined in [display/Layer.ts:13](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L13)*

___

## Accessors

<a id="alpha"></a>

###  alpha

getalpha(): `number`setalpha(alpha: *`number`*): `void`

*Inherited from [Layer](layer.md).[alpha](layer.md#alpha)*

*Defined in [display/Layer.ts:173](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L173)*

**Returns:** `number`

*Inherited from [Layer](layer.md).[alpha](layer.md#alpha)*

*Defined in [display/Layer.ts:177](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L177)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| alpha | `number` |

**Returns:** `void`

___
<a id="anchorx"></a>

###  anchorX

getanchorX(): `number`setanchorX(anchorX: *`number`*): `void`

*Inherited from [Layer](layer.md).[anchorX](layer.md#anchorx)*

*Defined in [display/Layer.ts:96](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L96)*

**Returns:** `number`

*Inherited from [Layer](layer.md).[anchorX](layer.md#anchorx)*

*Defined in [display/Layer.ts:100](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L100)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| anchorX | `number` |

**Returns:** `void`

___
<a id="anchory"></a>

###  anchorY

getanchorY(): `number`setanchorY(anchorY: *`number`*): `void`

*Inherited from [Layer](layer.md).[anchorY](layer.md#anchory)*

*Defined in [display/Layer.ts:107](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L107)*

**Returns:** `number`

*Inherited from [Layer](layer.md).[anchorY](layer.md#anchory)*

*Defined in [display/Layer.ts:111](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L111)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| anchorY | `number` |

**Returns:** `void`

___
<a id="backgroundcolor"></a>

###  backgroundColor

getbackgroundColor(): `string`setbackgroundColor(backgroundColor: *`string`*): `void`

*Inherited from [Layer](layer.md).[backgroundColor](layer.md#backgroundcolor)*

*Defined in [display/Layer.ts:204](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L204)*

**Returns:** `string`

*Inherited from [Layer](layer.md).[backgroundColor](layer.md#backgroundcolor)*

*Defined in [display/Layer.ts:208](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L208)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| backgroundColor | `string` |

**Returns:** `void`

___
<a id="backgroundfillmode"></a>

###  backgroundFillMode

getbackgroundFillMode(): [FillMode](../#fillmode)setbackgroundFillMode(backgroundFillMode: *[FillMode](../#fillmode)*): `void`

*Inherited from [Layer](layer.md).[backgroundFillMode](layer.md#backgroundfillmode)*

*Defined in [display/Layer.ts:227](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L227)*

**Returns:** [FillMode](../#fillmode)

*Inherited from [Layer](layer.md).[backgroundFillMode](layer.md#backgroundfillmode)*

*Defined in [display/Layer.ts:231](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L231)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| backgroundFillMode | [FillMode](../#fillmode) |

**Returns:** `void`

___
<a id="backgroundimage"></a>

###  backgroundImage

getbackgroundImage(): [Texture](texture.md)setbackgroundImage(backgroundImage: *[Texture](texture.md)*): `void`

*Inherited from [Layer](layer.md).[backgroundImage](layer.md#backgroundimage)*

*Defined in [display/Layer.ts:215](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L215)*

**Returns:** [Texture](texture.md)

*Inherited from [Layer](layer.md).[backgroundImage](layer.md#backgroundimage)*

*Defined in [display/Layer.ts:219](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L219)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| backgroundImage | [Texture](texture.md) |

**Returns:** `void`

___
<a id="canvas"></a>

###  canvas

getcanvas(): `HTMLCanvasElement`

*Inherited from [Layer](layer.md).[canvas](layer.md#canvas)*

*Defined in [display/Layer.ts:259](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L259)*

**Returns:** `HTMLCanvasElement`

___
<a id="children"></a>

###  children

getchildren(): `Array`<[Layer](layer.md)>

*Inherited from [Layer](layer.md).[children](layer.md#children)*

*Defined in [display/Layer.ts:251](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L251)*

**Returns:** `Array`<[Layer](layer.md)>

___
<a id="cliprect"></a>

###  clipRect

getclipRect(): [Rectangle](rectangle.md)setclipRect(clipRect: *[Rectangle](rectangle.md)*): `void`

*Inherited from [Image](image.md).[clipRect](image.md#cliprect)*

*Defined in [display/Image.ts:41](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Image.ts#L41)*

**Returns:** [Rectangle](rectangle.md)

*Inherited from [Image](image.md).[clipRect](image.md#cliprect)*

*Defined in [display/Image.ts:45](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Image.ts#L45)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| clipRect | [Rectangle](rectangle.md) |

**Returns:** `void`

___
<a id="currentframe"></a>

###  currentFrame

getcurrentFrame(): `number`

*Defined in [display/MovieClip.ts:43](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/MovieClip.ts#L43)*

**Returns:** `number`

___
<a id="dirty"></a>

###  dirty

getdirty(): `boolean`

*Inherited from [Layer](layer.md).[dirty](layer.md#dirty)*

*Defined in [display/Layer.ts:239](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L239)*

**Returns:** `boolean`

___
<a id="height"></a>

###  height

getheight(): `number`setheight(height: *`number`*): `void`

*Inherited from [Layer](layer.md).[height](layer.md#height)*

*Defined in [display/Layer.ts:85](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L85)*

**Returns:** `number`

*Inherited from [Layer](layer.md).[height](layer.md#height)*

*Defined in [display/Layer.ts:89](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L89)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| height | `number` |

**Returns:** `void`

___
<a id="interval"></a>

###  interval

getinterval(): `number`setinterval(interval: *`number`*): `void`

*Defined in [display/MovieClip.ts:31](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/MovieClip.ts#L31)*

**Returns:** `number`

*Defined in [display/MovieClip.ts:35](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/MovieClip.ts#L35)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| interval | `number` |

**Returns:** `void`

___
<a id="loop"></a>

###  loop

getloop(): `boolean`setloop(loop: *`boolean`*): `void`

*Defined in [display/MovieClip.ts:23](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/MovieClip.ts#L23)*

**Returns:** `boolean`

*Defined in [display/MovieClip.ts:27](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/MovieClip.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| loop | `boolean` |

**Returns:** `void`

___
<a id="parent"></a>

###  parent

getparent(): [Layer](layer.md)

*Inherited from [Layer](layer.md).[parent](layer.md#parent)*

*Defined in [display/Layer.ts:247](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L247)*

**Returns:** [Layer](layer.md)

___
<a id="paused"></a>

###  paused

getpaused(): `boolean`

*Defined in [display/MovieClip.ts:39](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/MovieClip.ts#L39)*

**Returns:** `boolean`

___
<a id="rotation"></a>

###  rotation

getrotation(): `number`setrotation(rotation: *`number`*): `void`

*Inherited from [Layer](layer.md).[rotation](layer.md#rotation)*

*Defined in [display/Layer.ts:162](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L162)*

**Returns:** `number`

*Inherited from [Layer](layer.md).[rotation](layer.md#rotation)*

*Defined in [display/Layer.ts:166](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L166)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| rotation | `number` |

**Returns:** `void`

___
<a id="scale9grid"></a>

###  scale9Grid

getscale9Grid(): [Rectangle](rectangle.md)setscale9Grid(scale9Grid: *[Rectangle](rectangle.md)*): `void`

*Inherited from [Image](image.md).[scale9Grid](image.md#scale9grid)*

*Defined in [display/Image.ts:50](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Image.ts#L50)*

**Returns:** [Rectangle](rectangle.md)

*Inherited from [Image](image.md).[scale9Grid](image.md#scale9grid)*

*Defined in [display/Image.ts:54](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Image.ts#L54)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| scale9Grid | [Rectangle](rectangle.md) |

**Returns:** `void`

___
<a id="scalex"></a>

###  scaleX

getscaleX(): `number`setscaleX(scaleX: *`number`*): `void`

*Inherited from [Layer](layer.md).[scaleX](layer.md#scalex)*

*Defined in [display/Layer.ts:140](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L140)*

**Returns:** `number`

*Inherited from [Layer](layer.md).[scaleX](layer.md#scalex)*

*Defined in [display/Layer.ts:144](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L144)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| scaleX | `number` |

**Returns:** `void`

___
<a id="scaley"></a>

###  scaleY

getscaleY(): `number`setscaleY(scaleY: *`number`*): `void`

*Inherited from [Layer](layer.md).[scaleY](layer.md#scaley)*

*Defined in [display/Layer.ts:151](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L151)*

**Returns:** `number`

*Inherited from [Layer](layer.md).[scaleY](layer.md#scaley)*

*Defined in [display/Layer.ts:155](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L155)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| scaleY | `number` |

**Returns:** `void`

___
<a id="skewx"></a>

###  skewX

getskewX(): `number`setskewX(skewX: *`number`*): `void`

*Inherited from [Layer](layer.md).[skewX](layer.md#skewx)*

*Defined in [display/Layer.ts:118](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L118)*

**Returns:** `number`

*Inherited from [Layer](layer.md).[skewX](layer.md#skewx)*

*Defined in [display/Layer.ts:122](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L122)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| skewX | `number` |

**Returns:** `void`

___
<a id="skewy"></a>

###  skewY

getskewY(): `number`setskewY(skewY: *`number`*): `void`

*Inherited from [Layer](layer.md).[skewY](layer.md#skewy)*

*Defined in [display/Layer.ts:129](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L129)*

**Returns:** `number`

*Inherited from [Layer](layer.md).[skewY](layer.md#skewy)*

*Defined in [display/Layer.ts:133](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L133)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| skewY | `number` |

**Returns:** `void`

___
<a id="smoothing"></a>

###  smoothing

getsmoothing(): `boolean`setsmoothing(smoothing: *`boolean`*): `void`

*Inherited from [Layer](layer.md).[smoothing](layer.md#smoothing)*

*Defined in [display/Layer.ts:195](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L195)*

**Returns:** `boolean`

*Inherited from [Layer](layer.md).[smoothing](layer.md#smoothing)*

*Defined in [display/Layer.ts:199](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L199)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| smoothing | `boolean` |

**Returns:** `void`

___
<a id="stage"></a>

###  stage

getstage(): [Stage](stage.md)

*Inherited from [Layer](layer.md).[stage](layer.md#stage)*

*Defined in [display/Layer.ts:243](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L243)*

**Returns:** [Stage](stage.md)

___
<a id="texture"></a>

###  texture

gettexture(): [Texture](texture.md)settexture(texture: *[Texture](texture.md)*): `void`

*Inherited from [Image](image.md).[texture](image.md#texture)*

*Defined in [display/Image.ts:24](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Image.ts#L24)*

**Returns:** [Texture](texture.md)

*Inherited from [Image](image.md).[texture](image.md#texture)*

*Defined in [display/Image.ts:28](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Image.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| texture | [Texture](texture.md) |

**Returns:** `void`

___
<a id="ticker"></a>

###  ticker

getticker(): [Ticker](ticker.md)

*Inherited from [Layer](layer.md).[ticker](layer.md#ticker)*

*Defined in [display/Layer.ts:255](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L255)*

**Returns:** [Ticker](ticker.md)

___
<a id="totalframes"></a>

###  totalFrames

gettotalFrames(): `number`

*Defined in [display/MovieClip.ts:47](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/MovieClip.ts#L47)*

**Returns:** `number`

___
<a id="visible"></a>

###  visible

getvisible(): `boolean`setvisible(visible: *`boolean`*): `void`

*Inherited from [Layer](layer.md).[visible](layer.md#visible)*

*Defined in [display/Layer.ts:184](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L184)*

**Returns:** `boolean`

*Inherited from [Layer](layer.md).[visible](layer.md#visible)*

*Defined in [display/Layer.ts:188](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L188)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| visible | `boolean` |

**Returns:** `void`

___
<a id="width"></a>

###  width

getwidth(): `number`setwidth(width: *`number`*): `void`

*Inherited from [Layer](layer.md).[width](layer.md#width)*

*Defined in [display/Layer.ts:74](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L74)*

**Returns:** `number`

*Inherited from [Layer](layer.md).[width](layer.md#width)*

*Defined in [display/Layer.ts:78](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L78)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| width | `number` |

**Returns:** `void`

___
<a id="x"></a>

###  x

getx(): `number`setx(x: *`number`*): `void`

*Inherited from [Layer](layer.md).[x](layer.md#x)*

*Defined in [display/Layer.ts:52](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L52)*

**Returns:** `number`

*Inherited from [Layer](layer.md).[x](layer.md#x)*

*Defined in [display/Layer.ts:56](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L56)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |

**Returns:** `void`

___
<a id="y"></a>

###  y

gety(): `number`sety(y: *`number`*): `void`

*Inherited from [Layer](layer.md).[y](layer.md#y)*

*Defined in [display/Layer.ts:63](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L63)*

**Returns:** `number`

*Inherited from [Layer](layer.md).[y](layer.md#y)*

*Defined in [display/Layer.ts:67](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L67)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| y | `number` |

**Returns:** `void`

___

## Methods

<a id="_drawbackground"></a>

### `<Protected>` $drawBackground

▸ **$drawBackground**(color: *`string`*, texture: *[Texture](texture.md)*, pattern: *`CanvasPattern`*, fillMode: *[FillMode](../#fillmode)*, context?: *`CanvasRenderingContext2D`*): `void`

*Inherited from [Layer](layer.md).[$drawBackground](layer.md#_drawbackground)*

*Defined in [display/Layer.ts:639](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L639)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| color | `string` |
| texture | [Texture](texture.md) |
| pattern | `CanvasPattern` |
| fillMode | [FillMode](../#fillmode) |
| `Optional` context | `CanvasRenderingContext2D` |

**Returns:** `void`

___
<a id="_drawchild"></a>

### `<Protected>` $drawChild

▸ **$drawChild**(child: *[Layer](layer.md)*): `number`

*Inherited from [Layer](layer.md).[$drawChild](layer.md#_drawchild)*

*Defined in [display/Layer.ts:663](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L663)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| child | [Layer](layer.md) |

**Returns:** `number`

___
<a id="_drawtexture"></a>

### `<Protected>` $drawTexture

▸ **$drawTexture**(sourceX: *`number`*, sourceY: *`number`*, sourceW: *`number`*, sourceH: *`number`*, targetX: *`number`*, targetY: *`number`*, targetW: *`number`*, targetH: *`number`*): `void`

*Inherited from [Image](image.md).[$drawTexture](image.md#_drawtexture)*

*Defined in [display/Image.ts:80](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Image.ts#L80)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sourceX | `number` |
| sourceY | `number` |
| sourceW | `number` |
| sourceH | `number` |
| targetX | `number` |
| targetY | `number` |
| targetW | `number` |
| targetH | `number` |

**Returns:** `void`

___
<a id="_emitadded"></a>

### `<Protected>` $emitAdded

▸ **$emitAdded**(parent: *[Layer](layer.md)*): `void`

*Inherited from [Layer](layer.md).[$emitAdded](layer.md#_emitadded)*

*Defined in [display/Layer.ts:569](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L569)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| parent | [Layer](layer.md) |

**Returns:** `void`

___
<a id="_emitaddedtostage"></a>

### `<Protected>` $emitAddedToStage

▸ **$emitAddedToStage**(stage: *[Stage](stage.md)*): `void`

*Inherited from [Layer](layer.md).[$emitAddedToStage](layer.md#_emitaddedtostage)*

*Defined in [display/Layer.ts:587](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L587)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| stage | [Stage](stage.md) |

**Returns:** `void`

___
<a id="_emitremoved"></a>

### `<Protected>` $emitRemoved

▸ **$emitRemoved**(): `void`

*Inherited from [Layer](layer.md).[$emitRemoved](layer.md#_emitremoved)*

*Defined in [display/Layer.ts:578](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L578)*

**Returns:** `void`

___
<a id="_emitremovedfromstage"></a>

### `<Protected>` $emitRemovedFromStage

▸ **$emitRemovedFromStage**(): `void`

*Inherited from [Layer](layer.md).[$emitRemovedFromStage](layer.md#_emitremovedfromstage)*

*Defined in [display/Layer.ts:600](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L600)*

**Returns:** `void`

___
<a id="_emittouchevent"></a>

### `<Protected>` $emitTouchEvent

▸ **$emitTouchEvent**(event: *[TouchEvent](touchevent.md)*, inside: *`boolean`*): `boolean`

*Inherited from [Layer](layer.md).[$emitTouchEvent](layer.md#_emittouchevent)*

*Defined in [display/Layer.ts:521](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L521)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [TouchEvent](touchevent.md) |
| inside | `boolean` |

**Returns:** `boolean`

___
<a id="_getchildbounds"></a>

### `<Protected>` $getChildBounds

▸ **$getChildBounds**(child: *[Layer](layer.md)*): [Rectangle](rectangle.md)

*Inherited from [Layer](layer.md).[$getChildBounds](layer.md#_getchildbounds)*

*Defined in [display/Layer.ts:475](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L475)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| child | [Layer](layer.md) |

**Returns:** [Rectangle](rectangle.md)

___
<a id="_getchildtransform"></a>

### `<Protected>` $getChildTransform

▸ **$getChildTransform**(child: *[Layer](layer.md)*): [Matrix](matrix.md)

*Inherited from [Layer](layer.md).[$getChildTransform](layer.md#_getchildtransform)*

*Defined in [display/Layer.ts:471](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L471)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| child | [Layer](layer.md) |

**Returns:** [Matrix](matrix.md)

___
<a id="_getcontentbounds"></a>

### `<Protected>` $getContentBounds

▸ **$getContentBounds**(): [Rectangle](rectangle.md)

*Inherited from [Image](image.md).[$getContentBounds](image.md#_getcontentbounds)*

*Overrides [Layer](layer.md).[$getContentBounds](layer.md#_getcontentbounds)*

*Defined in [display/Image.ts:64](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Image.ts#L64)*

**Returns:** [Rectangle](rectangle.md)

___
<a id="_getpattern"></a>

### `<Protected>` $getPattern

▸ **$getPattern**(texture: *[Texture](texture.md)*, fillMode: *[FillMode](../#fillmode)*): `CanvasPattern`

*Inherited from [Layer](layer.md).[$getPattern](layer.md#_getpattern)*

*Defined in [display/Layer.ts:613](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L613)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| texture | [Texture](texture.md) |
| fillMode | [FillMode](../#fillmode) |

**Returns:** `CanvasPattern`

___
<a id="_gettransform"></a>

### `<Protected>` $getTransform

▸ **$getTransform**(): [Matrix](matrix.md)

*Inherited from [Layer](layer.md).[$getTransform](layer.md#_gettransform)*

*Defined in [display/Layer.ts:463](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L463)*

**Returns:** [Matrix](matrix.md)

___
<a id="_gotoframe"></a>

### `<Protected>` $gotoFrame

▸ **$gotoFrame**(frame: *`number`*): `void`

*Defined in [display/MovieClip.ts:98](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/MovieClip.ts#L98)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| frame | `number` |

**Returns:** `void`

___
<a id="_ischildvisible"></a>

### `<Protected>` $isChildVisible

▸ **$isChildVisible**(child: *[Layer](layer.md)*): `boolean`

*Inherited from [Layer](layer.md).[$isChildVisible](layer.md#_ischildvisible)*

*Defined in [display/Layer.ts:625](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L625)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| child | [Layer](layer.md) |

**Returns:** `boolean`

___
<a id="_localhittest"></a>

### `<Protected>` $localHitTest

▸ **$localHitTest**(vector: *[Vector](vector.md)*): `boolean`

*Inherited from [Layer](layer.md).[$localHitTest](layer.md#_localhittest)*

*Defined in [display/Layer.ts:621](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L621)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| vector | [Vector](vector.md) |

**Returns:** `boolean`

___
<a id="_markdirty"></a>

### `<Protected>` $markDirty

▸ **$markDirty**(sizeDirty?: *`boolean`*): `void`

*Inherited from [Layer](layer.md).[$markDirty](layer.md#_markdirty)*

*Defined in [display/Layer.ts:418](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L418)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` sizeDirty | `boolean` |

**Returns:** `void`

___
<a id="_markparentdirty"></a>

### `<Protected>` $markParentDirty

▸ **$markParentDirty**(): `void`

*Inherited from [Layer](layer.md).[$markParentDirty](layer.md#_markparentdirty)*

*Defined in [display/Layer.ts:427](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L427)*

**Returns:** `void`

___
<a id="_ontextureload"></a>

### `<Protected>` $onTextureLoad

▸ **$onTextureLoad**(): `void`

*Inherited from [Image](image.md).[$onTextureLoad](image.md#_ontextureload)*

*Defined in [display/Image.ts:59](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Image.ts#L59)*

**Returns:** `void`

___
<a id="_render"></a>

### `<Protected>` $render

▸ **$render**(): `number`

*Inherited from [Image](image.md).[$render](image.md#_render)*

*Overrides [Layer](layer.md).[$render](layer.md#_render)*

*Defined in [display/Image.ts:89](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Image.ts#L89)*

**Returns:** `number`

___
<a id="_resizecanvas"></a>

### `<Protected>` $resizeCanvas

▸ **$resizeCanvas**(): `void`

*Inherited from [Layer](layer.md).[$resizeCanvas](layer.md#_resizecanvas)*

*Defined in [display/Layer.ts:433](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L433)*

**Returns:** `void`

___
<a id="_resizeparentcanvas"></a>

### `<Protected>` $resizeParentCanvas

▸ **$resizeParentCanvas**(): `void`

*Inherited from [Layer](layer.md).[$resizeParentCanvas](layer.md#_resizeparentcanvas)*

*Defined in [display/Layer.ts:457](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L457)*

**Returns:** `void`

___
<a id="addchild"></a>

###  addChild

▸ **addChild**(child: *[Layer](layer.md)*): `this`

*Inherited from [Layer](layer.md).[addChild](layer.md#addchild)*

*Defined in [display/Layer.ts:269](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L269)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| child | [Layer](layer.md) |

**Returns:** `this`

___
<a id="addchildat"></a>

###  addChildAt

▸ **addChildAt**(child: *[Layer](layer.md)*, index: *`number`*): `this`

*Inherited from [Layer](layer.md).[addChildAt](layer.md#addchildat)*

*Defined in [display/Layer.ts:273](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L273)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| child | [Layer](layer.md) |
| index | `number` |

**Returns:** `this`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *[Event](event.md)*): `boolean`

▸ **emit**(type: *`string`*, ...args: *`any`[]*): `boolean`

*Inherited from [EventEmitter](eventemitter.md).[emit](eventemitter.md#emit)*

*Defined in [event/EventEmitter.ts:27](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/EventEmitter.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [Event](event.md) |

**Returns:** `boolean`

*Inherited from [EventEmitter](eventemitter.md).[emit](eventemitter.md#emit)*

*Defined in [event/EventEmitter.ts:28](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/EventEmitter.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="getchildat"></a>

###  getChildAt

▸ **getChildAt**(index: *`number`*): [Layer](layer.md)

*Inherited from [Layer](layer.md).[getChildAt](layer.md#getchildat)*

*Defined in [display/Layer.ts:311](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L311)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Layer](layer.md)

___
<a id="getchildbyname"></a>

###  getChildByName

▸ **getChildByName**(name: *`string`*): [Layer](layer.md)

*Inherited from [Layer](layer.md).[getChildByName](layer.md#getchildbyname)*

*Defined in [display/Layer.ts:290](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L290)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** [Layer](layer.md)

___
<a id="getchildindex"></a>

###  getChildIndex

▸ **getChildIndex**(child: *[Layer](layer.md)*): `number`

*Inherited from [Layer](layer.md).[getChildIndex](layer.md#getchildindex)*

*Defined in [display/Layer.ts:315](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L315)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| child | [Layer](layer.md) |

**Returns:** `number`

___
<a id="getchildrenbytag"></a>

###  getChildrenByTag

▸ **getChildrenByTag**(tag: *`string`*): `Array`<[Layer](layer.md)>

*Inherited from [Layer](layer.md).[getChildrenByTag](layer.md#getchildrenbytag)*

*Defined in [display/Layer.ts:300](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L300)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| tag | `string` |

**Returns:** `Array`<[Layer](layer.md)>

___
<a id="gotoandplay"></a>

###  gotoAndPlay

▸ **gotoAndPlay**(frame: *`number`*): `this`

*Defined in [display/MovieClip.ts:70](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/MovieClip.ts#L70)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| frame | `number` |

**Returns:** `this`

___
<a id="gotoandstop"></a>

###  gotoAndStop

▸ **gotoAndStop**(frame: *`number`*): `this`

*Defined in [display/MovieClip.ts:92](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/MovieClip.ts#L92)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| frame | `number` |

**Returns:** `this`

___
<a id="haschild"></a>

###  hasChild

▸ **hasChild**(child: *[Layer](layer.md)*): `boolean`

*Inherited from [Layer](layer.md).[hasChild](layer.md#haschild)*

*Defined in [display/Layer.ts:319](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L319)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| child | [Layer](layer.md) |

**Returns:** `boolean`

___
<a id="haseventlistener"></a>

###  hasEventListener

▸ **hasEventListener**(type: *`string`*): `boolean`

*Inherited from [EventEmitter](eventemitter.md).[hasEventListener](eventemitter.md#haseventlistener)*

*Defined in [event/EventEmitter.ts:56](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/EventEmitter.ts#L56)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |

**Returns:** `boolean`

___
<a id="nextframe"></a>

###  nextFrame

▸ **nextFrame**(): `this`

*Defined in [display/MovieClip.ts:66](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/MovieClip.ts#L66)*

**Returns:** `this`

___
<a id="off"></a>

###  off

▸ **off**(type: *`string`*, listener?: *`function`*): `this`

*Inherited from [Layer](layer.md).[off](layer.md#off)*

*Overrides [EventEmitter](eventemitter.md).[off](eventemitter.md#off)*

*Defined in [display/Layer.ts:742](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L742)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| `Optional` listener | `function` |

**Returns:** `this`

___
<a id="on"></a>

###  on

▸ **on**(type: *`string`*, listener: *`function`*): `this`

*Inherited from [Layer](layer.md).[on](layer.md#on)*

*Overrides [EventEmitter](eventemitter.md).[on](eventemitter.md#on)*

*Defined in [display/Layer.ts:726](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L726)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| listener | `function` |

**Returns:** `this`

___
<a id="pause"></a>

###  pause

▸ **pause**(): `this`

*Defined in [display/MovieClip.ts:56](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/MovieClip.ts#L56)*

**Returns:** `this`

___
<a id="play"></a>

###  play

▸ **play**(): `this`

*Defined in [display/MovieClip.ts:51](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/MovieClip.ts#L51)*

**Returns:** `this`

___
<a id="removeallchildren"></a>

###  removeAllChildren

▸ **removeAllChildren**(): `this`

*Inherited from [Layer](layer.md).[removeAllChildren](layer.md#removeallchildren)*

*Defined in [display/Layer.ts:401](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L401)*

**Returns:** `this`

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(): `this`

*Inherited from [EventEmitter](eventemitter.md).[removeAllListeners](eventemitter.md#removealllisteners)*

*Defined in [event/EventEmitter.ts:61](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/EventEmitter.ts#L61)*

**Returns:** `this`

___
<a id="removechild"></a>

###  removeChild

▸ **removeChild**(child: *[Layer](layer.md)*): `this`

*Inherited from [Layer](layer.md).[removeChild](layer.md#removechild)*

*Defined in [display/Layer.ts:364](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L364)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| child | [Layer](layer.md) |

**Returns:** `this`

___
<a id="removechildat"></a>

###  removeChildAt

▸ **removeChildAt**(index: *`number`*): `this`

*Inherited from [Layer](layer.md).[removeChildAt](layer.md#removechildat)*

*Defined in [display/Layer.ts:369](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L369)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** `this`

___
<a id="removechildbyname"></a>

###  removeChildByName

▸ **removeChildByName**(name: *`string`*): `this`

*Inherited from [Layer](layer.md).[removeChildByName](layer.md#removechildbyname)*

*Defined in [display/Layer.ts:378](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L378)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `this`

___
<a id="removechildrenbytag"></a>

###  removeChildrenByTag

▸ **removeChildrenByTag**(tag: *`string`*): `this`

*Inherited from [Layer](layer.md).[removeChildrenByTag](layer.md#removechildrenbytag)*

*Defined in [display/Layer.ts:390](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L390)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| tag | `string` |

**Returns:** `this`

___
<a id="removeself"></a>

###  removeSelf

▸ **removeSelf**(): `this`

*Inherited from [Layer](layer.md).[removeSelf](layer.md#removeself)*

*Defined in [display/Layer.ts:411](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L411)*

**Returns:** `this`

___
<a id="replacechild"></a>

###  replaceChild

▸ **replaceChild**(oldChild: *[Layer](layer.md)*, newChild: *[Layer](layer.md)*): `this`

*Inherited from [Layer](layer.md).[replaceChild](layer.md#replacechild)*

*Defined in [display/Layer.ts:283](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L283)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| oldChild | [Layer](layer.md) |
| newChild | [Layer](layer.md) |

**Returns:** `this`

___
<a id="resize"></a>

###  resize

▸ **resize**(width: *`number`*, height: *`number`*): `this`

*Inherited from [Layer](layer.md).[resize](layer.md#resize)*

*Defined in [display/Layer.ts:263](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L263)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| width | `number` |
| height | `number` |

**Returns:** `this`

___
<a id="setchildindex"></a>

###  setChildIndex

▸ **setChildIndex**(child: *[Layer](layer.md)*, index: *`number`*): `this`

*Inherited from [Layer](layer.md).[setChildIndex](layer.md#setchildindex)*

*Defined in [display/Layer.ts:345](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L345)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| child | [Layer](layer.md) |
| index | `number` |

**Returns:** `this`

___
<a id="swapchildren"></a>

###  swapChildren

▸ **swapChildren**(child1: *[Layer](layer.md)*, child2: *[Layer](layer.md)*): `this`

*Inherited from [Layer](layer.md).[swapChildren](layer.md#swapchildren)*

*Defined in [display/Layer.ts:323](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L323)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| child1 | [Layer](layer.md) |
| child2 | [Layer](layer.md) |

**Returns:** `this`

___
<a id="swapchildrenat"></a>

###  swapChildrenAt

▸ **swapChildrenAt**(index1: *`number`*, index2: *`number`*): `this`

*Inherited from [Layer](layer.md).[swapChildrenAt](layer.md#swapchildrenat)*

*Defined in [display/Layer.ts:332](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L332)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index1 | `number` |
| index2 | `number` |

**Returns:** `this`

___

