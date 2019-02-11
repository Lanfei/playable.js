[API Reference](../README.md) > [Matrix](../classes/matrix.md)

# Class: Matrix

```
            {a  b  0}
(x, y, 1) * {c  d  0} = (ax + cy + tx, bx + dy + ty, 1)
            {tx ty 1}
```

## Hierarchy

**Matrix**

## Index

### Constructors

* [constructor](matrix.md#constructor)

### Properties

* [a](matrix.md#a)
* [b](matrix.md#b)
* [c](matrix.md#c)
* [d](matrix.md#d)
* [tx](matrix.md#tx)
* [ty](matrix.md#ty)
* [$pool](matrix.md#_pool)

### Methods

* [append](matrix.md#append)
* [equal](matrix.md#equal)
* [identity](matrix.md#identity)
* [invert](matrix.md#invert)
* [prepend](matrix.md#prepend)
* [release](matrix.md#release)
* [rotate](matrix.md#rotate)
* [scale](matrix.md#scale)
* [set](matrix.md#set)
* [skew](matrix.md#skew)
* [translate](matrix.md#translate)
* [create](matrix.md#create)
* [recycle](matrix.md#recycle)

---

## Constructors

<a id="constructor"></a>

### `<Protected>` constructor

⊕ **new Matrix**(a?: *`number`*, b?: *`number`*, c?: *`number`*, d?: *`number`*, tx?: *`number`*, ty?: *`number`*): [Matrix](matrix.md)

*Defined in [geom/Matrix.ts:17](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Matrix.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` a | `number` |
| `Optional` b | `number` |
| `Optional` c | `number` |
| `Optional` d | `number` |
| `Optional` tx | `number` |
| `Optional` ty | `number` |

**Returns:** [Matrix](matrix.md)

___

## Properties

<a id="a"></a>

###  a

**● a**: *`number`*

*Defined in [geom/Matrix.ts:12](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Matrix.ts#L12)*

___
<a id="b"></a>

###  b

**● b**: *`number`*

*Defined in [geom/Matrix.ts:13](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Matrix.ts#L13)*

___
<a id="c"></a>

###  c

**● c**: *`number`*

*Defined in [geom/Matrix.ts:14](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Matrix.ts#L14)*

___
<a id="d"></a>

###  d

**● d**: *`number`*

*Defined in [geom/Matrix.ts:15](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Matrix.ts#L15)*

___
<a id="tx"></a>

###  tx

**● tx**: *`number`*

*Defined in [geom/Matrix.ts:16](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Matrix.ts#L16)*

___
<a id="ty"></a>

###  ty

**● ty**: *`number`*

*Defined in [geom/Matrix.ts:17](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Matrix.ts#L17)*

___
<a id="_pool"></a>

### `<Static>``<Protected>` $pool

**● $pool**: *`Array`<[Matrix](matrix.md)>* =  []

*Defined in [geom/Matrix.ts:134](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Matrix.ts#L134)*

___

## Methods

<a id="append"></a>

###  append

▸ **append**(m: *[Matrix](matrix.md)*): `this`

▸ **append**(a: *`number`*, b: *`number`*, c: *`number`*, d: *`number`*, tx: *`number`*, ty: *`number`*): `this`

*Defined in [geom/Matrix.ts:79](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Matrix.ts#L79)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| m | [Matrix](matrix.md) |

**Returns:** `this`

*Defined in [geom/Matrix.ts:80](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Matrix.ts#L80)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | `number` |
| b | `number` |
| c | `number` |
| d | `number` |
| tx | `number` |
| ty | `number` |

**Returns:** `this`

___
<a id="equal"></a>

###  equal

▸ **equal**(m: *[Matrix](matrix.md)*): `boolean`

*Defined in [geom/Matrix.ts:123](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Matrix.ts#L123)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| m | [Matrix](matrix.md) |

**Returns:** `boolean`

___
<a id="identity"></a>

###  identity

▸ **identity**(): `this`

*Defined in [geom/Matrix.ts:37](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Matrix.ts#L37)*

**Returns:** `this`

___
<a id="invert"></a>

###  invert

▸ **invert**(): `this`

*Defined in [geom/Matrix.ts:41](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Matrix.ts#L41)*

**Returns:** `this`

___
<a id="prepend"></a>

###  prepend

▸ **prepend**(m: *[Matrix](matrix.md)*): `this`

▸ **prepend**(a: *`number`*, b: *`number`*, c: *`number`*, d: *`number`*, tx: *`number`*, ty: *`number`*): `this`

*Defined in [geom/Matrix.ts:58](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Matrix.ts#L58)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| m | [Matrix](matrix.md) |

**Returns:** `this`

*Defined in [geom/Matrix.ts:59](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Matrix.ts#L59)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | `number` |
| b | `number` |
| c | `number` |
| d | `number` |
| tx | `number` |
| ty | `number` |

**Returns:** `this`

___
<a id="release"></a>

###  release

▸ **release**(): `void`

*Defined in [geom/Matrix.ts:130](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Matrix.ts#L130)*

**Returns:** `void`

___
<a id="rotate"></a>

###  rotate

▸ **rotate**(angle: *`number`*): `this`

*Defined in [geom/Matrix.ts:104](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Matrix.ts#L104)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| angle | `number` |

**Returns:** `this`

___
<a id="scale"></a>

###  scale

▸ **scale**(x: *`number`*, y?: *`number`*): `this`

*Defined in [geom/Matrix.ts:100](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Matrix.ts#L100)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| `Optional` y | `number` |

**Returns:** `this`

___
<a id="set"></a>

###  set

▸ **set**(a: *`number`*, b: *`number`*, c: *`number`*, d: *`number`*, tx: *`number`*, ty: *`number`*): `this`

*Defined in [geom/Matrix.ts:27](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Matrix.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | `number` |
| b | `number` |
| c | `number` |
| d | `number` |
| tx | `number` |
| ty | `number` |

**Returns:** `this`

___
<a id="skew"></a>

###  skew

▸ **skew**(skewX: *`number`*, skewY: *`number`*): `this`

*Defined in [geom/Matrix.ts:110](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Matrix.ts#L110)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| skewX | `number` |
| skewY | `number` |

**Returns:** `this`

___
<a id="translate"></a>

###  translate

▸ **translate**(v: *[Vector](vector.md)*): `this`

▸ **translate**(x: *`number`*, y: *`number`*): `this`

*Defined in [geom/Matrix.ts:114](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Matrix.ts#L114)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [Vector](vector.md) |

**Returns:** `this`

*Defined in [geom/Matrix.ts:115](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Matrix.ts#L115)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `this`

___
<a id="create"></a>

### `<Static>` create

▸ **create**(a?: *`number`*, b?: *`number`*, c?: *`number`*, d?: *`number`*, tx?: *`number`*, ty?: *`number`*): [Matrix](matrix.md)

*Defined in [geom/Matrix.ts:136](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Matrix.ts#L136)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` a | `number` |
| `Optional` b | `number` |
| `Optional` c | `number` |
| `Optional` d | `number` |
| `Optional` tx | `number` |
| `Optional` ty | `number` |

**Returns:** [Matrix](matrix.md)

___
<a id="recycle"></a>

### `<Static>` recycle

▸ **recycle**(m: *[Matrix](matrix.md)*): `void`

*Defined in [geom/Matrix.ts:152](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Matrix.ts#L152)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| m | [Matrix](matrix.md) |

**Returns:** `void`

___

