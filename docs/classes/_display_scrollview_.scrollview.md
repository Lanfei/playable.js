[playable.js](../README.md) > ["display/ScrollView"](../modules/_display_scrollview_.md) > [ScrollView](../classes/_display_scrollview_.scrollview.md)

# Class: ScrollView

## Hierarchy

↳  [Layer](_display_layer_.layer.md)

**↳ ScrollView**

## Index

### Constructors

* [constructor](_display_scrollview_.scrollview.md#constructor)

### Properties

* [$alpha](_display_scrollview_.scrollview.md#_alpha)
* [$anchorX](_display_scrollview_.scrollview.md#_anchorx)
* [$anchorY](_display_scrollview_.scrollview.md#_anchory)
* [$backgroundColor](_display_scrollview_.scrollview.md#_backgroundcolor)
* [$backgroundFillMode](_display_scrollview_.scrollview.md#_backgroundfillmode)
* [$backgroundImage](_display_scrollview_.scrollview.md#_backgroundimage)
* [$backgroundPattern](_display_scrollview_.scrollview.md#_backgroundpattern)
* [$canvas](_display_scrollview_.scrollview.md#_canvas)
* [$children](_display_scrollview_.scrollview.md#_children)
* [$context](_display_scrollview_.scrollview.md#_context)
* [$dirty](_display_scrollview_.scrollview.md#_dirty)
* [$events](_display_scrollview_.scrollview.md#_events)
* [$height](_display_scrollview_.scrollview.md#_height)
* [$inertiaTween](_display_scrollview_.scrollview.md#_inertiatween)
* [$parent](_display_scrollview_.scrollview.md#_parent)
* [$rotation](_display_scrollview_.scrollview.md#_rotation)
* [$scaleX](_display_scrollview_.scrollview.md#_scalex)
* [$scaleY](_display_scrollview_.scrollview.md#_scaley)
* [$scrollHeight](_display_scrollview_.scrollview.md#_scrollheight)
* [$scrollLeft](_display_scrollview_.scrollview.md#_scrollleft)
* [$scrollTop](_display_scrollview_.scrollview.md#_scrolltop)
* [$scrollWidth](_display_scrollview_.scrollview.md#_scrollwidth)
* [$shouldEmitTap](_display_scrollview_.scrollview.md#_shouldemittap)
* [$skewX](_display_scrollview_.scrollview.md#_skewx)
* [$skewY](_display_scrollview_.scrollview.md#_skewy)
* [$smoothing](_display_scrollview_.scrollview.md#_smoothing)
* [$stage](_display_scrollview_.scrollview.md#_stage)
* [$touches](_display_scrollview_.scrollview.md#_touches)
* [$touchingId](_display_scrollview_.scrollview.md#_touchingid)
* [$touchingTime](_display_scrollview_.scrollview.md#_touchingtime)
* [$touchingX](_display_scrollview_.scrollview.md#_touchingx)
* [$touchingY](_display_scrollview_.scrollview.md#_touchingy)
* [$velocitiesX](_display_scrollview_.scrollview.md#_velocitiesx)
* [$velocitiesY](_display_scrollview_.scrollview.md#_velocitiesy)
* [$visible](_display_scrollview_.scrollview.md#_visible)
* [$width](_display_scrollview_.scrollview.md#_width)
* [$x](_display_scrollview_.scrollview.md#_x)
* [$y](_display_scrollview_.scrollview.md#_y)
* [name](_display_scrollview_.scrollview.md#name)
* [tag](_display_scrollview_.scrollview.md#tag)
* [touchable](_display_scrollview_.scrollview.md#touchable)
* [pixelRatio](_display_scrollview_.scrollview.md#pixelratio)
* [scrollingView](_display_scrollview_.scrollview.md#scrollingview)

### Accessors

* [alpha](_display_scrollview_.scrollview.md#alpha)
* [anchorX](_display_scrollview_.scrollview.md#anchorx)
* [anchorY](_display_scrollview_.scrollview.md#anchory)
* [backgroundColor](_display_scrollview_.scrollview.md#backgroundcolor)
* [backgroundFillMode](_display_scrollview_.scrollview.md#backgroundfillmode)
* [backgroundImage](_display_scrollview_.scrollview.md#backgroundimage)
* [canvas](_display_scrollview_.scrollview.md#canvas)
* [children](_display_scrollview_.scrollview.md#children)
* [dirty](_display_scrollview_.scrollview.md#dirty)
* [height](_display_scrollview_.scrollview.md#height)
* [parent](_display_scrollview_.scrollview.md#parent)
* [rotation](_display_scrollview_.scrollview.md#rotation)
* [scaleX](_display_scrollview_.scrollview.md#scalex)
* [scaleY](_display_scrollview_.scrollview.md#scaley)
* [scrollLeft](_display_scrollview_.scrollview.md#scrollleft)
* [scrollTop](_display_scrollview_.scrollview.md#scrolltop)
* [skewX](_display_scrollview_.scrollview.md#skewx)
* [skewY](_display_scrollview_.scrollview.md#skewy)
* [smoothing](_display_scrollview_.scrollview.md#smoothing)
* [stage](_display_scrollview_.scrollview.md#stage)
* [ticker](_display_scrollview_.scrollview.md#ticker)
* [visible](_display_scrollview_.scrollview.md#visible)
* [width](_display_scrollview_.scrollview.md#width)
* [x](_display_scrollview_.scrollview.md#x)
* [y](_display_scrollview_.scrollview.md#y)

### Methods

* [$drawBackground](_display_scrollview_.scrollview.md#_drawbackground)
* [$drawChild](_display_scrollview_.scrollview.md#_drawchild)
* [$emitTouchEvent](_display_scrollview_.scrollview.md#_emittouchevent)
* [$getChildBounds](_display_scrollview_.scrollview.md#_getchildbounds)
* [$getChildTransform](_display_scrollview_.scrollview.md#_getchildtransform)
* [$getContentBounds](_display_scrollview_.scrollview.md#_getcontentbounds)
* [$getPattern](_display_scrollview_.scrollview.md#_getpattern)
* [$getTransform](_display_scrollview_.scrollview.md#_gettransform)
* [$isChildVisible](_display_scrollview_.scrollview.md#_ischildvisible)
* [$localHitTest](_display_scrollview_.scrollview.md#_localhittest)
* [$markDirty](_display_scrollview_.scrollview.md#_markdirty)
* [$markParentDirty](_display_scrollview_.scrollview.md#_markparentdirty)
* [$onAdded](_display_scrollview_.scrollview.md#_onadded)
* [$onAddedToStage](_display_scrollview_.scrollview.md#_onaddedtostage)
* [$onRemoved](_display_scrollview_.scrollview.md#_onremoved)
* [$onRemovedFromStage](_display_scrollview_.scrollview.md#_onremovedfromstage)
* [$onTouchCancel](_display_scrollview_.scrollview.md#_ontouchcancel)
* [$onTouchEnd](_display_scrollview_.scrollview.md#_ontouchend)
* [$onTouchMove](_display_scrollview_.scrollview.md#_ontouchmove)
* [$onTouchStart](_display_scrollview_.scrollview.md#_ontouchstart)
* [$render](_display_scrollview_.scrollview.md#_render)
* [$resizeCanvas](_display_scrollview_.scrollview.md#_resizecanvas)
* [addChild](_display_scrollview_.scrollview.md#addchild)
* [addChildAt](_display_scrollview_.scrollview.md#addchildat)
* [emit](_display_scrollview_.scrollview.md#emit)
* [getChildAt](_display_scrollview_.scrollview.md#getchildat)
* [getChildByName](_display_scrollview_.scrollview.md#getchildbyname)
* [getChildIndex](_display_scrollview_.scrollview.md#getchildindex)
* [getChildrenByTag](_display_scrollview_.scrollview.md#getchildrenbytag)
* [hasChild](_display_scrollview_.scrollview.md#haschild)
* [hasEventListener](_display_scrollview_.scrollview.md#haseventlistener)
* [off](_display_scrollview_.scrollview.md#off)
* [on](_display_scrollview_.scrollview.md#on)
* [removeAllChildren](_display_scrollview_.scrollview.md#removeallchildren)
* [removeAllListeners](_display_scrollview_.scrollview.md#removealllisteners)
* [removeChild](_display_scrollview_.scrollview.md#removechild)
* [removeChildAt](_display_scrollview_.scrollview.md#removechildat)
* [removeChildrenByName](_display_scrollview_.scrollview.md#removechildrenbyname)
* [removeChildrenByTag](_display_scrollview_.scrollview.md#removechildrenbytag)
* [removeSelf](_display_scrollview_.scrollview.md#removeself)
* [replaceChild](_display_scrollview_.scrollview.md#replacechild)
* [setChildIndex](_display_scrollview_.scrollview.md#setchildindex)
* [swapChildren](_display_scrollview_.scrollview.md#swapchildren)
* [swapChildrenAt](_display_scrollview_.scrollview.md#swapchildrenat)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ScrollView**(): [ScrollView](_display_scrollview_.scrollview.md)

*Overrides [Layer](_display_layer_.layer.md).[constructor](_display_layer_.layer.md#constructor)*

*Defined in [display/ScrollView.ts:22](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/ScrollView.ts#L22)*

**Returns:** [ScrollView](_display_scrollview_.scrollview.md)

___

## Properties

<a id="_alpha"></a>

### `<Protected>` $alpha

**● $alpha**: *`number`* = 1

*Inherited from [Layer](_display_layer_.layer.md).[$alpha](_display_layer_.layer.md#_alpha)*

*Defined in [display/Layer.ts:30](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L30)*

___
<a id="_anchorx"></a>

### `<Protected>` $anchorX

**● $anchorX**: *`number`* = 0

*Inherited from [Layer](_display_layer_.layer.md).[$anchorX](_display_layer_.layer.md#_anchorx)*

*Defined in [display/Layer.ts:23](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L23)*

___
<a id="_anchory"></a>

### `<Protected>` $anchorY

**● $anchorY**: *`number`* = 0

*Inherited from [Layer](_display_layer_.layer.md).[$anchorY](_display_layer_.layer.md#_anchory)*

*Defined in [display/Layer.ts:24](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L24)*

___
<a id="_backgroundcolor"></a>

### `<Protected>` $backgroundColor

**● $backgroundColor**: *`string`* =  null

*Inherited from [Layer](_display_layer_.layer.md).[$backgroundColor](_display_layer_.layer.md#_backgroundcolor)*

*Defined in [display/Layer.ts:33](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L33)*

___
<a id="_backgroundfillmode"></a>

### `<Protected>` $backgroundFillMode

**● $backgroundFillMode**: *[BackgroundFillMode](../modules/_display_layer_.md#backgroundfillmode)* = "scale"

*Inherited from [Layer](_display_layer_.layer.md).[$backgroundFillMode](_display_layer_.layer.md#_backgroundfillmode)*

*Defined in [display/Layer.ts:36](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L36)*

___
<a id="_backgroundimage"></a>

### `<Protected>` $backgroundImage

**● $backgroundImage**: *[Image](_media_image_.image.md)* =  null

*Inherited from [Layer](_display_layer_.layer.md).[$backgroundImage](_display_layer_.layer.md#_backgroundimage)*

*Defined in [display/Layer.ts:34](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L34)*

___
<a id="_backgroundpattern"></a>

### `<Protected>` $backgroundPattern

**● $backgroundPattern**: *`CanvasPattern`* =  null

*Inherited from [Layer](_display_layer_.layer.md).[$backgroundPattern](_display_layer_.layer.md#_backgroundpattern)*

*Defined in [display/Layer.ts:35](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L35)*

___
<a id="_canvas"></a>

### `<Protected>` $canvas

**● $canvas**: *`HTMLCanvasElement`*

*Inherited from [Layer](_display_layer_.layer.md).[$canvas](_display_layer_.layer.md#_canvas)*

*Defined in [display/Layer.ts:43](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L43)*

___
<a id="_children"></a>

### `<Protected>` $children

**● $children**: *`Array`<[Layer](_display_layer_.layer.md)>* =  []

*Inherited from [Layer](_display_layer_.layer.md).[$children](_display_layer_.layer.md#_children)*

*Defined in [display/Layer.ts:40](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L40)*

___
<a id="_context"></a>

### `<Protected>` $context

**● $context**: *`CanvasRenderingContext2D`*

*Inherited from [Layer](_display_layer_.layer.md).[$context](_display_layer_.layer.md#_context)*

*Defined in [display/Layer.ts:44](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L44)*

___
<a id="_dirty"></a>

### `<Protected>` $dirty

**● $dirty**: *`boolean`* = true

*Inherited from [Layer](_display_layer_.layer.md).[$dirty](_display_layer_.layer.md#_dirty)*

*Defined in [display/Layer.ts:37](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L37)*

___
<a id="_events"></a>

### `<Protected>` $events

**● $events**: *`Object`*

*Inherited from [EventEmitter](_event_eventemitter_.eventemitter.md).[$events](_event_eventemitter_.eventemitter.md#_events)*

*Defined in [event/EventEmitter.ts:3](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/EventEmitter.ts#L3)*

___
<a id="_height"></a>

### `<Protected>` $height

**● $height**: *`number`* = 0

*Inherited from [Layer](_display_layer_.layer.md).[$height](_display_layer_.layer.md#_height)*

*Defined in [display/Layer.ts:22](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L22)*

___
<a id="_inertiatween"></a>

### `<Protected>` $inertiaTween

**● $inertiaTween**: *[Tween](_tween_tween_.tween.md)* =  null

*Defined in [display/ScrollView.ts:22](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/ScrollView.ts#L22)*

___
<a id="_parent"></a>

### `<Protected>` $parent

**● $parent**: *[Layer](_display_layer_.layer.md)* =  null

*Inherited from [Layer](_display_layer_.layer.md).[$parent](_display_layer_.layer.md#_parent)*

*Defined in [display/Layer.ts:39](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L39)*

___
<a id="_rotation"></a>

### `<Protected>` $rotation

**● $rotation**: *`number`* = 0

*Inherited from [Layer](_display_layer_.layer.md).[$rotation](_display_layer_.layer.md#_rotation)*

*Defined in [display/Layer.ts:29](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L29)*

___
<a id="_scalex"></a>

### `<Protected>` $scaleX

**● $scaleX**: *`number`* = 1

*Inherited from [Layer](_display_layer_.layer.md).[$scaleX](_display_layer_.layer.md#_scalex)*

*Defined in [display/Layer.ts:27](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L27)*

___
<a id="_scaley"></a>

### `<Protected>` $scaleY

**● $scaleY**: *`number`* = 1

*Inherited from [Layer](_display_layer_.layer.md).[$scaleY](_display_layer_.layer.md#_scaley)*

*Defined in [display/Layer.ts:28](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L28)*

___
<a id="_scrollheight"></a>

### `<Protected>` $scrollHeight

**● $scrollHeight**: *`number`* = 0

*Defined in [display/ScrollView.ts:15](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/ScrollView.ts#L15)*

___
<a id="_scrollleft"></a>

### `<Protected>` $scrollLeft

**● $scrollLeft**: *`number`* = 0

*Defined in [display/ScrollView.ts:13](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/ScrollView.ts#L13)*

___
<a id="_scrolltop"></a>

### `<Protected>` $scrollTop

**● $scrollTop**: *`number`* = 0

*Defined in [display/ScrollView.ts:12](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/ScrollView.ts#L12)*

___
<a id="_scrollwidth"></a>

### `<Protected>` $scrollWidth

**● $scrollWidth**: *`number`* = 0

*Defined in [display/ScrollView.ts:14](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/ScrollView.ts#L14)*

___
<a id="_shouldemittap"></a>

### `<Protected>` $shouldEmitTap

**● $shouldEmitTap**: *`boolean`* = true

*Inherited from [Layer](_display_layer_.layer.md).[$shouldEmitTap](_display_layer_.layer.md#_shouldemittap)*

*Defined in [display/Layer.ts:41](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L41)*

___
<a id="_skewx"></a>

### `<Protected>` $skewX

**● $skewX**: *`number`* = 0

*Inherited from [Layer](_display_layer_.layer.md).[$skewX](_display_layer_.layer.md#_skewx)*

*Defined in [display/Layer.ts:25](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L25)*

___
<a id="_skewy"></a>

### `<Protected>` $skewY

**● $skewY**: *`number`* = 0

*Inherited from [Layer](_display_layer_.layer.md).[$skewY](_display_layer_.layer.md#_skewy)*

*Defined in [display/Layer.ts:26](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L26)*

___
<a id="_smoothing"></a>

### `<Protected>` $smoothing

**● $smoothing**: *`boolean`* = true

*Inherited from [Layer](_display_layer_.layer.md).[$smoothing](_display_layer_.layer.md#_smoothing)*

*Defined in [display/Layer.ts:32](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L32)*

___
<a id="_stage"></a>

### `<Protected>` $stage

**● $stage**: *[Stage](_display_stage_.stage.md)* =  null

*Inherited from [Layer](_display_layer_.layer.md).[$stage](_display_layer_.layer.md#_stage)*

*Defined in [display/Layer.ts:38](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L38)*

___
<a id="_touches"></a>

### `<Protected>` $touches

**● $touches**: *`Array`<`boolean`>* =  []

*Inherited from [Layer](_display_layer_.layer.md).[$touches](_display_layer_.layer.md#_touches)*

*Defined in [display/Layer.ts:42](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L42)*

___
<a id="_touchingid"></a>

### `<Protected>` $touchingId

**● $touchingId**: *`number`* =  null

*Defined in [display/ScrollView.ts:18](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/ScrollView.ts#L18)*

___
<a id="_touchingtime"></a>

### `<Protected>` $touchingTime

**● $touchingTime**: *`number`* =  null

*Defined in [display/ScrollView.ts:19](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/ScrollView.ts#L19)*

___
<a id="_touchingx"></a>

### `<Protected>` $touchingX

**● $touchingX**: *`number`* =  null

*Defined in [display/ScrollView.ts:16](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/ScrollView.ts#L16)*

___
<a id="_touchingy"></a>

### `<Protected>` $touchingY

**● $touchingY**: *`number`* =  null

*Defined in [display/ScrollView.ts:17](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/ScrollView.ts#L17)*

___
<a id="_velocitiesx"></a>

### `<Protected>` $velocitiesX

**● $velocitiesX**: *`Array`<`number`>* =  []

*Defined in [display/ScrollView.ts:20](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/ScrollView.ts#L20)*

___
<a id="_velocitiesy"></a>

### `<Protected>` $velocitiesY

**● $velocitiesY**: *`Array`<`number`>* =  []

*Defined in [display/ScrollView.ts:21](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/ScrollView.ts#L21)*

___
<a id="_visible"></a>

### `<Protected>` $visible

**● $visible**: *`boolean`* = true

*Inherited from [Layer](_display_layer_.layer.md).[$visible](_display_layer_.layer.md#_visible)*

*Defined in [display/Layer.ts:31](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L31)*

___
<a id="_width"></a>

### `<Protected>` $width

**● $width**: *`number`* = 0

*Inherited from [Layer](_display_layer_.layer.md).[$width](_display_layer_.layer.md#_width)*

*Defined in [display/Layer.ts:21](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L21)*

___
<a id="_x"></a>

### `<Protected>` $x

**● $x**: *`number`* = 0

*Inherited from [Layer](_display_layer_.layer.md).[$x](_display_layer_.layer.md#_x)*

*Defined in [display/Layer.ts:19](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L19)*

___
<a id="_y"></a>

### `<Protected>` $y

**● $y**: *`number`* = 0

*Inherited from [Layer](_display_layer_.layer.md).[$y](_display_layer_.layer.md#_y)*

*Defined in [display/Layer.ts:20](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L20)*

___
<a id="name"></a>

###  name

**● name**: *`string`* = ""

*Inherited from [Layer](_display_layer_.layer.md).[name](_display_layer_.layer.md#name)*

*Defined in [display/Layer.ts:15](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L15)*

___
<a id="tag"></a>

###  tag

**● tag**: *`string`* = ""

*Inherited from [Layer](_display_layer_.layer.md).[tag](_display_layer_.layer.md#tag)*

*Defined in [display/Layer.ts:16](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L16)*

___
<a id="touchable"></a>

###  touchable

**● touchable**: *`boolean`* = true

*Inherited from [Layer](_display_layer_.layer.md).[touchable](_display_layer_.layer.md#touchable)*

*Defined in [display/Layer.ts:17](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L17)*

___
<a id="pixelratio"></a>

### `<Static>` pixelRatio

**● pixelRatio**: *`number`* =  window.devicePixelRatio || 1

*Inherited from [Layer](_display_layer_.layer.md).[pixelRatio](_display_layer_.layer.md#pixelratio)*

*Defined in [display/Layer.ts:13](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L13)*

___
<a id="scrollingview"></a>

### `<Static>``<Protected>` scrollingView

**● scrollingView**: *[ScrollView](_display_scrollview_.scrollview.md)*

*Defined in [display/ScrollView.ts:10](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/ScrollView.ts#L10)*

___

## Accessors

<a id="alpha"></a>

###  alpha

getalpha(): `number`setalpha(alpha: *`number`*): `void`

*Inherited from [Layer](_display_layer_.layer.md).[alpha](_display_layer_.layer.md#alpha)*

*Defined in [display/Layer.ts:177](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L177)*

**Returns:** `number`

*Inherited from [Layer](_display_layer_.layer.md).[alpha](_display_layer_.layer.md#alpha)*

*Defined in [display/Layer.ts:181](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L181)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| alpha | `number` |

**Returns:** `void`

___
<a id="anchorx"></a>

###  anchorX

getanchorX(): `number`setanchorX(anchorX: *`number`*): `void`

*Inherited from [Layer](_display_layer_.layer.md).[anchorX](_display_layer_.layer.md#anchorx)*

*Defined in [display/Layer.ts:100](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L100)*

**Returns:** `number`

*Inherited from [Layer](_display_layer_.layer.md).[anchorX](_display_layer_.layer.md#anchorx)*

*Defined in [display/Layer.ts:104](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L104)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| anchorX | `number` |

**Returns:** `void`

___
<a id="anchory"></a>

###  anchorY

getanchorY(): `number`setanchorY(anchorY: *`number`*): `void`

*Inherited from [Layer](_display_layer_.layer.md).[anchorY](_display_layer_.layer.md#anchory)*

*Defined in [display/Layer.ts:111](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L111)*

**Returns:** `number`

*Inherited from [Layer](_display_layer_.layer.md).[anchorY](_display_layer_.layer.md#anchory)*

*Defined in [display/Layer.ts:115](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L115)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| anchorY | `number` |

**Returns:** `void`

___
<a id="backgroundcolor"></a>

###  backgroundColor

getbackgroundColor(): `string`setbackgroundColor(backgroundColor: *`string`*): `void`

*Inherited from [Layer](_display_layer_.layer.md).[backgroundColor](_display_layer_.layer.md#backgroundcolor)*

*Defined in [display/Layer.ts:188](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L188)*

**Returns:** `string`

*Inherited from [Layer](_display_layer_.layer.md).[backgroundColor](_display_layer_.layer.md#backgroundcolor)*

*Defined in [display/Layer.ts:192](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L192)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| backgroundColor | `string` |

**Returns:** `void`

___
<a id="backgroundfillmode"></a>

###  backgroundFillMode

getbackgroundFillMode(): [BackgroundFillMode](../modules/_display_layer_.md#backgroundfillmode)setbackgroundFillMode(backgroundFillMode: *[BackgroundFillMode](../modules/_display_layer_.md#backgroundfillmode)*): `void`

*Inherited from [Layer](_display_layer_.layer.md).[backgroundFillMode](_display_layer_.layer.md#backgroundfillmode)*

*Defined in [display/Layer.ts:211](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L211)*

**Returns:** [BackgroundFillMode](../modules/_display_layer_.md#backgroundfillmode)

*Inherited from [Layer](_display_layer_.layer.md).[backgroundFillMode](_display_layer_.layer.md#backgroundfillmode)*

*Defined in [display/Layer.ts:215](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L215)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| backgroundFillMode | [BackgroundFillMode](../modules/_display_layer_.md#backgroundfillmode) |

**Returns:** `void`

___
<a id="backgroundimage"></a>

###  backgroundImage

getbackgroundImage(): [Image](_media_image_.image.md)setbackgroundImage(backgroundImage: *[Image](_media_image_.image.md)*): `void`

*Inherited from [Layer](_display_layer_.layer.md).[backgroundImage](_display_layer_.layer.md#backgroundimage)*

*Defined in [display/Layer.ts:199](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L199)*

**Returns:** [Image](_media_image_.image.md)

*Inherited from [Layer](_display_layer_.layer.md).[backgroundImage](_display_layer_.layer.md#backgroundimage)*

*Defined in [display/Layer.ts:203](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L203)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| backgroundImage | [Image](_media_image_.image.md) |

**Returns:** `void`

___
<a id="canvas"></a>

###  canvas

getcanvas(): `HTMLCanvasElement`

*Inherited from [Layer](_display_layer_.layer.md).[canvas](_display_layer_.layer.md#canvas)*

*Defined in [display/Layer.ts:263](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L263)*

**Returns:** `HTMLCanvasElement`

___
<a id="children"></a>

###  children

getchildren(): `Array`<[Layer](_display_layer_.layer.md)>

*Inherited from [Layer](_display_layer_.layer.md).[children](_display_layer_.layer.md#children)*

*Defined in [display/Layer.ts:255](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L255)*

**Returns:** `Array`<[Layer](_display_layer_.layer.md)>

___
<a id="dirty"></a>

###  dirty

getdirty(): `boolean`

*Inherited from [Layer](_display_layer_.layer.md).[dirty](_display_layer_.layer.md#dirty)*

*Defined in [display/Layer.ts:243](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L243)*

**Returns:** `boolean`

___
<a id="height"></a>

###  height

getheight(): `number`setheight(height: *`number`*): `void`

*Inherited from [Layer](_display_layer_.layer.md).[height](_display_layer_.layer.md#height)*

*Defined in [display/Layer.ts:67](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L67)*

**Returns:** `number`

*Inherited from [Layer](_display_layer_.layer.md).[height](_display_layer_.layer.md#height)*

*Defined in [display/Layer.ts:71](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L71)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| height | `number` |

**Returns:** `void`

___
<a id="parent"></a>

###  parent

getparent(): [Layer](_display_layer_.layer.md)

*Inherited from [Layer](_display_layer_.layer.md).[parent](_display_layer_.layer.md#parent)*

*Defined in [display/Layer.ts:251](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L251)*

**Returns:** [Layer](_display_layer_.layer.md)

___
<a id="rotation"></a>

###  rotation

getrotation(): `number`setrotation(rotation: *`number`*): `void`

*Inherited from [Layer](_display_layer_.layer.md).[rotation](_display_layer_.layer.md#rotation)*

*Defined in [display/Layer.ts:166](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L166)*

**Returns:** `number`

*Inherited from [Layer](_display_layer_.layer.md).[rotation](_display_layer_.layer.md#rotation)*

*Defined in [display/Layer.ts:170](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L170)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| rotation | `number` |

**Returns:** `void`

___
<a id="scalex"></a>

###  scaleX

getscaleX(): `number`setscaleX(scaleX: *`number`*): `void`

*Inherited from [Layer](_display_layer_.layer.md).[scaleX](_display_layer_.layer.md#scalex)*

*Defined in [display/Layer.ts:144](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L144)*

**Returns:** `number`

*Inherited from [Layer](_display_layer_.layer.md).[scaleX](_display_layer_.layer.md#scalex)*

*Defined in [display/Layer.ts:148](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L148)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| scaleX | `number` |

**Returns:** `void`

___
<a id="scaley"></a>

###  scaleY

getscaleY(): `number`setscaleY(scaleY: *`number`*): `void`

*Inherited from [Layer](_display_layer_.layer.md).[scaleY](_display_layer_.layer.md#scaley)*

*Defined in [display/Layer.ts:155](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L155)*

**Returns:** `number`

*Inherited from [Layer](_display_layer_.layer.md).[scaleY](_display_layer_.layer.md#scaley)*

*Defined in [display/Layer.ts:159](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L159)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| scaleY | `number` |

**Returns:** `void`

___
<a id="scrollleft"></a>

###  scrollLeft

getscrollLeft(): `number`setscrollLeft(scrollLeft: *`number`*): `void`

*Defined in [display/ScrollView.ts:49](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/ScrollView.ts#L49)*

**Returns:** `number`

*Defined in [display/ScrollView.ts:53](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/ScrollView.ts#L53)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| scrollLeft | `number` |

**Returns:** `void`

___
<a id="scrolltop"></a>

###  scrollTop

getscrollTop(): `number`setscrollTop(scrollTop: *`number`*): `void`

*Defined in [display/ScrollView.ts:34](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/ScrollView.ts#L34)*

**Returns:** `number`

*Defined in [display/ScrollView.ts:38](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/ScrollView.ts#L38)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| scrollTop | `number` |

**Returns:** `void`

___
<a id="skewx"></a>

###  skewX

getskewX(): `number`setskewX(skewX: *`number`*): `void`

*Inherited from [Layer](_display_layer_.layer.md).[skewX](_display_layer_.layer.md#skewx)*

*Defined in [display/Layer.ts:122](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L122)*

**Returns:** `number`

*Inherited from [Layer](_display_layer_.layer.md).[skewX](_display_layer_.layer.md#skewx)*

*Defined in [display/Layer.ts:126](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L126)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| skewX | `number` |

**Returns:** `void`

___
<a id="skewy"></a>

###  skewY

getskewY(): `number`setskewY(skewY: *`number`*): `void`

*Inherited from [Layer](_display_layer_.layer.md).[skewY](_display_layer_.layer.md#skewy)*

*Defined in [display/Layer.ts:133](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L133)*

**Returns:** `number`

*Inherited from [Layer](_display_layer_.layer.md).[skewY](_display_layer_.layer.md#skewy)*

*Defined in [display/Layer.ts:137](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L137)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| skewY | `number` |

**Returns:** `void`

___
<a id="smoothing"></a>

###  smoothing

getsmoothing(): `boolean`setsmoothing(smoothing: *`boolean`*): `void`

*Inherited from [Layer](_display_layer_.layer.md).[smoothing](_display_layer_.layer.md#smoothing)*

*Defined in [display/Layer.ts:234](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L234)*

**Returns:** `boolean`

*Inherited from [Layer](_display_layer_.layer.md).[smoothing](_display_layer_.layer.md#smoothing)*

*Defined in [display/Layer.ts:238](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L238)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| smoothing | `boolean` |

**Returns:** `void`

___
<a id="stage"></a>

###  stage

getstage(): [Stage](_display_stage_.stage.md)

*Inherited from [Layer](_display_layer_.layer.md).[stage](_display_layer_.layer.md#stage)*

*Defined in [display/Layer.ts:247](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L247)*

**Returns:** [Stage](_display_stage_.stage.md)

___
<a id="ticker"></a>

###  ticker

getticker(): [Ticker](_core_ticker_.ticker.md)

*Inherited from [Layer](_display_layer_.layer.md).[ticker](_display_layer_.layer.md#ticker)*

*Defined in [display/Layer.ts:259](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L259)*

**Returns:** [Ticker](_core_ticker_.ticker.md)

___
<a id="visible"></a>

###  visible

getvisible(): `boolean`setvisible(visible: *`boolean`*): `void`

*Inherited from [Layer](_display_layer_.layer.md).[visible](_display_layer_.layer.md#visible)*

*Defined in [display/Layer.ts:223](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L223)*

**Returns:** `boolean`

*Inherited from [Layer](_display_layer_.layer.md).[visible](_display_layer_.layer.md#visible)*

*Defined in [display/Layer.ts:227](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L227)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| visible | `boolean` |

**Returns:** `void`

___
<a id="width"></a>

###  width

getwidth(): `number`setwidth(width: *`number`*): `void`

*Inherited from [Layer](_display_layer_.layer.md).[width](_display_layer_.layer.md#width)*

*Defined in [display/Layer.ts:56](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L56)*

**Returns:** `number`

*Inherited from [Layer](_display_layer_.layer.md).[width](_display_layer_.layer.md#width)*

*Defined in [display/Layer.ts:60](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L60)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| width | `number` |

**Returns:** `void`

___
<a id="x"></a>

###  x

getx(): `number`setx(x: *`number`*): `void`

*Inherited from [Layer](_display_layer_.layer.md).[x](_display_layer_.layer.md#x)*

*Defined in [display/Layer.ts:78](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L78)*

**Returns:** `number`

*Inherited from [Layer](_display_layer_.layer.md).[x](_display_layer_.layer.md#x)*

*Defined in [display/Layer.ts:82](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L82)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |

**Returns:** `void`

___
<a id="y"></a>

###  y

gety(): `number`sety(y: *`number`*): `void`

*Inherited from [Layer](_display_layer_.layer.md).[y](_display_layer_.layer.md#y)*

*Defined in [display/Layer.ts:89](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L89)*

**Returns:** `number`

*Inherited from [Layer](_display_layer_.layer.md).[y](_display_layer_.layer.md#y)*

*Defined in [display/Layer.ts:93](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L93)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| y | `number` |

**Returns:** `void`

___

## Methods

<a id="_drawbackground"></a>

### `<Protected>` $drawBackground

▸ **$drawBackground**(color: *`string`*, image: *[Image](_media_image_.image.md)*, pattern: *`CanvasPattern`*, fillMode: *[BackgroundFillMode](../modules/_display_layer_.md#backgroundfillmode)*, context?: *`CanvasRenderingContext2D`*): `void`

*Inherited from [Layer](_display_layer_.layer.md).[$drawBackground](_display_layer_.layer.md#_drawbackground)*

*Defined in [display/Layer.ts:588](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L588)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| color | `string` |
| image | [Image](_media_image_.image.md) |
| pattern | `CanvasPattern` |
| fillMode | [BackgroundFillMode](../modules/_display_layer_.md#backgroundfillmode) |
| `Optional` context | `CanvasRenderingContext2D` |

**Returns:** `void`

___
<a id="_drawchild"></a>

### `<Protected>` $drawChild

▸ **$drawChild**(child: *[Layer](_display_layer_.layer.md)*): `number`

*Inherited from [Layer](_display_layer_.layer.md).[$drawChild](_display_layer_.layer.md#_drawchild)*

*Defined in [display/Layer.ts:611](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L611)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| child | [Layer](_display_layer_.layer.md) |

**Returns:** `number`

___
<a id="_emittouchevent"></a>

### `<Protected>` $emitTouchEvent

▸ **$emitTouchEvent**(event: *[TouchEvent](_event_touchevent_.touchevent.md)*, inside: *`boolean`*): `boolean`

*Inherited from [Layer](_display_layer_.layer.md).[$emitTouchEvent](_display_layer_.layer.md#_emittouchevent)*

*Defined in [display/Layer.ts:510](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L510)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [TouchEvent](_event_touchevent_.touchevent.md) |
| inside | `boolean` |

**Returns:** `boolean`

___
<a id="_getchildbounds"></a>

### `<Protected>` $getChildBounds

▸ **$getChildBounds**(child: *[Layer](_display_layer_.layer.md)*): [Rectangle](_geom_rectangle_.rectangle.md)

*Inherited from [Layer](_display_layer_.layer.md).[$getChildBounds](_display_layer_.layer.md#_getchildbounds)*

*Defined in [display/Layer.ts:464](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L464)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| child | [Layer](_display_layer_.layer.md) |

**Returns:** [Rectangle](_geom_rectangle_.rectangle.md)

___
<a id="_getchildtransform"></a>

### `<Protected>` $getChildTransform

▸ **$getChildTransform**(child: *[Layer](_display_layer_.layer.md)*): [Matrix](_geom_matrix_.matrix.md)

*Overrides [Layer](_display_layer_.layer.md).[$getChildTransform](_display_layer_.layer.md#_getchildtransform)*

*Defined in [display/ScrollView.ts:64](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/ScrollView.ts#L64)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| child | [Layer](_display_layer_.layer.md) |

**Returns:** [Matrix](_geom_matrix_.matrix.md)

___
<a id="_getcontentbounds"></a>

### `<Protected>` $getContentBounds

▸ **$getContentBounds**(): [Rectangle](_geom_rectangle_.rectangle.md)

*Inherited from [Layer](_display_layer_.layer.md).[$getContentBounds](_display_layer_.layer.md#_getcontentbounds)*

*Defined in [display/Layer.ts:489](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L489)*

**Returns:** [Rectangle](_geom_rectangle_.rectangle.md)

___
<a id="_getpattern"></a>

### `<Protected>` $getPattern

▸ **$getPattern**(image: *[Image](_media_image_.image.md)*, fillMode: *[BackgroundFillMode](../modules/_display_layer_.md#backgroundfillmode)*): `CanvasPattern`

*Inherited from [Layer](_display_layer_.layer.md).[$getPattern](_display_layer_.layer.md#_getpattern)*

*Defined in [display/Layer.ts:559](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L559)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| image | [Image](_media_image_.image.md) |
| fillMode | [BackgroundFillMode](../modules/_display_layer_.md#backgroundfillmode) |

**Returns:** `CanvasPattern`

___
<a id="_gettransform"></a>

### `<Protected>` $getTransform

▸ **$getTransform**(): [Matrix](_geom_matrix_.matrix.md)

*Inherited from [Layer](_display_layer_.layer.md).[$getTransform](_display_layer_.layer.md#_gettransform)*

*Defined in [display/Layer.ts:452](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L452)*

**Returns:** [Matrix](_geom_matrix_.matrix.md)

___
<a id="_ischildvisible"></a>

### `<Protected>` $isChildVisible

▸ **$isChildVisible**(child: *[Layer](_display_layer_.layer.md)*): `boolean`

*Inherited from [Layer](_display_layer_.layer.md).[$isChildVisible](_display_layer_.layer.md#_ischildvisible)*

*Defined in [display/Layer.ts:571](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L571)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| child | [Layer](_display_layer_.layer.md) |

**Returns:** `boolean`

___
<a id="_localhittest"></a>

### `<Protected>` $localHitTest

▸ **$localHitTest**(vector: *[Vector](_geom_vector_.vector.md)*): `boolean`

*Inherited from [Layer](_display_layer_.layer.md).[$localHitTest](_display_layer_.layer.md#_localhittest)*

*Defined in [display/Layer.ts:567](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L567)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| vector | [Vector](_geom_vector_.vector.md) |

**Returns:** `boolean`

___
<a id="_markdirty"></a>

### `<Protected>` $markDirty

▸ **$markDirty**(): `void`

*Inherited from [Layer](_display_layer_.layer.md).[$markDirty](_display_layer_.layer.md#_markdirty)*

*Defined in [display/Layer.ts:724](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L724)*

**Returns:** `void`

___
<a id="_markparentdirty"></a>

### `<Protected>` $markParentDirty

▸ **$markParentDirty**(): `void`

*Inherited from [Layer](_display_layer_.layer.md).[$markParentDirty](_display_layer_.layer.md#_markparentdirty)*

*Defined in [display/Layer.ts:729](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L729)*

**Returns:** `void`

___
<a id="_onadded"></a>

### `<Protected>` $onAdded

▸ **$onAdded**(parent: *[Layer](_display_layer_.layer.md)*): `void`

*Inherited from [Layer](_display_layer_.layer.md).[$onAdded](_display_layer_.layer.md#_onadded)*

*Defined in [display/Layer.ts:694](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L694)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| parent | [Layer](_display_layer_.layer.md) |

**Returns:** `void`

___
<a id="_onaddedtostage"></a>

### `<Protected>` $onAddedToStage

▸ **$onAddedToStage**(stage: *[Stage](_display_stage_.stage.md)*): `void`

*Inherited from [Layer](_display_layer_.layer.md).[$onAddedToStage](_display_layer_.layer.md#_onaddedtostage)*

*Defined in [display/Layer.ts:702](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L702)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| stage | [Stage](_display_stage_.stage.md) |

**Returns:** `void`

___
<a id="_onremoved"></a>

### `<Protected>` $onRemoved

▸ **$onRemoved**(): `void`

*Inherited from [Layer](_display_layer_.layer.md).[$onRemoved](_display_layer_.layer.md#_onremoved)*

*Defined in [display/Layer.ts:698](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L698)*

**Returns:** `void`

___
<a id="_onremovedfromstage"></a>

### `<Protected>` $onRemovedFromStage

▸ **$onRemovedFromStage**(stage: *[Stage](_display_stage_.stage.md)*): `void`

*Overrides [Layer](_display_layer_.layer.md).[$onRemovedFromStage](_display_layer_.layer.md#_onremovedfromstage)*

*Defined in [display/ScrollView.ts:163](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/ScrollView.ts#L163)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| stage | [Stage](_display_stage_.stage.md) |

**Returns:** `void`

___
<a id="_ontouchcancel"></a>

### `<Protected>` $onTouchCancel

▸ **$onTouchCancel**(e: *[TouchEvent](_event_touchevent_.touchevent.md)*): `void`

*Defined in [display/ScrollView.ts:157](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/ScrollView.ts#L157)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [TouchEvent](_event_touchevent_.touchevent.md) |

**Returns:** `void`

___
<a id="_ontouchend"></a>

### `<Protected>` $onTouchEnd

▸ **$onTouchEnd**(e: *[TouchEvent](_event_touchevent_.touchevent.md)*): `void`

*Defined in [display/ScrollView.ts:123](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/ScrollView.ts#L123)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [TouchEvent](_event_touchevent_.touchevent.md) |

**Returns:** `void`

___
<a id="_ontouchmove"></a>

### `<Protected>` $onTouchMove

▸ **$onTouchMove**(e: *[TouchEvent](_event_touchevent_.touchevent.md)*): `void`

*Defined in [display/ScrollView.ts:92](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/ScrollView.ts#L92)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [TouchEvent](_event_touchevent_.touchevent.md) |

**Returns:** `void`

___
<a id="_ontouchstart"></a>

### `<Protected>` $onTouchStart

▸ **$onTouchStart**(e: *[TouchEvent](_event_touchevent_.touchevent.md)*): `void`

*Defined in [display/ScrollView.ts:79](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/ScrollView.ts#L79)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [TouchEvent](_event_touchevent_.touchevent.md) |

**Returns:** `void`

___
<a id="_render"></a>

### `<Protected>` $render

▸ **$render**(): `number`

*Inherited from [Layer](_display_layer_.layer.md).[$render](_display_layer_.layer.md#_render)*

*Defined in [display/Layer.ts:642](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L642)*

**Returns:** `number`

___
<a id="_resizecanvas"></a>

### `<Protected>` $resizeCanvas

▸ **$resizeCanvas**(): `void`

*Overrides [Layer](_display_layer_.layer.md).[$resizeCanvas](_display_layer_.layer.md#_resizecanvas)*

*Defined in [display/ScrollView.ts:70](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/ScrollView.ts#L70)*

**Returns:** `void`

___
<a id="addchild"></a>

###  addChild

▸ **addChild**(child: *[Layer](_display_layer_.layer.md)*): `this`

*Inherited from [Layer](_display_layer_.layer.md).[addChild](_display_layer_.layer.md#addchild)*

*Defined in [display/Layer.ts:267](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L267)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| child | [Layer](_display_layer_.layer.md) |

**Returns:** `this`

___
<a id="addchildat"></a>

###  addChildAt

▸ **addChildAt**(child: *[Layer](_display_layer_.layer.md)*, index: *`number`*): `this`

*Inherited from [Layer](_display_layer_.layer.md).[addChildAt](_display_layer_.layer.md#addchildat)*

*Defined in [display/Layer.ts:271](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L271)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| child | [Layer](_display_layer_.layer.md) |
| index | `number` |

**Returns:** `this`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string`*, ...args: *`any`[]*): `boolean`

*Inherited from [EventEmitter](_event_eventemitter_.eventemitter.md).[emit](_event_eventemitter_.eventemitter.md#emit)*

*Defined in [event/EventEmitter.ts:25](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/EventEmitter.ts#L25)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="getchildat"></a>

###  getChildAt

▸ **getChildAt**(index: *`number`*): [Layer](_display_layer_.layer.md)

*Inherited from [Layer](_display_layer_.layer.md).[getChildAt](_display_layer_.layer.md#getchildat)*

*Defined in [display/Layer.ts:315](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L315)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Layer](_display_layer_.layer.md)

___
<a id="getchildbyname"></a>

###  getChildByName

▸ **getChildByName**(name: *`string`*): [Layer](_display_layer_.layer.md)

*Inherited from [Layer](_display_layer_.layer.md).[getChildByName](_display_layer_.layer.md#getchildbyname)*

*Defined in [display/Layer.ts:294](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L294)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** [Layer](_display_layer_.layer.md)

___
<a id="getchildindex"></a>

###  getChildIndex

▸ **getChildIndex**(child: *[Layer](_display_layer_.layer.md)*): `number`

*Inherited from [Layer](_display_layer_.layer.md).[getChildIndex](_display_layer_.layer.md#getchildindex)*

*Defined in [display/Layer.ts:319](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L319)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| child | [Layer](_display_layer_.layer.md) |

**Returns:** `number`

___
<a id="getchildrenbytag"></a>

###  getChildrenByTag

▸ **getChildrenByTag**(tag: *`string`*): `Array`<[Layer](_display_layer_.layer.md)>

*Inherited from [Layer](_display_layer_.layer.md).[getChildrenByTag](_display_layer_.layer.md#getchildrenbytag)*

*Defined in [display/Layer.ts:304](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L304)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| tag | `string` |

**Returns:** `Array`<[Layer](_display_layer_.layer.md)>

___
<a id="haschild"></a>

###  hasChild

▸ **hasChild**(child: *[Layer](_display_layer_.layer.md)*): `boolean`

*Inherited from [Layer](_display_layer_.layer.md).[hasChild](_display_layer_.layer.md#haschild)*

*Defined in [display/Layer.ts:323](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L323)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| child | [Layer](_display_layer_.layer.md) |

**Returns:** `boolean`

___
<a id="haseventlistener"></a>

###  hasEventListener

▸ **hasEventListener**(event: *`string`*): `boolean`

*Inherited from [EventEmitter](_event_eventemitter_.eventemitter.md).[hasEventListener](_event_eventemitter_.eventemitter.md#haseventlistener)*

*Defined in [event/EventEmitter.ts:36](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/EventEmitter.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |

**Returns:** `boolean`

___
<a id="off"></a>

###  off

▸ **off**(event: *`string`*, listener?: *`function`*): `this`

*Inherited from [Layer](_display_layer_.layer.md).[off](_display_layer_.layer.md#off)*

*Overrides [EventEmitter](_event_eventemitter_.eventemitter.md).[off](_event_eventemitter_.eventemitter.md#off)*

*Defined in [display/Layer.ts:686](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L686)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| `Optional` listener | `function` |

**Returns:** `this`

___
<a id="on"></a>

###  on

▸ **on**(event: *`string`*, listener: *`function`*): `this`

*Inherited from [Layer](_display_layer_.layer.md).[on](_display_layer_.layer.md#on)*

*Overrides [EventEmitter](_event_eventemitter_.eventemitter.md).[on](_event_eventemitter_.eventemitter.md#on)*

*Defined in [display/Layer.ts:674](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L674)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `function` |

**Returns:** `this`

___
<a id="removeallchildren"></a>

###  removeAllChildren

▸ **removeAllChildren**(): `this`

*Inherited from [Layer](_display_layer_.layer.md).[removeAllChildren](_display_layer_.layer.md#removeallchildren)*

*Defined in [display/Layer.ts:406](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L406)*

**Returns:** `this`

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(): `this`

*Inherited from [EventEmitter](_event_eventemitter_.eventemitter.md).[removeAllListeners](_event_eventemitter_.eventemitter.md#removealllisteners)*

*Defined in [event/EventEmitter.ts:41](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/EventEmitter.ts#L41)*

**Returns:** `this`

___
<a id="removechild"></a>

###  removeChild

▸ **removeChild**(child: *[Layer](_display_layer_.layer.md)*): `this`

*Inherited from [Layer](_display_layer_.layer.md).[removeChild](_display_layer_.layer.md#removechild)*

*Defined in [display/Layer.ts:368](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L368)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| child | [Layer](_display_layer_.layer.md) |

**Returns:** `this`

___
<a id="removechildat"></a>

###  removeChildAt

▸ **removeChildAt**(index: *`number`*): `this`

*Inherited from [Layer](_display_layer_.layer.md).[removeChildAt](_display_layer_.layer.md#removechildat)*

*Defined in [display/Layer.ts:373](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L373)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** `this`

___
<a id="removechildrenbyname"></a>

###  removeChildrenByName

▸ **removeChildrenByName**(name: *`string`*): `this`

*Inherited from [Layer](_display_layer_.layer.md).[removeChildrenByName](_display_layer_.layer.md#removechildrenbyname)*

*Defined in [display/Layer.ts:383](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L383)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `this`

___
<a id="removechildrenbytag"></a>

###  removeChildrenByTag

▸ **removeChildrenByTag**(tag: *`string`*): `this`

*Inherited from [Layer](_display_layer_.layer.md).[removeChildrenByTag](_display_layer_.layer.md#removechildrenbytag)*

*Defined in [display/Layer.ts:395](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L395)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| tag | `string` |

**Returns:** `this`

___
<a id="removeself"></a>

###  removeSelf

▸ **removeSelf**(): `this`

*Inherited from [Layer](_display_layer_.layer.md).[removeSelf](_display_layer_.layer.md#removeself)*

*Defined in [display/Layer.ts:417](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L417)*

**Returns:** `this`

___
<a id="replacechild"></a>

###  replaceChild

▸ **replaceChild**(oldChild: *[Layer](_display_layer_.layer.md)*, newChild: *[Layer](_display_layer_.layer.md)*): `this`

*Inherited from [Layer](_display_layer_.layer.md).[replaceChild](_display_layer_.layer.md#replacechild)*

*Defined in [display/Layer.ts:284](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L284)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| oldChild | [Layer](_display_layer_.layer.md) |
| newChild | [Layer](_display_layer_.layer.md) |

**Returns:** `this`

___
<a id="setchildindex"></a>

###  setChildIndex

▸ **setChildIndex**(child: *[Layer](_display_layer_.layer.md)*, index: *`number`*): `this`

*Inherited from [Layer](_display_layer_.layer.md).[setChildIndex](_display_layer_.layer.md#setchildindex)*

*Defined in [display/Layer.ts:349](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L349)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| child | [Layer](_display_layer_.layer.md) |
| index | `number` |

**Returns:** `this`

___
<a id="swapchildren"></a>

###  swapChildren

▸ **swapChildren**(child1: *[Layer](_display_layer_.layer.md)*, child2: *[Layer](_display_layer_.layer.md)*): `this`

*Inherited from [Layer](_display_layer_.layer.md).[swapChildren](_display_layer_.layer.md#swapchildren)*

*Defined in [display/Layer.ts:327](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L327)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| child1 | [Layer](_display_layer_.layer.md) |
| child2 | [Layer](_display_layer_.layer.md) |

**Returns:** `this`

___
<a id="swapchildrenat"></a>

###  swapChildrenAt

▸ **swapChildrenAt**(index1: *`number`*, index2: *`number`*): `this`

*Inherited from [Layer](_display_layer_.layer.md).[swapChildrenAt](_display_layer_.layer.md#swapchildrenat)*

*Defined in [display/Layer.ts:336](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L336)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index1 | `number` |
| index2 | `number` |

**Returns:** `this`

___

