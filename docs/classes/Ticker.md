[**API Reference**](../README.md)

***

[API Reference](../README.md) / Ticker

# Class: Ticker

Defined in: [system/Ticker.ts:6](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L6)

## Extends

- [`EventEmitter`](../variables/default.md#eventemitter)

## Constructors

### Constructor

> **new Ticker**(`stage`): [`Ticker`](../variables/default.md#ticker)

Defined in: [system/Ticker.ts:20](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L20)

#### Parameters

##### stage

[`Stage`](../variables/default.md#stage)

#### Returns

[`Ticker`](../variables/default.md#ticker)

#### Overrides

[`EventEmitter`](../variables/default.md#eventemitter).[`constructor`](../variables/default.md#eventemitterconstructor)

## Properties

### $boundTick()

> `protected` `readonly` **$boundTick**: () => `void`

Defined in: [system/Ticker.ts:17](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L17)

#### Returns

`void`

***

### $deltaTime

> `protected` **$deltaTime**: `number` = `0`

Defined in: [system/Ticker.ts:10](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L10)

***

### $emittingType

> `protected` **$emittingType**: `string` = `null`

Defined in: [event/EventEmitter.ts:6](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L6)

#### Inherited from

[`EventEmitter`](../variables/default.md#eventemitter).[`$emittingType`](../variables/default.md#eventemitteremittingtype)

***

### $enterFrameCallbackList

> `protected` `readonly` **$enterFrameCallbackList**: [`Layer`](../variables/default.md#layer)[]

Defined in: [system/Ticker.ts:18](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L18)

***

### $events

> `protected` **$events**: `Object` = `{}`

Defined in: [event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L5)

#### Inherited from

[`EventEmitter`](../variables/default.md#eventemitter).[`$events`](../variables/default.md#eventemitterevents)

***

### $fps

> `protected` **$fps**: `number` = `0`

Defined in: [system/Ticker.ts:9](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L9)

***

### $lastTimestamp

> `protected` **$lastTimestamp**: `number` = `0`

Defined in: [system/Ticker.ts:14](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L14)

***

### $paused

> `protected` **$paused**: `boolean` = `true`

Defined in: [system/Ticker.ts:11](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L11)

***

### $removedListeners

> `protected` **$removedListeners**: [`Listener`](../type-aliases/Listener.md)[] = `[]`

Defined in: [event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L7)

#### Inherited from

[`EventEmitter`](../variables/default.md#eventemitter).[`$removedListeners`](../variables/default.md#eventemitterremovedlisteners)

***

### $shouldResume

> `protected` **$shouldResume**: `boolean` = `false`

Defined in: [system/Ticker.ts:12](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L12)

***

### $stage

> `protected` **$stage**: [`Stage`](../variables/default.md#stage) = `null`

Defined in: [system/Ticker.ts:8](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L8)

***

### $tickHandle

> `protected` **$tickHandle**: `number` = `null`

Defined in: [system/Ticker.ts:15](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L15)

***

### $timerIndex

> `protected` **$timerIndex**: `number` = `0`

Defined in: [system/Ticker.ts:13](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L13)

***

### $timers

> `protected` `readonly` **$timers**: `Object`

Defined in: [system/Ticker.ts:16](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L16)

## Accessors

### deltaTime

#### Get Signature

> **get** **deltaTime**(): `number`

Defined in: [system/Ticker.ts:33](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L33)

##### Returns

`number`

***

### fps

#### Get Signature

> **get** **fps**(): `number`

Defined in: [system/Ticker.ts:29](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L29)

##### Returns

`number`

***

### paused

#### Get Signature

> **get** **paused**(): `boolean`

Defined in: [system/Ticker.ts:37](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L37)

##### Returns

`boolean`

## Methods

### $checkTimers()

> `protected` **$checkTimers**(`dt`): `void`

Defined in: [system/Ticker.ts:160](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L160)

#### Parameters

##### dt

`number`

#### Returns

`void`

***

### $start()

> `protected` **$start**(): `this`

Defined in: [system/Ticker.ts:41](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L41)

#### Returns

`this`

***

### $tick()

> `protected` **$tick**(): `void`

Defined in: [system/Ticker.ts:140](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L140)

#### Returns

`void`

***

### clearInterval()

> **clearInterval**(`handle`): `void`

Defined in: [system/Ticker.ts:119](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L119)

#### Parameters

##### handle

`number`

#### Returns

`void`

***

### clearTimeout()

> **clearTimeout**(`handle`): `void`

Defined in: [system/Ticker.ts:109](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L109)

#### Parameters

##### handle

`number`

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

Defined in: [event/EventEmitter.ts:9](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L9)

#### Parameters

##### type

`string`

##### listener

[`Listener`](../type-aliases/Listener.md)

#### Returns

`this`

#### Inherited from

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

### pause()

> **pause**(): `this`

Defined in: [system/Ticker.ts:84](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L84)

#### Returns

`this`

***

### registerEnterFrameCallback()

> **registerEnterFrameCallback**(`layer`): `this`

Defined in: [system/Ticker.ts:123](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L123)

#### Parameters

##### layer

[`Layer`](../variables/default.md#layer)

#### Returns

`this`

***

### removeAllListeners()

> **removeAllListeners**(): `this`

Defined in: [event/EventEmitter.ts:85](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L85)

#### Returns

`this`

#### Inherited from

[`EventEmitter`](../variables/default.md#eventemitter).[`removeAllListeners`](../variables/default.md#eventemitterremovealllisteners)

***

### resume()

> **resume**(): `this`

Defined in: [system/Ticker.ts:94](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L94)

#### Returns

`this`

***

### setInterval()

> **setInterval**(`handler`, `timeout`): `number`

Defined in: [system/Ticker.ts:113](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L113)

#### Parameters

##### handler

`Function`

##### timeout

`number`

#### Returns

`number`

***

### setTimeout()

> **setTimeout**(`handler`, `timeout?`): `number`

Defined in: [system/Ticker.ts:103](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L103)

#### Parameters

##### handler

`Function`

##### timeout?

`number` = `0`

#### Returns

`number`

***

### unregisterEnterFrameCallback()

> **unregisterEnterFrameCallback**(`layer`): `this`

Defined in: [system/Ticker.ts:131](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/system/Ticker.ts#L131)

#### Parameters

##### layer

[`Layer`](../variables/default.md#layer)

#### Returns

`this`
