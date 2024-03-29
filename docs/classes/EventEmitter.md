[API Reference](../README.md) / EventEmitter

# Class: EventEmitter

## Table of contents

### Constructors

- [constructor](EventEmitter.md#constructor)

### Properties

- [$emittingType](EventEmitter.md#$emittingtype)
- [$events](EventEmitter.md#$events)
- [$removedListeners](EventEmitter.md#$removedlisteners)

### Methods

- [emit](EventEmitter.md#emit)
- [hasEventListener](EventEmitter.md#haseventlistener)
- [off](EventEmitter.md#off)
- [on](EventEmitter.md#on)
- [once](EventEmitter.md#once)
- [removeAllListeners](EventEmitter.md#removealllisteners)

## Constructors

### constructor

• **new EventEmitter**()

## Properties

### $emittingType

• `Protected` **$emittingType**: `string` = `null`

#### Defined in

[event/EventEmitter.ts:6](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L6)

___

### $events

• `Protected` **$events**: `Object` = `{}`

#### Defined in

[event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L5)

___

### $removedListeners

• `Protected` **$removedListeners**: [`Listener`](../README.md#listener)[] = `[]`

#### Defined in

[event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L7)

## Methods

### emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../README.md#event) |

#### Returns

`boolean`

#### Defined in

[event/EventEmitter.ts:42](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L42)

▸ **emit**(`type`, `...args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Defined in

[event/EventEmitter.ts:43](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L43)

___

### hasEventListener

▸ **hasEventListener**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`boolean`

#### Defined in

[event/EventEmitter.ts:80](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L80)

___

### off

▸ **off**(`type`, `listener?`): [`EventEmitter`](../README.md#eventemitter)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener?` | [`Listener`](../README.md#listener) |

#### Returns

[`EventEmitter`](../README.md#eventemitter)

#### Defined in

[event/EventEmitter.ts:16](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L16)

___

### on

▸ **on**(`type`, `listener`): [`EventEmitter`](../README.md#eventemitter)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`Listener`](../README.md#listener) |

#### Returns

[`EventEmitter`](../README.md#eventemitter)

#### Defined in

[event/EventEmitter.ts:9](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L9)

___

### once

▸ **once**(`type`, `listener`): [`EventEmitter`](../README.md#eventemitter)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`Listener`](../README.md#listener) |

#### Returns

[`EventEmitter`](../README.md#eventemitter)

#### Defined in

[event/EventEmitter.ts:33](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L33)

___

### removeAllListeners

▸ **removeAllListeners**(): [`EventEmitter`](../README.md#eventemitter)

#### Returns

[`EventEmitter`](../README.md#eventemitter)

#### Defined in

[event/EventEmitter.ts:85](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L85)
