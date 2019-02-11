[API Reference](../README.md) > [TouchEvent](../classes/touchevent.md)

# Class: TouchEvent

## Hierarchy

 [Event](event.md)

**↳ TouchEvent**

## Index

### Constructors

* [constructor](touchevent.md#constructor)

### Events

* [ABORT](touchevent.md#abort)
* [ACTIVATE](touchevent.md#activate)
* [ADDED](touchevent.md#added)
* [ADDED_TO_STAGE](touchevent.md#added_to_stage)
* [COMPLETE](touchevent.md#complete)
* [DEACTIVATE](touchevent.md#deactivate)
* [ENTER_FRAME](touchevent.md#enter_frame)
* [ERROR](touchevent.md#error)
* [LOAD](touchevent.md#load)
* [PROGRESS](touchevent.md#progress)
* [REMOVED](touchevent.md#removed)
* [REMOVED_FROM_STAGE](touchevent.md#removed_from_stage)
* [SOUND_COMPLETE](touchevent.md#sound_complete)
* [TICK](touchevent.md#tick)
* [TICKER_PAUSE](touchevent.md#ticker_pause)
* [TICKER_RESUME](touchevent.md#ticker_resume)
* [TOUCH_CANCEL](touchevent.md#touch_cancel)
* [TOUCH_END](touchevent.md#touch_end)
* [TOUCH_MOVE](touchevent.md#touch_move)
* [TOUCH_START](touchevent.md#touch_start)
* [TOUCH_TAP](touchevent.md#touch_tap)
* [VIEWPORT_RESIZE](touchevent.md#viewport_resize)

### Properties

* [cancelBubble](touchevent.md#cancelbubble)
* [currentTarget](touchevent.md#currenttarget)
* [data](touchevent.md#data)
* [identifier](touchevent.md#identifier)
* [localX](touchevent.md#localx)
* [localY](touchevent.md#localy)
* [stageX](touchevent.md#stagex)
* [stageY](touchevent.md#stagey)
* [target](touchevent.md#target)
* [targetX](touchevent.md#targetx)
* [targetY](touchevent.md#targety)
* [type](touchevent.md#type)
* [$pool](touchevent.md#_pool)

### Methods

* [$init](touchevent.md#_init)
* [release](touchevent.md#release)
* [stopPropagation](touchevent.md#stoppropagation)
* [create](touchevent.md#create)
* [recycle](touchevent.md#recycle)

---

## Constructors

<a id="constructor"></a>

### `<Protected>` constructor

⊕ **new TouchEvent**(type: *`string`*): [TouchEvent](touchevent.md)

*Overrides [Event](event.md).[constructor](event.md#constructor)*

*Defined in [event/TouchEvent.ts:26](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/TouchEvent.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |

**Returns:** [TouchEvent](touchevent.md)

___

## Events

<a id="abort"></a>

### `<Static>` ABORT

**ABORT**: *`string`* = "abort"

*Inherited from [Event](event.md).[ABORT](event.md#abort)*

*Defined in [event/Event.ts:30](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/Event.ts#L30)*

___
<a id="activate"></a>

### `<Static>` ACTIVATE

**ACTIVATE**: *`string`* = "activate"

*Inherited from [Event](event.md).[ACTIVATE](event.md#activate)*

*Defined in [event/Event.ts:14](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/Event.ts#L14)*

___
<a id="added"></a>

### `<Static>` ADDED

**ADDED**: *`string`* = "added"

*Inherited from [Event](event.md).[ADDED](event.md#added)*

*Defined in [event/Event.ts:6](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/Event.ts#L6)*

___
<a id="added_to_stage"></a>

### `<Static>` ADDED_TO_STAGE

**ADDED_TO_STAGE**: *`string`* = "addedToStage"

*Inherited from [Event](event.md).[ADDED_TO_STAGE](event.md#added_to_stage)*

*Defined in [event/Event.ts:10](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/Event.ts#L10)*

___
<a id="complete"></a>

### `<Static>` COMPLETE

**COMPLETE**: *`string`* = "complete"

*Inherited from [Event](event.md).[COMPLETE](event.md#complete)*

*Defined in [event/Event.ts:36](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/Event.ts#L36)*

___
<a id="deactivate"></a>

### `<Static>` DEACTIVATE

**DEACTIVATE**: *`string`* = "deactivate"

*Inherited from [Event](event.md).[DEACTIVATE](event.md#deactivate)*

*Defined in [event/Event.ts:16](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/Event.ts#L16)*

___
<a id="enter_frame"></a>

### `<Static>` ENTER_FRAME

**ENTER_FRAME**: *`string`* = "enterFrame"

*Inherited from [Event](event.md).[ENTER_FRAME](event.md#enter_frame)*

*Defined in [event/Event.ts:18](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/Event.ts#L18)*

___
<a id="error"></a>

### `<Static>` ERROR

**ERROR**: *`string`* = "error"

*Inherited from [Event](event.md).[ERROR](event.md#error)*

*Defined in [event/Event.ts:32](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/Event.ts#L32)*

___
<a id="load"></a>

### `<Static>` LOAD

**LOAD**: *`string`* = "load"

*Inherited from [Event](event.md).[LOAD](event.md#load)*

*Defined in [event/Event.ts:28](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/Event.ts#L28)*

___
<a id="progress"></a>

### `<Static>` PROGRESS

**PROGRESS**: *`string`* = "progress"

*Inherited from [Event](event.md).[PROGRESS](event.md#progress)*

*Defined in [event/Event.ts:34](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/Event.ts#L34)*

___
<a id="removed"></a>

### `<Static>` REMOVED

**REMOVED**: *`string`* = "removed"

*Inherited from [Event](event.md).[REMOVED](event.md#removed)*

*Defined in [event/Event.ts:8](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/Event.ts#L8)*

___
<a id="removed_from_stage"></a>

### `<Static>` REMOVED_FROM_STAGE

**REMOVED_FROM_STAGE**: *`string`* = "removeFromStage"

*Inherited from [Event](event.md).[REMOVED_FROM_STAGE](event.md#removed_from_stage)*

*Defined in [event/Event.ts:12](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/Event.ts#L12)*

___
<a id="sound_complete"></a>

### `<Static>` SOUND_COMPLETE

**SOUND_COMPLETE**: *`string`* = "soundComplete"

*Inherited from [Event](event.md).[SOUND_COMPLETE](event.md#sound_complete)*

*Defined in [event/Event.ts:38](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/Event.ts#L38)*

___
<a id="tick"></a>

### `<Static>` TICK

**TICK**: *`string`* = "tick"

*Inherited from [Event](event.md).[TICK](event.md#tick)*

*Defined in [event/Event.ts:20](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/Event.ts#L20)*

___
<a id="ticker_pause"></a>

### `<Static>` TICKER_PAUSE

**TICKER_PAUSE**: *`string`* = "tickerPause"

*Inherited from [Event](event.md).[TICKER_PAUSE](event.md#ticker_pause)*

*Defined in [event/Event.ts:22](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/Event.ts#L22)*

___
<a id="ticker_resume"></a>

### `<Static>` TICKER_RESUME

**TICKER_RESUME**: *`string`* = "tickerResume"

*Inherited from [Event](event.md).[TICKER_RESUME](event.md#ticker_resume)*

*Defined in [event/Event.ts:24](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/Event.ts#L24)*

___
<a id="touch_cancel"></a>

### `<Static>` TOUCH_CANCEL

**TOUCH_CANCEL**: *`string`* = "touchCancel"

*Defined in [event/TouchEvent.ts:13](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/TouchEvent.ts#L13)*

___
<a id="touch_end"></a>

### `<Static>` TOUCH_END

**TOUCH_END**: *`string`* = "touchEnd"

*Defined in [event/TouchEvent.ts:11](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/TouchEvent.ts#L11)*

___
<a id="touch_move"></a>

### `<Static>` TOUCH_MOVE

**TOUCH_MOVE**: *`string`* = "touchMove"

*Defined in [event/TouchEvent.ts:9](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/TouchEvent.ts#L9)*

___
<a id="touch_start"></a>

### `<Static>` TOUCH_START

**TOUCH_START**: *`string`* = "touchStart"

*Defined in [event/TouchEvent.ts:7](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/TouchEvent.ts#L7)*

___
<a id="touch_tap"></a>

### `<Static>` TOUCH_TAP

**TOUCH_TAP**: *`string`* = "touchTap"

*Defined in [event/TouchEvent.ts:15](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/TouchEvent.ts#L15)*

___
<a id="viewport_resize"></a>

### `<Static>` VIEWPORT_RESIZE

**VIEWPORT_RESIZE**: *`string`* = "viewportResize"

*Inherited from [Event](event.md).[VIEWPORT_RESIZE](event.md#viewport_resize)*

*Defined in [event/Event.ts:26](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/Event.ts#L26)*

___

## Properties

<a id="cancelbubble"></a>

###  cancelBubble

**● cancelBubble**: *`boolean`*

*Defined in [event/TouchEvent.ts:26](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/TouchEvent.ts#L26)*

___
<a id="currenttarget"></a>

###  currentTarget

**● currentTarget**: *[Layer](layer.md)*

*Overrides [Event](event.md).[currentTarget](event.md#currenttarget)*

*Defined in [event/TouchEvent.ts:18](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/TouchEvent.ts#L18)*

___
<a id="data"></a>

###  data

**● data**: *`any`* =  null

*Inherited from [Event](event.md).[data](event.md#data)*

*Defined in [event/Event.ts:41](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/Event.ts#L41)*

___
<a id="identifier"></a>

###  identifier

**● identifier**: *`number`*

*Defined in [event/TouchEvent.ts:25](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/TouchEvent.ts#L25)*

___
<a id="localx"></a>

###  localX

**● localX**: *`number`*

*Defined in [event/TouchEvent.ts:21](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/TouchEvent.ts#L21)*

___
<a id="localy"></a>

###  localY

**● localY**: *`number`*

*Defined in [event/TouchEvent.ts:22](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/TouchEvent.ts#L22)*

___
<a id="stagex"></a>

###  stageX

**● stageX**: *`number`*

*Defined in [event/TouchEvent.ts:23](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/TouchEvent.ts#L23)*

___
<a id="stagey"></a>

###  stageY

**● stageY**: *`number`*

*Defined in [event/TouchEvent.ts:24](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/TouchEvent.ts#L24)*

___
<a id="target"></a>

###  target

**● target**: *[Layer](layer.md)*

*Overrides [Event](event.md).[target](event.md#target)*

*Defined in [event/TouchEvent.ts:17](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/TouchEvent.ts#L17)*

___
<a id="targetx"></a>

###  targetX

**● targetX**: *`number`*

*Defined in [event/TouchEvent.ts:19](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/TouchEvent.ts#L19)*

___
<a id="targety"></a>

###  targetY

**● targetY**: *`number`*

*Defined in [event/TouchEvent.ts:20](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/TouchEvent.ts#L20)*

___
<a id="type"></a>

###  type

**● type**: *`string`* =  null

*Inherited from [Event](event.md).[type](event.md#type)*

*Defined in [event/Event.ts:40](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/Event.ts#L40)*

___
<a id="_pool"></a>

### `<Static>``<Protected>` $pool

**● $pool**: *`Array`<[TouchEvent](touchevent.md)>* =  []

*Overrides [Event](event.md).[$pool](event.md#_pool)*

*Defined in [event/TouchEvent.ts:56](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/TouchEvent.ts#L56)*

___

## Methods

<a id="_init"></a>

### `<Protected>` $init

▸ **$init**(type: *`string`*): `this`

*Overrides [Event](event.md).[$init](event.md#_init)*

*Defined in [event/TouchEvent.ts:33](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/TouchEvent.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |

**Returns:** `this`

___
<a id="release"></a>

###  release

▸ **release**(): `void`

*Overrides [Event](event.md).[release](event.md#release)*

*Defined in [event/TouchEvent.ts:52](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/TouchEvent.ts#L52)*

**Returns:** `void`

___
<a id="stoppropagation"></a>

###  stopPropagation

▸ **stopPropagation**(): `void`

*Defined in [event/TouchEvent.ts:48](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/TouchEvent.ts#L48)*

**Returns:** `void`

___
<a id="create"></a>

### `<Static>` create

▸ **create**(type: *`string`*): [TouchEvent](touchevent.md)

*Overrides [Event](event.md).[create](event.md#create)*

*Defined in [event/TouchEvent.ts:58](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/TouchEvent.ts#L58)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |

**Returns:** [TouchEvent](touchevent.md)

___
<a id="recycle"></a>

### `<Static>` recycle

▸ **recycle**(e: *[TouchEvent](touchevent.md)*): `void`

*Overrides [Event](event.md).[recycle](event.md#recycle)*

*Defined in [event/TouchEvent.ts:67](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/TouchEvent.ts#L67)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [TouchEvent](touchevent.md) |

**Returns:** `void`

___

