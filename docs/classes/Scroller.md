[**API Reference**](../README.md)

***

[API Reference](../README.md) / Scroller

# Class: Scroller

Defined in: [display/Scroller.ts:7](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L7)

## Extends

- [`Layer`](../variables/default.md#layer)

## Constructors

### Constructor

> **new Scroller**(): [`Scroller`](../variables/default.md#scroller)

Defined in: [display/Scroller.ts:23](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L23)

#### Returns

[`Scroller`](../variables/default.md#scroller)

#### Overrides

[`Layer`](../variables/default.md#layer).[`constructor`](../variables/default.md#layerconstructor)

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

### $height

> `protected` **$height**: `number` = `0`

Defined in: [display/Layer.ts:21](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L21)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$height`](../variables/default.md#layerheight)

***

### $inertiaTween

> `protected` **$inertiaTween**: [`Tween`](../variables/default.md#tween) = `null`

Defined in: [display/Scroller.ts:21](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L21)

***

### $parent

> `protected` **$parent**: [`Layer`](../variables/default.md#layer) = `null`

Defined in: [display/Layer.ts:34](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L34)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$parent`](../variables/default.md#layerparent)

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

### $scrollHeight

> `protected` **$scrollHeight**: `number` = `0`

Defined in: [display/Scroller.ts:14](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L14)

***

### $scrollLeft

> `protected` **$scrollLeft**: `number` = `0`

Defined in: [display/Scroller.ts:12](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L12)

***

### $scrollTop

> `protected` **$scrollTop**: `number` = `0`

Defined in: [display/Scroller.ts:11](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L11)

***

### $scrollWidth

> `protected` **$scrollWidth**: `number` = `0`

Defined in: [display/Scroller.ts:13](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L13)

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

### $touches

> `protected` **$touches**: `boolean`[] = `[]`

Defined in: [display/Layer.ts:38](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L38)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$touches`](../variables/default.md#layertouches)

***

### $touchingId

> `protected` **$touchingId**: `number` = `null`

Defined in: [display/Scroller.ts:17](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L17)

***

### $touchingTime

> `protected` **$touchingTime**: `number` = `null`

Defined in: [display/Scroller.ts:18](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L18)

***

### $touchingX

> `protected` **$touchingX**: `number` = `null`

Defined in: [display/Scroller.ts:15](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L15)

***

### $touchingY

> `protected` **$touchingY**: `number` = `null`

Defined in: [display/Scroller.ts:16](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L16)

***

### $velocitiesX

> `protected` **$velocitiesX**: `number`[] = `[]`

Defined in: [display/Scroller.ts:19](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L19)

***

### $velocitiesY

> `protected` **$velocitiesY**: `number`[] = `[]`

Defined in: [display/Scroller.ts:20](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L20)

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

### scrollingView

> `protected` `static` **scrollingView**: [`Scroller`](../variables/default.md#scroller)

Defined in: [display/Scroller.ts:9](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L9)

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

### scrollHeight

#### Get Signature

> **get** **scrollHeight**(): `number`

Defined in: [display/Scroller.ts:67](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L67)

##### Returns

`number`

***

### scrollLeft

#### Get Signature

> **get** **scrollLeft**(): `number`

Defined in: [display/Scroller.ts:48](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L48)

##### Returns

`number`

#### Set Signature

> **set** **scrollLeft**(`scrollLeft`): `void`

Defined in: [display/Scroller.ts:52](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L52)

##### Parameters

###### scrollLeft

`number`

##### Returns

`void`

***

### scrollTop

#### Get Signature

> **get** **scrollTop**(): `number`

Defined in: [display/Scroller.ts:33](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L33)

##### Returns

`number`

#### Set Signature

> **set** **scrollTop**(`scrollTop`): `void`

Defined in: [display/Scroller.ts:37](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L37)

##### Parameters

###### scrollTop

`number`

##### Returns

`void`

***

### scrollWidth

#### Get Signature

> **get** **scrollWidth**(): `number`

Defined in: [display/Scroller.ts:63](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L63)

##### Returns

`number`

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

Defined in: [display/Scroller.ts:170](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L170)

#### Returns

`void`

#### Overrides

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

Defined in: [display/Scroller.ts:71](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L71)

#### Parameters

##### child

[`Layer`](../variables/default.md#layer)

#### Returns

[`Matrix`](../variables/default.md#matrix)

#### Overrides

[`Layer`](../variables/default.md#layer).[`$getChildTransform`](../variables/default.md#layergetchildtransform)

***

### $getContentBounds()

> `protected` **$getContentBounds**(): [`Rectangle`](../variables/default.md#rectangle)

Defined in: [display/Layer.ts:474](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L474)

#### Returns

[`Rectangle`](../variables/default.md#rectangle)

#### Inherited from

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

### $onTouchCancel()

> `protected` **$onTouchCancel**(`e`): `void`

Defined in: [display/Scroller.ts:164](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L164)

#### Parameters

##### e

[`TouchEvent`](../variables/default.md#touchevent)

#### Returns

`void`

***

### $onTouchEnd()

> `protected` **$onTouchEnd**(`e`): `void`

Defined in: [display/Scroller.ts:130](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L130)

#### Parameters

##### e

[`TouchEvent`](../variables/default.md#touchevent)

#### Returns

`void`

***

### $onTouchMove()

> `protected` **$onTouchMove**(`e`): `void`

Defined in: [display/Scroller.ts:99](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L99)

#### Parameters

##### e

[`TouchEvent`](../variables/default.md#touchevent)

#### Returns

`void`

***

### $onTouchStart()

> `protected` **$onTouchStart**(`e`): `void`

Defined in: [display/Scroller.ts:86](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L86)

#### Parameters

##### e

[`TouchEvent`](../variables/default.md#touchevent)

#### Returns

`void`

***

### $render()

> `protected` **$render**(): `number`

Defined in: [display/Layer.ts:636](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L636)

#### Returns

`number`

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$render`](../variables/default.md#layerrender)

***

### $resizeCanvas()

> `protected` **$resizeCanvas**(): `void`

Defined in: [display/Scroller.ts:77](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Scroller.ts#L77)

#### Returns

`void`

#### Overrides

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
