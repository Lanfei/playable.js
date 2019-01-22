[playable.js](../README.md) > ["display/Stage"](../modules/_display_stage_.md) > [Stage](../classes/_display_stage_.stage.md)

# Class: Stage

## Hierarchy

↳  [Layer](_display_layer_.layer.md)

**↳ Stage**

## Index

### Constructors

* [constructor](_display_stage_.stage.md#constructor)

### Properties

* [$alpha](_display_stage_.stage.md#_alpha)
* [$anchorX](_display_stage_.stage.md#_anchorx)
* [$anchorY](_display_stage_.stage.md#_anchory)
* [$backgroundColor](_display_stage_.stage.md#_backgroundcolor)
* [$backgroundFillMode](_display_stage_.stage.md#_backgroundfillmode)
* [$backgroundImage](_display_stage_.stage.md#_backgroundimage)
* [$backgroundPattern](_display_stage_.stage.md#_backgroundpattern)
* [$boundResizeViewportCanvas](_display_stage_.stage.md#_boundresizeviewportcanvas)
* [$canvas](_display_stage_.stage.md#_canvas)
* [$children](_display_stage_.stage.md#_children)
* [$context](_display_stage_.stage.md#_context)
* [$dirty](_display_stage_.stage.md#_dirty)
* [$drawCalls](_display_stage_.stage.md#_drawcalls)
* [$events](_display_stage_.stage.md#_events)
* [$height](_display_stage_.stage.md#_height)
* [$parent](_display_stage_.stage.md#_parent)
* [$renderBounds](_display_stage_.stage.md#_renderbounds)
* [$rotation](_display_stage_.stage.md#_rotation)
* [$scaleMode](_display_stage_.stage.md#_scalemode)
* [$scaleX](_display_stage_.stage.md#_scalex)
* [$scaleY](_display_stage_.stage.md#_scaley)
* [$shouldEmitTap](_display_stage_.stage.md#_shouldemittap)
* [$skewX](_display_stage_.stage.md#_skewx)
* [$skewY](_display_stage_.stage.md#_skewy)
* [$smoothing](_display_stage_.stage.md#_smoothing)
* [$stage](_display_stage_.stage.md#_stage)
* [$ticker](_display_stage_.stage.md#_ticker)
* [$touches](_display_stage_.stage.md#_touches)
* [$viewportBackgroundColor](_display_stage_.stage.md#_viewportbackgroundcolor)
* [$viewportBackgroundFillMode](_display_stage_.stage.md#_viewportbackgroundfillmode)
* [$viewportBackgroundImage](_display_stage_.stage.md#_viewportbackgroundimage)
* [$viewportBackgroundPattern](_display_stage_.stage.md#_viewportbackgroundpattern)
* [$viewportCanvas](_display_stage_.stage.md#_viewportcanvas)
* [$viewportContext](_display_stage_.stage.md#_viewportcontext)
* [$viewportHeight](_display_stage_.stage.md#_viewportheight)
* [$viewportWidth](_display_stage_.stage.md#_viewportwidth)
* [$visible](_display_stage_.stage.md#_visible)
* [$width](_display_stage_.stage.md#_width)
* [$x](_display_stage_.stage.md#_x)
* [$y](_display_stage_.stage.md#_y)
* [name](_display_stage_.stage.md#name)
* [tag](_display_stage_.stage.md#tag)
* [touchable](_display_stage_.stage.md#touchable)
* [EXACT_FIT](_display_stage_.stage.md#exact_fit)
* [FIXED_HEIGHT](_display_stage_.stage.md#fixed_height)
* [FIXED_NARROW](_display_stage_.stage.md#fixed_narrow)
* [FIXED_WIDE](_display_stage_.stage.md#fixed_wide)
* [FIXED_WIDTH](_display_stage_.stage.md#fixed_width)
* [NO_BORDER](_display_stage_.stage.md#no_border)
* [NO_SCALE](_display_stage_.stage.md#no_scale)
* [SHOW_ALL](_display_stage_.stage.md#show_all)
* [pixelRatio](_display_stage_.stage.md#pixelratio)

### Accessors

* [alpha](_display_stage_.stage.md#alpha)
* [anchorX](_display_stage_.stage.md#anchorx)
* [anchorY](_display_stage_.stage.md#anchory)
* [backgroundColor](_display_stage_.stage.md#backgroundcolor)
* [backgroundFillMode](_display_stage_.stage.md#backgroundfillmode)
* [backgroundImage](_display_stage_.stage.md#backgroundimage)
* [canvas](_display_stage_.stage.md#canvas)
* [children](_display_stage_.stage.md#children)
* [dirty](_display_stage_.stage.md#dirty)
* [drawCalls](_display_stage_.stage.md#drawcalls)
* [fps](_display_stage_.stage.md#fps)
* [height](_display_stage_.stage.md#height)
* [parent](_display_stage_.stage.md#parent)
* [rotation](_display_stage_.stage.md#rotation)
* [scaleMode](_display_stage_.stage.md#scalemode)
* [scaleX](_display_stage_.stage.md#scalex)
* [scaleY](_display_stage_.stage.md#scaley)
* [skewX](_display_stage_.stage.md#skewx)
* [skewY](_display_stage_.stage.md#skewy)
* [smoothing](_display_stage_.stage.md#smoothing)
* [stage](_display_stage_.stage.md#stage)
* [ticker](_display_stage_.stage.md#ticker)
* [viewportBackgroundColor](_display_stage_.stage.md#viewportbackgroundcolor)
* [viewportBackgroundFillMode](_display_stage_.stage.md#viewportbackgroundfillmode)
* [viewportBackgroundImage](_display_stage_.stage.md#viewportbackgroundimage)
* [viewportHeight](_display_stage_.stage.md#viewportheight)
* [viewportWidth](_display_stage_.stage.md#viewportwidth)
* [visible](_display_stage_.stage.md#visible)
* [width](_display_stage_.stage.md#width)
* [x](_display_stage_.stage.md#x)
* [y](_display_stage_.stage.md#y)

### Methods

* [$addTouchEventListeners](_display_stage_.stage.md#_addtoucheventlisteners)
* [$calculateRenderBounds](_display_stage_.stage.md#_calculaterenderbounds)
* [$dispatchTouchEvent](_display_stage_.stage.md#_dispatchtouchevent)
* [$dispatchTouches](_display_stage_.stage.md#_dispatchtouches)
* [$drawBackground](_display_stage_.stage.md#_drawbackground)
* [$drawChild](_display_stage_.stage.md#_drawchild)
* [$emitTouchEvent](_display_stage_.stage.md#_emittouchevent)
* [$getChildBounds](_display_stage_.stage.md#_getchildbounds)
* [$getChildTransform](_display_stage_.stage.md#_getchildtransform)
* [$getContentBounds](_display_stage_.stage.md#_getcontentbounds)
* [$getPattern](_display_stage_.stage.md#_getpattern)
* [$getTransform](_display_stage_.stage.md#_gettransform)
* [$initEvents](_display_stage_.stage.md#_initevents)
* [$isChildVisible](_display_stage_.stage.md#_ischildvisible)
* [$localHitTest](_display_stage_.stage.md#_localhittest)
* [$markDirty](_display_stage_.stage.md#_markdirty)
* [$markParentDirty](_display_stage_.stage.md#_markparentdirty)
* [$onAdded](_display_stage_.stage.md#_onadded)
* [$onAddedToStage](_display_stage_.stage.md#_onaddedtostage)
* [$onRemoved](_display_stage_.stage.md#_onremoved)
* [$onRemovedFromStage](_display_stage_.stage.md#_onremovedfromstage)
* [$render](_display_stage_.stage.md#_render)
* [$resizeCanvas](_display_stage_.stage.md#_resizecanvas)
* [$resizeViewportCanvas](_display_stage_.stage.md#_resizeviewportcanvas)
* [addChild](_display_stage_.stage.md#addchild)
* [addChildAt](_display_stage_.stage.md#addchildat)
* [createResourceManager](_display_stage_.stage.md#createresourcemanager)
* [emit](_display_stage_.stage.md#emit)
* [getChildAt](_display_stage_.stage.md#getchildat)
* [getChildByName](_display_stage_.stage.md#getchildbyname)
* [getChildIndex](_display_stage_.stage.md#getchildindex)
* [getChildrenByTag](_display_stage_.stage.md#getchildrenbytag)
* [hasChild](_display_stage_.stage.md#haschild)
* [hasEventListener](_display_stage_.stage.md#haseventlistener)
* [off](_display_stage_.stage.md#off)
* [on](_display_stage_.stage.md#on)
* [removeAllChildren](_display_stage_.stage.md#removeallchildren)
* [removeAllListeners](_display_stage_.stage.md#removealllisteners)
* [removeChild](_display_stage_.stage.md#removechild)
* [removeChildAt](_display_stage_.stage.md#removechildat)
* [removeChildrenByName](_display_stage_.stage.md#removechildrenbyname)
* [removeChildrenByTag](_display_stage_.stage.md#removechildrenbytag)
* [removeSelf](_display_stage_.stage.md#removeself)
* [replaceChild](_display_stage_.stage.md#replacechild)
* [setChildIndex](_display_stage_.stage.md#setchildindex)
* [swapChildren](_display_stage_.stage.md#swapchildren)
* [swapChildrenAt](_display_stage_.stage.md#swapchildrenat)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Stage**(canvas?: *`HTMLCanvasElement`*): [Stage](_display_stage_.stage.md)

*Overrides [Layer](_display_layer_.layer.md).[constructor](_display_layer_.layer.md#constructor)*

*Defined in [display/Stage.ts:33](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` canvas | `HTMLCanvasElement` |

**Returns:** [Stage](_display_stage_.stage.md)

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
<a id="_boundresizeviewportcanvas"></a>

### `<Protected>` $boundResizeViewportCanvas

**● $boundResizeViewportCanvas**: *`function`*

*Defined in [display/Stage.ts:33](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L33)*

#### Type declaration
▸(): `void`

**Returns:** `void`

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
<a id="_drawcalls"></a>

### `<Protected>` $drawCalls

**● $drawCalls**: *`number`*

*Defined in [display/Stage.ts:21](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L21)*

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
<a id="_parent"></a>

### `<Protected>` $parent

**● $parent**: *[Layer](_display_layer_.layer.md)* =  null

*Inherited from [Layer](_display_layer_.layer.md).[$parent](_display_layer_.layer.md#_parent)*

*Defined in [display/Layer.ts:39](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L39)*

___
<a id="_renderbounds"></a>

### `<Protected>` $renderBounds

**● $renderBounds**: *[Rectangle](_geom_rectangle_.rectangle.md)*

*Defined in [display/Stage.ts:25](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L25)*

___
<a id="_rotation"></a>

### `<Protected>` $rotation

**● $rotation**: *`number`* = 0

*Inherited from [Layer](_display_layer_.layer.md).[$rotation](_display_layer_.layer.md#_rotation)*

*Defined in [display/Layer.ts:29](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L29)*

___
<a id="_scalemode"></a>

### `<Protected>` $scaleMode

**● $scaleMode**: *`string`*

*Defined in [display/Stage.ts:22](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L22)*

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
<a id="_ticker"></a>

### `<Protected>` $ticker

**● $ticker**: *[Ticker](_core_ticker_.ticker.md)*

*Defined in [display/Stage.ts:30](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L30)*

___
<a id="_touches"></a>

### `<Protected>` $touches

**● $touches**: *`Array`<`boolean`>* =  []

*Inherited from [Layer](_display_layer_.layer.md).[$touches](_display_layer_.layer.md#_touches)*

*Defined in [display/Layer.ts:42](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L42)*

___
<a id="_viewportbackgroundcolor"></a>

### `<Protected>` $viewportBackgroundColor

**● $viewportBackgroundColor**: *`string`*

*Defined in [display/Stage.ts:26](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L26)*

___
<a id="_viewportbackgroundfillmode"></a>

### `<Protected>` $viewportBackgroundFillMode

**● $viewportBackgroundFillMode**: *[BackgroundFillMode](../modules/_display_layer_.md#backgroundfillmode)* = "scale"

*Defined in [display/Stage.ts:29](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L29)*

___
<a id="_viewportbackgroundimage"></a>

### `<Protected>` $viewportBackgroundImage

**● $viewportBackgroundImage**: *[Image](_media_image_.image.md)*

*Defined in [display/Stage.ts:27](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L27)*

___
<a id="_viewportbackgroundpattern"></a>

### `<Protected>` $viewportBackgroundPattern

**● $viewportBackgroundPattern**: *`CanvasPattern`*

*Defined in [display/Stage.ts:28](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L28)*

___
<a id="_viewportcanvas"></a>

### `<Protected>` $viewportCanvas

**● $viewportCanvas**: *`HTMLCanvasElement`*

*Defined in [display/Stage.ts:31](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L31)*

___
<a id="_viewportcontext"></a>

### `<Protected>` $viewportContext

**● $viewportContext**: *`CanvasRenderingContext2D`*

*Defined in [display/Stage.ts:32](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L32)*

___
<a id="_viewportheight"></a>

### `<Protected>` $viewportHeight

**● $viewportHeight**: *`number`*

*Defined in [display/Stage.ts:24](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L24)*

___
<a id="_viewportwidth"></a>

### `<Protected>` $viewportWidth

**● $viewportWidth**: *`number`*

*Defined in [display/Stage.ts:23](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L23)*

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
<a id="exact_fit"></a>

### `<Static>` EXACT_FIT

**● EXACT_FIT**: *`string`* = "exactFit"

*Defined in [display/Stage.ts:15](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L15)*

___
<a id="fixed_height"></a>

### `<Static>` FIXED_HEIGHT

**● FIXED_HEIGHT**: *`string`* = "fixedHeight"

*Defined in [display/Stage.ts:19](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L19)*

___
<a id="fixed_narrow"></a>

### `<Static>` FIXED_NARROW

**● FIXED_NARROW**: *`string`* = "fixedNarrow"

*Defined in [display/Stage.ts:17](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L17)*

___
<a id="fixed_wide"></a>

### `<Static>` FIXED_WIDE

**● FIXED_WIDE**: *`string`* = "fixedWide"

*Defined in [display/Stage.ts:16](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L16)*

___
<a id="fixed_width"></a>

### `<Static>` FIXED_WIDTH

**● FIXED_WIDTH**: *`string`* = "fixedWidth"

*Defined in [display/Stage.ts:18](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L18)*

___
<a id="no_border"></a>

### `<Static>` NO_BORDER

**● NO_BORDER**: *`string`* = "noBorder"

*Defined in [display/Stage.ts:13](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L13)*

___
<a id="no_scale"></a>

### `<Static>` NO_SCALE

**● NO_SCALE**: *`string`* = "noScale"

*Defined in [display/Stage.ts:12](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L12)*

___
<a id="show_all"></a>

### `<Static>` SHOW_ALL

**● SHOW_ALL**: *`string`* = "showAll"

*Defined in [display/Stage.ts:14](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L14)*

___
<a id="pixelratio"></a>

### `<Static>` pixelRatio

**● pixelRatio**: *`number`* =  window.devicePixelRatio || 1

*Inherited from [Layer](_display_layer_.layer.md).[pixelRatio](_display_layer_.layer.md#pixelratio)*

*Defined in [display/Layer.ts:13](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L13)*

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
<a id="drawcalls"></a>

###  drawCalls

getdrawCalls(): `number`

*Defined in [display/Stage.ts:155](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L155)*

**Returns:** `number`

___
<a id="fps"></a>

###  fps

getfps(): `number`

*Defined in [display/Stage.ts:159](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L159)*

**Returns:** `number`

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
<a id="scalemode"></a>

###  scaleMode

getscaleMode(): `string`setscaleMode(scaleMode: *`string`*): `void`

*Defined in [display/Stage.ts:87](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L87)*

**Returns:** `string`

*Defined in [display/Stage.ts:91](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L91)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| scaleMode | `string` |

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

*Overrides [Layer](_display_layer_.layer.md).[ticker](_display_layer_.layer.md#ticker)*

*Defined in [display/Stage.ts:163](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L163)*

**Returns:** [Ticker](_core_ticker_.ticker.md)

___
<a id="viewportbackgroundcolor"></a>

###  viewportBackgroundColor

getviewportBackgroundColor(): `string`setviewportBackgroundColor(viewportBackgroundColor: *`string`*): `void`

*Defined in [display/Stage.ts:120](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L120)*

**Returns:** `string`

*Defined in [display/Stage.ts:124](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L124)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| viewportBackgroundColor | `string` |

**Returns:** `void`

___
<a id="viewportbackgroundfillmode"></a>

###  viewportBackgroundFillMode

getviewportBackgroundFillMode(): [BackgroundFillMode](../modules/_display_layer_.md#backgroundfillmode)setviewportBackgroundFillMode(viewportBackgroundFillMode: *[BackgroundFillMode](../modules/_display_layer_.md#backgroundfillmode)*): `void`

*Defined in [display/Stage.ts:143](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L143)*

**Returns:** [BackgroundFillMode](../modules/_display_layer_.md#backgroundfillmode)

*Defined in [display/Stage.ts:147](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L147)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| viewportBackgroundFillMode | [BackgroundFillMode](../modules/_display_layer_.md#backgroundfillmode) |

**Returns:** `void`

___
<a id="viewportbackgroundimage"></a>

###  viewportBackgroundImage

getviewportBackgroundImage(): [Image](_media_image_.image.md)setviewportBackgroundImage(viewportBackgroundImage: *[Image](_media_image_.image.md)*): `void`

*Defined in [display/Stage.ts:131](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L131)*

**Returns:** [Image](_media_image_.image.md)

*Defined in [display/Stage.ts:135](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L135)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| viewportBackgroundImage | [Image](_media_image_.image.md) |

**Returns:** `void`

___
<a id="viewportheight"></a>

###  viewportHeight

getviewportHeight(): `number`setviewportHeight(height: *`number`*): `void`

*Defined in [display/Stage.ts:109](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L109)*

**Returns:** `number`

*Defined in [display/Stage.ts:113](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L113)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| height | `number` |

**Returns:** `void`

___
<a id="viewportwidth"></a>

###  viewportWidth

getviewportWidth(): `number`setviewportWidth(width: *`number`*): `void`

*Defined in [display/Stage.ts:98](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L98)*

**Returns:** `number`

*Defined in [display/Stage.ts:102](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L102)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| width | `number` |

**Returns:** `void`

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

*Overrides [Layer](_display_layer_.layer.md).[x](_display_layer_.layer.md#x)*

*Defined in [display/Stage.ts:71](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L71)*

**Returns:** `number`

*Overrides [Layer](_display_layer_.layer.md).[x](_display_layer_.layer.md#x)*

*Defined in [display/Stage.ts:75](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L75)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |

**Returns:** `void`

___
<a id="y"></a>

###  y

gety(): `number`sety(y: *`number`*): `void`

*Overrides [Layer](_display_layer_.layer.md).[y](_display_layer_.layer.md#y)*

*Defined in [display/Stage.ts:79](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L79)*

**Returns:** `number`

*Overrides [Layer](_display_layer_.layer.md).[y](_display_layer_.layer.md#y)*

*Defined in [display/Stage.ts:83](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L83)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| y | `number` |

**Returns:** `void`

___

## Methods

<a id="_addtoucheventlisteners"></a>

### `<Protected>` $addTouchEventListeners

▸ **$addTouchEventListeners**(): `void`

*Defined in [display/Stage.ts:171](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L171)*

**Returns:** `void`

___
<a id="_calculaterenderbounds"></a>

### `<Protected>` $calculateRenderBounds

▸ **$calculateRenderBounds**(): `void`

*Defined in [display/Stage.ts:248](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L248)*

**Returns:** `void`

___
<a id="_dispatchtouchevent"></a>

### `<Protected>` $dispatchTouchEvent

▸ **$dispatchTouchEvent**(type: *`string`*, pageX: *`number`*, pageY: *`number`*, identifier: *`number`*): `void`

*Defined in [display/Stage.ts:220](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L220)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| pageX | `number` |
| pageY | `number` |
| identifier | `number` |

**Returns:** `void`

___
<a id="_dispatchtouches"></a>

### `<Protected>` $dispatchTouches

▸ **$dispatchTouches**(type: *`string`*, event: *[Event](_event_event_.event.md)*): `void`

*Defined in [display/Stage.ts:212](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L212)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| event | [Event](_event_event_.event.md) |

**Returns:** `void`

___
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

*Inherited from [Layer](_display_layer_.layer.md).[$getChildTransform](_display_layer_.layer.md#_getchildtransform)*

*Defined in [display/Layer.ts:460](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L460)*

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
<a id="_initevents"></a>

### `<Protected>` $initEvents

▸ **$initEvents**(): `void`

*Defined in [display/Stage.ts:57](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L57)*

**Returns:** `void`

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

*Inherited from [Layer](_display_layer_.layer.md).[$onRemovedFromStage](_display_layer_.layer.md#_onremovedfromstage)*

*Defined in [display/Layer.ts:713](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Layer.ts#L713)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| stage | [Stage](_display_stage_.stage.md) |

**Returns:** `void`

___
<a id="_render"></a>

### `<Protected>` $render

▸ **$render**(): `number`

*Overrides [Layer](_display_layer_.layer.md).[$render](_display_layer_.layer.md#_render)*

*Defined in [display/Stage.ts:336](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L336)*

**Returns:** `number`

___
<a id="_resizecanvas"></a>

### `<Protected>` $resizeCanvas

▸ **$resizeCanvas**(): `void`

*Overrides [Layer](_display_layer_.layer.md).[$resizeCanvas](_display_layer_.layer.md#_resizecanvas)*

*Defined in [display/Stage.ts:319](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L319)*

**Returns:** `void`

___
<a id="_resizeviewportcanvas"></a>

### `<Protected>` $resizeViewportCanvas

▸ **$resizeViewportCanvas**(): `void`

*Defined in [display/Stage.ts:324](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L324)*

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
<a id="createresourcemanager"></a>

###  createResourceManager

▸ **createResourceManager**(list: *`Array`<[ResourceInfo](../interfaces/_net_resourcemanager_.resourceinfo.md)>*, options?: *[ResourceManagerOption](../interfaces/_net_resourcemanager_.resourcemanageroption.md)*): [ResourceManager](_net_resourcemanager_.resourcemanager.md)

*Defined in [display/Stage.ts:167](https://github.com/Lanfei/playable.js/blob/9a36445/src/display/Stage.ts#L167)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| list | `Array`<[ResourceInfo](../interfaces/_net_resourcemanager_.resourceinfo.md)> |
| `Optional` options | [ResourceManagerOption](../interfaces/_net_resourcemanager_.resourcemanageroption.md) |

**Returns:** [ResourceManager](_net_resourcemanager_.resourcemanager.md)

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

