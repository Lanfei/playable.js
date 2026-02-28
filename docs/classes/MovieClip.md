[**API Reference**](../README.md)

***

[API Reference](../README.md) / MovieClip

# Class: MovieClip

Defined in: [display/MovieClip.ts:6](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/MovieClip.ts#L6)

## Extends

- [`Image`](../variables/default.md#image)

## Constructors

### Constructor

> **new MovieClip**(`texture`, `frames`): [`MovieClip`](../variables/default.md#movieclip)

Defined in: [display/MovieClip.ts:16](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/MovieClip.ts#L16)

#### Parameters

##### texture

[`Texture`](../variables/default.md#texture)

##### frames

[`MovieClipFrame`](../interfaces/MovieClipFrame.md)[]

#### Returns

[`MovieClip`](../variables/default.md#movieclip)

#### Overrides

[`Image`](../variables/default.md#image).[`constructor`](../variables/default.md#imageconstructor)

## Properties

### $alpha

> `protected` **$alpha**: `number` = `1`

Defined in: [display/Layer.ts:29](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L29)

#### Inherited from

[`Image`](../variables/default.md#image).[`$alpha`](../variables/default.md#imagealpha)

***

### $anchorX

> `protected` **$anchorX**: `number` = `0`

Defined in: [display/Layer.ts:22](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L22)

#### Inherited from

[`Image`](../variables/default.md#image).[`$anchorX`](../variables/default.md#imageanchorx)

***

### $anchorY

> `protected` **$anchorY**: `number` = `0`

Defined in: [display/Layer.ts:23](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L23)

#### Inherited from

[`Image`](../variables/default.md#image).[`$anchorY`](../variables/default.md#imageanchory)

***

### $background

> `protected` **$background**: `string` = `null`

Defined in: [display/Layer.ts:32](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L32)

#### Inherited from

[`Image`](../variables/default.md#image).[`$background`](../variables/default.md#imagebackground)

***

### $boundNextFrame

> `protected` **$boundNextFrame**: `Function`

Defined in: [display/MovieClip.ts:14](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/MovieClip.ts#L14)

***

### $boundOnTextureLoad()

> `protected` `readonly` **$boundOnTextureLoad**: () => `void`

Defined in: [display/Image.ts:18](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L18)

#### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`$boundOnTextureLoad`](../variables/default.md#imageboundontextureload)

***

### $canvas

> `protected` `readonly` **$canvas**: `HTMLCanvasElement`

Defined in: [display/Layer.ts:39](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L39)

#### Inherited from

[`Image`](../variables/default.md#image).[`$canvas`](../variables/default.md#imagecanvas)

***

### $children

> `protected` **$children**: [`Layer`](../variables/default.md#layer)[] = `[]`

Defined in: [display/Layer.ts:35](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L35)

#### Inherited from

[`Image`](../variables/default.md#image).[`$children`](../variables/default.md#imagechildren)

***

### $clipRect

> `protected` **$clipRect**: [`Rectangle`](../variables/default.md#rectangle) = `null`

Defined in: [display/Image.ts:15](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L15)

#### Inherited from

[`Image`](../variables/default.md#image).[`$clipRect`](../variables/default.md#imagecliprect)

***

### $context

> `protected` `readonly` **$context**: `CanvasRenderingContext2D`

Defined in: [display/Layer.ts:40](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L40)

#### Inherited from

[`Image`](../variables/default.md#image).[`$context`](../variables/default.md#imagecontext)

***

### $currentFrame

> `protected` **$currentFrame**: `number` = `0`

Defined in: [display/MovieClip.ts:11](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/MovieClip.ts#L11)

***

### $dirty

> `protected` **$dirty**: `boolean` = `true`

Defined in: [display/Layer.ts:36](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L36)

#### Inherited from

[`Image`](../variables/default.md#image).[`$dirty`](../variables/default.md#imagedirty)

***

### $emittingType

> `protected` **$emittingType**: `string` = `null`

Defined in: [event/EventEmitter.ts:6](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L6)

#### Inherited from

[`Image`](../variables/default.md#image).[`$emittingType`](../variables/default.md#imageemittingtype)

***

### $events

> `protected` **$events**: `Object` = `{}`

Defined in: [event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L5)

#### Inherited from

[`Image`](../variables/default.md#image).[`$events`](../variables/default.md#imageevents)

***

### $fillMode

> `protected` **$fillMode**: [`FillMode`](../type-aliases/FillMode.md) = `Image.SCALE`

Defined in: [display/Image.ts:14](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L14)

#### Inherited from

[`Image`](../variables/default.md#image).[`$fillMode`](../variables/default.md#imagefillmode)

***

### $frames

> `protected` **$frames**: [`MovieClipFrame`](../interfaces/MovieClipFrame.md)[] = `null`

Defined in: [display/MovieClip.ts:12](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/MovieClip.ts#L12)

***

### $height

> `protected` **$height**: `number` = `0`

Defined in: [display/Layer.ts:21](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L21)

#### Inherited from

[`Image`](../variables/default.md#image).[`$height`](../variables/default.md#imageheight)

***

### $interval

> `protected` **$interval**: `number` = `30`

Defined in: [display/MovieClip.ts:9](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/MovieClip.ts#L9)

***

### $loop

> `protected` **$loop**: `boolean` = `true`

Defined in: [display/MovieClip.ts:8](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/MovieClip.ts#L8)

***

### $parent

> `protected` **$parent**: [`Layer`](../variables/default.md#layer) = `null`

Defined in: [display/Layer.ts:34](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L34)

#### Inherited from

[`Image`](../variables/default.md#image).[`$parent`](../variables/default.md#imageparent)

***

### $pattern

> `protected` **$pattern**: `CanvasPattern` = `null`

Defined in: [display/Image.ts:17](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L17)

#### Inherited from

[`Image`](../variables/default.md#image).[`$pattern`](../variables/default.md#imagepattern)

***

### $paused

> `protected` **$paused**: `boolean` = `false`

Defined in: [display/MovieClip.ts:10](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/MovieClip.ts#L10)

***

### $removedListeners

> `protected` **$removedListeners**: [`Listener`](../type-aliases/Listener.md)[] = `[]`

Defined in: [event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L7)

#### Inherited from

[`Image`](../variables/default.md#image).[`$removedListeners`](../variables/default.md#imageremovedlisteners)

***

### $rotation

> `protected` **$rotation**: `number` = `0`

Defined in: [display/Layer.ts:28](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L28)

#### Inherited from

[`Image`](../variables/default.md#image).[`$rotation`](../variables/default.md#imagerotation)

***

### $scale9Grid

> `protected` **$scale9Grid**: [`Rectangle`](../variables/default.md#rectangle) = `null`

Defined in: [display/Image.ts:16](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L16)

#### Inherited from

[`Image`](../variables/default.md#image).[`$scale9Grid`](../variables/default.md#imagescale9grid)

***

### $scaleX

> `protected` **$scaleX**: `number` = `1`

Defined in: [display/Layer.ts:26](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L26)

#### Inherited from

[`Image`](../variables/default.md#image).[`$scaleX`](../variables/default.md#imagescalex)

***

### $scaleY

> `protected` **$scaleY**: `number` = `1`

Defined in: [display/Layer.ts:27](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L27)

#### Inherited from

[`Image`](../variables/default.md#image).[`$scaleY`](../variables/default.md#imagescaley)

***

### $shouldEmitTap

> `protected` **$shouldEmitTap**: `boolean` = `true`

Defined in: [display/Layer.ts:37](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L37)

#### Inherited from

[`Image`](../variables/default.md#image).[`$shouldEmitTap`](../variables/default.md#imageshouldemittap)

***

### $skewX

> `protected` **$skewX**: `number` = `0`

Defined in: [display/Layer.ts:24](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L24)

#### Inherited from

[`Image`](../variables/default.md#image).[`$skewX`](../variables/default.md#imageskewx)

***

### $skewY

> `protected` **$skewY**: `number` = `0`

Defined in: [display/Layer.ts:25](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L25)

#### Inherited from

[`Image`](../variables/default.md#image).[`$skewY`](../variables/default.md#imageskewy)

***

### $smoothing

> `protected` **$smoothing**: `boolean` = `true`

Defined in: [display/Layer.ts:31](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L31)

#### Inherited from

[`Image`](../variables/default.md#image).[`$smoothing`](../variables/default.md#imagesmoothing)

***

### $stage

> `protected` **$stage**: [`Stage`](../variables/default.md#stage) = `null`

Defined in: [display/Layer.ts:33](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L33)

#### Inherited from

[`Image`](../variables/default.md#image).[`$stage`](../variables/default.md#imagestage)

***

### $texture

> `protected` **$texture**: [`Texture`](../variables/default.md#texture) = `null`

Defined in: [display/Image.ts:13](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L13)

#### Inherited from

[`Image`](../variables/default.md#image).[`$texture`](../variables/default.md#imagetexture)

***

### $timer

> `protected` **$timer**: `number`

Defined in: [display/MovieClip.ts:13](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/MovieClip.ts#L13)

***

### $touches

> `protected` **$touches**: `boolean`[] = `[]`

Defined in: [display/Layer.ts:38](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L38)

#### Inherited from

[`Image`](../variables/default.md#image).[`$touches`](../variables/default.md#imagetouches)

***

### $visible

> `protected` **$visible**: `boolean` = `true`

Defined in: [display/Layer.ts:30](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L30)

#### Inherited from

[`Image`](../variables/default.md#image).[`$visible`](../variables/default.md#imagevisible)

***

### $width

> `protected` **$width**: `number` = `0`

Defined in: [display/Layer.ts:20](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L20)

#### Inherited from

[`Image`](../variables/default.md#image).[`$width`](../variables/default.md#imagewidth)

***

### $x

> `protected` **$x**: `number` = `0`

Defined in: [display/Layer.ts:18](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L18)

#### Inherited from

[`Image`](../variables/default.md#image).[`$x`](../variables/default.md#imagex)

***

### $y

> `protected` **$y**: `number` = `0`

Defined in: [display/Layer.ts:19](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L19)

#### Inherited from

[`Image`](../variables/default.md#image).[`$y`](../variables/default.md#imagey)

***

### name

> **name**: `string` = `''`

Defined in: [display/Layer.ts:14](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L14)

#### Inherited from

[`Image`](../variables/default.md#image).[`name`](../variables/default.md#imagename)

***

### tag

> **tag**: `string` = `''`

Defined in: [display/Layer.ts:15](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L15)

#### Inherited from

[`Image`](../variables/default.md#image).[`tag`](../variables/default.md#imagetag)

***

### touchable

> **touchable**: `boolean` = `true`

Defined in: [display/Layer.ts:16](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L16)

#### Inherited from

[`Image`](../variables/default.md#image).[`touchable`](../variables/default.md#imagetouchable)

***

### pixelRatio

> `static` **pixelRatio**: `number`

Defined in: [display/Layer.ts:12](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L12)

#### Inherited from

[`Image`](../variables/default.md#image).[`pixelRatio`](../variables/default.md#imagepixelratio)

***

### REPEAT

> `static` **REPEAT**: [`FillMode`](../type-aliases/FillMode.md) = `'repeat'`

Defined in: [display/Image.ts:9](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L9)

#### Inherited from

[`Image`](../variables/default.md#image).[`REPEAT`](../variables/default.md#imagerepeat)

***

### REPEAT\_X

> `static` **REPEAT\_X**: [`FillMode`](../type-aliases/FillMode.md) = `'repeat-x'`

Defined in: [display/Image.ts:10](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L10)

#### Inherited from

[`Image`](../variables/default.md#image).[`REPEAT_X`](../variables/default.md#imagerepeat_x)

***

### REPEAT\_Y

> `static` **REPEAT\_Y**: [`FillMode`](../type-aliases/FillMode.md) = `'repeat-y'`

Defined in: [display/Image.ts:11](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L11)

#### Inherited from

[`Image`](../variables/default.md#image).[`REPEAT_Y`](../variables/default.md#imagerepeat_y)

***

### SCALE

> `static` **SCALE**: [`FillMode`](../type-aliases/FillMode.md) = `'scale'`

Defined in: [display/Image.ts:8](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L8)

#### Inherited from

[`Image`](../variables/default.md#image).[`SCALE`](../variables/default.md#imagescale)

## Accessors

### alpha

#### Get Signature

> **get** **alpha**(): `number`

Defined in: [display/Layer.ts:169](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L169)

##### Returns

`number`

#### Set Signature

> **set** **alpha**(`alpha`): `void`

Defined in: [display/Layer.ts:173](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L173)

##### Parameters

###### alpha

`number`

##### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`alpha`](../variables/default.md#imagealpha-1)

***

### anchorX

#### Get Signature

> **get** **anchorX**(): `number`

Defined in: [display/Layer.ts:92](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L92)

##### Returns

`number`

#### Set Signature

> **set** **anchorX**(`anchorX`): `void`

Defined in: [display/Layer.ts:96](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L96)

##### Parameters

###### anchorX

`number`

##### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`anchorX`](../variables/default.md#imageanchorx-1)

***

### anchorY

#### Get Signature

> **get** **anchorY**(): `number`

Defined in: [display/Layer.ts:103](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L103)

##### Returns

`number`

#### Set Signature

> **set** **anchorY**(`anchorY`): `void`

Defined in: [display/Layer.ts:107](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L107)

##### Parameters

###### anchorY

`number`

##### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`anchorY`](../variables/default.md#imageanchory-1)

***

### background

#### Get Signature

> **get** **background**(): `string`

Defined in: [display/Layer.ts:200](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L200)

##### Returns

`string`

#### Set Signature

> **set** **background**(`background`): `void`

Defined in: [display/Layer.ts:204](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L204)

##### Parameters

###### background

`string`

##### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`background`](../variables/default.md#imagebackground-1)

***

### canvas

#### Get Signature

> **get** **canvas**(): `HTMLCanvasElement`

Defined in: [display/Layer.ts:227](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L227)

##### Returns

`HTMLCanvasElement`

#### Inherited from

[`Image`](../variables/default.md#image).[`canvas`](../variables/default.md#imagecanvas-1)

***

### clipRect

#### Get Signature

> **get** **clipRect**(): [`Rectangle`](../variables/default.md#rectangle)

Defined in: [display/Image.ts:59](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L59)

##### Returns

[`Rectangle`](../variables/default.md#rectangle)

#### Set Signature

> **set** **clipRect**(`clipRect`): `void`

Defined in: [display/Image.ts:63](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L63)

##### Parameters

###### clipRect

[`Rectangle`](../variables/default.md#rectangle)

##### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`clipRect`](../variables/default.md#imagecliprect-1)

***

### currentFrame

#### Get Signature

> **get** **currentFrame**(): `number`

Defined in: [display/MovieClip.ts:43](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/MovieClip.ts#L43)

##### Returns

`number`

***

### fillMode

#### Get Signature

> **get** **fillMode**(): [`FillMode`](../type-aliases/FillMode.md)

Defined in: [display/Image.ts:49](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L49)

##### Returns

[`FillMode`](../type-aliases/FillMode.md)

#### Set Signature

> **set** **fillMode**(`fillMode`): `void`

Defined in: [display/Image.ts:53](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L53)

##### Parameters

###### fillMode

[`FillMode`](../type-aliases/FillMode.md)

##### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`fillMode`](../variables/default.md#imagefillmode-1)

***

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [display/Layer.ts:81](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L81)

##### Returns

`number`

#### Set Signature

> **set** **height**(`height`): `void`

Defined in: [display/Layer.ts:85](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L85)

##### Parameters

###### height

`number`

##### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`height`](../variables/default.md#imageheight-1)

***

### interval

#### Get Signature

> **get** **interval**(): `number`

Defined in: [display/MovieClip.ts:31](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/MovieClip.ts#L31)

##### Returns

`number`

#### Set Signature

> **set** **interval**(`interval`): `void`

Defined in: [display/MovieClip.ts:35](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/MovieClip.ts#L35)

##### Parameters

###### interval

`number`

##### Returns

`void`

***

### loop

#### Get Signature

> **get** **loop**(): `boolean`

Defined in: [display/MovieClip.ts:23](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/MovieClip.ts#L23)

##### Returns

`boolean`

#### Set Signature

> **set** **loop**(`loop`): `void`

Defined in: [display/MovieClip.ts:27](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/MovieClip.ts#L27)

##### Parameters

###### loop

`boolean`

##### Returns

`void`

***

### numChildren

#### Get Signature

> **get** **numChildren**(): `number`

Defined in: [display/Layer.ts:219](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L219)

##### Returns

`number`

#### Inherited from

[`Image`](../variables/default.md#image).[`numChildren`](../variables/default.md#imagenumchildren)

***

### parent

#### Get Signature

> **get** **parent**(): [`Layer`](../variables/default.md#layer)

Defined in: [display/Layer.ts:215](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L215)

##### Returns

[`Layer`](../variables/default.md#layer)

#### Inherited from

[`Image`](../variables/default.md#image).[`parent`](../variables/default.md#imageparent-1)

***

### paused

#### Get Signature

> **get** **paused**(): `boolean`

Defined in: [display/MovieClip.ts:39](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/MovieClip.ts#L39)

##### Returns

`boolean`

***

### rotation

#### Get Signature

> **get** **rotation**(): `number`

Defined in: [display/Layer.ts:158](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L158)

##### Returns

`number`

#### Set Signature

> **set** **rotation**(`rotation`): `void`

Defined in: [display/Layer.ts:162](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L162)

##### Parameters

###### rotation

`number`

##### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`rotation`](../variables/default.md#imagerotation-1)

***

### scale9Grid

#### Get Signature

> **get** **scale9Grid**(): [`Rectangle`](../variables/default.md#rectangle)

Defined in: [display/Image.ts:68](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L68)

##### Returns

[`Rectangle`](../variables/default.md#rectangle)

#### Set Signature

> **set** **scale9Grid**(`scale9Grid`): `void`

Defined in: [display/Image.ts:72](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L72)

##### Parameters

###### scale9Grid

[`Rectangle`](../variables/default.md#rectangle)

##### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`scale9Grid`](../variables/default.md#imagescale9grid-1)

***

### scaleX

#### Get Signature

> **get** **scaleX**(): `number`

Defined in: [display/Layer.ts:136](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L136)

##### Returns

`number`

#### Set Signature

> **set** **scaleX**(`scaleX`): `void`

Defined in: [display/Layer.ts:140](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L140)

##### Parameters

###### scaleX

`number`

##### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`scaleX`](../variables/default.md#imagescalex-1)

***

### scaleY

#### Get Signature

> **get** **scaleY**(): `number`

Defined in: [display/Layer.ts:147](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L147)

##### Returns

`number`

#### Set Signature

> **set** **scaleY**(`scaleY`): `void`

Defined in: [display/Layer.ts:151](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L151)

##### Parameters

###### scaleY

`number`

##### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`scaleY`](../variables/default.md#imagescaley-1)

***

### skewX

#### Get Signature

> **get** **skewX**(): `number`

Defined in: [display/Layer.ts:114](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L114)

##### Returns

`number`

#### Set Signature

> **set** **skewX**(`skewX`): `void`

Defined in: [display/Layer.ts:118](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L118)

##### Parameters

###### skewX

`number`

##### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`skewX`](../variables/default.md#imageskewx-1)

***

### skewY

#### Get Signature

> **get** **skewY**(): `number`

Defined in: [display/Layer.ts:125](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L125)

##### Returns

`number`

#### Set Signature

> **set** **skewY**(`skewY`): `void`

Defined in: [display/Layer.ts:129](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L129)

##### Parameters

###### skewY

`number`

##### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`skewY`](../variables/default.md#imageskewy-1)

***

### smoothing

#### Get Signature

> **get** **smoothing**(): `boolean`

Defined in: [display/Layer.ts:191](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L191)

##### Returns

`boolean`

#### Set Signature

> **set** **smoothing**(`smoothing`): `void`

Defined in: [display/Layer.ts:195](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L195)

##### Parameters

###### smoothing

`boolean`

##### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`smoothing`](../variables/default.md#imagesmoothing-1)

***

### stage

#### Get Signature

> **get** **stage**(): [`Stage`](../variables/default.md#stage)

Defined in: [display/Layer.ts:211](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L211)

##### Returns

[`Stage`](../variables/default.md#stage)

#### Inherited from

[`Image`](../variables/default.md#image).[`stage`](../variables/default.md#imagestage-1)

***

### texture

#### Get Signature

> **get** **texture**(): [`Texture`](../variables/default.md#texture)

Defined in: [display/Image.ts:32](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L32)

##### Returns

[`Texture`](../variables/default.md#texture)

#### Set Signature

> **set** **texture**(`texture`): `void`

Defined in: [display/Image.ts:36](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L36)

##### Parameters

###### texture

[`Texture`](../variables/default.md#texture)

##### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`texture`](../variables/default.md#imagetexture-1)

***

### ticker

#### Get Signature

> **get** **ticker**(): [`Ticker`](../variables/default.md#ticker)

Defined in: [display/Layer.ts:223](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L223)

##### Returns

[`Ticker`](../variables/default.md#ticker)

#### Inherited from

[`Image`](../variables/default.md#image).[`ticker`](../variables/default.md#imageticker)

***

### totalFrames

#### Get Signature

> **get** **totalFrames**(): `number`

Defined in: [display/MovieClip.ts:47](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/MovieClip.ts#L47)

##### Returns

`number`

***

### visible

#### Get Signature

> **get** **visible**(): `boolean`

Defined in: [display/Layer.ts:180](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L180)

##### Returns

`boolean`

#### Set Signature

> **set** **visible**(`visible`): `void`

Defined in: [display/Layer.ts:184](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L184)

##### Parameters

###### visible

`boolean`

##### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`visible`](../variables/default.md#imagevisible-1)

***

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [display/Layer.ts:70](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L70)

##### Returns

`number`

#### Set Signature

> **set** **width**(`width`): `void`

Defined in: [display/Layer.ts:74](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L74)

##### Parameters

###### width

`number`

##### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`width`](../variables/default.md#imagewidth-1)

***

### x

#### Get Signature

> **get** **x**(): `number`

Defined in: [display/Layer.ts:48](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L48)

##### Returns

`number`

#### Set Signature

> **set** **x**(`x`): `void`

Defined in: [display/Layer.ts:52](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L52)

##### Parameters

###### x

`number`

##### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`x`](../variables/default.md#imagex-1)

***

### y

#### Get Signature

> **get** **y**(): `number`

Defined in: [display/Layer.ts:59](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L59)

##### Returns

`number`

#### Set Signature

> **set** **y**(`y`): `void`

Defined in: [display/Layer.ts:63](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L63)

##### Parameters

###### y

`number`

##### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`y`](../variables/default.md#imagey-1)

## Methods

### $drawChild()

> `protected` **$drawChild**(`child`): `number`

Defined in: [display/Layer.ts:605](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L605)

#### Parameters

##### child

[`Layer`](../variables/default.md#layer)

#### Returns

`number`

#### Inherited from

[`Image`](../variables/default.md#image).[`$drawChild`](../variables/default.md#imagedrawchild)

***

### $drawPattern()

> `protected` **$drawPattern**(`targetX`, `targetY`, `targetW`, `targetH`): `void`

Defined in: [display/Image.ts:111](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L111)

#### Parameters

##### targetX

`any`

##### targetY

`any`

##### targetW

`any`

##### targetH

`any`

#### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`$drawPattern`](../variables/default.md#imagedrawpattern)

***

### $drawTexture()

> `protected` **$drawTexture**(`sourceX`, `sourceY`, `sourceW`, `sourceH`, `targetX`, `targetY`, `targetW`, `targetH`): `void`

Defined in: [display/Image.ts:121](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L121)

#### Parameters

##### sourceX

`number`

##### sourceY

`number`

##### sourceW

`number`

##### sourceH

`number`

##### targetX

`number`

##### targetY

`number`

##### targetW

`number`

##### targetH

`number`

#### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`$drawTexture`](../variables/default.md#imagedrawtexture)

***

### $emitAdded()

> `protected` **$emitAdded**(`parent`): `void`

Defined in: [display/Layer.ts:543](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L543)

#### Parameters

##### parent

[`Layer`](../variables/default.md#layer)

#### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`$emitAdded`](../variables/default.md#imageemitadded)

***

### $emitAddedToStage()

> `protected` **$emitAddedToStage**(`stage`): `void`

Defined in: [display/Layer.ts:561](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L561)

#### Parameters

##### stage

[`Stage`](../variables/default.md#stage)

#### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`$emitAddedToStage`](../variables/default.md#imageemitaddedtostage)

***

### $emitRemoved()

> `protected` **$emitRemoved**(): `void`

Defined in: [display/Layer.ts:552](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L552)

#### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`$emitRemoved`](../variables/default.md#imageemitremoved)

***

### $emitRemovedFromStage()

> `protected` **$emitRemovedFromStage**(): `void`

Defined in: [display/Layer.ts:574](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L574)

#### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`$emitRemovedFromStage`](../variables/default.md#imageemitremovedfromstage)

***

### $emitTouchEvent()

> `protected` **$emitTouchEvent**(`event`, `inside`): `boolean`

Defined in: [display/Layer.ts:495](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L495)

#### Parameters

##### event

[`TouchEvent`](../variables/default.md#touchevent)

##### inside

`boolean`

#### Returns

`boolean`

#### Inherited from

[`Image`](../variables/default.md#image).[`$emitTouchEvent`](../variables/default.md#imageemittouchevent)

***

### $getChildBounds()

> `protected` **$getChildBounds**(`child`): [`Rectangle`](../variables/default.md#rectangle)

Defined in: [display/Layer.ts:449](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L449)

#### Parameters

##### child

[`Layer`](../variables/default.md#layer)

#### Returns

[`Rectangle`](../variables/default.md#rectangle)

#### Inherited from

[`Image`](../variables/default.md#image).[`$getChildBounds`](../variables/default.md#imagegetchildbounds)

***

### $getChildTransform()

> `protected` **$getChildTransform**(`child`): [`Matrix`](../variables/default.md#matrix)

Defined in: [display/Layer.ts:445](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L445)

#### Parameters

##### child

[`Layer`](../variables/default.md#layer)

#### Returns

[`Matrix`](../variables/default.md#matrix)

#### Inherited from

[`Image`](../variables/default.md#image).[`$getChildTransform`](../variables/default.md#imagegetchildtransform)

***

### $getContentBounds()

> `protected` **$getContentBounds**(): [`Rectangle`](../variables/default.md#rectangle)

Defined in: [display/Image.ts:95](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L95)

#### Returns

[`Rectangle`](../variables/default.md#rectangle)

#### Inherited from

[`Image`](../variables/default.md#image).[`$getContentBounds`](../variables/default.md#imagegetcontentbounds)

***

### $getTransform()

> `protected` **$getTransform**(): [`Matrix`](../variables/default.md#matrix)

Defined in: [display/Layer.ts:434](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L434)

#### Returns

[`Matrix`](../variables/default.md#matrix)

#### Inherited from

[`Image`](../variables/default.md#image).[`$getTransform`](../variables/default.md#imagegettransform)

***

### $gotoFrame()

> `protected` **$gotoFrame**(`frame`): `void`

Defined in: [display/MovieClip.ts:98](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/MovieClip.ts#L98)

#### Parameters

##### frame

`number`

#### Returns

`void`

***

### $isChildVisible()

> `protected` **$isChildVisible**(`child`): `boolean`

Defined in: [display/Layer.ts:591](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L591)

#### Parameters

##### child

[`Layer`](../variables/default.md#layer)

#### Returns

`boolean`

#### Inherited from

[`Image`](../variables/default.md#image).[`$isChildVisible`](../variables/default.md#imageischildvisible)

***

### $localHitTest()

> `protected` **$localHitTest**(`vector`): `boolean`

Defined in: [display/Layer.ts:587](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L587)

#### Parameters

##### vector

[`Vector`](../variables/default.md#vector)

#### Returns

`boolean`

#### Inherited from

[`Image`](../variables/default.md#image).[`$localHitTest`](../variables/default.md#imagelocalhittest)

***

### $markDirty()

> `protected` **$markDirty**(`sizeDirty?`): `void`

Defined in: [display/Layer.ts:389](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L389)

#### Parameters

##### sizeDirty?

`boolean`

#### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`$markDirty`](../variables/default.md#imagemarkdirty)

***

### $markParentDirty()

> `protected` **$markParentDirty**(): `void`

Defined in: [display/Layer.ts:398](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L398)

#### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`$markParentDirty`](../variables/default.md#imagemarkparentdirty)

***

### $onTextureLoad()

> `protected` **$onTextureLoad**(): `void`

Defined in: [display/Image.ts:77](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L77)

#### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`$onTextureLoad`](../variables/default.md#imageontextureload)

***

### $render()

> `protected` **$render**(): `number`

Defined in: [display/Image.ts:133](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L133)

#### Returns

`number`

#### Inherited from

[`Image`](../variables/default.md#image).[`$render`](../variables/default.md#imagerender)

***

### $resizeCanvas()

> `protected` **$resizeCanvas**(): `void`

Defined in: [display/Layer.ts:404](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L404)

#### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`$resizeCanvas`](../variables/default.md#imageresizecanvas)

***

### $resizeParentCanvas()

> `protected` **$resizeParentCanvas**(): `void`

Defined in: [display/Layer.ts:428](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L428)

#### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`$resizeParentCanvas`](../variables/default.md#imageresizeparentcanvas)

***

### $updatePattern()

> `protected` **$updatePattern**(): `void`

Defined in: [display/Image.ts:83](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L83)

#### Returns

`void`

#### Inherited from

[`Image`](../variables/default.md#image).[`$updatePattern`](../variables/default.md#imageupdatepattern)

***

### addChild()

> **addChild**(`child`): `this`

Defined in: [display/Layer.ts:231](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L231)

#### Parameters

##### child

[`Layer`](../variables/default.md#layer)

#### Returns

`this`

#### Inherited from

[`Image`](../variables/default.md#image).[`addChild`](../variables/default.md#imageaddchild)

***

### addChildAt()

> **addChildAt**(`child`, `index`): `this`

Defined in: [display/Layer.ts:235](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L235)

#### Parameters

##### child

[`Layer`](../variables/default.md#layer)

##### index

`number`

#### Returns

`this`

#### Inherited from

[`Image`](../variables/default.md#image).[`addChildAt`](../variables/default.md#imageaddchildat)

***

### emit()

#### Call Signature

> **emit**(`event`): `boolean`

Defined in: [event/EventEmitter.ts:42](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L42)

##### Parameters

###### event

[`Event`](../variables/default.md#event)

##### Returns

`boolean`

##### Inherited from

[`Image`](../variables/default.md#image).[`emit`](../variables/default.md#imageemit)

#### Call Signature

> **emit**(`type`, ...`args`): `boolean`

Defined in: [event/EventEmitter.ts:43](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L43)

##### Parameters

###### type

`string`

###### args

...`any`[]

##### Returns

`boolean`

##### Inherited from

[`Image`](../variables/default.md#image).[`emit`](../variables/default.md#imageemit)

***

### getChildAt()

> **getChildAt**(`index`): [`Layer`](../variables/default.md#layer)

Defined in: [display/Layer.ts:277](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L277)

#### Parameters

##### index

`number`

#### Returns

[`Layer`](../variables/default.md#layer)

#### Inherited from

[`Image`](../variables/default.md#image).[`getChildAt`](../variables/default.md#imagegetchildat)

***

### getChildByName()

> **getChildByName**(`name`): [`Layer`](../variables/default.md#layer)

Defined in: [display/Layer.ts:256](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L256)

#### Parameters

##### name

`string`

#### Returns

[`Layer`](../variables/default.md#layer)

#### Inherited from

[`Image`](../variables/default.md#image).[`getChildByName`](../variables/default.md#imagegetchildbyname)

***

### getChildIndex()

> **getChildIndex**(`child`): `number`

Defined in: [display/Layer.ts:281](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L281)

#### Parameters

##### child

[`Layer`](../variables/default.md#layer)

#### Returns

`number`

#### Inherited from

[`Image`](../variables/default.md#image).[`getChildIndex`](../variables/default.md#imagegetchildindex)

***

### getChildrenByTag()

> **getChildrenByTag**(`tag`): [`Layer`](../variables/default.md#layer)[]

Defined in: [display/Layer.ts:266](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L266)

#### Parameters

##### tag

`string`

#### Returns

[`Layer`](../variables/default.md#layer)[]

#### Inherited from

[`Image`](../variables/default.md#image).[`getChildrenByTag`](../variables/default.md#imagegetchildrenbytag)

***

### gotoAndPlay()

> **gotoAndPlay**(`frame`): `this`

Defined in: [display/MovieClip.ts:70](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/MovieClip.ts#L70)

#### Parameters

##### frame

`number`

#### Returns

`this`

***

### gotoAndStop()

> **gotoAndStop**(`frame`): `this`

Defined in: [display/MovieClip.ts:92](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/MovieClip.ts#L92)

#### Parameters

##### frame

`number`

#### Returns

`this`

***

### hasChild()

> **hasChild**(`child`): `boolean`

Defined in: [display/Layer.ts:285](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L285)

#### Parameters

##### child

[`Layer`](../variables/default.md#layer)

#### Returns

`boolean`

#### Inherited from

[`Image`](../variables/default.md#image).[`hasChild`](../variables/default.md#imagehaschild)

***

### hasEventListener()

> **hasEventListener**(`type`): `boolean`

Defined in: [event/EventEmitter.ts:80](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L80)

#### Parameters

##### type

`string`

#### Returns

`boolean`

#### Inherited from

[`Image`](../variables/default.md#image).[`hasEventListener`](../variables/default.md#imagehaseventlistener)

***

### nextFrame()

> **nextFrame**(): `this`

Defined in: [display/MovieClip.ts:66](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/MovieClip.ts#L66)

#### Returns

`this`

***

### off()

> **off**(`type`, `listener?`): `this`

Defined in: [display/Layer.ts:684](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L684)

#### Parameters

##### type

`string`

##### listener?

(...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`Image`](../variables/default.md#image).[`off`](../variables/default.md#imageoff)

***

### on()

> **on**(`type`, `listener`): `this`

Defined in: [display/Layer.ts:668](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L668)

#### Parameters

##### type

`string`

##### listener

(...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`Image`](../variables/default.md#image).[`on`](../variables/default.md#imageon)

***

### once()

> **once**(`type`, `listener`): `this`

Defined in: [event/EventEmitter.ts:33](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L33)

#### Parameters

##### type

`string`

##### listener

[`Listener`](../type-aliases/Listener.md)

#### Returns

`this`

#### Inherited from

[`Image`](../variables/default.md#image).[`once`](../variables/default.md#imageonce)

***

### pause()

> **pause**(): `this`

Defined in: [display/MovieClip.ts:56](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/MovieClip.ts#L56)

#### Returns

`this`

***

### play()

> **play**(): `this`

Defined in: [display/MovieClip.ts:51](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/MovieClip.ts#L51)

#### Returns

`this`

***

### removeAllChildren()

> **removeAllChildren**(): `this`

Defined in: [display/Layer.ts:372](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L372)

#### Returns

`this`

#### Inherited from

[`Image`](../variables/default.md#image).[`removeAllChildren`](../variables/default.md#imageremoveallchildren)

***

### removeAllListeners()

> **removeAllListeners**(): `this`

Defined in: [event/EventEmitter.ts:85](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L85)

#### Returns

`this`

#### Inherited from

[`Image`](../variables/default.md#image).[`removeAllListeners`](../variables/default.md#imageremovealllisteners)

***

### removeChild()

> **removeChild**(`child`): `this`

Defined in: [display/Layer.ts:333](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L333)

#### Parameters

##### child

[`Layer`](../variables/default.md#layer)

#### Returns

`this`

#### Inherited from

[`Image`](../variables/default.md#image).[`removeChild`](../variables/default.md#imageremovechild)

***

### removeChildAt()

> **removeChildAt**(`index`): `this`

Defined in: [display/Layer.ts:338](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L338)

#### Parameters

##### index

`number`

#### Returns

`this`

#### Inherited from

[`Image`](../variables/default.md#image).[`removeChildAt`](../variables/default.md#imageremovechildat)

***

### removeChildByName()

> **removeChildByName**(`name`): `this`

Defined in: [display/Layer.ts:349](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L349)

#### Parameters

##### name

`string`

#### Returns

`this`

#### Inherited from

[`Image`](../variables/default.md#image).[`removeChildByName`](../variables/default.md#imageremovechildbyname)

***

### removeChildrenByTag()

> **removeChildrenByTag**(`tag`): `this`

Defined in: [display/Layer.ts:361](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L361)

#### Parameters

##### tag

`string`

#### Returns

`this`

#### Inherited from

[`Image`](../variables/default.md#image).[`removeChildrenByTag`](../variables/default.md#imageremovechildrenbytag)

***

### removeSelf()

> **removeSelf**(): `this`

Defined in: [display/Layer.ts:382](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L382)

#### Returns

`this`

#### Inherited from

[`Image`](../variables/default.md#image).[`removeSelf`](../variables/default.md#imageremoveself)

***

### replaceChild()

> **replaceChild**(`oldChild`, `newChild`): `this`

Defined in: [display/Layer.ts:249](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L249)

#### Parameters

##### oldChild

[`Layer`](../variables/default.md#layer)

##### newChild

[`Layer`](../variables/default.md#layer)

#### Returns

`this`

#### Inherited from

[`Image`](../variables/default.md#image).[`replaceChild`](../variables/default.md#imagereplacechild)

***

### setChildIndex()

> **setChildIndex**(`child`, `index`): `this`

Defined in: [display/Layer.ts:309](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L309)

#### Parameters

##### child

[`Layer`](../variables/default.md#layer)

##### index

`number`

#### Returns

`this`

#### Inherited from

[`Image`](../variables/default.md#image).[`setChildIndex`](../variables/default.md#imagesetchildindex)

***

### swapChildren()

> **swapChildren**(`child1`, `child2`): `this`

Defined in: [display/Layer.ts:289](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L289)

#### Parameters

##### child1

[`Layer`](../variables/default.md#layer)

##### child2

[`Layer`](../variables/default.md#layer)

#### Returns

`this`

#### Inherited from

[`Image`](../variables/default.md#image).[`swapChildren`](../variables/default.md#imageswapchildren)

***

### swapChildrenAt()

> **swapChildrenAt**(`index1`, `index2`): `this`

Defined in: [display/Layer.ts:298](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L298)

#### Parameters

##### index1

`number`

##### index2

`number`

#### Returns

`this`

#### Inherited from

[`Image`](../variables/default.md#image).[`swapChildrenAt`](../variables/default.md#imageswapchildrenat)
