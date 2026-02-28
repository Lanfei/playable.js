[**API Reference**](../README.md)

***

[API Reference](../README.md) / Stage

# Class: Stage

Defined in: [display/Stage.ts:9](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L9)

## Extends

- [`Layer`](../variables/default.md#layer)

## Constructors

### Constructor

> **new Stage**(`canvas?`): [`Stage`](../variables/default.md#stage)

Defined in: [display/Stage.ts:33](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L33)

#### Parameters

##### canvas?

`HTMLCanvasElement`

#### Returns

[`Stage`](../variables/default.md#stage)

#### Overrides

[`Layer`](../variables/default.md#layer).[`constructor`](../variables/default.md#layerconstructor)

## Properties

### $activated

> `protected` **$activated**: `boolean` = `false`

Defined in: [display/Stage.ts:21](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L21)

***

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

### $boundResizeViewportCanvas()

> `protected` `readonly` **$boundResizeViewportCanvas**: () => `void`

Defined in: [display/Stage.ts:31](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L31)

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

### $drawCalls

> `protected` **$drawCalls**: `number` = `0`

Defined in: [display/Stage.ts:20](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L20)

***

### $elementEvents

> `protected` `readonly` **$elementEvents**: `ElementEvent`[]

Defined in: [display/Stage.ts:27](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L27)

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

### $renderBounds

> `protected` `readonly` **$renderBounds**: [`Rectangle`](../variables/default.md#rectangle)

Defined in: [display/Stage.ts:30](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L30)

***

### $rotation

> `protected` **$rotation**: `number` = `0`

Defined in: [display/Layer.ts:28](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L28)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$rotation`](../variables/default.md#layerrotation)

***

### $scaleMode

> `protected` **$scaleMode**: `string` = `Stage.SHOW_ALL`

Defined in: [display/Stage.ts:22](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L22)

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

### $ticker

> `protected` `readonly` **$ticker**: [`Ticker`](../variables/default.md#ticker)

Defined in: [display/Stage.ts:26](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L26)

***

### $touches

> `protected` **$touches**: `boolean`[] = `[]`

Defined in: [display/Layer.ts:38](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L38)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$touches`](../variables/default.md#layertouches)

***

### $viewportBackground

> `protected` **$viewportBackground**: `string` = `null`

Defined in: [display/Stage.ts:25](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L25)

***

### $viewportCanvas

> `protected` `readonly` **$viewportCanvas**: `HTMLCanvasElement`

Defined in: [display/Stage.ts:28](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L28)

***

### $viewportContext

> `protected` `readonly` **$viewportContext**: `CanvasRenderingContext2D`

Defined in: [display/Stage.ts:29](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L29)

***

### $viewportHeight

> `protected` **$viewportHeight**: `number` = `0`

Defined in: [display/Stage.ts:24](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L24)

***

### $viewportWidth

> `protected` **$viewportWidth**: `number` = `0`

Defined in: [display/Stage.ts:23](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L23)

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

### EXACT\_FIT

> `readonly` `static` **EXACT\_FIT**: `string` = `'exactFit'`

Defined in: [display/Stage.ts:12](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L12)

***

### FIXED\_HEIGHT

> `readonly` `static` **FIXED\_HEIGHT**: `string` = `'fixedHeight'`

Defined in: [display/Stage.ts:18](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L18)

***

### FIXED\_NARROW

> `readonly` `static` **FIXED\_NARROW**: `string` = `'fixedNarrow'`

Defined in: [display/Stage.ts:16](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L16)

***

### FIXED\_WIDE

> `readonly` `static` **FIXED\_WIDE**: `string` = `'fixedWide'`

Defined in: [display/Stage.ts:15](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L15)

***

### FIXED\_WIDTH

> `readonly` `static` **FIXED\_WIDTH**: `string` = `'fixedWidth'`

Defined in: [display/Stage.ts:17](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L17)

***

### NO\_BORDER

> `readonly` `static` **NO\_BORDER**: `string` = `'noBorder'`

Defined in: [display/Stage.ts:14](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L14)

***

### NO\_SCALE

> `readonly` `static` **NO\_SCALE**: `string` = `'noScale'`

Defined in: [display/Stage.ts:13](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L13)

***

### pixelRatio

> `static` **pixelRatio**: `number`

Defined in: [display/Layer.ts:12](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L12)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`pixelRatio`](../variables/default.md#layerpixelratio)

***

### SHOW\_ALL

> `readonly` `static` **SHOW\_ALL**: `string` = `'showAll'`

Defined in: [display/Stage.ts:11](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L11)

## Accessors

### activated

#### Get Signature

> **get** **activated**(): `boolean`

Defined in: [display/Stage.ts:81](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L81)

##### Returns

`boolean`

***

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

### drawCalls

#### Get Signature

> **get** **drawCalls**(): `number`

Defined in: [display/Stage.ts:77](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L77)

##### Returns

`number`

***

### fps

#### Get Signature

> **get** **fps**(): `number`

Defined in: [display/Stage.ts:73](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L73)

##### Returns

`number`

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

[`MovieClip`](MovieClip.md).[`height`](MovieClip.md#height-1)

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

### scaleMode

#### Get Signature

> **get** **scaleMode**(): `string`

Defined in: [display/Stage.ts:85](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L85)

##### Returns

`string`

#### Set Signature

> **set** **scaleMode**(`scaleMode`): `void`

Defined in: [display/Stage.ts:89](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L89)

##### Parameters

###### scaleMode

`string`

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

### ticker

#### Get Signature

> **get** **ticker**(): [`Ticker`](../variables/default.md#ticker)

Defined in: [display/Stage.ts:69](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L69)

##### Returns

[`Ticker`](../variables/default.md#ticker)

#### Overrides

[`Layer`](../variables/default.md#layer).[`ticker`](../variables/default.md#layerticker)

***

### viewportBackground

#### Get Signature

> **get** **viewportBackground**(): `string`

Defined in: [display/Stage.ts:122](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L122)

##### Returns

`string`

#### Set Signature

> **set** **viewportBackground**(`viewportBackground`): `void`

Defined in: [display/Stage.ts:126](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L126)

##### Parameters

###### viewportBackground

`string`

##### Returns

`void`

***

### viewportCanvas

#### Get Signature

> **get** **viewportCanvas**(): `HTMLCanvasElement`

Defined in: [display/Stage.ts:96](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L96)

##### Returns

`HTMLCanvasElement`

***

### viewportHeight

#### Get Signature

> **get** **viewportHeight**(): `number`

Defined in: [display/Stage.ts:111](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L111)

##### Returns

`number`

#### Set Signature

> **set** **viewportHeight**(`height`): `void`

Defined in: [display/Stage.ts:115](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L115)

##### Parameters

###### height

`number`

##### Returns

`void`

***

### viewportWidth

#### Get Signature

> **get** **viewportWidth**(): `number`

Defined in: [display/Stage.ts:100](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L100)

##### Returns

`number`

#### Set Signature

> **set** **viewportWidth**(`width`): `void`

Defined in: [display/Stage.ts:104](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L104)

##### Parameters

###### width

`number`

##### Returns

`void`

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

[`MovieClip`](MovieClip.md).[`width`](MovieClip.md#width-1)

***

### x

#### Get Signature

> **get** **x**(): `number`

Defined in: [display/Stage.ts:53](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L53)

##### Returns

`number`

#### Set Signature

> **set** **x**(`x`): `void`

Defined in: [display/Stage.ts:57](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L57)

##### Parameters

###### x

`number`

##### Returns

`void`

#### Overrides

[`Layer`](../variables/default.md#layer).[`x`](../variables/default.md#layerx-1)

***

### y

#### Get Signature

> **get** **y**(): `number`

Defined in: [display/Stage.ts:61](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L61)

##### Returns

`number`

#### Set Signature

> **set** **y**(`y`): `void`

Defined in: [display/Stage.ts:65](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L65)

##### Parameters

###### y

`number`

##### Returns

`void`

#### Overrides

[`Layer`](../variables/default.md#layer).[`y`](../variables/default.md#layery-1)

## Methods

### $addElementEvent()

> `protected` **$addElementEvent**(`target`, `type`, `listener`, `options?`): `void`

Defined in: [display/Stage.ts:183](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L183)

#### Parameters

##### target

`EventTarget`

##### type

`string`

##### listener

(`event`) => `void`

##### options?

`boolean` | `AddEventListenerOptions`

#### Returns

`void`

***

### $addTouchEventListeners()

> `protected` **$addTouchEventListeners**(): `void`

Defined in: [display/Stage.ts:196](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L196)

#### Returns

`void`

***

### $calculateRenderBounds()

> `protected` **$calculateRenderBounds**(): `void`

Defined in: [display/Stage.ts:275](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L275)

#### Returns

`void`

***

### $dispatchTouches()

> `protected` **$dispatchTouches**(`type`, `event`): `void`

Defined in: [display/Stage.ts:237](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L237)

#### Parameters

##### type

`string`

##### event

`any`

#### Returns

`void`

***

### $dispatchTouchEvent()

> `protected` **$dispatchTouchEvent**(`type`, `pageX`, `pageY`, `identifier`): `void`

Defined in: [display/Stage.ts:245](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L245)

#### Parameters

##### type

`string`

##### pageX

`number`

##### pageY

`number`

##### identifier

`number`

#### Returns

`void`

***

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

### $initEvents()

> `protected` **$initEvents**(): `void`

Defined in: [display/Stage.ts:151](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L151)

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

### $removeElementEvents()

> `protected` **$removeElementEvents**(): `void`

Defined in: [display/Stage.ts:188](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L188)

#### Returns

`void`

***

### $render()

> `protected` **$render**(): `number`

Defined in: [display/Stage.ts:367](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L367)

#### Returns

`number`

#### Overrides

[`Layer`](../variables/default.md#layer).[`$render`](../variables/default.md#layerrender)

***

### $resizeCanvas()

> `protected` **$resizeCanvas**(): `void`

Defined in: [display/Stage.ts:344](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L344)

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

### $resizeViewportCanvas()

> `protected` **$resizeViewportCanvas**(): `void`

Defined in: [display/Stage.ts:349](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L349)

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

### createResourceManager()

> **createResourceManager**(`list`, `options?`): [`ResourceManager`](../variables/default.md#resourcemanager)

Defined in: [display/Stage.ts:131](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L131)

#### Parameters

##### list

[`ResourceInfo`](../interfaces/ResourceInfo.md)[]

##### options?

[`ResourceManagerOption`](../interfaces/ResourceManagerOption.md)

#### Returns

[`ResourceManager`](../variables/default.md#resourcemanager)

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

Defined in: [display/Stage.ts:135](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Stage.ts#L135)

#### Returns

`this`

#### Overrides

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
