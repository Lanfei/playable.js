[API Reference](../README.md) > [Event](../classes/event.md)

# Class: Event

## Hierarchy

**Event**

↳  [TouchEvent](touchevent.md)

## Index

### Constructors

* [constructor](event.md#constructor)

### Events

* [ABORT](event.md#abort)
* [ACTIVATE](event.md#activate)
* [ADDED](event.md#added)
* [ADDED_TO_STAGE](event.md#added_to_stage)
* [COMPLETE](event.md#complete)
* [DEACTIVATE](event.md#deactivate)
* [ENTER_FRAME](event.md#enter_frame)
* [ERROR](event.md#error)
* [LOAD](event.md#load)
* [PROGRESS](event.md#progress)
* [REMOVED](event.md#removed)
* [REMOVED_FROM_STAGE](event.md#removed_from_stage)
* [SOUND_COMPLETE](event.md#sound_complete)
* [TICK](event.md#tick)
* [TICKER_PAUSE](event.md#ticker_pause)
* [TICKER_RESUME](event.md#ticker_resume)
* [VIEWPORT_RESIZE](event.md#viewport_resize)

### Properties

* [currentTarget](event.md#currenttarget)
* [data](event.md#data)
* [target](event.md#target)
* [type](event.md#type)
* [$pool](event.md#_pool)

### Methods

* [$init](event.md#_init)
* [release](event.md#release)
* [create](event.md#create)
* [recycle](event.md#recycle)

---

## Constructors

<a id="constructor"></a>

### `<Protected>` constructor

⊕ **new Event**(type: *`string`*, data?: *`any`*): [Event](event.md)

*Defined in [event/Event.ts:43](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L43)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| type | `string` | - |
| `Default value` data | `any` |  null |

**Returns:** [Event](event.md)

___

## Events

<a id="abort"></a>

### `<Static>` ABORT

**ABORT**: *`string`* = "abort"

*Defined in [event/Event.ts:30](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L30)*

___
<a id="activate"></a>

### `<Static>` ACTIVATE

**ACTIVATE**: *`string`* = "activate"

*Defined in [event/Event.ts:14](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L14)*

___
<a id="added"></a>

### `<Static>` ADDED

**ADDED**: *`string`* = "added"

*Defined in [event/Event.ts:6](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L6)*

___
<a id="added_to_stage"></a>

### `<Static>` ADDED_TO_STAGE

**ADDED_TO_STAGE**: *`string`* = "addedToStage"

*Defined in [event/Event.ts:10](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L10)*

___
<a id="complete"></a>

### `<Static>` COMPLETE

**COMPLETE**: *`string`* = "complete"

*Defined in [event/Event.ts:36](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L36)*

___
<a id="deactivate"></a>

### `<Static>` DEACTIVATE

**DEACTIVATE**: *`string`* = "deactivate"

*Defined in [event/Event.ts:16](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L16)*

___
<a id="enter_frame"></a>

### `<Static>` ENTER_FRAME

**ENTER_FRAME**: *`string`* = "enterFrame"

*Defined in [event/Event.ts:18](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L18)*

___
<a id="error"></a>

### `<Static>` ERROR

**ERROR**: *`string`* = "error"

*Defined in [event/Event.ts:32](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L32)*

___
<a id="load"></a>

### `<Static>` LOAD

**LOAD**: *`string`* = "load"

*Defined in [event/Event.ts:28](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L28)*

___
<a id="progress"></a>

### `<Static>` PROGRESS

**PROGRESS**: *`string`* = "progress"

*Defined in [event/Event.ts:34](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L34)*

___
<a id="removed"></a>

### `<Static>` REMOVED

**REMOVED**: *`string`* = "removed"

*Defined in [event/Event.ts:8](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L8)*

___
<a id="removed_from_stage"></a>

### `<Static>` REMOVED_FROM_STAGE

**REMOVED_FROM_STAGE**: *`string`* = "removeFromStage"

*Defined in [event/Event.ts:12](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L12)*

___
<a id="sound_complete"></a>

### `<Static>` SOUND_COMPLETE

**SOUND_COMPLETE**: *`string`* = "soundComplete"

*Defined in [event/Event.ts:38](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L38)*

___
<a id="tick"></a>

### `<Static>` TICK

**TICK**: *`string`* = "tick"

*Defined in [event/Event.ts:20](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L20)*

___
<a id="ticker_pause"></a>

### `<Static>` TICKER_PAUSE

**TICKER_PAUSE**: *`string`* = "tickerPause"

*Defined in [event/Event.ts:22](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L22)*

___
<a id="ticker_resume"></a>

### `<Static>` TICKER_RESUME

**TICKER_RESUME**: *`string`* = "tickerResume"

*Defined in [event/Event.ts:24](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L24)*

___
<a id="viewport_resize"></a>

### `<Static>` VIEWPORT_RESIZE

**VIEWPORT_RESIZE**: *`string`* = "viewportResize"

*Defined in [event/Event.ts:26](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L26)*

___

## Properties

<a id="currenttarget"></a>

###  currentTarget

**● currentTarget**: *[EventEmitter](eventemitter.md)* =  null

*Defined in [event/Event.ts:43](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L43)*

___
<a id="data"></a>

###  data

**● data**: *`any`* =  null

*Defined in [event/Event.ts:41](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L41)*

___
<a id="target"></a>

###  target

**● target**: *[EventEmitter](eventemitter.md)* =  null

*Defined in [event/Event.ts:42](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L42)*

___
<a id="type"></a>

###  type

**● type**: *`string`* =  null

*Defined in [event/Event.ts:40](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L40)*

___
<a id="_pool"></a>

### `<Static>``<Protected>` $pool

**● $pool**: *`Array`<[Event](event.md)>* =  []

*Defined in [event/Event.ts:61](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L61)*

___

## Methods

<a id="_init"></a>

### `<Protected>` $init

▸ **$init**(type: *`string`*, data?: *`any`*): `this`

*Defined in [event/Event.ts:49](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| type | `string` | - |
| `Default value` data | `any` |  null |

**Returns:** `this`

___
<a id="release"></a>

###  release

▸ **release**(): `void`

*Defined in [event/Event.ts:55](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L55)*

**Returns:** `void`

___
<a id="create"></a>

### `<Static>` create

▸ **create**(type: *`string`*, data?: *`any`*): [Event](event.md)

*Defined in [event/Event.ts:63](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L63)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| type | `string` | - |
| `Default value` data | `any` |  null |

**Returns:** [Event](event.md)

___
<a id="recycle"></a>

### `<Static>` recycle

▸ **recycle**(e: *[Event](event.md)*): `void`

*Defined in [event/Event.ts:72](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/Event.ts#L72)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [Event](event.md) |

**Returns:** `void`

___

