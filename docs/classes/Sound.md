[API Reference](../README.md) / Sound

# Class: Sound

## Hierarchy

- [`Media`](Media.md)

  ↳ **`Sound`**

## Table of contents

### Constructors

- [constructor](Sound.md#constructor)

### Properties

- [$boundOnError](Sound.md#$boundonerror)
- [$boundOnLoad](Sound.md#$boundonload)
- [$boundOnTouch](Sound.md#$boundontouch)
- [$element](Sound.md#$element)
- [$emittingType](Sound.md#$emittingtype)
- [$errored](Sound.md#$errored)
- [$events](Sound.md#$events)
- [$loaded](Sound.md#$loaded)
- [$loops](Sound.md#$loops)
- [$paused](Sound.md#$paused)
- [$removedListeners](Sound.md#$removedlisteners)
- [$stage](Sound.md#$stage)
- [$startTime](Sound.md#$starttime)

### Accessors

- [element](Sound.md#element)
- [paused](Sound.md#paused)
- [url](Sound.md#url)
- [volume](Sound.md#volume)

### Methods

- [$checkOnTouch](Sound.md#$checkontouch)
- [$checkStatus](Sound.md#$checkstatus)
- [$onEnded](Sound.md#$onended)
- [$onError](Sound.md#$onerror)
- [$onLoad](Sound.md#$onload)
- [$onRemovedFromStage](Sound.md#$onremovedfromstage)
- [$onTickerPause](Sound.md#$ontickerpause)
- [$onTickerResume](Sound.md#$ontickerresume)
- [$onTouch](Sound.md#$ontouch)
- [emit](Sound.md#emit)
- [hasEventListener](Sound.md#haseventlistener)
- [off](Sound.md#off)
- [on](Sound.md#on)
- [once](Sound.md#once)
- [play](Sound.md#play)
- [removeAllListeners](Sound.md#removealllisteners)
- [stop](Sound.md#stop)

## Constructors

### constructor

• **new Sound**(`stage`, `url?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stage` | [`Stage`](Stage.md) |
| `url?` | `string` |

#### Overrides

[Media](Media.md).[constructor](Media.md#constructor)

#### Defined in

[media/Sound.ts:13](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Sound.ts#L13)

## Properties

### $boundOnError

• `Protected` `Readonly` **$boundOnError**: (`e`: `ErrorEvent`) => `void`

#### Type declaration

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `ErrorEvent` |

##### Returns

`void`

#### Inherited from

[Media](Media.md).[$boundOnError](Media.md#$boundonerror)

#### Defined in

[media/Media.ts:13](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Media.ts#L13)

___

### $boundOnLoad

• `Protected` `Readonly` **$boundOnLoad**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[Media](Media.md).[$boundOnLoad](Media.md#$boundonload)

#### Defined in

[media/Media.ts:12](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Media.ts#L12)

___

### $boundOnTouch

• `Protected` `Readonly` **$boundOnTouch**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[media/Sound.ts:11](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Sound.ts#L11)

___

### $element

• `Protected` `Readonly` **$element**: `HTMLAudioElement`

#### Overrides

[Media](Media.md).[$element](Media.md#$element)

#### Defined in

[media/Sound.ts:10](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Sound.ts#L10)

___

### $emittingType

• `Protected` **$emittingType**: `string` = `null`

#### Inherited from

[Media](Media.md).[$emittingType](Media.md#$emittingtype)

#### Defined in

[event/EventEmitter.ts:6](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L6)

___

### $errored

• `Protected` **$errored**: `boolean` = `false`

#### Inherited from

[Media](Media.md).[$errored](Media.md#$errored)

#### Defined in

[media/Media.ts:10](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Media.ts#L10)

___

### $events

• `Protected` **$events**: `Object` = `{}`

#### Inherited from

[Media](Media.md).[$events](Media.md#$events)

#### Defined in

[event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L5)

___

### $loaded

• `Protected` **$loaded**: `boolean` = `false`

#### Inherited from

[Media](Media.md).[$loaded](Media.md#$loaded)

#### Defined in

[media/Media.ts:9](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Media.ts#L9)

___

### $loops

• `Protected` **$loops**: `number` = `1`

#### Defined in

[media/Sound.ts:7](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Sound.ts#L7)

___

### $paused

• `Protected` **$paused**: `boolean` = `true`

#### Defined in

[media/Sound.ts:9](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Sound.ts#L9)

___

### $removedListeners

• `Protected` **$removedListeners**: [`Listener`](../README.md#listener)[] = `[]`

#### Inherited from

[Media](Media.md).[$removedListeners](Media.md#$removedlisteners)

#### Defined in

[event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L7)

___

### $stage

• `Protected` `Readonly` **$stage**: [`Stage`](Stage.md)

#### Inherited from

[Media](Media.md).[$stage](Media.md#$stage)

#### Defined in

[media/Media.ts:11](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Media.ts#L11)

___

### $startTime

• `Protected` **$startTime**: `number` = `0`

#### Defined in

[media/Sound.ts:8](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Sound.ts#L8)

## Accessors

### element

• `get` **element**(): `HTMLAudioElement`

#### Returns

`HTMLAudioElement`

#### Overrides

Media.element

#### Defined in

[media/Sound.ts:30](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Sound.ts#L30)

___

### paused

• `get` **paused**(): `boolean`

#### Returns

`boolean`

#### Defined in

[media/Sound.ts:55](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Sound.ts#L55)

___

### url

• `get` **url**(): `string`

#### Returns

`string`

#### Overrides

Media.url

#### Defined in

[media/Sound.ts:34](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Sound.ts#L34)

• `set` **url**(`url`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`void`

#### Overrides

Media.url

#### Defined in

[media/Sound.ts:38](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Sound.ts#L38)

___

### volume

• `get` **volume**(): `number`

#### Returns

`number`

#### Defined in

[media/Sound.ts:47](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Sound.ts#L47)

• `set` **volume**(`volume`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `volume` | `number` |

#### Returns

`void`

#### Defined in

[media/Sound.ts:51](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Sound.ts#L51)

## Methods

### $checkOnTouch

▸ `Protected` **$checkOnTouch**(): `void`

#### Returns

`void`

#### Defined in

[media/Sound.ts:74](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Sound.ts#L74)

___

### $checkStatus

▸ `Protected` **$checkStatus**(): `void`

#### Returns

`void`

#### Defined in

[media/Sound.ts:79](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Sound.ts#L79)

___

### $onEnded

▸ `Protected` **$onEnded**(): `void`

#### Returns

`void`

#### Defined in

[media/Sound.ts:95](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Sound.ts#L95)

___

### $onError

▸ `Protected` **$onError**(): `void`

#### Returns

`void`

#### Inherited from

[Media](Media.md).[$onError](Media.md#$onerror)

#### Defined in

[media/Media.ts:56](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Media.ts#L56)

___

### $onLoad

▸ `Protected` **$onLoad**(): `void`

#### Returns

`void`

#### Overrides

[Media](Media.md).[$onLoad](Media.md#$onload)

#### Defined in

[media/Sound.ts:125](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Sound.ts#L125)

___

### $onRemovedFromStage

▸ `Protected` **$onRemovedFromStage**(): `void`

#### Returns

`void`

#### Defined in

[media/Sound.ts:119](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Sound.ts#L119)

___

### $onTickerPause

▸ `Protected` **$onTickerPause**(): `void`

#### Returns

`void`

#### Defined in

[media/Sound.ts:107](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Sound.ts#L107)

___

### $onTickerResume

▸ `Protected` **$onTickerResume**(): `void`

#### Returns

`void`

#### Defined in

[media/Sound.ts:113](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Sound.ts#L113)

___

### $onTouch

▸ `Protected` **$onTouch**(): `void`

#### Returns

`void`

#### Defined in

[media/Sound.ts:89](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Sound.ts#L89)

___

### emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](Event.md) |

#### Returns

`boolean`

#### Inherited from

[Media](Media.md).[emit](Media.md#emit)

#### Defined in

[event/EventEmitter.ts:42](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L42)

▸ **emit**(`type`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[Media](Media.md).[emit](Media.md#emit)

#### Defined in

[event/EventEmitter.ts:43](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L43)

___

### hasEventListener

▸ **hasEventListener**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`boolean`

#### Inherited from

[Media](Media.md).[hasEventListener](Media.md#haseventlistener)

#### Defined in

[event/EventEmitter.ts:80](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L80)

___

### off

▸ **off**(`type`, `listener?`): [`Sound`](Sound.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener?` | [`Listener`](../README.md#listener) |

#### Returns

[`Sound`](Sound.md)

#### Inherited from

[Media](Media.md).[off](Media.md#off)

#### Defined in

[event/EventEmitter.ts:16](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L16)

___

### on

▸ **on**(`type`, `listener`): [`Sound`](Sound.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Sound`](Sound.md)

#### Inherited from

[Media](Media.md).[on](Media.md#on)

#### Defined in

[media/Media.ts:36](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Media.ts#L36)

___

### once

▸ **once**(`type`, `listener`): [`Sound`](Sound.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`Listener`](../README.md#listener) |

#### Returns

[`Sound`](Sound.md)

#### Inherited from

[Media](Media.md).[once](Media.md#once)

#### Defined in

[event/EventEmitter.ts:33](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L33)

___

### play

▸ **play**(`startTime?`, `loops?`): [`Sound`](Sound.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `startTime` | `number` | `0` |
| `loops` | `number` | `1` |

#### Returns

[`Sound`](Sound.md)

#### Defined in

[media/Sound.ts:59](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Sound.ts#L59)

___

### removeAllListeners

▸ **removeAllListeners**(): [`Sound`](Sound.md)

#### Returns

[`Sound`](Sound.md)

#### Inherited from

[Media](Media.md).[removeAllListeners](Media.md#removealllisteners)

#### Defined in

[event/EventEmitter.ts:85](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L85)

___

### stop

▸ **stop**(): [`Sound`](Sound.md)

#### Returns

[`Sound`](Sound.md)

#### Defined in

[media/Sound.ts:68](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Sound.ts#L68)
