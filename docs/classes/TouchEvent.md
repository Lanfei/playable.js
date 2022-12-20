[API Reference](../README.md) / TouchEvent

# Class: TouchEvent

## Hierarchy

- [`Event`](../README.md#event)

  ↳ **`TouchEvent`**

## Table of contents

### Constructors

- [constructor](TouchEvent.md#constructor)

### Properties

- [cancelBubble](TouchEvent.md#cancelbubble)
- [currentTarget](TouchEvent.md#currenttarget)
- [data](TouchEvent.md#data)
- [identifier](TouchEvent.md#identifier)
- [localX](TouchEvent.md#localx)
- [localY](TouchEvent.md#localy)
- [stageX](TouchEvent.md#stagex)
- [stageY](TouchEvent.md#stagey)
- [target](TouchEvent.md#target)
- [targetX](TouchEvent.md#targetx)
- [targetY](TouchEvent.md#targety)
- [type](TouchEvent.md#type)
- [$pool](TouchEvent.md#$pool)

### Events

- [ABORT](TouchEvent.md#abort)
- [ACTIVATE](TouchEvent.md#activate)
- [ADDED](TouchEvent.md#added)
- [ADDED\_TO\_STAGE](TouchEvent.md#added_to_stage)
- [COMPLETE](TouchEvent.md#complete)
- [DEACTIVATE](TouchEvent.md#deactivate)
- [ENDED](TouchEvent.md#ended)
- [ENTER\_FRAME](TouchEvent.md#enter_frame)
- [ERROR](TouchEvent.md#error)
- [LOAD](TouchEvent.md#load)
- [PROGRESS](TouchEvent.md#progress)
- [REMOVED](TouchEvent.md#removed)
- [REMOVED\_FROM\_STAGE](TouchEvent.md#removed_from_stage)
- [SOUND\_COMPLETE](TouchEvent.md#sound_complete)
- [TICK](TouchEvent.md#tick)
- [TICKER\_PAUSE](TouchEvent.md#ticker_pause)
- [TICKER\_RESUME](TouchEvent.md#ticker_resume)
- [TOUCH\_CANCEL](TouchEvent.md#touch_cancel)
- [TOUCH\_END](TouchEvent.md#touch_end)
- [TOUCH\_MOVE](TouchEvent.md#touch_move)
- [TOUCH\_START](TouchEvent.md#touch_start)
- [TOUCH\_TAP](TouchEvent.md#touch_tap)
- [VIEWPORT\_RESIZE](TouchEvent.md#viewport_resize)

### Methods

- [$init](TouchEvent.md#$init)
- [release](TouchEvent.md#release)
- [stopPropagation](TouchEvent.md#stoppropagation)
- [create](TouchEvent.md#create)
- [recycle](TouchEvent.md#recycle)

## Constructors

### constructor

• `Protected` **new TouchEvent**(`type`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Overrides

[Event](../README.md#event).[constructor](../README.md#constructor)

#### Defined in

[event/TouchEvent.ts:28](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/TouchEvent.ts#L28)

## Properties

### cancelBubble

• **cancelBubble**: `boolean`

#### Defined in

[event/TouchEvent.ts:26](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/TouchEvent.ts#L26)

___

### currentTarget

• **currentTarget**: [`Layer`](../README.md#layer)

#### Overrides

[Event](../README.md#event).[currentTarget](../README.md#currenttarget)

#### Defined in

[event/TouchEvent.ts:18](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/TouchEvent.ts#L18)

___

### data

• **data**: `any` = `null`

#### Inherited from

[Event](../README.md#event).[data](../README.md#data)

#### Defined in

[event/Event.ts:43](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L43)

___

### identifier

• **identifier**: `number`

#### Defined in

[event/TouchEvent.ts:25](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/TouchEvent.ts#L25)

___

### localX

• **localX**: `number`

#### Defined in

[event/TouchEvent.ts:21](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/TouchEvent.ts#L21)

___

### localY

• **localY**: `number`

#### Defined in

[event/TouchEvent.ts:22](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/TouchEvent.ts#L22)

___

### stageX

• **stageX**: `number`

#### Defined in

[event/TouchEvent.ts:23](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/TouchEvent.ts#L23)

___

### stageY

• **stageY**: `number`

#### Defined in

[event/TouchEvent.ts:24](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/TouchEvent.ts#L24)

___

### target

• **target**: [`Layer`](../README.md#layer)

#### Overrides

[Event](../README.md#event).[target](../README.md#target)

#### Defined in

[event/TouchEvent.ts:17](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/TouchEvent.ts#L17)

___

### targetX

• **targetX**: `number`

#### Defined in

[event/TouchEvent.ts:19](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/TouchEvent.ts#L19)

___

### targetY

• **targetY**: `number`

#### Defined in

[event/TouchEvent.ts:20](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/TouchEvent.ts#L20)

___

### type

• **type**: `string` = `null`

#### Inherited from

[Event](../README.md#event).[type](../README.md#type)

#### Defined in

[event/Event.ts:42](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L42)

___

### $pool

▪ `Static` `Protected` `Readonly` **$pool**: [`TouchEvent`](../README.md#touchevent)[] = `[]`

#### Overrides

[Event](../README.md#event).[$pool](../README.md#$pool)

#### Defined in

[event/TouchEvent.ts:56](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/TouchEvent.ts#L56)

## Events

### ABORT

▪ `Static` `Readonly` **ABORT**: `string` = `'abort'`

abort

#### Inherited from

[Event](../README.md#event).[ABORT](../README.md#abort)

#### Defined in

[event/Event.ts:30](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L30)

___

### ACTIVATE

▪ `Static` `Readonly` **ACTIVATE**: `string` = `'activate'`

activate

#### Inherited from

[Event](../README.md#event).[ACTIVATE](../README.md#activate)

#### Defined in

[event/Event.ts:14](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L14)

___

### ADDED

▪ `Static` `Readonly` **ADDED**: `string` = `'added'`

added

#### Inherited from

[Event](../README.md#event).[ADDED](../README.md#added)

#### Defined in

[event/Event.ts:6](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L6)

___

### ADDED\_TO\_STAGE

▪ `Static` `Readonly` **ADDED\_TO\_STAGE**: `string` = `'addedToStage'`

addedToStage

#### Inherited from

[Event](../README.md#event).[ADDED_TO_STAGE](../README.md#added_to_stage)

#### Defined in

[event/Event.ts:10](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L10)

___

### COMPLETE

▪ `Static` `Readonly` **COMPLETE**: `string` = `'complete'`

complete

#### Inherited from

[Event](../README.md#event).[COMPLETE](../README.md#complete)

#### Defined in

[event/Event.ts:36](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L36)

___

### DEACTIVATE

▪ `Static` `Readonly` **DEACTIVATE**: `string` = `'deactivate'`

deactivate

#### Inherited from

[Event](../README.md#event).[DEACTIVATE](../README.md#deactivate)

#### Defined in

[event/Event.ts:16](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L16)

___

### ENDED

▪ `Static` `Readonly` **ENDED**: `string` = `'ended'`

ended

#### Inherited from

[Event](../README.md#event).[ENDED](../README.md#ended)

#### Defined in

[event/Event.ts:38](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L38)

___

### ENTER\_FRAME

▪ `Static` `Readonly` **ENTER\_FRAME**: `string` = `'enterFrame'`

enterFrame

#### Inherited from

[Event](../README.md#event).[ENTER_FRAME](../README.md#enter_frame)

#### Defined in

[event/Event.ts:18](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L18)

___

### ERROR

▪ `Static` `Readonly` **ERROR**: `string` = `'error'`

error

#### Inherited from

[Event](../README.md#event).[ERROR](../README.md#error)

#### Defined in

[event/Event.ts:32](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L32)

___

### LOAD

▪ `Static` `Readonly` **LOAD**: `string` = `'load'`

load

#### Inherited from

[Event](../README.md#event).[LOAD](../README.md#load)

#### Defined in

[event/Event.ts:28](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L28)

___

### PROGRESS

▪ `Static` `Readonly` **PROGRESS**: `string` = `'progress'`

progress

#### Inherited from

[Event](../README.md#event).[PROGRESS](../README.md#progress)

#### Defined in

[event/Event.ts:34](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L34)

___

### REMOVED

▪ `Static` `Readonly` **REMOVED**: `string` = `'removed'`

removed

#### Inherited from

[Event](../README.md#event).[REMOVED](../README.md#removed)

#### Defined in

[event/Event.ts:8](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L8)

___

### REMOVED\_FROM\_STAGE

▪ `Static` `Readonly` **REMOVED\_FROM\_STAGE**: `string` = `'removeFromStage'`

removeFromStage

#### Inherited from

[Event](../README.md#event).[REMOVED_FROM_STAGE](../README.md#removed_from_stage)

#### Defined in

[event/Event.ts:12](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L12)

___

### SOUND\_COMPLETE

▪ `Static` `Readonly` **SOUND\_COMPLETE**: `string` = `'soundComplete'`

soundComplete

#### Inherited from

[Event](../README.md#event).[SOUND_COMPLETE](../README.md#sound_complete)

#### Defined in

[event/Event.ts:40](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L40)

___

### TICK

▪ `Static` `Readonly` **TICK**: `string` = `'tick'`

tick

#### Inherited from

[Event](../README.md#event).[TICK](../README.md#tick)

#### Defined in

[event/Event.ts:20](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L20)

___

### TICKER\_PAUSE

▪ `Static` `Readonly` **TICKER\_PAUSE**: `string` = `'tickerPause'`

tickerPause

#### Inherited from

[Event](../README.md#event).[TICKER_PAUSE](../README.md#ticker_pause)

#### Defined in

[event/Event.ts:22](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L22)

___

### TICKER\_RESUME

▪ `Static` `Readonly` **TICKER\_RESUME**: `string` = `'tickerResume'`

tickerResume

#### Inherited from

[Event](../README.md#event).[TICKER_RESUME](../README.md#ticker_resume)

#### Defined in

[event/Event.ts:24](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L24)

___

### TOUCH\_CANCEL

▪ `Static` `Readonly` **TOUCH\_CANCEL**: `string` = `'touchCancel'`

touchCancel

#### Defined in

[event/TouchEvent.ts:13](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/TouchEvent.ts#L13)

___

### TOUCH\_END

▪ `Static` `Readonly` **TOUCH\_END**: `string` = `'touchEnd'`

touchEnd

#### Defined in

[event/TouchEvent.ts:11](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/TouchEvent.ts#L11)

___

### TOUCH\_MOVE

▪ `Static` `Readonly` **TOUCH\_MOVE**: `string` = `'touchMove'`

touchMove

#### Defined in

[event/TouchEvent.ts:9](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/TouchEvent.ts#L9)

___

### TOUCH\_START

▪ `Static` `Readonly` **TOUCH\_START**: `string` = `'touchStart'`

touchStart

#### Defined in

[event/TouchEvent.ts:7](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/TouchEvent.ts#L7)

___

### TOUCH\_TAP

▪ `Static` `Readonly` **TOUCH\_TAP**: `string` = `'touchTap'`

touchTap

#### Defined in

[event/TouchEvent.ts:15](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/TouchEvent.ts#L15)

___

### VIEWPORT\_RESIZE

▪ `Static` `Readonly` **VIEWPORT\_RESIZE**: `string` = `'viewportResize'`

viewportResize

#### Inherited from

[Event](../README.md#event).[VIEWPORT_RESIZE](../README.md#viewport_resize)

#### Defined in

[event/Event.ts:26](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L26)

## Methods

### $init

▸ `Protected` **$init**(`type`): [`TouchEvent`](../README.md#touchevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

[`TouchEvent`](../README.md#touchevent)

#### Overrides

[Event](../README.md#event).[$init](../README.md#$init)

#### Defined in

[event/TouchEvent.ts:33](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/TouchEvent.ts#L33)

___

### release

▸ **release**(): `void`

#### Returns

`void`

#### Overrides

[Event](../README.md#event).[release](../README.md#release)

#### Defined in

[event/TouchEvent.ts:52](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/TouchEvent.ts#L52)

___

### stopPropagation

▸ **stopPropagation**(): `void`

#### Returns

`void`

#### Defined in

[event/TouchEvent.ts:48](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/TouchEvent.ts#L48)

___

### create

▸ `Static` **create**(`type`): [`TouchEvent`](../README.md#touchevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

[`TouchEvent`](../README.md#touchevent)

#### Overrides

[Event](../README.md#event).[create](../README.md#create)

#### Defined in

[event/TouchEvent.ts:58](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/TouchEvent.ts#L58)

___

### recycle

▸ `Static` **recycle**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`TouchEvent`](../README.md#touchevent) |

#### Returns

`void`

#### Overrides

[Event](../README.md#event).[recycle](../README.md#recycle)

#### Defined in

[event/TouchEvent.ts:67](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/TouchEvent.ts#L67)
