[playable.js](../README.md) > ["event/TouchEvent"](../modules/_event_touchevent_.md) > [TouchEvent](../classes/_event_touchevent_.touchevent.md)

# Class: TouchEvent

## Hierarchy

 [Event](_event_event_.event.md)

**↳ TouchEvent**

## Index

### Constructors

* [constructor](_event_touchevent_.touchevent.md#constructor)

### Properties

* [cancelBubble](_event_touchevent_.touchevent.md#cancelbubble)
* [currentTarget](_event_touchevent_.touchevent.md#currenttarget)
* [identifier](_event_touchevent_.touchevent.md#identifier)
* [localX](_event_touchevent_.touchevent.md#localx)
* [localY](_event_touchevent_.touchevent.md#localy)
* [stageX](_event_touchevent_.touchevent.md#stagex)
* [stageY](_event_touchevent_.touchevent.md#stagey)
* [target](_event_touchevent_.touchevent.md#target)
* [targetX](_event_touchevent_.touchevent.md#targetx)
* [targetY](_event_touchevent_.touchevent.md#targety)
* [type](_event_touchevent_.touchevent.md#type)
* [$pool](_event_touchevent_.touchevent.md#_pool)
* [ADDED](_event_touchevent_.touchevent.md#added)
* [ADDED_TO_STAGE](_event_touchevent_.touchevent.md#added_to_stage)
* [COMPLETE](_event_touchevent_.touchevent.md#complete)
* [ENTER_FRAME](_event_touchevent_.touchevent.md#enter_frame)
* [ERROR](_event_touchevent_.touchevent.md#error)
* [LOAD](_event_touchevent_.touchevent.md#load)
* [PROGRESS](_event_touchevent_.touchevent.md#progress)
* [REMOVED](_event_touchevent_.touchevent.md#removed)
* [REMOVED_FROM_STAGE](_event_touchevent_.touchevent.md#removed_from_stage)
* [SOUND_COMPLETE](_event_touchevent_.touchevent.md#sound_complete)
* [TICK](_event_touchevent_.touchevent.md#tick)
* [TICKER_PAUSE](_event_touchevent_.touchevent.md#ticker_pause)
* [TICKER_RESUME](_event_touchevent_.touchevent.md#ticker_resume)
* [TOUCH_CANCEL](_event_touchevent_.touchevent.md#touch_cancel)
* [TOUCH_END](_event_touchevent_.touchevent.md#touch_end)
* [TOUCH_MOVE](_event_touchevent_.touchevent.md#touch_move)
* [TOUCH_START](_event_touchevent_.touchevent.md#touch_start)
* [TOUCH_TAP](_event_touchevent_.touchevent.md#touch_tap)
* [VIEWPORT_RESIZE](_event_touchevent_.touchevent.md#viewport_resize)

### Methods

* [$init](_event_touchevent_.touchevent.md#_init)
* [release](_event_touchevent_.touchevent.md#release)
* [stopPropagation](_event_touchevent_.touchevent.md#stoppropagation)
* [create](_event_touchevent_.touchevent.md#create)
* [recycle](_event_touchevent_.touchevent.md#recycle)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TouchEvent**(type: *`string`*): [TouchEvent](_event_touchevent_.touchevent.md)

*Overrides [Event](_event_event_.event.md).[constructor](_event_event_.event.md#constructor)*

*Defined in [event/TouchEvent.ts:21](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/TouchEvent.ts#L21)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |

**Returns:** [TouchEvent](_event_touchevent_.touchevent.md)

___

## Properties

<a id="cancelbubble"></a>

###  cancelBubble

**● cancelBubble**: *`boolean`*

*Defined in [event/TouchEvent.ts:21](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/TouchEvent.ts#L21)*

___
<a id="currenttarget"></a>

###  currentTarget

**● currentTarget**: *[Layer](_display_layer_.layer.md)*

*Defined in [event/TouchEvent.ts:13](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/TouchEvent.ts#L13)*

___
<a id="identifier"></a>

###  identifier

**● identifier**: *`number`*

*Defined in [event/TouchEvent.ts:20](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/TouchEvent.ts#L20)*

___
<a id="localx"></a>

###  localX

**● localX**: *`number`*

*Defined in [event/TouchEvent.ts:16](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/TouchEvent.ts#L16)*

___
<a id="localy"></a>

###  localY

**● localY**: *`number`*

*Defined in [event/TouchEvent.ts:17](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/TouchEvent.ts#L17)*

___
<a id="stagex"></a>

###  stageX

**● stageX**: *`number`*

*Defined in [event/TouchEvent.ts:18](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/TouchEvent.ts#L18)*

___
<a id="stagey"></a>

###  stageY

**● stageY**: *`number`*

*Defined in [event/TouchEvent.ts:19](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/TouchEvent.ts#L19)*

___
<a id="target"></a>

###  target

**● target**: *[Layer](_display_layer_.layer.md)*

*Defined in [event/TouchEvent.ts:12](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/TouchEvent.ts#L12)*

___
<a id="targetx"></a>

###  targetX

**● targetX**: *`number`*

*Defined in [event/TouchEvent.ts:14](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/TouchEvent.ts#L14)*

___
<a id="targety"></a>

###  targetY

**● targetY**: *`number`*

*Defined in [event/TouchEvent.ts:15](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/TouchEvent.ts#L15)*

___
<a id="type"></a>

###  type

**● type**: *`string`* =  null

*Inherited from [Event](_event_event_.event.md).[type](_event_event_.event.md#type)*

*Defined in [event/Event.ts:18](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/Event.ts#L18)*

___
<a id="_pool"></a>

### `<Static>``<Private>` $pool

**● $pool**: *`Array`<[TouchEvent](_event_touchevent_.touchevent.md)>* =  []

*Defined in [event/TouchEvent.ts:49](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/TouchEvent.ts#L49)*

___
<a id="added"></a>

### `<Static>` ADDED

**● ADDED**: *`string`* = "added"

*Inherited from [Event](_event_event_.event.md).[ADDED](_event_event_.event.md#added)*

*Defined in [event/Event.ts:3](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/Event.ts#L3)*

___
<a id="added_to_stage"></a>

### `<Static>` ADDED_TO_STAGE

**● ADDED_TO_STAGE**: *`string`* = "addToStage"

*Inherited from [Event](_event_event_.event.md).[ADDED_TO_STAGE](_event_event_.event.md#added_to_stage)*

*Defined in [event/Event.ts:5](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/Event.ts#L5)*

___
<a id="complete"></a>

### `<Static>` COMPLETE

**● COMPLETE**: *`string`* = "complete"

*Inherited from [Event](_event_event_.event.md).[COMPLETE](_event_event_.event.md#complete)*

*Defined in [event/Event.ts:15](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/Event.ts#L15)*

___
<a id="enter_frame"></a>

### `<Static>` ENTER_FRAME

**● ENTER_FRAME**: *`string`* = "enterFrame"

*Inherited from [Event](_event_event_.event.md).[ENTER_FRAME](_event_event_.event.md#enter_frame)*

*Defined in [event/Event.ts:7](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/Event.ts#L7)*

___
<a id="error"></a>

### `<Static>` ERROR

**● ERROR**: *`string`* = "error"

*Inherited from [Event](_event_event_.event.md).[ERROR](_event_event_.event.md#error)*

*Defined in [event/Event.ts:13](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/Event.ts#L13)*

___
<a id="load"></a>

### `<Static>` LOAD

**● LOAD**: *`string`* = "load"

*Inherited from [Event](_event_event_.event.md).[LOAD](_event_event_.event.md#load)*

*Defined in [event/Event.ts:12](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/Event.ts#L12)*

___
<a id="progress"></a>

### `<Static>` PROGRESS

**● PROGRESS**: *`string`* = "progress"

*Inherited from [Event](_event_event_.event.md).[PROGRESS](_event_event_.event.md#progress)*

*Defined in [event/Event.ts:14](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/Event.ts#L14)*

___
<a id="removed"></a>

### `<Static>` REMOVED

**● REMOVED**: *`string`* = "removed"

*Inherited from [Event](_event_event_.event.md).[REMOVED](_event_event_.event.md#removed)*

*Defined in [event/Event.ts:4](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/Event.ts#L4)*

___
<a id="removed_from_stage"></a>

### `<Static>` REMOVED_FROM_STAGE

**● REMOVED_FROM_STAGE**: *`string`* = "removeFromStage"

*Inherited from [Event](_event_event_.event.md).[REMOVED_FROM_STAGE](_event_event_.event.md#removed_from_stage)*

*Defined in [event/Event.ts:6](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/Event.ts#L6)*

___
<a id="sound_complete"></a>

### `<Static>` SOUND_COMPLETE

**● SOUND_COMPLETE**: *`string`* = "soundComplete"

*Inherited from [Event](_event_event_.event.md).[SOUND_COMPLETE](_event_event_.event.md#sound_complete)*

*Defined in [event/Event.ts:16](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/Event.ts#L16)*

___
<a id="tick"></a>

### `<Static>` TICK

**● TICK**: *`string`* = "tick"

*Inherited from [Event](_event_event_.event.md).[TICK](_event_event_.event.md#tick)*

*Defined in [event/Event.ts:8](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/Event.ts#L8)*

___
<a id="ticker_pause"></a>

### `<Static>` TICKER_PAUSE

**● TICKER_PAUSE**: *`string`* = "tickerPause"

*Inherited from [Event](_event_event_.event.md).[TICKER_PAUSE](_event_event_.event.md#ticker_pause)*

*Defined in [event/Event.ts:9](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/Event.ts#L9)*

___
<a id="ticker_resume"></a>

### `<Static>` TICKER_RESUME

**● TICKER_RESUME**: *`string`* = "tickerResume"

*Inherited from [Event](_event_event_.event.md).[TICKER_RESUME](_event_event_.event.md#ticker_resume)*

*Defined in [event/Event.ts:10](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/Event.ts#L10)*

___
<a id="touch_cancel"></a>

### `<Static>` TOUCH_CANCEL

**● TOUCH_CANCEL**: *`string`* = "touchCancel"

*Defined in [event/TouchEvent.ts:9](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/TouchEvent.ts#L9)*

___
<a id="touch_end"></a>

### `<Static>` TOUCH_END

**● TOUCH_END**: *`string`* = "touchEnd"

*Defined in [event/TouchEvent.ts:8](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/TouchEvent.ts#L8)*

___
<a id="touch_move"></a>

### `<Static>` TOUCH_MOVE

**● TOUCH_MOVE**: *`string`* = "touchMove"

*Defined in [event/TouchEvent.ts:7](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/TouchEvent.ts#L7)*

___
<a id="touch_start"></a>

### `<Static>` TOUCH_START

**● TOUCH_START**: *`string`* = "touchStart"

*Defined in [event/TouchEvent.ts:6](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/TouchEvent.ts#L6)*

___
<a id="touch_tap"></a>

### `<Static>` TOUCH_TAP

**● TOUCH_TAP**: *`string`* = "touchTap"

*Defined in [event/TouchEvent.ts:10](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/TouchEvent.ts#L10)*

___
<a id="viewport_resize"></a>

### `<Static>` VIEWPORT_RESIZE

**● VIEWPORT_RESIZE**: *`string`* = "viewportResize"

*Inherited from [Event](_event_event_.event.md).[VIEWPORT_RESIZE](_event_event_.event.md#viewport_resize)*

*Defined in [event/Event.ts:11](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/Event.ts#L11)*

___

## Methods

<a id="_init"></a>

### `<Protected>` $init

▸ **$init**(type: *`string`*): `this`

*Defined in [event/TouchEvent.ts:28](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/TouchEvent.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |

**Returns:** `this`

___
<a id="release"></a>

###  release

▸ **release**(): `void`

*Defined in [event/TouchEvent.ts:45](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/TouchEvent.ts#L45)*

**Returns:** `void`

___
<a id="stoppropagation"></a>

###  stopPropagation

▸ **stopPropagation**(): `void`

*Defined in [event/TouchEvent.ts:41](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/TouchEvent.ts#L41)*

**Returns:** `void`

___
<a id="create"></a>

### `<Static>` create

▸ **create**(type: *`string`*): [TouchEvent](_event_touchevent_.touchevent.md)

*Defined in [event/TouchEvent.ts:51](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/TouchEvent.ts#L51)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |

**Returns:** [TouchEvent](_event_touchevent_.touchevent.md)

___
<a id="recycle"></a>

### `<Static>` recycle

▸ **recycle**(e: *[TouchEvent](_event_touchevent_.touchevent.md)*): `void`

*Defined in [event/TouchEvent.ts:60](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/TouchEvent.ts#L60)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [TouchEvent](_event_touchevent_.touchevent.md) |

**Returns:** `void`

___

