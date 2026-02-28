[**API Reference**](../README.md)

***

[API Reference](../README.md) / Text

# Class: Text

Defined in: [display/Text.ts:4](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L4)

## Extends

- [`Layer`](../variables/default.md#layer)

## Constructors

### Constructor

> **new Text**(`text?`, `options?`): [`Text`](../variables/default.md#text)

Defined in: [display/Text.ts:29](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L29)

#### Parameters

##### text?

`string`

##### options?

[`TextOption`](../interfaces/TextOption.md) = `{}`

#### Returns

[`Text`](../variables/default.md#text)

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

### $autoFitSize

> `protected` **$autoFitSize**: `boolean` = `false`

Defined in: [display/Text.ts:24](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L24)

***

### $background

> `protected` **$background**: `string` = `null`

Defined in: [display/Layer.ts:32](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L32)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$background`](../variables/default.md#layerbackground)

***

### $breakWord

> `protected` **$breakWord**: `boolean` = `false`

Defined in: [display/Text.ts:23](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L23)

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

### $color

> `protected` **$color**: `string` = `'black'`

Defined in: [display/Text.ts:12](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L12)

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

### $explicitSize

> `protected` **$explicitSize**: `number` = `0`

Defined in: [display/Text.ts:26](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L26)

***

### $fontFamily

> `protected` **$fontFamily**: `string` = `'Helvetica'`

Defined in: [display/Text.ts:21](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L21)

***

### $fontSize

> `protected` **$fontSize**: `number` = `Text.defaultFontSize`

Defined in: [display/Text.ts:13](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L13)

***

### $fontStyle

> `protected` **$fontStyle**: [`FontStyle`](../type-aliases/FontStyle.md) = `'normal'`

Defined in: [display/Text.ts:14](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L14)

***

### $fontWeight

> `protected` **$fontWeight**: [`FontWeight`](../type-aliases/FontWeight.md) = `'normal'`

Defined in: [display/Text.ts:15](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L15)

***

### $height

> `protected` **$height**: `number` = `0`

Defined in: [display/Layer.ts:21](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L21)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$height`](../variables/default.md#layerheight)

***

### $lineHeight

> `protected` **$lineHeight**: `number` = `1.2`

Defined in: [display/Text.ts:18](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L18)

***

### $lines

> `protected` **$lines**: `string`[] = `[]`

Defined in: [display/Text.ts:27](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L27)

***

### $minFontSize

> `protected` **$minFontSize**: `number` = `0`

Defined in: [display/Text.ts:25](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L25)

***

### $multiline

> `protected` **$multiline**: `boolean` = `false`

Defined in: [display/Text.ts:22](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L22)

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

### $strokeColor

> `protected` **$strokeColor**: `string` = `null`

Defined in: [display/Text.ts:20](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L20)

***

### $strokeSize

> `protected` **$strokeSize**: `number` = `0`

Defined in: [display/Text.ts:19](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L19)

***

### $text

> `protected` **$text**: `string` = `''`

Defined in: [display/Text.ts:11](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L11)

***

### $textAlign

> `protected` **$textAlign**: [`TextAlign`](../type-aliases/TextAlign.md) = `'left'`

Defined in: [display/Text.ts:16](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L16)

***

### $touches

> `protected` **$touches**: `boolean`[] = `[]`

Defined in: [display/Layer.ts:38](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L38)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`$touches`](../variables/default.md#layertouches)

***

### $verticalAlign

> `protected` **$verticalAlign**: [`VerticalAlign`](../type-aliases/VerticalAlign.md) = `'top'`

Defined in: [display/Text.ts:17](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L17)

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

### boundaryRe

> `protected` `readonly` `static` **boundaryRe**: `RegExp`

Defined in: [display/Text.ts:9](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L9)

***

### defaultFontSize

> `static` **defaultFontSize**: `number` = `16`

Defined in: [display/Text.ts:6](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L6)

***

### pixelRatio

> `static` **pixelRatio**: `number`

Defined in: [display/Layer.ts:12](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L12)

#### Inherited from

[`Layer`](../variables/default.md#layer).[`pixelRatio`](../variables/default.md#layerpixelratio)

***

### wordRe

> `protected` `readonly` `static` **wordRe**: `RegExp`

Defined in: [display/Text.ts:8](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L8)

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

### autoFitSize

#### Get Signature

> **get** **autoFitSize**(): `boolean`

Defined in: [display/Text.ts:166](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L166)

##### Returns

`boolean`

#### Set Signature

> **set** **autoFitSize**(`autoFitSize`): `void`

Defined in: [display/Text.ts:170](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L170)

##### Parameters

###### autoFitSize

`boolean`

##### Returns

`void`

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

### breakWord

#### Get Signature

> **get** **breakWord**(): `boolean`

Defined in: [display/Text.ts:157](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L157)

##### Returns

`boolean`

#### Set Signature

> **set** **breakWord**(`breakWord`): `void`

Defined in: [display/Text.ts:161](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L161)

##### Parameters

###### breakWord

`boolean`

##### Returns

`void`

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

### color

#### Get Signature

> **get** **color**(): `string`

Defined in: [display/Text.ts:58](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L58)

##### Returns

`string`

#### Set Signature

> **set** **color**(`color`): `void`

Defined in: [display/Text.ts:62](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L62)

##### Parameters

###### color

`string`

##### Returns

`void`

***

### fontFamily

#### Get Signature

> **get** **fontFamily**(): `string`

Defined in: [display/Text.ts:139](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L139)

##### Returns

`string`

#### Set Signature

> **set** **fontFamily**(`fontFamily`): `void`

Defined in: [display/Text.ts:143](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L143)

##### Parameters

###### fontFamily

`string`

##### Returns

`void`

***

### fontSize

#### Get Signature

> **get** **fontSize**(): `number`

Defined in: [display/Text.ts:67](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L67)

##### Returns

`number`

#### Set Signature

> **set** **fontSize**(`fontSize`): `void`

Defined in: [display/Text.ts:71](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L71)

##### Parameters

###### fontSize

`number`

##### Returns

`void`

***

### fontStyle

#### Get Signature

> **get** **fontStyle**(): [`FontStyle`](../type-aliases/FontStyle.md)

Defined in: [display/Text.ts:76](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L76)

##### Returns

[`FontStyle`](../type-aliases/FontStyle.md)

#### Set Signature

> **set** **fontStyle**(`fontStyle`): `void`

Defined in: [display/Text.ts:80](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L80)

##### Parameters

###### fontStyle

[`FontStyle`](../type-aliases/FontStyle.md)

##### Returns

`void`

***

### fontWeight

#### Get Signature

> **get** **fontWeight**(): [`FontWeight`](../type-aliases/FontWeight.md)

Defined in: [display/Text.ts:85](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L85)

##### Returns

[`FontWeight`](../type-aliases/FontWeight.md)

#### Set Signature

> **set** **fontWeight**(`fontWeight`): `void`

Defined in: [display/Text.ts:89](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L89)

##### Parameters

###### fontWeight

[`FontWeight`](../type-aliases/FontWeight.md)

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

### lineHeight

#### Get Signature

> **get** **lineHeight**(): `number`

Defined in: [display/Text.ts:112](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L112)

##### Returns

`number`

#### Set Signature

> **set** **lineHeight**(`lineHeight`): `void`

Defined in: [display/Text.ts:116](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L116)

##### Parameters

###### lineHeight

`number`

##### Returns

`void`

***

### minFontSize

#### Get Signature

> **get** **minFontSize**(): `number`

Defined in: [display/Text.ts:175](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L175)

##### Returns

`number`

#### Set Signature

> **set** **minFontSize**(`minFontSize`): `void`

Defined in: [display/Text.ts:179](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L179)

##### Parameters

###### minFontSize

`number`

##### Returns

`void`

***

### multiline

#### Get Signature

> **get** **multiline**(): `boolean`

Defined in: [display/Text.ts:148](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L148)

##### Returns

`boolean`

#### Set Signature

> **set** **multiline**(`multiline`): `void`

Defined in: [display/Text.ts:152](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L152)

##### Parameters

###### multiline

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

### strokeColor

#### Get Signature

> **get** **strokeColor**(): `string`

Defined in: [display/Text.ts:130](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L130)

##### Returns

`string`

#### Set Signature

> **set** **strokeColor**(`strokeColor`): `void`

Defined in: [display/Text.ts:134](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L134)

##### Parameters

###### strokeColor

`string`

##### Returns

`void`

***

### strokeSize

#### Get Signature

> **get** **strokeSize**(): `number`

Defined in: [display/Text.ts:121](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L121)

##### Returns

`number`

#### Set Signature

> **set** **strokeSize**(`strokeSize`): `void`

Defined in: [display/Text.ts:125](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L125)

##### Parameters

###### strokeSize

`number`

##### Returns

`void`

***

### text

#### Get Signature

> **get** **text**(): `string`

Defined in: [display/Text.ts:49](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L49)

##### Returns

`string`

#### Set Signature

> **set** **text**(`text`): `void`

Defined in: [display/Text.ts:53](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L53)

##### Parameters

###### text

`string`

##### Returns

`void`

***

### textAlign

#### Get Signature

> **get** **textAlign**(): [`TextAlign`](../type-aliases/TextAlign.md)

Defined in: [display/Text.ts:94](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L94)

##### Returns

[`TextAlign`](../type-aliases/TextAlign.md)

#### Set Signature

> **set** **textAlign**(`textAlign`): `void`

Defined in: [display/Text.ts:98](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L98)

##### Parameters

###### textAlign

[`TextAlign`](../type-aliases/TextAlign.md)

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

### verticalAlign

#### Get Signature

> **get** **verticalAlign**(): [`VerticalAlign`](../type-aliases/VerticalAlign.md)

Defined in: [display/Text.ts:103](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L103)

##### Returns

[`VerticalAlign`](../type-aliases/VerticalAlign.md)

#### Set Signature

> **set** **verticalAlign**(`verticalAlign`): `void`

Defined in: [display/Text.ts:107](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L107)

##### Parameters

###### verticalAlign

[`VerticalAlign`](../type-aliases/VerticalAlign.md)

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

### $divideLines()

> `protected` **$divideLines**(): `void`

Defined in: [display/Text.ts:221](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L221)

#### Returns

`void`

***

### $divideUnits()

> `protected` **$divideUnits**(): `string`[]

Defined in: [display/Text.ts:199](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L199)

#### Returns

`string`[]

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

Defined in: [display/Text.ts:273](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L273)

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

### $render()

> `protected` **$render**(): `number`

Defined in: [display/Text.ts:288](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L288)

#### Returns

`number`

#### Overrides

[`Layer`](../variables/default.md#layer).[`$render`](../variables/default.md#layerrender)

***

### $resizeCanvas()

> `protected` **$resizeCanvas**(): `void`

Defined in: [display/Text.ts:253](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L253)

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

### $updateContext()

> `protected` **$updateContext**(): `void`

Defined in: [display/Text.ts:184](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L184)

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
