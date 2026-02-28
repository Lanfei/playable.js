[**API Reference**](../README.md)

***

[API Reference](../README.md) / Matrix

# Class: Matrix

Defined in: [geom/Matrix.ts:10](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Matrix.ts#L10)

```
            {a  b  0}
(x, y, 1) * {c  d  0} = (ax + cy + tx, bx + dy + ty, 1)
            {tx ty 1}
```

## Constructors

### Constructor

> `protected` **new Matrix**(`a?`, `b?`, `c?`, `d?`, `tx?`, `ty?`): [`Matrix`](../variables/default.md#matrix)

Defined in: [geom/Matrix.ts:19](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Matrix.ts#L19)

#### Parameters

##### a?

`number`

##### b?

`number`

##### c?

`number`

##### d?

`number`

##### tx?

`number`

##### ty?

`number`

#### Returns

[`Matrix`](../variables/default.md#matrix)

## Properties

### a

> **a**: `number`

Defined in: [geom/Matrix.ts:12](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Matrix.ts#L12)

***

### b

> **b**: `number`

Defined in: [geom/Matrix.ts:13](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Matrix.ts#L13)

***

### c

> **c**: `number`

Defined in: [geom/Matrix.ts:14](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Matrix.ts#L14)

***

### d

> **d**: `number`

Defined in: [geom/Matrix.ts:15](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Matrix.ts#L15)

***

### tx

> **tx**: `number`

Defined in: [geom/Matrix.ts:16](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Matrix.ts#L16)

***

### ty

> **ty**: `number`

Defined in: [geom/Matrix.ts:17](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Matrix.ts#L17)

***

### $pool

> `protected` `readonly` `static` **$pool**: [`Matrix`](../variables/default.md#matrix)[] = `[]`

Defined in: [geom/Matrix.ts:134](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Matrix.ts#L134)

## Methods

### append()

#### Call Signature

> **append**(`m`): `this`

Defined in: [geom/Matrix.ts:79](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Matrix.ts#L79)

##### Parameters

###### m

[`Matrix`](../variables/default.md#matrix)

##### Returns

`this`

#### Call Signature

> **append**(`a`, `b`, `c`, `d`, `tx`, `ty`): `this`

Defined in: [geom/Matrix.ts:80](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Matrix.ts#L80)

##### Parameters

###### a

`number`

###### b

`number`

###### c

`number`

###### d

`number`

###### tx

`number`

###### ty

`number`

##### Returns

`this`

***

### equal()

> **equal**(`m`): `boolean`

Defined in: [geom/Matrix.ts:123](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Matrix.ts#L123)

#### Parameters

##### m

[`Matrix`](../variables/default.md#matrix)

#### Returns

`boolean`

***

### identity()

> **identity**(): `this`

Defined in: [geom/Matrix.ts:37](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Matrix.ts#L37)

#### Returns

`this`

***

### invert()

> **invert**(): `this`

Defined in: [geom/Matrix.ts:41](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Matrix.ts#L41)

#### Returns

`this`

***

### prepend()

#### Call Signature

> **prepend**(`m`): `this`

Defined in: [geom/Matrix.ts:58](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Matrix.ts#L58)

##### Parameters

###### m

[`Matrix`](../variables/default.md#matrix)

##### Returns

`this`

#### Call Signature

> **prepend**(`a`, `b`, `c`, `d`, `tx`, `ty`): `this`

Defined in: [geom/Matrix.ts:59](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Matrix.ts#L59)

##### Parameters

###### a

`number`

###### b

`number`

###### c

`number`

###### d

`number`

###### tx

`number`

###### ty

`number`

##### Returns

`this`

***

### release()

> **release**(): `void`

Defined in: [geom/Matrix.ts:130](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Matrix.ts#L130)

#### Returns

`void`

***

### rotate()

> **rotate**(`angle`): `this`

Defined in: [geom/Matrix.ts:104](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Matrix.ts#L104)

#### Parameters

##### angle

`number`

#### Returns

`this`

***

### scale()

> **scale**(`x`, `y?`): `this`

Defined in: [geom/Matrix.ts:100](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Matrix.ts#L100)

#### Parameters

##### x

`number`

##### y?

`number`

#### Returns

`this`

***

### set()

> **set**(`a`, `b`, `c`, `d`, `tx`, `ty`): `this`

Defined in: [geom/Matrix.ts:27](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Matrix.ts#L27)

#### Parameters

##### a

`number`

##### b

`number`

##### c

`number`

##### d

`number`

##### tx

`number`

##### ty

`number`

#### Returns

`this`

***

### skew()

> **skew**(`skewX`, `skewY`): `this`

Defined in: [geom/Matrix.ts:110](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Matrix.ts#L110)

#### Parameters

##### skewX

`number`

##### skewY

`number`

#### Returns

`this`

***

### translate()

#### Call Signature

> **translate**(`v`): `this`

Defined in: [geom/Matrix.ts:114](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Matrix.ts#L114)

##### Parameters

###### v

[`Vector`](../variables/default.md#vector)

##### Returns

`this`

#### Call Signature

> **translate**(`x`, `y`): `this`

Defined in: [geom/Matrix.ts:115](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Matrix.ts#L115)

##### Parameters

###### x

`number`

###### y

`number`

##### Returns

`this`

***

### create()

> `static` **create**(`a?`, `b?`, `c?`, `d?`, `tx?`, `ty?`): [`Matrix`](../variables/default.md#matrix)

Defined in: [geom/Matrix.ts:136](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Matrix.ts#L136)

#### Parameters

##### a?

`number`

##### b?

`number`

##### c?

`number`

##### d?

`number`

##### tx?

`number`

##### ty?

`number`

#### Returns

[`Matrix`](../variables/default.md#matrix)

***

### recycle()

> `static` **recycle**(`m`): `void`

Defined in: [geom/Matrix.ts:152](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/geom/Matrix.ts#L152)

#### Parameters

##### m

[`Matrix`](../variables/default.md#matrix)

#### Returns

`void`
