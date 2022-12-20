[API Reference](../README.md) / Request

# Class: Request

## Hierarchy

- [`EventEmitter`](../README.md#eventemitter)

  ↳ **`Request`**

## Table of contents

### Constructors

- [constructor](Request.md#constructor)

### Properties

- [$emittingType](Request.md#$emittingtype)
- [$events](Request.md#$events)
- [$removedListeners](Request.md#$removedlisteners)
- [$xhr](Request.md#$xhr)

### Accessors

- [response](Request.md#response)
- [responseHeaders](Request.md#responseheaders)
- [status](Request.md#status)

### Methods

- [$onAbort](Request.md#$onabort)
- [$onProgress](Request.md#$onprogress)
- [$onReadyStateChange](Request.md#$onreadystatechange)
- [abort](Request.md#abort)
- [emit](Request.md#emit)
- [hasEventListener](Request.md#haseventlistener)
- [off](Request.md#off)
- [on](Request.md#on)
- [once](Request.md#once)
- [removeAllListeners](Request.md#removealllisteners)
- [$getContentType](Request.md#$getcontenttype)
- [$getQueryString](Request.md#$getquerystring)

## Constructors

### constructor

• **new Request**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`RequestOption`](../interfaces/RequestOption.md) |

#### Overrides

[EventEmitter](../README.md#eventemitter).[constructor](../README.md#constructor)

#### Defined in

[net/Request.ts:8](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/Request.ts#L8)

• **new Request**(`url`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options?` | [`RequestOption`](../interfaces/RequestOption.md) |

#### Overrides

EventEmitter.constructor

#### Defined in

[net/Request.ts:9](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/Request.ts#L9)

## Properties

### $emittingType

• `Protected` **$emittingType**: `string` = `null`

#### Inherited from

[EventEmitter](../README.md#eventemitter).[$emittingType](../README.md#$emittingtype)

#### Defined in

[event/EventEmitter.ts:6](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L6)

___

### $events

• `Protected` **$events**: `Object` = `{}`

#### Inherited from

[EventEmitter](../README.md#eventemitter).[$events](../README.md#$events)

#### Defined in

[event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L5)

___

### $removedListeners

• `Protected` **$removedListeners**: [`Listener`](../README.md#listener)[] = `[]`

#### Inherited from

[EventEmitter](../README.md#eventemitter).[$removedListeners](../README.md#$removedlisteners)

#### Defined in

[event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L7)

___

### $xhr

• `Protected` **$xhr**: `XMLHttpRequest`

#### Defined in

[net/Request.ts:6](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/Request.ts#L6)

## Accessors

### response

• `get` **response**(): `any`

#### Returns

`any`

#### Defined in

[net/Request.ts:56](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/Request.ts#L56)

___

### responseHeaders

• `get` **responseHeaders**(): `Object`

#### Returns

`Object`

#### Defined in

[net/Request.ts:60](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/Request.ts#L60)

___

### status

• `get` **status**(): `number`

#### Returns

`number`

#### Defined in

[net/Request.ts:52](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/Request.ts#L52)

## Methods

### $onAbort

▸ `Protected` **$onAbort**(): `void`

#### Returns

`void`

#### Defined in

[net/Request.ts:84](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/Request.ts#L84)

___

### $onProgress

▸ `Protected` **$onProgress**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `ProgressEvent`<`EventTarget`\> |

#### Returns

`void`

#### Defined in

[net/Request.ts:88](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/Request.ts#L88)

___

### $onReadyStateChange

▸ `Protected` **$onReadyStateChange**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`Event`](../README.md#event) |

#### Returns

`void`

#### Defined in

[net/Request.ts:96](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/Request.ts#L96)

___

### abort

▸ **abort**(): `void`

#### Returns

`void`

#### Defined in

[net/Request.ts:80](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/Request.ts#L80)

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

▸ **off**(`type`, `listener?`): [`Request`](../README.md#request)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener?` | [`Listener`](../README.md#listener) |

#### Returns

[`Request`](../README.md#request)

#### Inherited from

[EventEmitter](../README.md#eventemitter).[off](../README.md#off)

#### Defined in

[event/EventEmitter.ts:16](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L16)

___

### on

▸ **on**(`type`, `listener`): [`Request`](../README.md#request)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`Listener`](../README.md#listener) |

#### Returns

[`Request`](../README.md#request)

#### Inherited from

[EventEmitter](../README.md#eventemitter).[on](../README.md#on)

#### Defined in

[event/EventEmitter.ts:9](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L9)

___

### once

▸ **once**(`type`, `listener`): [`Request`](../README.md#request)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`Listener`](../README.md#listener) |

#### Returns

[`Request`](../README.md#request)

#### Inherited from

[EventEmitter](../README.md#eventemitter).[once](../README.md#once)

#### Defined in

[event/EventEmitter.ts:33](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L33)

___

### removeAllListeners

▸ **removeAllListeners**(): [`Request`](../README.md#request)

#### Returns

[`Request`](../README.md#request)

#### Inherited from

[EventEmitter](../README.md#eventemitter).[removeAllListeners](../README.md#removealllisteners)

#### Defined in

[event/EventEmitter.ts:85](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L85)

___

### $getContentType

▸ `Static` `Protected` **$getContentType**(`headers`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers` | `Object` |

#### Returns

`string`

#### Defined in

[net/Request.ts:110](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/Request.ts#L110)

___

### $getQueryString

▸ `Static` `Protected` **$getQueryString**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |

#### Returns

`string`

#### Defined in

[net/Request.ts:119](https://github.com/Lanfei/playable.js/blob/2369e26/src/net/Request.ts#L119)
