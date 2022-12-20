[API Reference](../README.md) / Vector

# Class: Vector

## Table of contents

### Constructors

- [constructor](Vector.md#constructor)

### Properties

- [x](Vector.md#x)
- [y](Vector.md#y)
- [$pool](Vector.md#$pool)

### Accessors

- [angle](Vector.md#angle)
- [length](Vector.md#length)

### Methods

- [add](Vector.md#add)
- [distance](Vector.md#distance)
- [dotProduct](Vector.md#dotproduct)
- [equal](Vector.md#equal)
- [negate](Vector.md#negate)
- [normalize](Vector.md#normalize)
- [release](Vector.md#release)
- [rotate](Vector.md#rotate)
- [scale](Vector.md#scale)
- [set](Vector.md#set)
- [subtract](Vector.md#subtract)
- [transform](Vector.md#transform)
- [create](Vector.md#create)
- [recycle](Vector.md#recycle)

## Constructors

### constructor

• `Protected` **new Vector**(`x?`, `y?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |

#### Defined in

[geom/Vector.ts:8](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Vector.ts#L8)

## Properties

### x

• **x**: `number`

#### Defined in

[geom/Vector.ts:5](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Vector.ts#L5)

___

### y

• **y**: `number`

#### Defined in

[geom/Vector.ts:6](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Vector.ts#L6)

___

### $pool

▪ `Static` `Protected` `Readonly` **$pool**: [`Vector`](../README.md#vector)[] = `[]`

#### Defined in

[geom/Vector.ts:110](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Vector.ts#L110)

## Accessors

### angle

• `get` **angle**(): `number`

#### Returns

`number`

#### Defined in

[geom/Vector.ts:16](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Vector.ts#L16)

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[geom/Vector.ts:12](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Vector.ts#L12)

## Methods

### add

▸ **add**(`v`): [`Vector`](../README.md#vector)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](../README.md#vector) |

#### Returns

[`Vector`](../README.md#vector)

#### Defined in

[geom/Vector.ts:26](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Vector.ts#L26)

▸ **add**(`x`, `y`): [`Vector`](../README.md#vector)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`Vector`](../README.md#vector)

#### Defined in

[geom/Vector.ts:27](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Vector.ts#L27)

___

### distance

▸ **distance**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](../README.md#vector) |

#### Returns

`number`

#### Defined in

[geom/Vector.ts:97](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Vector.ts#L97)

___

### dotProduct

▸ **dotProduct**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](../README.md#vector) |

#### Returns

`number`

#### Defined in

[geom/Vector.ts:52](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Vector.ts#L52)

▸ **dotProduct**(`x`, `y`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`number`

#### Defined in

[geom/Vector.ts:53](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Vector.ts#L53)

___

### equal

▸ **equal**(`v`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](../README.md#vector) |

#### Returns

`boolean`

#### Defined in

[geom/Vector.ts:101](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Vector.ts#L101)

___

### negate

▸ **negate**(): [`Vector`](../README.md#vector)

#### Returns

[`Vector`](../README.md#vector)

#### Defined in

[geom/Vector.ts:69](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Vector.ts#L69)

___

### normalize

▸ **normalize**(): [`Vector`](../README.md#vector)

#### Returns

[`Vector`](../README.md#vector)

#### Defined in

[geom/Vector.ts:62](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Vector.ts#L62)

___

### release

▸ **release**(): [`Vector`](../README.md#vector)

#### Returns

[`Vector`](../README.md#vector)

#### Defined in

[geom/Vector.ts:105](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Vector.ts#L105)

___

### rotate

▸ **rotate**(`angle`): [`Vector`](../README.md#vector)

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

[`Vector`](../README.md#vector)

#### Defined in

[geom/Vector.ts:81](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Vector.ts#L81)

___

### scale

▸ **scale**(`x`, `y?`): [`Vector`](../README.md#vector)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y?` | `number` |

#### Returns

[`Vector`](../README.md#vector)

#### Defined in

[geom/Vector.ts:75](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Vector.ts#L75)

___

### set

▸ **set**(`x`, `y`): [`Vector`](../README.md#vector)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`Vector`](../README.md#vector)

#### Defined in

[geom/Vector.ts:20](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Vector.ts#L20)

___

### subtract

▸ **subtract**(`v`): [`Vector`](../README.md#vector)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](../README.md#vector) |

#### Returns

[`Vector`](../README.md#vector)

#### Defined in

[geom/Vector.ts:39](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Vector.ts#L39)

▸ **subtract**(`x`, `y`): [`Vector`](../README.md#vector)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`Vector`](../README.md#vector)

#### Defined in

[geom/Vector.ts:40](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Vector.ts#L40)

___

### transform

▸ **transform**(`m`): [`Vector`](../README.md#vector)

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Matrix`](../README.md#matrix) |

#### Returns

[`Vector`](../README.md#vector)

#### Defined in

[geom/Vector.ts:89](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Vector.ts#L89)

___

### create

▸ `Static` **create**(`x?`, `y?`): [`Vector`](../README.md#vector)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |

#### Returns

[`Vector`](../README.md#vector)

#### Defined in

[geom/Vector.ts:112](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Vector.ts#L112)

___

### recycle

▸ `Static` **recycle**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](../README.md#vector) |

#### Returns

`void`

#### Defined in

[geom/Vector.ts:121](https://github.com/Lanfei/playable.js/blob/2369e26/src/geom/Vector.ts#L121)
