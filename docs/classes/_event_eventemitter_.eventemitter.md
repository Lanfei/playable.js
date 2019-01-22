[playable.js](../README.md) > ["event/EventEmitter"](../modules/_event_eventemitter_.md) > [EventEmitter](../classes/_event_eventemitter_.eventemitter.md)

# Class: EventEmitter

## Hierarchy

**EventEmitter**

↳  [Media](_media_media_.media.md)

↳  [Request](_net_request_.request.md)

↳  [ResourceManager](_net_resourcemanager_.resourcemanager.md)

↳  [Layer](_display_layer_.layer.md)

↳  [Ticker](_core_ticker_.ticker.md)

↳  [Tween](_tween_tween_.tween.md)

## Index

### Properties

* [$events](_event_eventemitter_.eventemitter.md#_events)

### Methods

* [emit](_event_eventemitter_.eventemitter.md#emit)
* [hasEventListener](_event_eventemitter_.eventemitter.md#haseventlistener)
* [off](_event_eventemitter_.eventemitter.md#off)
* [on](_event_eventemitter_.eventemitter.md#on)
* [removeAllListeners](_event_eventemitter_.eventemitter.md#removealllisteners)

---

## Properties

<a id="_events"></a>

### `<Protected>` $events

**● $events**: *`Object`*

*Defined in [event/EventEmitter.ts:3](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/EventEmitter.ts#L3)*

___

## Methods

<a id="emit"></a>

###  emit

▸ **emit**(event: *`string`*, ...args: *`any`[]*): `boolean`

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

*Defined in [event/EventEmitter.ts:41](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/EventEmitter.ts#L41)*

**Returns:** `this`

___

