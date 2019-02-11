[API Reference](../README.md) > [Ticker](../classes/ticker.md)

# Class: Ticker

## Hierarchy

 [EventEmitter](eventemitter.md)

**↳ Ticker**

## Index

### Constructors

* [constructor](ticker.md#constructor)

### Properties

* [$boundTick](ticker.md#_boundtick)
* [$deltaTime](ticker.md#_deltatime)
* [$enterFrameCallbackList](ticker.md#_enterframecallbacklist)
* [$events](ticker.md#_events)
* [$fps](ticker.md#_fps)
* [$lastTimestamp](ticker.md#_lasttimestamp)
* [$paused](ticker.md#_paused)
* [$shouldResume](ticker.md#_shouldresume)
* [$stage](ticker.md#_stage)
* [$tickHandle](ticker.md#_tickhandle)
* [$timerIndex](ticker.md#_timerindex)
* [$timers](ticker.md#_timers)

### Accessors

* [deltaTime](ticker.md#deltatime)
* [fps](ticker.md#fps)
* [paused](ticker.md#paused)

### Methods

* [$checkTimers](ticker.md#_checktimers)
* [$start](ticker.md#_start)
* [$tick](ticker.md#_tick)
* [clearInterval](ticker.md#clearinterval)
* [clearTimeout](ticker.md#cleartimeout)
* [emit](ticker.md#emit)
* [hasEventListener](ticker.md#haseventlistener)
* [off](ticker.md#off)
* [on](ticker.md#on)
* [pause](ticker.md#pause)
* [registerEnterFrameCallback](ticker.md#registerenterframecallback)
* [removeAllListeners](ticker.md#removealllisteners)
* [resume](ticker.md#resume)
* [setInterval](ticker.md#setinterval)
* [setTimeout](ticker.md#settimeout)
* [unregisterEnterFrameCallback](ticker.md#unregisterenterframecallback)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Ticker**(stage: *[Stage](stage.md)*): [Ticker](ticker.md)

*Defined in [system/Ticker.ts:18](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L18)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| stage | [Stage](stage.md) |

**Returns:** [Ticker](ticker.md)

___

## Properties

<a id="_boundtick"></a>

### `<Protected>` $boundTick

**● $boundTick**: *`function`*

*Defined in [system/Ticker.ts:17](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L17)*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="_deltatime"></a>

### `<Protected>` $deltaTime

**● $deltaTime**: *`number`* = 0

*Defined in [system/Ticker.ts:10](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L10)*

___
<a id="_enterframecallbacklist"></a>

### `<Protected>` $enterFrameCallbackList

**● $enterFrameCallbackList**: *`Array`<[Layer](layer.md)>*

*Defined in [system/Ticker.ts:18](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L18)*

___
<a id="_events"></a>

### `<Protected>` $events

**● $events**: *`Object`*

*Inherited from [EventEmitter](eventemitter.md).[$events](eventemitter.md#_events)*

*Defined in [event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/EventEmitter.ts#L5)*

___
<a id="_fps"></a>

### `<Protected>` $fps

**● $fps**: *`number`* = 0

*Defined in [system/Ticker.ts:9](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L9)*

___
<a id="_lasttimestamp"></a>

### `<Protected>` $lastTimestamp

**● $lastTimestamp**: *`number`* = 0

*Defined in [system/Ticker.ts:14](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L14)*

___
<a id="_paused"></a>

### `<Protected>` $paused

**● $paused**: *`boolean`* = true

*Defined in [system/Ticker.ts:11](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L11)*

___
<a id="_shouldresume"></a>

### `<Protected>` $shouldResume

**● $shouldResume**: *`boolean`* = false

*Defined in [system/Ticker.ts:12](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L12)*

___
<a id="_stage"></a>

### `<Protected>` $stage

**● $stage**: *[Stage](stage.md)* =  null

*Defined in [system/Ticker.ts:8](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L8)*

___
<a id="_tickhandle"></a>

### `<Protected>` $tickHandle

**● $tickHandle**: *`number`* =  null

*Defined in [system/Ticker.ts:15](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L15)*

___
<a id="_timerindex"></a>

### `<Protected>` $timerIndex

**● $timerIndex**: *`number`* = 0

*Defined in [system/Ticker.ts:13](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L13)*

___
<a id="_timers"></a>

### `<Protected>` $timers

**● $timers**: *`Object`*

*Defined in [system/Ticker.ts:16](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L16)*

___

## Accessors

<a id="deltatime"></a>

###  deltaTime

getdeltaTime(): `number`

*Defined in [system/Ticker.ts:33](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L33)*

**Returns:** `number`

___
<a id="fps"></a>

###  fps

getfps(): `number`

*Defined in [system/Ticker.ts:29](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L29)*

**Returns:** `number`

___
<a id="paused"></a>

###  paused

getpaused(): `boolean`

*Defined in [system/Ticker.ts:37](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L37)*

**Returns:** `boolean`

___

## Methods

<a id="_checktimers"></a>

### `<Protected>` $checkTimers

▸ **$checkTimers**(dt: *`number`*): `void`

*Defined in [system/Ticker.ts:160](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L160)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| dt | `number` |

**Returns:** `void`

___
<a id="_start"></a>

### `<Protected>` $start

▸ **$start**(): `this`

*Defined in [system/Ticker.ts:41](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L41)*

**Returns:** `this`

___
<a id="_tick"></a>

### `<Protected>` $tick

▸ **$tick**(): `void`

*Defined in [system/Ticker.ts:140](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L140)*

**Returns:** `void`

___
<a id="clearinterval"></a>

###  clearInterval

▸ **clearInterval**(handle: *`number`*): `void`

*Defined in [system/Ticker.ts:119](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L119)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| handle | `number` |

**Returns:** `void`

___
<a id="cleartimeout"></a>

###  clearTimeout

▸ **clearTimeout**(handle: *`number`*): `void`

*Defined in [system/Ticker.ts:109](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L109)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| handle | `number` |

**Returns:** `void`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *[Event](event.md)*): `boolean`

▸ **emit**(type: *`string`*, ...args: *`any`[]*): `boolean`

*Inherited from [EventEmitter](eventemitter.md).[emit](eventemitter.md#emit)*

*Defined in [event/EventEmitter.ts:27](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/EventEmitter.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [Event](event.md) |

**Returns:** `boolean`

*Inherited from [EventEmitter](eventemitter.md).[emit](eventemitter.md#emit)*

*Defined in [event/EventEmitter.ts:28](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/EventEmitter.ts#L28)*

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

*Defined in [event/EventEmitter.ts:56](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/EventEmitter.ts#L56)*

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

*Defined in [event/EventEmitter.ts:14](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/EventEmitter.ts#L14)*

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

*Defined in [event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/EventEmitter.ts#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| listener | `function` |

**Returns:** `this`

___
<a id="pause"></a>

###  pause

▸ **pause**(): `this`

*Defined in [system/Ticker.ts:84](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L84)*

**Returns:** `this`

___
<a id="registerenterframecallback"></a>

###  registerEnterFrameCallback

▸ **registerEnterFrameCallback**(layer: *[Layer](layer.md)*): `this`

*Defined in [system/Ticker.ts:123](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L123)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| layer | [Layer](layer.md) |

**Returns:** `this`

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(): `this`

*Inherited from [EventEmitter](eventemitter.md).[removeAllListeners](eventemitter.md#removealllisteners)*

*Defined in [event/EventEmitter.ts:61](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/EventEmitter.ts#L61)*

**Returns:** `this`

___
<a id="resume"></a>

###  resume

▸ **resume**(): `this`

*Defined in [system/Ticker.ts:94](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L94)*

**Returns:** `this`

___
<a id="setinterval"></a>

###  setInterval

▸ **setInterval**(handler: *`Function`*, timeout: *`number`*): `number`

*Defined in [system/Ticker.ts:113](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L113)*

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

*Defined in [system/Ticker.ts:103](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L103)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| handler | `Function` | - |
| `Default value` timeout | `number` | 0 |

**Returns:** `number`

___
<a id="unregisterenterframecallback"></a>

###  unregisterEnterFrameCallback

▸ **unregisterEnterFrameCallback**(layer: *[Layer](layer.md)*): `this`

*Defined in [system/Ticker.ts:131](https://github.com/Lanfei/playable.js/blob/877c13c/src/system/Ticker.ts#L131)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| layer | [Layer](layer.md) |

**Returns:** `this`

___

