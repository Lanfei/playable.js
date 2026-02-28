[**API Reference**](../README.md)

***

[API Reference](../README.md) / TouchEvent

# Class: TouchEvent

Defined in: [event/TouchEvent.ts:4](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/TouchEvent.ts#L4)

## Extends

- [`Event`](../variables/default.md#event)

## Constructors

### Constructor

> `protected` **new TouchEvent**(`type`): [`TouchEvent`](../variables/default.md#touchevent)

Defined in: [event/TouchEvent.ts:28](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/TouchEvent.ts#L28)

#### Parameters

##### type

`string`

#### Returns

[`TouchEvent`](../variables/default.md#touchevent)

#### Overrides

[`Event`](../variables/default.md#event).[`constructor`](../variables/default.md#eventconstructor)

## Properties

### cancelBubble

> **cancelBubble**: `boolean`

Defined in: [event/TouchEvent.ts:26](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/TouchEvent.ts#L26)

***

### currentTarget

> **currentTarget**: [`Layer`](../variables/default.md#layer)

Defined in: [event/TouchEvent.ts:18](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/TouchEvent.ts#L18)

#### Overrides

[`Event`](../variables/default.md#event).[`currentTarget`](../variables/default.md#eventcurrenttarget)

***

### data

> **data**: `any` = `null`

Defined in: [event/Event.ts:43](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L43)

#### Inherited from

[`Event`](../variables/default.md#event).[`data`](../variables/default.md#eventdata)

***

### identifier

> **identifier**: `number`

Defined in: [event/TouchEvent.ts:25](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/TouchEvent.ts#L25)

***

### localX

> **localX**: `number`

Defined in: [event/TouchEvent.ts:21](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/TouchEvent.ts#L21)

***

### localY

> **localY**: `number`

Defined in: [event/TouchEvent.ts:22](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/TouchEvent.ts#L22)

***

### stageX

> **stageX**: `number`

Defined in: [event/TouchEvent.ts:23](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/TouchEvent.ts#L23)

***

### stageY

> **stageY**: `number`

Defined in: [event/TouchEvent.ts:24](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/TouchEvent.ts#L24)

***

### target

> **target**: [`Layer`](../variables/default.md#layer)

Defined in: [event/TouchEvent.ts:17](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/TouchEvent.ts#L17)

#### Overrides

[`Event`](../variables/default.md#event).[`target`](../variables/default.md#eventtarget)

***

### targetX

> **targetX**: `number`

Defined in: [event/TouchEvent.ts:19](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/TouchEvent.ts#L19)

***

### targetY

> **targetY**: `number`

Defined in: [event/TouchEvent.ts:20](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/TouchEvent.ts#L20)

***

### type

> **type**: `string` = `null`

Defined in: [event/Event.ts:42](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L42)

#### Inherited from

[`Event`](../variables/default.md#event).[`type`](../variables/default.md#eventtype)

***

### $pool

> `protected` `readonly` `static` **$pool**: [`TouchEvent`](../variables/default.md#touchevent)[] = `[]`

Defined in: [event/TouchEvent.ts:56](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/TouchEvent.ts#L56)

#### Overrides

[`Event`](../variables/default.md#event).[`$pool`](../variables/default.md#eventpool)

## Methods

### $init()

> `protected` **$init**(`type`): `this`

Defined in: [event/TouchEvent.ts:33](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/TouchEvent.ts#L33)

#### Parameters

##### type

`string`

#### Returns

`this`

#### Overrides

[`Event`](../variables/default.md#event).[`$init`](../variables/default.md#eventinit)

***

### release()

> **release**(): `void`

Defined in: [event/TouchEvent.ts:52](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/TouchEvent.ts#L52)

#### Returns

`void`

#### Overrides

[`Event`](../variables/default.md#event).[`release`](../variables/default.md#eventrelease)

***

### stopPropagation()

> **stopPropagation**(): `void`

Defined in: [event/TouchEvent.ts:48](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/TouchEvent.ts#L48)

#### Returns

`void`

***

### create()

> `static` **create**(`type`): [`TouchEvent`](../variables/default.md#touchevent)

Defined in: [event/TouchEvent.ts:58](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/TouchEvent.ts#L58)

#### Parameters

##### type

`string`

#### Returns

[`TouchEvent`](../variables/default.md#touchevent)

#### Overrides

[`Event`](../variables/default.md#event).[`create`](../variables/default.md#eventcreate)

***

### recycle()

> `static` **recycle**(`e`): `void`

Defined in: [event/TouchEvent.ts:67](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/TouchEvent.ts#L67)

#### Parameters

##### e

[`TouchEvent`](../variables/default.md#touchevent)

#### Returns

`void`

#### Overrides

[`Event`](../variables/default.md#event).[`recycle`](../variables/default.md#eventrecycle)

## Events

### ABORT

> `readonly` `static` **ABORT**: `string` = `'abort'`

Defined in: [event/Event.ts:30](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L30)

abort

#### Inherited from

[`Event`](../variables/default.md#event).[`ABORT`](../variables/default.md#eventabort)

***

### ACTIVATE

> `readonly` `static` **ACTIVATE**: `string` = `'activate'`

Defined in: [event/Event.ts:14](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L14)

activate

#### Inherited from

[`Event`](../variables/default.md#event).[`ACTIVATE`](../variables/default.md#eventactivate)

***

### ADDED

> `readonly` `static` **ADDED**: `string` = `'added'`

Defined in: [event/Event.ts:6](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L6)

added

#### Inherited from

[`Event`](../variables/default.md#event).[`ADDED`](../variables/default.md#eventadded)

***

### ADDED\_TO\_STAGE

> `readonly` `static` **ADDED\_TO\_STAGE**: `string` = `'addedToStage'`

Defined in: [event/Event.ts:10](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L10)

addedToStage

#### Inherited from

[`Event`](../variables/default.md#event).[`ADDED_TO_STAGE`](../variables/default.md#eventadded_to_stage)

***

### COMPLETE

> `readonly` `static` **COMPLETE**: `string` = `'complete'`

Defined in: [event/Event.ts:36](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L36)

complete

#### Inherited from

[`Event`](../variables/default.md#event).[`COMPLETE`](../variables/default.md#eventcomplete)

***

### DEACTIVATE

> `readonly` `static` **DEACTIVATE**: `string` = `'deactivate'`

Defined in: [event/Event.ts:16](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L16)

deactivate

#### Inherited from

[`Event`](../variables/default.md#event).[`DEACTIVATE`](../variables/default.md#eventdeactivate)

***

### ENDED

> `readonly` `static` **ENDED**: `string` = `'ended'`

Defined in: [event/Event.ts:38](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L38)

ended

#### Inherited from

[`Event`](../variables/default.md#event).[`ENDED`](../variables/default.md#eventended)

***

### ENTER\_FRAME

> `readonly` `static` **ENTER\_FRAME**: `string` = `'enterFrame'`

Defined in: [event/Event.ts:18](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L18)

enterFrame

#### Inherited from

[`Event`](../variables/default.md#event).[`ENTER_FRAME`](../variables/default.md#evententer_frame)

***

### ERROR

> `readonly` `static` **ERROR**: `string` = `'error'`

Defined in: [event/Event.ts:32](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L32)

error

#### Inherited from

[`Event`](../variables/default.md#event).[`ERROR`](../variables/default.md#eventerror)

***

### LOAD

> `readonly` `static` **LOAD**: `string` = `'load'`

Defined in: [event/Event.ts:28](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L28)

load

#### Inherited from

[`Event`](../variables/default.md#event).[`LOAD`](../variables/default.md#eventload)

***

### PROGRESS

> `readonly` `static` **PROGRESS**: `string` = `'progress'`

Defined in: [event/Event.ts:34](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L34)

progress

#### Inherited from

[`Event`](../variables/default.md#event).[`PROGRESS`](../variables/default.md#eventprogress)

***

### REMOVED

> `readonly` `static` **REMOVED**: `string` = `'removed'`

Defined in: [event/Event.ts:8](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L8)

removed

#### Inherited from

[`Event`](../variables/default.md#event).[`REMOVED`](../variables/default.md#eventremoved)

***

### REMOVED\_FROM\_STAGE

> `readonly` `static` **REMOVED\_FROM\_STAGE**: `string` = `'removeFromStage'`

Defined in: [event/Event.ts:12](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L12)

removeFromStage

#### Inherited from

[`Event`](../variables/default.md#event).[`REMOVED_FROM_STAGE`](../variables/default.md#eventremoved_from_stage)

***

### SOUND\_COMPLETE

> `readonly` `static` **SOUND\_COMPLETE**: `string` = `'soundComplete'`

Defined in: [event/Event.ts:40](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L40)

soundComplete

#### Inherited from

[`Event`](../variables/default.md#event).[`SOUND_COMPLETE`](../variables/default.md#eventsound_complete)

***

### TICK

> `readonly` `static` **TICK**: `string` = `'tick'`

Defined in: [event/Event.ts:20](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L20)

tick

#### Inherited from

[`Event`](../variables/default.md#event).[`TICK`](../variables/default.md#eventtick)

***

### TICKER\_PAUSE

> `readonly` `static` **TICKER\_PAUSE**: `string` = `'tickerPause'`

Defined in: [event/Event.ts:22](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L22)

tickerPause

#### Inherited from

[`Event`](../variables/default.md#event).[`TICKER_PAUSE`](../variables/default.md#eventticker_pause)

***

### TICKER\_RESUME

> `readonly` `static` **TICKER\_RESUME**: `string` = `'tickerResume'`

Defined in: [event/Event.ts:24](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L24)

tickerResume

#### Inherited from

[`Event`](../variables/default.md#event).[`TICKER_RESUME`](../variables/default.md#eventticker_resume)

***

### TOUCH\_CANCEL

> `readonly` `static` **TOUCH\_CANCEL**: `string` = `'touchCancel'`

Defined in: [event/TouchEvent.ts:13](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/TouchEvent.ts#L13)

touchCancel

***

### TOUCH\_END

> `readonly` `static` **TOUCH\_END**: `string` = `'touchEnd'`

Defined in: [event/TouchEvent.ts:11](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/TouchEvent.ts#L11)

touchEnd

***

### TOUCH\_MOVE

> `readonly` `static` **TOUCH\_MOVE**: `string` = `'touchMove'`

Defined in: [event/TouchEvent.ts:9](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/TouchEvent.ts#L9)

touchMove

***

### TOUCH\_START

> `readonly` `static` **TOUCH\_START**: `string` = `'touchStart'`

Defined in: [event/TouchEvent.ts:7](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/TouchEvent.ts#L7)

touchStart

***

### TOUCH\_TAP

> `readonly` `static` **TOUCH\_TAP**: `string` = `'touchTap'`

Defined in: [event/TouchEvent.ts:15](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/TouchEvent.ts#L15)

touchTap

***

### VIEWPORT\_RESIZE

> `readonly` `static` **VIEWPORT\_RESIZE**: `string` = `'viewportResize'`

Defined in: [event/Event.ts:26](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L26)

viewportResize

#### Inherited from

[`Event`](../variables/default.md#event).[`VIEWPORT_RESIZE`](../variables/default.md#eventviewport_resize)
