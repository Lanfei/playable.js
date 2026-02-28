[**API Reference**](../README.md)

***

[API Reference](../README.md) / ResourceManager

# Class: ResourceManager

Defined in: [net/ResourceManager.ts:9](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/net/ResourceManager.ts#L9)

## Extends

- [`EventEmitter`](../variables/default.md#eventemitter)

## Constructors

### Constructor

> **new ResourceManager**(`stage`, `list`, `options?`): [`ResourceManager`](../variables/default.md#resourcemanager)

Defined in: [net/ResourceManager.ts:29](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/net/ResourceManager.ts#L29)

#### Parameters

##### stage

[`Stage`](../variables/default.md#stage)

##### list

[`ResourceInfo`](../interfaces/ResourceInfo.md)[]

##### options?

[`ResourceManagerOption`](../interfaces/ResourceManagerOption.md)

#### Returns

[`ResourceManager`](../variables/default.md#resourcemanager)

#### Overrides

[`EventEmitter`](../variables/default.md#eventemitter).[`constructor`](../variables/default.md#eventemitterconstructor)

## Properties

### $emittingType

> `protected` **$emittingType**: `string` = `null`

Defined in: [event/EventEmitter.ts:6](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L6)

#### Inherited from

[`EventEmitter`](../variables/default.md#eventemitter).[`$emittingType`](../variables/default.md#eventemitteremittingtype)

***

### $errorCount

> `protected` **$errorCount**: `number` = `0`

Defined in: [net/ResourceManager.ts:21](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/net/ResourceManager.ts#L21)

***

### $events

> `protected` **$events**: `Object` = `{}`

Defined in: [event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L5)

#### Inherited from

[`EventEmitter`](../variables/default.md#eventemitter).[`$events`](../variables/default.md#eventemitterevents)

***

### $list

> `protected` **$list**: [`ResourceInfo`](../interfaces/ResourceInfo.md)[]

Defined in: [net/ResourceManager.ts:24](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/net/ResourceManager.ts#L24)

***

### $loadedCount

> `protected` **$loadedCount**: `number` = `0`

Defined in: [net/ResourceManager.ts:22](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/net/ResourceManager.ts#L22)

***

### $loadingCount

> `protected` **$loadingCount**: `number` = `0`

Defined in: [net/ResourceManager.ts:23](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/net/ResourceManager.ts#L23)

***

### $removedListeners

> `protected` **$removedListeners**: [`Listener`](../type-aliases/Listener.md)[] = `[]`

Defined in: [event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L7)

#### Inherited from

[`EventEmitter`](../variables/default.md#eventemitter).[`$removedListeners`](../variables/default.md#eventemitterremovedlisteners)

***

### $resources

> `protected` `readonly` **$resources**: `Object`

Defined in: [net/ResourceManager.ts:27](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/net/ResourceManager.ts#L27)

***

### $stage

> `protected` `readonly` **$stage**: [`Stage`](../variables/default.md#stage)

Defined in: [net/ResourceManager.ts:26](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/net/ResourceManager.ts#L26)

***

### $total

> `protected` `readonly` **$total**: `number`

Defined in: [net/ResourceManager.ts:25](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/net/ResourceManager.ts#L25)

***

### retryTimes

> **retryTimes**: `number`

Defined in: [net/ResourceManager.ts:19](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/net/ResourceManager.ts#L19)

***

### threads

> **threads**: `number`

Defined in: [net/ResourceManager.ts:17](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/net/ResourceManager.ts#L17)

***

### timeout

> **timeout**: `number`

Defined in: [net/ResourceManager.ts:18](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/net/ResourceManager.ts#L18)

***

### TYPE\_BINARY

> `readonly` `static` **TYPE\_BINARY**: `string` = `'binary'`

Defined in: [net/ResourceManager.ts:13](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/net/ResourceManager.ts#L13)

***

### TYPE\_JSON

> `readonly` `static` **TYPE\_JSON**: `string` = `'json'`

Defined in: [net/ResourceManager.ts:12](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/net/ResourceManager.ts#L12)

***

### TYPE\_SOUND

> `readonly` `static` **TYPE\_SOUND**: `string` = `'sound'`

Defined in: [net/ResourceManager.ts:15](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/net/ResourceManager.ts#L15)

***

### TYPE\_TEXT

> `readonly` `static` **TYPE\_TEXT**: `string` = `'text'`

Defined in: [net/ResourceManager.ts:11](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/net/ResourceManager.ts#L11)

***

### TYPE\_TEXTURE

> `readonly` `static` **TYPE\_TEXTURE**: `string` = `'texture'`

Defined in: [net/ResourceManager.ts:14](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/net/ResourceManager.ts#L14)

## Accessors

### errorCount

#### Get Signature

> **get** **errorCount**(): `number`

Defined in: [net/ResourceManager.ts:45](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/net/ResourceManager.ts#L45)

##### Returns

`number`

***

### loadedCount

#### Get Signature

> **get** **loadedCount**(): `number`

Defined in: [net/ResourceManager.ts:49](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/net/ResourceManager.ts#L49)

##### Returns

`number`

***

### total

#### Get Signature

> **get** **total**(): `number`

Defined in: [net/ResourceManager.ts:41](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/net/ResourceManager.ts#L41)

##### Returns

`number`

## Methods

### $checkPendingTasks()

> `protected` **$checkPendingTasks**(): `void`

Defined in: [net/ResourceManager.ts:53](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/net/ResourceManager.ts#L53)

#### Returns

`void`

***

### $load()

> `protected` **$load**(`info`, `attempts`): `void`

Defined in: [net/ResourceManager.ts:60](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/net/ResourceManager.ts#L60)

#### Parameters

##### info

[`ResourceInfo`](../interfaces/ResourceInfo.md)

##### attempts

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

### get()

> **get**\<`Resource`\>(`name`): `Resource`

Defined in: [net/ResourceManager.ts:145](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/net/ResourceManager.ts#L145)

#### Type Parameters

##### Resource

`Resource`

#### Parameters

##### name

`string`

#### Returns

`Resource`

***

### has()

> **has**(`name`): `boolean`

Defined in: [net/ResourceManager.ts:141](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/net/ResourceManager.ts#L141)

#### Parameters

##### name

`string`

#### Returns

`boolean`

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

### removeAllListeners()

> **removeAllListeners**(): `this`

Defined in: [event/EventEmitter.ts:85](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L85)

#### Returns

`this`

#### Inherited from

[`EventEmitter`](../variables/default.md#eventemitter).[`removeAllListeners`](../variables/default.md#eventemitterremovealllisteners)
