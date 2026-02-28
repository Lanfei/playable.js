[**API Reference**](../README.md)

***

[API Reference](../README.md) / Image

# Class: Image

Defined in: [display/Image.ts:6](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L6)

## Extends

- [`Layer`](../variables/default.md#layer)

## Constructors

### Constructor

> **new Image**(`texture?`): [`Image`](../variables/default.md#image)

Defined in: [display/Image.ts:20](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L20)

#### Parameters

##### texture?

[`Texture`](../variables/default.md#texture)

#### Returns

[`Image`](../variables/default.md#image)

#### Overrides

[`Layer`](../variables/default.md#layer).[`constructor`](../variables/default.md#layerconstructor)

### Constructor

> **new Image**(`texture`, `width`, `height`): [`Image`](../variables/default.md#image)

Defined in: [display/Image.ts:21](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L21)

#### Parameters

##### texture

[`Texture`](../variables/default.md#texture)

##### width

`number`

##### height

`number`

#### Returns

[`Image`](../variables/default.md#image)

#### Overrides

`Layer.constructor`

## Properties

### $alpha

> `protected` **$alpha**: `number` = `1`

Defined in: [display/Layer.ts:29](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L29)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$alpha`](../variables/default.md#layeralpha)

***

### $anchorX

> `protected` **$anchorX**: `number` = `0`

Defined in: [display/Layer.ts:22](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L22)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$anchorX`](../variables/default.md#layeranchorx)

***

### $anchorY

> `protected` **$anchorY**: `number` = `0`

Defined in: [display/Layer.ts:23](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L23)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$anchorY`](../variables/default.md#layeranchory)

***

### $background

> `protected` **$background**: `string` = `null`

Defined in: [display/Layer.ts:32](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L32)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$background`](../variables/default.md#layerbackground)

***

### $boundOnTextureLoad()

> `protected` `readonly` **$boundOnTextureLoad**: () => `void`

Defined in: [display/Image.ts:18](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L18)

#### Returns

`void`

***

### $canvas

> `protected` `readonly` **$canvas**: `HTMLCanvasElement`

Defined in: [display/Layer.ts:39](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L39)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$canvas`](../variables/default.md#layercanvas)

***

### $children

> `protected` **$children**: [`Layer`](../variables/default.md#layer)[] = `[]`

Defined in: [display/Layer.ts:35](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L35)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$children`](../variables/default.md#layerchildren)

***

### $clipRect

> `protected` **$clipRect**: [`Rectangle`](../variables/default.md#rectangle) = `null`

Defined in: [display/Image.ts:15](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L15)

***

### $context

> `protected` `readonly` **$context**: `CanvasRenderingContext2D`

Defined in: [display/Layer.ts:40](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L40)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$context`](../variables/default.md#layercontext)

***

### $dirty

> `protected` **$dirty**: `boolean` = `true`

Defined in: [display/Layer.ts:36](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L36)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$dirty`](../variables/default.md#layerdirty)

***

### $emittingType

> `protected` **$emittingType**: `string` = `null`

Defined in: [event/EventEmitter.ts:6](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L6)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$emittingType`](../variables/default.md#layeremittingtype)

***

### $events

> `protected` **$events**: `Object` = `{}`

Defined in: [event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L5)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$events`](../variables/default.md#layerevents)

***

### $fillMode

> `protected` **$fillMode**: [`FillMode`](../type-aliases/FillMode.md) = `Image.SCALE`

Defined in: [display/Image.ts:14](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L14)

***

### $height

> `protected` **$height**: `number` = `0`

Defined in: [display/Layer.ts:21](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L21)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$height`](../variables/default.md#layerheight)

***

### $parent

> `protected` **$parent**: [`Layer`](../variables/default.md#layer) = `null`

Defined in: [display/Layer.ts:34](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L34)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$parent`](../variables/default.md#layerparent)

***

### $pattern

> `protected` **$pattern**: `CanvasPattern` = `null`

Defined in: [display/Image.ts:17](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L17)

***

### $removedListeners

> `protected` **$removedListeners**: [`Listener`](../type-aliases/Listener.md)[] = `[]`

Defined in: [event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L7)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$removedListeners`](../variables/default.md#layerremovedlisteners)

***

### $rotation

> `protected` **$rotation**: `number` = `0`

Defined in: [display/Layer.ts:28](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L28)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$rotation`](../variables/default.md#layerrotation)

***

### $scale9Grid

> `protected` **$scale9Grid**: [`Rectangle`](../variables/default.md#rectangle) = `null`

Defined in: [display/Image.ts:16](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L16)

***

### $scaleX

> `protected` **$scaleX**: `number` = `1`

Defined in: [display/Layer.ts:26](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L26)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$scaleX`](../variables/default.md#layerscalex)

***

### $scaleY

> `protected` **$scaleY**: `number` = `1`

Defined in: [display/Layer.ts:27](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L27)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$scaleY`](../variables/default.md#layerscaley)

***

### $shouldEmitTap

> `protected` **$shouldEmitTap**: `boolean` = `true`

Defined in: [display/Layer.ts:37](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L37)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$shouldEmitTap`](../variables/default.md#layershouldemittap)

***

### $skewX

> `protected` **$skewX**: `number` = `0`

Defined in: [display/Layer.ts:24](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L24)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$skewX`](../variables/default.md#layerskewx)

***

### $skewY

> `protected` **$skewY**: `number` = `0`

Defined in: [display/Layer.ts:25](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L25)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$skewY`](../variables/default.md#layerskewy)

***

### $smoothing

> `protected` **$smoothing**: `boolean` = `true`

Defined in: [display/Layer.ts:31](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L31)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$smoothing`](../variables/default.md#layersmoothing)

***

### $stage

> `protected` **$stage**: [`Stage`](../variables/default.md#stage) = `null`

Defined in: [display/Layer.ts:33](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L33)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$stage`](../variables/default.md#layerstage)

***

### $texture

> `protected` **$texture**: [`Texture`](../variables/default.md#texture) = `null`

Defined in: [display/Image.ts:13](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L13)

***

### $touches

> `protected` **$touches**: `boolean`[] = `[]`

Defined in: [display/Layer.ts:38](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L38)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$touches`](../variables/default.md#layertouches)

***

### $visible

> `protected` **$visible**: `boolean` = `true`

Defined in: [display/Layer.ts:30](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L30)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$visible`](../variables/default.md#layervisible)

***

### $width

> `protected` **$width**: `number` = `0`

Defined in: [display/Layer.ts:20](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L20)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$width`](../variables/default.md#layerwidth)

***

### $x

> `protected` **$x**: `number` = `0`

Defined in: [display/Layer.ts:18](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L18)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$x`](../variables/default.md#layerx)

***

### $y

> `protected` **$y**: `number` = `0`

Defined in: [display/Layer.ts:19](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L19)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$y`](../variables/default.md#layery)

***

### name

> **name**: `string` = `''`

Defined in: [display/Layer.ts:14](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L14)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`name`](../variables/default.md#layername)

***

### tag

> **tag**: `string` = `''`

Defined in: [display/Layer.ts:15](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L15)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`tag`](../variables/default.md#layertag)

***

### touchable

> **touchable**: `boolean` = `true`

Defined in: [display/Layer.ts:16](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L16)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`touchable`](../variables/default.md#layertouchable)

***

### pixelRatio

> `static` **pixelRatio**: `number`

Defined in: [display/Layer.ts:12](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L12)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`pixelRatio`](../variables/default.md#layerpixelratio)

***

### REPEAT

> `static` **REPEAT**: [`FillMode`](../type-aliases/FillMode.md) = `'repeat'`

Defined in: [display/Image.ts:9](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L9)

***

### REPEAT\_X

> `static` **REPEAT\_X**: [`FillMode`](../type-aliases/FillMode.md) = `'repeat-x'`

Defined in: [display/Image.ts:10](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L10)

***

### REPEAT\_Y

> `static` **REPEAT\_Y**: [`FillMode`](../type-aliases/FillMode.md) = `'repeat-y'`

Defined in: [display/Image.ts:11](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L11)

***

### SCALE

> `static` **SCALE**: [`FillMode`](../type-aliases/FillMode.md) = `'scale'`

Defined in: [display/Image.ts:8](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L8)

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

[`Layer`](../variables/default.md#layer).[`alpha`](../variables/default.md#layeralpha-1)

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

[`Layer`](../variables/default.md#layer).[`anchorX`](../variables/default.md#layeranchorx-1)

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

[`Layer`](../variables/default.md#layer).[`anchorY`](../variables/default.md#layeranchory-1)

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

[`Layer`](../variables/default.md#layer).[`background`](../variables/default.md#layerbackground-1)

***

### canvas

#### Get Signature

> **get** **canvas**(): `HTMLCanvasElement`

Defined in: [display/Layer.ts:227](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L227)

##### Returns

`HTMLCanvasElement`

#### Inherited from

[`Layer`](../variables/default.md#layer).[`canvas`](../variables/default.md#layercanvas-1)

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

[`Layer`](../variables/default.md#layer).[`height`](../variables/default.md#layerheight-1)

***

### numChildren

#### Get Signature

> **get** **numChildren**(): `number`

Defined in: [display/Layer.ts:219](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L219)

##### Returns

`number`

#### Inherited from

[`Layer`](../variables/default.md#layer).[`numChildren`](../variables/default.md#layernumchildren)

***

### parent

#### Get Signature

> **get** **parent**(): [`Layer`](../variables/default.md#layer)

Defined in: [display/Layer.ts:215](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L215)

##### Returns

[`Layer`](../variables/default.md#layer)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`parent`](../variables/default.md#layerparent-1)

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

[`Layer`](../variables/default.md#layer).[`rotation`](../variables/default.md#layerrotation-1)

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

[`Layer`](../variables/default.md#layer).[`scaleX`](../variables/default.md#layerscalex-1)

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

[`Layer`](../variables/default.md#layer).[`scaleY`](../variables/default.md#layerscaley-1)

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

[`Layer`](../variables/default.md#layer).[`skewX`](../variables/default.md#layerskewx-1)

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

[`Layer`](../variables/default.md#layer).[`skewY`](../variables/default.md#layerskewy-1)

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

[`Layer`](../variables/default.md#layer).[`smoothing`](../variables/default.md#layersmoothing-1)

***

### stage

#### Get Signature

> **get** **stage**(): [`Stage`](../variables/default.md#stage)

Defined in: [display/Layer.ts:211](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L211)

##### Returns

[`Stage`](../variables/default.md#stage)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`stage`](../variables/default.md#layerstage-1)

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

***

### ticker

#### Get Signature

> **get** **ticker**(): [`Ticker`](../variables/default.md#ticker)

Defined in: [display/Layer.ts:223](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L223)

##### Returns

[`Ticker`](../variables/default.md#ticker)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`ticker`](../variables/default.md#layerticker)

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

[`Layer`](../variables/default.md#layer).[`visible`](../variables/default.md#layervisible-1)

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

[`Layer`](../variables/default.md#layer).[`width`](../variables/default.md#layerwidth-1)

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

[`Layer`](../variables/default.md#layer).[`x`](../variables/default.md#layerx-1)

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

[`Layer`](../variables/default.md#layer).[`y`](../variables/default.md#layery-1)

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

[`Layer`](../variables/default.md#layer).[`$drawChild`](../variables/default.md#layerdrawchild)

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

[`Layer`](../variables/default.md#layer).[`$emitAdded`](../variables/default.md#layeremitadded)

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

[`Layer`](../variables/default.md#layer).[`$emitAddedToStage`](../variables/default.md#layeremitaddedtostage)

***

### $emitRemoved()

> `protected` **$emitRemoved**(): `void`

Defined in: [display/Layer.ts:552](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L552)

#### Returns

`void`

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$emitRemoved`](../variables/default.md#layeremitremoved)

***

### $emitRemovedFromStage()

> `protected` **$emitRemovedFromStage**(): `void`

Defined in: [display/Layer.ts:574](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L574)

#### Returns

`void`

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$emitRemovedFromStage`](../variables/default.md#layeremitremovedfromstage)

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

[`Layer`](../variables/default.md#layer).[`$emitTouchEvent`](../variables/default.md#layeremittouchevent)

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

[`Layer`](../variables/default.md#layer).[`$getChildBounds`](../variables/default.md#layergetchildbounds)

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

[`Layer`](../variables/default.md#layer).[`$getChildTransform`](../variables/default.md#layergetchildtransform)

***

### $getContentBounds()

> `protected` **$getContentBounds**(): [`Rectangle`](../variables/default.md#rectangle)

Defined in: [display/Image.ts:95](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L95)

#### Returns

[`Rectangle`](../variables/default.md#rectangle)

#### Overrides

[`Layer`](../variables/default.md#layer).[`$getContentBounds`](../variables/default.md#layergetcontentbounds)

***

### $getTransform()

> `protected` **$getTransform**(): [`Matrix`](../variables/default.md#matrix)

Defined in: [display/Layer.ts:434](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L434)

#### Returns

[`Matrix`](../variables/default.md#matrix)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$getTransform`](../variables/default.md#layergettransform)

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

[`Layer`](../variables/default.md#layer).[`$isChildVisible`](../variables/default.md#layerischildvisible)

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

[`Layer`](../variables/default.md#layer).[`$localHitTest`](../variables/default.md#layerlocalhittest)

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

[`Layer`](../variables/default.md#layer).[`$markDirty`](../variables/default.md#layermarkdirty)

***

### $markParentDirty()

> `protected` **$markParentDirty**(): `void`

Defined in: [display/Layer.ts:398](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L398)

#### Returns

`void`

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$markParentDirty`](../variables/default.md#layermarkparentdirty)

***

### $onTextureLoad()

> `protected` **$onTextureLoad**(): `void`

Defined in: [display/Image.ts:77](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L77)

#### Returns

`void`

***

### $render()

> `protected` **$render**(): `number`

Defined in: [display/Image.ts:133](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L133)

#### Returns

`number`

#### Overrides

[`Layer`](../variables/default.md#layer).[`$render`](../variables/default.md#layerrender)

***

### $resizeCanvas()

> `protected` **$resizeCanvas**(): `void`

Defined in: [display/Layer.ts:404](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L404)

#### Returns

`void`

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$resizeCanvas`](../variables/default.md#layerresizecanvas)

***

### $resizeParentCanvas()

> `protected` **$resizeParentCanvas**(): `void`

Defined in: [display/Layer.ts:428](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L428)

#### Returns

`void`

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$resizeParentCanvas`](../variables/default.md#layerresizeparentcanvas)

***

### $updatePattern()

> `protected` **$updatePattern**(): `void`

Defined in: [display/Image.ts:83](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Image.ts#L83)

#### Returns

`void`

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

[`Layer`](../variables/default.md#layer).[`addChild`](../variables/default.md#layeraddchild)

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

[`Layer`](../variables/default.md#layer).[`addChildAt`](../variables/default.md#layeraddchildat)

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

[`Layer`](../variables/default.md#layer).[`emit`](../variables/default.md#layeremit)

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

[`Layer`](../variables/default.md#layer).[`emit`](../variables/default.md#layeremit)

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

[`Layer`](../variables/default.md#layer).[`getChildAt`](../variables/default.md#layergetchildat)

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

[`Layer`](../variables/default.md#layer).[`getChildByName`](../variables/default.md#layergetchildbyname)

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

[`Layer`](../variables/default.md#layer).[`getChildIndex`](../variables/default.md#layergetchildindex)

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

[`Layer`](../variables/default.md#layer).[`getChildrenByTag`](../variables/default.md#layergetchildrenbytag)

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

[`Layer`](../variables/default.md#layer).[`hasChild`](../variables/default.md#layerhaschild)

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

[`Layer`](../variables/default.md#layer).[`hasEventListener`](../variables/default.md#layerhaseventlistener)

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

[`Layer`](../variables/default.md#layer).[`off`](../variables/default.md#layeroff)

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

[`Layer`](../variables/default.md#layer).[`on`](../variables/default.md#layeron)

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

[`Layer`](../variables/default.md#layer).[`once`](../variables/default.md#layeronce)

***

### removeAllChildren()

> **removeAllChildren**(): `this`

Defined in: [display/Layer.ts:372](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L372)

#### Returns

`this`

#### Inherited from

[`Layer`](../variables/default.md#layer).[`removeAllChildren`](../variables/default.md#layerremoveallchildren)

***

### removeAllListeners()

> **removeAllListeners**(): `this`

Defined in: [event/EventEmitter.ts:85](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L85)

#### Returns

`this`

#### Inherited from

[`Layer`](../variables/default.md#layer).[`removeAllListeners`](../variables/default.md#layerremovealllisteners)

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

[`Layer`](../variables/default.md#layer).[`removeChild`](../variables/default.md#layerremovechild)

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

[`Layer`](../variables/default.md#layer).[`removeChildAt`](../variables/default.md#layerremovechildat)

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

[`Layer`](../variables/default.md#layer).[`removeChildByName`](../variables/default.md#layerremovechildbyname)

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

[`Layer`](../variables/default.md#layer).[`removeChildrenByTag`](../variables/default.md#layerremovechildrenbytag)

***

### removeSelf()

> **removeSelf**(): `this`

Defined in: [display/Layer.ts:382](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L382)

#### Returns

`this`

#### Inherited from

[`Layer`](../variables/default.md#layer).[`removeSelf`](../variables/default.md#layerremoveself)

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

[`Layer`](../variables/default.md#layer).[`replaceChild`](../variables/default.md#layerreplacechild)

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

[`Layer`](../variables/default.md#layer).[`setChildIndex`](../variables/default.md#layersetchildindex)

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

[`Layer`](../variables/default.md#layer).[`swapChildren`](../variables/default.md#layerswapchildren)

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

[`Layer`](../variables/default.md#layer).[`swapChildrenAt`](../variables/default.md#layerswapchildrenat)
