[**API Reference**](../README.md)

***

[API Reference](../README.md) / Texture

# Class: Texture

Defined in: [media/Texture.ts:4](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Texture.ts#L4)

## Extends

- [`Media`](../variables/default.md#media)

## Constructors

### Constructor

> **new Texture**(`stage`, `url?`): [`Texture`](../variables/default.md#texture)

Defined in: [media/Texture.ts:12](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Texture.ts#L12)

#### Parameters

##### stage

[`Stage`](../variables/default.md#stage)

##### url?

`string`

#### Returns

[`Texture`](../variables/default.md#texture)

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

### $element

> `protected` `readonly` **$element**: `HTMLImageElement`

Defined in: [media/Texture.ts:10](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Texture.ts#L10)

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

### pixelRatio

> **pixelRatio**: `number` = `Texture.defaultPixelRatio`

Defined in: [media/Texture.ts:8](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Texture.ts#L8)

***

### defaultPixelRatio

> `static` **defaultPixelRatio**: `number` = `1`

Defined in: [media/Texture.ts:6](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Texture.ts#L6)

## Accessors

### element

#### Get Signature

> **get** **element**(): `HTMLImageElement`

Defined in: [media/Texture.ts:24](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Texture.ts#L24)

##### Returns

`HTMLImageElement`

#### Overrides

[`Media`](../variables/default.md#media).[`element`](../variables/default.md#mediaelement-1)

***

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [media/Texture.ts:32](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Texture.ts#L32)

##### Returns

`number`

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

#### Inherited from

[`Media`](../variables/default.md#media).[`url`](../variables/default.md#mediaurl)

***

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [media/Texture.ts:28](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Texture.ts#L28)

##### Returns

`number`

## Methods

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

Defined in: [media/Media.ts:50](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/media/Media.ts#L50)

#### Returns

`void`

#### Inherited from

[`Media`](../variables/default.md#media).[`$onLoad`](../variables/default.md#mediaonload)

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

### removeAllListeners()

> **removeAllListeners**(): `this`

Defined in: [event/EventEmitter.ts:85](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L85)

#### Returns

`this`

#### Inherited from

[`Media`](../variables/default.md#media).[`removeAllListeners`](../variables/default.md#mediaremovealllisteners)
