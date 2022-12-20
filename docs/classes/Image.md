[API Reference](../README.md) / Image

# Class: Image

## Hierarchy

- [`Layer`](../README.md#layer)

  ↳ **`Image`**

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
| `texture?` | [`Texture`](../README.md#texture) |

#### Overrides

[Layer](../README.md#layer).[constructor](../README.md#constructor)

#### Defined in

[display/Image.ts:20](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L20)

• **new Image**(`texture`, `width`, `height`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](../README.md#texture) |
| `width` | `number` |
| `height` | `number` |

#### Overrides

Layer.constructor

#### Defined in

[display/Image.ts:21](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L21)

## Properties

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

### $boundOnTextureLoad

• `Protected` `Readonly` **$boundOnTextureLoad**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[display/Image.ts:18](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L18)

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

### $clipRect

• `Protected` **$clipRect**: [`Rectangle`](../README.md#rectangle) = `null`

#### Defined in

[display/Image.ts:15](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L15)

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

### $fillMode

• `Protected` **$fillMode**: [`FillMode`](../README.md#fillmode) = `Image.SCALE`

#### Defined in

[display/Image.ts:14](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L14)

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

### $pattern

• `Protected` **$pattern**: `CanvasPattern` = `null`

#### Defined in

[display/Image.ts:17](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L17)

___

### $removedListeners

• `Protected` **$removedListeners**: [`Listener`](../README.md#listener)[] = `[]`

#### Inherited from

[Layer](../README.md#layer).[$removedListeners](../README.md#$removedlisteners)

#### Defined in

[event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L7)

___

### $rotation

• `Protected` **$rotation**: `number` = `0`

#### Inherited from

[Layer](../README.md#layer).[$rotation](../README.md#$rotation)

#### Defined in

[display/Layer.ts:28](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L28)

___

### $scale9Grid

• `Protected` **$scale9Grid**: [`Rectangle`](../README.md#rectangle) = `null`

#### Defined in

[display/Image.ts:16](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L16)

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

### $texture

• `Protected` **$texture**: [`Texture`](../README.md#texture) = `null`

#### Defined in

[display/Image.ts:13](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L13)

___

### $touches

• `Protected` **$touches**: `boolean`[] = `[]`

#### Inherited from

[Layer](../README.md#layer).[$touches](../README.md#$touches)

#### Defined in

[display/Layer.ts:38](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L38)

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

### REPEAT

▪ `Static` **REPEAT**: [`FillMode`](../README.md#fillmode) = `'repeat'`

#### Defined in

[display/Image.ts:9](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L9)

___

### REPEAT\_X

▪ `Static` **REPEAT\_X**: [`FillMode`](../README.md#fillmode) = `'repeat-x'`

#### Defined in

[display/Image.ts:10](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L10)

___

### REPEAT\_Y

▪ `Static` **REPEAT\_Y**: [`FillMode`](../README.md#fillmode) = `'repeat-y'`

#### Defined in

[display/Image.ts:11](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L11)

___

### SCALE

▪ `Static` **SCALE**: [`FillMode`](../README.md#fillmode) = `'scale'`

#### Defined in

[display/Image.ts:8](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L8)

___

### pixelRatio

▪ `Static` **pixelRatio**: `number`

#### Inherited from

[Layer](../README.md#layer).[pixelRatio](../README.md#pixelratio)

#### Defined in

[display/Layer.ts:12](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L12)

## Accessors

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

### clipRect

• `get` **clipRect**(): [`Rectangle`](../README.md#rectangle)

#### Returns

[`Rectangle`](../README.md#rectangle)

#### Defined in

[display/Image.ts:59](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L59)

• `set` **clipRect**(`clipRect`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clipRect` | [`Rectangle`](../README.md#rectangle) |

#### Returns

`void`

#### Defined in

[display/Image.ts:63](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L63)

___

### fillMode

• `get` **fillMode**(): [`FillMode`](../README.md#fillmode)

#### Returns

[`FillMode`](../README.md#fillmode)

#### Defined in

[display/Image.ts:49](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L49)

• `set` **fillMode**(`fillMode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fillMode` | [`FillMode`](../README.md#fillmode) |

#### Returns

`void`

#### Defined in

[display/Image.ts:53](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L53)

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

### scale9Grid

• `get` **scale9Grid**(): [`Rectangle`](../README.md#rectangle)

#### Returns

[`Rectangle`](../README.md#rectangle)

#### Defined in

[display/Image.ts:68](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L68)

• `set` **scale9Grid**(`scale9Grid`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scale9Grid` | [`Rectangle`](../README.md#rectangle) |

#### Returns

`void`

#### Defined in

[display/Image.ts:72](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L72)

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

### texture

• `get` **texture**(): [`Texture`](../README.md#texture)

#### Returns

[`Texture`](../README.md#texture)

#### Defined in

[display/Image.ts:32](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L32)

• `set` **texture**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](../README.md#texture) |

#### Returns

`void`

#### Defined in

[display/Image.ts:36](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L36)

___

### ticker

• `get` **ticker**(): [`Ticker`](../README.md#ticker)

#### Returns

[`Ticker`](../README.md#ticker)

#### Inherited from

Layer.ticker

#### Defined in

[display/Layer.ts:223](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L223)

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

#### Inherited from

Layer.x

#### Defined in

[display/Layer.ts:48](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L48)

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

[display/Layer.ts:52](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L52)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

Layer.y

#### Defined in

[display/Layer.ts:59](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L59)

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

#### Inherited from

[Layer](../README.md#layer).[$drawChild](../README.md#$drawchild)

#### Defined in

[display/Layer.ts:605](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L605)

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

[display/Image.ts:111](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L111)

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

[display/Image.ts:121](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L121)

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

#### Overrides

[Layer](../README.md#layer).[$getContentBounds](../README.md#$getcontentbounds)

#### Defined in

[display/Image.ts:95](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L95)

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

### $onTextureLoad

▸ `Protected` **$onTextureLoad**(): `void`

#### Returns

`void`

#### Defined in

[display/Image.ts:77](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L77)

___

### $render

▸ `Protected` **$render**(): `number`

#### Returns

`number`

#### Overrides

[Layer](../README.md#layer).[$render](../README.md#$render)

#### Defined in

[display/Image.ts:133](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L133)

___

### $resizeCanvas

▸ `Protected` **$resizeCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[Layer](../README.md#layer).[$resizeCanvas](../README.md#$resizecanvas)

#### Defined in

[display/Layer.ts:404](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L404)

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

### $updatePattern

▸ `Protected` **$updatePattern**(): `void`

#### Returns

`void`

#### Defined in

[display/Image.ts:83](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L83)

___

### addChild

▸ **addChild**(`child`): [`Image`](../README.md#image)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](../README.md#layer) |

#### Returns

[`Image`](../README.md#image)

#### Inherited from

[Layer](../README.md#layer).[addChild](../README.md#addchild)

#### Defined in

[display/Layer.ts:231](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L231)

___

### addChildAt

▸ **addChildAt**(`child`, `index`): [`Image`](../README.md#image)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](../README.md#layer) |
| `index` | `number` |

#### Returns

[`Image`](../README.md#image)

#### Inherited from

[Layer](../README.md#layer).[addChildAt](../README.md#addchildat)

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

▸ **off**(`type`, `listener?`): [`Image`](../README.md#image)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener?` | (...`args`: `any`[]) => `void` |

#### Returns

[`Image`](../README.md#image)

#### Inherited from

[Layer](../README.md#layer).[off](../README.md#off)

#### Defined in

[display/Layer.ts:684](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L684)

___

### on

▸ **on**(`type`, `listener`): [`Image`](../README.md#image)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Image`](../README.md#image)

#### Inherited from

[Layer](../README.md#layer).[on](../README.md#on)

#### Defined in

[display/Layer.ts:668](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L668)

___

### once

▸ **once**(`type`, `listener`): [`Image`](../README.md#image)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`Listener`](../README.md#listener) |

#### Returns

[`Image`](../README.md#image)

#### Inherited from

[Layer](../README.md#layer).[once](../README.md#once)

#### Defined in

[event/EventEmitter.ts:33](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L33)

___

### removeAllChildren

▸ **removeAllChildren**(): [`Image`](../README.md#image)

#### Returns

[`Image`](../README.md#image)

#### Inherited from

[Layer](../README.md#layer).[removeAllChildren](../README.md#removeallchildren)

#### Defined in

[display/Layer.ts:372](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L372)

___

### removeAllListeners

▸ **removeAllListeners**(): [`Image`](../README.md#image)

#### Returns

[`Image`](../README.md#image)

#### Inherited from

[Layer](../README.md#layer).[removeAllListeners](../README.md#removealllisteners)

#### Defined in

[event/EventEmitter.ts:85](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L85)

___

### removeChild

▸ **removeChild**(`child`): [`Image`](../README.md#image)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](../README.md#layer) |

#### Returns

[`Image`](../README.md#image)

#### Inherited from

[Layer](../README.md#layer).[removeChild](../README.md#removechild)

#### Defined in

[display/Layer.ts:333](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L333)

___

### removeChildAt

▸ **removeChildAt**(`index`): [`Image`](../README.md#image)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`Image`](../README.md#image)

#### Inherited from

[Layer](../README.md#layer).[removeChildAt](../README.md#removechildat)

#### Defined in

[display/Layer.ts:338](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L338)

___

### removeChildByName

▸ **removeChildByName**(`name`): [`Image`](../README.md#image)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Image`](../README.md#image)

#### Inherited from

[Layer](../README.md#layer).[removeChildByName](../README.md#removechildbyname)

#### Defined in

[display/Layer.ts:349](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L349)

___

### removeChildrenByTag

▸ **removeChildrenByTag**(`tag`): [`Image`](../README.md#image)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |

#### Returns

[`Image`](../README.md#image)

#### Inherited from

[Layer](../README.md#layer).[removeChildrenByTag](../README.md#removechildrenbytag)

#### Defined in

[display/Layer.ts:361](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L361)

___

### removeSelf

▸ **removeSelf**(): [`Image`](../README.md#image)

#### Returns

[`Image`](../README.md#image)

#### Inherited from

[Layer](../README.md#layer).[removeSelf](../README.md#removeself)

#### Defined in

[display/Layer.ts:382](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L382)

___

### replaceChild

▸ **replaceChild**(`oldChild`, `newChild`): [`Image`](../README.md#image)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldChild` | [`Layer`](../README.md#layer) |
| `newChild` | [`Layer`](../README.md#layer) |

#### Returns

[`Image`](../README.md#image)

#### Inherited from

[Layer](../README.md#layer).[replaceChild](../README.md#replacechild)

#### Defined in

[display/Layer.ts:249](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L249)

___

### setChildIndex

▸ **setChildIndex**(`child`, `index`): [`Image`](../README.md#image)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](../README.md#layer) |
| `index` | `number` |

#### Returns

[`Image`](../README.md#image)

#### Inherited from

[Layer](../README.md#layer).[setChildIndex](../README.md#setchildindex)

#### Defined in

[display/Layer.ts:309](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L309)

___

### swapChildren

▸ **swapChildren**(`child1`, `child2`): [`Image`](../README.md#image)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child1` | [`Layer`](../README.md#layer) |
| `child2` | [`Layer`](../README.md#layer) |

#### Returns

[`Image`](../README.md#image)

#### Inherited from

[Layer](../README.md#layer).[swapChildren](../README.md#swapchildren)

#### Defined in

[display/Layer.ts:289](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L289)

___

### swapChildrenAt

▸ **swapChildrenAt**(`index1`, `index2`): [`Image`](../README.md#image)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index1` | `number` |
| `index2` | `number` |

#### Returns

[`Image`](../README.md#image)

#### Inherited from

[Layer](../README.md#layer).[swapChildrenAt](../README.md#swapchildrenat)

#### Defined in

[display/Layer.ts:298](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L298)
