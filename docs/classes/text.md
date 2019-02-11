[API Reference](../README.md) > [Text](../classes/text.md)

# Class: Text

## Hierarchy

↳  [Layer](layer.md)

**↳ Text**

↳  [Input](input.md)

## Index

### Constructors

* [constructor](text.md#constructor)

### Properties

* [$alpha](text.md#_alpha)
* [$anchorX](text.md#_anchorx)
* [$anchorY](text.md#_anchory)
* [$autoFitSize](text.md#_autofitsize)
* [$backgroundColor](text.md#_backgroundcolor)
* [$backgroundFillMode](text.md#_backgroundfillmode)
* [$backgroundImage](text.md#_backgroundimage)
* [$backgroundPattern](text.md#_backgroundpattern)
* [$breakWord](text.md#_breakword)
* [$canvas](text.md#_canvas)
* [$children](text.md#_children)
* [$color](text.md#_color)
* [$context](text.md#_context)
* [$dirty](text.md#_dirty)
* [$events](text.md#_events)
* [$explicitSize](text.md#_explicitsize)
* [$fontFamily](text.md#_fontfamily)
* [$fontSize](text.md#_fontsize)
* [$fontStyle](text.md#_fontstyle)
* [$fontWeight](text.md#_fontweight)
* [$height](text.md#_height)
* [$lineHeight](text.md#_lineheight)
* [$lines](text.md#_lines)
* [$minFontSize](text.md#_minfontsize)
* [$multiline](text.md#_multiline)
* [$parent](text.md#_parent)
* [$rotation](text.md#_rotation)
* [$scaleX](text.md#_scalex)
* [$scaleY](text.md#_scaley)
* [$shouldEmitTap](text.md#_shouldemittap)
* [$skewX](text.md#_skewx)
* [$skewY](text.md#_skewy)
* [$smoothing](text.md#_smoothing)
* [$stage](text.md#_stage)
* [$strokeColor](text.md#_strokecolor)
* [$strokeSize](text.md#_strokesize)
* [$text](text.md#_text)
* [$textAlign](text.md#_textalign)
* [$touches](text.md#_touches)
* [$verticalAlign](text.md#_verticalalign)
* [$visible](text.md#_visible)
* [$width](text.md#_width)
* [$x](text.md#_x)
* [$y](text.md#_y)
* [name](text.md#name)
* [tag](text.md#tag)
* [touchable](text.md#touchable)
* [boundaryRe](text.md#boundaryre)
* [defaultFontSize](text.md#defaultfontsize)
* [pixelRatio](text.md#pixelratio)
* [wordRe](text.md#wordre)

### Accessors

* [alpha](text.md#alpha)
* [anchorX](text.md#anchorx)
* [anchorY](text.md#anchory)
* [autoFitSize](text.md#autofitsize)
* [backgroundColor](text.md#backgroundcolor)
* [backgroundFillMode](text.md#backgroundfillmode)
* [backgroundImage](text.md#backgroundimage)
* [breakWord](text.md#breakword)
* [canvas](text.md#canvas)
* [children](text.md#children)
* [color](text.md#color)
* [dirty](text.md#dirty)
* [fontFamily](text.md#fontfamily)
* [fontSize](text.md#fontsize)
* [fontStyle](text.md#fontstyle)
* [fontWeight](text.md#fontweight)
* [height](text.md#height)
* [lineHeight](text.md#lineheight)
* [minFontSize](text.md#minfontsize)
* [multiline](text.md#multiline)
* [parent](text.md#parent)
* [rotation](text.md#rotation)
* [scaleX](text.md#scalex)
* [scaleY](text.md#scaley)
* [skewX](text.md#skewx)
* [skewY](text.md#skewy)
* [smoothing](text.md#smoothing)
* [stage](text.md#stage)
* [strokeColor](text.md#strokecolor)
* [strokeSize](text.md#strokesize)
* [text](text.md#text-1)
* [textAlign](text.md#textalign)
* [ticker](text.md#ticker)
* [verticalAlign](text.md#verticalalign)
* [visible](text.md#visible)
* [width](text.md#width)
* [x](text.md#x)
* [y](text.md#y)

### Methods

* [$divideLines](text.md#_dividelines)
* [$divideUnits](text.md#_divideunits)
* [$drawBackground](text.md#_drawbackground)
* [$drawChild](text.md#_drawchild)
* [$emitAdded](text.md#_emitadded)
* [$emitAddedToStage](text.md#_emitaddedtostage)
* [$emitRemoved](text.md#_emitremoved)
* [$emitRemovedFromStage](text.md#_emitremovedfromstage)
* [$emitTouchEvent](text.md#_emittouchevent)
* [$getChildBounds](text.md#_getchildbounds)
* [$getChildTransform](text.md#_getchildtransform)
* [$getContentBounds](text.md#_getcontentbounds)
* [$getPattern](text.md#_getpattern)
* [$getTransform](text.md#_gettransform)
* [$isChildVisible](text.md#_ischildvisible)
* [$localHitTest](text.md#_localhittest)
* [$markDirty](text.md#_markdirty)
* [$markParentDirty](text.md#_markparentdirty)
* [$render](text.md#_render)
* [$resizeCanvas](text.md#_resizecanvas)
* [$resizeParentCanvas](text.md#_resizeparentcanvas)
* [$updateContext](text.md#_updatecontext)
* [addChild](text.md#addchild)
* [addChildAt](text.md#addchildat)
* [emit](text.md#emit)
* [getChildAt](text.md#getchildat)
* [getChildByName](text.md#getchildbyname)
* [getChildIndex](text.md#getchildindex)
* [getChildrenByTag](text.md#getchildrenbytag)
* [hasChild](text.md#haschild)
* [hasEventListener](text.md#haseventlistener)
* [off](text.md#off)
* [on](text.md#on)
* [removeAllChildren](text.md#removeallchildren)
* [removeAllListeners](text.md#removealllisteners)
* [removeChild](text.md#removechild)
* [removeChildAt](text.md#removechildat)
* [removeChildByName](text.md#removechildbyname)
* [removeChildrenByTag](text.md#removechildrenbytag)
* [removeSelf](text.md#removeself)
* [replaceChild](text.md#replacechild)
* [resize](text.md#resize)
* [setChildIndex](text.md#setchildindex)
* [swapChildren](text.md#swapchildren)
* [swapChildrenAt](text.md#swapchildrenat)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Text**(text?: *`string`*, options?: *[TextOption](../interfaces/textoption.md)*): [Text](text.md)

*Overrides [Layer](layer.md).[constructor](layer.md#constructor)*

*Defined in [display/Text.ts:27](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L27)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` text | `string` | - |
| `Default value` options | [TextOption](../interfaces/textoption.md) |  {} |

**Returns:** [Text](text.md)

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
<a id="_autofitsize"></a>

### `<Protected>` $autoFitSize

**● $autoFitSize**: *`boolean`* = false

*Defined in [display/Text.ts:24](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L24)*

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
<a id="_breakword"></a>

### `<Protected>` $breakWord

**● $breakWord**: *`boolean`* = false

*Defined in [display/Text.ts:23](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L23)*

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
<a id="_color"></a>

### `<Protected>` $color

**● $color**: *`string`* = "black"

*Defined in [display/Text.ts:12](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L12)*

___
<a id="_context"></a>

### `<Protected>` $context

**● $context**: *`CanvasRenderingContext2D`*

*Inherited from [Layer](layer.md).[$context](layer.md#_context)*

*Defined in [display/Layer.ts:44](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L44)*

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
<a id="_explicitsize"></a>

### `<Protected>` $explicitSize

**● $explicitSize**: *`number`* = 0

*Defined in [display/Text.ts:26](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L26)*

___
<a id="_fontfamily"></a>

### `<Protected>` $fontFamily

**● $fontFamily**: *`string`* = "Helvetica"

*Defined in [display/Text.ts:21](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L21)*

___
<a id="_fontsize"></a>

### `<Protected>` $fontSize

**● $fontSize**: *`number`* =  Text.defaultFontSize

*Defined in [display/Text.ts:13](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L13)*

___
<a id="_fontstyle"></a>

### `<Protected>` $fontStyle

**● $fontStyle**: *[FontStyle](../#fontstyle)* = "normal"

*Defined in [display/Text.ts:14](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L14)*

___
<a id="_fontweight"></a>

### `<Protected>` $fontWeight

**● $fontWeight**: *[FontWeight](../#fontweight)* = "normal"

*Defined in [display/Text.ts:15](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L15)*

___
<a id="_height"></a>

### `<Protected>` $height

**● $height**: *`number`* = 0

*Inherited from [Layer](layer.md).[$height](layer.md#_height)*

*Defined in [display/Layer.ts:22](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L22)*

___
<a id="_lineheight"></a>

### `<Protected>` $lineHeight

**● $lineHeight**: *`number`* = 1.2

*Defined in [display/Text.ts:18](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L18)*

___
<a id="_lines"></a>

### `<Protected>` $lines

**● $lines**: *`Array`<`string`>* =  []

*Defined in [display/Text.ts:27](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L27)*

___
<a id="_minfontsize"></a>

### `<Protected>` $minFontSize

**● $minFontSize**: *`number`* = 0

*Defined in [display/Text.ts:25](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L25)*

___
<a id="_multiline"></a>

### `<Protected>` $multiline

**● $multiline**: *`boolean`* = false

*Defined in [display/Text.ts:22](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L22)*

___
<a id="_parent"></a>

### `<Protected>` $parent

**● $parent**: *[Layer](layer.md)* =  null

*Inherited from [Layer](layer.md).[$parent](layer.md#_parent)*

*Defined in [display/Layer.ts:39](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L39)*

___
<a id="_rotation"></a>

### `<Protected>` $rotation

**● $rotation**: *`number`* = 0

*Inherited from [Layer](layer.md).[$rotation](layer.md#_rotation)*

*Defined in [display/Layer.ts:29](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L29)*

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
<a id="_strokecolor"></a>

### `<Protected>` $strokeColor

**● $strokeColor**: *`string`* =  null

*Defined in [display/Text.ts:20](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L20)*

___
<a id="_strokesize"></a>

### `<Protected>` $strokeSize

**● $strokeSize**: *`number`* = 0

*Defined in [display/Text.ts:19](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L19)*

___
<a id="_text"></a>

### `<Protected>` $text

**● $text**: *`string`* = ""

*Defined in [display/Text.ts:11](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L11)*

___
<a id="_textalign"></a>

### `<Protected>` $textAlign

**● $textAlign**: *[TextAlign](../#textalign)* = "left"

*Defined in [display/Text.ts:16](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L16)*

___
<a id="_touches"></a>

### `<Protected>` $touches

**● $touches**: *`Array`<`boolean`>* =  []

*Inherited from [Layer](layer.md).[$touches](layer.md#_touches)*

*Defined in [display/Layer.ts:42](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L42)*

___
<a id="_verticalalign"></a>

### `<Protected>` $verticalAlign

**● $verticalAlign**: *[VerticalAlign](../#verticalalign)* = "top"

*Defined in [display/Text.ts:17](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L17)*

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
<a id="boundaryre"></a>

### `<Static>``<Protected>` boundaryRe

**● boundaryRe**: *`RegExp`* =  /\b/

*Defined in [display/Text.ts:9](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L9)*

___
<a id="defaultfontsize"></a>

### `<Static>` defaultFontSize

**● defaultFontSize**: *`number`* = 16

*Defined in [display/Text.ts:6](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L6)*

___
<a id="pixelratio"></a>

### `<Static>` pixelRatio

**● pixelRatio**: *`number`* =  typeof window === 'undefined' ? 1 : window.devicePixelRatio || 1

*Inherited from [Layer](layer.md).[pixelRatio](layer.md#pixelratio)*

*Defined in [display/Layer.ts:13](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L13)*

___
<a id="wordre"></a>

### `<Static>``<Protected>` wordRe

**● wordRe**: *`RegExp`* =  /\w+/

*Defined in [display/Text.ts:8](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L8)*

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
<a id="autofitsize"></a>

###  autoFitSize

getautoFitSize(): `boolean`setautoFitSize(autoFitSize: *`boolean`*): `void`

*Defined in [display/Text.ts:166](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L166)*

**Returns:** `boolean`

*Defined in [display/Text.ts:170](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L170)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| autoFitSize | `boolean` |

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
<a id="breakword"></a>

###  breakWord

getbreakWord(): `boolean`setbreakWord(breakWord: *`boolean`*): `void`

*Defined in [display/Text.ts:157](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L157)*

**Returns:** `boolean`

*Defined in [display/Text.ts:161](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L161)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| breakWord | `boolean` |

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
<a id="color"></a>

###  color

getcolor(): `string`setcolor(color: *`string`*): `void`

*Defined in [display/Text.ts:58](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L58)*

**Returns:** `string`

*Defined in [display/Text.ts:62](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L62)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| color | `string` |

**Returns:** `void`

___
<a id="dirty"></a>

###  dirty

getdirty(): `boolean`

*Inherited from [Layer](layer.md).[dirty](layer.md#dirty)*

*Defined in [display/Layer.ts:239](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L239)*

**Returns:** `boolean`

___
<a id="fontfamily"></a>

###  fontFamily

getfontFamily(): `string`setfontFamily(fontFamily: *`string`*): `void`

*Defined in [display/Text.ts:139](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L139)*

**Returns:** `string`

*Defined in [display/Text.ts:143](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L143)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fontFamily | `string` |

**Returns:** `void`

___
<a id="fontsize"></a>

###  fontSize

getfontSize(): `number`setfontSize(fontSize: *`number`*): `void`

*Defined in [display/Text.ts:67](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L67)*

**Returns:** `number`

*Defined in [display/Text.ts:71](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L71)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fontSize | `number` |

**Returns:** `void`

___
<a id="fontstyle"></a>

###  fontStyle

getfontStyle(): [FontStyle](../#fontstyle)setfontStyle(fontStyle: *[FontStyle](../#fontstyle)*): `void`

*Defined in [display/Text.ts:76](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L76)*

**Returns:** [FontStyle](../#fontstyle)

*Defined in [display/Text.ts:80](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L80)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fontStyle | [FontStyle](../#fontstyle) |

**Returns:** `void`

___
<a id="fontweight"></a>

###  fontWeight

getfontWeight(): [FontWeight](../#fontweight)setfontWeight(fontWeight: *[FontWeight](../#fontweight)*): `void`

*Defined in [display/Text.ts:85](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L85)*

**Returns:** [FontWeight](../#fontweight)

*Defined in [display/Text.ts:89](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L89)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fontWeight | [FontWeight](../#fontweight) |

**Returns:** `void`

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
<a id="lineheight"></a>

###  lineHeight

getlineHeight(): `number`setlineHeight(lineHeight: *`number`*): `void`

*Defined in [display/Text.ts:112](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L112)*

**Returns:** `number`

*Defined in [display/Text.ts:116](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L116)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| lineHeight | `number` |

**Returns:** `void`

___
<a id="minfontsize"></a>

###  minFontSize

getminFontSize(): `number`setminFontSize(minFontSize: *`number`*): `void`

*Defined in [display/Text.ts:175](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L175)*

**Returns:** `number`

*Defined in [display/Text.ts:179](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L179)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| minFontSize | `number` |

**Returns:** `void`

___
<a id="multiline"></a>

###  multiline

getmultiline(): `boolean`setmultiline(multiline: *`boolean`*): `void`

*Defined in [display/Text.ts:148](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L148)*

**Returns:** `boolean`

*Defined in [display/Text.ts:152](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L152)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| multiline | `boolean` |

**Returns:** `void`

___
<a id="parent"></a>

###  parent

getparent(): [Layer](layer.md)

*Inherited from [Layer](layer.md).[parent](layer.md#parent)*

*Defined in [display/Layer.ts:247](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L247)*

**Returns:** [Layer](layer.md)

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
<a id="strokecolor"></a>

###  strokeColor

getstrokeColor(): `string`setstrokeColor(strokeColor: *`string`*): `void`

*Defined in [display/Text.ts:130](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L130)*

**Returns:** `string`

*Defined in [display/Text.ts:134](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L134)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| strokeColor | `string` |

**Returns:** `void`

___
<a id="strokesize"></a>

###  strokeSize

getstrokeSize(): `number`setstrokeSize(strokeSize: *`number`*): `void`

*Defined in [display/Text.ts:121](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L121)*

**Returns:** `number`

*Defined in [display/Text.ts:125](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L125)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| strokeSize | `number` |

**Returns:** `void`

___
<a id="text-1"></a>

###  text

gettext(): `string`settext(text: *`string`*): `void`

*Defined in [display/Text.ts:49](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L49)*

**Returns:** `string`

*Defined in [display/Text.ts:53](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L53)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `void`

___
<a id="textalign"></a>

###  textAlign

gettextAlign(): [TextAlign](../#textalign)settextAlign(textAlign: *[TextAlign](../#textalign)*): `void`

*Defined in [display/Text.ts:94](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L94)*

**Returns:** [TextAlign](../#textalign)

*Defined in [display/Text.ts:98](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L98)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| textAlign | [TextAlign](../#textalign) |

**Returns:** `void`

___
<a id="ticker"></a>

###  ticker

getticker(): [Ticker](ticker.md)

*Inherited from [Layer](layer.md).[ticker](layer.md#ticker)*

*Defined in [display/Layer.ts:255](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L255)*

**Returns:** [Ticker](ticker.md)

___
<a id="verticalalign"></a>

###  verticalAlign

getverticalAlign(): [VerticalAlign](../#verticalalign)setverticalAlign(verticalAlign: *[VerticalAlign](../#verticalalign)*): `void`

*Defined in [display/Text.ts:103](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L103)*

**Returns:** [VerticalAlign](../#verticalalign)

*Defined in [display/Text.ts:107](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L107)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| verticalAlign | [VerticalAlign](../#verticalalign) |

**Returns:** `void`

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

<a id="_dividelines"></a>

### `<Protected>` $divideLines

▸ **$divideLines**(): `void`

*Defined in [display/Text.ts:221](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L221)*

**Returns:** `void`

___
<a id="_divideunits"></a>

### `<Protected>` $divideUnits

▸ **$divideUnits**(): `Array`<`string`>

*Defined in [display/Text.ts:199](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L199)*

**Returns:** `Array`<`string`>

___
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

*Overrides [Layer](layer.md).[$getContentBounds](layer.md#_getcontentbounds)*

*Defined in [display/Text.ts:273](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L273)*

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
<a id="_render"></a>

### `<Protected>` $render

▸ **$render**(): `number`

*Overrides [Layer](layer.md).[$render](layer.md#_render)*

*Defined in [display/Text.ts:288](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L288)*

**Returns:** `number`

___
<a id="_resizecanvas"></a>

### `<Protected>` $resizeCanvas

▸ **$resizeCanvas**(): `void`

*Overrides [Layer](layer.md).[$resizeCanvas](layer.md#_resizecanvas)*

*Defined in [display/Text.ts:253](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L253)*

**Returns:** `void`

___
<a id="_resizeparentcanvas"></a>

### `<Protected>` $resizeParentCanvas

▸ **$resizeParentCanvas**(): `void`

*Inherited from [Layer](layer.md).[$resizeParentCanvas](layer.md#_resizeparentcanvas)*

*Defined in [display/Layer.ts:457](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Layer.ts#L457)*

**Returns:** `void`

___
<a id="_updatecontext"></a>

### `<Protected>` $updateContext

▸ **$updateContext**(): `void`

*Defined in [display/Text.ts:184](https://github.com/Lanfei/playable.js/blob/877c13c/src/display/Text.ts#L184)*

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

