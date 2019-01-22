[playable.js](../README.md) > ["core/Ticker"](../modules/_core_ticker_.md) > [Ticker](../classes/_core_ticker_.ticker.md)

# Class: Ticker

## Hierarchy

 [EventEmitter](_event_eventemitter_.eventemitter.md)

**↳ Ticker**

## Index

### Constructors

* [constructor](_core_ticker_.ticker.md#constructor)

### Properties

* [$boundTick](_core_ticker_.ticker.md#_boundtick)
* [$enterFrameCallbackList](_core_ticker_.ticker.md#_enterframecallbacklist)
* [$events](_core_ticker_.ticker.md#_events)
* [$fps](_core_ticker_.ticker.md#_fps)
* [$lastTimestamp](_core_ticker_.ticker.md#_lasttimestamp)
* [$paused](_core_ticker_.ticker.md#_paused)
* [$shouldResume](_core_ticker_.ticker.md#_shouldresume)
* [$stage](_core_ticker_.ticker.md#_stage)
* [$tickHandle](_core_ticker_.ticker.md#_tickhandle)
* [$timerIndex](_core_ticker_.ticker.md#_timerindex)
* [$timers](_core_ticker_.ticker.md#_timers)

### Accessors

* [fps](_core_ticker_.ticker.md#fps)
* [paused](_core_ticker_.ticker.md#paused)

### Methods

* [$checkTimers](_core_ticker_.ticker.md#_checktimers)
* [$start](_core_ticker_.ticker.md#_start)
* [$tick](_core_ticker_.ticker.md#_tick)
* [clearInterval](_core_ticker_.ticker.md#clearinterval)
* [clearTimeout](_core_ticker_.ticker.md#cleartimeout)
* [emit](_core_ticker_.ticker.md#emit)
* [hasEventListener](_core_ticker_.ticker.md#haseventlistener)
* [off](_core_ticker_.ticker.md#off)
* [on](_core_ticker_.ticker.md#on)
* [pause](_core_ticker_.ticker.md#pause)
* [registerEnterFrameCallback](_core_ticker_.ticker.md#registerenterframecallback)
* [removeAllListeners](_core_ticker_.ticker.md#removealllisteners)
* [resume](_core_ticker_.ticker.md#resume)
* [setInterval](_core_ticker_.ticker.md#setinterval)
* [setTimeout](_core_ticker_.ticker.md#settimeout)
* [unregisterEnterFrameCallback](_core_ticker_.ticker.md#unregisterenterframecallback)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Ticker**(stage: *[Stage](_display_stage_.stage.md)*): [Ticker](_core_ticker_.ticker.md)

*Defined in [core/Ticker.ts:18](https://github.com/Lanfei/playable.js/blob/9a36445/src/core/Ticker.ts#L18)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| stage | [Stage](_display_stage_.stage.md) |

**Returns:** [Ticker](_core_ticker_.ticker.md)

___

## Properties

<a id="_boundtick"></a>

### `<Private>` $boundTick

**● $boundTick**: *`function`*

*Defined in [core/Ticker.ts:17](https://github.com/Lanfei/playable.js/blob/9a36445/src/core/Ticker.ts#L17)*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="_enterframecallbacklist"></a>

### `<Private>` $enterFrameCallbackList

**● $enterFrameCallbackList**: *`Array`<[Layer](_display_layer_.layer.md)>*

*Defined in [core/Ticker.ts:18](https://github.com/Lanfei/playable.js/blob/9a36445/src/core/Ticker.ts#L18)*

___
<a id="_events"></a>

### `<Protected>` $events

**● $events**: *`Object`*

*Inherited from [EventEmitter](_event_eventemitter_.eventemitter.md).[$events](_event_eventemitter_.eventemitter.md#_events)*

*Defined in [event/EventEmitter.ts:3](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/EventEmitter.ts#L3)*

___
<a id="_fps"></a>

### `<Protected>` $fps

**● $fps**: *`number`* = 0

*Defined in [core/Ticker.ts:8](https://github.com/Lanfei/playable.js/blob/9a36445/src/core/Ticker.ts#L8)*

___
<a id="_lasttimestamp"></a>

### `<Private>` $lastTimestamp

**● $lastTimestamp**: *`number`* = 0

*Defined in [core/Ticker.ts:14](https://github.com/Lanfei/playable.js/blob/9a36445/src/core/Ticker.ts#L14)*

___
<a id="_paused"></a>

### `<Private>` $paused

**● $paused**: *`boolean`* = false

*Defined in [core/Ticker.ts:11](https://github.com/Lanfei/playable.js/blob/9a36445/src/core/Ticker.ts#L11)*

___
<a id="_shouldresume"></a>

### `<Private>` $shouldResume

**● $shouldResume**: *`boolean`* = false

*Defined in [core/Ticker.ts:12](https://github.com/Lanfei/playable.js/blob/9a36445/src/core/Ticker.ts#L12)*

___
<a id="_stage"></a>

### `<Private>` $stage

**● $stage**: *[Stage](_display_stage_.stage.md)* =  null

*Defined in [core/Ticker.ts:10](https://github.com/Lanfei/playable.js/blob/9a36445/src/core/Ticker.ts#L10)*

___
<a id="_tickhandle"></a>

### `<Private>` $tickHandle

**● $tickHandle**: *`number`* =  null

*Defined in [core/Ticker.ts:15](https://github.com/Lanfei/playable.js/blob/9a36445/src/core/Ticker.ts#L15)*

___
<a id="_timerindex"></a>

### `<Private>` $timerIndex

**● $timerIndex**: *`number`* = 0

*Defined in [core/Ticker.ts:13](https://github.com/Lanfei/playable.js/blob/9a36445/src/core/Ticker.ts#L13)*

___
<a id="_timers"></a>

### `<Private>` $timers

**● $timers**: *`Object`*

*Defined in [core/Ticker.ts:16](https://github.com/Lanfei/playable.js/blob/9a36445/src/core/Ticker.ts#L16)*

___

## Accessors

<a id="fps"></a>

###  fps

getfps(): `number`

*Defined in [core/Ticker.ts:29](https://github.com/Lanfei/playable.js/blob/9a36445/src/core/Ticker.ts#L29)*

**Returns:** `number`

___
<a id="paused"></a>

###  paused

getpaused(): `boolean`

*Defined in [core/Ticker.ts:33](https://github.com/Lanfei/playable.js/blob/9a36445/src/core/Ticker.ts#L33)*

**Returns:** `boolean`

___

## Methods

<a id="_checktimers"></a>

### `<Private>` $checkTimers

▸ **$checkTimers**(dt: *`number`*): `void`

*Defined in [core/Ticker.ts:150](https://github.com/Lanfei/playable.js/blob/9a36445/src/core/Ticker.ts#L150)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| dt | `number` |

**Returns:** `void`

___
<a id="_start"></a>

### `<Private>` $start

▸ **$start**(): `this`

*Defined in [core/Ticker.ts:37](https://github.com/Lanfei/playable.js/blob/9a36445/src/core/Ticker.ts#L37)*

**Returns:** `this`

___
<a id="_tick"></a>

### `<Private>` $tick

▸ **$tick**(): `void`

*Defined in [core/Ticker.ts:135](https://github.com/Lanfei/playable.js/blob/9a36445/src/core/Ticker.ts#L135)*

**Returns:** `void`

___
<a id="clearinterval"></a>

###  clearInterval

▸ **clearInterval**(handle: *`number`*): `void`

*Defined in [core/Ticker.ts:114](https://github.com/Lanfei/playable.js/blob/9a36445/src/core/Ticker.ts#L114)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| handle | `number` |

**Returns:** `void`

___
<a id="cleartimeout"></a>

###  clearTimeout

▸ **clearTimeout**(handle: *`number`*): `void`

*Defined in [core/Ticker.ts:104](https://github.com/Lanfei/playable.js/blob/9a36445/src/core/Ticker.ts#L104)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| handle | `number` |

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
<a id="pause"></a>

###  pause

▸ **pause**(): `this`

*Defined in [core/Ticker.ts:79](https://github.com/Lanfei/playable.js/blob/9a36445/src/core/Ticker.ts#L79)*

**Returns:** `this`

___
<a id="registerenterframecallback"></a>

###  registerEnterFrameCallback

▸ **registerEnterFrameCallback**(layer: *[Layer](_display_layer_.layer.md)*): `this`

*Defined in [core/Ticker.ts:118](https://github.com/Lanfei/playable.js/blob/9a36445/src/core/Ticker.ts#L118)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| layer | [Layer](_display_layer_.layer.md) |

**Returns:** `this`

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(): `this`

*Inherited from [EventEmitter](_event_eventemitter_.eventemitter.md).[removeAllListeners](_event_eventemitter_.eventemitter.md#removealllisteners)*

*Defined in [event/EventEmitter.ts:41](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/EventEmitter.ts#L41)*

**Returns:** `this`

___
<a id="resume"></a>

###  resume

▸ **resume**(): `this`

*Defined in [core/Ticker.ts:89](https://github.com/Lanfei/playable.js/blob/9a36445/src/core/Ticker.ts#L89)*

**Returns:** `this`

___
<a id="setinterval"></a>

###  setInterval

▸ **setInterval**(handler: *`Function`*, timeout: *`number`*): `number`

*Defined in [core/Ticker.ts:108](https://github.com/Lanfei/playable.js/blob/9a36445/src/core/Ticker.ts#L108)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| handler | `Function` |
| timeout | `number` |

**Returns:** `number`

___
<a id="settimeout"></a>

###  setTimeout

▸ **setTimeout**(handler: *`Function`*, timeout?: *`number`*): `number`

*Defined in [core/Ticker.ts:98](https://github.com/Lanfei/playable.js/blob/9a36445/src/core/Ticker.ts#L98)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| handler | `Function` | - |
| `Default value` timeout | `number` | 0 |

**Returns:** `number`

___
<a id="unregisterenterframecallback"></a>

###  unregisterEnterFrameCallback

▸ **unregisterEnterFrameCallback**(layer: *[Layer](_display_layer_.layer.md)*): `this`

*Defined in [core/Ticker.ts:126](https://github.com/Lanfei/playable.js/blob/9a36445/src/core/Ticker.ts#L126)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| layer | [Layer](_display_layer_.layer.md) |

**Returns:** `this`

___

