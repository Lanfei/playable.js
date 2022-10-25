[API Reference](../README.md) / Scroller

# Class: Scroller

## Hierarchy

- [`Layer`](Layer.md)

  ↳ **`Scroller`**

## Table of contents

### Constructors

- [constructor](Scroller.md#constructor)

### Properties

- [$alpha](Scroller.md#$alpha)
- [$anchorX](Scroller.md#$anchorx)
- [$anchorY](Scroller.md#$anchory)
- [$background](Scroller.md#$background)
- [$canvas](Scroller.md#$canvas)
- [$children](Scroller.md#$children)
- [$context](Scroller.md#$context)
- [$dirty](Scroller.md#$dirty)
- [$emittingType](Scroller.md#$emittingtype)
- [$events](Scroller.md#$events)
- [$height](Scroller.md#$height)
- [$inertiaTween](Scroller.md#$inertiatween)
- [$parent](Scroller.md#$parent)
- [$removedListeners](Scroller.md#$removedlisteners)
- [$rotation](Scroller.md#$rotation)
- [$scaleX](Scroller.md#$scalex)
- [$scaleY](Scroller.md#$scaley)
- [$scrollHeight](Scroller.md#$scrollheight)
- [$scrollLeft](Scroller.md#$scrollleft)
- [$scrollTop](Scroller.md#$scrolltop)
- [$scrollWidth](Scroller.md#$scrollwidth)
- [$shouldEmitTap](Scroller.md#$shouldemittap)
- [$skewX](Scroller.md#$skewx)
- [$skewY](Scroller.md#$skewy)
- [$smoothing](Scroller.md#$smoothing)
- [$stage](Scroller.md#$stage)
- [$touches](Scroller.md#$touches)
- [$touchingId](Scroller.md#$touchingid)
- [$touchingTime](Scroller.md#$touchingtime)
- [$touchingX](Scroller.md#$touchingx)
- [$touchingY](Scroller.md#$touchingy)
- [$velocitiesX](Scroller.md#$velocitiesx)
- [$velocitiesY](Scroller.md#$velocitiesy)
- [$visible](Scroller.md#$visible)
- [$width](Scroller.md#$width)
- [$x](Scroller.md#$x)
- [$y](Scroller.md#$y)
- [name](Scroller.md#name)
- [tag](Scroller.md#tag)
- [touchable](Scroller.md#touchable)
- [pixelRatio](Scroller.md#pixelratio)
- [scrollingView](Scroller.md#scrollingview)

### Accessors

- [alpha](Scroller.md#alpha)
- [anchorX](Scroller.md#anchorx)
- [anchorY](Scroller.md#anchory)
- [background](Scroller.md#background)
- [canvas](Scroller.md#canvas)
- [height](Scroller.md#height)
- [numChildren](Scroller.md#numchildren)
- [parent](Scroller.md#parent)
- [rotation](Scroller.md#rotation)
- [scaleX](Scroller.md#scalex)
- [scaleY](Scroller.md#scaley)
- [scrollHeight](Scroller.md#scrollheight)
- [scrollLeft](Scroller.md#scrollleft)
- [scrollTop](Scroller.md#scrolltop)
- [scrollWidth](Scroller.md#scrollwidth)
- [skewX](Scroller.md#skewx)
- [skewY](Scroller.md#skewy)
- [smoothing](Scroller.md#smoothing)
- [stage](Scroller.md#stage)
- [ticker](Scroller.md#ticker)
- [visible](Scroller.md#visible)
- [width](Scroller.md#width)
- [x](Scroller.md#x)
- [y](Scroller.md#y)

### Methods

- [$drawChild](Scroller.md#$drawchild)
- [$emitAdded](Scroller.md#$emitadded)
- [$emitAddedToStage](Scroller.md#$emitaddedtostage)
- [$emitRemoved](Scroller.md#$emitremoved)
- [$emitRemovedFromStage](Scroller.md#$emitremovedfromstage)
- [$emitTouchEvent](Scroller.md#$emittouchevent)
- [$getChildBounds](Scroller.md#$getchildbounds)
- [$getChildTransform](Scroller.md#$getchildtransform)
- [$getContentBounds](Scroller.md#$getcontentbounds)
- [$getTransform](Scroller.md#$gettransform)
- [$isChildVisible](Scroller.md#$ischildvisible)
- [$localHitTest](Scroller.md#$localhittest)
- [$markDirty](Scroller.md#$markdirty)
- [$markParentDirty](Scroller.md#$markparentdirty)
- [$onTouchCancel](Scroller.md#$ontouchcancel)
- [$onTouchEnd](Scroller.md#$ontouchend)
- [$onTouchMove](Scroller.md#$ontouchmove)
- [$onTouchStart](Scroller.md#$ontouchstart)
- [$render](Scroller.md#$render)
- [$resizeCanvas](Scroller.md#$resizecanvas)
- [$resizeParentCanvas](Scroller.md#$resizeparentcanvas)
- [addChild](Scroller.md#addchild)
- [addChildAt](Scroller.md#addchildat)
- [emit](Scroller.md#emit)
- [getChildAt](Scroller.md#getchildat)
- [getChildByName](Scroller.md#getchildbyname)
- [getChildIndex](Scroller.md#getchildindex)
- [getChildrenByTag](Scroller.md#getchildrenbytag)
- [hasChild](Scroller.md#haschild)
- [hasEventListener](Scroller.md#haseventlistener)
- [off](Scroller.md#off)
- [on](Scroller.md#on)
- [once](Scroller.md#once)
- [removeAllChildren](Scroller.md#removeallchildren)
- [removeAllListeners](Scroller.md#removealllisteners)
- [removeChild](Scroller.md#removechild)
- [removeChildAt](Scroller.md#removechildat)
- [removeChildByName](Scroller.md#removechildbyname)
- [removeChildrenByTag](Scroller.md#removechildrenbytag)
- [removeSelf](Scroller.md#removeself)
- [replaceChild](Scroller.md#replacechild)
- [setChildIndex](Scroller.md#setchildindex)
- [swapChildren](Scroller.md#swapchildren)
- [swapChildrenAt](Scroller.md#swapchildrenat)

## Constructors

### constructor

• **new Scroller**()

#### Overrides

[Layer](Layer.md).[constructor](Layer.md#constructor)

#### Defined in

[display/Scroller.ts:23](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L23)

## Properties

### $alpha

• `Protected` **$alpha**: `number` = `1`

#### Inherited from

[Layer](Layer.md).[$alpha](Layer.md#$alpha)

#### Defined in

[display/Layer.ts:29](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L29)

___

### $anchorX

• `Protected` **$anchorX**: `number` = `0`

#### Inherited from

[Layer](Layer.md).[$anchorX](Layer.md#$anchorx)

#### Defined in

[display/Layer.ts:22](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L22)

___

### $anchorY

• `Protected` **$anchorY**: `number` = `0`

#### Inherited from

[Layer](Layer.md).[$anchorY](Layer.md#$anchory)

#### Defined in

[display/Layer.ts:23](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L23)

___

### $background

• `Protected` **$background**: `string` = `null`

#### Inherited from

[Layer](Layer.md).[$background](Layer.md#$background)

#### Defined in

[display/Layer.ts:32](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L32)

___

### $canvas

• `Protected` `Readonly` **$canvas**: `HTMLCanvasElement`

#### Inherited from

[Layer](Layer.md).[$canvas](Layer.md#$canvas)

#### Defined in

[display/Layer.ts:39](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L39)

___

### $children

• `Protected` **$children**: [`Layer`](Layer.md)[] = `[]`

#### Inherited from

[Layer](Layer.md).[$children](Layer.md#$children)

#### Defined in

[display/Layer.ts:35](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L35)

___

### $context

• `Protected` `Readonly` **$context**: `CanvasRenderingContext2D`

#### Inherited from

[Layer](Layer.md).[$context](Layer.md#$context)

#### Defined in

[display/Layer.ts:40](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L40)

___

### $dirty

• `Protected` **$dirty**: `boolean` = `true`

#### Inherited from

[Layer](Layer.md).[$dirty](Layer.md#$dirty)

#### Defined in

[display/Layer.ts:36](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L36)

___

### $emittingType

• `Protected` **$emittingType**: `string` = `null`

#### Inherited from

[Layer](Layer.md).[$emittingType](Layer.md#$emittingtype)

#### Defined in

[event/EventEmitter.ts:6](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L6)

___

### $events

• `Protected` **$events**: `Object` = `{}`

#### Inherited from

[Layer](Layer.md).[$events](Layer.md#$events)

#### Defined in

[event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L5)

___

### $height

• `Protected` **$height**: `number` = `0`

#### Inherited from

[Layer](Layer.md).[$height](Layer.md#$height)

#### Defined in

[display/Layer.ts:21](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L21)

___

### $inertiaTween

• `Protected` **$inertiaTween**: [`Tween`](Tween.md) = `null`

#### Defined in

[display/Scroller.ts:21](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L21)

___

### $parent

• `Protected` **$parent**: [`Layer`](Layer.md) = `null`

#### Inherited from

[Layer](Layer.md).[$parent](Layer.md#$parent)

#### Defined in

[display/Layer.ts:34](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L34)

___

### $removedListeners

• `Protected` **$removedListeners**: [`Listener`](../README.md#listener)[] = `[]`

#### Inherited from

[Layer](Layer.md).[$removedListeners](Layer.md#$removedlisteners)

#### Defined in

[event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L7)

___

### $rotation

• `Protected` **$rotation**: `number` = `0`

#### Inherited from

[Layer](Layer.md).[$rotation](Layer.md#$rotation)

#### Defined in

[display/Layer.ts:28](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L28)

___

### $scaleX

• `Protected` **$scaleX**: `number` = `1`

#### Inherited from

[Layer](Layer.md).[$scaleX](Layer.md#$scalex)

#### Defined in

[display/Layer.ts:26](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L26)

___

### $scaleY

• `Protected` **$scaleY**: `number` = `1`

#### Inherited from

[Layer](Layer.md).[$scaleY](Layer.md#$scaley)

#### Defined in

[display/Layer.ts:27](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L27)

___

### $scrollHeight

• `Protected` **$scrollHeight**: `number` = `0`

#### Defined in

[display/Scroller.ts:14](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L14)

___

### $scrollLeft

• `Protected` **$scrollLeft**: `number` = `0`

#### Defined in

[display/Scroller.ts:12](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L12)

___

### $scrollTop

• `Protected` **$scrollTop**: `number` = `0`

#### Defined in

[display/Scroller.ts:11](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L11)

___

### $scrollWidth

• `Protected` **$scrollWidth**: `number` = `0`

#### Defined in

[display/Scroller.ts:13](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L13)

___

### $shouldEmitTap

• `Protected` **$shouldEmitTap**: `boolean` = `true`

#### Inherited from

[Layer](Layer.md).[$shouldEmitTap](Layer.md#$shouldemittap)

#### Defined in

[display/Layer.ts:37](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L37)

___

### $skewX

• `Protected` **$skewX**: `number` = `0`

#### Inherited from

[Layer](Layer.md).[$skewX](Layer.md#$skewx)

#### Defined in

[display/Layer.ts:24](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L24)

___

### $skewY

• `Protected` **$skewY**: `number` = `0`

#### Inherited from

[Layer](Layer.md).[$skewY](Layer.md#$skewy)

#### Defined in

[display/Layer.ts:25](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L25)

___

### $smoothing

• `Protected` **$smoothing**: `boolean` = `true`

#### Inherited from

[Layer](Layer.md).[$smoothing](Layer.md#$smoothing)

#### Defined in

[display/Layer.ts:31](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L31)

___

### $stage

• `Protected` **$stage**: [`Stage`](Stage.md) = `null`

#### Inherited from

[Layer](Layer.md).[$stage](Layer.md#$stage)

#### Defined in

[display/Layer.ts:33](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L33)

___

### $touches

• `Protected` **$touches**: `boolean`[] = `[]`

#### Inherited from

[Layer](Layer.md).[$touches](Layer.md#$touches)

#### Defined in

[display/Layer.ts:38](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L38)

___

### $touchingId

• `Protected` **$touchingId**: `number` = `null`

#### Defined in

[display/Scroller.ts:17](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L17)

___

### $touchingTime

• `Protected` **$touchingTime**: `number` = `null`

#### Defined in

[display/Scroller.ts:18](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L18)

___

### $touchingX

• `Protected` **$touchingX**: `number` = `null`

#### Defined in

[display/Scroller.ts:15](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L15)

___

### $touchingY

• `Protected` **$touchingY**: `number` = `null`

#### Defined in

[display/Scroller.ts:16](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L16)

___

### $velocitiesX

• `Protected` **$velocitiesX**: `number`[] = `[]`

#### Defined in

[display/Scroller.ts:19](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L19)

___

### $velocitiesY

• `Protected` **$velocitiesY**: `number`[] = `[]`

#### Defined in

[display/Scroller.ts:20](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L20)

___

### $visible

• `Protected` **$visible**: `boolean` = `true`

#### Inherited from

[Layer](Layer.md).[$visible](Layer.md#$visible)

#### Defined in

[display/Layer.ts:30](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L30)

___

### $width

• `Protected` **$width**: `number` = `0`

#### Inherited from

[Layer](Layer.md).[$width](Layer.md#$width)

#### Defined in

[display/Layer.ts:20](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L20)

___

### $x

• `Protected` **$x**: `number` = `0`

#### Inherited from

[Layer](Layer.md).[$x](Layer.md#$x)

#### Defined in

[display/Layer.ts:18](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L18)

___

### $y

• `Protected` **$y**: `number` = `0`

#### Inherited from

[Layer](Layer.md).[$y](Layer.md#$y)

#### Defined in

[display/Layer.ts:19](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L19)

___

### name

• **name**: `string` = `''`

#### Inherited from

[Layer](Layer.md).[name](Layer.md#name)

#### Defined in

[display/Layer.ts:14](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L14)

___

### tag

• **tag**: `string` = `''`

#### Inherited from

[Layer](Layer.md).[tag](Layer.md#tag)

#### Defined in

[display/Layer.ts:15](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L15)

___

### touchable

• **touchable**: `boolean` = `true`

#### Inherited from

[Layer](Layer.md).[touchable](Layer.md#touchable)

#### Defined in

[display/Layer.ts:16](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L16)

___

### pixelRatio

▪ `Static` **pixelRatio**: `number`

#### Inherited from

[Layer](Layer.md).[pixelRatio](Layer.md#pixelratio)

#### Defined in

[display/Layer.ts:12](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L12)

___

### scrollingView

▪ `Static` `Protected` **scrollingView**: [`Scroller`](Scroller.md)

#### Defined in

[display/Scroller.ts:9](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L9)

## Accessors

### alpha

• `get` **alpha**(): `number`

#### Returns

`number`

#### Inherited from

Layer.alpha

#### Defined in

[display/Layer.ts:169](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L169)

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

[display/Layer.ts:173](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L173)

___

### anchorX

• `get` **anchorX**(): `number`

#### Returns

`number`

#### Inherited from

Layer.anchorX

#### Defined in

[display/Layer.ts:92](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L92)

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

[display/Layer.ts:96](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L96)

___

### anchorY

• `get` **anchorY**(): `number`

#### Returns

`number`

#### Inherited from

Layer.anchorY

#### Defined in

[display/Layer.ts:103](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L103)

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

[display/Layer.ts:107](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L107)

___

### background

• `get` **background**(): `string`

#### Returns

`string`

#### Inherited from

Layer.background

#### Defined in

[display/Layer.ts:200](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L200)

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

[display/Layer.ts:204](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L204)

___

### canvas

• `get` **canvas**(): `HTMLCanvasElement`

#### Returns

`HTMLCanvasElement`

#### Inherited from

Layer.canvas

#### Defined in

[display/Layer.ts:227](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L227)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

Layer.height

#### Defined in

[display/Layer.ts:81](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L81)

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

[display/Layer.ts:85](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L85)

___

### numChildren

• `get` **numChildren**(): `number`

#### Returns

`number`

#### Inherited from

Layer.numChildren

#### Defined in

[display/Layer.ts:219](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L219)

___

### parent

• `get` **parent**(): [`Layer`](Layer.md)

#### Returns

[`Layer`](Layer.md)

#### Inherited from

Layer.parent

#### Defined in

[display/Layer.ts:215](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L215)

___

### rotation

• `get` **rotation**(): `number`

#### Returns

`number`

#### Inherited from

Layer.rotation

#### Defined in

[display/Layer.ts:158](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L158)

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

[display/Layer.ts:162](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L162)

___

### scaleX

• `get` **scaleX**(): `number`

#### Returns

`number`

#### Inherited from

Layer.scaleX

#### Defined in

[display/Layer.ts:136](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L136)

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

[display/Layer.ts:140](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L140)

___

### scaleY

• `get` **scaleY**(): `number`

#### Returns

`number`

#### Inherited from

Layer.scaleY

#### Defined in

[display/Layer.ts:147](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L147)

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

[display/Layer.ts:151](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L151)

___

### scrollHeight

• `get` **scrollHeight**(): `number`

#### Returns

`number`

#### Defined in

[display/Scroller.ts:67](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L67)

___

### scrollLeft

• `get` **scrollLeft**(): `number`

#### Returns

`number`

#### Defined in

[display/Scroller.ts:48](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L48)

• `set` **scrollLeft**(`scrollLeft`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scrollLeft` | `number` |

#### Returns

`void`

#### Defined in

[display/Scroller.ts:52](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L52)

___

### scrollTop

• `get` **scrollTop**(): `number`

#### Returns

`number`

#### Defined in

[display/Scroller.ts:33](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L33)

• `set` **scrollTop**(`scrollTop`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scrollTop` | `number` |

#### Returns

`void`

#### Defined in

[display/Scroller.ts:37](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L37)

___

### scrollWidth

• `get` **scrollWidth**(): `number`

#### Returns

`number`

#### Defined in

[display/Scroller.ts:63](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L63)

___

### skewX

• `get` **skewX**(): `number`

#### Returns

`number`

#### Inherited from

Layer.skewX

#### Defined in

[display/Layer.ts:114](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L114)

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

[display/Layer.ts:118](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L118)

___

### skewY

• `get` **skewY**(): `number`

#### Returns

`number`

#### Inherited from

Layer.skewY

#### Defined in

[display/Layer.ts:125](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L125)

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

[display/Layer.ts:129](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L129)

___

### smoothing

• `get` **smoothing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Layer.smoothing

#### Defined in

[display/Layer.ts:191](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L191)

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

[display/Layer.ts:195](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L195)

___

### stage

• `get` **stage**(): [`Stage`](Stage.md)

#### Returns

[`Stage`](Stage.md)

#### Inherited from

Layer.stage

#### Defined in

[display/Layer.ts:211](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L211)

___

### ticker

• `get` **ticker**(): [`Ticker`](Ticker.md)

#### Returns

[`Ticker`](Ticker.md)

#### Inherited from

Layer.ticker

#### Defined in

[display/Layer.ts:223](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L223)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Layer.visible

#### Defined in

[display/Layer.ts:180](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L180)

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

[display/Layer.ts:184](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L184)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

Layer.width

#### Defined in

[display/Layer.ts:70](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L70)

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

[display/Layer.ts:74](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L74)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

Layer.x

#### Defined in

[display/Layer.ts:48](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L48)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

#### Inherited from

Layer.x

#### Defined in

[display/Layer.ts:52](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L52)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

Layer.y

#### Defined in

[display/Layer.ts:59](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L59)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

Layer.y

#### Defined in

[display/Layer.ts:63](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L63)

## Methods

### $drawChild

▸ `Protected` **$drawChild**(`child`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](Layer.md) |

#### Returns

`number`

#### Inherited from

[Layer](Layer.md).[$drawChild](Layer.md#$drawchild)

#### Defined in

[display/Layer.ts:605](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L605)

___

### $emitAdded

▸ `Protected` **$emitAdded**(`parent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`Layer`](Layer.md) |

#### Returns

`void`

#### Inherited from

[Layer](Layer.md).[$emitAdded](Layer.md#$emitadded)

#### Defined in

[display/Layer.ts:543](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L543)

___

### $emitAddedToStage

▸ `Protected` **$emitAddedToStage**(`stage`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stage` | [`Stage`](Stage.md) |

#### Returns

`void`

#### Inherited from

[Layer](Layer.md).[$emitAddedToStage](Layer.md#$emitaddedtostage)

#### Defined in

[display/Layer.ts:561](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L561)

___

### $emitRemoved

▸ `Protected` **$emitRemoved**(): `void`

#### Returns

`void`

#### Inherited from

[Layer](Layer.md).[$emitRemoved](Layer.md#$emitremoved)

#### Defined in

[display/Layer.ts:552](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L552)

___

### $emitRemovedFromStage

▸ `Protected` **$emitRemovedFromStage**(): `void`

#### Returns

`void`

#### Overrides

[Layer](Layer.md).[$emitRemovedFromStage](Layer.md#$emitremovedfromstage)

#### Defined in

[display/Scroller.ts:170](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L170)

___

### $emitTouchEvent

▸ `Protected` **$emitTouchEvent**(`event`, `inside`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`TouchEvent`](TouchEvent.md) |
| `inside` | `boolean` |

#### Returns

`boolean`

#### Inherited from

[Layer](Layer.md).[$emitTouchEvent](Layer.md#$emittouchevent)

#### Defined in

[display/Layer.ts:495](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L495)

___

### $getChildBounds

▸ `Protected` **$getChildBounds**(`child`): [`Rectangle`](Rectangle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](Layer.md) |

#### Returns

[`Rectangle`](Rectangle.md)

#### Inherited from

[Layer](Layer.md).[$getChildBounds](Layer.md#$getchildbounds)

#### Defined in

[display/Layer.ts:449](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L449)

___

### $getChildTransform

▸ `Protected` **$getChildTransform**(`child`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](Layer.md) |

#### Returns

[`Matrix`](Matrix.md)

#### Overrides

[Layer](Layer.md).[$getChildTransform](Layer.md#$getchildtransform)

#### Defined in

[display/Scroller.ts:71](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L71)

___

### $getContentBounds

▸ `Protected` **$getContentBounds**(): [`Rectangle`](Rectangle.md)

#### Returns

[`Rectangle`](Rectangle.md)

#### Inherited from

[Layer](Layer.md).[$getContentBounds](Layer.md#$getcontentbounds)

#### Defined in

[display/Layer.ts:474](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L474)

___

### $getTransform

▸ `Protected` **$getTransform**(): [`Matrix`](Matrix.md)

#### Returns

[`Matrix`](Matrix.md)

#### Inherited from

[Layer](Layer.md).[$getTransform](Layer.md#$gettransform)

#### Defined in

[display/Layer.ts:434](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L434)

___

### $isChildVisible

▸ `Protected` **$isChildVisible**(`child`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](Layer.md) |

#### Returns

`boolean`

#### Inherited from

[Layer](Layer.md).[$isChildVisible](Layer.md#$ischildvisible)

#### Defined in

[display/Layer.ts:591](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L591)

___

### $localHitTest

▸ `Protected` **$localHitTest**(`vector`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Vector`](Vector.md) |

#### Returns

`boolean`

#### Inherited from

[Layer](Layer.md).[$localHitTest](Layer.md#$localhittest)

#### Defined in

[display/Layer.ts:587](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L587)

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

[Layer](Layer.md).[$markDirty](Layer.md#$markdirty)

#### Defined in

[display/Layer.ts:389](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L389)

___

### $markParentDirty

▸ `Protected` **$markParentDirty**(): `void`

#### Returns

`void`

#### Inherited from

[Layer](Layer.md).[$markParentDirty](Layer.md#$markparentdirty)

#### Defined in

[display/Layer.ts:398](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L398)

___

### $onTouchCancel

▸ `Protected` **$onTouchCancel**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`TouchEvent`](TouchEvent.md) |

#### Returns

`void`

#### Defined in

[display/Scroller.ts:164](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L164)

___

### $onTouchEnd

▸ `Protected` **$onTouchEnd**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`TouchEvent`](TouchEvent.md) |

#### Returns

`void`

#### Defined in

[display/Scroller.ts:130](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L130)

___

### $onTouchMove

▸ `Protected` **$onTouchMove**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`TouchEvent`](TouchEvent.md) |

#### Returns

`void`

#### Defined in

[display/Scroller.ts:99](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L99)

___

### $onTouchStart

▸ `Protected` **$onTouchStart**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`TouchEvent`](TouchEvent.md) |

#### Returns

`void`

#### Defined in

[display/Scroller.ts:86](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L86)

___

### $render

▸ `Protected` **$render**(): `number`

#### Returns

`number`

#### Inherited from

[Layer](Layer.md).[$render](Layer.md#$render)

#### Defined in

[display/Layer.ts:636](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L636)

___

### $resizeCanvas

▸ `Protected` **$resizeCanvas**(): `void`

#### Returns

`void`

#### Overrides

[Layer](Layer.md).[$resizeCanvas](Layer.md#$resizecanvas)

#### Defined in

[display/Scroller.ts:77](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Scroller.ts#L77)

___

### $resizeParentCanvas

▸ `Protected` **$resizeParentCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[Layer](Layer.md).[$resizeParentCanvas](Layer.md#$resizeparentcanvas)

#### Defined in

[display/Layer.ts:428](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L428)

___

### addChild

▸ **addChild**(`child`): [`Scroller`](Scroller.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](Layer.md) |

#### Returns

[`Scroller`](Scroller.md)

#### Inherited from

[Layer](Layer.md).[addChild](Layer.md#addchild)

#### Defined in

[display/Layer.ts:231](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L231)

___

### addChildAt

▸ **addChildAt**(`child`, `index`): [`Scroller`](Scroller.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](Layer.md) |
| `index` | `number` |

#### Returns

[`Scroller`](Scroller.md)

#### Inherited from

[Layer](Layer.md).[addChildAt](Layer.md#addchildat)

#### Defined in

[display/Layer.ts:235](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L235)

___

### emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](Event.md) |

#### Returns

`boolean`

#### Inherited from

[Layer](Layer.md).[emit](Layer.md#emit)

#### Defined in

[event/EventEmitter.ts:42](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L42)

▸ **emit**(`type`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[Layer](Layer.md).[emit](Layer.md#emit)

#### Defined in

[event/EventEmitter.ts:43](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L43)

___

### getChildAt

▸ **getChildAt**(`index`): [`Layer`](Layer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`Layer`](Layer.md)

#### Inherited from

[Layer](Layer.md).[getChildAt](Layer.md#getchildat)

#### Defined in

[display/Layer.ts:277](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L277)

___

### getChildByName

▸ **getChildByName**(`name`): [`Layer`](Layer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Layer`](Layer.md)

#### Inherited from

[Layer](Layer.md).[getChildByName](Layer.md#getchildbyname)

#### Defined in

[display/Layer.ts:256](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L256)

___

### getChildIndex

▸ **getChildIndex**(`child`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](Layer.md) |

#### Returns

`number`

#### Inherited from

[Layer](Layer.md).[getChildIndex](Layer.md#getchildindex)

#### Defined in

[display/Layer.ts:281](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L281)

___

### getChildrenByTag

▸ **getChildrenByTag**(`tag`): [`Layer`](Layer.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |

#### Returns

[`Layer`](Layer.md)[]

#### Inherited from

[Layer](Layer.md).[getChildrenByTag](Layer.md#getchildrenbytag)

#### Defined in

[display/Layer.ts:266](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L266)

___

### hasChild

▸ **hasChild**(`child`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](Layer.md) |

#### Returns

`boolean`

#### Inherited from

[Layer](Layer.md).[hasChild](Layer.md#haschild)

#### Defined in

[display/Layer.ts:285](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L285)

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

[Layer](Layer.md).[hasEventListener](Layer.md#haseventlistener)

#### Defined in

[event/EventEmitter.ts:80](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L80)

___

### off

▸ **off**(`type`, `listener?`): [`Scroller`](Scroller.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener?` | (...`args`: `any`[]) => `void` |

#### Returns

[`Scroller`](Scroller.md)

#### Inherited from

[Layer](Layer.md).[off](Layer.md#off)

#### Defined in

[display/Layer.ts:684](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L684)

___

### on

▸ **on**(`type`, `listener`): [`Scroller`](Scroller.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Scroller`](Scroller.md)

#### Inherited from

[Layer](Layer.md).[on](Layer.md#on)

#### Defined in

[display/Layer.ts:668](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L668)

___

### once

▸ **once**(`type`, `listener`): [`Scroller`](Scroller.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`Listener`](../README.md#listener) |

#### Returns

[`Scroller`](Scroller.md)

#### Inherited from

[Layer](Layer.md).[once](Layer.md#once)

#### Defined in

[event/EventEmitter.ts:33](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L33)

___

### removeAllChildren

▸ **removeAllChildren**(): [`Scroller`](Scroller.md)

#### Returns

[`Scroller`](Scroller.md)

#### Inherited from

[Layer](Layer.md).[removeAllChildren](Layer.md#removeallchildren)

#### Defined in

[display/Layer.ts:372](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L372)

___

### removeAllListeners

▸ **removeAllListeners**(): [`Scroller`](Scroller.md)

#### Returns

[`Scroller`](Scroller.md)

#### Inherited from

[Layer](Layer.md).[removeAllListeners](Layer.md#removealllisteners)

#### Defined in

[event/EventEmitter.ts:85](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L85)

___

### removeChild

▸ **removeChild**(`child`): [`Scroller`](Scroller.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](Layer.md) |

#### Returns

[`Scroller`](Scroller.md)

#### Inherited from

[Layer](Layer.md).[removeChild](Layer.md#removechild)

#### Defined in

[display/Layer.ts:333](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L333)

___

### removeChildAt

▸ **removeChildAt**(`index`): [`Scroller`](Scroller.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`Scroller`](Scroller.md)

#### Inherited from

[Layer](Layer.md).[removeChildAt](Layer.md#removechildat)

#### Defined in

[display/Layer.ts:338](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L338)

___

### removeChildByName

▸ **removeChildByName**(`name`): [`Scroller`](Scroller.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Scroller`](Scroller.md)

#### Inherited from

[Layer](Layer.md).[removeChildByName](Layer.md#removechildbyname)

#### Defined in

[display/Layer.ts:349](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L349)

___

### removeChildrenByTag

▸ **removeChildrenByTag**(`tag`): [`Scroller`](Scroller.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |

#### Returns

[`Scroller`](Scroller.md)

#### Inherited from

[Layer](Layer.md).[removeChildrenByTag](Layer.md#removechildrenbytag)

#### Defined in

[display/Layer.ts:361](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L361)

___

### removeSelf

▸ **removeSelf**(): [`Scroller`](Scroller.md)

#### Returns

[`Scroller`](Scroller.md)

#### Inherited from

[Layer](Layer.md).[removeSelf](Layer.md#removeself)

#### Defined in

[display/Layer.ts:382](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L382)

___

### replaceChild

▸ **replaceChild**(`oldChild`, `newChild`): [`Scroller`](Scroller.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldChild` | [`Layer`](Layer.md) |
| `newChild` | [`Layer`](Layer.md) |

#### Returns

[`Scroller`](Scroller.md)

#### Inherited from

[Layer](Layer.md).[replaceChild](Layer.md#replacechild)

#### Defined in

[display/Layer.ts:249](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L249)

___

### setChildIndex

▸ **setChildIndex**(`child`, `index`): [`Scroller`](Scroller.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](Layer.md) |
| `index` | `number` |

#### Returns

[`Scroller`](Scroller.md)

#### Inherited from

[Layer](Layer.md).[setChildIndex](Layer.md#setchildindex)

#### Defined in

[display/Layer.ts:309](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L309)

___

### swapChildren

▸ **swapChildren**(`child1`, `child2`): [`Scroller`](Scroller.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child1` | [`Layer`](Layer.md) |
| `child2` | [`Layer`](Layer.md) |

#### Returns

[`Scroller`](Scroller.md)

#### Inherited from

[Layer](Layer.md).[swapChildren](Layer.md#swapchildren)

#### Defined in

[display/Layer.ts:289](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L289)

___

### swapChildrenAt

▸ **swapChildrenAt**(`index1`, `index2`): [`Scroller`](Scroller.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index1` | `number` |
| `index2` | `number` |

#### Returns

[`Scroller`](Scroller.md)

#### Inherited from

[Layer](Layer.md).[swapChildrenAt](Layer.md#swapchildrenat)

#### Defined in

[display/Layer.ts:298](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L298)
