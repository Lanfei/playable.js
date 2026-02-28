[**API Reference**](../README.md)

***

[API Reference](../README.md) / Vector

# Class: Vector

Defined in: [geom/Vector.ts:3](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Vector.ts#L3)

## Constructors

### Constructor

> `protected` **new Vector**(`x?`, `y?`): [`Vector`](../variables/default.md#vector)

Defined in: [geom/Vector.ts:8](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Vector.ts#L8)

#### Parameters

##### x?

`number`

##### y?

`number`

#### Returns

[`Vector`](../variables/default.md#vector)

## Properties

### x

> **x**: `number`

Defined in: [geom/Vector.ts:5](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Vector.ts#L5)

***

### y

> **y**: `number`

Defined in: [geom/Vector.ts:6](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Vector.ts#L6)

***

### $pool

> `protected` `readonly` `static` **$pool**: [`Vector`](../variables/default.md#vector)[] = `[]`

Defined in: [geom/Vector.ts:110](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Vector.ts#L110)

## Accessors

### angle

#### Get Signature

> **get** **angle**(): `number`

Defined in: [geom/Vector.ts:16](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Vector.ts#L16)

##### Returns

`number`

***

### length

#### Get Signature

> **get** **length**(): `number`

Defined in: [geom/Vector.ts:12](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Vector.ts#L12)

##### Returns

`number`

## Methods

### add()

#### Call Signature

> **add**(`v`): `this`

Defined in: [geom/Vector.ts:26](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Vector.ts#L26)

##### Parameters

###### v

[`Vector`](../variables/default.md#vector)

##### Returns

`this`

#### Call Signature

> **add**(`x`, `y`): `this`

Defined in: [geom/Vector.ts:27](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Vector.ts#L27)

##### Parameters

###### x

`number`

###### y

`number`

##### Returns

`this`

***

### distance()

> **distance**(`v`): `number`

Defined in: [geom/Vector.ts:97](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Vector.ts#L97)

#### Parameters

##### v

[`Vector`](../variables/default.md#vector)

#### Returns

`number`

***

### dotProduct()

#### Call Signature

> **dotProduct**(`v`): `number`

Defined in: [geom/Vector.ts:52](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Vector.ts#L52)

##### Parameters

###### v

[`Vector`](../variables/default.md#vector)

##### Returns

`number`

#### Call Signature

> **dotProduct**(`x`, `y`): `number`

Defined in: [geom/Vector.ts:53](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Vector.ts#L53)

##### Parameters

###### x

`number`

###### y

`number`

##### Returns

`number`

***

### equal()

> **equal**(`v`): `boolean`

Defined in: [geom/Vector.ts:101](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Vector.ts#L101)

#### Parameters

##### v

[`Vector`](../variables/default.md#vector)

#### Returns

`boolean`

***

### negate()

> **negate**(): `this`

Defined in: [geom/Vector.ts:69](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Vector.ts#L69)

#### Returns

`this`

***

### normalize()

> **normalize**(): `this`

Defined in: [geom/Vector.ts:62](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Vector.ts#L62)

#### Returns

`this`

***

### release()

> **release**(): `this`

Defined in: [geom/Vector.ts:105](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Vector.ts#L105)

#### Returns

`this`

***

### rotate()

> **rotate**(`angle`): `this`

Defined in: [geom/Vector.ts:81](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Vector.ts#L81)

#### Parameters

##### angle

`number`

#### Returns

`this`

***

### scale()

> **scale**(`x`, `y?`): `this`

Defined in: [geom/Vector.ts:75](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Vector.ts#L75)

#### Parameters

##### x

`number`

##### y?

`number`

#### Returns

`this`

***

### set()

> **set**(`x`, `y`): `this`

Defined in: [geom/Vector.ts:20](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Vector.ts#L20)

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`this`

***

### subtract()

#### Call Signature

> **subtract**(`v`): `this`

Defined in: [geom/Vector.ts:39](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Vector.ts#L39)

##### Parameters

###### v

[`Vector`](../variables/default.md#vector)

##### Returns

`this`

#### Call Signature

> **subtract**(`x`, `y`): `this`

Defined in: [geom/Vector.ts:40](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Vector.ts#L40)

##### Parameters

###### x

`number`

###### y

`number`

##### Returns

`this`

***

### transform()

> **transform**(`m`): [`Vector`](../variables/default.md#vector)

Defined in: [geom/Vector.ts:89](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Vector.ts#L89)

#### Parameters

##### m

[`Matrix`](../variables/default.md#matrix)

#### Returns

[`Vector`](../variables/default.md#vector)

***

### create()

> `static` **create**(`x?`, `y?`): [`Vector`](../variables/default.md#vector)

Defined in: [geom/Vector.ts:112](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Vector.ts#L112)

#### Parameters

##### x?

`number`

##### y?

`number`

#### Returns

[`Vector`](../variables/default.md#vector)

***

### recycle()

> `static` **recycle**(`v`): `void`

Defined in: [geom/Vector.ts:121](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Vector.ts#L121)

#### Parameters

##### v

[`Vector`](../variables/default.md#vector)

#### Returns

`void`
