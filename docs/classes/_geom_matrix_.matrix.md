[playable.js](../README.md) > ["geom/Matrix"](../modules/_geom_matrix_.md) > [Matrix](../classes/_geom_matrix_.matrix.md)

# Class: Matrix

## Hierarchy

**Matrix**

## Index

### Constructors

* [constructor](_geom_matrix_.matrix.md#constructor)

### Properties

* [a](_geom_matrix_.matrix.md#a)
* [b](_geom_matrix_.matrix.md#b)
* [c](_geom_matrix_.matrix.md#c)
* [d](_geom_matrix_.matrix.md#d)
* [tx](_geom_matrix_.matrix.md#tx)
* [ty](_geom_matrix_.matrix.md#ty)
* [$pool](_geom_matrix_.matrix.md#_pool)

### Methods

* [append](_geom_matrix_.matrix.md#append)
* [equals](_geom_matrix_.matrix.md#equals)
* [identity](_geom_matrix_.matrix.md#identity)
* [invert](_geom_matrix_.matrix.md#invert)
* [multiply](_geom_matrix_.matrix.md#multiply)
* [prepend](_geom_matrix_.matrix.md#prepend)
* [release](_geom_matrix_.matrix.md#release)
* [rotate](_geom_matrix_.matrix.md#rotate)
* [scale](_geom_matrix_.matrix.md#scale)
* [set](_geom_matrix_.matrix.md#set)
* [skew](_geom_matrix_.matrix.md#skew)
* [translate](_geom_matrix_.matrix.md#translate)
* [create](_geom_matrix_.matrix.md#create)
* [recycle](_geom_matrix_.matrix.md#recycle)

---

## Constructors

<a id="constructor"></a>

### `<Private>` constructor

⊕ **new Matrix**(a?: *`number`*, b?: *`number`*, c?: *`number`*, d?: *`number`*, tx?: *`number`*, ty?: *`number`*): [Matrix](_geom_matrix_.matrix.md)

*Defined in [geom/Matrix.ts:10](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Matrix.ts#L10)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` a | `number` |
| `Optional` b | `number` |
| `Optional` c | `number` |
| `Optional` d | `number` |
| `Optional` tx | `number` |
| `Optional` ty | `number` |

**Returns:** [Matrix](_geom_matrix_.matrix.md)

___

## Properties

<a id="a"></a>

###  a

**● a**: *`number`*

*Defined in [geom/Matrix.ts:5](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Matrix.ts#L5)*

___
<a id="b"></a>

###  b

**● b**: *`number`*

*Defined in [geom/Matrix.ts:6](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Matrix.ts#L6)*

___
<a id="c"></a>

###  c

**● c**: *`number`*

*Defined in [geom/Matrix.ts:7](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Matrix.ts#L7)*

___
<a id="d"></a>

###  d

**● d**: *`number`*

*Defined in [geom/Matrix.ts:8](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Matrix.ts#L8)*

___
<a id="tx"></a>

###  tx

**● tx**: *`number`*

*Defined in [geom/Matrix.ts:9](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Matrix.ts#L9)*

___
<a id="ty"></a>

###  ty

**● ty**: *`number`*

*Defined in [geom/Matrix.ts:10](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Matrix.ts#L10)*

___
<a id="_pool"></a>

### `<Static>``<Private>` $pool

**● $pool**: *`Array`<[Matrix](_geom_matrix_.matrix.md)>* =  []

*Defined in [geom/Matrix.ts:129](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Matrix.ts#L129)*

___

## Methods

<a id="append"></a>

###  append

▸ **append**(a: *`number` | [Matrix](_geom_matrix_.matrix.md)*, b?: *`number`*, c?: *`number`*, d?: *`number`*, tx?: *`number`*, ty?: *`number`*): `this`

*Defined in [geom/Matrix.ts:70](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Matrix.ts#L70)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | `number` | [Matrix](_geom_matrix_.matrix.md) |
| `Optional` b | `number` |
| `Optional` c | `number` |
| `Optional` d | `number` |
| `Optional` tx | `number` |
| `Optional` ty | `number` |

**Returns:** `this`

___
<a id="equals"></a>

###  equals

▸ **equals**(m: *[Matrix](_geom_matrix_.matrix.md)*): `boolean`

*Defined in [geom/Matrix.ts:118](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Matrix.ts#L118)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| m | [Matrix](_geom_matrix_.matrix.md) |

**Returns:** `boolean`

___
<a id="identity"></a>

###  identity

▸ **identity**(): `this`

*Defined in [geom/Matrix.ts:30](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Matrix.ts#L30)*

**Returns:** `this`

___
<a id="invert"></a>

###  invert

▸ **invert**(): `this`

*Defined in [geom/Matrix.ts:34](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Matrix.ts#L34)*

**Returns:** `this`

___
<a id="multiply"></a>

###  multiply

▸ **multiply**(v: *[Vector](_geom_vector_.vector.md)*): [Vector](_geom_vector_.vector.md)

*Defined in [geom/Matrix.ts:89](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Matrix.ts#L89)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [Vector](_geom_vector_.vector.md) |

**Returns:** [Vector](_geom_vector_.vector.md)

___
<a id="prepend"></a>

###  prepend

▸ **prepend**(a: *`number` | [Matrix](_geom_matrix_.matrix.md)*, b?: *`number`*, c?: *`number`*, d?: *`number`*, tx?: *`number`*, ty?: *`number`*): `this`

*Defined in [geom/Matrix.ts:51](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Matrix.ts#L51)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | `number` | [Matrix](_geom_matrix_.matrix.md) |
| `Optional` b | `number` |
| `Optional` c | `number` |
| `Optional` d | `number` |
| `Optional` tx | `number` |
| `Optional` ty | `number` |

**Returns:** `this`

___
<a id="release"></a>

###  release

▸ **release**(): `void`

*Defined in [geom/Matrix.ts:125](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Matrix.ts#L125)*

**Returns:** `void`

___
<a id="rotate"></a>

###  rotate

▸ **rotate**(angle: *`number`*): `this`

*Defined in [geom/Matrix.ts:99](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Matrix.ts#L99)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| angle | `number` |

**Returns:** `this`

___
<a id="scale"></a>

###  scale

▸ **scale**(x: *`number`*, y?: *`number`*): `this`

*Defined in [geom/Matrix.ts:95](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Matrix.ts#L95)*

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

*Defined in [geom/Matrix.ts:20](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Matrix.ts#L20)*

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

*Defined in [geom/Matrix.ts:105](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Matrix.ts#L105)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| skewX | `number` |
| skewY | `number` |

**Returns:** `this`

___
<a id="translate"></a>

###  translate

▸ **translate**(v: *[Vector](_geom_vector_.vector.md)*): `this`

▸ **translate**(x: *`number`*, y: *`number`*): `this`

*Defined in [geom/Matrix.ts:109](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Matrix.ts#L109)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [Vector](_geom_vector_.vector.md) |

**Returns:** `this`

*Defined in [geom/Matrix.ts:110](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Matrix.ts#L110)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `this`

___
<a id="create"></a>

### `<Static>` create

▸ **create**(a?: *`number`*, b?: *`number`*, c?: *`number`*, d?: *`number`*, tx?: *`number`*, ty?: *`number`*): [Matrix](_geom_matrix_.matrix.md)

*Defined in [geom/Matrix.ts:131](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Matrix.ts#L131)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` a | `number` |
| `Optional` b | `number` |
| `Optional` c | `number` |
| `Optional` d | `number` |
| `Optional` tx | `number` |
| `Optional` ty | `number` |

**Returns:** [Matrix](_geom_matrix_.matrix.md)

___
<a id="recycle"></a>

### `<Static>` recycle

▸ **recycle**(m: *[Matrix](_geom_matrix_.matrix.md)*): `void`

*Defined in [geom/Matrix.ts:147](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Matrix.ts#L147)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| m | [Matrix](_geom_matrix_.matrix.md) |

**Returns:** `void`

___

