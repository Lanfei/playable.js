[API Reference](../README.md) > [Layer](../classes/layer.md)

# Class: Layer

## Hierarchy

 [EventEmitter](eventemitter.md)

**↳ Layer**

↳  [Stage](stage.md)

↳  [Image](image.md)

↳  [Text](text.md)

↳  [Scroller](scroller.md)

## Index

### Constructors

* [constructor](layer.md#constructor)

### Properties

* [$alpha](layer.md#_alpha)
* [$anchorX](layer.md#_anchorx)
* [$anchorY](layer.md#_anchory)
* [$backgroundColor](layer.md#_backgroundcolor)
* [$backgroundFillMode](layer.md#_backgroundfillmode)
* [$backgroundImage](layer.md#_backgroundimage)
* [$backgroundPattern](layer.md#_backgroundpattern)
* [$canvas](layer.md#_canvas)
* [$children](layer.md#_children)
* [$context](layer.md#_context)
* [$dirty](layer.md#_dirty)
* [$events](layer.md#_events)
* [$height](layer.md#_height)
* [$parent](layer.md#_parent)
* [$rotation](layer.md#_rotation)
* [$scaleX](layer.md#_scalex)
* [$scaleY](layer.md#_scaley)
* [$shouldEmitTap](layer.md#_shouldemittap)
* [$skewX](layer.md#_skewx)
* [$skewY](layer.md#_skewy)
* [$smoothing](layer.md#_smoothing)
* [$stage](layer.md#_stage)
* [$touches](layer.md#_touches)
* [$visible](layer.md#_visible)
* [$width](layer.md#_width)
* [$x](layer.md#_x)
* [$y](layer.md#_y)
* [name](layer.md#name)
* [tag](layer.md#tag)
* [touchable](layer.md#touchable)
* [pixelRatio](layer.md#pixelratio)

### Accessors

* [alpha](layer.md#alpha)
* [anchorX](layer.md#anchorx)
* [anchorY](layer.md#anchory)
* [backgroundColor](layer.md#backgroundcolor)
* [backgroundFillMode](layer.md#backgroundfillmode)
* [backgroundImage](layer.md#backgroundimage)
* [canvas](layer.md#canvas)
* [children](layer.md#children)
* [dirty](layer.md#dirty)
* [height](layer.md#height)
* [parent](layer.md#parent)
* [rotation](layer.md#rotation)
* [scaleX](layer.md#scalex)
* [scaleY](layer.md#scaley)
* [skewX](layer.md#skewx)
* [skewY](layer.md#skewy)
* [smoothing](layer.md#smoothing)
* [stage](layer.md#stage)
* [ticker](layer.md#ticker)
* [visible](layer.md#visible)
* [width](layer.md#width)
* [x](layer.md#x)
* [y](layer.md#y)

### Methods

* [$drawBackground](layer.md#_drawbackground)
* [$drawChild](layer.md#_drawchild)
* [$emitAdded](layer.md#_emitadded)
* [$emitAddedToStage](layer.md#_emitaddedtostage)
* [$emitRemoved](layer.md#_emitremoved)
* [$emitRemovedFromStage](layer.md#_emitremovedfromstage)
* [$emitTouchEvent](layer.md#_emittouchevent)
* [$getChildBounds](layer.md#_getchildbounds)
* [$getChildTransform](layer.md#_getchildtransform)
* [$getContentBounds](layer.md#_getcontentbounds)
* [$getPattern](layer.md#_getpattern)
* [$getTransform](layer.md#_gettransform)
* [$isChildVisible](layer.md#_ischildvisible)
* [$localHitTest](layer.md#_localhittest)
* [$markDirty](layer.md#_markdirty)
* [$markParentDirty](layer.md#_markparentdirty)
* [$render](layer.md#_render)
* [$resizeCanvas](layer.md#_resizecanvas)
* [$resizeParentCanvas](layer.md#_resizeparentcanvas)
* [addChild](layer.md#addchild)
* [addChildAt](layer.md#addchildat)
* [emit](layer.md#emit)
* [getChildAt](layer.md#getchildat)
* [getChildByName](layer.md#getchildbyname)
* [getChildIndex](layer.md#getchildindex)
* [getChildrenByTag](layer.md#getchildrenbytag)
* [hasChild](layer.md#haschild)
* [hasEventListener](layer.md#haseventlistener)
* [off](layer.md#off)
* [on](layer.md#on)
* [removeAllChildren](layer.md#removeallchildren)
* [removeAllListeners](layer.md#removealllisteners)
* [removeChild](layer.md#removechild)
* [removeChildAt](layer.md#removechildat)
* [removeChildByName](layer.md#removechildbyname)
* [removeChildrenByTag](layer.md#removechildrenbytag)
* [removeSelf](layer.md#removeself)
* [replaceChild](layer.md#replacechild)
* [resize](layer.md#resize)
* [setChildIndex](layer.md#setchildindex)
* [swapChildren](layer.md#swapchildren)
* [swapChildrenAt](layer.md#swapchildrenat)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Layer**(): [Layer](layer.md)

*Defined in [display/Layer.ts:44](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L44)*

**Returns:** [Layer](layer.md)

___

## Properties

<a id="_alpha"></a>

### `<Protected>` $alpha

**● $alpha**: *`number`* = 1

*Defined in [display/Layer.ts:30](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L30)*

___
<a id="_anchorx"></a>

### `<Protected>` $anchorX

**● $anchorX**: *`number`* = 0

*Defined in [display/Layer.ts:23](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L23)*

___
<a id="_anchory"></a>

### `<Protected>` $anchorY

**● $anchorY**: *`number`* = 0

*Defined in [display/Layer.ts:24](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L24)*

___
<a id="_backgroundcolor"></a>

### `<Protected>` $backgroundColor

**● $backgroundColor**: *`string`* =  null

*Defined in [display/Layer.ts:33](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L33)*

___
<a id="_backgroundfillmode"></a>

### `<Protected>` $backgroundFillMode

**● $backgroundFillMode**: *[FillMode](../#fillmode)* =  Texture.SCALE

*Defined in [display/Layer.ts:36](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L36)*

___
<a id="_backgroundimage"></a>

### `<Protected>` $backgroundImage

**● $backgroundImage**: *[Texture](texture.md)* =  null

*Defined in [display/Layer.ts:34](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L34)*

___
<a id="_backgroundpattern"></a>

### `<Protected>` $backgroundPattern

**● $backgroundPattern**: *`CanvasPattern`* =  null

*Defined in [display/Layer.ts:35](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L35)*

___
<a id="_canvas"></a>

### `<Protected>` $canvas

**● $canvas**: *`HTMLCanvasElement`*

*Defined in [display/Layer.ts:43](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L43)*

___
<a id="_children"></a>

### `<Protected>` $children

**● $children**: *`Array`<[Layer](layer.md)>* =  []

*Defined in [display/Layer.ts:40](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L40)*

___
<a id="_context"></a>

### `<Protected>` $context

**● $context**: *`CanvasRenderingContext2D`*

*Defined in [display/Layer.ts:44](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L44)*

___
<a id="_dirty"></a>

### `<Protected>` $dirty

**● $dirty**: *`boolean`* = true

*Defined in [display/Layer.ts:37](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L37)*

___
<a id="_events"></a>

### `<Protected>` $events

**● $events**: *`Object`*

*Inherited from [EventEmitter](eventemitter.md).[$events](eventemitter.md#_events)*

*Defined in [event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/EventEmitter.ts#L5)*

___
<a id="_height"></a>

### `<Protected>` $height

**● $height**: *`number`* = 0

*Defined in [display/Layer.ts:22](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L22)*

___
<a id="_parent"></a>

### `<Protected>` $parent

**● $parent**: *[Layer](layer.md)* =  null

*Defined in [display/Layer.ts:39](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L39)*

___
<a id="_rotation"></a>

### `<Protected>` $rotation

**● $rotation**: *`number`* = 0

*Defined in [display/Layer.ts:29](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L29)*

___
<a id="_scalex"></a>

### `<Protected>` $scaleX

**● $scaleX**: *`number`* = 1

*Defined in [display/Layer.ts:27](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L27)*

___
<a id="_scaley"></a>

### `<Protected>` $scaleY

**● $scaleY**: *`number`* = 1

*Defined in [display/Layer.ts:28](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L28)*

___
<a id="_shouldemittap"></a>

### `<Protected>` $shouldEmitTap

**● $shouldEmitTap**: *`boolean`* = true

*Defined in [display/Layer.ts:41](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L41)*

___
<a id="_skewx"></a>

### `<Protected>` $skewX

**● $skewX**: *`number`* = 0

*Defined in [display/Layer.ts:25](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L25)*

___
<a id="_skewy"></a>

### `<Protected>` $skewY

**● $skewY**: *`number`* = 0

*Defined in [display/Layer.ts:26](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L26)*

___
<a id="_smoothing"></a>

### `<Protected>` $smoothing

**● $smoothing**: *`boolean`* = true

*Defined in [display/Layer.ts:32](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L32)*

___
<a id="_stage"></a>

### `<Protected>` $stage

**● $stage**: *[Stage](stage.md)* =  null

*Defined in [display/Layer.ts:38](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L38)*

___
<a id="_touches"></a>

### `<Protected>` $touches

**● $touches**: *`Array`<`boolean`>* =  []

*Defined in [display/Layer.ts:42](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L42)*

___
<a id="_visible"></a>

### `<Protected>` $visible

**● $visible**: *`boolean`* = true

*Defined in [display/Layer.ts:31](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L31)*

___
<a id="_width"></a>

### `<Protected>` $width

**● $width**: *`number`* = 0

*Defined in [display/Layer.ts:21](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L21)*

___
<a id="_x"></a>

### `<Protected>` $x

**● $x**: *`number`* = 0

*Defined in [display/Layer.ts:19](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L19)*

___
<a id="_y"></a>

### `<Protected>` $y

**● $y**: *`number`* = 0

*Defined in [display/Layer.ts:20](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L20)*

___
<a id="name"></a>

###  name

**● name**: *`string`* = ""

*Defined in [display/Layer.ts:15](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L15)*

___
<a id="tag"></a>

###  tag

**● tag**: *`string`* = ""

*Defined in [display/Layer.ts:16](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L16)*

___
<a id="touchable"></a>

###  touchable

**● touchable**: *`boolean`* = true

*Defined in [display/Layer.ts:17](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L17)*

___
<a id="pixelratio"></a>

### `<Static>` pixelRatio

**● pixelRatio**: *`number`* =  typeof window === 'undefined' ? 1 : window.devicePixelRatio || 1

*Defined in [display/Layer.ts:13](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L13)*

___

## Accessors

<a id="alpha"></a>

###  alpha

getalpha(): `number`setalpha(alpha: *`number`*): `void`

*Defined in [display/Layer.ts:173](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L173)*

**Returns:** `number`

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

*Defined in [display/Layer.ts:96](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L96)*

**Returns:** `number`

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

*Defined in [display/Layer.ts:107](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L107)*

**Returns:** `number`

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

*Defined in [display/Layer.ts:204](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L204)*

**Returns:** `string`

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

*Defined in [display/Layer.ts:227](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L227)*

**Returns:** [FillMode](../#fillmode)

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

*Defined in [display/Layer.ts:215](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L215)*

**Returns:** [Texture](texture.md)

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

*Defined in [display/Layer.ts:259](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L259)*

**Returns:** `HTMLCanvasElement`

___
<a id="children"></a>

###  children

getchildren(): `Array`<[Layer](layer.md)>

*Defined in [display/Layer.ts:251](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L251)*

**Returns:** `Array`<[Layer](layer.md)>

___
<a id="dirty"></a>

###  dirty

getdirty(): `boolean`

*Defined in [display/Layer.ts:239](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L239)*

**Returns:** `boolean`

___
<a id="height"></a>

###  height

getheight(): `number`setheight(height: *`number`*): `void`

*Defined in [display/Layer.ts:85](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L85)*

**Returns:** `number`

*Defined in [display/Layer.ts:89](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L89)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| height | `number` |

**Returns:** `void`

___
<a id="parent"></a>

###  parent

getparent(): [Layer](layer.md)

*Defined in [display/Layer.ts:247](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L247)*

**Returns:** [Layer](layer.md)

___
<a id="rotation"></a>

###  rotation

getrotation(): `number`setrotation(rotation: *`number`*): `void`

*Defined in [display/Layer.ts:162](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L162)*

**Returns:** `number`

*Defined in [display/Layer.ts:166](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L166)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| rotation | `number` |

**Returns:** `void`

___
<a id="scalex"></a>

###  scaleX

getscaleX(): `number`setscaleX(scaleX: *`number`*): `void`

*Defined in [display/Layer.ts:140](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L140)*

**Returns:** `number`

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

*Defined in [display/Layer.ts:151](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L151)*

**Returns:** `number`

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

*Defined in [display/Layer.ts:118](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L118)*

**Returns:** `number`

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

*Defined in [display/Layer.ts:129](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L129)*

**Returns:** `number`

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

*Defined in [display/Layer.ts:195](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L195)*

**Returns:** `boolean`

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

*Defined in [display/Layer.ts:243](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L243)*

**Returns:** [Stage](stage.md)

___
<a id="ticker"></a>

###  ticker

getticker(): [Ticker](ticker.md)

*Defined in [display/Layer.ts:255](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L255)*

**Returns:** [Ticker](ticker.md)

___
<a id="visible"></a>

###  visible

getvisible(): `boolean`setvisible(visible: *`boolean`*): `void`

*Defined in [display/Layer.ts:184](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L184)*

**Returns:** `boolean`

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

*Defined in [display/Layer.ts:74](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L74)*

**Returns:** `number`

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

*Defined in [display/Layer.ts:52](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L52)*

**Returns:** `number`

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

*Defined in [display/Layer.ts:63](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L63)*

**Returns:** `number`

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

*Defined in [display/Layer.ts:663](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L663)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| child | [Layer](layer.md) |

**Returns:** `number`

___
<a id="_emitadded"></a>

### `<Protected>` $emitAdded

▸ **$emitAdded**(parent: *[Layer](layer.md)*): `void`

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

*Defined in [display/Layer.ts:578](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L578)*

**Returns:** `void`

___
<a id="_emitremovedfromstage"></a>

### `<Protected>` $emitRemovedFromStage

▸ **$emitRemovedFromStage**(): `void`

*Defined in [display/Layer.ts:600](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L600)*

**Returns:** `void`

___
<a id="_emittouchevent"></a>

### `<Protected>` $emitTouchEvent

▸ **$emitTouchEvent**(event: *[TouchEvent](touchevent.md)*, inside: *`boolean`*): `boolean`

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

*Defined in [display/Layer.ts:500](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L500)*

**Returns:** [Rectangle](rectangle.md)

___
<a id="_getpattern"></a>

### `<Protected>` $getPattern

▸ **$getPattern**(texture: *[Texture](texture.md)*, fillMode: *[FillMode](../#fillmode)*): `CanvasPattern`

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

*Defined in [display/Layer.ts:463](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L463)*

**Returns:** [Matrix](matrix.md)

___
<a id="_ischildvisible"></a>

### `<Protected>` $isChildVisible

▸ **$isChildVisible**(child: *[Layer](layer.md)*): `boolean`

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

*Defined in [display/Layer.ts:427](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L427)*

**Returns:** `void`

___
<a id="_render"></a>

### `<Protected>` $render

▸ **$render**(): `number`

*Defined in [display/Layer.ts:694](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L694)*

**Returns:** `number`

___
<a id="_resizecanvas"></a>

### `<Protected>` $resizeCanvas

▸ **$resizeCanvas**(): `void`

*Defined in [display/Layer.ts:433](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L433)*

**Returns:** `void`

___
<a id="_resizeparentcanvas"></a>

### `<Protected>` $resizeParentCanvas

▸ **$resizeParentCanvas**(): `void`

*Defined in [display/Layer.ts:457](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L457)*

**Returns:** `void`

___
<a id="addchild"></a>

###  addChild

▸ **addChild**(child: *[Layer](layer.md)*): `this`

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

*Defined in [display/Layer.ts:300](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L300)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| tag | `string` |

**Returns:** `Array`<[Layer](layer.md)>

___
<a id="haschild"></a>

###  hasChild

▸ **hasChild**(child: *[Layer](layer.md)*): `boolean`

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
<a id="off"></a>

###  off

▸ **off**(type: *`string`*, listener?: *`function`*): `this`

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

*Overrides [EventEmitter](eventemitter.md).[on](eventemitter.md#on)*

*Defined in [display/Layer.ts:726](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L726)*

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

*Defined in [display/Layer.ts:411](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L411)*

**Returns:** `this`

___
<a id="replacechild"></a>

###  replaceChild

▸ **replaceChild**(oldChild: *[Layer](layer.md)*, newChild: *[Layer](layer.md)*): `this`

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

*Defined in [display/Layer.ts:332](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L332)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index1 | `number` |
| index2 | `number` |

**Returns:** `this`

___

