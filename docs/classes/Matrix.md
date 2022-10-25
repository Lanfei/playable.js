[API Reference](../README.md) / Matrix

# Class: Matrix

```
            {a  b  0}
(x, y, 1) * {c  d  0} = (ax + cy + tx, bx + dy + ty, 1)
            {tx ty 1}
```

## Table of contents

### Constructors

- [constructor](Matrix.md#constructor)

### Properties

- [a](Matrix.md#a)
- [b](Matrix.md#b)
- [c](Matrix.md#c)
- [d](Matrix.md#d)
- [tx](Matrix.md#tx)
- [ty](Matrix.md#ty)
- [$pool](Matrix.md#$pool)

### Methods

- [append](Matrix.md#append)
- [equal](Matrix.md#equal)
- [identity](Matrix.md#identity)
- [invert](Matrix.md#invert)
- [prepend](Matrix.md#prepend)
- [release](Matrix.md#release)
- [rotate](Matrix.md#rotate)
- [scale](Matrix.md#scale)
- [set](Matrix.md#set)
- [skew](Matrix.md#skew)
- [translate](Matrix.md#translate)
- [create](Matrix.md#create)
- [recycle](Matrix.md#recycle)

## Constructors

### constructor

• `Protected` **new Matrix**(`a?`, `b?`, `c?`, `d?`, `tx?`, `ty?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a?` | `number` |
| `b?` | `number` |
| `c?` | `number` |
| `d?` | `number` |
| `tx?` | `number` |
| `ty?` | `number` |

#### Defined in

[geom/Matrix.ts:19](https://github.com/Lanfei/playable.js/blob/99bdc51/src/geom/Matrix.ts#L19)

## Properties

### a

• **a**: `number`

#### Defined in

[geom/Matrix.ts:12](https://github.com/Lanfei/playable.js/blob/99bdc51/src/geom/Matrix.ts#L12)

___

### b

• **b**: `number`

#### Defined in

[geom/Matrix.ts:13](https://github.com/Lanfei/playable.js/blob/99bdc51/src/geom/Matrix.ts#L13)

___

### c

• **c**: `number`

#### Defined in

[geom/Matrix.ts:14](https://github.com/Lanfei/playable.js/blob/99bdc51/src/geom/Matrix.ts#L14)

___

### d

• **d**: `number`

#### Defined in

[geom/Matrix.ts:15](https://github.com/Lanfei/playable.js/blob/99bdc51/src/geom/Matrix.ts#L15)

___

### tx

• **tx**: `number`

#### Defined in

[geom/Matrix.ts:16](https://github.com/Lanfei/playable.js/blob/99bdc51/src/geom/Matrix.ts#L16)

___

### ty

• **ty**: `number`

#### Defined in

[geom/Matrix.ts:17](https://github.com/Lanfei/playable.js/blob/99bdc51/src/geom/Matrix.ts#L17)

___

### $pool

▪ `Static` `Protected` `Readonly` **$pool**: [`Matrix`](Matrix.md)[] = `[]`

#### Defined in

[geom/Matrix.ts:134](https://github.com/Lanfei/playable.js/blob/99bdc51/src/geom/Matrix.ts#L134)

## Methods

### append

▸ **append**(`m`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Matrix`](Matrix.md) |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[geom/Matrix.ts:79](https://github.com/Lanfei/playable.js/blob/99bdc51/src/geom/Matrix.ts#L79)

▸ **append**(`a`, `b`, `c`, `d`, `tx`, `ty`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |
| `c` | `number` |
| `d` | `number` |
| `tx` | `number` |
| `ty` | `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[geom/Matrix.ts:80](https://github.com/Lanfei/playable.js/blob/99bdc51/src/geom/Matrix.ts#L80)

___

### equal

▸ **equal**(`m`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Matrix`](Matrix.md) |

#### Returns

`boolean`

#### Defined in

[geom/Matrix.ts:123](https://github.com/Lanfei/playable.js/blob/99bdc51/src/geom/Matrix.ts#L123)

___

### identity

▸ **identity**(): [`Matrix`](Matrix.md)

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[geom/Matrix.ts:37](https://github.com/Lanfei/playable.js/blob/99bdc51/src/geom/Matrix.ts#L37)

___

### invert

▸ **invert**(): [`Matrix`](Matrix.md)

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[geom/Matrix.ts:41](https://github.com/Lanfei/playable.js/blob/99bdc51/src/geom/Matrix.ts#L41)

___

### prepend

▸ **prepend**(`m`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Matrix`](Matrix.md) |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[geom/Matrix.ts:58](https://github.com/Lanfei/playable.js/blob/99bdc51/src/geom/Matrix.ts#L58)

▸ **prepend**(`a`, `b`, `c`, `d`, `tx`, `ty`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |
| `c` | `number` |
| `d` | `number` |
| `tx` | `number` |
| `ty` | `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[geom/Matrix.ts:59](https://github.com/Lanfei/playable.js/blob/99bdc51/src/geom/Matrix.ts#L59)

___

### release

▸ **release**(): `void`

#### Returns

`void`

#### Defined in

[geom/Matrix.ts:130](https://github.com/Lanfei/playable.js/blob/99bdc51/src/geom/Matrix.ts#L130)

___

### rotate

▸ **rotate**(`angle`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[geom/Matrix.ts:104](https://github.com/Lanfei/playable.js/blob/99bdc51/src/geom/Matrix.ts#L104)

___

### scale

▸ **scale**(`x`, `y?`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y?` | `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[geom/Matrix.ts:100](https://github.com/Lanfei/playable.js/blob/99bdc51/src/geom/Matrix.ts#L100)

___

### set

▸ **set**(`a`, `b`, `c`, `d`, `tx`, `ty`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |
| `c` | `number` |
| `d` | `number` |
| `tx` | `number` |
| `ty` | `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[geom/Matrix.ts:27](https://github.com/Lanfei/playable.js/blob/99bdc51/src/geom/Matrix.ts#L27)

___

### skew

▸ **skew**(`skewX`, `skewY`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `skewX` | `number` |
| `skewY` | `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[geom/Matrix.ts:110](https://github.com/Lanfei/playable.js/blob/99bdc51/src/geom/Matrix.ts#L110)

___

### translate

▸ **translate**(`v`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](Vector.md) |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[geom/Matrix.ts:114](https://github.com/Lanfei/playable.js/blob/99bdc51/src/geom/Matrix.ts#L114)

▸ **translate**(`x`, `y`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[geom/Matrix.ts:115](https://github.com/Lanfei/playable.js/blob/99bdc51/src/geom/Matrix.ts#L115)

___

### create

▸ `Static` **create**(`a?`, `b?`, `c?`, `d?`, `tx?`, `ty?`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a?` | `number` |
| `b?` | `number` |
| `c?` | `number` |
| `d?` | `number` |
| `tx?` | `number` |
| `ty?` | `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[geom/Matrix.ts:136](https://github.com/Lanfei/playable.js/blob/99bdc51/src/geom/Matrix.ts#L136)

___

### recycle

▸ `Static` **recycle**(`m`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Matrix`](Matrix.md) |

#### Returns

`void`

#### Defined in

[geom/Matrix.ts:152](https://github.com/Lanfei/playable.js/blob/99bdc51/src/geom/Matrix.ts#L152)
