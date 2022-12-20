[API Reference](../README.md) / Stage

# Class: Stage

## Hierarchy

- [`Layer`](../README.md#layer)

  ↳ **`Stage`**

## Table of contents

### Constructors

- [constructor](Stage.md#constructor)

### Properties

- [$activated](Stage.md#$activated)
- [$alpha](Stage.md#$alpha)
- [$anchorX](Stage.md#$anchorx)
- [$anchorY](Stage.md#$anchory)
- [$background](Stage.md#$background)
- [$boundResizeViewportCanvas](Stage.md#$boundresizeviewportcanvas)
- [$canvas](Stage.md#$canvas)
- [$children](Stage.md#$children)
- [$context](Stage.md#$context)
- [$dirty](Stage.md#$dirty)
- [$drawCalls](Stage.md#$drawcalls)
- [$elementEvents](Stage.md#$elementevents)
- [$emittingType](Stage.md#$emittingtype)
- [$events](Stage.md#$events)
- [$height](Stage.md#$height)
- [$parent](Stage.md#$parent)
- [$removedListeners](Stage.md#$removedlisteners)
- [$renderBounds](Stage.md#$renderbounds)
- [$rotation](Stage.md#$rotation)
- [$scaleMode](Stage.md#$scalemode)
- [$scaleX](Stage.md#$scalex)
- [$scaleY](Stage.md#$scaley)
- [$shouldEmitTap](Stage.md#$shouldemittap)
- [$skewX](Stage.md#$skewx)
- [$skewY](Stage.md#$skewy)
- [$smoothing](Stage.md#$smoothing)
- [$stage](Stage.md#$stage)
- [$ticker](Stage.md#$ticker)
- [$touches](Stage.md#$touches)
- [$viewportBackground](Stage.md#$viewportbackground)
- [$viewportCanvas](Stage.md#$viewportcanvas)
- [$viewportContext](Stage.md#$viewportcontext)
- [$viewportHeight](Stage.md#$viewportheight)
- [$viewportWidth](Stage.md#$viewportwidth)
- [$visible](Stage.md#$visible)
- [$width](Stage.md#$width)
- [$x](Stage.md#$x)
- [$y](Stage.md#$y)
- [name](Stage.md#name)
- [tag](Stage.md#tag)
- [touchable](Stage.md#touchable)
- [EXACT\_FIT](Stage.md#exact_fit)
- [FIXED\_HEIGHT](Stage.md#fixed_height)
- [FIXED\_NARROW](Stage.md#fixed_narrow)
- [FIXED\_WIDE](Stage.md#fixed_wide)
- [FIXED\_WIDTH](Stage.md#fixed_width)
- [NO\_BORDER](Stage.md#no_border)
- [NO\_SCALE](Stage.md#no_scale)
- [SHOW\_ALL](Stage.md#show_all)
- [pixelRatio](Stage.md#pixelratio)

### Accessors

- [activated](Stage.md#activated)
- [alpha](Stage.md#alpha)
- [anchorX](Stage.md#anchorx)
- [anchorY](Stage.md#anchory)
- [background](Stage.md#background)
- [canvas](Stage.md#canvas)
- [drawCalls](Stage.md#drawcalls)
- [fps](Stage.md#fps)
- [height](Stage.md#height)
- [numChildren](Stage.md#numchildren)
- [parent](Stage.md#parent)
- [rotation](Stage.md#rotation)
- [scaleMode](Stage.md#scalemode)
- [scaleX](Stage.md#scalex)
- [scaleY](Stage.md#scaley)
- [skewX](Stage.md#skewx)
- [skewY](Stage.md#skewy)
- [smoothing](Stage.md#smoothing)
- [stage](Stage.md#stage)
- [ticker](Stage.md#ticker)
- [viewportBackground](Stage.md#viewportbackground)
- [viewportCanvas](Stage.md#viewportcanvas)
- [viewportHeight](Stage.md#viewportheight)
- [viewportWidth](Stage.md#viewportwidth)
- [visible](Stage.md#visible)
- [width](Stage.md#width)
- [x](Stage.md#x)
- [y](Stage.md#y)

### Methods

- [$addElementEvent](Stage.md#$addelementevent)
- [$addTouchEventListeners](Stage.md#$addtoucheventlisteners)
- [$calculateRenderBounds](Stage.md#$calculaterenderbounds)
- [$dispatchTouchEvent](Stage.md#$dispatchtouchevent)
- [$dispatchTouches](Stage.md#$dispatchtouches)
- [$drawChild](Stage.md#$drawchild)
- [$emitAdded](Stage.md#$emitadded)
- [$emitAddedToStage](Stage.md#$emitaddedtostage)
- [$emitRemoved](Stage.md#$emitremoved)
- [$emitRemovedFromStage](Stage.md#$emitremovedfromstage)
- [$emitTouchEvent](Stage.md#$emittouchevent)
- [$getChildBounds](Stage.md#$getchildbounds)
- [$getChildTransform](Stage.md#$getchildtransform)
- [$getContentBounds](Stage.md#$getcontentbounds)
- [$getTransform](Stage.md#$gettransform)
- [$initEvents](Stage.md#$initevents)
- [$isChildVisible](Stage.md#$ischildvisible)
- [$localHitTest](Stage.md#$localhittest)
- [$markDirty](Stage.md#$markdirty)
- [$markParentDirty](Stage.md#$markparentdirty)
- [$removeElementEvents](Stage.md#$removeelementevents)
- [$render](Stage.md#$render)
- [$resizeCanvas](Stage.md#$resizecanvas)
- [$resizeParentCanvas](Stage.md#$resizeparentcanvas)
- [$resizeViewportCanvas](Stage.md#$resizeviewportcanvas)
- [addChild](Stage.md#addchild)
- [addChildAt](Stage.md#addchildat)
- [createResourceManager](Stage.md#createresourcemanager)
- [emit](Stage.md#emit)
- [getChildAt](Stage.md#getchildat)
- [getChildByName](Stage.md#getchildbyname)
- [getChildIndex](Stage.md#getchildindex)
- [getChildrenByTag](Stage.md#getchildrenbytag)
- [hasChild](Stage.md#haschild)
- [hasEventListener](Stage.md#haseventlistener)
- [off](Stage.md#off)
- [on](Stage.md#on)
- [once](Stage.md#once)
- [removeAllChildren](Stage.md#removeallchildren)
- [removeAllListeners](Stage.md#removealllisteners)
- [removeChild](Stage.md#removechild)
- [removeChildAt](Stage.md#removechildat)
- [removeChildByName](Stage.md#removechildbyname)
- [removeChildrenByTag](Stage.md#removechildrenbytag)
- [removeSelf](Stage.md#removeself)
- [replaceChild](Stage.md#replacechild)
- [setChildIndex](Stage.md#setchildindex)
- [swapChildren](Stage.md#swapchildren)
- [swapChildrenAt](Stage.md#swapchildrenat)

## Constructors

### constructor

• **new Stage**(`canvas?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas?` | `HTMLCanvasElement` |

#### Overrides

[Layer](../README.md#layer).[constructor](../README.md#constructor)

#### Defined in

[display/Stage.ts:33](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L33)

## Properties

### $activated

• `Protected` **$activated**: `boolean` = `false`

#### Defined in

[display/Stage.ts:21](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L21)

___

### $alpha

• `Protected` **$alpha**: `number` = `1`

#### Inherited from

[Layer](../README.md#layer).[$alpha](../README.md#$alpha)

#### Defined in

[display/Layer.ts:29](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L29)

___

### $anchorX

• `Protected` **$anchorX**: `number` = `0`

#### Inherited from

[Layer](../README.md#layer).[$anchorX](../README.md#$anchorx)

#### Defined in

[display/Layer.ts:22](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L22)

___

### $anchorY

• `Protected` **$anchorY**: `number` = `0`

#### Inherited from

[Layer](../README.md#layer).[$anchorY](../README.md#$anchory)

#### Defined in

[display/Layer.ts:23](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L23)

___

### $background

• `Protected` **$background**: `string` = `null`

#### Inherited from

[Layer](../README.md#layer).[$background](../README.md#$background)

#### Defined in

[display/Layer.ts:32](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L32)

___

### $boundResizeViewportCanvas

• `Protected` `Readonly` **$boundResizeViewportCanvas**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[display/Stage.ts:31](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L31)

___

### $canvas

• `Protected` `Readonly` **$canvas**: `HTMLCanvasElement`

#### Inherited from

[Layer](../README.md#layer).[$canvas](../README.md#$canvas)

#### Defined in

[display/Layer.ts:39](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L39)

___

### $children

• `Protected` **$children**: [`Layer`](../README.md#layer)[] = `[]`

#### Inherited from

[Layer](../README.md#layer).[$children](../README.md#$children)

#### Defined in

[display/Layer.ts:35](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L35)

___

### $context

• `Protected` `Readonly` **$context**: `CanvasRenderingContext2D`

#### Inherited from

[Layer](../README.md#layer).[$context](../README.md#$context)

#### Defined in

[display/Layer.ts:40](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L40)

___

### $dirty

• `Protected` **$dirty**: `boolean` = `true`

#### Inherited from

[Layer](../README.md#layer).[$dirty](../README.md#$dirty)

#### Defined in

[display/Layer.ts:36](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L36)

___

### $drawCalls

• `Protected` **$drawCalls**: `number` = `0`

#### Defined in

[display/Stage.ts:20](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L20)

___

### $elementEvents

• `Protected` `Readonly` **$elementEvents**: `ElementEvent`[]

#### Defined in

[display/Stage.ts:27](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L27)

___

### $emittingType

• `Protected` **$emittingType**: `string` = `null`

#### Inherited from

[Layer](../README.md#layer).[$emittingType](../README.md#$emittingtype)

#### Defined in

[event/EventEmitter.ts:6](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L6)

___

### $events

• `Protected` **$events**: `Object` = `{}`

#### Inherited from

[Layer](../README.md#layer).[$events](../README.md#$events)

#### Defined in

[event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L5)

___

### $height

• `Protected` **$height**: `number` = `0`

#### Inherited from

[Layer](../README.md#layer).[$height](../README.md#$height)

#### Defined in

[display/Layer.ts:21](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L21)

___

### $parent

• `Protected` **$parent**: [`Layer`](../README.md#layer) = `null`

#### Inherited from

[Layer](../README.md#layer).[$parent](../README.md#$parent)

#### Defined in

[display/Layer.ts:34](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L34)

___

### $removedListeners

• `Protected` **$removedListeners**: [`Listener`](../README.md#listener)[] = `[]`

#### Inherited from

[Layer](../README.md#layer).[$removedListeners](../README.md#$removedlisteners)

#### Defined in

[event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L7)

___

### $renderBounds

• `Protected` `Readonly` **$renderBounds**: [`Rectangle`](../README.md#rectangle)

#### Defined in

[display/Stage.ts:30](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L30)

___

### $rotation

• `Protected` **$rotation**: `number` = `0`

#### Inherited from

[Layer](../README.md#layer).[$rotation](../README.md#$rotation)

#### Defined in

[display/Layer.ts:28](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L28)

___

### $scaleMode

• `Protected` **$scaleMode**: `string` = `Stage.SHOW_ALL`

#### Defined in

[display/Stage.ts:22](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L22)

___

### $scaleX

• `Protected` **$scaleX**: `number` = `1`

#### Inherited from

[Layer](../README.md#layer).[$scaleX](../README.md#$scalex)

#### Defined in

[display/Layer.ts:26](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L26)

___

### $scaleY

• `Protected` **$scaleY**: `number` = `1`

#### Inherited from

[Layer](../README.md#layer).[$scaleY](../README.md#$scaley)

#### Defined in

[display/Layer.ts:27](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L27)

___

### $shouldEmitTap

• `Protected` **$shouldEmitTap**: `boolean` = `true`

#### Inherited from

[Layer](../README.md#layer).[$shouldEmitTap](../README.md#$shouldemittap)

#### Defined in

[display/Layer.ts:37](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L37)

___

### $skewX

• `Protected` **$skewX**: `number` = `0`

#### Inherited from

[Layer](../README.md#layer).[$skewX](../README.md#$skewx)

#### Defined in

[display/Layer.ts:24](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L24)

___

### $skewY

• `Protected` **$skewY**: `number` = `0`

#### Inherited from

[Layer](../README.md#layer).[$skewY](../README.md#$skewy)

#### Defined in

[display/Layer.ts:25](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L25)

___

### $smoothing

• `Protected` **$smoothing**: `boolean` = `true`

#### Inherited from

[Layer](../README.md#layer).[$smoothing](../README.md#$smoothing)

#### Defined in

[display/Layer.ts:31](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L31)

___

### $stage

• `Protected` **$stage**: [`Stage`](../README.md#stage) = `null`

#### Inherited from

[Layer](../README.md#layer).[$stage](../README.md#$stage)

#### Defined in

[display/Layer.ts:33](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L33)

___

### $ticker

• `Protected` `Readonly` **$ticker**: [`Ticker`](../README.md#ticker)

#### Defined in

[display/Stage.ts:26](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L26)

___

### $touches

• `Protected` **$touches**: `boolean`[] = `[]`

#### Inherited from

[Layer](../README.md#layer).[$touches](../README.md#$touches)

#### Defined in

[display/Layer.ts:38](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L38)

___

### $viewportBackground

• `Protected` **$viewportBackground**: `string` = `null`

#### Defined in

[display/Stage.ts:25](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L25)

___

### $viewportCanvas

• `Protected` `Readonly` **$viewportCanvas**: `HTMLCanvasElement`

#### Defined in

[display/Stage.ts:28](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L28)

___

### $viewportContext

• `Protected` `Readonly` **$viewportContext**: `CanvasRenderingContext2D`

#### Defined in

[display/Stage.ts:29](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L29)

___

### $viewportHeight

• `Protected` **$viewportHeight**: `number` = `0`

#### Defined in

[display/Stage.ts:24](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L24)

___

### $viewportWidth

• `Protected` **$viewportWidth**: `number` = `0`

#### Defined in

[display/Stage.ts:23](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L23)

___

### $visible

• `Protected` **$visible**: `boolean` = `true`

#### Inherited from

[Layer](../README.md#layer).[$visible](../README.md#$visible)

#### Defined in

[display/Layer.ts:30](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L30)

___

### $width

• `Protected` **$width**: `number` = `0`

#### Inherited from

[Layer](../README.md#layer).[$width](../README.md#$width)

#### Defined in

[display/Layer.ts:20](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L20)

___

### $x

• `Protected` **$x**: `number` = `0`

#### Inherited from

[Layer](../README.md#layer).[$x](../README.md#$x)

#### Defined in

[display/Layer.ts:18](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L18)

___

### $y

• `Protected` **$y**: `number` = `0`

#### Inherited from

[Layer](../README.md#layer).[$y](../README.md#$y)

#### Defined in

[display/Layer.ts:19](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L19)

___

### name

• **name**: `string` = `''`

#### Inherited from

[Layer](../README.md#layer).[name](../README.md#name)

#### Defined in

[display/Layer.ts:14](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L14)

___

### tag

• **tag**: `string` = `''`

#### Inherited from

[Layer](../README.md#layer).[tag](../README.md#tag)

#### Defined in

[display/Layer.ts:15](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L15)

___

### touchable

• **touchable**: `boolean` = `true`

#### Inherited from

[Layer](../README.md#layer).[touchable](../README.md#touchable)

#### Defined in

[display/Layer.ts:16](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L16)

___

### EXACT\_FIT

▪ `Static` `Readonly` **EXACT\_FIT**: `string` = `'exactFit'`

#### Defined in

[display/Stage.ts:12](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L12)

___

### FIXED\_HEIGHT

▪ `Static` `Readonly` **FIXED\_HEIGHT**: `string` = `'fixedHeight'`

#### Defined in

[display/Stage.ts:18](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L18)

___

### FIXED\_NARROW

▪ `Static` `Readonly` **FIXED\_NARROW**: `string` = `'fixedNarrow'`

#### Defined in

[display/Stage.ts:16](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L16)

___

### FIXED\_WIDE

▪ `Static` `Readonly` **FIXED\_WIDE**: `string` = `'fixedWide'`

#### Defined in

[display/Stage.ts:15](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L15)

___

### FIXED\_WIDTH

▪ `Static` `Readonly` **FIXED\_WIDTH**: `string` = `'fixedWidth'`

#### Defined in

[display/Stage.ts:17](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L17)

___

### NO\_BORDER

▪ `Static` `Readonly` **NO\_BORDER**: `string` = `'noBorder'`

#### Defined in

[display/Stage.ts:14](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L14)

___

### NO\_SCALE

▪ `Static` `Readonly` **NO\_SCALE**: `string` = `'noScale'`

#### Defined in

[display/Stage.ts:13](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L13)

___

### SHOW\_ALL

▪ `Static` `Readonly` **SHOW\_ALL**: `string` = `'showAll'`

#### Defined in

[display/Stage.ts:11](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L11)

___

### pixelRatio

▪ `Static` **pixelRatio**: `number`

#### Inherited from

[Layer](../README.md#layer).[pixelRatio](../README.md#pixelratio)

#### Defined in

[display/Layer.ts:12](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L12)

## Accessors

### activated

• `get` **activated**(): `boolean`

#### Returns

`boolean`

#### Defined in

[display/Stage.ts:81](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L81)

___

### alpha

• `get` **alpha**(): `number`

#### Returns

`number`

#### Inherited from

Layer.alpha

#### Defined in

[display/Layer.ts:169](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L169)

• `set` **alpha**(`alpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `alpha` | `number` |

#### Returns

`void`

#### Inherited from

Layer.alpha

#### Defined in

[display/Layer.ts:173](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L173)

___

### anchorX

• `get` **anchorX**(): `number`

#### Returns

`number`

#### Inherited from

Layer.anchorX

#### Defined in

[display/Layer.ts:92](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L92)

• `set` **anchorX**(`anchorX`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anchorX` | `number` |

#### Returns

`void`

#### Inherited from

Layer.anchorX

#### Defined in

[display/Layer.ts:96](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L96)

___

### anchorY

• `get` **anchorY**(): `number`

#### Returns

`number`

#### Inherited from

Layer.anchorY

#### Defined in

[display/Layer.ts:103](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L103)

• `set` **anchorY**(`anchorY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anchorY` | `number` |

#### Returns

`void`

#### Inherited from

Layer.anchorY

#### Defined in

[display/Layer.ts:107](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L107)

___

### background

• `get` **background**(): `string`

#### Returns

`string`

#### Inherited from

Layer.background

#### Defined in

[display/Layer.ts:200](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L200)

• `set` **background**(`background`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `background` | `string` |

#### Returns

`void`

#### Inherited from

Layer.background

#### Defined in

[display/Layer.ts:204](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L204)

___

### canvas

• `get` **canvas**(): `HTMLCanvasElement`

#### Returns

`HTMLCanvasElement`

#### Inherited from

Layer.canvas

#### Defined in

[display/Layer.ts:227](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L227)

___

### drawCalls

• `get` **drawCalls**(): `number`

#### Returns

`number`

#### Defined in

[display/Stage.ts:77](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L77)

___

### fps

• `get` **fps**(): `number`

#### Returns

`number`

#### Defined in

[display/Stage.ts:73](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L73)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

Layer.height

#### Defined in

[display/Layer.ts:81](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L81)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

Layer.height

#### Defined in

[display/Layer.ts:85](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L85)

___

### numChildren

• `get` **numChildren**(): `number`

#### Returns

`number`

#### Inherited from

Layer.numChildren

#### Defined in

[display/Layer.ts:219](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L219)

___

### parent

• `get` **parent**(): [`Layer`](../README.md#layer)

#### Returns

[`Layer`](../README.md#layer)

#### Inherited from

Layer.parent

#### Defined in

[display/Layer.ts:215](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L215)

___

### rotation

• `get` **rotation**(): `number`

#### Returns

`number`

#### Inherited from

Layer.rotation

#### Defined in

[display/Layer.ts:158](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L158)

• `set` **rotation**(`rotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rotation` | `number` |

#### Returns

`void`

#### Inherited from

Layer.rotation

#### Defined in

[display/Layer.ts:162](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L162)

___

### scaleMode

• `get` **scaleMode**(): `string`

#### Returns

`string`

#### Defined in

[display/Stage.ts:85](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L85)

• `set` **scaleMode**(`scaleMode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleMode` | `string` |

#### Returns

`void`

#### Defined in

[display/Stage.ts:89](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L89)

___

### scaleX

• `get` **scaleX**(): `number`

#### Returns

`number`

#### Inherited from

Layer.scaleX

#### Defined in

[display/Layer.ts:136](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L136)

• `set` **scaleX**(`scaleX`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleX` | `number` |

#### Returns

`void`

#### Inherited from

Layer.scaleX

#### Defined in

[display/Layer.ts:140](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L140)

___

### scaleY

• `get` **scaleY**(): `number`

#### Returns

`number`

#### Inherited from

Layer.scaleY

#### Defined in

[display/Layer.ts:147](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L147)

• `set` **scaleY**(`scaleY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleY` | `number` |

#### Returns

`void`

#### Inherited from

Layer.scaleY

#### Defined in

[display/Layer.ts:151](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L151)

___

### skewX

• `get` **skewX**(): `number`

#### Returns

`number`

#### Inherited from

Layer.skewX

#### Defined in

[display/Layer.ts:114](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L114)

• `set` **skewX**(`skewX`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skewX` | `number` |

#### Returns

`void`

#### Inherited from

Layer.skewX

#### Defined in

[display/Layer.ts:118](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L118)

___

### skewY

• `get` **skewY**(): `number`

#### Returns

`number`

#### Inherited from

Layer.skewY

#### Defined in

[display/Layer.ts:125](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L125)

• `set` **skewY**(`skewY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skewY` | `number` |

#### Returns

`void`

#### Inherited from

Layer.skewY

#### Defined in

[display/Layer.ts:129](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L129)

___

### smoothing

• `get` **smoothing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Layer.smoothing

#### Defined in

[display/Layer.ts:191](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L191)

• `set` **smoothing**(`smoothing`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `smoothing` | `boolean` |

#### Returns

`void`

#### Inherited from

Layer.smoothing

#### Defined in

[display/Layer.ts:195](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L195)

___

### stage

• `get` **stage**(): [`Stage`](../README.md#stage)

#### Returns

[`Stage`](../README.md#stage)

#### Inherited from

Layer.stage

#### Defined in

[display/Layer.ts:211](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L211)

___

### ticker

• `get` **ticker**(): [`Ticker`](../README.md#ticker)

#### Returns

[`Ticker`](../README.md#ticker)

#### Overrides

Layer.ticker

#### Defined in

[display/Stage.ts:69](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L69)

___

### viewportBackground

• `get` **viewportBackground**(): `string`

#### Returns

`string`

#### Defined in

[display/Stage.ts:122](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L122)

• `set` **viewportBackground**(`viewportBackground`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewportBackground` | `string` |

#### Returns

`void`

#### Defined in

[display/Stage.ts:126](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L126)

___

### viewportCanvas

• `get` **viewportCanvas**(): `HTMLCanvasElement`

#### Returns

`HTMLCanvasElement`

#### Defined in

[display/Stage.ts:96](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L96)

___

### viewportHeight

• `get` **viewportHeight**(): `number`

#### Returns

`number`

#### Defined in

[display/Stage.ts:111](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L111)

• `set` **viewportHeight**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[display/Stage.ts:115](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L115)

___

### viewportWidth

• `get` **viewportWidth**(): `number`

#### Returns

`number`

#### Defined in

[display/Stage.ts:100](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L100)

• `set` **viewportWidth**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Defined in

[display/Stage.ts:104](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L104)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Layer.visible

#### Defined in

[display/Layer.ts:180](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L180)

• `set` **visible**(`visible`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`void`

#### Inherited from

Layer.visible

#### Defined in

[display/Layer.ts:184](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L184)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

Layer.width

#### Defined in

[display/Layer.ts:70](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L70)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Inherited from

Layer.width

#### Defined in

[display/Layer.ts:74](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L74)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Overrides

Layer.x

#### Defined in

[display/Stage.ts:53](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L53)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

#### Overrides

Layer.x

#### Defined in

[display/Stage.ts:57](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L57)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Overrides

Layer.y

#### Defined in

[display/Stage.ts:61](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L61)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`void`

#### Overrides

Layer.y

#### Defined in

[display/Stage.ts:65](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L65)

## Methods

### $addElementEvent

▸ `Protected` **$addElementEvent**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `EventTarget` |
| `type` | `string` |
| `listener` | (`event`: `any`) => `void` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Defined in

[display/Stage.ts:183](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L183)

___

### $addTouchEventListeners

▸ `Protected` **$addTouchEventListeners**(): `void`

#### Returns

`void`

#### Defined in

[display/Stage.ts:196](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L196)

___

### $calculateRenderBounds

▸ `Protected` **$calculateRenderBounds**(): `void`

#### Returns

`void`

#### Defined in

[display/Stage.ts:275](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L275)

___

### $dispatchTouchEvent

▸ `Protected` **$dispatchTouchEvent**(`type`, `pageX`, `pageY`, `identifier`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `pageX` | `number` |
| `pageY` | `number` |
| `identifier` | `number` |

#### Returns

`void`

#### Defined in

[display/Stage.ts:245](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L245)

___

### $dispatchTouches

▸ `Protected` **$dispatchTouches**(`type`, `event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `event` | `any` |

#### Returns

`void`

#### Defined in

[display/Stage.ts:237](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L237)

___

### $drawChild

▸ `Protected` **$drawChild**(`child`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](../README.md#layer) |

#### Returns

`number`

#### Inherited from

[Layer](../README.md#layer).[$drawChild](../README.md#$drawchild)

#### Defined in

[display/Layer.ts:605](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L605)

___

### $emitAdded

▸ `Protected` **$emitAdded**(`parent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`Layer`](../README.md#layer) |

#### Returns

`void`

#### Inherited from

[Layer](../README.md#layer).[$emitAdded](../README.md#$emitadded)

#### Defined in

[display/Layer.ts:543](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L543)

___

### $emitAddedToStage

▸ `Protected` **$emitAddedToStage**(`stage`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stage` | [`Stage`](../README.md#stage) |

#### Returns

`void`

#### Inherited from

[Layer](../README.md#layer).[$emitAddedToStage](../README.md#$emitaddedtostage)

#### Defined in

[display/Layer.ts:561](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L561)

___

### $emitRemoved

▸ `Protected` **$emitRemoved**(): `void`

#### Returns

`void`

#### Inherited from

[Layer](../README.md#layer).[$emitRemoved](../README.md#$emitremoved)

#### Defined in

[display/Layer.ts:552](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L552)

___

### $emitRemovedFromStage

▸ `Protected` **$emitRemovedFromStage**(): `void`

#### Returns

`void`

#### Inherited from

[Layer](../README.md#layer).[$emitRemovedFromStage](../README.md#$emitremovedfromstage)

#### Defined in

[display/Layer.ts:574](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L574)

___

### $emitTouchEvent

▸ `Protected` **$emitTouchEvent**(`event`, `inside`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`TouchEvent`](../README.md#touchevent) |
| `inside` | `boolean` |

#### Returns

`boolean`

#### Inherited from

[Layer](../README.md#layer).[$emitTouchEvent](../README.md#$emittouchevent)

#### Defined in

[display/Layer.ts:495](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L495)

___

### $getChildBounds

▸ `Protected` **$getChildBounds**(`child`): [`Rectangle`](../README.md#rectangle)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](../README.md#layer) |

#### Returns

[`Rectangle`](../README.md#rectangle)

#### Inherited from

[Layer](../README.md#layer).[$getChildBounds](../README.md#$getchildbounds)

#### Defined in

[display/Layer.ts:449](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L449)

___

### $getChildTransform

▸ `Protected` **$getChildTransform**(`child`): [`Matrix`](../README.md#matrix)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](../README.md#layer) |

#### Returns

[`Matrix`](../README.md#matrix)

#### Inherited from

[Layer](../README.md#layer).[$getChildTransform](../README.md#$getchildtransform)

#### Defined in

[display/Layer.ts:445](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L445)

___

### $getContentBounds

▸ `Protected` **$getContentBounds**(): [`Rectangle`](../README.md#rectangle)

#### Returns

[`Rectangle`](../README.md#rectangle)

#### Inherited from

[Layer](../README.md#layer).[$getContentBounds](../README.md#$getcontentbounds)

#### Defined in

[display/Layer.ts:474](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L474)

___

### $getTransform

▸ `Protected` **$getTransform**(): [`Matrix`](../README.md#matrix)

#### Returns

[`Matrix`](../README.md#matrix)

#### Inherited from

[Layer](../README.md#layer).[$getTransform](../README.md#$gettransform)

#### Defined in

[display/Layer.ts:434](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L434)

___

### $initEvents

▸ `Protected` **$initEvents**(): `void`

#### Returns

`void`

#### Defined in

[display/Stage.ts:151](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L151)

___

### $isChildVisible

▸ `Protected` **$isChildVisible**(`child`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](../README.md#layer) |

#### Returns

`boolean`

#### Inherited from

[Layer](../README.md#layer).[$isChildVisible](../README.md#$ischildvisible)

#### Defined in

[display/Layer.ts:591](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L591)

___

### $localHitTest

▸ `Protected` **$localHitTest**(`vector`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Vector`](../README.md#vector) |

#### Returns

`boolean`

#### Inherited from

[Layer](../README.md#layer).[$localHitTest](../README.md#$localhittest)

#### Defined in

[display/Layer.ts:587](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L587)

___

### $markDirty

▸ `Protected` **$markDirty**(`sizeDirty?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sizeDirty?` | `boolean` |

#### Returns

`void`

#### Inherited from

[Layer](../README.md#layer).[$markDirty](../README.md#$markdirty)

#### Defined in

[display/Layer.ts:389](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L389)

___

### $markParentDirty

▸ `Protected` **$markParentDirty**(): `void`

#### Returns

`void`

#### Inherited from

[Layer](../README.md#layer).[$markParentDirty](../README.md#$markparentdirty)

#### Defined in

[display/Layer.ts:398](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L398)

___

### $removeElementEvents

▸ `Protected` **$removeElementEvents**(): `void`

#### Returns

`void`

#### Defined in

[display/Stage.ts:188](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L188)

___

### $render

▸ `Protected` **$render**(): `number`

#### Returns

`number`

#### Overrides

[Layer](../README.md#layer).[$render](../README.md#$render)

#### Defined in

[display/Stage.ts:367](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L367)

___

### $resizeCanvas

▸ `Protected` **$resizeCanvas**(): `void`

#### Returns

`void`

#### Overrides

[Layer](../README.md#layer).[$resizeCanvas](../README.md#$resizecanvas)

#### Defined in

[display/Stage.ts:344](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L344)

___

### $resizeParentCanvas

▸ `Protected` **$resizeParentCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[Layer](../README.md#layer).[$resizeParentCanvas](../README.md#$resizeparentcanvas)

#### Defined in

[display/Layer.ts:428](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L428)

___

### $resizeViewportCanvas

▸ `Protected` **$resizeViewportCanvas**(): `void`

#### Returns

`void`

#### Defined in

[display/Stage.ts:349](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L349)

___

### addChild

▸ **addChild**(`child`): [`Stage`](../README.md#stage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](../README.md#layer) |

#### Returns

[`Stage`](../README.md#stage)

#### Inherited from

[Layer](../README.md#layer).[addChild](../README.md#addchild)

#### Defined in

[display/Layer.ts:231](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L231)

___

### addChildAt

▸ **addChildAt**(`child`, `index`): [`Stage`](../README.md#stage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](../README.md#layer) |
| `index` | `number` |

#### Returns

[`Stage`](../README.md#stage)

#### Inherited from

[Layer](../README.md#layer).[addChildAt](../README.md#addchildat)

#### Defined in

[display/Layer.ts:235](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L235)

___

### createResourceManager

▸ **createResourceManager**(`list`, `options?`): [`ResourceManager`](../README.md#resourcemanager)

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`ResourceInfo`](../interfaces/ResourceInfo.md)[] |
| `options?` | [`ResourceManagerOption`](../interfaces/ResourceManagerOption.md) |

#### Returns

[`ResourceManager`](../README.md#resourcemanager)

#### Defined in

[display/Stage.ts:131](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L131)

___

### emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../README.md#event) |

#### Returns

`boolean`

#### Inherited from

[Layer](../README.md#layer).[emit](../README.md#emit)

#### Defined in

[event/EventEmitter.ts:42](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L42)

▸ **emit**(`type`, `...args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[Layer](../README.md#layer).[emit](../README.md#emit)

#### Defined in

[event/EventEmitter.ts:43](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L43)

___

### getChildAt

▸ **getChildAt**(`index`): [`Layer`](../README.md#layer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`Layer`](../README.md#layer)

#### Inherited from

[Layer](../README.md#layer).[getChildAt](../README.md#getchildat)

#### Defined in

[display/Layer.ts:277](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L277)

___

### getChildByName

▸ **getChildByName**(`name`): [`Layer`](../README.md#layer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Layer`](../README.md#layer)

#### Inherited from

[Layer](../README.md#layer).[getChildByName](../README.md#getchildbyname)

#### Defined in

[display/Layer.ts:256](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L256)

___

### getChildIndex

▸ **getChildIndex**(`child`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](../README.md#layer) |

#### Returns

`number`

#### Inherited from

[Layer](../README.md#layer).[getChildIndex](../README.md#getchildindex)

#### Defined in

[display/Layer.ts:281](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L281)

___

### getChildrenByTag

▸ **getChildrenByTag**(`tag`): [`Layer`](../README.md#layer)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |

#### Returns

[`Layer`](../README.md#layer)[]

#### Inherited from

[Layer](../README.md#layer).[getChildrenByTag](../README.md#getchildrenbytag)

#### Defined in

[display/Layer.ts:266](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L266)

___

### hasChild

▸ **hasChild**(`child`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](../README.md#layer) |

#### Returns

`boolean`

#### Inherited from

[Layer](../README.md#layer).[hasChild](../README.md#haschild)

#### Defined in

[display/Layer.ts:285](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L285)

___

### hasEventListener

▸ **hasEventListener**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`boolean`

#### Inherited from

[Layer](../README.md#layer).[hasEventListener](../README.md#haseventlistener)

#### Defined in

[event/EventEmitter.ts:80](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L80)

___

### off

▸ **off**(`type`, `listener?`): [`Stage`](../README.md#stage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener?` | (...`args`: `any`[]) => `void` |

#### Returns

[`Stage`](../README.md#stage)

#### Inherited from

[Layer](../README.md#layer).[off](../README.md#off)

#### Defined in

[display/Layer.ts:684](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L684)

___

### on

▸ **on**(`type`, `listener`): [`Stage`](../README.md#stage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Stage`](../README.md#stage)

#### Inherited from

[Layer](../README.md#layer).[on](../README.md#on)

#### Defined in

[display/Layer.ts:668](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L668)

___

### once

▸ **once**(`type`, `listener`): [`Stage`](../README.md#stage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`Listener`](../README.md#listener) |

#### Returns

[`Stage`](../README.md#stage)

#### Inherited from

[Layer](../README.md#layer).[once](../README.md#once)

#### Defined in

[event/EventEmitter.ts:33](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L33)

___

### removeAllChildren

▸ **removeAllChildren**(): [`Stage`](../README.md#stage)

#### Returns

[`Stage`](../README.md#stage)

#### Inherited from

[Layer](../README.md#layer).[removeAllChildren](../README.md#removeallchildren)

#### Defined in

[display/Layer.ts:372](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L372)

___

### removeAllListeners

▸ **removeAllListeners**(): [`Stage`](../README.md#stage)

#### Returns

[`Stage`](../README.md#stage)

#### Inherited from

[Layer](../README.md#layer).[removeAllListeners](../README.md#removealllisteners)

#### Defined in

[event/EventEmitter.ts:85](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L85)

___

### removeChild

▸ **removeChild**(`child`): [`Stage`](../README.md#stage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](../README.md#layer) |

#### Returns

[`Stage`](../README.md#stage)

#### Inherited from

[Layer](../README.md#layer).[removeChild](../README.md#removechild)

#### Defined in

[display/Layer.ts:333](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L333)

___

### removeChildAt

▸ **removeChildAt**(`index`): [`Stage`](../README.md#stage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`Stage`](../README.md#stage)

#### Inherited from

[Layer](../README.md#layer).[removeChildAt](../README.md#removechildat)

#### Defined in

[display/Layer.ts:338](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L338)

___

### removeChildByName

▸ **removeChildByName**(`name`): [`Stage`](../README.md#stage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Stage`](../README.md#stage)

#### Inherited from

[Layer](../README.md#layer).[removeChildByName](../README.md#removechildbyname)

#### Defined in

[display/Layer.ts:349](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L349)

___

### removeChildrenByTag

▸ **removeChildrenByTag**(`tag`): [`Stage`](../README.md#stage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |

#### Returns

[`Stage`](../README.md#stage)

#### Inherited from

[Layer](../README.md#layer).[removeChildrenByTag](../README.md#removechildrenbytag)

#### Defined in

[display/Layer.ts:361](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L361)

___

### removeSelf

▸ **removeSelf**(): [`Stage`](../README.md#stage)

#### Returns

[`Stage`](../README.md#stage)

#### Overrides

[Layer](../README.md#layer).[removeSelf](../README.md#removeself)

#### Defined in

[display/Stage.ts:135](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Stage.ts#L135)

___

### replaceChild

▸ **replaceChild**(`oldChild`, `newChild`): [`Stage`](../README.md#stage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldChild` | [`Layer`](../README.md#layer) |
| `newChild` | [`Layer`](../README.md#layer) |

#### Returns

[`Stage`](../README.md#stage)

#### Inherited from

[Layer](../README.md#layer).[replaceChild](../README.md#replacechild)

#### Defined in

[display/Layer.ts:249](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L249)

___

### setChildIndex

▸ **setChildIndex**(`child`, `index`): [`Stage`](../README.md#stage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](../README.md#layer) |
| `index` | `number` |

#### Returns

[`Stage`](../README.md#stage)

#### Inherited from

[Layer](../README.md#layer).[setChildIndex](../README.md#setchildindex)

#### Defined in

[display/Layer.ts:309](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L309)

___

### swapChildren

▸ **swapChildren**(`child1`, `child2`): [`Stage`](../README.md#stage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child1` | [`Layer`](../README.md#layer) |
| `child2` | [`Layer`](../README.md#layer) |

#### Returns

[`Stage`](../README.md#stage)

#### Inherited from

[Layer](../README.md#layer).[swapChildren](../README.md#swapchildren)

#### Defined in

[display/Layer.ts:289](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L289)

___

### swapChildrenAt

▸ **swapChildrenAt**(`index1`, `index2`): [`Stage`](../README.md#stage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index1` | `number` |
| `index2` | `number` |

#### Returns

[`Stage`](../README.md#stage)

#### Inherited from

[Layer](../README.md#layer).[swapChildrenAt](../README.md#swapchildrenat)

#### Defined in

[display/Layer.ts:298](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L298)
