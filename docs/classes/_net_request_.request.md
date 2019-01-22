[playable.js](../README.md) > ["net/Request"](../modules/_net_request_.md) > [Request](../classes/_net_request_.request.md)

# Class: Request

## Hierarchy

 [EventEmitter](_event_eventemitter_.eventemitter.md)

**↳ Request**

## Index

### Constructors

* [constructor](_net_request_.request.md#constructor)

### Properties

* [$events](_net_request_.request.md#_events)
* [$xhr](_net_request_.request.md#_xhr)

### Accessors

* [response](_net_request_.request.md#response)
* [responseHeaders](_net_request_.request.md#responseheaders)
* [status](_net_request_.request.md#status)

### Methods

* [$onProgress](_net_request_.request.md#_onprogress)
* [$onReadyStateChange](_net_request_.request.md#_onreadystatechange)
* [abort](_net_request_.request.md#abort)
* [emit](_net_request_.request.md#emit)
* [hasEventListener](_net_request_.request.md#haseventlistener)
* [off](_net_request_.request.md#off)
* [on](_net_request_.request.md#on)
* [removeAllListeners](_net_request_.request.md#removealllisteners)
* [$getContentType](_net_request_.request.md#_getcontenttype)
* [$getQueryString](_net_request_.request.md#_getquerystring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Request**(options: *[RequestOption](../interfaces/_net_request_.requestoption.md)*): [Request](_net_request_.request.md)

⊕ **new Request**(url: *`string`*, options?: *[RequestOption](../interfaces/_net_request_.requestoption.md)*): [Request](_net_request_.request.md)

*Defined in [net/Request.ts:6](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/Request.ts#L6)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [RequestOption](../interfaces/_net_request_.requestoption.md) |

**Returns:** [Request](_net_request_.request.md)

*Defined in [net/Request.ts:8](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/Request.ts#L8)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |
| `Optional` options | [RequestOption](../interfaces/_net_request_.requestoption.md) |

**Returns:** [Request](_net_request_.request.md)

___

## Properties

<a id="_events"></a>

### `<Protected>` $events

**● $events**: *`Object`*

*Inherited from [EventEmitter](_event_eventemitter_.eventemitter.md).[$events](_event_eventemitter_.eventemitter.md#_events)*

*Defined in [event/EventEmitter.ts:3](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/EventEmitter.ts#L3)*

___
<a id="_xhr"></a>

### `<Protected>` $xhr

**● $xhr**: *`XMLHttpRequest`* =  new XMLHttpRequest()

*Defined in [net/Request.ts:6](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/Request.ts#L6)*

___

## Accessors

<a id="response"></a>

###  response

getresponse(): `any`

*Defined in [net/Request.ts:55](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/Request.ts#L55)*

**Returns:** `any`

___
<a id="responseheaders"></a>

###  responseHeaders

getresponseHeaders(): `Object`

*Defined in [net/Request.ts:59](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/Request.ts#L59)*

**Returns:** `Object`

___
<a id="status"></a>

###  status

getstatus(): `number`

*Defined in [net/Request.ts:51](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/Request.ts#L51)*

**Returns:** `number`

___

## Methods

<a id="_onprogress"></a>

### `<Protected>` $onProgress

▸ **$onProgress**(e: *`ProgressEvent`*): `void`

*Defined in [net/Request.ts:83](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/Request.ts#L83)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | `ProgressEvent` |

**Returns:** `void`

___
<a id="_onreadystatechange"></a>

### `<Protected>` $onReadyStateChange

▸ **$onReadyStateChange**(e: *[Event](_event_event_.event.md)*): `void`

*Defined in [net/Request.ts:89](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/Request.ts#L89)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [Event](_event_event_.event.md) |

**Returns:** `void`

___
<a id="abort"></a>

###  abort

▸ **abort**(): `void`

*Defined in [net/Request.ts:79](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/Request.ts#L79)*

**Returns:** `void`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string`*, ...args: *`any`[]*): `boolean`

*Inherited from [EventEmitter](_event_eventemitter_.eventemitter.md).[emit](_event_eventemitter_.eventemitter.md#emit)*

*Defined in [event/EventEmitter.ts:25](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/EventEmitter.ts#L25)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="haseventlistener"></a>

###  hasEventListener

▸ **hasEventListener**(event: *`string`*): `boolean`

*Inherited from [EventEmitter](_event_eventemitter_.eventemitter.md).[hasEventListener](_event_eventemitter_.eventemitter.md#haseventlistener)*

*Defined in [event/EventEmitter.ts:36](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/EventEmitter.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |

**Returns:** `boolean`

___
<a id="off"></a>

###  off

▸ **off**(event: *`string`*, listener?: *`function`*): `this`

*Inherited from [EventEmitter](_event_eventemitter_.eventemitter.md).[off](_event_eventemitter_.eventemitter.md#off)*

*Defined in [event/EventEmitter.ts:12](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/EventEmitter.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| `Optional` listener | `function` |

**Returns:** `this`

___
<a id="on"></a>

###  on

▸ **on**(event: *`string`*, listener: *`function`*): `this`

*Inherited from [EventEmitter](_event_eventemitter_.eventemitter.md).[on](_event_eventemitter_.eventemitter.md#on)*

*Defined in [event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/EventEmitter.ts#L5)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `function` |

**Returns:** `this`

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(): `this`

*Inherited from [EventEmitter](_event_eventemitter_.eventemitter.md).[removeAllListeners](_event_eventemitter_.eventemitter.md#removealllisteners)*

*Defined in [event/EventEmitter.ts:41](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/EventEmitter.ts#L41)*

**Returns:** `this`

___
<a id="_getcontenttype"></a>

### `<Static>``<Protected>` $getContentType

▸ **$getContentType**(headers: *`Object`*): `string`

*Defined in [net/Request.ts:100](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/Request.ts#L100)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| headers | `Object` |

**Returns:** `string`

___
<a id="_getquerystring"></a>

### `<Static>``<Protected>` $getQueryString

▸ **$getQueryString**(data: *`Object`*): `string`

*Defined in [net/Request.ts:109](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/Request.ts#L109)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `Object` |

**Returns:** `string`

___

