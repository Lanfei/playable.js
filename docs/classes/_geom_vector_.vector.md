[playable.js](../README.md) > ["geom/Vector"](../modules/_geom_vector_.md) > [Vector](../classes/_geom_vector_.vector.md)

# Class: Vector

## Hierarchy

**Vector**

## Index

### Constructors

* [constructor](_geom_vector_.vector.md#constructor)

### Properties

* [x](_geom_vector_.vector.md#x)
* [y](_geom_vector_.vector.md#y)
* [$pool](_geom_vector_.vector.md#_pool)

### Accessors

* [length](_geom_vector_.vector.md#length)

### Methods

* [add](_geom_vector_.vector.md#add)
* [angle](_geom_vector_.vector.md#angle)
* [distance](_geom_vector_.vector.md#distance)
* [divide](_geom_vector_.vector.md#divide)
* [dotProduct](_geom_vector_.vector.md#dotproduct)
* [equals](_geom_vector_.vector.md#equals)
* [negate](_geom_vector_.vector.md#negate)
* [normalize](_geom_vector_.vector.md#normalize)
* [release](_geom_vector_.vector.md#release)
* [rotate](_geom_vector_.vector.md#rotate)
* [scale](_geom_vector_.vector.md#scale)
* [set](_geom_vector_.vector.md#set)
* [subtract](_geom_vector_.vector.md#subtract)
* [transform](_geom_vector_.vector.md#transform)
* [create](_geom_vector_.vector.md#create)
* [recycle](_geom_vector_.vector.md#recycle)

---

## Constructors

<a id="constructor"></a>

### `<Private>` constructor

⊕ **new Vector**(x?: *`number`*, y?: *`number`*): [Vector](_geom_vector_.vector.md)

*Defined in [geom/Vector.ts:6](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Vector.ts#L6)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` x | `number` |
| `Optional` y | `number` |

**Returns:** [Vector](_geom_vector_.vector.md)

___

## Properties

<a id="x"></a>

###  x

**● x**: *`number`*

*Defined in [geom/Vector.ts:5](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Vector.ts#L5)*

___
<a id="y"></a>

###  y

**● y**: *`number`*

*Defined in [geom/Vector.ts:6](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Vector.ts#L6)*

___
<a id="_pool"></a>

### `<Static>``<Private>` $pool

**● $pool**: *`Array`<[Vector](_geom_vector_.vector.md)>* =  []

*Defined in [geom/Vector.ts:123](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Vector.ts#L123)*

___

## Accessors

<a id="length"></a>

###  length

getlength(): `number`

*Defined in [geom/Vector.ts:12](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Vector.ts#L12)*

**Returns:** `number`

___

## Methods

<a id="add"></a>

###  add

▸ **add**(v: *[Vector](_geom_vector_.vector.md)*): `this`

▸ **add**(x: *`number`*, y: *`number`*): `this`

*Defined in [geom/Vector.ts:22](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Vector.ts#L22)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [Vector](_geom_vector_.vector.md) |

**Returns:** `this`

*Defined in [geom/Vector.ts:23](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Vector.ts#L23)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `this`

___
<a id="angle"></a>

###  angle

▸ **angle**(): `number`

*Defined in [geom/Vector.ts:98](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Vector.ts#L98)*

**Returns:** `number`

___
<a id="distance"></a>

###  distance

▸ **distance**(v: *[Vector](_geom_vector_.vector.md)*): `number`

*Defined in [geom/Vector.ts:102](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Vector.ts#L102)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [Vector](_geom_vector_.vector.md) |

**Returns:** `number`

___
<a id="divide"></a>

###  divide

▸ **divide**(v: *[Vector](_geom_vector_.vector.md)*): `this`

▸ **divide**(x: *`number`*, y: *`number`*): `this`

*Defined in [geom/Vector.ts:48](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Vector.ts#L48)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [Vector](_geom_vector_.vector.md) |

**Returns:** `this`

*Defined in [geom/Vector.ts:49](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Vector.ts#L49)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `this`

___
<a id="dotproduct"></a>

###  dotProduct

▸ **dotProduct**(v: *[Vector](_geom_vector_.vector.md)*): `number`

▸ **dotProduct**(x: *`number`*, y: *`number`*): `number`

*Defined in [geom/Vector.ts:61](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Vector.ts#L61)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [Vector](_geom_vector_.vector.md) |

**Returns:** `number`

*Defined in [geom/Vector.ts:62](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Vector.ts#L62)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `number`

___
<a id="equals"></a>

###  equals

▸ **equals**(v: *[Vector](_geom_vector_.vector.md)*): `boolean`

*Defined in [geom/Vector.ts:106](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Vector.ts#L106)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [Vector](_geom_vector_.vector.md) |

**Returns:** `boolean`

___
<a id="negate"></a>

###  negate

▸ **negate**(): `this`

*Defined in [geom/Vector.ts:78](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Vector.ts#L78)*

**Returns:** `this`

___
<a id="normalize"></a>

###  normalize

▸ **normalize**(): `this`

*Defined in [geom/Vector.ts:71](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Vector.ts#L71)*

**Returns:** `this`

___
<a id="release"></a>

###  release

▸ **release**(): `this`

*Defined in [geom/Vector.ts:118](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Vector.ts#L118)*

**Returns:** `this`

___
<a id="rotate"></a>

###  rotate

▸ **rotate**(angle: *`number`*): `this`

*Defined in [geom/Vector.ts:90](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Vector.ts#L90)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| angle | `number` |

**Returns:** `this`

___
<a id="scale"></a>

###  scale

▸ **scale**(x: *`number`*, y?: *`number`*): `this`

*Defined in [geom/Vector.ts:84](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Vector.ts#L84)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| `Optional` y | `number` |

**Returns:** `this`

___
<a id="set"></a>

###  set

▸ **set**(x: *`number`*, y: *`number`*): `this`

*Defined in [geom/Vector.ts:16](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Vector.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `this`

___
<a id="subtract"></a>

###  subtract

▸ **subtract**(v: *[Vector](_geom_vector_.vector.md)*): `this`

▸ **subtract**(x: *`number`*, y: *`number`*): `this`

*Defined in [geom/Vector.ts:35](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Vector.ts#L35)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [Vector](_geom_vector_.vector.md) |

**Returns:** `this`

*Defined in [geom/Vector.ts:36](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Vector.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `this`

___
<a id="transform"></a>

###  transform

▸ **transform**(m: *[Matrix](_geom_matrix_.matrix.md)*): [Vector](_geom_vector_.vector.md)

*Defined in [geom/Vector.ts:110](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Vector.ts#L110)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| m | [Matrix](_geom_matrix_.matrix.md) |

**Returns:** [Vector](_geom_vector_.vector.md)

___
<a id="create"></a>

### `<Static>` create

▸ **create**(x?: *`number`*, y?: *`number`*): [Vector](_geom_vector_.vector.md)

*Defined in [geom/Vector.ts:125](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Vector.ts#L125)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` x | `number` |
| `Optional` y | `number` |

**Returns:** [Vector](_geom_vector_.vector.md)

___
<a id="recycle"></a>

### `<Static>` recycle

▸ **recycle**(v: *[Vector](_geom_vector_.vector.md)*): `void`

*Defined in [geom/Vector.ts:134](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Vector.ts#L134)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [Vector](_geom_vector_.vector.md) |

**Returns:** `void`

___

