[API Reference](../README.md) > [Vector](../classes/vector.md)

# Class: Vector

## Hierarchy

**Vector**

## Index

### Constructors

* [constructor](vector.md#constructor)

### Properties

* [x](vector.md#x)
* [y](vector.md#y)
* [$pool](vector.md#_pool)

### Accessors

* [angle](vector.md#angle)
* [length](vector.md#length)

### Methods

* [add](vector.md#add)
* [distance](vector.md#distance)
* [dotProduct](vector.md#dotproduct)
* [equal](vector.md#equal)
* [negate](vector.md#negate)
* [normalize](vector.md#normalize)
* [release](vector.md#release)
* [rotate](vector.md#rotate)
* [scale](vector.md#scale)
* [set](vector.md#set)
* [subtract](vector.md#subtract)
* [transform](vector.md#transform)
* [create](vector.md#create)
* [recycle](vector.md#recycle)

---

## Constructors

<a id="constructor"></a>

### `<Protected>` constructor

⊕ **new Vector**(x?: *`number`*, y?: *`number`*): [Vector](vector.md)

*Defined in [geom/Vector.ts:6](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Vector.ts#L6)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` x | `number` |
| `Optional` y | `number` |

**Returns:** [Vector](vector.md)

___

## Properties

<a id="x"></a>

###  x

**● x**: *`number`*

*Defined in [geom/Vector.ts:5](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Vector.ts#L5)*

___
<a id="y"></a>

###  y

**● y**: *`number`*

*Defined in [geom/Vector.ts:6](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Vector.ts#L6)*

___
<a id="_pool"></a>

### `<Static>``<Protected>` $pool

**● $pool**: *`Array`<[Vector](vector.md)>* =  []

*Defined in [geom/Vector.ts:110](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Vector.ts#L110)*

___

## Accessors

<a id="angle"></a>

###  angle

getangle(): `number`

*Defined in [geom/Vector.ts:16](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Vector.ts#L16)*

**Returns:** `number`

___
<a id="length"></a>

###  length

getlength(): `number`

*Defined in [geom/Vector.ts:12](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Vector.ts#L12)*

**Returns:** `number`

___

## Methods

<a id="add"></a>

###  add

▸ **add**(v: *[Vector](vector.md)*): `this`

▸ **add**(x: *`number`*, y: *`number`*): `this`

*Defined in [geom/Vector.ts:26](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Vector.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [Vector](vector.md) |

**Returns:** `this`

*Defined in [geom/Vector.ts:27](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Vector.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `this`

___
<a id="distance"></a>

###  distance

▸ **distance**(v: *[Vector](vector.md)*): `number`

*Defined in [geom/Vector.ts:97](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Vector.ts#L97)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [Vector](vector.md) |

**Returns:** `number`

___
<a id="dotproduct"></a>

###  dotProduct

▸ **dotProduct**(v: *[Vector](vector.md)*): `number`

▸ **dotProduct**(x: *`number`*, y: *`number`*): `number`

*Defined in [geom/Vector.ts:52](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Vector.ts#L52)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [Vector](vector.md) |

**Returns:** `number`

*Defined in [geom/Vector.ts:53](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Vector.ts#L53)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `number`

___
<a id="equal"></a>

###  equal

▸ **equal**(v: *[Vector](vector.md)*): `boolean`

*Defined in [geom/Vector.ts:101](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Vector.ts#L101)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [Vector](vector.md) |

**Returns:** `boolean`

___
<a id="negate"></a>

###  negate

▸ **negate**(): `this`

*Defined in [geom/Vector.ts:69](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Vector.ts#L69)*

**Returns:** `this`

___
<a id="normalize"></a>

###  normalize

▸ **normalize**(): `this`

*Defined in [geom/Vector.ts:62](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Vector.ts#L62)*

**Returns:** `this`

___
<a id="release"></a>

###  release

▸ **release**(): `this`

*Defined in [geom/Vector.ts:105](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Vector.ts#L105)*

**Returns:** `this`

___
<a id="rotate"></a>

###  rotate

▸ **rotate**(angle: *`number`*): `this`

*Defined in [geom/Vector.ts:81](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Vector.ts#L81)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| angle | `number` |

**Returns:** `this`

___
<a id="scale"></a>

###  scale

▸ **scale**(x: *`number`*, y?: *`number`*): `this`

*Defined in [geom/Vector.ts:75](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Vector.ts#L75)*

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

*Defined in [geom/Vector.ts:20](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Vector.ts#L20)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `this`

___
<a id="subtract"></a>

###  subtract

▸ **subtract**(v: *[Vector](vector.md)*): `this`

▸ **subtract**(x: *`number`*, y: *`number`*): `this`

*Defined in [geom/Vector.ts:39](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Vector.ts#L39)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [Vector](vector.md) |

**Returns:** `this`

*Defined in [geom/Vector.ts:40](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Vector.ts#L40)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `this`

___
<a id="transform"></a>

###  transform

▸ **transform**(m: *[Matrix](matrix.md)*): [Vector](vector.md)

*Defined in [geom/Vector.ts:89](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Vector.ts#L89)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| m | [Matrix](matrix.md) |

**Returns:** [Vector](vector.md)

___
<a id="create"></a>

### `<Static>` create

▸ **create**(x?: *`number`*, y?: *`number`*): [Vector](vector.md)

*Defined in [geom/Vector.ts:112](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Vector.ts#L112)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` x | `number` |
| `Optional` y | `number` |

**Returns:** [Vector](vector.md)

___
<a id="recycle"></a>

### `<Static>` recycle

▸ **recycle**(v: *[Vector](vector.md)*): `void`

*Defined in [geom/Vector.ts:121](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Vector.ts#L121)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [Vector](vector.md) |

**Returns:** `void`

___

