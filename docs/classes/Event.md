[**API Reference**](../README.md)

***

[API Reference](../README.md) / Event

# Class: Event

Defined in: [event/Event.ts:3](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L3)

## Constructors

### Constructor

> `protected` **new Event**(`type`, `data?`): [`Event`](../variables/default.md#event)

Defined in: [event/Event.ts:47](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L47)

#### Parameters

##### type

`string`

##### data?

`any` = `null`

#### Returns

[`Event`](../variables/default.md#event)

## Properties

### currentTarget

> **currentTarget**: [`EventEmitter`](../variables/default.md#eventemitter) = `null`

Defined in: [event/Event.ts:45](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L45)

***

### data

> **data**: `any` = `null`

Defined in: [event/Event.ts:43](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L43)

***

### target

> **target**: [`EventEmitter`](../variables/default.md#eventemitter) = `null`

Defined in: [event/Event.ts:44](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L44)

***

### type

> **type**: `string` = `null`

Defined in: [event/Event.ts:42](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L42)

***

### $pool

> `protected` `readonly` `static` **$pool**: [`Event`](../variables/default.md#event)[] = `[]`

Defined in: [event/Event.ts:63](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L63)

## Methods

### $init()

> `protected` **$init**(`type`, `data?`): `this`

Defined in: [event/Event.ts:51](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L51)

#### Parameters

##### type

`string`

##### data?

`any` = `null`

#### Returns

`this`

***

### release()

> **release**(): `void`

Defined in: [event/Event.ts:57](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L57)

#### Returns

`void`

***

### create()

> `static` **create**(`type`, `data?`): [`Event`](../variables/default.md#event)

Defined in: [event/Event.ts:65](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L65)

#### Parameters

##### type

`string`

##### data?

`any` = `null`

#### Returns

[`Event`](../variables/default.md#event)

***

### recycle()

> `static` **recycle**(`e`): `void`

Defined in: [event/Event.ts:74](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L74)

#### Parameters

##### e

[`Event`](../variables/default.md#event)

#### Returns

`void`

## Events

### ABORT

> `readonly` `static` **ABORT**: `string` = `'abort'`

Defined in: [event/Event.ts:30](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L30)

abort

***

### ACTIVATE

> `readonly` `static` **ACTIVATE**: `string` = `'activate'`

Defined in: [event/Event.ts:14](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L14)

activate

***

### ADDED

> `readonly` `static` **ADDED**: `string` = `'added'`

Defined in: [event/Event.ts:6](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L6)

added

***

### ADDED\_TO\_STAGE

> `readonly` `static` **ADDED\_TO\_STAGE**: `string` = `'addedToStage'`

Defined in: [event/Event.ts:10](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L10)

addedToStage

***

### COMPLETE

> `readonly` `static` **COMPLETE**: `string` = `'complete'`

Defined in: [event/Event.ts:36](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L36)

complete

***

### DEACTIVATE

> `readonly` `static` **DEACTIVATE**: `string` = `'deactivate'`

Defined in: [event/Event.ts:16](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L16)

deactivate

***

### ENDED

> `readonly` `static` **ENDED**: `string` = `'ended'`

Defined in: [event/Event.ts:38](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L38)

ended

***

### ENTER\_FRAME

> `readonly` `static` **ENTER\_FRAME**: `string` = `'enterFrame'`

Defined in: [event/Event.ts:18](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L18)

enterFrame

***

### ERROR

> `readonly` `static` **ERROR**: `string` = `'error'`

Defined in: [event/Event.ts:32](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L32)

error

***

### LOAD

> `readonly` `static` **LOAD**: `string` = `'load'`

Defined in: [event/Event.ts:28](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L28)

load

***

### PROGRESS

> `readonly` `static` **PROGRESS**: `string` = `'progress'`

Defined in: [event/Event.ts:34](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L34)

progress

***

### REMOVED

> `readonly` `static` **REMOVED**: `string` = `'removed'`

Defined in: [event/Event.ts:8](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L8)

removed

***

### REMOVED\_FROM\_STAGE

> `readonly` `static` **REMOVED\_FROM\_STAGE**: `string` = `'removeFromStage'`

Defined in: [event/Event.ts:12](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L12)

removeFromStage

***

### SOUND\_COMPLETE

> `readonly` `static` **SOUND\_COMPLETE**: `string` = `'soundComplete'`

Defined in: [event/Event.ts:40](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L40)

soundComplete

***

### TICK

> `readonly` `static` **TICK**: `string` = `'tick'`

Defined in: [event/Event.ts:20](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L20)

tick

***

### TICKER\_PAUSE

> `readonly` `static` **TICKER\_PAUSE**: `string` = `'tickerPause'`

Defined in: [event/Event.ts:22](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L22)

tickerPause

***

### TICKER\_RESUME

> `readonly` `static` **TICKER\_RESUME**: `string` = `'tickerResume'`

Defined in: [event/Event.ts:24](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L24)

tickerResume

***

### VIEWPORT\_RESIZE

> `readonly` `static` **VIEWPORT\_RESIZE**: `string` = `'viewportResize'`

Defined in: [event/Event.ts:26](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/Event.ts#L26)

viewportResize
