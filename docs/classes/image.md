[API Reference](../README.md) > [Image](../classes/image.md)

# Class: Image

## Hierarchy

↳  [Layer](layer.md)

**↳ Image**

↳  [MovieClip](movieclip.md)

## Index

### Constructors

* [constructor](image.md#constructor)

### Properties

* [$alpha](image.md#_alpha)
* [$anchorX](image.md#_anchorx)
* [$anchorY](image.md#_anchory)
* [$backgroundColor](image.md#_backgroundcolor)
* [$backgroundFillMode](image.md#_backgroundfillmode)
* [$backgroundImage](image.md#_backgroundimage)
* [$backgroundPattern](image.md#_backgroundpattern)
* [$boundOnTextureLoad](image.md#_boundontextureload)
* [$canvas](image.md#_canvas)
* [$children](image.md#_children)
* [$clipRect](image.md#_cliprect)
* [$context](image.md#_context)
* [$dirty](image.md#_dirty)
* [$events](image.md#_events)
* [$height](image.md#_height)
* [$parent](image.md#_parent)
* [$rotation](image.md#_rotation)
* [$scale9Grid](image.md#_scale9grid)
* [$scaleX](image.md#_scalex)
* [$scaleY](image.md#_scaley)
* [$shouldEmitTap](image.md#_shouldemittap)
* [$skewX](image.md#_skewx)
* [$skewY](image.md#_skewy)
* [$smoothing](image.md#_smoothing)
* [$stage](image.md#_stage)
* [$texture](image.md#_texture)
* [$touches](image.md#_touches)
* [$visible](image.md#_visible)
* [$width](image.md#_width)
* [$x](image.md#_x)
* [$y](image.md#_y)
* [name](image.md#name)
* [tag](image.md#tag)
* [touchable](image.md#touchable)
* [pixelRatio](image.md#pixelratio)

### Accessors

* [alpha](image.md#alpha)
* [anchorX](image.md#anchorx)
* [anchorY](image.md#anchory)
* [backgroundColor](image.md#backgroundcolor)
* [backgroundFillMode](image.md#backgroundfillmode)
* [backgroundImage](image.md#backgroundimage)
* [canvas](image.md#canvas)
* [children](image.md#children)
* [clipRect](image.md#cliprect)
* [dirty](image.md#dirty)
* [height](image.md#height)
* [parent](image.md#parent)
* [rotation](image.md#rotation)
* [scale9Grid](image.md#scale9grid)
* [scaleX](image.md#scalex)
* [scaleY](image.md#scaley)
* [skewX](image.md#skewx)
* [skewY](image.md#skewy)
* [smoothing](image.md#smoothing)
* [stage](image.md#stage)
* [texture](image.md#texture)
* [ticker](image.md#ticker)
* [visible](image.md#visible)
* [width](image.md#width)
* [x](image.md#x)
* [y](image.md#y)

### Methods

* [$drawBackground](image.md#_drawbackground)
* [$drawChild](image.md#_drawchild)
* [$drawTexture](image.md#_drawtexture)
* [$emitAdded](image.md#_emitadded)
* [$emitAddedToStage](image.md#_emitaddedtostage)
* [$emitRemoved](image.md#_emitremoved)
* [$emitRemovedFromStage](image.md#_emitremovedfromstage)
* [$emitTouchEvent](image.md#_emittouchevent)
* [$getChildBounds](image.md#_getchildbounds)
* [$getChildTransform](image.md#_getchildtransform)
* [$getContentBounds](image.md#_getcontentbounds)
* [$getPattern](image.md#_getpattern)
* [$getTransform](image.md#_gettransform)
* [$isChildVisible](image.md#_ischildvisible)
* [$localHitTest](image.md#_localhittest)
* [$markDirty](image.md#_markdirty)
* [$markParentDirty](image.md#_markparentdirty)
* [$onTextureLoad](image.md#_ontextureload)
* [$render](image.md#_render)
* [$resizeCanvas](image.md#_resizecanvas)
* [$resizeParentCanvas](image.md#_resizeparentcanvas)
* [addChild](image.md#addchild)
* [addChildAt](image.md#addchildat)
* [emit](image.md#emit)
* [getChildAt](image.md#getchildat)
* [getChildByName](image.md#getchildbyname)
* [getChildIndex](image.md#getchildindex)
* [getChildrenByTag](image.md#getchildrenbytag)
* [hasChild](image.md#haschild)
* [hasEventListener](image.md#haseventlistener)
* [off](image.md#off)
* [on](image.md#on)
* [removeAllChildren](image.md#removeallchildren)
* [removeAllListeners](image.md#removealllisteners)
* [removeChild](image.md#removechild)
* [removeChildAt](image.md#removechildat)
* [removeChildByName](image.md#removechildbyname)
* [removeChildrenByTag](image.md#removechildrenbytag)
* [removeSelf](image.md#removeself)
* [replaceChild](image.md#replacechild)
* [resize](image.md#resize)
* [setChildIndex](image.md#setchildindex)
* [swapChildren](image.md#swapchildren)
* [swapChildrenAt](image.md#swapchildrenat)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Image**(texture?: *[Texture](texture.md)*): [Image](image.md)

⊕ **new Image**(texture: *[Texture](texture.md)*, width: *`number`*, height: *`number`*): [Image](image.md)

*Overrides [Layer](layer.md).[constructor](layer.md#constructor)*

*Defined in [display/Image.ts:10](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Image.ts#L10)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` texture | [Texture](texture.md) |

**Returns:** [Image](image.md)

*Overrides [Layer](layer.md).[constructor](layer.md#constructor)*

*Defined in [display/Image.ts:12](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Image.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| texture | [Texture](texture.md) |
| width | `number` |
| height | `number` |

**Returns:** [Image](image.md)

___

## Properties

<a id="_alpha"></a>

### `<Protected>` $alpha

**● $alpha**: *`number`* = 1

*Inherited from [Layer](layer.md).[$alpha](layer.md#_alpha)*

*Defined in [display/Layer.ts:30](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L30)*

___
<a id="_anchorx"></a>

### `<Protected>` $anchorX

**● $anchorX**: *`number`* = 0

*Inherited from [Layer](layer.md).[$anchorX](layer.md#_anchorx)*

*Defined in [display/Layer.ts:23](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L23)*

___
<a id="_anchory"></a>

### `<Protected>` $anchorY

**● $anchorY**: *`number`* = 0

*Inherited from [Layer](layer.md).[$anchorY](layer.md#_anchory)*

*Defined in [display/Layer.ts:24](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L24)*

___
<a id="_backgroundcolor"></a>

### `<Protected>` $backgroundColor

**● $backgroundColor**: *`string`* =  null

*Inherited from [Layer](layer.md).[$backgroundColor](layer.md#_backgroundcolor)*

*Defined in [display/Layer.ts:33](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L33)*

___
<a id="_backgroundfillmode"></a>

### `<Protected>` $backgroundFillMode

**● $backgroundFillMode**: *[FillMode](../#fillmode)* =  Texture.SCALE

*Inherited from [Layer](layer.md).[$backgroundFillMode](layer.md#_backgroundfillmode)*

*Defined in [display/Layer.ts:36](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L36)*

___
<a id="_backgroundimage"></a>

### `<Protected>` $backgroundImage

**● $backgroundImage**: *[Texture](texture.md)* =  null

*Inherited from [Layer](layer.md).[$backgroundImage](layer.md#_backgroundimage)*

*Defined in [display/Layer.ts:34](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L34)*

___
<a id="_backgroundpattern"></a>

### `<Protected>` $backgroundPattern

**● $backgroundPattern**: *`CanvasPattern`* =  null

*Inherited from [Layer](layer.md).[$backgroundPattern](layer.md#_backgroundpattern)*

*Defined in [display/Layer.ts:35](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L35)*

___
<a id="_boundontextureload"></a>

### `<Protected>` $boundOnTextureLoad

**● $boundOnTextureLoad**: *`function`*

*Defined in [display/Image.ts:10](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Image.ts#L10)*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="_canvas"></a>

### `<Protected>` $canvas

**● $canvas**: *`HTMLCanvasElement`*

*Inherited from [Layer](layer.md).[$canvas](layer.md#_canvas)*

*Defined in [display/Layer.ts:43](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L43)*

___
<a id="_children"></a>

### `<Protected>` $children

**● $children**: *`Array`<[Layer](layer.md)>* =  []

*Inherited from [Layer](layer.md).[$children](layer.md#_children)*

*Defined in [display/Layer.ts:40](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L40)*

___
<a id="_cliprect"></a>

### `<Protected>` $clipRect

**● $clipRect**: *[Rectangle](rectangle.md)* =  null

*Defined in [display/Image.ts:8](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Image.ts#L8)*

___
<a id="_context"></a>

### `<Protected>` $context

**● $context**: *`CanvasRenderingContext2D`*

*Inherited from [Layer](layer.md).[$context](layer.md#_context)*

*Defined in [display/Layer.ts:44](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L44)*

___
<a id="_dirty"></a>

### `<Protected>` $dirty

**● $dirty**: *`boolean`* = true

*Inherited from [Layer](layer.md).[$dirty](layer.md#_dirty)*

*Defined in [display/Layer.ts:37](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L37)*

___
<a id="_events"></a>

### `<Protected>` $events

**● $events**: *`Object`*

*Inherited from [EventEmitter](eventemitter.md).[$events](eventemitter.md#_events)*

*Defined in [event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/EventEmitter.ts#L5)*

___
<a id="_height"></a>

### `<Protected>` $height

**● $height**: *`number`* = 0

*Inherited from [Layer](layer.md).[$height](layer.md#_height)*

*Defined in [display/Layer.ts:22](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L22)*

___
<a id="_parent"></a>

### `<Protected>` $parent

**● $parent**: *[Layer](layer.md)* =  null

*Inherited from [Layer](layer.md).[$parent](layer.md#_parent)*

*Defined in [display/Layer.ts:39](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L39)*

___
<a id="_rotation"></a>

### `<Protected>` $rotation

**● $rotation**: *`number`* = 0

*Inherited from [Layer](layer.md).[$rotation](layer.md#_rotation)*

*Defined in [display/Layer.ts:29](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L29)*

___
<a id="_scale9grid"></a>

### `<Protected>` $scale9Grid

**● $scale9Grid**: *[Rectangle](rectangle.md)* =  null

*Defined in [display/Image.ts:9](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Image.ts#L9)*

___
<a id="_scalex"></a>

### `<Protected>` $scaleX

**● $scaleX**: *`number`* = 1

*Inherited from [Layer](layer.md).[$scaleX](layer.md#_scalex)*

*Defined in [display/Layer.ts:27](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L27)*

___
<a id="_scaley"></a>

### `<Protected>` $scaleY

**● $scaleY**: *`number`* = 1

*Inherited from [Layer](layer.md).[$scaleY](layer.md#_scaley)*

*Defined in [display/Layer.ts:28](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L28)*

___
<a id="_shouldemittap"></a>

### `<Protected>` $shouldEmitTap

**● $shouldEmitTap**: *`boolean`* = true

*Inherited from [Layer](layer.md).[$shouldEmitTap](layer.md#_shouldemittap)*

*Defined in [display/Layer.ts:41](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L41)*

___
<a id="_skewx"></a>

### `<Protected>` $skewX

**● $skewX**: *`number`* = 0

*Inherited from [Layer](layer.md).[$skewX](layer.md#_skewx)*

*Defined in [display/Layer.ts:25](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L25)*

___
<a id="_skewy"></a>

### `<Protected>` $skewY

**● $skewY**: *`number`* = 0

*Inherited from [Layer](layer.md).[$skewY](layer.md#_skewy)*

*Defined in [display/Layer.ts:26](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L26)*

___
<a id="_smoothing"></a>

### `<Protected>` $smoothing

**● $smoothing**: *`boolean`* = true

*Inherited from [Layer](layer.md).[$smoothing](layer.md#_smoothing)*

*Defined in [display/Layer.ts:32](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L32)*

___
<a id="_stage"></a>

### `<Protected>` $stage

**● $stage**: *[Stage](stage.md)* =  null

*Inherited from [Layer](layer.md).[$stage](layer.md#_stage)*

*Defined in [display/Layer.ts:38](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L38)*

___
<a id="_texture"></a>

### `<Protected>` $texture

**● $texture**: *[Texture](texture.md)* =  null

*Defined in [display/Image.ts:7](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Image.ts#L7)*

___
<a id="_touches"></a>

### `<Protected>` $touches

**● $touches**: *`Array`<`boolean`>* =  []

*Inherited from [Layer](layer.md).[$touches](layer.md#_touches)*

*Defined in [display/Layer.ts:42](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L42)*

___
<a id="_visible"></a>

### `<Protected>` $visible

**● $visible**: *`boolean`* = true

*Inherited from [Layer](layer.md).[$visible](layer.md#_visible)*

*Defined in [display/Layer.ts:31](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L31)*

___
<a id="_width"></a>

### `<Protected>` $width

**● $width**: *`number`* = 0

*Inherited from [Layer](layer.md).[$width](layer.md#_width)*

*Defined in [display/Layer.ts:21](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L21)*

___
<a id="_x"></a>

### `<Protected>` $x

**● $x**: *`number`* = 0

*Inherited from [Layer](layer.md).[$x](layer.md#_x)*

*Defined in [display/Layer.ts:19](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L19)*

___
<a id="_y"></a>

### `<Protected>` $y

**● $y**: *`number`* = 0

*Inherited from [Layer](layer.md).[$y](layer.md#_y)*

*Defined in [display/Layer.ts:20](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L20)*

___
<a id="name"></a>

###  name

**● name**: *`string`* = ""

*Inherited from [Layer](layer.md).[name](layer.md#name)*

*Defined in [display/Layer.ts:15](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L15)*

___
<a id="tag"></a>

###  tag

**● tag**: *`string`* = ""

*Inherited from [Layer](layer.md).[tag](layer.md#tag)*

*Defined in [display/Layer.ts:16](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L16)*

___
<a id="touchable"></a>

###  touchable

**● touchable**: *`boolean`* = true

*Inherited from [Layer](layer.md).[touchable](layer.md#touchable)*

*Defined in [display/Layer.ts:17](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L17)*

___
<a id="pixelratio"></a>

### `<Static>` pixelRatio

**● pixelRatio**: *`number`* =  typeof window === 'undefined' ? 1 : window.devicePixelRatio || 1

*Inherited from [Layer](layer.md).[pixelRatio](layer.md#pixelratio)*

*Defined in [display/Layer.ts:13](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L13)*

___

## Accessors

<a id="alpha"></a>

###  alpha

getalpha(): `number`setalpha(alpha: *`number`*): `void`

*Inherited from [Layer](layer.md).[alpha](layer.md#alpha)*

*Defined in [display/Layer.ts:173](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L173)*

**Returns:** `number`

*Inherited from [Layer](layer.md).[alpha](layer.md#alpha)*

*Defined in [display/Layer.ts:177](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L177)*

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

*Defined in [display/Layer.ts:96](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L96)*

**Returns:** `number`

*Inherited from [Layer](layer.md).[anchorX](layer.md#anchorx)*

*Defined in [display/Layer.ts:100](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L100)*

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

*Defined in [display/Layer.ts:107](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L107)*

**Returns:** `number`

*Inherited from [Layer](layer.md).[anchorY](layer.md#anchory)*

*Defined in [display/Layer.ts:111](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L111)*

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

*Defined in [display/Layer.ts:204](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L204)*

**Returns:** `string`

*Inherited from [Layer](layer.md).[backgroundColor](layer.md#backgroundcolor)*

*Defined in [display/Layer.ts:208](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L208)*

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

*Defined in [display/Layer.ts:227](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L227)*

**Returns:** [FillMode](../#fillmode)

*Inherited from [Layer](layer.md).[backgroundFillMode](layer.md#backgroundfillmode)*

*Defined in [display/Layer.ts:231](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L231)*

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

*Defined in [display/Layer.ts:215](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L215)*

**Returns:** [Texture](texture.md)

*Inherited from [Layer](layer.md).[backgroundImage](layer.md#backgroundimage)*

*Defined in [display/Layer.ts:219](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L219)*

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

*Defined in [display/Layer.ts:259](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L259)*

**Returns:** `HTMLCanvasElement`

___
<a id="children"></a>

###  children

getchildren(): `Array`<[Layer](layer.md)>

*Inherited from [Layer](layer.md).[children](layer.md#children)*

*Defined in [display/Layer.ts:251](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L251)*

**Returns:** `Array`<[Layer](layer.md)>

___
<a id="cliprect"></a>

###  clipRect

getclipRect(): [Rectangle](rectangle.md)setclipRect(clipRect: *[Rectangle](rectangle.md)*): `void`

*Defined in [display/Image.ts:41](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Image.ts#L41)*

**Returns:** [Rectangle](rectangle.md)

*Defined in [display/Image.ts:45](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Image.ts#L45)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| clipRect | [Rectangle](rectangle.md) |

**Returns:** `void`

___
<a id="dirty"></a>

###  dirty

getdirty(): `boolean`

*Inherited from [Layer](layer.md).[dirty](layer.md#dirty)*

*Defined in [display/Layer.ts:239](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L239)*

**Returns:** `boolean`

___
<a id="height"></a>

###  height

getheight(): `number`setheight(height: *`number`*): `void`

*Inherited from [Layer](layer.md).[height](layer.md#height)*

*Defined in [display/Layer.ts:85](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L85)*

**Returns:** `number`

*Inherited from [Layer](layer.md).[height](layer.md#height)*

*Defined in [display/Layer.ts:89](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L89)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| height | `number` |

**Returns:** `void`

___
<a id="parent"></a>

###  parent

getparent(): [Layer](layer.md)

*Inherited from [Layer](layer.md).[parent](layer.md#parent)*

*Defined in [display/Layer.ts:247](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L247)*

**Returns:** [Layer](layer.md)

___
<a id="rotation"></a>

###  rotation

getrotation(): `number`setrotation(rotation: *`number`*): `void`

*Inherited from [Layer](layer.md).[rotation](layer.md#rotation)*

*Defined in [display/Layer.ts:162](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L162)*

**Returns:** `number`

*Inherited from [Layer](layer.md).[rotation](layer.md#rotation)*

*Defined in [display/Layer.ts:166](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L166)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| rotation | `number` |

**Returns:** `void`

___
<a id="scale9grid"></a>

###  scale9Grid

getscale9Grid(): [Rectangle](rectangle.md)setscale9Grid(scale9Grid: *[Rectangle](rectangle.md)*): `void`

*Defined in [display/Image.ts:50](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Image.ts#L50)*

**Returns:** [Rectangle](rectangle.md)

*Defined in [display/Image.ts:54](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Image.ts#L54)*

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

*Defined in [display/Layer.ts:140](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L140)*

**Returns:** `number`

*Inherited from [Layer](layer.md).[scaleX](layer.md#scalex)*

*Defined in [display/Layer.ts:144](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L144)*

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

*Defined in [display/Layer.ts:151](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L151)*

**Returns:** `number`

*Inherited from [Layer](layer.md).[scaleY](layer.md#scaley)*

*Defined in [display/Layer.ts:155](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L155)*

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

*Defined in [display/Layer.ts:118](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L118)*

**Returns:** `number`

*Inherited from [Layer](layer.md).[skewX](layer.md#skewx)*

*Defined in [display/Layer.ts:122](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L122)*

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

*Defined in [display/Layer.ts:129](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L129)*

**Returns:** `number`

*Inherited from [Layer](layer.md).[skewY](layer.md#skewy)*

*Defined in [display/Layer.ts:133](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L133)*

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

*Defined in [display/Layer.ts:195](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L195)*

**Returns:** `boolean`

*Inherited from [Layer](layer.md).[smoothing](layer.md#smoothing)*

*Defined in [display/Layer.ts:199](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L199)*

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

*Defined in [display/Layer.ts:243](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L243)*

**Returns:** [Stage](stage.md)

___
<a id="texture"></a>

###  texture

gettexture(): [Texture](texture.md)settexture(texture: *[Texture](texture.md)*): `void`

*Defined in [display/Image.ts:24](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Image.ts#L24)*

**Returns:** [Texture](texture.md)

*Defined in [display/Image.ts:28](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Image.ts#L28)*

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

*Defined in [display/Layer.ts:255](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L255)*

**Returns:** [Ticker](ticker.md)

___
<a id="visible"></a>

###  visible

getvisible(): `boolean`setvisible(visible: *`boolean`*): `void`

*Inherited from [Layer](layer.md).[visible](layer.md#visible)*

*Defined in [display/Layer.ts:184](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L184)*

**Returns:** `boolean`

*Inherited from [Layer](layer.md).[visible](layer.md#visible)*

*Defined in [display/Layer.ts:188](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L188)*

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

*Defined in [display/Layer.ts:74](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L74)*

**Returns:** `number`

*Inherited from [Layer](layer.md).[width](layer.md#width)*

*Defined in [display/Layer.ts:78](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L78)*

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

*Defined in [display/Layer.ts:52](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L52)*

**Returns:** `number`

*Inherited from [Layer](layer.md).[x](layer.md#x)*

*Defined in [display/Layer.ts:56](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L56)*

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

*Defined in [display/Layer.ts:63](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L63)*

**Returns:** `number`

*Inherited from [Layer](layer.md).[y](layer.md#y)*

*Defined in [display/Layer.ts:67](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L67)*

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

*Defined in [display/Layer.ts:639](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L639)*

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

*Defined in [display/Layer.ts:663](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L663)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| child | [Layer](layer.md) |

**Returns:** `number`

___
<a id="_drawtexture"></a>

### `<Protected>` $drawTexture

▸ **$drawTexture**(sourceX: *`number`*, sourceY: *`number`*, sourceW: *`number`*, sourceH: *`number`*, targetX: *`number`*, targetY: *`number`*, targetW: *`number`*, targetH: *`number`*): `void`

*Defined in [display/Image.ts:80](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Image.ts#L80)*

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

*Defined in [display/Layer.ts:569](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L569)*

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

*Defined in [display/Layer.ts:587](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L587)*

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

*Defined in [display/Layer.ts:578](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L578)*

**Returns:** `void`

___
<a id="_emitremovedfromstage"></a>

### `<Protected>` $emitRemovedFromStage

▸ **$emitRemovedFromStage**(): `void`

*Inherited from [Layer](layer.md).[$emitRemovedFromStage](layer.md#_emitremovedfromstage)*

*Defined in [display/Layer.ts:600](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L600)*

**Returns:** `void`

___
<a id="_emittouchevent"></a>

### `<Protected>` $emitTouchEvent

▸ **$emitTouchEvent**(event: *[TouchEvent](touchevent.md)*, inside: *`boolean`*): `boolean`

*Inherited from [Layer](layer.md).[$emitTouchEvent](layer.md#_emittouchevent)*

*Defined in [display/Layer.ts:521](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L521)*

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

*Defined in [display/Layer.ts:475](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L475)*

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

*Defined in [display/Layer.ts:471](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L471)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| child | [Layer](layer.md) |

**Returns:** [Matrix](matrix.md)

___
<a id="_getcontentbounds"></a>

### `<Protected>` $getContentBounds

▸ **$getContentBounds**(): [Rectangle](rectangle.md)

*Overrides [Layer](layer.md).[$getContentBounds](layer.md#_getcontentbounds)*

*Defined in [display/Image.ts:64](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Image.ts#L64)*

**Returns:** [Rectangle](rectangle.md)

___
<a id="_getpattern"></a>

### `<Protected>` $getPattern

▸ **$getPattern**(texture: *[Texture](texture.md)*, fillMode: *[FillMode](../#fillmode)*): `CanvasPattern`

*Inherited from [Layer](layer.md).[$getPattern](layer.md#_getpattern)*

*Defined in [display/Layer.ts:613](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L613)*

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

*Defined in [display/Layer.ts:463](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L463)*

**Returns:** [Matrix](matrix.md)

___
<a id="_ischildvisible"></a>

### `<Protected>` $isChildVisible

▸ **$isChildVisible**(child: *[Layer](layer.md)*): `boolean`

*Inherited from [Layer](layer.md).[$isChildVisible](layer.md#_ischildvisible)*

*Defined in [display/Layer.ts:625](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L625)*

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

*Defined in [display/Layer.ts:621](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L621)*

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

*Defined in [display/Layer.ts:418](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L418)*

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

*Defined in [display/Layer.ts:427](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L427)*

**Returns:** `void`

___
<a id="_ontextureload"></a>

### `<Protected>` $onTextureLoad

▸ **$onTextureLoad**(): `void`

*Defined in [display/Image.ts:59](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Image.ts#L59)*

**Returns:** `void`

___
<a id="_render"></a>

### `<Protected>` $render

▸ **$render**(): `number`

*Overrides [Layer](layer.md).[$render](layer.md#_render)*

*Defined in [display/Image.ts:89](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Image.ts#L89)*

**Returns:** `number`

___
<a id="_resizecanvas"></a>

### `<Protected>` $resizeCanvas

▸ **$resizeCanvas**(): `void`

*Inherited from [Layer](layer.md).[$resizeCanvas](layer.md#_resizecanvas)*

*Defined in [display/Layer.ts:433](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L433)*

**Returns:** `void`

___
<a id="_resizeparentcanvas"></a>

### `<Protected>` $resizeParentCanvas

▸ **$resizeParentCanvas**(): `void`

*Inherited from [Layer](layer.md).[$resizeParentCanvas](layer.md#_resizeparentcanvas)*

*Defined in [display/Layer.ts:457](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L457)*

**Returns:** `void`

___
<a id="addchild"></a>

###  addChild

▸ **addChild**(child: *[Layer](layer.md)*): `this`

*Inherited from [Layer](layer.md).[addChild](layer.md#addchild)*

*Defined in [display/Layer.ts:269](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L269)*

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

*Defined in [display/Layer.ts:273](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L273)*

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

*Defined in [event/EventEmitter.ts:27](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/EventEmitter.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [Event](event.md) |

**Returns:** `boolean`

*Inherited from [EventEmitter](eventemitter.md).[emit](eventemitter.md#emit)*

*Defined in [event/EventEmitter.ts:28](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/EventEmitter.ts#L28)*

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

*Defined in [display/Layer.ts:311](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L311)*

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

*Defined in [display/Layer.ts:290](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L290)*

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

*Defined in [display/Layer.ts:315](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L315)*

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

*Defined in [display/Layer.ts:300](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L300)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| tag | `string` |

**Returns:** `Array`<[Layer](layer.md)>

___
<a id="haschild"></a>

###  hasChild

▸ **hasChild**(child: *[Layer](layer.md)*): `boolean`

*Inherited from [Layer](layer.md).[hasChild](layer.md#haschild)*

*Defined in [display/Layer.ts:319](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L319)*

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

*Defined in [event/EventEmitter.ts:56](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/EventEmitter.ts#L56)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |

**Returns:** `boolean`

___
<a id="off"></a>

###  off

▸ **off**(type: *`string`*, listener?: *`function`*): `this`

*Inherited from [Layer](layer.md).[off](layer.md#off)*

*Overrides [EventEmitter](eventemitter.md).[off](eventemitter.md#off)*

*Defined in [display/Layer.ts:742](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L742)*

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

*Defined in [display/Layer.ts:726](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L726)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| listener | `function` |

**Returns:** `this`

___
<a id="removeallchildren"></a>

###  removeAllChildren

▸ **removeAllChildren**(): `this`

*Inherited from [Layer](layer.md).[removeAllChildren](layer.md#removeallchildren)*

*Defined in [display/Layer.ts:401](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L401)*

**Returns:** `this`

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(): `this`

*Inherited from [EventEmitter](eventemitter.md).[removeAllListeners](eventemitter.md#removealllisteners)*

*Defined in [event/EventEmitter.ts:61](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/EventEmitter.ts#L61)*

**Returns:** `this`

___
<a id="removechild"></a>

###  removeChild

▸ **removeChild**(child: *[Layer](layer.md)*): `this`

*Inherited from [Layer](layer.md).[removeChild](layer.md#removechild)*

*Defined in [display/Layer.ts:364](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L364)*

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

*Defined in [display/Layer.ts:369](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L369)*

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

*Defined in [display/Layer.ts:378](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L378)*

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

*Defined in [display/Layer.ts:390](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L390)*

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

*Defined in [display/Layer.ts:411](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L411)*

**Returns:** `this`

___
<a id="replacechild"></a>

###  replaceChild

▸ **replaceChild**(oldChild: *[Layer](layer.md)*, newChild: *[Layer](layer.md)*): `this`

*Inherited from [Layer](layer.md).[replaceChild](layer.md#replacechild)*

*Defined in [display/Layer.ts:283](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L283)*

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

*Defined in [display/Layer.ts:263](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L263)*

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

*Defined in [display/Layer.ts:345](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L345)*

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

*Defined in [display/Layer.ts:323](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L323)*

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

*Defined in [display/Layer.ts:332](https://github.com/Lanfei/playable.js/blob/76571fa/src/display/Layer.ts#L332)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index1 | `number` |
| index2 | `number` |

**Returns:** `this`

___

