[API Reference](../README.md) / Media

# Class: Media

## Hierarchy

- [`EventEmitter`](EventEmitter.md)

  ↳ **`Media`**

  ↳↳ [`Texture`](Texture.md)

  ↳↳ [`Sound`](Sound.md)

## Table of contents

### Constructors

- [constructor](Media.md#constructor)

### Properties

- [$boundOnError](Media.md#$boundonerror)
- [$boundOnLoad](Media.md#$boundonload)
- [$element](Media.md#$element)
- [$emittingType](Media.md#$emittingtype)
- [$errored](Media.md#$errored)
- [$events](Media.md#$events)
- [$loaded](Media.md#$loaded)
- [$removedListeners](Media.md#$removedlisteners)
- [$stage](Media.md#$stage)

### Accessors

- [element](Media.md#element)
- [url](Media.md#url)

### Methods

- [$onError](Media.md#$onerror)
- [$onLoad](Media.md#$onload)
- [emit](Media.md#emit)
- [hasEventListener](Media.md#haseventlistener)
- [off](Media.md#off)
- [on](Media.md#on)
- [once](Media.md#once)
- [removeAllListeners](Media.md#removealllisteners)

## Constructors

### constructor

• `Protected` **new Media**(`stage`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stage` | [`Stage`](Stage.md) |

#### Overrides

[EventEmitter](EventEmitter.md).[constructor](EventEmitter.md#constructor)

#### Defined in

[media/Media.ts:15](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Media.ts#L15)

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

#### Defined in

[media/Media.ts:13](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Media.ts#L13)

___

### $boundOnLoad

• `Protected` `Readonly` **$boundOnLoad**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[media/Media.ts:12](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Media.ts#L12)

___

### $element

• `Protected` `Readonly` **$element**: `HTMLImageElement` \| `HTMLAudioElement`

#### Defined in

[media/Media.ts:7](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Media.ts#L7)

___

### $emittingType

• `Protected` **$emittingType**: `string` = `null`

#### Inherited from

[EventEmitter](EventEmitter.md).[$emittingType](EventEmitter.md#$emittingtype)

#### Defined in

[event/EventEmitter.ts:6](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L6)

___

### $errored

• `Protected` **$errored**: `boolean` = `false`

#### Defined in

[media/Media.ts:10](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Media.ts#L10)

___

### $events

• `Protected` **$events**: `Object` = `{}`

#### Inherited from

[EventEmitter](EventEmitter.md).[$events](EventEmitter.md#$events)

#### Defined in

[event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L5)

___

### $loaded

• `Protected` **$loaded**: `boolean` = `false`

#### Defined in

[media/Media.ts:9](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Media.ts#L9)

___

### $removedListeners

• `Protected` **$removedListeners**: [`Listener`](../README.md#listener)[] = `[]`

#### Inherited from

[EventEmitter](EventEmitter.md).[$removedListeners](EventEmitter.md#$removedlisteners)

#### Defined in

[event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L7)

___

### $stage

• `Protected` `Readonly` **$stage**: [`Stage`](Stage.md)

#### Defined in

[media/Media.ts:11](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Media.ts#L11)

## Accessors

### element

• `get` **element**(): `HTMLImageElement` \| `HTMLAudioElement`

#### Returns

`HTMLImageElement` \| `HTMLAudioElement`

#### Defined in

[media/Media.ts:22](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Media.ts#L22)

___

### url

• `get` **url**(): `string`

#### Returns

`string`

#### Defined in

[media/Media.ts:26](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Media.ts#L26)

• `set` **url**(`url`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`void`

#### Defined in

[media/Media.ts:30](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Media.ts#L30)

## Methods

### $onError

▸ `Protected` **$onError**(): `void`

#### Returns

`void`

#### Defined in

[media/Media.ts:56](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Media.ts#L56)

___

### $onLoad

▸ `Protected` **$onLoad**(): `void`

#### Returns

`void`

#### Defined in

[media/Media.ts:50](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Media.ts#L50)

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

[EventEmitter](EventEmitter.md).[emit](EventEmitter.md#emit)

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

[EventEmitter](EventEmitter.md).[emit](EventEmitter.md#emit)

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

[EventEmitter](EventEmitter.md).[hasEventListener](EventEmitter.md#haseventlistener)

#### Defined in

[event/EventEmitter.ts:80](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L80)

___

### off

▸ **off**(`type`, `listener?`): [`Media`](Media.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener?` | [`Listener`](../README.md#listener) |

#### Returns

[`Media`](Media.md)

#### Inherited from

[EventEmitter](EventEmitter.md).[off](EventEmitter.md#off)

#### Defined in

[event/EventEmitter.ts:16](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L16)

___

### on

▸ **on**(`type`, `listener`): [`Media`](Media.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Media`](Media.md)

#### Overrides

[EventEmitter](EventEmitter.md).[on](EventEmitter.md#on)

#### Defined in

[media/Media.ts:36](https://github.com/Lanfei/playable.js/blob/99bdc51/src/media/Media.ts#L36)

___

### once

▸ **once**(`type`, `listener`): [`Media`](Media.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`Listener`](../README.md#listener) |

#### Returns

[`Media`](Media.md)

#### Inherited from

[EventEmitter](EventEmitter.md).[once](EventEmitter.md#once)

#### Defined in

[event/EventEmitter.ts:33](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L33)

___

### removeAllListeners

▸ **removeAllListeners**(): [`Media`](Media.md)

#### Returns

[`Media`](Media.md)

#### Inherited from

[EventEmitter](EventEmitter.md).[removeAllListeners](EventEmitter.md#removealllisteners)

#### Defined in

[event/EventEmitter.ts:85](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L85)
