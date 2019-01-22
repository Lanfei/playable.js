[playable.js](../README.md) > ["geom/Rectangle"](../modules/_geom_rectangle_.md) > [Rectangle](../classes/_geom_rectangle_.rectangle.md)

# Class: Rectangle

## Hierarchy

**Rectangle**

## Index

### Constructors

* [constructor](_geom_rectangle_.rectangle.md#constructor)

### Properties

* [height](_geom_rectangle_.rectangle.md#height)
* [width](_geom_rectangle_.rectangle.md#width)
* [x](_geom_rectangle_.rectangle.md#x)
* [y](_geom_rectangle_.rectangle.md#y)
* [$pool](_geom_rectangle_.rectangle.md#_pool)

### Accessors

* [bottom](_geom_rectangle_.rectangle.md#bottom)
* [bottomRight](_geom_rectangle_.rectangle.md#bottomright)
* [left](_geom_rectangle_.rectangle.md#left)
* [right](_geom_rectangle_.rectangle.md#right)
* [top](_geom_rectangle_.rectangle.md#top)
* [topLeft](_geom_rectangle_.rectangle.md#topleft)

### Methods

* [contains](_geom_rectangle_.rectangle.md#contains)
* [release](_geom_rectangle_.rectangle.md#release)
* [set](_geom_rectangle_.rectangle.md#set)
* [create](_geom_rectangle_.rectangle.md#create)
* [recycle](_geom_rectangle_.rectangle.md#recycle)

---

## Constructors

<a id="constructor"></a>

### `<Private>` constructor

⊕ **new Rectangle**(x?: *`number`*, y?: *`number`*, width?: *`number`*, height?: *`number`*): [Rectangle](_geom_rectangle_.rectangle.md)

*Defined in [geom/Rectangle.ts:8](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Rectangle.ts#L8)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` x | `number` |
| `Optional` y | `number` |
| `Optional` width | `number` |
| `Optional` height | `number` |

**Returns:** [Rectangle](_geom_rectangle_.rectangle.md)

___

## Properties

<a id="height"></a>

###  height

**● height**: *`number`*

*Defined in [geom/Rectangle.ts:8](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Rectangle.ts#L8)*

___
<a id="width"></a>

###  width

**● width**: *`number`*

*Defined in [geom/Rectangle.ts:7](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Rectangle.ts#L7)*

___
<a id="x"></a>

###  x

**● x**: *`number`*

*Defined in [geom/Rectangle.ts:5](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Rectangle.ts#L5)*

___
<a id="y"></a>

###  y

**● y**: *`number`*

*Defined in [geom/Rectangle.ts:6](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Rectangle.ts#L6)*

___
<a id="_pool"></a>

### `<Static>``<Private>` $pool

**● $pool**: *`Array`<[Rectangle](_geom_rectangle_.rectangle.md)>* =  []

*Defined in [geom/Rectangle.ts:83](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Rectangle.ts#L83)*

___

## Accessors

<a id="bottom"></a>

###  bottom

getbottom(): `number`setbottom(bottom: *`number`*): `void`

*Defined in [geom/Rectangle.ts:31](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Rectangle.ts#L31)*

**Returns:** `number`

*Defined in [geom/Rectangle.ts:35](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Rectangle.ts#L35)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| bottom | `number` |

**Returns:** `void`

___
<a id="bottomright"></a>

###  bottomRight

getbottomRight(): [Vector](_geom_vector_.vector.md)setbottomRight(v: *[Vector](_geom_vector_.vector.md)*): `void`

*Defined in [geom/Rectangle.ts:65](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Rectangle.ts#L65)*

**Returns:** [Vector](_geom_vector_.vector.md)

*Defined in [geom/Rectangle.ts:69](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Rectangle.ts#L69)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [Vector](_geom_vector_.vector.md) |

**Returns:** `void`

___
<a id="left"></a>

###  left

getleft(): `number`setleft(left: *`number`*): `void`

*Defined in [geom/Rectangle.ts:39](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Rectangle.ts#L39)*

**Returns:** `number`

*Defined in [geom/Rectangle.ts:43](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Rectangle.ts#L43)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| left | `number` |

**Returns:** `void`

___
<a id="right"></a>

###  right

getright(): `number`setright(right: *`number`*): `void`

*Defined in [geom/Rectangle.ts:48](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Rectangle.ts#L48)*

**Returns:** `number`

*Defined in [geom/Rectangle.ts:52](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Rectangle.ts#L52)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| right | `number` |

**Returns:** `void`

___
<a id="top"></a>

###  top

gettop(): `number`settop(top: *`number`*): `void`

*Defined in [geom/Rectangle.ts:22](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Rectangle.ts#L22)*

**Returns:** `number`

*Defined in [geom/Rectangle.ts:26](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Rectangle.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| top | `number` |

**Returns:** `void`

___
<a id="topleft"></a>

###  topLeft

gettopLeft(): [Vector](_geom_vector_.vector.md)settopLeft(v: *[Vector](_geom_vector_.vector.md)*): `void`

*Defined in [geom/Rectangle.ts:56](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Rectangle.ts#L56)*

**Returns:** [Vector](_geom_vector_.vector.md)

*Defined in [geom/Rectangle.ts:60](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Rectangle.ts#L60)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [Vector](_geom_vector_.vector.md) |

**Returns:** `void`

___

## Methods

<a id="contains"></a>

###  contains

▸ **contains**(x: *`number`*, y: *`number`*): `boolean`

*Defined in [geom/Rectangle.ts:74](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Rectangle.ts#L74)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `boolean`

___
<a id="release"></a>

###  release

▸ **release**(): `void`

*Defined in [geom/Rectangle.ts:79](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Rectangle.ts#L79)*

**Returns:** `void`

___
<a id="set"></a>

###  set

▸ **set**(x: *`number`*, y: *`number`*, width: *`number`*, height: *`number`*): `this`

*Defined in [geom/Rectangle.ts:14](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Rectangle.ts#L14)*

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

▸ **create**(x?: *`number`*, y?: *`number`*, width?: *`number`*, height?: *`number`*): [Rectangle](_geom_rectangle_.rectangle.md)

*Defined in [geom/Rectangle.ts:85](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Rectangle.ts#L85)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` x | `number` |
| `Optional` y | `number` |
| `Optional` width | `number` |
| `Optional` height | `number` |

**Returns:** [Rectangle](_geom_rectangle_.rectangle.md)

___
<a id="recycle"></a>

### `<Static>` recycle

▸ **recycle**(r: *[Rectangle](_geom_rectangle_.rectangle.md)*): `void`

*Defined in [geom/Rectangle.ts:94](https://github.com/Lanfei/playable.js/blob/9a36445/src/geom/Rectangle.ts#L94)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| r | [Rectangle](_geom_rectangle_.rectangle.md) |

**Returns:** `void`

___

