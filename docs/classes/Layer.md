[API Reference](../README.md) / Layer

# Class: Layer

## Hierarchy

- [`EventEmitter`](../README.md#eventemitter)

  ↳ **`Layer`**

## Table of contents

### Constructors

- [constructor](Layer.md#constructor)

### Properties

- [$alpha](Layer.md#$alpha)
- [$anchorX](Layer.md#$anchorx)
- [$anchorY](Layer.md#$anchory)
- [$background](Layer.md#$background)
- [$canvas](Layer.md#$canvas)
- [$children](Layer.md#$children)
- [$context](Layer.md#$context)
- [$dirty](Layer.md#$dirty)
- [$emittingType](Layer.md#$emittingtype)
- [$events](Layer.md#$events)
- [$height](Layer.md#$height)
- [$parent](Layer.md#$parent)
- [$removedListeners](Layer.md#$removedlisteners)
- [$rotation](Layer.md#$rotation)
- [$scaleX](Layer.md#$scalex)
- [$scaleY](Layer.md#$scaley)
- [$shouldEmitTap](Layer.md#$shouldemittap)
- [$skewX](Layer.md#$skewx)
- [$skewY](Layer.md#$skewy)
- [$smoothing](Layer.md#$smoothing)
- [$stage](Layer.md#$stage)
- [$touches](Layer.md#$touches)
- [$visible](Layer.md#$visible)
- [$width](Layer.md#$width)
- [$x](Layer.md#$x)
- [$y](Layer.md#$y)
- [name](Layer.md#name)
- [tag](Layer.md#tag)
- [touchable](Layer.md#touchable)
- [pixelRatio](Layer.md#pixelratio)

### Accessors

- [alpha](Layer.md#alpha)
- [anchorX](Layer.md#anchorx)
- [anchorY](Layer.md#anchory)
- [background](Layer.md#background)
- [canvas](Layer.md#canvas)
- [height](Layer.md#height)
- [numChildren](Layer.md#numchildren)
- [parent](Layer.md#parent)
- [rotation](Layer.md#rotation)
- [scaleX](Layer.md#scalex)
- [scaleY](Layer.md#scaley)
- [skewX](Layer.md#skewx)
- [skewY](Layer.md#skewy)
- [smoothing](Layer.md#smoothing)
- [stage](Layer.md#stage)
- [ticker](Layer.md#ticker)
- [visible](Layer.md#visible)
- [width](Layer.md#width)
- [x](Layer.md#x)
- [y](Layer.md#y)

### Methods

- [$drawChild](Layer.md#$drawchild)
- [$emitAdded](Layer.md#$emitadded)
- [$emitAddedToStage](Layer.md#$emitaddedtostage)
- [$emitRemoved](Layer.md#$emitremoved)
- [$emitRemovedFromStage](Layer.md#$emitremovedfromstage)
- [$emitTouchEvent](Layer.md#$emittouchevent)
- [$getChildBounds](Layer.md#$getchildbounds)
- [$getChildTransform](Layer.md#$getchildtransform)
- [$getContentBounds](Layer.md#$getcontentbounds)
- [$getTransform](Layer.md#$gettransform)
- [$isChildVisible](Layer.md#$ischildvisible)
- [$localHitTest](Layer.md#$localhittest)
- [$markDirty](Layer.md#$markdirty)
- [$markParentDirty](Layer.md#$markparentdirty)
- [$render](Layer.md#$render)
- [$resizeCanvas](Layer.md#$resizecanvas)
- [$resizeParentCanvas](Layer.md#$resizeparentcanvas)
- [addChild](Layer.md#addchild)
- [addChildAt](Layer.md#addchildat)
- [emit](Layer.md#emit)
- [getChildAt](Layer.md#getchildat)
- [getChildByName](Layer.md#getchildbyname)
- [getChildIndex](Layer.md#getchildindex)
- [getChildrenByTag](Layer.md#getchildrenbytag)
- [hasChild](Layer.md#haschild)
- [hasEventListener](Layer.md#haseventlistener)
- [off](Layer.md#off)
- [on](Layer.md#on)
- [once](Layer.md#once)
- [removeAllChildren](Layer.md#removeallchildren)
- [removeAllListeners](Layer.md#removealllisteners)
- [removeChild](Layer.md#removechild)
- [removeChildAt](Layer.md#removechildat)
- [removeChildByName](Layer.md#removechildbyname)
- [removeChildrenByTag](Layer.md#removechildrenbytag)
- [removeSelf](Layer.md#removeself)
- [replaceChild](Layer.md#replacechild)
- [setChildIndex](Layer.md#setchildindex)
- [swapChildren](Layer.md#swapchildren)
- [swapChildrenAt](Layer.md#swapchildrenat)

## Constructors

### constructor

• **new Layer**()

#### Overrides

[EventEmitter](../README.md#eventemitter).[constructor](../README.md#constructor)

#### Defined in

[display/Layer.ts:42](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L42)

## Properties

### $alpha

• `Protected` **$alpha**: `number` = `1`

#### Defined in

[display/Layer.ts:29](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L29)

___

### $anchorX

• `Protected` **$anchorX**: `number` = `0`

#### Defined in

[display/Layer.ts:22](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L22)

___

### $anchorY

• `Protected` **$anchorY**: `number` = `0`

#### Defined in

[display/Layer.ts:23](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L23)

___

### $background

• `Protected` **$background**: `string` = `null`

#### Defined in

[display/Layer.ts:32](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L32)

___

### $canvas

• `Protected` `Readonly` **$canvas**: `HTMLCanvasElement`

#### Defined in

[display/Layer.ts:39](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L39)

___

### $children

• `Protected` **$children**: [`Layer`](../README.md#layer)[] = `[]`

#### Defined in

[display/Layer.ts:35](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L35)

___

### $context

• `Protected` `Readonly` **$context**: `CanvasRenderingContext2D`

#### Defined in

[display/Layer.ts:40](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L40)

___

### $dirty

• `Protected` **$dirty**: `boolean` = `true`

#### Defined in

[display/Layer.ts:36](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L36)

___

### $emittingType

• `Protected` **$emittingType**: `string` = `null`

#### Inherited from

[EventEmitter](../README.md#eventemitter).[$emittingType](../README.md#$emittingtype)

#### Defined in

[event/EventEmitter.ts:6](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L6)

___

### $events

• `Protected` **$events**: `Object` = `{}`

#### Inherited from

[EventEmitter](../README.md#eventemitter).[$events](../README.md#$events)

#### Defined in

[event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L5)

___

### $height

• `Protected` **$height**: `number` = `0`

#### Defined in

[display/Layer.ts:21](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L21)

___

### $parent

• `Protected` **$parent**: [`Layer`](../README.md#layer) = `null`

#### Defined in

[display/Layer.ts:34](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L34)

___

### $removedListeners

• `Protected` **$removedListeners**: [`Listener`](../README.md#listener)[] = `[]`

#### Inherited from

[EventEmitter](../README.md#eventemitter).[$removedListeners](../README.md#$removedlisteners)

#### Defined in

[event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L7)

___

### $rotation

• `Protected` **$rotation**: `number` = `0`

#### Defined in

[display/Layer.ts:28](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L28)

___

### $scaleX

• `Protected` **$scaleX**: `number` = `1`

#### Defined in

[display/Layer.ts:26](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L26)

___

### $scaleY

• `Protected` **$scaleY**: `number` = `1`

#### Defined in

[display/Layer.ts:27](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L27)

___

### $shouldEmitTap

• `Protected` **$shouldEmitTap**: `boolean` = `true`

#### Defined in

[display/Layer.ts:37](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L37)

___

### $skewX

• `Protected` **$skewX**: `number` = `0`

#### Defined in

[display/Layer.ts:24](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L24)

___

### $skewY

• `Protected` **$skewY**: `number` = `0`

#### Defined in

[display/Layer.ts:25](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L25)

___

### $smoothing

• `Protected` **$smoothing**: `boolean` = `true`

#### Defined in

[display/Layer.ts:31](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L31)

___

### $stage

• `Protected` **$stage**: [`Stage`](../README.md#stage) = `null`

#### Defined in

[display/Layer.ts:33](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L33)

___

### $touches

• `Protected` **$touches**: `boolean`[] = `[]`

#### Defined in

[display/Layer.ts:38](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L38)

___

### $visible

• `Protected` **$visible**: `boolean` = `true`

#### Defined in

[display/Layer.ts:30](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L30)

___

### $width

• `Protected` **$width**: `number` = `0`

#### Defined in

[display/Layer.ts:20](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L20)

___

### $x

• `Protected` **$x**: `number` = `0`

#### Defined in

[display/Layer.ts:18](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L18)

___

### $y

• `Protected` **$y**: `number` = `0`

#### Defined in

[display/Layer.ts:19](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L19)

___

### name

• **name**: `string` = `''`

#### Defined in

[display/Layer.ts:14](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L14)

___

### tag

• **tag**: `string` = `''`

#### Defined in

[display/Layer.ts:15](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L15)

___

### touchable

• **touchable**: `boolean` = `true`

#### Defined in

[display/Layer.ts:16](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L16)

___

### pixelRatio

▪ `Static` **pixelRatio**: `number`

#### Defined in

[display/Layer.ts:12](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L12)

## Accessors

### alpha

• `get` **alpha**(): `number`

#### Returns

`number`

#### Defined in

[display/Layer.ts:169](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L169)

• `set` **alpha**(`alpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `alpha` | `number` |

#### Returns

`void`

#### Defined in

[display/Layer.ts:173](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L173)

___

### anchorX

• `get` **anchorX**(): `number`

#### Returns

`number`

#### Defined in

[display/Layer.ts:92](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L92)

• `set` **anchorX**(`anchorX`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anchorX` | `number` |

#### Returns

`void`

#### Defined in

[display/Layer.ts:96](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L96)

___

### anchorY

• `get` **anchorY**(): `number`

#### Returns

`number`

#### Defined in

[display/Layer.ts:103](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L103)

• `set` **anchorY**(`anchorY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anchorY` | `number` |

#### Returns

`void`

#### Defined in

[display/Layer.ts:107](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L107)

___

### background

• `get` **background**(): `string`

#### Returns

`string`

#### Defined in

[display/Layer.ts:200](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L200)

• `set` **background**(`background`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `background` | `string` |

#### Returns

`void`

#### Defined in

[display/Layer.ts:204](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L204)

___

### canvas

• `get` **canvas**(): `HTMLCanvasElement`

#### Returns

`HTMLCanvasElement`

#### Defined in

[display/Layer.ts:227](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L227)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[display/Layer.ts:81](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L81)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[display/Layer.ts:85](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L85)

___

### numChildren

• `get` **numChildren**(): `number`

#### Returns

`number`

#### Defined in

[display/Layer.ts:219](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L219)

___

### parent

• `get` **parent**(): [`Layer`](../README.md#layer)

#### Returns

[`Layer`](../README.md#layer)

#### Defined in

[display/Layer.ts:215](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L215)

___

### rotation

• `get` **rotation**(): `number`

#### Returns

`number`

#### Defined in

[display/Layer.ts:158](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L158)

• `set` **rotation**(`rotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rotation` | `number` |

#### Returns

`void`

#### Defined in

[display/Layer.ts:162](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L162)

___

### scaleX

• `get` **scaleX**(): `number`

#### Returns

`number`

#### Defined in

[display/Layer.ts:136](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L136)

• `set` **scaleX**(`scaleX`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleX` | `number` |

#### Returns

`void`

#### Defined in

[display/Layer.ts:140](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L140)

___

### scaleY

• `get` **scaleY**(): `number`

#### Returns

`number`

#### Defined in

[display/Layer.ts:147](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L147)

• `set` **scaleY**(`scaleY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleY` | `number` |

#### Returns

`void`

#### Defined in

[display/Layer.ts:151](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L151)

___

### skewX

• `get` **skewX**(): `number`

#### Returns

`number`

#### Defined in

[display/Layer.ts:114](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L114)

• `set` **skewX**(`skewX`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skewX` | `number` |

#### Returns

`void`

#### Defined in

[display/Layer.ts:118](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L118)

___

### skewY

• `get` **skewY**(): `number`

#### Returns

`number`

#### Defined in

[display/Layer.ts:125](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L125)

• `set` **skewY**(`skewY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skewY` | `number` |

#### Returns

`void`

#### Defined in

[display/Layer.ts:129](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L129)

___

### smoothing

• `get` **smoothing**(): `boolean`

#### Returns

`boolean`

#### Defined in

[display/Layer.ts:191](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L191)

• `set` **smoothing**(`smoothing`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `smoothing` | `boolean` |

#### Returns

`void`

#### Defined in

[display/Layer.ts:195](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L195)

___

### stage

• `get` **stage**(): [`Stage`](../README.md#stage)

#### Returns

[`Stage`](../README.md#stage)

#### Defined in

[display/Layer.ts:211](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L211)

___

### ticker

• `get` **ticker**(): [`Ticker`](../README.md#ticker)

#### Returns

[`Ticker`](../README.md#ticker)

#### Defined in

[display/Layer.ts:223](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L223)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[display/Layer.ts:180](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L180)

• `set` **visible**(`visible`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`void`

#### Defined in

[display/Layer.ts:184](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L184)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[display/Layer.ts:70](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L70)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Defined in

[display/Layer.ts:74](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L74)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Defined in

[display/Layer.ts:48](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L48)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

#### Defined in

[display/Layer.ts:52](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L52)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Defined in

[display/Layer.ts:59](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L59)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[display/Layer.ts:63](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L63)

## Methods

### $drawChild

▸ `Protected` **$drawChild**(`child`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](../README.md#layer) |

#### Returns

`number`

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

#### Defined in

[display/Layer.ts:561](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L561)

___

### $emitRemoved

▸ `Protected` **$emitRemoved**(): `void`

#### Returns

`void`

#### Defined in

[display/Layer.ts:552](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L552)

___

### $emitRemovedFromStage

▸ `Protected` **$emitRemovedFromStage**(): `void`

#### Returns

`void`

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

#### Defined in

[display/Layer.ts:445](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L445)

___

### $getContentBounds

▸ `Protected` **$getContentBounds**(): [`Rectangle`](../README.md#rectangle)

#### Returns

[`Rectangle`](../README.md#rectangle)

#### Defined in

[display/Layer.ts:474](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L474)

___

### $getTransform

▸ `Protected` **$getTransform**(): [`Matrix`](../README.md#matrix)

#### Returns

[`Matrix`](../README.md#matrix)

#### Defined in

[display/Layer.ts:434](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L434)

___

### $isChildVisible

▸ `Protected` **$isChildVisible**(`child`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](../README.md#layer) |

#### Returns

`boolean`

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

#### Defined in

[display/Layer.ts:389](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L389)

___

### $markParentDirty

▸ `Protected` **$markParentDirty**(): `void`

#### Returns

`void`

#### Defined in

[display/Layer.ts:398](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L398)

___

### $render

▸ `Protected` **$render**(): `number`

#### Returns

`number`

#### Defined in

[display/Layer.ts:636](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L636)

___

### $resizeCanvas

▸ `Protected` **$resizeCanvas**(): `void`

#### Returns

`void`

#### Defined in

[display/Layer.ts:404](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L404)

___

### $resizeParentCanvas

▸ `Protected` **$resizeParentCanvas**(): `void`

#### Returns

`void`

#### Defined in

[display/Layer.ts:428](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L428)

___

### addChild

▸ **addChild**(`child`): [`Layer`](../README.md#layer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](../README.md#layer) |

#### Returns

[`Layer`](../README.md#layer)

#### Defined in

[display/Layer.ts:231](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L231)

___

### addChildAt

▸ **addChildAt**(`child`, `index`): [`Layer`](../README.md#layer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](../README.md#layer) |
| `index` | `number` |

#### Returns

[`Layer`](../README.md#layer)

#### Defined in

[display/Layer.ts:235](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L235)

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

[EventEmitter](../README.md#eventemitter).[emit](../README.md#emit)

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

[EventEmitter](../README.md#eventemitter).[emit](../README.md#emit)

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

[EventEmitter](../README.md#eventemitter).[hasEventListener](../README.md#haseventlistener)

#### Defined in

[event/EventEmitter.ts:80](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L80)

___

### off

▸ **off**(`type`, `listener?`): [`Layer`](../README.md#layer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener?` | (...`args`: `any`[]) => `void` |

#### Returns

[`Layer`](../README.md#layer)

#### Overrides

[EventEmitter](../README.md#eventemitter).[off](../README.md#off)

#### Defined in

[display/Layer.ts:684](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L684)

___

### on

▸ **on**(`type`, `listener`): [`Layer`](../README.md#layer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Layer`](../README.md#layer)

#### Overrides

[EventEmitter](../README.md#eventemitter).[on](../README.md#on)

#### Defined in

[display/Layer.ts:668](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L668)

___

### once

▸ **once**(`type`, `listener`): [`Layer`](../README.md#layer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`Listener`](../README.md#listener) |

#### Returns

[`Layer`](../README.md#layer)

#### Inherited from

[EventEmitter](../README.md#eventemitter).[once](../README.md#once)

#### Defined in

[event/EventEmitter.ts:33](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L33)

___

### removeAllChildren

▸ **removeAllChildren**(): [`Layer`](../README.md#layer)

#### Returns

[`Layer`](../README.md#layer)

#### Defined in

[display/Layer.ts:372](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L372)

___

### removeAllListeners

▸ **removeAllListeners**(): [`Layer`](../README.md#layer)

#### Returns

[`Layer`](../README.md#layer)

#### Inherited from

[EventEmitter](../README.md#eventemitter).[removeAllListeners](../README.md#removealllisteners)

#### Defined in

[event/EventEmitter.ts:85](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L85)

___

### removeChild

▸ **removeChild**(`child`): [`Layer`](../README.md#layer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](../README.md#layer) |

#### Returns

[`Layer`](../README.md#layer)

#### Defined in

[display/Layer.ts:333](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L333)

___

### removeChildAt

▸ **removeChildAt**(`index`): [`Layer`](../README.md#layer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`Layer`](../README.md#layer)

#### Defined in

[display/Layer.ts:338](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L338)

___

### removeChildByName

▸ **removeChildByName**(`name`): [`Layer`](../README.md#layer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Layer`](../README.md#layer)

#### Defined in

[display/Layer.ts:349](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L349)

___

### removeChildrenByTag

▸ **removeChildrenByTag**(`tag`): [`Layer`](../README.md#layer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |

#### Returns

[`Layer`](../README.md#layer)

#### Defined in

[display/Layer.ts:361](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L361)

___

### removeSelf

▸ **removeSelf**(): [`Layer`](../README.md#layer)

#### Returns

[`Layer`](../README.md#layer)

#### Defined in

[display/Layer.ts:382](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L382)

___

### replaceChild

▸ **replaceChild**(`oldChild`, `newChild`): [`Layer`](../README.md#layer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldChild` | [`Layer`](../README.md#layer) |
| `newChild` | [`Layer`](../README.md#layer) |

#### Returns

[`Layer`](../README.md#layer)

#### Defined in

[display/Layer.ts:249](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L249)

___

### setChildIndex

▸ **setChildIndex**(`child`, `index`): [`Layer`](../README.md#layer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](../README.md#layer) |
| `index` | `number` |

#### Returns

[`Layer`](../README.md#layer)

#### Defined in

[display/Layer.ts:309](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L309)

___

### swapChildren

▸ **swapChildren**(`child1`, `child2`): [`Layer`](../README.md#layer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child1` | [`Layer`](../README.md#layer) |
| `child2` | [`Layer`](../README.md#layer) |

#### Returns

[`Layer`](../README.md#layer)

#### Defined in

[display/Layer.ts:289](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L289)

___

### swapChildrenAt

▸ **swapChildrenAt**(`index1`, `index2`): [`Layer`](../README.md#layer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index1` | `number` |
| `index2` | `number` |

#### Returns

[`Layer`](../README.md#layer)

#### Defined in

[display/Layer.ts:298](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L298)
