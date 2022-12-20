[API Reference](../README.md) / ResourceManager

# Class: ResourceManager

## Hierarchy

- [`EventEmitter`](../README.md#eventemitter)

  ↳ **`ResourceManager`**

## Table of contents

### Constructors

- [constructor](ResourceManager.md#constructor)

### Properties

- [$emittingType](ResourceManager.md#$emittingtype)
- [$errorCount](ResourceManager.md#$errorcount)
- [$events](ResourceManager.md#$events)
- [$list](ResourceManager.md#$list)
- [$loadedCount](ResourceManager.md#$loadedcount)
- [$loadingCount](ResourceManager.md#$loadingcount)
- [$removedListeners](ResourceManager.md#$removedlisteners)
- [$resources](ResourceManager.md#$resources)
- [$stage](ResourceManager.md#$stage)
- [$total](ResourceManager.md#$total)
- [retryTimes](ResourceManager.md#retrytimes)
- [threads](ResourceManager.md#threads)
- [timeout](ResourceManager.md#timeout)
- [TYPE\_BINARY](ResourceManager.md#type_binary)
- [TYPE\_JSON](ResourceManager.md#type_json)
- [TYPE\_SOUND](ResourceManager.md#type_sound)
- [TYPE\_TEXT](ResourceManager.md#type_text)
- [TYPE\_TEXTURE](ResourceManager.md#type_texture)

### Accessors

- [errorCount](ResourceManager.md#errorcount)
- [loadedCount](ResourceManager.md#loadedcount)
- [total](ResourceManager.md#total)

### Methods

- [$checkPendingTasks](ResourceManager.md#$checkpendingtasks)
- [$load](ResourceManager.md#$load)
- [emit](ResourceManager.md#emit)
- [get](ResourceManager.md#get)
- [has](ResourceManager.md#has)
- [hasEventListener](ResourceManager.md#haseventlistener)
- [off](ResourceManager.md#off)
- [on](ResourceManager.md#on)
- [once](ResourceManager.md#once)
- [removeAllListeners](ResourceManager.md#removealllisteners)

## Constructors

### constructor

• **new ResourceManager**(`stage`, `list`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stage` | [`Stage`](../README.md#stage) |
| `list` | [`ResourceInfo`](../interfaces/ResourceInfo.md)[] |
| `options?` | [`ResourceManagerOption`](../interfaces/ResourceManagerOption.md) |

#### Overrides

[EventEmitter](../README.md#eventemitter).[constructor](../README.md#constructor)

#### Defined in

[net/ResourceManager.ts:29](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/ResourceManager.ts#L29)

## Properties

### $emittingType

• `Protected` **$emittingType**: `string` = `null`

#### Inherited from

[EventEmitter](../README.md#eventemitter).[$emittingType](../README.md#$emittingtype)

#### Defined in

[event/EventEmitter.ts:6](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L6)

___

### $errorCount

• `Protected` **$errorCount**: `number` = `0`

#### Defined in

[net/ResourceManager.ts:21](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/ResourceManager.ts#L21)

___

### $events

• `Protected` **$events**: `Object` = `{}`

#### Inherited from

[EventEmitter](../README.md#eventemitter).[$events](../README.md#$events)

#### Defined in

[event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L5)

___

### $list

• `Protected` **$list**: [`ResourceInfo`](../interfaces/ResourceInfo.md)[]

#### Defined in

[net/ResourceManager.ts:24](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/ResourceManager.ts#L24)

___

### $loadedCount

• `Protected` **$loadedCount**: `number` = `0`

#### Defined in

[net/ResourceManager.ts:22](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/ResourceManager.ts#L22)

___

### $loadingCount

• `Protected` **$loadingCount**: `number` = `0`

#### Defined in

[net/ResourceManager.ts:23](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/ResourceManager.ts#L23)

___

### $removedListeners

• `Protected` **$removedListeners**: [`Listener`](../README.md#listener)[] = `[]`

#### Inherited from

[EventEmitter](../README.md#eventemitter).[$removedListeners](../README.md#$removedlisteners)

#### Defined in

[event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L7)

___

### $resources

• `Protected` `Readonly` **$resources**: `Object`

#### Defined in

[net/ResourceManager.ts:27](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/ResourceManager.ts#L27)

___

### $stage

• `Protected` `Readonly` **$stage**: [`Stage`](../README.md#stage)

#### Defined in

[net/ResourceManager.ts:26](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/ResourceManager.ts#L26)

___

### $total

• `Protected` `Readonly` **$total**: `number`

#### Defined in

[net/ResourceManager.ts:25](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/ResourceManager.ts#L25)

___

### retryTimes

• **retryTimes**: `number`

#### Defined in

[net/ResourceManager.ts:19](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/ResourceManager.ts#L19)

___

### threads

• **threads**: `number`

#### Defined in

[net/ResourceManager.ts:17](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/ResourceManager.ts#L17)

___

### timeout

• **timeout**: `number`

#### Defined in

[net/ResourceManager.ts:18](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/ResourceManager.ts#L18)

___

### TYPE\_BINARY

▪ `Static` `Readonly` **TYPE\_BINARY**: `string` = `'binary'`

#### Defined in

[net/ResourceManager.ts:13](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/ResourceManager.ts#L13)

___

### TYPE\_JSON

▪ `Static` `Readonly` **TYPE\_JSON**: `string` = `'json'`

#### Defined in

[net/ResourceManager.ts:12](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/ResourceManager.ts#L12)

___

### TYPE\_SOUND

▪ `Static` `Readonly` **TYPE\_SOUND**: `string` = `'sound'`

#### Defined in

[net/ResourceManager.ts:15](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/ResourceManager.ts#L15)

___

### TYPE\_TEXT

▪ `Static` `Readonly` **TYPE\_TEXT**: `string` = `'text'`

#### Defined in

[net/ResourceManager.ts:11](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/ResourceManager.ts#L11)

___

### TYPE\_TEXTURE

▪ `Static` `Readonly` **TYPE\_TEXTURE**: `string` = `'texture'`

#### Defined in

[net/ResourceManager.ts:14](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/ResourceManager.ts#L14)

## Accessors

### errorCount

• `get` **errorCount**(): `number`

#### Returns

`number`

#### Defined in

[net/ResourceManager.ts:45](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/ResourceManager.ts#L45)

___

### loadedCount

• `get` **loadedCount**(): `number`

#### Returns

`number`

#### Defined in

[net/ResourceManager.ts:49](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/ResourceManager.ts#L49)

___

### total

• `get` **total**(): `number`

#### Returns

`number`

#### Defined in

[net/ResourceManager.ts:41](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/ResourceManager.ts#L41)

## Methods

### $checkPendingTasks

▸ `Protected` **$checkPendingTasks**(): `void`

#### Returns

`void`

#### Defined in

[net/ResourceManager.ts:53](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/ResourceManager.ts#L53)

___

### $load

▸ `Protected` **$load**(`info`, `attempts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`ResourceInfo`](../interfaces/ResourceInfo.md) |
| `attempts` | `number` |

#### Returns

`void`

#### Defined in

[net/ResourceManager.ts:60](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/ResourceManager.ts#L60)

___

### emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../README.md#event) |

#### Returns

`boolean`

#### Inherited from

[EventEmitter](../README.md#eventemitter).[emit](../README.md#emit)

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

#### Inherited from

[EventEmitter](../README.md#eventemitter).[emit](../README.md#emit)

#### Defined in

[event/EventEmitter.ts:43](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L43)

___

### get

▸ **get**<`Resource`\>(`name`): `Resource`

#### Type parameters

| Name |
| :------ |
| `Resource` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Resource`

#### Defined in

[net/ResourceManager.ts:145](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/ResourceManager.ts#L145)

___

### has

▸ **has**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[net/ResourceManager.ts:141](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/ResourceManager.ts#L141)

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

[EventEmitter](../README.md#eventemitter).[hasEventListener](../README.md#haseventlistener)

#### Defined in

[event/EventEmitter.ts:80](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L80)

___

### off

▸ **off**(`type`, `listener?`): [`ResourceManager`](../README.md#resourcemanager)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener?` | [`Listener`](../README.md#listener) |

#### Returns

[`ResourceManager`](../README.md#resourcemanager)

#### Inherited from

[EventEmitter](../README.md#eventemitter).[off](../README.md#off)

#### Defined in

[event/EventEmitter.ts:16](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L16)

___

### on

▸ **on**(`type`, `listener`): [`ResourceManager`](../README.md#resourcemanager)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`Listener`](../README.md#listener) |

#### Returns

[`ResourceManager`](../README.md#resourcemanager)

#### Inherited from

[EventEmitter](../README.md#eventemitter).[on](../README.md#on)

#### Defined in

[event/EventEmitter.ts:9](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L9)

___

### once

▸ **once**(`type`, `listener`): [`ResourceManager`](../README.md#resourcemanager)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`Listener`](../README.md#listener) |

#### Returns

[`ResourceManager`](../README.md#resourcemanager)

#### Inherited from

[EventEmitter](../README.md#eventemitter).[once](../README.md#once)

#### Defined in

[event/EventEmitter.ts:33](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L33)

___

### removeAllListeners

▸ **removeAllListeners**(): [`ResourceManager`](../README.md#resourcemanager)

#### Returns

[`ResourceManager`](../README.md#resourcemanager)

#### Inherited from

[EventEmitter](../README.md#eventemitter).[removeAllListeners](../README.md#removealllisteners)

#### Defined in

[event/EventEmitter.ts:85](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L85)
