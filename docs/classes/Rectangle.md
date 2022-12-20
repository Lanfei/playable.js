[API Reference](../README.md) / Rectangle

# Class: Rectangle

## Table of contents

### Constructors

- [constructor](Rectangle.md#constructor)

### Properties

- [height](Rectangle.md#height)
- [width](Rectangle.md#width)
- [x](Rectangle.md#x)
- [y](Rectangle.md#y)
- [$pool](Rectangle.md#$pool)

### Accessors

- [bottom](Rectangle.md#bottom)
- [bottomRight](Rectangle.md#bottomright)
- [left](Rectangle.md#left)
- [right](Rectangle.md#right)
- [top](Rectangle.md#top)
- [topLeft](Rectangle.md#topleft)

### Methods

- [contains](Rectangle.md#contains)
- [equal](Rectangle.md#equal)
- [release](Rectangle.md#release)
- [set](Rectangle.md#set)
- [create](Rectangle.md#create)
- [recycle](Rectangle.md#recycle)

## Constructors

### constructor

• `Protected` **new Rectangle**(`x?`, `y?`, `width?`, `height?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |
| `width?` | `number` |
| `height?` | `number` |

#### Defined in

[geom/Rectangle.ts:10](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Rectangle.ts#L10)

## Properties

### height

• **height**: `number`

#### Defined in

[geom/Rectangle.ts:8](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Rectangle.ts#L8)

___

### width

• **width**: `number`

#### Defined in

[geom/Rectangle.ts:7](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Rectangle.ts#L7)

___

### x

• **x**: `number`

#### Defined in

[geom/Rectangle.ts:5](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Rectangle.ts#L5)

___

### y

• **y**: `number`

#### Defined in

[geom/Rectangle.ts:6](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Rectangle.ts#L6)

___

### $pool

▪ `Static` `Protected` `Readonly` **$pool**: [`Rectangle`](../README.md#rectangle)[] = `[]`

#### Defined in

[geom/Rectangle.ts:92](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Rectangle.ts#L92)

## Accessors

### bottom

• `get` **bottom**(): `number`

#### Returns

`number`

#### Defined in

[geom/Rectangle.ts:23](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Rectangle.ts#L23)

• `set` **bottom**(`bottom`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bottom` | `number` |

#### Returns

`void`

#### Defined in

[geom/Rectangle.ts:27](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Rectangle.ts#L27)

___

### bottomRight

• `get` **bottomRight**(): [`Vector`](../README.md#vector)

#### Returns

[`Vector`](../README.md#vector)

#### Defined in

[geom/Rectangle.ts:57](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Rectangle.ts#L57)

• `set` **bottomRight**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](../README.md#vector) |

#### Returns

`void`

#### Defined in

[geom/Rectangle.ts:61](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Rectangle.ts#L61)

___

### left

• `get` **left**(): `number`

#### Returns

`number`

#### Defined in

[geom/Rectangle.ts:31](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Rectangle.ts#L31)

• `set` **left**(`left`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | `number` |

#### Returns

`void`

#### Defined in

[geom/Rectangle.ts:35](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Rectangle.ts#L35)

___

### right

• `get` **right**(): `number`

#### Returns

`number`

#### Defined in

[geom/Rectangle.ts:40](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Rectangle.ts#L40)

• `set` **right**(`right`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `right` | `number` |

#### Returns

`void`

#### Defined in

[geom/Rectangle.ts:44](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Rectangle.ts#L44)

___

### top

• `get` **top**(): `number`

#### Returns

`number`

#### Defined in

[geom/Rectangle.ts:14](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Rectangle.ts#L14)

• `set` **top**(`top`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `top` | `number` |

#### Returns

`void`

#### Defined in

[geom/Rectangle.ts:18](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Rectangle.ts#L18)

___

### topLeft

• `get` **topLeft**(): [`Vector`](../README.md#vector)

#### Returns

[`Vector`](../README.md#vector)

#### Defined in

[geom/Rectangle.ts:48](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Rectangle.ts#L48)

• `set` **topLeft**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](../README.md#vector) |

#### Returns

`void`

#### Defined in

[geom/Rectangle.ts:52](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Rectangle.ts#L52)

## Methods

### contains

▸ **contains**(`v`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](../README.md#vector) |

#### Returns

`boolean`

#### Defined in

[geom/Rectangle.ts:74](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Rectangle.ts#L74)

▸ **contains**(`x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

[geom/Rectangle.ts:75](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Rectangle.ts#L75)

___

### equal

▸ **equal**(`r`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | [`Rectangle`](../README.md#rectangle) |

#### Returns

`boolean`

#### Defined in

[geom/Rectangle.ts:83](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Rectangle.ts#L83)

___

### release

▸ **release**(): `void`

#### Returns

`void`

#### Defined in

[geom/Rectangle.ts:88](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Rectangle.ts#L88)

___

### set

▸ **set**(`x`, `y`, `width`, `height`): [`Rectangle`](../README.md#rectangle)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

[`Rectangle`](../README.md#rectangle)

#### Defined in

[geom/Rectangle.ts:66](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Rectangle.ts#L66)

___

### create

▸ `Static` **create**(`x?`, `y?`, `width?`, `height?`): [`Rectangle`](../README.md#rectangle)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |
| `width?` | `number` |
| `height?` | `number` |

#### Returns

[`Rectangle`](../README.md#rectangle)

#### Defined in

[geom/Rectangle.ts:94](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Rectangle.ts#L94)

___

### recycle

▸ `Static` **recycle**(`r`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | [`Rectangle`](../README.md#rectangle) |

#### Returns

`void`

#### Defined in

[geom/Rectangle.ts:103](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Rectangle.ts#L103)
