[**API Reference**](../README.md)

***

[API Reference](../README.md) / Media

# Class: Media

Defined in: [media/Media.ts:5](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Media.ts#L5)

## Extends

- [`EventEmitter`](../variables/default.md#eventemitter)

## Constructors

### Constructor

> `protected` **new Media**(`stage`): [`Media`](../variables/default.md#media)

Defined in: [media/Media.ts:15](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Media.ts#L15)

#### Parameters

##### stage

[`Stage`](../variables/default.md#stage)

#### Returns

[`Media`](../variables/default.md#media)

#### Overrides

[`EventEmitter`](../variables/default.md#eventemitter).[`constructor`](../variables/default.md#eventemitterconstructor)

## Properties

### $boundOnError()

> `protected` `readonly` **$boundOnError**: (`e`) => `void`

Defined in: [media/Media.ts:13](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Media.ts#L13)

#### Parameters

##### e

`ErrorEvent`

#### Returns

`void`

***

### $boundOnLoad()

> `protected` `readonly` **$boundOnLoad**: () => `void`

Defined in: [media/Media.ts:12](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Media.ts#L12)

#### Returns

`void`

***

### $element

> `protected` `readonly` **$element**: `HTMLImageElement` \| `HTMLAudioElement`

Defined in: [media/Media.ts:7](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Media.ts#L7)

***

### $emittingType

> `protected` **$emittingType**: `string` = `null`

Defined in: [event/EventEmitter.ts:6](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L6)

#### Inherited from

[`EventEmitter`](../variables/default.md#eventemitter).[`$emittingType`](../variables/default.md#eventemitteremittingtype)

***

### $errored

> `protected` **$errored**: `boolean` = `false`

Defined in: [media/Media.ts:10](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Media.ts#L10)

***

### $events

> `protected` **$events**: `Object` = `{}`

Defined in: [event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L5)

#### Inherited from

[`EventEmitter`](../variables/default.md#eventemitter).[`$events`](../variables/default.md#eventemitterevents)

***

### $loaded

> `protected` **$loaded**: `boolean` = `false`

Defined in: [media/Media.ts:9](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Media.ts#L9)

***

### $removedListeners

> `protected` **$removedListeners**: [`Listener`](../type-aliases/Listener.md)[] = `[]`

Defined in: [event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L7)

#### Inherited from

[`EventEmitter`](../variables/default.md#eventemitter).[`$removedListeners`](../variables/default.md#eventemitterremovedlisteners)

***

### $stage

> `protected` `readonly` **$stage**: [`Stage`](../variables/default.md#stage)

Defined in: [media/Media.ts:11](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Media.ts#L11)

## Accessors

### element

#### Get Signature

> **get** **element**(): `HTMLImageElement` \| `HTMLAudioElement`

Defined in: [media/Media.ts:22](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Media.ts#L22)

##### Returns

`HTMLImageElement` \| `HTMLAudioElement`

***

### url

#### Get Signature

> **get** **url**(): `string`

Defined in: [media/Media.ts:26](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Media.ts#L26)

##### Returns

`string`

#### Set Signature

> **set** **url**(`url`): `void`

Defined in: [media/Media.ts:30](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Media.ts#L30)

##### Parameters

###### url

`string`

##### Returns

`void`

## Methods

### $onError()

> `protected` **$onError**(): `void`

Defined in: [media/Media.ts:56](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Media.ts#L56)

#### Returns

`void`

***

### $onLoad()

> `protected` **$onLoad**(): `void`

Defined in: [media/Media.ts:50](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Media.ts#L50)

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

[`EventEmitter`](../variables/default.md#eventemitter).[`emit`](../variables/default.md#eventemitteremit)

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

[`EventEmitter`](../variables/default.md#eventemitter).[`emit`](../variables/default.md#eventemitteremit)

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

[`EventEmitter`](../variables/default.md#eventemitter).[`hasEventListener`](../variables/default.md#eventemitterhaseventlistener)

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

[`EventEmitter`](../variables/default.md#eventemitter).[`off`](../variables/default.md#eventemitteroff)

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

#### Overrides

[`EventEmitter`](../variables/default.md#eventemitter).[`on`](../variables/default.md#eventemitteron)

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

[`EventEmitter`](../variables/default.md#eventemitter).[`once`](../variables/default.md#eventemitteronce)

***

### removeAllListeners()

> **removeAllListeners**(): `this`

Defined in: [event/EventEmitter.ts:85](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L85)

#### Returns

`this`

#### Inherited from

[`EventEmitter`](../variables/default.md#eventemitter).[`removeAllListeners`](../variables/default.md#eventemitterremovealllisteners)
