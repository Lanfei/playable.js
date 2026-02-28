[**API Reference**](../README.md)

***

[API Reference](../README.md) / Sound

# Class: Sound

Defined in: [media/Sound.ts:5](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Sound.ts#L5)

## Extends

- [`Media`](../variables/default.md#media)

## Constructors

### Constructor

> **new Sound**(`stage`, `url?`): [`Sound`](../variables/default.md#sound)

Defined in: [media/Sound.ts:13](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Sound.ts#L13)

#### Parameters

##### stage

[`Stage`](../variables/default.md#stage)

##### url?

`string`

#### Returns

[`Sound`](../variables/default.md#sound)

#### Overrides

[`Media`](../variables/default.md#media).[`constructor`](../variables/default.md#mediaconstructor)

## Properties

### $boundOnError()

> `protected` `readonly` **$boundOnError**: (`e`) => `void`

Defined in: [media/Media.ts:13](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Media.ts#L13)

#### Parameters

##### e

`ErrorEvent`

#### Returns

`void`

#### Inherited from

[`Media`](../variables/default.md#media).[`$boundOnError`](../variables/default.md#mediaboundonerror)

***

### $boundOnLoad()

> `protected` `readonly` **$boundOnLoad**: () => `void`

Defined in: [media/Media.ts:12](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Media.ts#L12)

#### Returns

`void`

#### Inherited from

[`Media`](../variables/default.md#media).[`$boundOnLoad`](../variables/default.md#mediaboundonload)

***

### $boundOnTouch()

> `protected` `readonly` **$boundOnTouch**: () => `void`

Defined in: [media/Sound.ts:11](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Sound.ts#L11)

#### Returns

`void`

***

### $element

> `protected` `readonly` **$element**: `HTMLAudioElement`

Defined in: [media/Sound.ts:10](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Sound.ts#L10)

#### Overrides

[`Media`](../variables/default.md#media).[`$element`](../variables/default.md#mediaelement)

***

### $emittingType

> `protected` **$emittingType**: `string` = `null`

Defined in: [event/EventEmitter.ts:6](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L6)

#### Inherited from

[`Media`](../variables/default.md#media).[`$emittingType`](../variables/default.md#mediaemittingtype)

***

### $errored

> `protected` **$errored**: `boolean` = `false`

Defined in: [media/Media.ts:10](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Media.ts#L10)

#### Inherited from

[`Media`](../variables/default.md#media).[`$errored`](../variables/default.md#mediaerrored)

***

### $events

> `protected` **$events**: `Object` = `{}`

Defined in: [event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L5)

#### Inherited from

[`Media`](../variables/default.md#media).[`$events`](../variables/default.md#mediaevents)

***

### $loaded

> `protected` **$loaded**: `boolean` = `false`

Defined in: [media/Media.ts:9](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Media.ts#L9)

#### Inherited from

[`Media`](../variables/default.md#media).[`$loaded`](../variables/default.md#medialoaded)

***

### $loops

> `protected` **$loops**: `number` = `1`

Defined in: [media/Sound.ts:7](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Sound.ts#L7)

***

### $paused

> `protected` **$paused**: `boolean` = `true`

Defined in: [media/Sound.ts:9](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Sound.ts#L9)

***

### $removedListeners

> `protected` **$removedListeners**: [`Listener`](../type-aliases/Listener.md)[] = `[]`

Defined in: [event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L7)

#### Inherited from

[`Media`](../variables/default.md#media).[`$removedListeners`](../variables/default.md#mediaremovedlisteners)

***

### $stage

> `protected` `readonly` **$stage**: [`Stage`](../variables/default.md#stage)

Defined in: [media/Media.ts:11](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Media.ts#L11)

#### Inherited from

[`Media`](../variables/default.md#media).[`$stage`](../variables/default.md#mediastage)

***

### $startTime

> `protected` **$startTime**: `number` = `0`

Defined in: [media/Sound.ts:8](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Sound.ts#L8)

## Accessors

### element

#### Get Signature

> **get** **element**(): `HTMLAudioElement`

Defined in: [media/Sound.ts:30](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Sound.ts#L30)

##### Returns

`HTMLAudioElement`

#### Overrides

[`Media`](../variables/default.md#media).[`element`](../variables/default.md#mediaelement-1)

***

### paused

#### Get Signature

> **get** **paused**(): `boolean`

Defined in: [media/Sound.ts:55](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Sound.ts#L55)

##### Returns

`boolean`

***

### url

#### Get Signature

> **get** **url**(): `string`

Defined in: [media/Sound.ts:34](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Sound.ts#L34)

##### Returns

`string`

#### Set Signature

> **set** **url**(`url`): `void`

Defined in: [media/Sound.ts:38](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Sound.ts#L38)

##### Parameters

###### url

`string`

##### Returns

`void`

#### Overrides

[`Media`](../variables/default.md#media).[`url`](../variables/default.md#mediaurl)

***

### volume

#### Get Signature

> **get** **volume**(): `number`

Defined in: [media/Sound.ts:47](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Sound.ts#L47)

##### Returns

`number`

#### Set Signature

> **set** **volume**(`volume`): `void`

Defined in: [media/Sound.ts:51](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Sound.ts#L51)

##### Parameters

###### volume

`number`

##### Returns

`void`

## Methods

### $checkOnTouch()

> `protected` **$checkOnTouch**(): `void`

Defined in: [media/Sound.ts:74](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Sound.ts#L74)

#### Returns

`void`

***

### $checkStatus()

> `protected` **$checkStatus**(): `void`

Defined in: [media/Sound.ts:79](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Sound.ts#L79)

#### Returns

`void`

***

### $onEnded()

> `protected` **$onEnded**(): `void`

Defined in: [media/Sound.ts:95](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Sound.ts#L95)

#### Returns

`void`

***

### $onError()

> `protected` **$onError**(): `void`

Defined in: [media/Media.ts:56](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Media.ts#L56)

#### Returns

`void`

#### Inherited from

[`Media`](../variables/default.md#media).[`$onError`](../variables/default.md#mediaonerror)

***

### $onLoad()

> `protected` **$onLoad**(): `void`

Defined in: [media/Sound.ts:125](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Sound.ts#L125)

#### Returns

`void`

#### Overrides

[`Media`](../variables/default.md#media).[`$onLoad`](../variables/default.md#mediaonload)

***

### $onRemovedFromStage()

> `protected` **$onRemovedFromStage**(): `void`

Defined in: [media/Sound.ts:119](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Sound.ts#L119)

#### Returns

`void`

***

### $onTickerPause()

> `protected` **$onTickerPause**(): `void`

Defined in: [media/Sound.ts:107](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Sound.ts#L107)

#### Returns

`void`

***

### $onTickerResume()

> `protected` **$onTickerResume**(): `void`

Defined in: [media/Sound.ts:113](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Sound.ts#L113)

#### Returns

`void`

***

### $onTouch()

> `protected` **$onTouch**(): `void`

Defined in: [media/Sound.ts:89](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Sound.ts#L89)

#### Returns

`void`

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

[`Media`](../variables/default.md#media).[`emit`](../variables/default.md#mediaemit)

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

[`Media`](../variables/default.md#media).[`emit`](../variables/default.md#mediaemit)

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

[`Media`](../variables/default.md#media).[`hasEventListener`](../variables/default.md#mediahaseventlistener)

***

### off()

> **off**(`type`, `listener?`): `this`

Defined in: [event/EventEmitter.ts:16](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L16)

#### Parameters

##### type

`string`

##### listener?

[`Listener`](../type-aliases/Listener.md)

#### Returns

`this`

#### Inherited from

[`Media`](../variables/default.md#media).[`off`](../variables/default.md#mediaoff)

***

### on()

> **on**(`type`, `listener`): `this`

Defined in: [media/Media.ts:36](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Media.ts#L36)

#### Parameters

##### type

`string`

##### listener

(...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`Media`](../variables/default.md#media).[`on`](../variables/default.md#mediaon)

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

[`Media`](../variables/default.md#media).[`once`](../variables/default.md#mediaonce)

***

### play()

> **play**(`startTime?`, `loops?`): `this`

Defined in: [media/Sound.ts:59](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Sound.ts#L59)

#### Parameters

##### startTime?

`number` = `0`

##### loops?

`number` = `1`

#### Returns

`this`

***

### removeAllListeners()

> **removeAllListeners**(): `this`

Defined in: [event/EventEmitter.ts:85](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L85)

#### Returns

`this`

#### Inherited from

[`Media`](../variables/default.md#media).[`removeAllListeners`](../variables/default.md#mediaremovealllisteners)

***

### stop()

> **stop**(): `this`

Defined in: [media/Sound.ts:68](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Sound.ts#L68)

#### Returns

`this`
