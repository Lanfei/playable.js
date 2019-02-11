[API Reference](../README.md) > [Rectangle](../classes/rectangle.md)

# Class: Rectangle

## Hierarchy

**Rectangle**

## Index

### Constructors

* [constructor](rectangle.md#constructor)

### Properties

* [height](rectangle.md#height)
* [width](rectangle.md#width)
* [x](rectangle.md#x)
* [y](rectangle.md#y)
* [$pool](rectangle.md#_pool)

### Accessors

* [bottom](rectangle.md#bottom)
* [bottomRight](rectangle.md#bottomright)
* [left](rectangle.md#left)
* [right](rectangle.md#right)
* [top](rectangle.md#top)
* [topLeft](rectangle.md#topleft)

### Methods

* [contains](rectangle.md#contains)
* [equal](rectangle.md#equal)
* [release](rectangle.md#release)
* [set](rectangle.md#set)
* [create](rectangle.md#create)
* [recycle](rectangle.md#recycle)

---

## Constructors

<a id="constructor"></a>

### `<Protected>` constructor

⊕ **new Rectangle**(x?: *`number`*, y?: *`number`*, width?: *`number`*, height?: *`number`*): [Rectangle](rectangle.md)

*Defined in [geom/Rectangle.ts:8](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Rectangle.ts#L8)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` x | `number` |
| `Optional` y | `number` |
| `Optional` width | `number` |
| `Optional` height | `number` |

**Returns:** [Rectangle](rectangle.md)

___

## Properties

<a id="height"></a>

###  height

**● height**: *`number`*

*Defined in [geom/Rectangle.ts:8](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Rectangle.ts#L8)*

___
<a id="width"></a>

###  width

**● width**: *`number`*

*Defined in [geom/Rectangle.ts:7](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Rectangle.ts#L7)*

___
<a id="x"></a>

###  x

**● x**: *`number`*

*Defined in [geom/Rectangle.ts:5](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Rectangle.ts#L5)*

___
<a id="y"></a>

###  y

**● y**: *`number`*

*Defined in [geom/Rectangle.ts:6](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Rectangle.ts#L6)*

___
<a id="_pool"></a>

### `<Static>``<Protected>` $pool

**● $pool**: *`Array`<[Rectangle](rectangle.md)>* =  []

*Defined in [geom/Rectangle.ts:92](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Rectangle.ts#L92)*

___

## Accessors

<a id="bottom"></a>

###  bottom

getbottom(): `number`setbottom(bottom: *`number`*): `void`

*Defined in [geom/Rectangle.ts:23](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Rectangle.ts#L23)*

**Returns:** `number`

*Defined in [geom/Rectangle.ts:27](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Rectangle.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| bottom | `number` |

**Returns:** `void`

___
<a id="bottomright"></a>

###  bottomRight

getbottomRight(): [Vector](vector.md)setbottomRight(v: *[Vector](vector.md)*): `void`

*Defined in [geom/Rectangle.ts:57](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Rectangle.ts#L57)*

**Returns:** [Vector](vector.md)

*Defined in [geom/Rectangle.ts:61](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Rectangle.ts#L61)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [Vector](vector.md) |

**Returns:** `void`

___
<a id="left"></a>

###  left

getleft(): `number`setleft(left: *`number`*): `void`

*Defined in [geom/Rectangle.ts:31](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Rectangle.ts#L31)*

**Returns:** `number`

*Defined in [geom/Rectangle.ts:35](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Rectangle.ts#L35)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| left | `number` |

**Returns:** `void`

___
<a id="right"></a>

###  right

getright(): `number`setright(right: *`number`*): `void`

*Defined in [geom/Rectangle.ts:40](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Rectangle.ts#L40)*

**Returns:** `number`

*Defined in [geom/Rectangle.ts:44](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Rectangle.ts#L44)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| right | `number` |

**Returns:** `void`

___
<a id="top"></a>

###  top

gettop(): `number`settop(top: *`number`*): `void`

*Defined in [geom/Rectangle.ts:14](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Rectangle.ts#L14)*

**Returns:** `number`

*Defined in [geom/Rectangle.ts:18](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Rectangle.ts#L18)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| top | `number` |

**Returns:** `void`

___
<a id="topleft"></a>

###  topLeft

gettopLeft(): [Vector](vector.md)settopLeft(v: *[Vector](vector.md)*): `void`

*Defined in [geom/Rectangle.ts:48](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Rectangle.ts#L48)*

**Returns:** [Vector](vector.md)

*Defined in [geom/Rectangle.ts:52](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Rectangle.ts#L52)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [Vector](vector.md) |

**Returns:** `void`

___

## Methods

<a id="contains"></a>

###  contains

▸ **contains**(v: *[Vector](vector.md)*): `boolean`

▸ **contains**(x: *`number`*, y: *`number`*): `boolean`

*Defined in [geom/Rectangle.ts:74](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Rectangle.ts#L74)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [Vector](vector.md) |

**Returns:** `boolean`

*Defined in [geom/Rectangle.ts:75](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Rectangle.ts#L75)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `boolean`

___
<a id="equal"></a>

###  equal

▸ **equal**(r: *[Rectangle](rectangle.md)*): `boolean`

*Defined in [geom/Rectangle.ts:83](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Rectangle.ts#L83)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| r | [Rectangle](rectangle.md) |

**Returns:** `boolean`

___
<a id="release"></a>

###  release

▸ **release**(): `void`

*Defined in [geom/Rectangle.ts:88](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Rectangle.ts#L88)*

**Returns:** `void`

___
<a id="set"></a>

###  set

▸ **set**(x: *`number`*, y: *`number`*, width: *`number`*, height: *`number`*): `this`

*Defined in [geom/Rectangle.ts:66](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Rectangle.ts#L66)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |
| width | `number` |
| height | `number` |

**Returns:** `this`

___
<a id="create"></a>

### `<Static>` create

▸ **create**(x?: *`number`*, y?: *`number`*, width?: *`number`*, height?: *`number`*): [Rectangle](rectangle.md)

*Defined in [geom/Rectangle.ts:94](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Rectangle.ts#L94)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` x | `number` |
| `Optional` y | `number` |
| `Optional` width | `number` |
| `Optional` height | `number` |

**Returns:** [Rectangle](rectangle.md)

___
<a id="recycle"></a>

### `<Static>` recycle

▸ **recycle**(r: *[Rectangle](rectangle.md)*): `void`

*Defined in [geom/Rectangle.ts:103](https://github.com/Lanfei/playable.js/blob/877c13c/src/geom/Rectangle.ts#L103)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| r | [Rectangle](rectangle.md) |

**Returns:** `void`

___

