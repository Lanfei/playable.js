[API Reference](../README.md) > [EventEmitter](../classes/eventemitter.md)

# Class: EventEmitter

## Hierarchy

**EventEmitter**

↳  [Ticker](ticker.md)

↳  [Media](media.md)

↳  [Request](request.md)

↳  [ResourceManager](resourcemanager.md)

↳  [Layer](layer.md)

↳  [Tween](tween.md)

## Index

### Properties

* [$events](eventemitter.md#_events)

### Methods

* [emit](eventemitter.md#emit)
* [hasEventListener](eventemitter.md#haseventlistener)
* [off](eventemitter.md#off)
* [on](eventemitter.md#on)
* [removeAllListeners](eventemitter.md#removealllisteners)

---

## Properties

<a id="_events"></a>

### `<Protected>` $events

**● $events**: *`Object`*

*Defined in [event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/EventEmitter.ts#L5)*

___

## Methods

<a id="emit"></a>

###  emit

▸ **emit**(event: *[Event](event.md)*): `boolean`

▸ **emit**(type: *`string`*, ...args: *`any`[]*): `boolean`

*Defined in [event/EventEmitter.ts:27](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/EventEmitter.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [Event](event.md) |

**Returns:** `boolean`

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

*Defined in [event/EventEmitter.ts:61](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/EventEmitter.ts#L61)*

**Returns:** `this`

___

