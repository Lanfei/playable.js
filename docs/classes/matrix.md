[API Reference](../README.md) > [Matrix](../classes/matrix.md)

# Class: Matrix

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

*Defined in [geom/Matrix.ts:15](https://github.com/Lanfei/playable.js/blob/76571fa/src/geom/Matrix.ts#L15)*

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

*Defined in [geom/Matrix.ts:10](https://github.com/Lanfei/playable.js/blob/76571fa/src/geom/Matrix.ts#L10)*

___
<a id="b"></a>

###  b

**● b**: *`number`*

*Defined in [geom/Matrix.ts:11](https://github.com/Lanfei/playable.js/blob/76571fa/src/geom/Matrix.ts#L11)*

___
<a id="c"></a>

###  c

**● c**: *`number`*

*Defined in [geom/Matrix.ts:12](https://github.com/Lanfei/playable.js/blob/76571fa/src/geom/Matrix.ts#L12)*

___
<a id="d"></a>

###  d

**● d**: *`number`*

*Defined in [geom/Matrix.ts:13](https://github.com/Lanfei/playable.js/blob/76571fa/src/geom/Matrix.ts#L13)*

___
<a id="tx"></a>

###  tx

**● tx**: *`number`*

*Defined in [geom/Matrix.ts:14](https://github.com/Lanfei/playable.js/blob/76571fa/src/geom/Matrix.ts#L14)*

___
<a id="ty"></a>

###  ty

**● ty**: *`number`*

*Defined in [geom/Matrix.ts:15](https://github.com/Lanfei/playable.js/blob/76571fa/src/geom/Matrix.ts#L15)*

___
<a id="_pool"></a>

### `<Static>``<Protected>` $pool

**● $pool**: *`Array`<[Matrix](matrix.md)>* =  []

*Defined in [geom/Matrix.ts:132](https://github.com/Lanfei/playable.js/blob/76571fa/src/geom/Matrix.ts#L132)*

___

## Methods

<a id="append"></a>

###  append

▸ **append**(m: *[Matrix](matrix.md)*): `this`

▸ **append**(a: *`number`*, b: *`number`*, c: *`number`*, d: *`number`*, tx: *`number`*, ty: *`number`*): `this`

*Defined in [geom/Matrix.ts:77](https://github.com/Lanfei/playable.js/blob/76571fa/src/geom/Matrix.ts#L77)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| m | [Matrix](matrix.md) |

**Returns:** `this`

*Defined in [geom/Matrix.ts:78](https://github.com/Lanfei/playable.js/blob/76571fa/src/geom/Matrix.ts#L78)*

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

*Defined in [geom/Matrix.ts:121](https://github.com/Lanfei/playable.js/blob/76571fa/src/geom/Matrix.ts#L121)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| m | [Matrix](matrix.md) |

**Returns:** `boolean`

___
<a id="identity"></a>

###  identity

▸ **identity**(): `this`

*Defined in [geom/Matrix.ts:35](https://github.com/Lanfei/playable.js/blob/76571fa/src/geom/Matrix.ts#L35)*

**Returns:** `this`

___
<a id="invert"></a>

###  invert

▸ **invert**(): `this`

*Defined in [geom/Matrix.ts:39](https://github.com/Lanfei/playable.js/blob/76571fa/src/geom/Matrix.ts#L39)*

**Returns:** `this`

___
<a id="prepend"></a>

###  prepend

▸ **prepend**(m: *[Matrix](matrix.md)*): `this`

▸ **prepend**(a: *`number`*, b: *`number`*, c: *`number`*, d: *`number`*, tx: *`number`*, ty: *`number`*): `this`

*Defined in [geom/Matrix.ts:56](https://github.com/Lanfei/playable.js/blob/76571fa/src/geom/Matrix.ts#L56)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| m | [Matrix](matrix.md) |

**Returns:** `this`

*Defined in [geom/Matrix.ts:57](https://github.com/Lanfei/playable.js/blob/76571fa/src/geom/Matrix.ts#L57)*

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

*Defined in [geom/Matrix.ts:128](https://github.com/Lanfei/playable.js/blob/76571fa/src/geom/Matrix.ts#L128)*

**Returns:** `void`

___
<a id="rotate"></a>

###  rotate

▸ **rotate**(angle: *`number`*): `this`

*Defined in [geom/Matrix.ts:102](https://github.com/Lanfei/playable.js/blob/76571fa/src/geom/Matrix.ts#L102)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| angle | `number` |

**Returns:** `this`

___
<a id="scale"></a>

###  scale

▸ **scale**(x: *`number`*, y?: *`number`*): `this`

*Defined in [geom/Matrix.ts:98](https://github.com/Lanfei/playable.js/blob/76571fa/src/geom/Matrix.ts#L98)*

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

*Defined in [geom/Matrix.ts:25](https://github.com/Lanfei/playable.js/blob/76571fa/src/geom/Matrix.ts#L25)*

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

*Defined in [geom/Matrix.ts:108](https://github.com/Lanfei/playable.js/blob/76571fa/src/geom/Matrix.ts#L108)*

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

*Defined in [geom/Matrix.ts:112](https://github.com/Lanfei/playable.js/blob/76571fa/src/geom/Matrix.ts#L112)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [Vector](vector.md) |

**Returns:** `this`

*Defined in [geom/Matrix.ts:113](https://github.com/Lanfei/playable.js/blob/76571fa/src/geom/Matrix.ts#L113)*

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

*Defined in [geom/Matrix.ts:134](https://github.com/Lanfei/playable.js/blob/76571fa/src/geom/Matrix.ts#L134)*

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

*Defined in [geom/Matrix.ts:150](https://github.com/Lanfei/playable.js/blob/76571fa/src/geom/Matrix.ts#L150)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| m | [Matrix](matrix.md) |

**Returns:** `void`

___

