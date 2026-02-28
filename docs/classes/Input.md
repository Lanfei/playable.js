[**API Reference**](../README.md)

***

[API Reference](../README.md) / Input

# Class: Input

Defined in: [display/Input.ts:4](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L4)

## Extends

- [`Text`](../variables/default.md#text)

## Constructors

### Constructor

> **new Input**(`value?`, `options?`): [`Input`](../variables/default.md#input)

Defined in: [display/Input.ts:18](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L18)

#### Parameters

##### value?

`string`

##### options?

[`InputOption`](../interfaces/InputOption.md) = `{}`

#### Returns

[`Input`](../variables/default.md#input)

#### Overrides

[`Text`](../variables/default.md#text).[`constructor`](../variables/default.md#textconstructor)

## Properties

### $alpha

> `protected` **$alpha**: `number` = `1`

Defined in: [display/Layer.ts:29](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L29)

#### Inherited from

[`Text`](../variables/default.md#text).[`$alpha`](../variables/default.md#textalpha)

***

### $anchorX

> `protected` **$anchorX**: `number` = `0`

Defined in: [display/Layer.ts:22](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L22)

#### Inherited from

[`Text`](../variables/default.md#text).[`$anchorX`](../variables/default.md#textanchorx)

***

### $anchorY

> `protected` **$anchorY**: `number` = `0`

Defined in: [display/Layer.ts:23](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L23)

#### Inherited from

[`Text`](../variables/default.md#text).[`$anchorY`](../variables/default.md#textanchory)

***

### $autoFitSize

> `protected` **$autoFitSize**: `boolean` = `false`

Defined in: [display/Text.ts:24](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L24)

#### Inherited from

[`Text`](../variables/default.md#text).[`$autoFitSize`](../variables/default.md#textautofitsize)

***

### $background

> `protected` **$background**: `string` = `null`

Defined in: [display/Layer.ts:32](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L32)

#### Inherited from

[`Text`](../variables/default.md#text).[`$background`](../variables/default.md#textbackground)

***

### $boundFocus()

> `protected` **$boundFocus**: () => `void`

Defined in: [display/Input.ts:16](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L16)

#### Returns

`void`

***

### $breakWord

> `protected` **$breakWord**: `boolean` = `false`

Defined in: [display/Text.ts:23](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L23)

#### Inherited from

[`Text`](../variables/default.md#text).[`$breakWord`](../variables/default.md#textbreakword)

***

### $canvas

> `protected` `readonly` **$canvas**: `HTMLCanvasElement`

Defined in: [display/Layer.ts:39](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L39)

#### Inherited from

[`Text`](../variables/default.md#text).[`$canvas`](../variables/default.md#textcanvas)

***

### $children

> `protected` **$children**: [`Layer`](../variables/default.md#layer)[] = `[]`

Defined in: [display/Layer.ts:35](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L35)

#### Inherited from

[`Text`](../variables/default.md#text).[`$children`](../variables/default.md#textchildren)

***

### $color

> `protected` **$color**: `string` = `'black'`

Defined in: [display/Text.ts:12](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L12)

#### Inherited from

[`Text`](../variables/default.md#text).[`$color`](../variables/default.md#textcolor)

***

### $context

> `protected` `readonly` **$context**: `CanvasRenderingContext2D`

Defined in: [display/Layer.ts:40](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L40)

#### Inherited from

[`Text`](../variables/default.md#text).[`$context`](../variables/default.md#textcontext)

***

### $dirty

> `protected` **$dirty**: `boolean` = `true`

Defined in: [display/Layer.ts:36](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L36)

#### Inherited from

[`Text`](../variables/default.md#text).[`$dirty`](../variables/default.md#textdirty)

***

### $emittingType

> `protected` **$emittingType**: `string` = `null`

Defined in: [event/EventEmitter.ts:6](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L6)

#### Inherited from

[`Text`](../variables/default.md#text).[`$emittingType`](../variables/default.md#textemittingtype)

***

### $events

> `protected` **$events**: `Object` = `{}`

Defined in: [event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L5)

#### Inherited from

[`Text`](../variables/default.md#text).[`$events`](../variables/default.md#textevents)

***

### $explicitColor

> `protected` **$explicitColor**: `string` = `'black'`

Defined in: [display/Input.ts:15](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L15)

***

### $explicitSize

> `protected` **$explicitSize**: `number` = `0`

Defined in: [display/Text.ts:26](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L26)

#### Inherited from

[`Text`](../variables/default.md#text).[`$explicitSize`](../variables/default.md#textexplicitsize)

***

### $fontFamily

> `protected` **$fontFamily**: `string` = `'Helvetica'`

Defined in: [display/Text.ts:21](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L21)

#### Inherited from

[`Text`](../variables/default.md#text).[`$fontFamily`](../variables/default.md#textfontfamily)

***

### $fontSize

> `protected` **$fontSize**: `number` = `Text.defaultFontSize`

Defined in: [display/Text.ts:13](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L13)

#### Inherited from

[`Text`](../variables/default.md#text).[`$fontSize`](../variables/default.md#textfontsize)

***

### $fontStyle

> `protected` **$fontStyle**: [`FontStyle`](../type-aliases/FontStyle.md) = `'normal'`

Defined in: [display/Text.ts:14](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L14)

#### Inherited from

[`Text`](../variables/default.md#text).[`$fontStyle`](../variables/default.md#textfontstyle)

***

### $fontWeight

> `protected` **$fontWeight**: [`FontWeight`](../type-aliases/FontWeight.md) = `'normal'`

Defined in: [display/Text.ts:15](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L15)

#### Inherited from

[`Text`](../variables/default.md#text).[`$fontWeight`](../variables/default.md#textfontweight)

***

### $height

> `protected` **$height**: `number` = `0`

Defined in: [display/Layer.ts:21](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L21)

#### Inherited from

[`Text`](../variables/default.md#text).[`$height`](../variables/default.md#textheight)

***

### $lineHeight

> `protected` **$lineHeight**: `number` = `1.2`

Defined in: [display/Text.ts:18](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L18)

#### Inherited from

[`Text`](../variables/default.md#text).[`$lineHeight`](../variables/default.md#textlineheight)

***

### $lines

> `protected` **$lines**: `string`[] = `[]`

Defined in: [display/Text.ts:27](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L27)

#### Inherited from

[`Text`](../variables/default.md#text).[`$lines`](../variables/default.md#textlines)

***

### $maxLength

> `protected` **$maxLength**: `number` = `0xffffff`

Defined in: [display/Input.ts:12](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L12)

***

### $minFontSize

> `protected` **$minFontSize**: `number` = `0`

Defined in: [display/Text.ts:25](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L25)

#### Inherited from

[`Text`](../variables/default.md#text).[`$minFontSize`](../variables/default.md#textminfontsize)

***

### $multiline

> `protected` **$multiline**: `boolean` = `false`

Defined in: [display/Text.ts:22](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L22)

#### Inherited from

[`Text`](../variables/default.md#text).[`$multiline`](../variables/default.md#textmultiline)

***

### $parent

> `protected` **$parent**: [`Layer`](../variables/default.md#layer) = `null`

Defined in: [display/Layer.ts:34](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L34)

#### Inherited from

[`Text`](../variables/default.md#text).[`$parent`](../variables/default.md#textparent)

***

### $placeholder

> `protected` **$placeholder**: `string` = `''`

Defined in: [display/Input.ts:13](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L13)

***

### $placeholderColor

> `protected` **$placeholderColor**: `string` = `'#888'`

Defined in: [display/Input.ts:14](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L14)

***

### $removedListeners

> `protected` **$removedListeners**: [`Listener`](../type-aliases/Listener.md)[] = `[]`

Defined in: [event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L7)

#### Inherited from

[`Text`](../variables/default.md#text).[`$removedListeners`](../variables/default.md#textremovedlisteners)

***

### $rotation

> `protected` **$rotation**: `number` = `0`

Defined in: [display/Layer.ts:28](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L28)

#### Inherited from

[`Text`](../variables/default.md#text).[`$rotation`](../variables/default.md#textrotation)

***

### $scaleX

> `protected` **$scaleX**: `number` = `1`

Defined in: [display/Layer.ts:26](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L26)

#### Inherited from

[`Text`](../variables/default.md#text).[`$scaleX`](../variables/default.md#textscalex)

***

### $scaleY

> `protected` **$scaleY**: `number` = `1`

Defined in: [display/Layer.ts:27](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L27)

#### Inherited from

[`Text`](../variables/default.md#text).[`$scaleY`](../variables/default.md#textscaley)

***

### $shouldEmitTap

> `protected` **$shouldEmitTap**: `boolean` = `true`

Defined in: [display/Layer.ts:37](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L37)

#### Inherited from

[`Text`](../variables/default.md#text).[`$shouldEmitTap`](../variables/default.md#textshouldemittap)

***

### $skewX

> `protected` **$skewX**: `number` = `0`

Defined in: [display/Layer.ts:24](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L24)

#### Inherited from

[`Text`](../variables/default.md#text).[`$skewX`](../variables/default.md#textskewx)

***

### $skewY

> `protected` **$skewY**: `number` = `0`

Defined in: [display/Layer.ts:25](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L25)

#### Inherited from

[`Text`](../variables/default.md#text).[`$skewY`](../variables/default.md#textskewy)

***

### $smoothing

> `protected` **$smoothing**: `boolean` = `true`

Defined in: [display/Layer.ts:31](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L31)

#### Inherited from

[`Text`](../variables/default.md#text).[`$smoothing`](../variables/default.md#textsmoothing)

***

### $stage

> `protected` **$stage**: [`Stage`](../variables/default.md#stage) = `null`

Defined in: [display/Layer.ts:33](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L33)

#### Inherited from

[`Text`](../variables/default.md#text).[`$stage`](../variables/default.md#textstage)

***

### $strokeColor

> `protected` **$strokeColor**: `string` = `null`

Defined in: [display/Text.ts:20](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L20)

#### Inherited from

[`Text`](../variables/default.md#text).[`$strokeColor`](../variables/default.md#textstrokecolor)

***

### $strokeSize

> `protected` **$strokeSize**: `number` = `0`

Defined in: [display/Text.ts:19](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L19)

#### Inherited from

[`Text`](../variables/default.md#text).[`$strokeSize`](../variables/default.md#textstrokesize)

***

### $text

> `protected` **$text**: `string` = `''`

Defined in: [display/Text.ts:11](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L11)

#### Inherited from

[`Text`](../variables/default.md#text).[`$text`](../variables/default.md#texttext)

***

### $textAlign

> `protected` **$textAlign**: [`TextAlign`](../type-aliases/TextAlign.md) = `'left'`

Defined in: [display/Text.ts:16](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L16)

#### Inherited from

[`Text`](../variables/default.md#text).[`$textAlign`](../variables/default.md#texttextalign)

***

### $touches

> `protected` **$touches**: `boolean`[] = `[]`

Defined in: [display/Layer.ts:38](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L38)

#### Inherited from

[`Text`](../variables/default.md#text).[`$touches`](../variables/default.md#texttouches)

***

### $type

> `protected` **$type**: [`InputType`](../type-aliases/InputType.md) = `'text'`

Defined in: [display/Input.ts:11](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L11)

***

### $value

> `protected` **$value**: `string` = `''`

Defined in: [display/Input.ts:10](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L10)

***

### $verticalAlign

> `protected` **$verticalAlign**: [`VerticalAlign`](../type-aliases/VerticalAlign.md) = `'top'`

Defined in: [display/Text.ts:17](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L17)

#### Inherited from

[`Text`](../variables/default.md#text).[`$verticalAlign`](../variables/default.md#textverticalalign)

***

### $visible

> `protected` **$visible**: `boolean` = `true`

Defined in: [display/Layer.ts:30](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L30)

#### Inherited from

[`Text`](../variables/default.md#text).[`$visible`](../variables/default.md#textvisible)

***

### $width

> `protected` **$width**: `number` = `0`

Defined in: [display/Layer.ts:20](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L20)

#### Inherited from

[`Text`](../variables/default.md#text).[`$width`](../variables/default.md#textwidth)

***

### $x

> `protected` **$x**: `number` = `0`

Defined in: [display/Layer.ts:18](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L18)

#### Inherited from

[`Text`](../variables/default.md#text).[`$x`](../variables/default.md#textx)

***

### $y

> `protected` **$y**: `number` = `0`

Defined in: [display/Layer.ts:19](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L19)

#### Inherited from

[`Text`](../variables/default.md#text).[`$y`](../variables/default.md#texty)

***

### name

> **name**: `string` = `''`

Defined in: [display/Layer.ts:14](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L14)

#### Inherited from

[`Text`](../variables/default.md#text).[`name`](../variables/default.md#textname)

***

### tag

> **tag**: `string` = `''`

Defined in: [display/Layer.ts:15](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L15)

#### Inherited from

[`Text`](../variables/default.md#text).[`tag`](../variables/default.md#texttag)

***

### touchable

> **touchable**: `boolean` = `true`

Defined in: [display/Layer.ts:16](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L16)

#### Inherited from

[`Text`](../variables/default.md#text).[`touchable`](../variables/default.md#texttouchable)

***

### $focusedInput

> `protected` `static` **$focusedInput**: [`Input`](../variables/default.md#input)

Defined in: [display/Input.ts:6](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L6)

***

### $inputElement

> `protected` `static` **$inputElement**: `HTMLInputElement`

Defined in: [display/Input.ts:7](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L7)

***

### $textAreaElement

> `protected` `static` **$textAreaElement**: `HTMLTextAreaElement`

Defined in: [display/Input.ts:8](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L8)

***

### boundaryRe

> `protected` `readonly` `static` **boundaryRe**: `RegExp`

Defined in: [display/Text.ts:9](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L9)

#### Inherited from

[`Text`](../variables/default.md#text).[`boundaryRe`](../variables/default.md#textboundaryre)

***

### defaultFontSize

> `static` **defaultFontSize**: `number` = `16`

Defined in: [display/Text.ts:6](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L6)

#### Inherited from

[`Text`](../variables/default.md#text).[`defaultFontSize`](../variables/default.md#textdefaultfontsize)

***

### pixelRatio

> `static` **pixelRatio**: `number`

Defined in: [display/Layer.ts:12](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L12)

#### Inherited from

[`Text`](../variables/default.md#text).[`pixelRatio`](../variables/default.md#textpixelratio)

***

### wordRe

> `protected` `readonly` `static` **wordRe**: `RegExp`

Defined in: [display/Text.ts:8](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L8)

#### Inherited from

[`Text`](../variables/default.md#text).[`wordRe`](../variables/default.md#textwordre)

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

[`Text`](../variables/default.md#text).[`alpha`](../variables/default.md#textalpha-1)

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

[`Text`](../variables/default.md#text).[`anchorX`](../variables/default.md#textanchorx-1)

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

[`Text`](../variables/default.md#text).[`anchorY`](../variables/default.md#textanchory-1)

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

#### Inherited from

[`Text`](../variables/default.md#text).[`autoFitSize`](../variables/default.md#textautofitsize-1)

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

[`Text`](../variables/default.md#text).[`background`](../variables/default.md#textbackground-1)

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

#### Inherited from

[`Text`](../variables/default.md#text).[`breakWord`](../variables/default.md#textbreakword-1)

***

### canvas

#### Get Signature

> **get** **canvas**(): `HTMLCanvasElement`

Defined in: [display/Layer.ts:227](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L227)

##### Returns

`HTMLCanvasElement`

#### Inherited from

[`Text`](../variables/default.md#text).[`canvas`](../variables/default.md#textcanvas-1)

***

### color

#### Get Signature

> **get** **color**(): `string`

Defined in: [display/Input.ts:51](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L51)

##### Returns

`string`

#### Set Signature

> **set** **color**(`color`): `void`

Defined in: [display/Input.ts:55](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L55)

##### Parameters

###### color

`string`

##### Returns

`void`

#### Overrides

[`Text`](../variables/default.md#text).[`color`](../variables/default.md#textcolor-1)

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

#### Inherited from

[`Text`](../variables/default.md#text).[`fontFamily`](../variables/default.md#textfontfamily-1)

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

#### Inherited from

[`Text`](../variables/default.md#text).[`fontSize`](../variables/default.md#textfontsize-1)

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

#### Inherited from

[`Text`](../variables/default.md#text).[`fontStyle`](../variables/default.md#textfontstyle-1)

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

#### Inherited from

[`Text`](../variables/default.md#text).[`fontWeight`](../variables/default.md#textfontweight-1)

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

[`Text`](../variables/default.md#text).[`height`](../variables/default.md#textheight-1)

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

#### Inherited from

[`Text`](../variables/default.md#text).[`lineHeight`](../variables/default.md#textlineheight-1)

***

### maxLength

#### Get Signature

> **get** **maxLength**(): `number`

Defined in: [display/Input.ts:65](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L65)

##### Returns

`number`

#### Set Signature

> **set** **maxLength**(`maxLength`): `void`

Defined in: [display/Input.ts:69](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L69)

##### Parameters

###### maxLength

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

#### Inherited from

[`Text`](../variables/default.md#text).[`minFontSize`](../variables/default.md#textminfontsize-1)

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

#### Inherited from

[`Text`](../variables/default.md#text).[`multiline`](../variables/default.md#textmultiline-1)

***

### numChildren

#### Get Signature

> **get** **numChildren**(): `number`

Defined in: [display/Layer.ts:219](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L219)

##### Returns

`number`

#### Inherited from

[`Text`](../variables/default.md#text).[`numChildren`](../variables/default.md#textnumchildren)

***

### parent

#### Get Signature

> **get** **parent**(): [`Layer`](../variables/default.md#layer)

Defined in: [display/Layer.ts:215](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L215)

##### Returns

[`Layer`](../variables/default.md#layer)

#### Inherited from

[`Text`](../variables/default.md#text).[`parent`](../variables/default.md#textparent-1)

***

### placeholder

#### Get Signature

> **get** **placeholder**(): `string`

Defined in: [display/Input.ts:73](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L73)

##### Returns

`string`

#### Set Signature

> **set** **placeholder**(`placeholder`): `void`

Defined in: [display/Input.ts:77](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L77)

##### Parameters

###### placeholder

`string`

##### Returns

`void`

***

### placeholderColor

#### Get Signature

> **get** **placeholderColor**(): `string`

Defined in: [display/Input.ts:82](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L82)

##### Returns

`string`

#### Set Signature

> **set** **placeholderColor**(`placeholderColor`): `void`

Defined in: [display/Input.ts:86](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L86)

##### Parameters

###### placeholderColor

`string`

##### Returns

`void`

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

[`Text`](../variables/default.md#text).[`rotation`](../variables/default.md#textrotation-1)

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

[`Text`](../variables/default.md#text).[`scaleX`](../variables/default.md#textscalex-1)

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

[`Text`](../variables/default.md#text).[`scaleY`](../variables/default.md#textscaley-1)

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

[`Text`](../variables/default.md#text).[`skewX`](../variables/default.md#textskewx-1)

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

[`Text`](../variables/default.md#text).[`skewY`](../variables/default.md#textskewy-1)

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

[`Text`](../variables/default.md#text).[`smoothing`](../variables/default.md#textsmoothing-1)

***

### stage

#### Get Signature

> **get** **stage**(): [`Stage`](../variables/default.md#stage)

Defined in: [display/Layer.ts:211](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L211)

##### Returns

[`Stage`](../variables/default.md#stage)

#### Inherited from

[`Text`](../variables/default.md#text).[`stage`](../variables/default.md#textstage-1)

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

#### Inherited from

[`Text`](../variables/default.md#text).[`strokeColor`](../variables/default.md#textstrokecolor-1)

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

#### Inherited from

[`Text`](../variables/default.md#text).[`strokeSize`](../variables/default.md#textstrokesize-1)

***

### text

#### Set Signature

> **set** **text**(`text`): `void`

Defined in: [display/Input.ts:30](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L30)

##### Parameters

###### text

`string`

##### Returns

`void`

#### Overrides

[`Text`](../variables/default.md#text).[`text`](../variables/default.md#texttext-1)

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

#### Inherited from

[`Text`](../variables/default.md#text).[`textAlign`](../variables/default.md#texttextalign-1)

***

### ticker

#### Get Signature

> **get** **ticker**(): [`Ticker`](../variables/default.md#ticker)

Defined in: [display/Layer.ts:223](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L223)

##### Returns

[`Ticker`](../variables/default.md#ticker)

#### Inherited from

[`Text`](../variables/default.md#text).[`ticker`](../variables/default.md#textticker)

***

### type

#### Get Signature

> **get** **type**(): [`InputType`](../type-aliases/InputType.md)

Defined in: [display/Input.ts:42](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L42)

##### Returns

[`InputType`](../type-aliases/InputType.md)

#### Set Signature

> **set** **type**(`type`): `void`

Defined in: [display/Input.ts:46](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L46)

##### Parameters

###### type

[`InputType`](../type-aliases/InputType.md)

##### Returns

`void`

***

### value

#### Get Signature

> **get** **value**(): `string`

Defined in: [display/Input.ts:33](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L33)

##### Returns

`string`

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [display/Input.ts:37](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L37)

##### Parameters

###### value

`string`

##### Returns

`void`

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

#### Inherited from

[`Text`](../variables/default.md#text).[`verticalAlign`](../variables/default.md#textverticalalign-1)

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

[`Text`](../variables/default.md#text).[`visible`](../variables/default.md#textvisible-1)

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

[`Text`](../variables/default.md#text).[`width`](../variables/default.md#textwidth-1)

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

[`Text`](../variables/default.md#text).[`x`](../variables/default.md#textx-1)

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

[`Text`](../variables/default.md#text).[`y`](../variables/default.md#texty-1)

## Methods

### $divideLines()

> `protected` **$divideLines**(): `void`

Defined in: [display/Text.ts:221](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L221)

#### Returns

`void`

#### Inherited from

[`Text`](../variables/default.md#text).[`$divideLines`](../variables/default.md#textdividelines)

***

### $divideUnits()

> `protected` **$divideUnits**(): `string`[]

Defined in: [display/Text.ts:199](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L199)

#### Returns

`string`[]

#### Inherited from

[`Text`](../variables/default.md#text).[`$divideUnits`](../variables/default.md#textdivideunits)

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

[`Text`](../variables/default.md#text).[`$drawChild`](../variables/default.md#textdrawchild)

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

[`Text`](../variables/default.md#text).[`$emitAdded`](../variables/default.md#textemitadded)

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

[`Text`](../variables/default.md#text).[`$emitAddedToStage`](../variables/default.md#textemitaddedtostage)

***

### $emitRemoved()

> `protected` **$emitRemoved**(): `void`

Defined in: [display/Layer.ts:552](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L552)

#### Returns

`void`

#### Inherited from

[`Text`](../variables/default.md#text).[`$emitRemoved`](../variables/default.md#textemitremoved)

***

### $emitRemovedFromStage()

> `protected` **$emitRemovedFromStage**(): `void`

Defined in: [display/Layer.ts:574](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L574)

#### Returns

`void`

#### Inherited from

[`Text`](../variables/default.md#text).[`$emitRemovedFromStage`](../variables/default.md#textemitremovedfromstage)

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

[`Text`](../variables/default.md#text).[`$emitTouchEvent`](../variables/default.md#textemittouchevent)

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

[`Text`](../variables/default.md#text).[`$getChildBounds`](../variables/default.md#textgetchildbounds)

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

[`Text`](../variables/default.md#text).[`$getChildTransform`](../variables/default.md#textgetchildtransform)

***

### $getContentBounds()

> `protected` **$getContentBounds**(): [`Rectangle`](../variables/default.md#rectangle)

Defined in: [display/Text.ts:273](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L273)

#### Returns

[`Rectangle`](../variables/default.md#rectangle)

#### Inherited from

[`Text`](../variables/default.md#text).[`$getContentBounds`](../variables/default.md#textgetcontentbounds)

***

### $getTransform()

> `protected` **$getTransform**(): [`Matrix`](../variables/default.md#matrix)

Defined in: [display/Layer.ts:434](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L434)

#### Returns

[`Matrix`](../variables/default.md#matrix)

#### Inherited from

[`Text`](../variables/default.md#text).[`$getTransform`](../variables/default.md#textgettransform)

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

[`Text`](../variables/default.md#text).[`$isChildVisible`](../variables/default.md#textischildvisible)

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

[`Text`](../variables/default.md#text).[`$localHitTest`](../variables/default.md#textlocalhittest)

***

### $markDirty()

> `protected` **$markDirty**(`sizeDirty?`): `void`

Defined in: [display/Input.ts:177](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L177)

#### Parameters

##### sizeDirty?

`boolean`

#### Returns

`void`

#### Overrides

[`Text`](../variables/default.md#text).[`$markDirty`](../variables/default.md#textmarkdirty)

***

### $markParentDirty()

> `protected` **$markParentDirty**(): `void`

Defined in: [display/Layer.ts:398](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L398)

#### Returns

`void`

#### Inherited from

[`Text`](../variables/default.md#text).[`$markParentDirty`](../variables/default.md#textmarkparentdirty)

***

### $onTouchTap()

> `protected` **$onTouchTap**(): `void`

Defined in: [display/Input.ts:184](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L184)

#### Returns

`void`

***

### $render()

> `protected` **$render**(): `number`

Defined in: [display/Text.ts:288](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L288)

#### Returns

`number`

#### Inherited from

[`Text`](../variables/default.md#text).[`$render`](../variables/default.md#textrender)

***

### $resizeCanvas()

> `protected` **$resizeCanvas**(): `void`

Defined in: [display/Text.ts:253](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L253)

#### Returns

`void`

#### Inherited from

[`Text`](../variables/default.md#text).[`$resizeCanvas`](../variables/default.md#textresizecanvas)

***

### $resizeParentCanvas()

> `protected` **$resizeParentCanvas**(): `void`

Defined in: [display/Layer.ts:428](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L428)

#### Returns

`void`

#### Inherited from

[`Text`](../variables/default.md#text).[`$resizeParentCanvas`](../variables/default.md#textresizeparentcanvas)

***

### $updateContext()

> `protected` **$updateContext**(): `void`

Defined in: [display/Text.ts:184](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Text.ts#L184)

#### Returns

`void`

#### Inherited from

[`Text`](../variables/default.md#text).[`$updateContext`](../variables/default.md#textupdatecontext)

***

### $updateElement()

> `protected` **$updateElement**(): `HTMLInputElement` \| `HTMLTextAreaElement`

Defined in: [display/Input.ts:140](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L140)

#### Returns

`HTMLInputElement` \| `HTMLTextAreaElement`

***

### $updateText()

> `protected` **$updateText**(): `void`

Defined in: [display/Input.ts:119](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L119)

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

[`Text`](../variables/default.md#text).[`addChild`](../variables/default.md#textaddchild)

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

[`Text`](../variables/default.md#text).[`addChildAt`](../variables/default.md#textaddchildat)

***

### blur()

> **blur**(): `this`

Defined in: [display/Input.ts:108](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L108)

#### Returns

`this`

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

[`Text`](../variables/default.md#text).[`emit`](../variables/default.md#textemit)

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

[`Text`](../variables/default.md#text).[`emit`](../variables/default.md#textemit)

***

### focus()

> **focus**(): `this`

Defined in: [display/Input.ts:99](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L99)

#### Returns

`this`

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

[`Text`](../variables/default.md#text).[`getChildAt`](../variables/default.md#textgetchildat)

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

[`Text`](../variables/default.md#text).[`getChildByName`](../variables/default.md#textgetchildbyname)

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

[`Text`](../variables/default.md#text).[`getChildIndex`](../variables/default.md#textgetchildindex)

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

[`Text`](../variables/default.md#text).[`getChildrenByTag`](../variables/default.md#textgetchildrenbytag)

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

[`Text`](../variables/default.md#text).[`hasChild`](../variables/default.md#texthaschild)

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

[`Text`](../variables/default.md#text).[`hasEventListener`](../variables/default.md#texthaseventlistener)

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

[`Text`](../variables/default.md#text).[`off`](../variables/default.md#textoff)

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

[`Text`](../variables/default.md#text).[`on`](../variables/default.md#texton)

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

[`Text`](../variables/default.md#text).[`once`](../variables/default.md#textonce)

***

### removeAllChildren()

> **removeAllChildren**(): `this`

Defined in: [display/Layer.ts:372](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L372)

#### Returns

`this`

#### Inherited from

[`Text`](../variables/default.md#text).[`removeAllChildren`](../variables/default.md#textremoveallchildren)

***

### removeAllListeners()

> **removeAllListeners**(): `this`

Defined in: [event/EventEmitter.ts:85](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L85)

#### Returns

`this`

#### Inherited from

[`Text`](../variables/default.md#text).[`removeAllListeners`](../variables/default.md#textremovealllisteners)

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

[`Text`](../variables/default.md#text).[`removeChild`](../variables/default.md#textremovechild)

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

[`Text`](../variables/default.md#text).[`removeChildAt`](../variables/default.md#textremovechildat)

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

[`Text`](../variables/default.md#text).[`removeChildByName`](../variables/default.md#textremovechildbyname)

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

[`Text`](../variables/default.md#text).[`removeChildrenByTag`](../variables/default.md#textremovechildrenbytag)

***

### removeSelf()

> **removeSelf**(): `this`

Defined in: [display/Layer.ts:382](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Layer.ts#L382)

#### Returns

`this`

#### Inherited from

[`Text`](../variables/default.md#text).[`removeSelf`](../variables/default.md#textremoveself)

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

[`Text`](../variables/default.md#text).[`replaceChild`](../variables/default.md#textreplacechild)

***

### selectAll()

> **selectAll**(): `this`

Defined in: [display/Input.ts:91](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L91)

#### Returns

`this`

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

[`Text`](../variables/default.md#text).[`setChildIndex`](../variables/default.md#textsetchildindex)

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

[`Text`](../variables/default.md#text).[`swapChildren`](../variables/default.md#textswapchildren)

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

[`Text`](../variables/default.md#text).[`swapChildrenAt`](../variables/default.md#textswapchildrenat)

***

### $getElement()

> `protected` `static` **$getElement**(`tagName`): `HTMLInputElement` \| `HTMLTextAreaElement`

Defined in: [display/Input.ts:188](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/display/Input.ts#L188)

#### Parameters

##### tagName

`string`

#### Returns

`HTMLInputElement` \| `HTMLTextAreaElement`
