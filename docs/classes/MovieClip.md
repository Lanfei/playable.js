[API Reference](../README.md) / MovieClip

# Class: MovieClip

## Hierarchy

- [`Image`](../README.md#image)

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
| `texture` | [`Texture`](../README.md#texture) |
| `frames` | [`MovieClipFrame`](../interfaces/MovieClipFrame.md)[] |

#### Overrides

[Image](../README.md#image).[constructor](../README.md#constructor)

#### Defined in

[display/MovieClip.ts:16](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/MovieClip.ts#L16)

## Properties

### $alpha

• `Protected` **$alpha**: `number` = `1`

#### Inherited from

[Image](../README.md#image).[$alpha](../README.md#$alpha)

#### Defined in

[display/Layer.ts:29](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L29)

___

### $anchorX

• `Protected` **$anchorX**: `number` = `0`

#### Inherited from

[Image](../README.md#image).[$anchorX](../README.md#$anchorx)

#### Defined in

[display/Layer.ts:22](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L22)

___

### $anchorY

• `Protected` **$anchorY**: `number` = `0`

#### Inherited from

[Image](../README.md#image).[$anchorY](../README.md#$anchory)

#### Defined in

[display/Layer.ts:23](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L23)

___

### $background

• `Protected` **$background**: `string` = `null`

#### Inherited from

[Image](../README.md#image).[$background](../README.md#$background)

#### Defined in

[display/Layer.ts:32](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L32)

___

### $boundNextFrame

• `Protected` **$boundNextFrame**: `Function`

#### Defined in

[display/MovieClip.ts:14](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/MovieClip.ts#L14)

___

### $boundOnTextureLoad

• `Protected` `Readonly` **$boundOnTextureLoad**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[Image](../README.md#image).[$boundOnTextureLoad](../README.md#$boundontextureload)

#### Defined in

[display/Image.ts:18](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L18)

___

### $canvas

• `Protected` `Readonly` **$canvas**: `HTMLCanvasElement`

#### Inherited from

[Image](../README.md#image).[$canvas](../README.md#$canvas)

#### Defined in

[display/Layer.ts:39](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L39)

___

### $children

• `Protected` **$children**: [`Layer`](../README.md#layer)[] = `[]`

#### Inherited from

[Image](../README.md#image).[$children](../README.md#$children)

#### Defined in

[display/Layer.ts:35](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L35)

___

### $clipRect

• `Protected` **$clipRect**: [`Rectangle`](../README.md#rectangle) = `null`

#### Inherited from

[Image](../README.md#image).[$clipRect](../README.md#$cliprect)

#### Defined in

[display/Image.ts:15](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L15)

___

### $context

• `Protected` `Readonly` **$context**: `CanvasRenderingContext2D`

#### Inherited from

[Image](../README.md#image).[$context](../README.md#$context)

#### Defined in

[display/Layer.ts:40](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L40)

___

### $currentFrame

• `Protected` **$currentFrame**: `number` = `0`

#### Defined in

[display/MovieClip.ts:11](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/MovieClip.ts#L11)

___

### $dirty

• `Protected` **$dirty**: `boolean` = `true`

#### Inherited from

[Image](../README.md#image).[$dirty](../README.md#$dirty)

#### Defined in

[display/Layer.ts:36](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L36)

___

### $emittingType

• `Protected` **$emittingType**: `string` = `null`

#### Inherited from

[Image](../README.md#image).[$emittingType](../README.md#$emittingtype)

#### Defined in

[event/EventEmitter.ts:6](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L6)

___

### $events

• `Protected` **$events**: `Object` = `{}`

#### Inherited from

[Image](../README.md#image).[$events](../README.md#$events)

#### Defined in

[event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L5)

___

### $fillMode

• `Protected` **$fillMode**: [`FillMode`](../README.md#fillmode) = `Image.SCALE`

#### Inherited from

[Image](../README.md#image).[$fillMode](../README.md#$fillmode)

#### Defined in

[display/Image.ts:14](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L14)

___

### $frames

• `Protected` **$frames**: [`MovieClipFrame`](../interfaces/MovieClipFrame.md)[] = `null`

#### Defined in

[display/MovieClip.ts:12](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/MovieClip.ts#L12)

___

### $height

• `Protected` **$height**: `number` = `0`

#### Inherited from

[Image](../README.md#image).[$height](../README.md#$height)

#### Defined in

[display/Layer.ts:21](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L21)

___

### $interval

• `Protected` **$interval**: `number` = `30`

#### Defined in

[display/MovieClip.ts:9](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/MovieClip.ts#L9)

___

### $loop

• `Protected` **$loop**: `boolean` = `true`

#### Defined in

[display/MovieClip.ts:8](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/MovieClip.ts#L8)

___

### $parent

• `Protected` **$parent**: [`Layer`](../README.md#layer) = `null`

#### Inherited from

[Image](../README.md#image).[$parent](../README.md#$parent)

#### Defined in

[display/Layer.ts:34](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L34)

___

### $pattern

• `Protected` **$pattern**: `CanvasPattern` = `null`

#### Inherited from

[Image](../README.md#image).[$pattern](../README.md#$pattern)

#### Defined in

[display/Image.ts:17](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L17)

___

### $paused

• `Protected` **$paused**: `boolean` = `false`

#### Defined in

[display/MovieClip.ts:10](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/MovieClip.ts#L10)

___

### $removedListeners

• `Protected` **$removedListeners**: [`Listener`](../README.md#listener)[] = `[]`

#### Inherited from

[Image](../README.md#image).[$removedListeners](../README.md#$removedlisteners)

#### Defined in

[event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L7)

___

### $rotation

• `Protected` **$rotation**: `number` = `0`

#### Inherited from

[Image](../README.md#image).[$rotation](../README.md#$rotation)

#### Defined in

[display/Layer.ts:28](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L28)

___

### $scale9Grid

• `Protected` **$scale9Grid**: [`Rectangle`](../README.md#rectangle) = `null`

#### Inherited from

[Image](../README.md#image).[$scale9Grid](../README.md#$scale9grid)

#### Defined in

[display/Image.ts:16](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L16)

___

### $scaleX

• `Protected` **$scaleX**: `number` = `1`

#### Inherited from

[Image](../README.md#image).[$scaleX](../README.md#$scalex)

#### Defined in

[display/Layer.ts:26](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L26)

___

### $scaleY

• `Protected` **$scaleY**: `number` = `1`

#### Inherited from

[Image](../README.md#image).[$scaleY](../README.md#$scaley)

#### Defined in

[display/Layer.ts:27](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L27)

___

### $shouldEmitTap

• `Protected` **$shouldEmitTap**: `boolean` = `true`

#### Inherited from

[Image](../README.md#image).[$shouldEmitTap](../README.md#$shouldemittap)

#### Defined in

[display/Layer.ts:37](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L37)

___

### $skewX

• `Protected` **$skewX**: `number` = `0`

#### Inherited from

[Image](../README.md#image).[$skewX](../README.md#$skewx)

#### Defined in

[display/Layer.ts:24](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L24)

___

### $skewY

• `Protected` **$skewY**: `number` = `0`

#### Inherited from

[Image](../README.md#image).[$skewY](../README.md#$skewy)

#### Defined in

[display/Layer.ts:25](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L25)

___

### $smoothing

• `Protected` **$smoothing**: `boolean` = `true`

#### Inherited from

[Image](../README.md#image).[$smoothing](../README.md#$smoothing)

#### Defined in

[display/Layer.ts:31](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L31)

___

### $stage

• `Protected` **$stage**: [`Stage`](../README.md#stage) = `null`

#### Inherited from

[Image](../README.md#image).[$stage](../README.md#$stage)

#### Defined in

[display/Layer.ts:33](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L33)

___

### $texture

• `Protected` **$texture**: [`Texture`](../README.md#texture) = `null`

#### Inherited from

[Image](../README.md#image).[$texture](../README.md#$texture)

#### Defined in

[display/Image.ts:13](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L13)

___

### $timer

• `Protected` **$timer**: `number`

#### Defined in

[display/MovieClip.ts:13](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/MovieClip.ts#L13)

___

### $touches

• `Protected` **$touches**: `boolean`[] = `[]`

#### Inherited from

[Image](../README.md#image).[$touches](../README.md#$touches)

#### Defined in

[display/Layer.ts:38](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L38)

___

### $visible

• `Protected` **$visible**: `boolean` = `true`

#### Inherited from

[Image](../README.md#image).[$visible](../README.md#$visible)

#### Defined in

[display/Layer.ts:30](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L30)

___

### $width

• `Protected` **$width**: `number` = `0`

#### Inherited from

[Image](../README.md#image).[$width](../README.md#$width)

#### Defined in

[display/Layer.ts:20](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L20)

___

### $x

• `Protected` **$x**: `number` = `0`

#### Inherited from

[Image](../README.md#image).[$x](../README.md#$x)

#### Defined in

[display/Layer.ts:18](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L18)

___

### $y

• `Protected` **$y**: `number` = `0`

#### Inherited from

[Image](../README.md#image).[$y](../README.md#$y)

#### Defined in

[display/Layer.ts:19](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L19)

___

### name

• **name**: `string` = `''`

#### Inherited from

[Image](../README.md#image).[name](../README.md#name)

#### Defined in

[display/Layer.ts:14](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L14)

___

### tag

• **tag**: `string` = `''`

#### Inherited from

[Image](../README.md#image).[tag](../README.md#tag)

#### Defined in

[display/Layer.ts:15](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L15)

___

### touchable

• **touchable**: `boolean` = `true`

#### Inherited from

[Image](../README.md#image).[touchable](../README.md#touchable)

#### Defined in

[display/Layer.ts:16](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L16)

___

### REPEAT

▪ `Static` **REPEAT**: [`FillMode`](../README.md#fillmode) = `'repeat'`

#### Inherited from

[Image](../README.md#image).[REPEAT](../README.md#repeat)

#### Defined in

[display/Image.ts:9](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L9)

___

### REPEAT\_X

▪ `Static` **REPEAT\_X**: [`FillMode`](../README.md#fillmode) = `'repeat-x'`

#### Inherited from

[Image](../README.md#image).[REPEAT_X](../README.md#repeat_x)

#### Defined in

[display/Image.ts:10](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L10)

___

### REPEAT\_Y

▪ `Static` **REPEAT\_Y**: [`FillMode`](../README.md#fillmode) = `'repeat-y'`

#### Inherited from

[Image](../README.md#image).[REPEAT_Y](../README.md#repeat_y)

#### Defined in

[display/Image.ts:11](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L11)

___

### SCALE

▪ `Static` **SCALE**: [`FillMode`](../README.md#fillmode) = `'scale'`

#### Inherited from

[Image](../README.md#image).[SCALE](../README.md#scale)

#### Defined in

[display/Image.ts:8](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L8)

___

### pixelRatio

▪ `Static` **pixelRatio**: `number`

#### Inherited from

[Image](../README.md#image).[pixelRatio](../README.md#pixelratio)

#### Defined in

[display/Layer.ts:12](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L12)

## Accessors

### alpha

• `get` **alpha**(): `number`

#### Returns

`number`

#### Inherited from

Image.alpha

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

Image.alpha

#### Defined in

[display/Layer.ts:173](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L173)

___

### anchorX

• `get` **anchorX**(): `number`

#### Returns

`number`

#### Inherited from

Image.anchorX

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

Image.anchorX

#### Defined in

[display/Layer.ts:96](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L96)

___

### anchorY

• `get` **anchorY**(): `number`

#### Returns

`number`

#### Inherited from

Image.anchorY

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

Image.anchorY

#### Defined in

[display/Layer.ts:107](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L107)

___

### background

• `get` **background**(): `string`

#### Returns

`string`

#### Inherited from

Image.background

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

Image.background

#### Defined in

[display/Layer.ts:204](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L204)

___

### canvas

• `get` **canvas**(): `HTMLCanvasElement`

#### Returns

`HTMLCanvasElement`

#### Inherited from

Image.canvas

#### Defined in

[display/Layer.ts:227](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L227)

___

### clipRect

• `get` **clipRect**(): [`Rectangle`](../README.md#rectangle)

#### Returns

[`Rectangle`](../README.md#rectangle)

#### Inherited from

Image.clipRect

#### Defined in

[display/Image.ts:59](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L59)

• `set` **clipRect**(`clipRect`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clipRect` | [`Rectangle`](../README.md#rectangle) |

#### Returns

`void`

#### Inherited from

Image.clipRect

#### Defined in

[display/Image.ts:63](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L63)

___

### currentFrame

• `get` **currentFrame**(): `number`

#### Returns

`number`

#### Defined in

[display/MovieClip.ts:43](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/MovieClip.ts#L43)

___

### fillMode

• `get` **fillMode**(): [`FillMode`](../README.md#fillmode)

#### Returns

[`FillMode`](../README.md#fillmode)

#### Inherited from

Image.fillMode

#### Defined in

[display/Image.ts:49](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L49)

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

[display/Image.ts:53](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L53)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

Image.height

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

Image.height

#### Defined in

[display/Layer.ts:85](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L85)

___

### interval

• `get` **interval**(): `number`

#### Returns

`number`

#### Defined in

[display/MovieClip.ts:31](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/MovieClip.ts#L31)

• `set` **interval**(`interval`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | `number` |

#### Returns

`void`

#### Defined in

[display/MovieClip.ts:35](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/MovieClip.ts#L35)

___

### loop

• `get` **loop**(): `boolean`

#### Returns

`boolean`

#### Defined in

[display/MovieClip.ts:23](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/MovieClip.ts#L23)

• `set` **loop**(`loop`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `loop` | `boolean` |

#### Returns

`void`

#### Defined in

[display/MovieClip.ts:27](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/MovieClip.ts#L27)

___

### numChildren

• `get` **numChildren**(): `number`

#### Returns

`number`

#### Inherited from

Image.numChildren

#### Defined in

[display/Layer.ts:219](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L219)

___

### parent

• `get` **parent**(): [`Layer`](../README.md#layer)

#### Returns

[`Layer`](../README.md#layer)

#### Inherited from

Image.parent

#### Defined in

[display/Layer.ts:215](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L215)

___

### paused

• `get` **paused**(): `boolean`

#### Returns

`boolean`

#### Defined in

[display/MovieClip.ts:39](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/MovieClip.ts#L39)

___

### rotation

• `get` **rotation**(): `number`

#### Returns

`number`

#### Inherited from

Image.rotation

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

Image.rotation

#### Defined in

[display/Layer.ts:162](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L162)

___

### scale9Grid

• `get` **scale9Grid**(): [`Rectangle`](../README.md#rectangle)

#### Returns

[`Rectangle`](../README.md#rectangle)

#### Inherited from

Image.scale9Grid

#### Defined in

[display/Image.ts:68](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L68)

• `set` **scale9Grid**(`scale9Grid`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scale9Grid` | [`Rectangle`](../README.md#rectangle) |

#### Returns

`void`

#### Inherited from

Image.scale9Grid

#### Defined in

[display/Image.ts:72](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L72)

___

### scaleX

• `get` **scaleX**(): `number`

#### Returns

`number`

#### Inherited from

Image.scaleX

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

Image.scaleX

#### Defined in

[display/Layer.ts:140](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L140)

___

### scaleY

• `get` **scaleY**(): `number`

#### Returns

`number`

#### Inherited from

Image.scaleY

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

Image.scaleY

#### Defined in

[display/Layer.ts:151](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L151)

___

### skewX

• `get` **skewX**(): `number`

#### Returns

`number`

#### Inherited from

Image.skewX

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

Image.skewX

#### Defined in

[display/Layer.ts:118](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L118)

___

### skewY

• `get` **skewY**(): `number`

#### Returns

`number`

#### Inherited from

Image.skewY

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

Image.skewY

#### Defined in

[display/Layer.ts:129](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L129)

___

### smoothing

• `get` **smoothing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Image.smoothing

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

Image.smoothing

#### Defined in

[display/Layer.ts:195](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L195)

___

### stage

• `get` **stage**(): [`Stage`](../README.md#stage)

#### Returns

[`Stage`](../README.md#stage)

#### Inherited from

Image.stage

#### Defined in

[display/Layer.ts:211](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L211)

___

### texture

• `get` **texture**(): [`Texture`](../README.md#texture)

#### Returns

[`Texture`](../README.md#texture)

#### Inherited from

Image.texture

#### Defined in

[display/Image.ts:32](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L32)

• `set` **texture**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](../README.md#texture) |

#### Returns

`void`

#### Inherited from

Image.texture

#### Defined in

[display/Image.ts:36](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L36)

___

### ticker

• `get` **ticker**(): [`Ticker`](../README.md#ticker)

#### Returns

[`Ticker`](../README.md#ticker)

#### Inherited from

Image.ticker

#### Defined in

[display/Layer.ts:223](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L223)

___

### totalFrames

• `get` **totalFrames**(): `number`

#### Returns

`number`

#### Defined in

[display/MovieClip.ts:47](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/MovieClip.ts#L47)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Image.visible

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

Image.visible

#### Defined in

[display/Layer.ts:184](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L184)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

Image.width

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

Image.width

#### Defined in

[display/Layer.ts:74](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L74)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

Image.x

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

Image.x

#### Defined in

[display/Layer.ts:52](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L52)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

Image.y

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

Image.y

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

[Image](../README.md#image).[$drawChild](../README.md#$drawchild)

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

#### Inherited from

[Image](../README.md#image).[$drawPattern](../README.md#$drawpattern)

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

#### Inherited from

[Image](../README.md#image).[$drawTexture](../README.md#$drawtexture)

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

[Image](../README.md#image).[$emitAdded](../README.md#$emitadded)

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

[Image](../README.md#image).[$emitAddedToStage](../README.md#$emitaddedtostage)

#### Defined in

[display/Layer.ts:561](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L561)

___

### $emitRemoved

▸ `Protected` **$emitRemoved**(): `void`

#### Returns

`void`

#### Inherited from

[Image](../README.md#image).[$emitRemoved](../README.md#$emitremoved)

#### Defined in

[display/Layer.ts:552](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L552)

___

### $emitRemovedFromStage

▸ `Protected` **$emitRemovedFromStage**(): `void`

#### Returns

`void`

#### Inherited from

[Image](../README.md#image).[$emitRemovedFromStage](../README.md#$emitremovedfromstage)

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

[Image](../README.md#image).[$emitTouchEvent](../README.md#$emittouchevent)

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

[Image](../README.md#image).[$getChildBounds](../README.md#$getchildbounds)

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

[Image](../README.md#image).[$getChildTransform](../README.md#$getchildtransform)

#### Defined in

[display/Layer.ts:445](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L445)

___

### $getContentBounds

▸ `Protected` **$getContentBounds**(): [`Rectangle`](../README.md#rectangle)

#### Returns

[`Rectangle`](../README.md#rectangle)

#### Inherited from

[Image](../README.md#image).[$getContentBounds](../README.md#$getcontentbounds)

#### Defined in

[display/Image.ts:95](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L95)

___

### $getTransform

▸ `Protected` **$getTransform**(): [`Matrix`](../README.md#matrix)

#### Returns

[`Matrix`](../README.md#matrix)

#### Inherited from

[Image](../README.md#image).[$getTransform](../README.md#$gettransform)

#### Defined in

[display/Layer.ts:434](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L434)

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

[display/MovieClip.ts:98](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/MovieClip.ts#L98)

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

[Image](../README.md#image).[$isChildVisible](../README.md#$ischildvisible)

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

[Image](../README.md#image).[$localHitTest](../README.md#$localhittest)

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

[Image](../README.md#image).[$markDirty](../README.md#$markdirty)

#### Defined in

[display/Layer.ts:389](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L389)

___

### $markParentDirty

▸ `Protected` **$markParentDirty**(): `void`

#### Returns

`void`

#### Inherited from

[Image](../README.md#image).[$markParentDirty](../README.md#$markparentdirty)

#### Defined in

[display/Layer.ts:398](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L398)

___

### $onTextureLoad

▸ `Protected` **$onTextureLoad**(): `void`

#### Returns

`void`

#### Inherited from

[Image](../README.md#image).[$onTextureLoad](../README.md#$ontextureload)

#### Defined in

[display/Image.ts:77](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L77)

___

### $render

▸ `Protected` **$render**(): `number`

#### Returns

`number`

#### Inherited from

[Image](../README.md#image).[$render](../README.md#$render)

#### Defined in

[display/Image.ts:133](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L133)

___

### $resizeCanvas

▸ `Protected` **$resizeCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[Image](../README.md#image).[$resizeCanvas](../README.md#$resizecanvas)

#### Defined in

[display/Layer.ts:404](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L404)

___

### $resizeParentCanvas

▸ `Protected` **$resizeParentCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[Image](../README.md#image).[$resizeParentCanvas](../README.md#$resizeparentcanvas)

#### Defined in

[display/Layer.ts:428](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L428)

___

### $updatePattern

▸ `Protected` **$updatePattern**(): `void`

#### Returns

`void`

#### Inherited from

[Image](../README.md#image).[$updatePattern](../README.md#$updatepattern)

#### Defined in

[display/Image.ts:83](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Image.ts#L83)

___

### addChild

▸ **addChild**(`child`): [`MovieClip`](../README.md#movieclip)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](../README.md#layer) |

#### Returns

[`MovieClip`](../README.md#movieclip)

#### Inherited from

[Image](../README.md#image).[addChild](../README.md#addchild)

#### Defined in

[display/Layer.ts:231](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L231)

___

### addChildAt

▸ **addChildAt**(`child`, `index`): [`MovieClip`](../README.md#movieclip)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](../README.md#layer) |
| `index` | `number` |

#### Returns

[`MovieClip`](../README.md#movieclip)

#### Inherited from

[Image](../README.md#image).[addChildAt](../README.md#addchildat)

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

[Image](../README.md#image).[emit](../README.md#emit)

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

[Image](../README.md#image).[emit](../README.md#emit)

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

[Image](../README.md#image).[getChildAt](../README.md#getchildat)

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

[Image](../README.md#image).[getChildByName](../README.md#getchildbyname)

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

[Image](../README.md#image).[getChildIndex](../README.md#getchildindex)

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

[Image](../README.md#image).[getChildrenByTag](../README.md#getchildrenbytag)

#### Defined in

[display/Layer.ts:266](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L266)

___

### gotoAndPlay

▸ **gotoAndPlay**(`frame`): [`MovieClip`](../README.md#movieclip)

#### Parameters

| Name | Type |
| :------ | :------ |
| `frame` | `number` |

#### Returns

[`MovieClip`](../README.md#movieclip)

#### Defined in

[display/MovieClip.ts:70](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/MovieClip.ts#L70)

___

### gotoAndStop

▸ **gotoAndStop**(`frame`): [`MovieClip`](../README.md#movieclip)

#### Parameters

| Name | Type |
| :------ | :------ |
| `frame` | `number` |

#### Returns

[`MovieClip`](../README.md#movieclip)

#### Defined in

[display/MovieClip.ts:92](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/MovieClip.ts#L92)

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

[Image](../README.md#image).[hasChild](../README.md#haschild)

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

[Image](../README.md#image).[hasEventListener](../README.md#haseventlistener)

#### Defined in

[event/EventEmitter.ts:80](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L80)

___

### nextFrame

▸ **nextFrame**(): [`MovieClip`](../README.md#movieclip)

#### Returns

[`MovieClip`](../README.md#movieclip)

#### Defined in

[display/MovieClip.ts:66](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/MovieClip.ts#L66)

___

### off

▸ **off**(`type`, `listener?`): [`MovieClip`](../README.md#movieclip)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener?` | (...`args`: `any`[]) => `void` |

#### Returns

[`MovieClip`](../README.md#movieclip)

#### Inherited from

[Image](../README.md#image).[off](../README.md#off)

#### Defined in

[display/Layer.ts:684](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L684)

___

### on

▸ **on**(`type`, `listener`): [`MovieClip`](../README.md#movieclip)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`MovieClip`](../README.md#movieclip)

#### Inherited from

[Image](../README.md#image).[on](../README.md#on)

#### Defined in

[display/Layer.ts:668](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L668)

___

### once

▸ **once**(`type`, `listener`): [`MovieClip`](../README.md#movieclip)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`Listener`](../README.md#listener) |

#### Returns

[`MovieClip`](../README.md#movieclip)

#### Inherited from

[Image](../README.md#image).[once](../README.md#once)

#### Defined in

[event/EventEmitter.ts:33](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L33)

___

### pause

▸ **pause**(): [`MovieClip`](../README.md#movieclip)

#### Returns

[`MovieClip`](../README.md#movieclip)

#### Defined in

[display/MovieClip.ts:56](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/MovieClip.ts#L56)

___

### play

▸ **play**(): [`MovieClip`](../README.md#movieclip)

#### Returns

[`MovieClip`](../README.md#movieclip)

#### Defined in

[display/MovieClip.ts:51](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/MovieClip.ts#L51)

___

### removeAllChildren

▸ **removeAllChildren**(): [`MovieClip`](../README.md#movieclip)

#### Returns

[`MovieClip`](../README.md#movieclip)

#### Inherited from

[Image](../README.md#image).[removeAllChildren](../README.md#removeallchildren)

#### Defined in

[display/Layer.ts:372](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L372)

___

### removeAllListeners

▸ **removeAllListeners**(): [`MovieClip`](../README.md#movieclip)

#### Returns

[`MovieClip`](../README.md#movieclip)

#### Inherited from

[Image](../README.md#image).[removeAllListeners](../README.md#removealllisteners)

#### Defined in

[event/EventEmitter.ts:85](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L85)

___

### removeChild

▸ **removeChild**(`child`): [`MovieClip`](../README.md#movieclip)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](../README.md#layer) |

#### Returns

[`MovieClip`](../README.md#movieclip)

#### Inherited from

[Image](../README.md#image).[removeChild](../README.md#removechild)

#### Defined in

[display/Layer.ts:333](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L333)

___

### removeChildAt

▸ **removeChildAt**(`index`): [`MovieClip`](../README.md#movieclip)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`MovieClip`](../README.md#movieclip)

#### Inherited from

[Image](../README.md#image).[removeChildAt](../README.md#removechildat)

#### Defined in

[display/Layer.ts:338](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L338)

___

### removeChildByName

▸ **removeChildByName**(`name`): [`MovieClip`](../README.md#movieclip)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`MovieClip`](../README.md#movieclip)

#### Inherited from

[Image](../README.md#image).[removeChildByName](../README.md#removechildbyname)

#### Defined in

[display/Layer.ts:349](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L349)

___

### removeChildrenByTag

▸ **removeChildrenByTag**(`tag`): [`MovieClip`](../README.md#movieclip)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |

#### Returns

[`MovieClip`](../README.md#movieclip)

#### Inherited from

[Image](../README.md#image).[removeChildrenByTag](../README.md#removechildrenbytag)

#### Defined in

[display/Layer.ts:361](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L361)

___

### removeSelf

▸ **removeSelf**(): [`MovieClip`](../README.md#movieclip)

#### Returns

[`MovieClip`](../README.md#movieclip)

#### Inherited from

[Image](../README.md#image).[removeSelf](../README.md#removeself)

#### Defined in

[display/Layer.ts:382](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L382)

___

### replaceChild

▸ **replaceChild**(`oldChild`, `newChild`): [`MovieClip`](../README.md#movieclip)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldChild` | [`Layer`](../README.md#layer) |
| `newChild` | [`Layer`](../README.md#layer) |

#### Returns

[`MovieClip`](../README.md#movieclip)

#### Inherited from

[Image](../README.md#image).[replaceChild](../README.md#replacechild)

#### Defined in

[display/Layer.ts:249](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L249)

___

### setChildIndex

▸ **setChildIndex**(`child`, `index`): [`MovieClip`](../README.md#movieclip)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Layer`](../README.md#layer) |
| `index` | `number` |

#### Returns

[`MovieClip`](../README.md#movieclip)

#### Inherited from

[Image](../README.md#image).[setChildIndex](../README.md#setchildindex)

#### Defined in

[display/Layer.ts:309](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L309)

___

### swapChildren

▸ **swapChildren**(`child1`, `child2`): [`MovieClip`](../README.md#movieclip)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child1` | [`Layer`](../README.md#layer) |
| `child2` | [`Layer`](../README.md#layer) |

#### Returns

[`MovieClip`](../README.md#movieclip)

#### Inherited from

[Image](../README.md#image).[swapChildren](../README.md#swapchildren)

#### Defined in

[display/Layer.ts:289](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L289)

___

### swapChildrenAt

▸ **swapChildrenAt**(`index1`, `index2`): [`MovieClip`](../README.md#movieclip)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index1` | `number` |
| `index2` | `number` |

#### Returns

[`MovieClip`](../README.md#movieclip)

#### Inherited from

[Image](../README.md#image).[swapChildrenAt](../README.md#swapchildrenat)

#### Defined in

[display/Layer.ts:298](https://github.com/Lanfei/playable.js/blob/2369e26/src/display/Layer.ts#L298)
