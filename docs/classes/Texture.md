[API Reference](../README.md) / Texture

# Class: Texture

## Hierarchy

- [`Media`](../README.md#media)

  ↳ **`Texture`**

## Table of contents

### Constructors

- [constructor](Texture.md#constructor)

### Properties

- [$boundOnError](Texture.md#$boundonerror)
- [$boundOnLoad](Texture.md#$boundonload)
- [$element](Texture.md#$element)
- [$emittingType](Texture.md#$emittingtype)
- [$errored](Texture.md#$errored)
- [$events](Texture.md#$events)
- [$loaded](Texture.md#$loaded)
- [$removedListeners](Texture.md#$removedlisteners)
- [$stage](Texture.md#$stage)
- [pixelRatio](Texture.md#pixelratio)
- [defaultPixelRatio](Texture.md#defaultpixelratio)

### Accessors

- [element](Texture.md#element)
- [height](Texture.md#height)
- [url](Texture.md#url)
- [width](Texture.md#width)

### Methods

- [$onError](Texture.md#$onerror)
- [$onLoad](Texture.md#$onload)
- [emit](Texture.md#emit)
- [hasEventListener](Texture.md#haseventlistener)
- [off](Texture.md#off)
- [on](Texture.md#on)
- [once](Texture.md#once)
- [removeAllListeners](Texture.md#removealllisteners)

## Constructors

### constructor

• **new Texture**(`stage`, `url?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stage` | [`Stage`](../README.md#stage) |
| `url?` | `string` |

#### Overrides

[Media](../README.md#media).[constructor](../README.md#constructor)

#### Defined in

[media/Texture.ts:12](https://github.com/Lanfei/playable.js/blob/2369e26/src/media/Texture.ts#L12)

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

[Media](../README.md#media).[$boundOnError](../README.md#$boundonerror)

#### Defined in

[media/Media.ts:13](https://github.com/Lanfei/playable.js/blob/2369e26/src/media/Media.ts#L13)

___

### $boundOnLoad

• `Protected` `Readonly` **$boundOnLoad**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[Media](../README.md#media).[$boundOnLoad](../README.md#$boundonload)

#### Defined in

[media/Media.ts:12](https://github.com/Lanfei/playable.js/blob/2369e26/src/media/Media.ts#L12)

___

### $element

• `Protected` `Readonly` **$element**: `HTMLImageElement`

#### Overrides

[Media](../README.md#media).[$element](../README.md#$element)

#### Defined in

[media/Texture.ts:10](https://github.com/Lanfei/playable.js/blob/2369e26/src/media/Texture.ts#L10)

___

### $emittingType

• `Protected` **$emittingType**: `string` = `null`

#### Inherited from

[Media](../README.md#media).[$emittingType](../README.md#$emittingtype)

#### Defined in

[event/EventEmitter.ts:6](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L6)

___

### $errored

• `Protected` **$errored**: `boolean` = `false`

#### Inherited from

[Media](../README.md#media).[$errored](../README.md#$errored)

#### Defined in

[media/Media.ts:10](https://github.com/Lanfei/playable.js/blob/2369e26/src/media/Media.ts#L10)

___

### $events

• `Protected` **$events**: `Object` = `{}`

#### Inherited from

[Media](../README.md#media).[$events](../README.md#$events)

#### Defined in

[event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L5)

___

### $loaded

• `Protected` **$loaded**: `boolean` = `false`

#### Inherited from

[Media](../README.md#media).[$loaded](../README.md#$loaded)

#### Defined in

[media/Media.ts:9](https://github.com/Lanfei/playable.js/blob/2369e26/src/media/Media.ts#L9)

___

### $removedListeners

• `Protected` **$removedListeners**: [`Listener`](../README.md#listener)[] = `[]`

#### Inherited from

[Media](../README.md#media).[$removedListeners](../README.md#$removedlisteners)

#### Defined in

[event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L7)

___

### $stage

• `Protected` `Readonly` **$stage**: [`Stage`](../README.md#stage)

#### Inherited from

[Media](../README.md#media).[$stage](../README.md#$stage)

#### Defined in

[media/Media.ts:11](https://github.com/Lanfei/playable.js/blob/2369e26/src/media/Media.ts#L11)

___

### pixelRatio

• **pixelRatio**: `number` = `Texture.defaultPixelRatio`

#### Defined in

[media/Texture.ts:8](https://github.com/Lanfei/playable.js/blob/2369e26/src/media/Texture.ts#L8)

___

### defaultPixelRatio

▪ `Static` **defaultPixelRatio**: `number` = `1`

#### Defined in

[media/Texture.ts:6](https://github.com/Lanfei/playable.js/blob/2369e26/src/media/Texture.ts#L6)

## Accessors

### element

• `get` **element**(): `HTMLImageElement`

#### Returns

`HTMLImageElement`

#### Overrides

Media.element

#### Defined in

[media/Texture.ts:24](https://github.com/Lanfei/playable.js/blob/2369e26/src/media/Texture.ts#L24)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[media/Texture.ts:32](https://github.com/Lanfei/playable.js/blob/2369e26/src/media/Texture.ts#L32)

___

### url

• `get` **url**(): `string`

#### Returns

`string`

#### Inherited from

Media.url

#### Defined in

[media/Media.ts:26](https://github.com/Lanfei/playable.js/blob/2369e26/src/media/Media.ts#L26)

• `set` **url**(`url`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`void`

#### Inherited from

Media.url

#### Defined in

[media/Media.ts:30](https://github.com/Lanfei/playable.js/blob/2369e26/src/media/Media.ts#L30)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[media/Texture.ts:28](https://github.com/Lanfei/playable.js/blob/2369e26/src/media/Texture.ts#L28)

## Methods

### $onError

▸ `Protected` **$onError**(): `void`

#### Returns

`void`

#### Inherited from

[Media](../README.md#media).[$onError](../README.md#$onerror)

#### Defined in

[media/Media.ts:56](https://github.com/Lanfei/playable.js/blob/2369e26/src/media/Media.ts#L56)

___

### $onLoad

▸ `Protected` **$onLoad**(): `void`

#### Returns

`void`

#### Inherited from

[Media](../README.md#media).[$onLoad](../README.md#$onload)

#### Defined in

[media/Media.ts:50](https://github.com/Lanfei/playable.js/blob/2369e26/src/media/Media.ts#L50)

___

### emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../README.md#event) |

#### Returns

`boolean`

#### Inherited from

[Media](../README.md#media).[emit](../README.md#emit)

#### Defined in

[event/EventEmitter.ts:42](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L42)

▸ **emit**(`type`, `...args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[Media](../README.md#media).[emit](../README.md#emit)

#### Defined in

[event/EventEmitter.ts:43](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L43)

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

[Media](../README.md#media).[hasEventListener](../README.md#haseventlistener)

#### Defined in

[event/EventEmitter.ts:80](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L80)

___

### off

▸ **off**(`type`, `listener?`): [`Texture`](../README.md#texture)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener?` | [`Listener`](../README.md#listener) |

#### Returns

[`Texture`](../README.md#texture)

#### Inherited from

[Media](../README.md#media).[off](../README.md#off)

#### Defined in

[event/EventEmitter.ts:16](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L16)

___

### on

▸ **on**(`type`, `listener`): [`Texture`](../README.md#texture)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Texture`](../README.md#texture)

#### Inherited from

[Media](../README.md#media).[on](../README.md#on)

#### Defined in

[media/Media.ts:36](https://github.com/Lanfei/playable.js/blob/2369e26/src/media/Media.ts#L36)

___

### once

▸ **once**(`type`, `listener`): [`Texture`](../README.md#texture)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`Listener`](../README.md#listener) |

#### Returns

[`Texture`](../README.md#texture)

#### Inherited from

[Media](../README.md#media).[once](../README.md#once)

#### Defined in

[event/EventEmitter.ts:33](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L33)

___

### removeAllListeners

▸ **removeAllListeners**(): [`Texture`](../README.md#texture)

#### Returns

[`Texture`](../README.md#texture)

#### Inherited from

[Media](../README.md#media).[removeAllListeners](../README.md#removealllisteners)

#### Defined in

[event/EventEmitter.ts:85](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L85)
