[API Reference](../README.md) / Image

# Class: Image

## Hierarchy

- [`Layer`](Layer.md)

  ↳ **`Image`**

  ↳↳ [`MovieClip`](MovieClip.md)

## Table of contents

### Constructors

- [constructor](Image.md#constructor)

### Properties

- [$alpha](Image.md#$alpha)
- [$anchorX](Image.md#$anchorx)
- [$anchorY](Image.md#$anchory)
- [$background](Image.md#$background)
- [$boundOnTextureLoad](Image.md#$boundontextureload)
- [$canvas](Image.md#$canvas)
- [$children](Image.md#$children)
- [$clipRect](Image.md#$cliprect)
- [$context](Image.md#$context)
- [$dirty](Image.md#$dirty)
- [$emittingType](Image.md#$emittingtype)
- [$events](Image.md#$events)
- [$fillMode](Image.md#$fillmode)
- [$height](Image.md#$height)
- [$parent](Image.md#$parent)
- [$pattern](Image.md#$pattern)
- [$removedListeners](Image.md#$removedlisteners)
- [$rotation](Image.md#$rotation)
- [$scale9Grid](Image.md#$scale9grid)
- [$scaleX](Image.md#$scalex)
- [$scaleY](Image.md#$scaley)
- [$shouldEmitTap](Image.md#$shouldemittap)
- [$skewX](Image.md#$skewx)
- [$skewY](Image.md#$skewy)
- [$smoothing](Image.md#$smoothing)
- [$stage](Image.md#$stage)
- [$texture](Image.md#$texture)
- [$touches](Image.md#$touches)
- [$visible](Image.md#$visible)
- [$width](Image.md#$width)
- [$x](Image.md#$x)
- [$y](Image.md#$y)
- [name](Image.md#name)
- [tag](Image.md#tag)
- [touchable](Image.md#touchable)
- [REPEAT](Image.md#repeat)
- [REPEAT\_X](Image.md#repeat_x)
- [REPEAT\_Y](Image.md#repeat_y)
- [SCALE](Image.md#scale)
- [pixelRatio](Image.md#pixelratio)

### Accessors

- [alpha](Image.md#alpha)
- [anchorX](Image.md#anchorx)
- [anchorY](Image.md#anchory)
- [background](Image.md#background)
- [canvas](Image.md#canvas)
- [clipRect](Image.md#cliprect)
- [fillMode](Image.md#fillmode)
- [height](Image.md#height)
- [numChildren](Image.md#numchildren)
- [parent](Image.md#parent)
- [rotation](Image.md#rotation)
- [scale9Grid](Image.md#scale9grid)
- [scaleX](Image.md#scalex)
- [scaleY](Image.md#scaley)
- [skewX](Image.md#skewx)
- [skewY](Image.md#skewy)
- [smoothing](Image.md#smoothing)
- [stage](Image.md#stage)
- [texture](Image.md#texture)
- [ticker](Image.md#ticker)
- [visible](Image.md#visible)
- [width](Image.md#width)
- [x](Image.md#x)
- [y](Image.md#y)

### Methods

- [$drawChild](Image.md#$drawchild)
- [$drawPattern](Image.md#$drawpattern)
- [$drawTexture](Image.md#$drawtexture)
- [$emitAdded](Image.md#$emitadded)
- [$emitAddedToStage](Image.md#$emitaddedtostage)
- [$emitRemoved](Image.md#$emitremoved)
- [$emitRemovedFromStage](Image.md#$emitremovedfromstage)
- [$emitTouchEvent](Image.md#$emittouchevent)
- [$getChildBounds](Image.md#$getchildbounds)
- [$getChildTransform](Image.md#$getchildtransform)
- [$getContentBounds](Image.md#$getcontentbounds)
- [$getTransform](Image.md#$gettransform)
- [$isChildVisible](Image.md#$ischildvisible)
- [$localHitTest](Image.md#$localhittest)
- [$markDirty](Image.md#$markdirty)
- [$markParentDirty](Image.md#$markparentdirty)
- [$onTextureLoad](Image.md#$ontextureload)
- [$render](Image.md#$render)
- [$resizeCanvas](Image.md#$resizecanvas)
- [$resizeParentCanvas](Image.md#$resizeparentcanvas)
- [$updatePattern](Image.md#$updatepattern)
- [addChild](Image.md#addchild)
- [addChildAt](Image.md#addchildat)
- [emit](Image.md#emit)
- [getChildAt](Image.md#getchildat)
- [getChildByName](Image.md#getchildbyname)
- [getChildIndex](Image.md#getchildindex)
- [getChildrenByTag](Image.md#getchildrenbytag)
- [hasChild](Image.md#haschild)
- [hasEventListener](Image.md#haseventlistener)
- [off](Image.md#off)
- [on](Image.md#on)
- [once](Image.md#once)
- [removeAllChildren](Image.md#removeallchildren)
- [removeAllListeners](Image.md#removealllisteners)
- [removeChild](Image.md#removechild)
- [removeChildAt](Image.md#removechildat)
- [removeChildByName](Image.md#removechildbyname)
- [removeChildrenByTag](Image.md#removechildrenbytag)
- [removeSelf](Image.md#removeself)
- [replaceChild](Image.md#replacechild)
- [setChildIndex](Image.md#setchildindex)
- [swapChildren](Image.md#swapchildren)
- [swapChildrenAt](Image.md#swapchildrenat)

## Constructors

### constructor

• **new Image**(`texture?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture?` | [`Texture`](Texture.md) |

#### Overrides

[Layer](Layer.md).[constructor](Layer.md#constructor)

#### Defined in

[display/Image.ts:20](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L20)

• **new Image**(`texture`, `width`, `height`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |
| `width` | `number` |
| `height` | `number` |

#### Overrides

Layer.constructor

#### Defined in

[display/Image.ts:21](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L21)

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

### $boundOnTextureLoad

• `Protected` `Readonly` **$boundOnTextureLoad**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[display/Image.ts:18](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L18)

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

### $clipRect

• `Protected` **$clipRect**: [`Rectangle`](Rectangle.md) = `null`

#### Defined in

[display/Image.ts:15](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L15)

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

### $fillMode

• `Protected` **$fillMode**: [`FillMode`](../README.md#fillmode) = `Image.SCALE`

#### Defined in

[display/Image.ts:14](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L14)

___

### $height

• `Protected` **$height**: `number` = `0`

#### Inherited from

[Layer](Layer.md).[$height](Layer.md#$height)

#### Defined in

[display/Layer.ts:21](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L21)

___

### $parent

• `Protected` **$parent**: [`Layer`](Layer.md) = `null`

#### Inherited from

[Layer](Layer.md).[$parent](Layer.md#$parent)

#### Defined in

[display/Layer.ts:34](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L34)

___

### $pattern

• `Protected` **$pattern**: `CanvasPattern` = `null`

#### Defined in

[display/Image.ts:17](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L17)

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

### $scale9Grid

• `Protected` **$scale9Grid**: [`Rectangle`](Rectangle.md) = `null`

#### Defined in

[display/Image.ts:16](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L16)

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

### $texture

• `Protected` **$texture**: [`Texture`](Texture.md) = `null`

#### Defined in

[display/Image.ts:13](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L13)

___

### $touches

• `Protected` **$touches**: `boolean`[] = `[]`

#### Inherited from

[Layer](Layer.md).[$touches](Layer.md#$touches)

#### Defined in

[display/Layer.ts:38](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L38)

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

### REPEAT

▪ `Static` **REPEAT**: [`FillMode`](../README.md#fillmode) = `'repeat'`

#### Defined in

[display/Image.ts:9](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L9)

___

### REPEAT\_X

▪ `Static` **REPEAT\_X**: [`FillMode`](../README.md#fillmode) = `'repeat-x'`

#### Defined in

[display/Image.ts:10](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L10)

___

### REPEAT\_Y

▪ `Static` **REPEAT\_Y**: [`FillMode`](../README.md#fillmode) = `'repeat-y'`

#### Defined in

[display/Image.ts:11](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L11)

___

### SCALE

▪ `Static` **SCALE**: [`FillMode`](../README.md#fillmode) = `'scale'`

#### Defined in

[display/Image.ts:8](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L8)

___

### pixelRatio

▪ `Static` **pixelRatio**: `number`

#### Inherited from

[Layer](Layer.md).[pixelRatio](Layer.md#pixelratio)

#### Defined in

[display/Layer.ts:12](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L12)

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

### clipRect

• `get` **clipRect**(): [`Rectangle`](Rectangle.md)

#### Returns

[`Rectangle`](Rectangle.md)

#### Defined in

[display/Image.ts:59](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L59)

• `set` **clipRect**(`clipRect`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clipRect` | [`Rectangle`](Rectangle.md) |

#### Returns

`void`

#### Defined in

[display/Image.ts:63](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L63)

___

### fillMode

• `get` **fillMode**(): [`FillMode`](../README.md#fillmode)

#### Returns

[`FillMode`](../README.md#fillmode)

#### Defined in

[display/Image.ts:49](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L49)

• `set` **fillMode**(`fillMode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fillMode` | [`FillMode`](../README.md#fillmode) |

#### Returns

`void`

#### Defined in

[display/Image.ts:53](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L53)

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

### scale9Grid

• `get` **scale9Grid**(): [`Rectangle`](Rectangle.md)

#### Returns

[`Rectangle`](Rectangle.md)

#### Defined in

[display/Image.ts:68](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L68)

• `set` **scale9Grid**(`scale9Grid`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scale9Grid` | [`Rectangle`](Rectangle.md) |

#### Returns

`void`

#### Defined in

[display/Image.ts:72](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L72)

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

### texture

• `get` **texture**(): [`Texture`](Texture.md)

#### Returns

[`Texture`](Texture.md)

#### Defined in

[display/Image.ts:32](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L32)

• `set` **texture**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[display/Image.ts:36](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L36)

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

### $drawPattern

▸ `Protected` **$drawPattern**(`targetX`, `targetY`, `targetW`, `targetH`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetX` | `any` |
| `targetY` | `any` |
| `targetW` | `any` |
| `targetH` | `any` |

#### Returns

`void`

#### Defined in

[display/Image.ts:111](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L111)

___

### $drawTexture

▸ `Protected` **$drawTexture**(`sourceX`, `sourceY`, `sourceW`, `sourceH`, `targetX`, `targetY`, `targetW`, `targetH`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceX` | `number` |
| `sourceY` | `number` |
| `sourceW` | `number` |
| `sourceH` | `number` |
| `targetX` | `number` |
| `targetY` | `number` |
| `targetW` | `number` |
| `targetH` | `number` |

#### Returns

`void`

#### Defined in

[display/Image.ts:121](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L121)

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

#### Inherited from

[Layer](Layer.md).[$emitRemovedFromStage](Layer.md#$emitremovedfromstage)

#### Defined in

[display/Layer.ts:574](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L574)

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

#### Inherited from

[Layer](Layer.md).[$getChildTransform](Layer.md#$getchildtransform)

#### Defined in

[display/Layer.ts:445](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L445)

___

### $getContentBounds

▸ `Protected` **$getContentBounds**(): [`Rectangle`](Rectangle.md)

#### Returns

[`Rectangle`](Rectangle.md)

#### Overrides

[Layer](Layer.md).[$getContentBounds](Layer.md#$getcontentbounds)

#### Defined in

[display/Image.ts:95](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L95)

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

### $onTextureLoad

▸ `Protected` **$onTextureLoad**(): `void`

#### Returns

`void`

#### Defined in

[display/Image.ts:77](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L77)

___

### $render

▸ `Protected` **$render**(): `number`

#### Returns

`number`

#### Overrides

[Layer](Layer.md).[$render](Layer.md#$render)

#### Defined in

[display/Image.ts:133](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L133)

___

### $resizeCanvas

▸ `Protected` **$resizeCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[Layer](Layer.md).[$resizeCanvas](Layer.md#$resizecanvas)

#### Defined in

[display/Layer.ts:404](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L404)

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

### $updatePattern

▸ `Protected` **$updatePattern**(): `void`

#### Returns

`void`

#### Defined in

[display/Image.ts:83](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L83)

___

### addChild

▸ **addChild**(`child`): [`Image`](Image.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](Layer.md) |

#### Returns

[`Image`](Image.md)

#### Inherited from

[Layer](Layer.md).[addChild](Layer.md#addchild)

#### Defined in

[display/Layer.ts:231](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L231)

___

### addChildAt

▸ **addChildAt**(`child`, `index`): [`Image`](Image.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](Layer.md) |
| `index` | `number` |

#### Returns

[`Image`](Image.md)

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

▸ **off**(`type`, `listener?`): [`Image`](Image.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener?` | (...`args`: `any`[]) => `void` |

#### Returns

[`Image`](Image.md)

#### Inherited from

[Layer](Layer.md).[off](Layer.md#off)

#### Defined in

[display/Layer.ts:684](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L684)

___

### on

▸ **on**(`type`, `listener`): [`Image`](Image.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Image`](Image.md)

#### Inherited from

[Layer](Layer.md).[on](Layer.md#on)

#### Defined in

[display/Layer.ts:668](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L668)

___

### once

▸ **once**(`type`, `listener`): [`Image`](Image.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`Listener`](../README.md#listener) |

#### Returns

[`Image`](Image.md)

#### Inherited from

[Layer](Layer.md).[once](Layer.md#once)

#### Defined in

[event/EventEmitter.ts:33](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L33)

___

### removeAllChildren

▸ **removeAllChildren**(): [`Image`](Image.md)

#### Returns

[`Image`](Image.md)

#### Inherited from

[Layer](Layer.md).[removeAllChildren](Layer.md#removeallchildren)

#### Defined in

[display/Layer.ts:372](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L372)

___

### removeAllListeners

▸ **removeAllListeners**(): [`Image`](Image.md)

#### Returns

[`Image`](Image.md)

#### Inherited from

[Layer](Layer.md).[removeAllListeners](Layer.md#removealllisteners)

#### Defined in

[event/EventEmitter.ts:85](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L85)

___

### removeChild

▸ **removeChild**(`child`): [`Image`](Image.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](Layer.md) |

#### Returns

[`Image`](Image.md)

#### Inherited from

[Layer](Layer.md).[removeChild](Layer.md#removechild)

#### Defined in

[display/Layer.ts:333](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L333)

___

### removeChildAt

▸ **removeChildAt**(`index`): [`Image`](Image.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`Image`](Image.md)

#### Inherited from

[Layer](Layer.md).[removeChildAt](Layer.md#removechildat)

#### Defined in

[display/Layer.ts:338](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L338)

___

### removeChildByName

▸ **removeChildByName**(`name`): [`Image`](Image.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Image`](Image.md)

#### Inherited from

[Layer](Layer.md).[removeChildByName](Layer.md#removechildbyname)

#### Defined in

[display/Layer.ts:349](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L349)

___

### removeChildrenByTag

▸ **removeChildrenByTag**(`tag`): [`Image`](Image.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |

#### Returns

[`Image`](Image.md)

#### Inherited from

[Layer](Layer.md).[removeChildrenByTag](Layer.md#removechildrenbytag)

#### Defined in

[display/Layer.ts:361](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L361)

___

### removeSelf

▸ **removeSelf**(): [`Image`](Image.md)

#### Returns

[`Image`](Image.md)

#### Inherited from

[Layer](Layer.md).[removeSelf](Layer.md#removeself)

#### Defined in

[display/Layer.ts:382](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L382)

___

### replaceChild

▸ **replaceChild**(`oldChild`, `newChild`): [`Image`](Image.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldChild` | [`Layer`](Layer.md) |
| `newChild` | [`Layer`](Layer.md) |

#### Returns

[`Image`](Image.md)

#### Inherited from

[Layer](Layer.md).[replaceChild](Layer.md#replacechild)

#### Defined in

[display/Layer.ts:249](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L249)

___

### setChildIndex

▸ **setChildIndex**(`child`, `index`): [`Image`](Image.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](Layer.md) |
| `index` | `number` |

#### Returns

[`Image`](Image.md)

#### Inherited from

[Layer](Layer.md).[setChildIndex](Layer.md#setchildindex)

#### Defined in

[display/Layer.ts:309](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L309)

___

### swapChildren

▸ **swapChildren**(`child1`, `child2`): [`Image`](Image.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child1` | [`Layer`](Layer.md) |
| `child2` | [`Layer`](Layer.md) |

#### Returns

[`Image`](Image.md)

#### Inherited from

[Layer](Layer.md).[swapChildren](Layer.md#swapchildren)

#### Defined in

[display/Layer.ts:289](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L289)

___

### swapChildrenAt

▸ **swapChildrenAt**(`index1`, `index2`): [`Image`](Image.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index1` | `number` |
| `index2` | `number` |

#### Returns

[`Image`](Image.md)

#### Inherited from

[Layer](Layer.md).[swapChildrenAt](Layer.md#swapchildrenat)

#### Defined in

[display/Layer.ts:298](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L298)
