[API Reference](../README.md) > [Request](../classes/request.md)

# Class: Request

## Hierarchy

 [EventEmitter](eventemitter.md)

**↳ Request**

## Index

### Constructors

* [constructor](request.md#constructor)

### Properties

* [$events](request.md#_events)
* [$xhr](request.md#_xhr)

### Accessors

* [response](request.md#response)
* [responseHeaders](request.md#responseheaders)
* [status](request.md#status)

### Methods

* [$onAbort](request.md#_onabort)
* [$onProgress](request.md#_onprogress)
* [$onReadyStateChange](request.md#_onreadystatechange)
* [abort](request.md#abort)
* [emit](request.md#emit)
* [hasEventListener](request.md#haseventlistener)
* [off](request.md#off)
* [on](request.md#on)
* [removeAllListeners](request.md#removealllisteners)
* [$getContentType](request.md#_getcontenttype)
* [$getQueryString](request.md#_getquerystring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Request**(options: *[RequestOption](../interfaces/requestoption.md)*): [Request](request.md)

⊕ **new Request**(url: *`string`*, options?: *[RequestOption](../interfaces/requestoption.md)*): [Request](request.md)

*Defined in [net/Request.ts:6](https://github.com/Lanfei/playable.js/blob/76571fa/src/net/Request.ts#L6)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [RequestOption](../interfaces/requestoption.md) |

**Returns:** [Request](request.md)

*Defined in [net/Request.ts:8](https://github.com/Lanfei/playable.js/blob/76571fa/src/net/Request.ts#L8)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |
| `Optional` options | [RequestOption](../interfaces/requestoption.md) |

**Returns:** [Request](request.md)

___

## Properties

<a id="_events"></a>

### `<Protected>` $events

**● $events**: *`Object`*

*Inherited from [EventEmitter](eventemitter.md).[$events](eventemitter.md#_events)*

*Defined in [event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/EventEmitter.ts#L5)*

___
<a id="_xhr"></a>

### `<Protected>` $xhr

**● $xhr**: *`XMLHttpRequest`* =  new XMLHttpRequest()

*Defined in [net/Request.ts:6](https://github.com/Lanfei/playable.js/blob/76571fa/src/net/Request.ts#L6)*

___

## Accessors

<a id="response"></a>

###  response

getresponse(): `any`

*Defined in [net/Request.ts:56](https://github.com/Lanfei/playable.js/blob/76571fa/src/net/Request.ts#L56)*

**Returns:** `any`

___
<a id="responseheaders"></a>

###  responseHeaders

getresponseHeaders(): `Object`

*Defined in [net/Request.ts:60](https://github.com/Lanfei/playable.js/blob/76571fa/src/net/Request.ts#L60)*

**Returns:** `Object`

___
<a id="status"></a>

###  status

getstatus(): `number`

*Defined in [net/Request.ts:52](https://github.com/Lanfei/playable.js/blob/76571fa/src/net/Request.ts#L52)*

**Returns:** `number`

___

## Methods

<a id="_onabort"></a>

### `<Protected>` $onAbort

▸ **$onAbort**(): `void`

*Defined in [net/Request.ts:84](https://github.com/Lanfei/playable.js/blob/76571fa/src/net/Request.ts#L84)*

**Returns:** `void`

___
<a id="_onprogress"></a>

### `<Protected>` $onProgress

▸ **$onProgress**(e: *`ProgressEvent`*): `void`

*Defined in [net/Request.ts:88](https://github.com/Lanfei/playable.js/blob/76571fa/src/net/Request.ts#L88)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | `ProgressEvent` |

**Returns:** `void`

___
<a id="_onreadystatechange"></a>

### `<Protected>` $onReadyStateChange

▸ **$onReadyStateChange**(e: *[Event](event.md)*): `void`

*Defined in [net/Request.ts:96](https://github.com/Lanfei/playable.js/blob/76571fa/src/net/Request.ts#L96)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [Event](event.md) |

**Returns:** `void`

___
<a id="abort"></a>

###  abort

▸ **abort**(): `void`

*Defined in [net/Request.ts:80](https://github.com/Lanfei/playable.js/blob/76571fa/src/net/Request.ts#L80)*

**Returns:** `void`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *[Event](event.md)*): `boolean`

▸ **emit**(type: *`string`*, ...args: *`any`[]*): `boolean`

*Inherited from [EventEmitter](eventemitter.md).[emit](eventemitter.md#emit)*

*Defined in [event/EventEmitter.ts:27](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/EventEmitter.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [Event](event.md) |

**Returns:** `boolean`

*Inherited from [EventEmitter](eventemitter.md).[emit](eventemitter.md#emit)*

*Defined in [event/EventEmitter.ts:28](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/EventEmitter.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="haseventlistener"></a>

###  hasEventListener

▸ **hasEventListener**(type: *`string`*): `boolean`

*Inherited from [EventEmitter](eventemitter.md).[hasEventListener](eventemitter.md#haseventlistener)*

*Defined in [event/EventEmitter.ts:56](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/EventEmitter.ts#L56)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |

**Returns:** `boolean`

___
<a id="off"></a>

###  off

▸ **off**(type: *`string`*, listener?: *`function`*): `this`

*Inherited from [EventEmitter](eventemitter.md).[off](eventemitter.md#off)*

*Defined in [event/EventEmitter.ts:14](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/EventEmitter.ts#L14)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| `Optional` listener | `function` |

**Returns:** `this`

___
<a id="on"></a>

###  on

▸ **on**(type: *`string`*, listener: *`function`*): `this`

*Inherited from [EventEmitter](eventemitter.md).[on](eventemitter.md#on)*

*Defined in [event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/EventEmitter.ts#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| listener | `function` |

**Returns:** `this`

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(): `this`

*Inherited from [EventEmitter](eventemitter.md).[removeAllListeners](eventemitter.md#removealllisteners)*

*Defined in [event/EventEmitter.ts:61](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/EventEmitter.ts#L61)*

**Returns:** `this`

___
<a id="_getcontenttype"></a>

### `<Static>``<Protected>` $getContentType

▸ **$getContentType**(headers: *`Object`*): `string`

*Defined in [net/Request.ts:110](https://github.com/Lanfei/playable.js/blob/76571fa/src/net/Request.ts#L110)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| headers | `Object` |

**Returns:** `string`

___
<a id="_getquerystring"></a>

### `<Static>``<Protected>` $getQueryString

▸ **$getQueryString**(data: *`Object`*): `string`

*Defined in [net/Request.ts:119](https://github.com/Lanfei/playable.js/blob/76571fa/src/net/Request.ts#L119)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `Object` |

**Returns:** `string`

___

