[API Reference](../README.md) / Ticker

# Class: Ticker

## Hierarchy

- [`EventEmitter`](EventEmitter.md)

  ↳ **`Ticker`**

## Table of contents

### Constructors

- [constructor](Ticker.md#constructor)

### Properties

- [$boundTick](Ticker.md#$boundtick)
- [$deltaTime](Ticker.md#$deltatime)
- [$emittingType](Ticker.md#$emittingtype)
- [$enterFrameCallbackList](Ticker.md#$enterframecallbacklist)
- [$events](Ticker.md#$events)
- [$fps](Ticker.md#$fps)
- [$lastTimestamp](Ticker.md#$lasttimestamp)
- [$paused](Ticker.md#$paused)
- [$removedListeners](Ticker.md#$removedlisteners)
- [$shouldResume](Ticker.md#$shouldresume)
- [$stage](Ticker.md#$stage)
- [$tickHandle](Ticker.md#$tickhandle)
- [$timerIndex](Ticker.md#$timerindex)
- [$timers](Ticker.md#$timers)

### Accessors

- [deltaTime](Ticker.md#deltatime)
- [fps](Ticker.md#fps)
- [paused](Ticker.md#paused)

### Methods

- [$checkTimers](Ticker.md#$checktimers)
- [$start](Ticker.md#$start)
- [$tick](Ticker.md#$tick)
- [clearInterval](Ticker.md#clearinterval)
- [clearTimeout](Ticker.md#cleartimeout)
- [emit](Ticker.md#emit)
- [hasEventListener](Ticker.md#haseventlistener)
- [off](Ticker.md#off)
- [on](Ticker.md#on)
- [once](Ticker.md#once)
- [pause](Ticker.md#pause)
- [registerEnterFrameCallback](Ticker.md#registerenterframecallback)
- [removeAllListeners](Ticker.md#removealllisteners)
- [resume](Ticker.md#resume)
- [setInterval](Ticker.md#setinterval)
- [setTimeout](Ticker.md#settimeout)
- [unregisterEnterFrameCallback](Ticker.md#unregisterenterframecallback)

## Constructors

### constructor

• **new Ticker**(`stage`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stage` | [`Stage`](Stage.md) |

#### Overrides

[EventEmitter](EventEmitter.md).[constructor](EventEmitter.md#constructor)

#### Defined in

[system/Ticker.ts:20](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L20)

## Properties

### $boundTick

• `Protected` `Readonly` **$boundTick**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[system/Ticker.ts:17](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L17)

___

### $deltaTime

• `Protected` **$deltaTime**: `number` = `0`

#### Defined in

[system/Ticker.ts:10](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L10)

___

### $emittingType

• `Protected` **$emittingType**: `string` = `null`

#### Inherited from

[EventEmitter](EventEmitter.md).[$emittingType](EventEmitter.md#$emittingtype)

#### Defined in

[event/EventEmitter.ts:6](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L6)

___

### $enterFrameCallbackList

• `Protected` `Readonly` **$enterFrameCallbackList**: [`Layer`](Layer.md)[]

#### Defined in

[system/Ticker.ts:18](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L18)

___

### $events

• `Protected` **$events**: `Object` = `{}`

#### Inherited from

[EventEmitter](EventEmitter.md).[$events](EventEmitter.md#$events)

#### Defined in

[event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L5)

___

### $fps

• `Protected` **$fps**: `number` = `0`

#### Defined in

[system/Ticker.ts:9](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L9)

___

### $lastTimestamp

• `Protected` **$lastTimestamp**: `number` = `0`

#### Defined in

[system/Ticker.ts:14](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L14)

___

### $paused

• `Protected` **$paused**: `boolean` = `true`

#### Defined in

[system/Ticker.ts:11](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L11)

___

### $removedListeners

• `Protected` **$removedListeners**: [`Listener`](../README.md#listener)[] = `[]`

#### Inherited from

[EventEmitter](EventEmitter.md).[$removedListeners](EventEmitter.md#$removedlisteners)

#### Defined in

[event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L7)

___

### $shouldResume

• `Protected` **$shouldResume**: `boolean` = `false`

#### Defined in

[system/Ticker.ts:12](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L12)

___

### $stage

• `Protected` **$stage**: [`Stage`](Stage.md) = `null`

#### Defined in

[system/Ticker.ts:8](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L8)

___

### $tickHandle

• `Protected` **$tickHandle**: `number` = `null`

#### Defined in

[system/Ticker.ts:15](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L15)

___

### $timerIndex

• `Protected` **$timerIndex**: `number` = `0`

#### Defined in

[system/Ticker.ts:13](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L13)

___

### $timers

• `Protected` `Readonly` **$timers**: `Object`

#### Defined in

[system/Ticker.ts:16](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L16)

## Accessors

### deltaTime

• `get` **deltaTime**(): `number`

#### Returns

`number`

#### Defined in

[system/Ticker.ts:33](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L33)

___

### fps

• `get` **fps**(): `number`

#### Returns

`number`

#### Defined in

[system/Ticker.ts:29](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L29)

___

### paused

• `get` **paused**(): `boolean`

#### Returns

`boolean`

#### Defined in

[system/Ticker.ts:37](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L37)

## Methods

### $checkTimers

▸ `Protected` **$checkTimers**(`dt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dt` | `number` |

#### Returns

`void`

#### Defined in

[system/Ticker.ts:160](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L160)

___

### $start

▸ `Protected` **$start**(): [`Ticker`](Ticker.md)

#### Returns

[`Ticker`](Ticker.md)

#### Defined in

[system/Ticker.ts:41](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L41)

___

### $tick

▸ `Protected` **$tick**(): `void`

#### Returns

`void`

#### Defined in

[system/Ticker.ts:140](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L140)

___

### clearInterval

▸ **clearInterval**(`handle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `number` |

#### Returns

`void`

#### Defined in

[system/Ticker.ts:119](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L119)

___

### clearTimeout

▸ **clearTimeout**(`handle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `number` |

#### Returns

`void`

#### Defined in

[system/Ticker.ts:109](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L109)

___

### emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](Event.md) |

#### Returns

`boolean`

#### Inherited from

[EventEmitter](EventEmitter.md).[emit](EventEmitter.md#emit)

#### Defined in

[event/EventEmitter.ts:42](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L42)

▸ **emit**(`type`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[EventEmitter](EventEmitter.md).[emit](EventEmitter.md#emit)

#### Defined in

[event/EventEmitter.ts:43](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L43)

___

### hasEventListener

▸ **hasEventListener**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`boolean`

#### Inherited from

[EventEmitter](EventEmitter.md).[hasEventListener](EventEmitter.md#haseventlistener)

#### Defined in

[event/EventEmitter.ts:80](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L80)

___

### off

▸ **off**(`type`, `listener?`): [`Ticker`](Ticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener?` | [`Listener`](../README.md#listener) |

#### Returns

[`Ticker`](Ticker.md)

#### Inherited from

[EventEmitter](EventEmitter.md).[off](EventEmitter.md#off)

#### Defined in

[event/EventEmitter.ts:16](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L16)

___

### on

▸ **on**(`type`, `listener`): [`Ticker`](Ticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`Listener`](../README.md#listener) |

#### Returns

[`Ticker`](Ticker.md)

#### Inherited from

[EventEmitter](EventEmitter.md).[on](EventEmitter.md#on)

#### Defined in

[event/EventEmitter.ts:9](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L9)

___

### once

▸ **once**(`type`, `listener`): [`Ticker`](Ticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`Listener`](../README.md#listener) |

#### Returns

[`Ticker`](Ticker.md)

#### Inherited from

[EventEmitter](EventEmitter.md).[once](EventEmitter.md#once)

#### Defined in

[event/EventEmitter.ts:33](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L33)

___

### pause

▸ **pause**(): [`Ticker`](Ticker.md)

#### Returns

[`Ticker`](Ticker.md)

#### Defined in

[system/Ticker.ts:84](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L84)

___

### registerEnterFrameCallback

▸ **registerEnterFrameCallback**(`layer`): [`Ticker`](Ticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`Layer`](Layer.md) |

#### Returns

[`Ticker`](Ticker.md)

#### Defined in

[system/Ticker.ts:123](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L123)

___

### removeAllListeners

▸ **removeAllListeners**(): [`Ticker`](Ticker.md)

#### Returns

[`Ticker`](Ticker.md)

#### Inherited from

[EventEmitter](EventEmitter.md).[removeAllListeners](EventEmitter.md#removealllisteners)

#### Defined in

[event/EventEmitter.ts:85](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L85)

___

### resume

▸ **resume**(): [`Ticker`](Ticker.md)

#### Returns

[`Ticker`](Ticker.md)

#### Defined in

[system/Ticker.ts:94](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L94)

___

### setInterval

▸ **setInterval**(`handler`, `timeout`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | `Function` |
| `timeout` | `number` |

#### Returns

`number`

#### Defined in

[system/Ticker.ts:113](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L113)

___

### setTimeout

▸ **setTimeout**(`handler`, `timeout?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `handler` | `Function` | `undefined` |
| `timeout` | `number` | `0` |

#### Returns

`number`

#### Defined in

[system/Ticker.ts:103](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L103)

___

### unregisterEnterFrameCallback

▸ **unregisterEnterFrameCallback**(`layer`): [`Ticker`](Ticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`Layer`](Layer.md) |

#### Returns

[`Ticker`](Ticker.md)

#### Defined in

[system/Ticker.ts:131](https://github.com/Lanfei/playable.js/blob/99bdc51/src/system/Ticker.ts#L131)
