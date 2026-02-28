[**API Reference**](../README.md)

***

[API Reference](../README.md) / Rectangle

# Class: Rectangle

Defined in: [geom/Rectangle.ts:3](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L3)

## Constructors

### Constructor

> `protected` **new Rectangle**(`x?`, `y?`, `width?`, `height?`): [`Rectangle`](../variables/default.md#rectangle)

Defined in: [geom/Rectangle.ts:10](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L10)

#### Parameters

##### x?

`number`

##### y?

`number`

##### width?

`number`

##### height?

`number`

#### Returns

[`Rectangle`](../variables/default.md#rectangle)

## Properties

### height

> **height**: `number`

Defined in: [geom/Rectangle.ts:8](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L8)

***

### width

> **width**: `number`

Defined in: [geom/Rectangle.ts:7](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L7)

***

### x

> **x**: `number`

Defined in: [geom/Rectangle.ts:5](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L5)

***

### y

> **y**: `number`

Defined in: [geom/Rectangle.ts:6](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L6)

***

### $pool

> `protected` `readonly` `static` **$pool**: [`Rectangle`](../variables/default.md#rectangle)[] = `[]`

Defined in: [geom/Rectangle.ts:92](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L92)

## Accessors

### bottom

#### Get Signature

> **get** **bottom**(): `number`

Defined in: [geom/Rectangle.ts:23](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L23)

##### Returns

`number`

#### Set Signature

> **set** **bottom**(`bottom`): `void`

Defined in: [geom/Rectangle.ts:27](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L27)

##### Parameters

###### bottom

`number`

##### Returns

`void`

***

### bottomRight

#### Get Signature

> **get** **bottomRight**(): [`Vector`](../variables/default.md#vector)

Defined in: [geom/Rectangle.ts:57](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L57)

##### Returns

[`Vector`](../variables/default.md#vector)

#### Set Signature

> **set** **bottomRight**(`v`): `void`

Defined in: [geom/Rectangle.ts:61](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L61)

##### Parameters

###### v

[`Vector`](../variables/default.md#vector)

##### Returns

`void`

***

### left

#### Get Signature

> **get** **left**(): `number`

Defined in: [geom/Rectangle.ts:31](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L31)

##### Returns

`number`

#### Set Signature

> **set** **left**(`left`): `void`

Defined in: [geom/Rectangle.ts:35](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L35)

##### Parameters

###### left

`number`

##### Returns

`void`

***

### right

#### Get Signature

> **get** **right**(): `number`

Defined in: [geom/Rectangle.ts:40](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L40)

##### Returns

`number`

#### Set Signature

> **set** **right**(`right`): `void`

Defined in: [geom/Rectangle.ts:44](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L44)

##### Parameters

###### right

`number`

##### Returns

`void`

***

### top

#### Get Signature

> **get** **top**(): `number`

Defined in: [geom/Rectangle.ts:14](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L14)

##### Returns

`number`

#### Set Signature

> **set** **top**(`top`): `void`

Defined in: [geom/Rectangle.ts:18](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L18)

##### Parameters

###### top

`number`

##### Returns

`void`

***

### topLeft

#### Get Signature

> **get** **topLeft**(): [`Vector`](../variables/default.md#vector)

Defined in: [geom/Rectangle.ts:48](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L48)

##### Returns

[`Vector`](../variables/default.md#vector)

#### Set Signature

> **set** **topLeft**(`v`): `void`

Defined in: [geom/Rectangle.ts:52](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L52)

##### Parameters

###### v

[`Vector`](../variables/default.md#vector)

##### Returns

`void`

## Methods

### contains()

#### Call Signature

> **contains**(`v`): `boolean`

Defined in: [geom/Rectangle.ts:74](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L74)

##### Parameters

###### v

[`Vector`](../variables/default.md#vector)

##### Returns

`boolean`

#### Call Signature

> **contains**(`x`, `y`): `boolean`

Defined in: [geom/Rectangle.ts:75](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L75)

##### Parameters

###### x

`number`

###### y

`number`

##### Returns

`boolean`

***

### equal()

> **equal**(`r`): `boolean`

Defined in: [geom/Rectangle.ts:83](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L83)

#### Parameters

##### r

[`Rectangle`](../variables/default.md#rectangle)

#### Returns

`boolean`

***

### release()

> **release**(): `void`

Defined in: [geom/Rectangle.ts:88](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L88)

#### Returns

`void`

***

### set()

> **set**(`x`, `y`, `width`, `height`): `this`

Defined in: [geom/Rectangle.ts:66](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L66)

#### Parameters

##### x

`number`

##### y

`number`

##### width

`number`

##### height

`number`

#### Returns

`this`

***

### create()

> `static` **create**(`x?`, `y?`, `width?`, `height?`): [`Rectangle`](../variables/default.md#rectangle)

Defined in: [geom/Rectangle.ts:94](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L94)

#### Parameters

##### x?

`number`

##### y?

`number`

##### width?

`number`

##### height?

`number`

#### Returns

[`Rectangle`](../variables/default.md#rectangle)

***

### recycle()

> `static` **recycle**(`r`): `void`

Defined in: [geom/Rectangle.ts:103](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Rectangle.ts#L103)

#### Parameters

##### r

[`Rectangle`](../variables/default.md#rectangle)

#### Returns

`void`
