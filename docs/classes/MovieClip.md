[API Reference](../README.md) / MovieClip

# Class: MovieClip

## Hierarchy

- [`Image`](Image.md)

  ↳ **`MovieClip`**

## Table of contents

### Constructors

- [constructor](MovieClip.md#constructor)

### Properties

- [$alpha](MovieClip.md#$alpha)
- [$anchorX](MovieClip.md#$anchorx)
- [$anchorY](MovieClip.md#$anchory)
- [$background](MovieClip.md#$background)
- [$boundNextFrame](MovieClip.md#$boundnextframe)
- [$boundOnTextureLoad](MovieClip.md#$boundontextureload)
- [$canvas](MovieClip.md#$canvas)
- [$children](MovieClip.md#$children)
- [$clipRect](MovieClip.md#$cliprect)
- [$context](MovieClip.md#$context)
- [$currentFrame](MovieClip.md#$currentframe)
- [$dirty](MovieClip.md#$dirty)
- [$emittingType](MovieClip.md#$emittingtype)
- [$events](MovieClip.md#$events)
- [$fillMode](MovieClip.md#$fillmode)
- [$frames](MovieClip.md#$frames)
- [$height](MovieClip.md#$height)
- [$interval](MovieClip.md#$interval)
- [$loop](MovieClip.md#$loop)
- [$parent](MovieClip.md#$parent)
- [$pattern](MovieClip.md#$pattern)
- [$paused](MovieClip.md#$paused)
- [$removedListeners](MovieClip.md#$removedlisteners)
- [$rotation](MovieClip.md#$rotation)
- [$scale9Grid](MovieClip.md#$scale9grid)
- [$scaleX](MovieClip.md#$scalex)
- [$scaleY](MovieClip.md#$scaley)
- [$shouldEmitTap](MovieClip.md#$shouldemittap)
- [$skewX](MovieClip.md#$skewx)
- [$skewY](MovieClip.md#$skewy)
- [$smoothing](MovieClip.md#$smoothing)
- [$stage](MovieClip.md#$stage)
- [$texture](MovieClip.md#$texture)
- [$timer](MovieClip.md#$timer)
- [$touches](MovieClip.md#$touches)
- [$visible](MovieClip.md#$visible)
- [$width](MovieClip.md#$width)
- [$x](MovieClip.md#$x)
- [$y](MovieClip.md#$y)
- [name](MovieClip.md#name)
- [tag](MovieClip.md#tag)
- [touchable](MovieClip.md#touchable)
- [REPEAT](MovieClip.md#repeat)
- [REPEAT\_X](MovieClip.md#repeat_x)
- [REPEAT\_Y](MovieClip.md#repeat_y)
- [SCALE](MovieClip.md#scale)
- [pixelRatio](MovieClip.md#pixelratio)

### Accessors

- [alpha](MovieClip.md#alpha)
- [anchorX](MovieClip.md#anchorx)
- [anchorY](MovieClip.md#anchory)
- [background](MovieClip.md#background)
- [canvas](MovieClip.md#canvas)
- [clipRect](MovieClip.md#cliprect)
- [currentFrame](MovieClip.md#currentframe)
- [fillMode](MovieClip.md#fillmode)
- [height](MovieClip.md#height)
- [interval](MovieClip.md#interval)
- [loop](MovieClip.md#loop)
- [numChildren](MovieClip.md#numchildren)
- [parent](MovieClip.md#parent)
- [paused](MovieClip.md#paused)
- [rotation](MovieClip.md#rotation)
- [scale9Grid](MovieClip.md#scale9grid)
- [scaleX](MovieClip.md#scalex)
- [scaleY](MovieClip.md#scaley)
- [skewX](MovieClip.md#skewx)
- [skewY](MovieClip.md#skewy)
- [smoothing](MovieClip.md#smoothing)
- [stage](MovieClip.md#stage)
- [texture](MovieClip.md#texture)
- [ticker](MovieClip.md#ticker)
- [totalFrames](MovieClip.md#totalframes)
- [visible](MovieClip.md#visible)
- [width](MovieClip.md#width)
- [x](MovieClip.md#x)
- [y](MovieClip.md#y)

### Methods

- [$drawChild](MovieClip.md#$drawchild)
- [$drawPattern](MovieClip.md#$drawpattern)
- [$drawTexture](MovieClip.md#$drawtexture)
- [$emitAdded](MovieClip.md#$emitadded)
- [$emitAddedToStage](MovieClip.md#$emitaddedtostage)
- [$emitRemoved](MovieClip.md#$emitremoved)
- [$emitRemovedFromStage](MovieClip.md#$emitremovedfromstage)
- [$emitTouchEvent](MovieClip.md#$emittouchevent)
- [$getChildBounds](MovieClip.md#$getchildbounds)
- [$getChildTransform](MovieClip.md#$getchildtransform)
- [$getContentBounds](MovieClip.md#$getcontentbounds)
- [$getTransform](MovieClip.md#$gettransform)
- [$gotoFrame](MovieClip.md#$gotoframe)
- [$isChildVisible](MovieClip.md#$ischildvisible)
- [$localHitTest](MovieClip.md#$localhittest)
- [$markDirty](MovieClip.md#$markdirty)
- [$markParentDirty](MovieClip.md#$markparentdirty)
- [$onTextureLoad](MovieClip.md#$ontextureload)
- [$render](MovieClip.md#$render)
- [$resizeCanvas](MovieClip.md#$resizecanvas)
- [$resizeParentCanvas](MovieClip.md#$resizeparentcanvas)
- [$updatePattern](MovieClip.md#$updatepattern)
- [addChild](MovieClip.md#addchild)
- [addChildAt](MovieClip.md#addchildat)
- [emit](MovieClip.md#emit)
- [getChildAt](MovieClip.md#getchildat)
- [getChildByName](MovieClip.md#getchildbyname)
- [getChildIndex](MovieClip.md#getchildindex)
- [getChildrenByTag](MovieClip.md#getchildrenbytag)
- [gotoAndPlay](MovieClip.md#gotoandplay)
- [gotoAndStop](MovieClip.md#gotoandstop)
- [hasChild](MovieClip.md#haschild)
- [hasEventListener](MovieClip.md#haseventlistener)
- [nextFrame](MovieClip.md#nextframe)
- [off](MovieClip.md#off)
- [on](MovieClip.md#on)
- [once](MovieClip.md#once)
- [pause](MovieClip.md#pause)
- [play](MovieClip.md#play)
- [removeAllChildren](MovieClip.md#removeallchildren)
- [removeAllListeners](MovieClip.md#removealllisteners)
- [removeChild](MovieClip.md#removechild)
- [removeChildAt](MovieClip.md#removechildat)
- [removeChildByName](MovieClip.md#removechildbyname)
- [removeChildrenByTag](MovieClip.md#removechildrenbytag)
- [removeSelf](MovieClip.md#removeself)
- [replaceChild](MovieClip.md#replacechild)
- [setChildIndex](MovieClip.md#setchildindex)
- [swapChildren](MovieClip.md#swapchildren)
- [swapChildrenAt](MovieClip.md#swapchildrenat)

## Constructors

### constructor

• **new MovieClip**(`texture`, `frames`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |
| `frames` | [`MovieClipFrame`](../interfaces/MovieClipFrame.md)[] |

#### Overrides

[Image](Image.md).[constructor](Image.md#constructor)

#### Defined in

[display/MovieClip.ts:16](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/MovieClip.ts#L16)

## Properties

### $alpha

• `Protected` **$alpha**: `number` = `1`

#### Inherited from

[Image](Image.md).[$alpha](Image.md#$alpha)

#### Defined in

[display/Layer.ts:29](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L29)

___

### $anchorX

• `Protected` **$anchorX**: `number` = `0`

#### Inherited from

[Image](Image.md).[$anchorX](Image.md#$anchorx)

#### Defined in

[display/Layer.ts:22](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L22)

___

### $anchorY

• `Protected` **$anchorY**: `number` = `0`

#### Inherited from

[Image](Image.md).[$anchorY](Image.md#$anchory)

#### Defined in

[display/Layer.ts:23](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L23)

___

### $background

• `Protected` **$background**: `string` = `null`

#### Inherited from

[Image](Image.md).[$background](Image.md#$background)

#### Defined in

[display/Layer.ts:32](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L32)

___

### $boundNextFrame

• `Protected` **$boundNextFrame**: `Function`

#### Defined in

[display/MovieClip.ts:14](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/MovieClip.ts#L14)

___

### $boundOnTextureLoad

• `Protected` `Readonly` **$boundOnTextureLoad**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[Image](Image.md).[$boundOnTextureLoad](Image.md#$boundontextureload)

#### Defined in

[display/Image.ts:18](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L18)

___

### $canvas

• `Protected` `Readonly` **$canvas**: `HTMLCanvasElement`

#### Inherited from

[Image](Image.md).[$canvas](Image.md#$canvas)

#### Defined in

[display/Layer.ts:39](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L39)

___

### $children

• `Protected` **$children**: [`Layer`](Layer.md)[] = `[]`

#### Inherited from

[Image](Image.md).[$children](Image.md#$children)

#### Defined in

[display/Layer.ts:35](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L35)

___

### $clipRect

• `Protected` **$clipRect**: [`Rectangle`](Rectangle.md) = `null`

#### Inherited from

[Image](Image.md).[$clipRect](Image.md#$cliprect)

#### Defined in

[display/Image.ts:15](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L15)

___

### $context

• `Protected` `Readonly` **$context**: `CanvasRenderingContext2D`

#### Inherited from

[Image](Image.md).[$context](Image.md#$context)

#### Defined in

[display/Layer.ts:40](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L40)

___

### $currentFrame

• `Protected` **$currentFrame**: `number` = `0`

#### Defined in

[display/MovieClip.ts:11](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/MovieClip.ts#L11)

___

### $dirty

• `Protected` **$dirty**: `boolean` = `true`

#### Inherited from

[Image](Image.md).[$dirty](Image.md#$dirty)

#### Defined in

[display/Layer.ts:36](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L36)

___

### $emittingType

• `Protected` **$emittingType**: `string` = `null`

#### Inherited from

[Image](Image.md).[$emittingType](Image.md#$emittingtype)

#### Defined in

[event/EventEmitter.ts:6](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L6)

___

### $events

• `Protected` **$events**: `Object` = `{}`

#### Inherited from

[Image](Image.md).[$events](Image.md#$events)

#### Defined in

[event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L5)

___

### $fillMode

• `Protected` **$fillMode**: [`FillMode`](../README.md#fillmode) = `Image.SCALE`

#### Inherited from

[Image](Image.md).[$fillMode](Image.md#$fillmode)

#### Defined in

[display/Image.ts:14](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L14)

___

### $frames

• `Protected` **$frames**: [`MovieClipFrame`](../interfaces/MovieClipFrame.md)[] = `null`

#### Defined in

[display/MovieClip.ts:12](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/MovieClip.ts#L12)

___

### $height

• `Protected` **$height**: `number` = `0`

#### Inherited from

[Image](Image.md).[$height](Image.md#$height)

#### Defined in

[display/Layer.ts:21](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L21)

___

### $interval

• `Protected` **$interval**: `number` = `30`

#### Defined in

[display/MovieClip.ts:9](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/MovieClip.ts#L9)

___

### $loop

• `Protected` **$loop**: `boolean` = `true`

#### Defined in

[display/MovieClip.ts:8](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/MovieClip.ts#L8)

___

### $parent

• `Protected` **$parent**: [`Layer`](Layer.md) = `null`

#### Inherited from

[Image](Image.md).[$parent](Image.md#$parent)

#### Defined in

[display/Layer.ts:34](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L34)

___

### $pattern

• `Protected` **$pattern**: `CanvasPattern` = `null`

#### Inherited from

[Image](Image.md).[$pattern](Image.md#$pattern)

#### Defined in

[display/Image.ts:17](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L17)

___

### $paused

• `Protected` **$paused**: `boolean` = `false`

#### Defined in

[display/MovieClip.ts:10](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/MovieClip.ts#L10)

___

### $removedListeners

• `Protected` **$removedListeners**: [`Listener`](../README.md#listener)[] = `[]`

#### Inherited from

[Image](Image.md).[$removedListeners](Image.md#$removedlisteners)

#### Defined in

[event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L7)

___

### $rotation

• `Protected` **$rotation**: `number` = `0`

#### Inherited from

[Image](Image.md).[$rotation](Image.md#$rotation)

#### Defined in

[display/Layer.ts:28](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L28)

___

### $scale9Grid

• `Protected` **$scale9Grid**: [`Rectangle`](Rectangle.md) = `null`

#### Inherited from

[Image](Image.md).[$scale9Grid](Image.md#$scale9grid)

#### Defined in

[display/Image.ts:16](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L16)

___

### $scaleX

• `Protected` **$scaleX**: `number` = `1`

#### Inherited from

[Image](Image.md).[$scaleX](Image.md#$scalex)

#### Defined in

[display/Layer.ts:26](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L26)

___

### $scaleY

• `Protected` **$scaleY**: `number` = `1`

#### Inherited from

[Image](Image.md).[$scaleY](Image.md#$scaley)

#### Defined in

[display/Layer.ts:27](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L27)

___

### $shouldEmitTap

• `Protected` **$shouldEmitTap**: `boolean` = `true`

#### Inherited from

[Image](Image.md).[$shouldEmitTap](Image.md#$shouldemittap)

#### Defined in

[display/Layer.ts:37](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L37)

___

### $skewX

• `Protected` **$skewX**: `number` = `0`

#### Inherited from

[Image](Image.md).[$skewX](Image.md#$skewx)

#### Defined in

[display/Layer.ts:24](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L24)

___

### $skewY

• `Protected` **$skewY**: `number` = `0`

#### Inherited from

[Image](Image.md).[$skewY](Image.md#$skewy)

#### Defined in

[display/Layer.ts:25](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L25)

___

### $smoothing

• `Protected` **$smoothing**: `boolean` = `true`

#### Inherited from

[Image](Image.md).[$smoothing](Image.md#$smoothing)

#### Defined in

[display/Layer.ts:31](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L31)

___

### $stage

• `Protected` **$stage**: [`Stage`](Stage.md) = `null`

#### Inherited from

[Image](Image.md).[$stage](Image.md#$stage)

#### Defined in

[display/Layer.ts:33](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L33)

___

### $texture

• `Protected` **$texture**: [`Texture`](Texture.md) = `null`

#### Inherited from

[Image](Image.md).[$texture](Image.md#$texture)

#### Defined in

[display/Image.ts:13](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L13)

___

### $timer

• `Protected` **$timer**: `number`

#### Defined in

[display/MovieClip.ts:13](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/MovieClip.ts#L13)

___

### $touches

• `Protected` **$touches**: `boolean`[] = `[]`

#### Inherited from

[Image](Image.md).[$touches](Image.md#$touches)

#### Defined in

[display/Layer.ts:38](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L38)

___

### $visible

• `Protected` **$visible**: `boolean` = `true`

#### Inherited from

[Image](Image.md).[$visible](Image.md#$visible)

#### Defined in

[display/Layer.ts:30](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L30)

___

### $width

• `Protected` **$width**: `number` = `0`

#### Inherited from

[Image](Image.md).[$width](Image.md#$width)

#### Defined in

[display/Layer.ts:20](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L20)

___

### $x

• `Protected` **$x**: `number` = `0`

#### Inherited from

[Image](Image.md).[$x](Image.md#$x)

#### Defined in

[display/Layer.ts:18](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L18)

___

### $y

• `Protected` **$y**: `number` = `0`

#### Inherited from

[Image](Image.md).[$y](Image.md#$y)

#### Defined in

[display/Layer.ts:19](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L19)

___

### name

• **name**: `string` = `''`

#### Inherited from

[Image](Image.md).[name](Image.md#name)

#### Defined in

[display/Layer.ts:14](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L14)

___

### tag

• **tag**: `string` = `''`

#### Inherited from

[Image](Image.md).[tag](Image.md#tag)

#### Defined in

[display/Layer.ts:15](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L15)

___

### touchable

• **touchable**: `boolean` = `true`

#### Inherited from

[Image](Image.md).[touchable](Image.md#touchable)

#### Defined in

[display/Layer.ts:16](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L16)

___

### REPEAT

▪ `Static` **REPEAT**: [`FillMode`](../README.md#fillmode) = `'repeat'`

#### Inherited from

[Image](Image.md).[REPEAT](Image.md#repeat)

#### Defined in

[display/Image.ts:9](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L9)

___

### REPEAT\_X

▪ `Static` **REPEAT\_X**: [`FillMode`](../README.md#fillmode) = `'repeat-x'`

#### Inherited from

[Image](Image.md).[REPEAT_X](Image.md#repeat_x)

#### Defined in

[display/Image.ts:10](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L10)

___

### REPEAT\_Y

▪ `Static` **REPEAT\_Y**: [`FillMode`](../README.md#fillmode) = `'repeat-y'`

#### Inherited from

[Image](Image.md).[REPEAT_Y](Image.md#repeat_y)

#### Defined in

[display/Image.ts:11](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L11)

___

### SCALE

▪ `Static` **SCALE**: [`FillMode`](../README.md#fillmode) = `'scale'`

#### Inherited from

[Image](Image.md).[SCALE](Image.md#scale)

#### Defined in

[display/Image.ts:8](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L8)

___

### pixelRatio

▪ `Static` **pixelRatio**: `number`

#### Inherited from

[Image](Image.md).[pixelRatio](Image.md#pixelratio)

#### Defined in

[display/Layer.ts:12](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L12)

## Accessors

### alpha

• `get` **alpha**(): `number`

#### Returns

`number`

#### Inherited from

Image.alpha

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

Image.alpha

#### Defined in

[display/Layer.ts:173](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L173)

___

### anchorX

• `get` **anchorX**(): `number`

#### Returns

`number`

#### Inherited from

Image.anchorX

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

Image.anchorX

#### Defined in

[display/Layer.ts:96](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L96)

___

### anchorY

• `get` **anchorY**(): `number`

#### Returns

`number`

#### Inherited from

Image.anchorY

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

Image.anchorY

#### Defined in

[display/Layer.ts:107](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L107)

___

### background

• `get` **background**(): `string`

#### Returns

`string`

#### Inherited from

Image.background

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

Image.background

#### Defined in

[display/Layer.ts:204](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L204)

___

### canvas

• `get` **canvas**(): `HTMLCanvasElement`

#### Returns

`HTMLCanvasElement`

#### Inherited from

Image.canvas

#### Defined in

[display/Layer.ts:227](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L227)

___

### clipRect

• `get` **clipRect**(): [`Rectangle`](Rectangle.md)

#### Returns

[`Rectangle`](Rectangle.md)

#### Inherited from

Image.clipRect

#### Defined in

[display/Image.ts:59](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L59)

• `set` **clipRect**(`clipRect`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clipRect` | [`Rectangle`](Rectangle.md) |

#### Returns

`void`

#### Inherited from

Image.clipRect

#### Defined in

[display/Image.ts:63](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L63)

___

### currentFrame

• `get` **currentFrame**(): `number`

#### Returns

`number`

#### Defined in

[display/MovieClip.ts:43](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/MovieClip.ts#L43)

___

### fillMode

• `get` **fillMode**(): [`FillMode`](../README.md#fillmode)

#### Returns

[`FillMode`](../README.md#fillmode)

#### Inherited from

Image.fillMode

#### Defined in

[display/Image.ts:49](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L49)

• `set` **fillMode**(`fillMode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fillMode` | [`FillMode`](../README.md#fillmode) |

#### Returns

`void`

#### Inherited from

Image.fillMode

#### Defined in

[display/Image.ts:53](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L53)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

Image.height

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

Image.height

#### Defined in

[display/Layer.ts:85](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L85)

___

### interval

• `get` **interval**(): `number`

#### Returns

`number`

#### Defined in

[display/MovieClip.ts:31](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/MovieClip.ts#L31)

• `set` **interval**(`interval`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | `number` |

#### Returns

`void`

#### Defined in

[display/MovieClip.ts:35](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/MovieClip.ts#L35)

___

### loop

• `get` **loop**(): `boolean`

#### Returns

`boolean`

#### Defined in

[display/MovieClip.ts:23](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/MovieClip.ts#L23)

• `set` **loop**(`loop`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `loop` | `boolean` |

#### Returns

`void`

#### Defined in

[display/MovieClip.ts:27](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/MovieClip.ts#L27)

___

### numChildren

• `get` **numChildren**(): `number`

#### Returns

`number`

#### Inherited from

Image.numChildren

#### Defined in

[display/Layer.ts:219](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L219)

___

### parent

• `get` **parent**(): [`Layer`](Layer.md)

#### Returns

[`Layer`](Layer.md)

#### Inherited from

Image.parent

#### Defined in

[display/Layer.ts:215](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L215)

___

### paused

• `get` **paused**(): `boolean`

#### Returns

`boolean`

#### Defined in

[display/MovieClip.ts:39](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/MovieClip.ts#L39)

___

### rotation

• `get` **rotation**(): `number`

#### Returns

`number`

#### Inherited from

Image.rotation

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

Image.rotation

#### Defined in

[display/Layer.ts:162](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L162)

___

### scale9Grid

• `get` **scale9Grid**(): [`Rectangle`](Rectangle.md)

#### Returns

[`Rectangle`](Rectangle.md)

#### Inherited from

Image.scale9Grid

#### Defined in

[display/Image.ts:68](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L68)

• `set` **scale9Grid**(`scale9Grid`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scale9Grid` | [`Rectangle`](Rectangle.md) |

#### Returns

`void`

#### Inherited from

Image.scale9Grid

#### Defined in

[display/Image.ts:72](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L72)

___

### scaleX

• `get` **scaleX**(): `number`

#### Returns

`number`

#### Inherited from

Image.scaleX

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

Image.scaleX

#### Defined in

[display/Layer.ts:140](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L140)

___

### scaleY

• `get` **scaleY**(): `number`

#### Returns

`number`

#### Inherited from

Image.scaleY

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

Image.scaleY

#### Defined in

[display/Layer.ts:151](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L151)

___

### skewX

• `get` **skewX**(): `number`

#### Returns

`number`

#### Inherited from

Image.skewX

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

Image.skewX

#### Defined in

[display/Layer.ts:118](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L118)

___

### skewY

• `get` **skewY**(): `number`

#### Returns

`number`

#### Inherited from

Image.skewY

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

Image.skewY

#### Defined in

[display/Layer.ts:129](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L129)

___

### smoothing

• `get` **smoothing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Image.smoothing

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

Image.smoothing

#### Defined in

[display/Layer.ts:195](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L195)

___

### stage

• `get` **stage**(): [`Stage`](Stage.md)

#### Returns

[`Stage`](Stage.md)

#### Inherited from

Image.stage

#### Defined in

[display/Layer.ts:211](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L211)

___

### texture

• `get` **texture**(): [`Texture`](Texture.md)

#### Returns

[`Texture`](Texture.md)

#### Inherited from

Image.texture

#### Defined in

[display/Image.ts:32](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L32)

• `set` **texture**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

Image.texture

#### Defined in

[display/Image.ts:36](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L36)

___

### ticker

• `get` **ticker**(): [`Ticker`](Ticker.md)

#### Returns

[`Ticker`](Ticker.md)

#### Inherited from

Image.ticker

#### Defined in

[display/Layer.ts:223](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L223)

___

### totalFrames

• `get` **totalFrames**(): `number`

#### Returns

`number`

#### Defined in

[display/MovieClip.ts:47](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/MovieClip.ts#L47)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Image.visible

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

Image.visible

#### Defined in

[display/Layer.ts:184](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L184)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

Image.width

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

Image.width

#### Defined in

[display/Layer.ts:74](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L74)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

Image.x

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

Image.x

#### Defined in

[display/Layer.ts:52](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L52)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

Image.y

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

Image.y

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

[Image](Image.md).[$drawChild](Image.md#$drawchild)

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

#### Inherited from

[Image](Image.md).[$drawPattern](Image.md#$drawpattern)

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

#### Inherited from

[Image](Image.md).[$drawTexture](Image.md#$drawtexture)

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

[Image](Image.md).[$emitAdded](Image.md#$emitadded)

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

[Image](Image.md).[$emitAddedToStage](Image.md#$emitaddedtostage)

#### Defined in

[display/Layer.ts:561](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L561)

___

### $emitRemoved

▸ `Protected` **$emitRemoved**(): `void`

#### Returns

`void`

#### Inherited from

[Image](Image.md).[$emitRemoved](Image.md#$emitremoved)

#### Defined in

[display/Layer.ts:552](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L552)

___

### $emitRemovedFromStage

▸ `Protected` **$emitRemovedFromStage**(): `void`

#### Returns

`void`

#### Inherited from

[Image](Image.md).[$emitRemovedFromStage](Image.md#$emitremovedfromstage)

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

[Image](Image.md).[$emitTouchEvent](Image.md#$emittouchevent)

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

[Image](Image.md).[$getChildBounds](Image.md#$getchildbounds)

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

[Image](Image.md).[$getChildTransform](Image.md#$getchildtransform)

#### Defined in

[display/Layer.ts:445](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L445)

___

### $getContentBounds

▸ `Protected` **$getContentBounds**(): [`Rectangle`](Rectangle.md)

#### Returns

[`Rectangle`](Rectangle.md)

#### Inherited from

[Image](Image.md).[$getContentBounds](Image.md#$getcontentbounds)

#### Defined in

[display/Image.ts:95](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L95)

___

### $getTransform

▸ `Protected` **$getTransform**(): [`Matrix`](Matrix.md)

#### Returns

[`Matrix`](Matrix.md)

#### Inherited from

[Image](Image.md).[$getTransform](Image.md#$gettransform)

#### Defined in

[display/Layer.ts:434](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L434)

___

### $gotoFrame

▸ `Protected` **$gotoFrame**(`frame`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `frame` | `number` |

#### Returns

`void`

#### Defined in

[display/MovieClip.ts:98](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/MovieClip.ts#L98)

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

[Image](Image.md).[$isChildVisible](Image.md#$ischildvisible)

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

[Image](Image.md).[$localHitTest](Image.md#$localhittest)

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

[Image](Image.md).[$markDirty](Image.md#$markdirty)

#### Defined in

[display/Layer.ts:389](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L389)

___

### $markParentDirty

▸ `Protected` **$markParentDirty**(): `void`

#### Returns

`void`

#### Inherited from

[Image](Image.md).[$markParentDirty](Image.md#$markparentdirty)

#### Defined in

[display/Layer.ts:398](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L398)

___

### $onTextureLoad

▸ `Protected` **$onTextureLoad**(): `void`

#### Returns

`void`

#### Inherited from

[Image](Image.md).[$onTextureLoad](Image.md#$ontextureload)

#### Defined in

[display/Image.ts:77](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L77)

___

### $render

▸ `Protected` **$render**(): `number`

#### Returns

`number`

#### Inherited from

[Image](Image.md).[$render](Image.md#$render)

#### Defined in

[display/Image.ts:133](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L133)

___

### $resizeCanvas

▸ `Protected` **$resizeCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[Image](Image.md).[$resizeCanvas](Image.md#$resizecanvas)

#### Defined in

[display/Layer.ts:404](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L404)

___

### $resizeParentCanvas

▸ `Protected` **$resizeParentCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[Image](Image.md).[$resizeParentCanvas](Image.md#$resizeparentcanvas)

#### Defined in

[display/Layer.ts:428](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L428)

___

### $updatePattern

▸ `Protected` **$updatePattern**(): `void`

#### Returns

`void`

#### Inherited from

[Image](Image.md).[$updatePattern](Image.md#$updatepattern)

#### Defined in

[display/Image.ts:83](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L83)

___

### addChild

▸ **addChild**(`child`): [`MovieClip`](MovieClip.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](Layer.md) |

#### Returns

[`MovieClip`](MovieClip.md)

#### Inherited from

[Image](Image.md).[addChild](Image.md#addchild)

#### Defined in

[display/Layer.ts:231](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L231)

___

### addChildAt

▸ **addChildAt**(`child`, `index`): [`MovieClip`](MovieClip.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](Layer.md) |
| `index` | `number` |

#### Returns

[`MovieClip`](MovieClip.md)

#### Inherited from

[Image](Image.md).[addChildAt](Image.md#addchildat)

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

[Image](Image.md).[emit](Image.md#emit)

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

[Image](Image.md).[emit](Image.md#emit)

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

[Image](Image.md).[getChildAt](Image.md#getchildat)

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

[Image](Image.md).[getChildByName](Image.md#getchildbyname)

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

[Image](Image.md).[getChildIndex](Image.md#getchildindex)

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

[Image](Image.md).[getChildrenByTag](Image.md#getchildrenbytag)

#### Defined in

[display/Layer.ts:266](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L266)

___

### gotoAndPlay

▸ **gotoAndPlay**(`frame`): [`MovieClip`](MovieClip.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `frame` | `number` |

#### Returns

[`MovieClip`](MovieClip.md)

#### Defined in

[display/MovieClip.ts:70](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/MovieClip.ts#L70)

___

### gotoAndStop

▸ **gotoAndStop**(`frame`): [`MovieClip`](MovieClip.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `frame` | `number` |

#### Returns

[`MovieClip`](MovieClip.md)

#### Defined in

[display/MovieClip.ts:92](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/MovieClip.ts#L92)

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

[Image](Image.md).[hasChild](Image.md#haschild)

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

[Image](Image.md).[hasEventListener](Image.md#haseventlistener)

#### Defined in

[event/EventEmitter.ts:80](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L80)

___

### nextFrame

▸ **nextFrame**(): [`MovieClip`](MovieClip.md)

#### Returns

[`MovieClip`](MovieClip.md)

#### Defined in

[display/MovieClip.ts:66](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/MovieClip.ts#L66)

___

### off

▸ **off**(`type`, `listener?`): [`MovieClip`](MovieClip.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener?` | (...`args`: `any`[]) => `void` |

#### Returns

[`MovieClip`](MovieClip.md)

#### Inherited from

[Image](Image.md).[off](Image.md#off)

#### Defined in

[display/Layer.ts:684](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L684)

___

### on

▸ **on**(`type`, `listener`): [`MovieClip`](MovieClip.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`MovieClip`](MovieClip.md)

#### Inherited from

[Image](Image.md).[on](Image.md#on)

#### Defined in

[display/Layer.ts:668](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L668)

___

### once

▸ **once**(`type`, `listener`): [`MovieClip`](MovieClip.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`Listener`](../README.md#listener) |

#### Returns

[`MovieClip`](MovieClip.md)

#### Inherited from

[Image](Image.md).[once](Image.md#once)

#### Defined in

[event/EventEmitter.ts:33](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L33)

___

### pause

▸ **pause**(): [`MovieClip`](MovieClip.md)

#### Returns

[`MovieClip`](MovieClip.md)

#### Defined in

[display/MovieClip.ts:56](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/MovieClip.ts#L56)

___

### play

▸ **play**(): [`MovieClip`](MovieClip.md)

#### Returns

[`MovieClip`](MovieClip.md)

#### Defined in

[display/MovieClip.ts:51](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/MovieClip.ts#L51)

___

### removeAllChildren

▸ **removeAllChildren**(): [`MovieClip`](MovieClip.md)

#### Returns

[`MovieClip`](MovieClip.md)

#### Inherited from

[Image](Image.md).[removeAllChildren](Image.md#removeallchildren)

#### Defined in

[display/Layer.ts:372](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L372)

___

### removeAllListeners

▸ **removeAllListeners**(): [`MovieClip`](MovieClip.md)

#### Returns

[`MovieClip`](MovieClip.md)

#### Inherited from

[Image](Image.md).[removeAllListeners](Image.md#removealllisteners)

#### Defined in

[event/EventEmitter.ts:85](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L85)

___

### removeChild

▸ **removeChild**(`child`): [`MovieClip`](MovieClip.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](Layer.md) |

#### Returns

[`MovieClip`](MovieClip.md)

#### Inherited from

[Image](Image.md).[removeChild](Image.md#removechild)

#### Defined in

[display/Layer.ts:333](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L333)

___

### removeChildAt

▸ **removeChildAt**(`index`): [`MovieClip`](MovieClip.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`MovieClip`](MovieClip.md)

#### Inherited from

[Image](Image.md).[removeChildAt](Image.md#removechildat)

#### Defined in

[display/Layer.ts:338](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L338)

___

### removeChildByName

▸ **removeChildByName**(`name`): [`MovieClip`](MovieClip.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`MovieClip`](MovieClip.md)

#### Inherited from

[Image](Image.md).[removeChildByName](Image.md#removechildbyname)

#### Defined in

[display/Layer.ts:349](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L349)

___

### removeChildrenByTag

▸ **removeChildrenByTag**(`tag`): [`MovieClip`](MovieClip.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |

#### Returns

[`MovieClip`](MovieClip.md)

#### Inherited from

[Image](Image.md).[removeChildrenByTag](Image.md#removechildrenbytag)

#### Defined in

[display/Layer.ts:361](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L361)

___

### removeSelf

▸ **removeSelf**(): [`MovieClip`](MovieClip.md)

#### Returns

[`MovieClip`](MovieClip.md)

#### Inherited from

[Image](Image.md).[removeSelf](Image.md#removeself)

#### Defined in

[display/Layer.ts:382](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L382)

___

### replaceChild

▸ **replaceChild**(`oldChild`, `newChild`): [`MovieClip`](MovieClip.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldChild` | [`Layer`](Layer.md) |
| `newChild` | [`Layer`](Layer.md) |

#### Returns

[`MovieClip`](MovieClip.md)

#### Inherited from

[Image](Image.md).[replaceChild](Image.md#replacechild)

#### Defined in

[display/Layer.ts:249](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L249)

___

### setChildIndex

▸ **setChildIndex**(`child`, `index`): [`MovieClip`](MovieClip.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](Layer.md) |
| `index` | `number` |

#### Returns

[`MovieClip`](MovieClip.md)

#### Inherited from

[Image](Image.md).[setChildIndex](Image.md#setchildindex)

#### Defined in

[display/Layer.ts:309](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L309)

___

### swapChildren

▸ **swapChildren**(`child1`, `child2`): [`MovieClip`](MovieClip.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child1` | [`Layer`](Layer.md) |
| `child2` | [`Layer`](Layer.md) |

#### Returns

[`MovieClip`](MovieClip.md)

#### Inherited from

[Image](Image.md).[swapChildren](Image.md#swapchildren)

#### Defined in

[display/Layer.ts:289](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L289)

___

### swapChildrenAt

▸ **swapChildrenAt**(`index1`, `index2`): [`MovieClip`](MovieClip.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index1` | `number` |
| `index2` | `number` |

#### Returns

[`MovieClip`](MovieClip.md)

#### Inherited from

[Image](Image.md).[swapChildrenAt](Image.md#swapchildrenat)

#### Defined in

[display/Layer.ts:298](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Layer.ts#L298)
