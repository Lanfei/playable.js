[API Reference](../README.md) / Event

# Class: Event

## Table of contents

### Constructors

- [constructor](Event.md#constructor)

### Properties

- [currentTarget](Event.md#currenttarget)
- [data](Event.md#data)
- [target](Event.md#target)
- [type](Event.md#type)
- [$pool](Event.md#$pool)

### Events

- [ABORT](Event.md#abort)
- [ACTIVATE](Event.md#activate)
- [ADDED](Event.md#added)
- [ADDED\_TO\_STAGE](Event.md#added_to_stage)
- [COMPLETE](Event.md#complete)
- [DEACTIVATE](Event.md#deactivate)
- [ENDED](Event.md#ended)
- [ENTER\_FRAME](Event.md#enter_frame)
- [ERROR](Event.md#error)
- [LOAD](Event.md#load)
- [PROGRESS](Event.md#progress)
- [REMOVED](Event.md#removed)
- [REMOVED\_FROM\_STAGE](Event.md#removed_from_stage)
- [SOUND\_COMPLETE](Event.md#sound_complete)
- [TICK](Event.md#tick)
- [TICKER\_PAUSE](Event.md#ticker_pause)
- [TICKER\_RESUME](Event.md#ticker_resume)
- [VIEWPORT\_RESIZE](Event.md#viewport_resize)

### Methods

- [$init](Event.md#$init)
- [release](Event.md#release)
- [create](Event.md#create)
- [recycle](Event.md#recycle)

## Constructors

### constructor

• `Protected` **new Event**(`type`, `data?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `string` | `undefined` |
| `data` | `any` | `null` |

#### Defined in

[event/Event.ts:47](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L47)

## Properties

### currentTarget

• **currentTarget**: [`EventEmitter`](../README.md#eventemitter) = `null`

#### Defined in

[event/Event.ts:45](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L45)

___

### data

• **data**: `any` = `null`

#### Defined in

[event/Event.ts:43](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L43)

___

### target

• **target**: [`EventEmitter`](../README.md#eventemitter) = `null`

#### Defined in

[event/Event.ts:44](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L44)

___

### type

• **type**: `string` = `null`

#### Defined in

[event/Event.ts:42](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L42)

___

### $pool

▪ `Static` `Protected` `Readonly` **$pool**: [`Event`](../README.md#event)[] = `[]`

#### Defined in

[event/Event.ts:63](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L63)

## Events

### ABORT

▪ `Static` `Readonly` **ABORT**: `string` = `'abort'`

abort

#### Defined in

[event/Event.ts:30](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L30)

___

### ACTIVATE

▪ `Static` `Readonly` **ACTIVATE**: `string` = `'activate'`

activate

#### Defined in

[event/Event.ts:14](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L14)

___

### ADDED

▪ `Static` `Readonly` **ADDED**: `string` = `'added'`

added

#### Defined in

[event/Event.ts:6](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L6)

___

### ADDED\_TO\_STAGE

▪ `Static` `Readonly` **ADDED\_TO\_STAGE**: `string` = `'addedToStage'`

addedToStage

#### Defined in

[event/Event.ts:10](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L10)

___

### COMPLETE

▪ `Static` `Readonly` **COMPLETE**: `string` = `'complete'`

complete

#### Defined in

[event/Event.ts:36](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L36)

___

### DEACTIVATE

▪ `Static` `Readonly` **DEACTIVATE**: `string` = `'deactivate'`

deactivate

#### Defined in

[event/Event.ts:16](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L16)

___

### ENDED

▪ `Static` `Readonly` **ENDED**: `string` = `'ended'`

ended

#### Defined in

[event/Event.ts:38](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L38)

___

### ENTER\_FRAME

▪ `Static` `Readonly` **ENTER\_FRAME**: `string` = `'enterFrame'`

enterFrame

#### Defined in

[event/Event.ts:18](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L18)

___

### ERROR

▪ `Static` `Readonly` **ERROR**: `string` = `'error'`

error

#### Defined in

[event/Event.ts:32](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L32)

___

### LOAD

▪ `Static` `Readonly` **LOAD**: `string` = `'load'`

load

#### Defined in

[event/Event.ts:28](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L28)

___

### PROGRESS

▪ `Static` `Readonly` **PROGRESS**: `string` = `'progress'`

progress

#### Defined in

[event/Event.ts:34](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L34)

___

### REMOVED

▪ `Static` `Readonly` **REMOVED**: `string` = `'removed'`

removed

#### Defined in

[event/Event.ts:8](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L8)

___

### REMOVED\_FROM\_STAGE

▪ `Static` `Readonly` **REMOVED\_FROM\_STAGE**: `string` = `'removeFromStage'`

removeFromStage

#### Defined in

[event/Event.ts:12](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L12)

___

### SOUND\_COMPLETE

▪ `Static` `Readonly` **SOUND\_COMPLETE**: `string` = `'soundComplete'`

soundComplete

#### Defined in

[event/Event.ts:40](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L40)

___

### TICK

▪ `Static` `Readonly` **TICK**: `string` = `'tick'`

tick

#### Defined in

[event/Event.ts:20](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L20)

___

### TICKER\_PAUSE

▪ `Static` `Readonly` **TICKER\_PAUSE**: `string` = `'tickerPause'`

tickerPause

#### Defined in

[event/Event.ts:22](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L22)

___

### TICKER\_RESUME

▪ `Static` `Readonly` **TICKER\_RESUME**: `string` = `'tickerResume'`

tickerResume

#### Defined in

[event/Event.ts:24](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L24)

___

### VIEWPORT\_RESIZE

▪ `Static` `Readonly` **VIEWPORT\_RESIZE**: `string` = `'viewportResize'`

viewportResize

#### Defined in

[event/Event.ts:26](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L26)

## Methods

### $init

▸ `Protected` **$init**(`type`, `data?`): [`Event`](../README.md#event)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `string` | `undefined` |
| `data` | `any` | `null` |

#### Returns

[`Event`](../README.md#event)

#### Defined in

[event/Event.ts:51](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L51)

___

### release

▸ **release**(): `void`

#### Returns

`void`

#### Defined in

[event/Event.ts:57](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L57)

___

### create

▸ `Static` **create**(`type`, `data?`): [`Event`](../README.md#event)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `string` | `undefined` |
| `data` | `any` | `null` |

#### Returns

[`Event`](../README.md#event)

#### Defined in

[event/Event.ts:65](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L65)

___

### recycle

▸ `Static` **recycle**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`Event`](../README.md#event) |

#### Returns

`void`

#### Defined in

[event/Event.ts:74](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/Event.ts#L74)
