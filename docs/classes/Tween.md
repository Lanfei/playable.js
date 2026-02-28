[**API Reference**](../README.md)

***

[API Reference](../README.md) / Tween

# Class: Tween

Defined in: [tween/Tween.ts:6](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L6)

## Extends

- [`EventEmitter`](../variables/default.md#eventemitter)

## Constructors

### Constructor

> `protected` **new Tween**(`target`, `option?`): [`Tween`](../variables/default.md#tween)

Defined in: [tween/Tween.ts:20](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L20)

#### Parameters

##### target

[`Layer`](../variables/default.md#layer)

##### option?

[`TweenOption`](../interfaces/TweenOption.md)

#### Returns

[`Tween`](../variables/default.md#tween)

#### Overrides

[`EventEmitter`](../variables/default.md#eventemitter).[`constructor`](../variables/default.md#eventemitterconstructor)

## Properties

### $boundOnEnterFrame()

> `protected` **$boundOnEnterFrame**: () => `void`

Defined in: [tween/Tween.ts:18](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L18)

#### Returns

`void`

***

### $emittingType

> `protected` **$emittingType**: `string` = `null`

Defined in: [event/EventEmitter.ts:6](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L6)

#### Inherited from

[`EventEmitter`](../variables/default.md#eventemitter).[`$emittingType`](../variables/default.md#eventemitteremittingtype)

***

### $events

> `protected` **$events**: `Object` = `{}`

Defined in: [event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L5)

#### Inherited from

[`EventEmitter`](../variables/default.md#eventemitter).[`$events`](../variables/default.md#eventemitterevents)

***

### $paused

> `protected` **$paused**: `boolean` = `true`

Defined in: [tween/Tween.ts:11](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L11)

***

### $removedListeners

> `protected` **$removedListeners**: [`Listener`](../type-aliases/Listener.md)[] = `[]`

Defined in: [event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L7)

#### Inherited from

[`EventEmitter`](../variables/default.md#eventemitter).[`$removedListeners`](../variables/default.md#eventemitterremovedlisteners)

***

### $shouldSaveProps

> `protected` **$shouldSaveProps**: `boolean` = `true`

Defined in: [tween/Tween.ts:17](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L17)

***

### $stepIndex

> `protected` **$stepIndex**: `number` = `0`

Defined in: [tween/Tween.ts:13](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L13)

***

### $stepPosition

> `protected` **$stepPosition**: `number` = `0`

Defined in: [tween/Tween.ts:14](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L14)

***

### $stepProps

> `protected` **$stepProps**: `Object`[] = `[]`

Defined in: [tween/Tween.ts:16](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L16)

***

### $steps

> `protected` **$steps**: [`TweenStep`](../interfaces/TweenStep.md)[] = `[]`

Defined in: [tween/Tween.ts:15](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L15)

***

### $stopped

> `protected` **$stopped**: `boolean` = `true`

Defined in: [tween/Tween.ts:12](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L12)

***

### $target

> `protected` **$target**: [`Layer`](../variables/default.md#layer) = `null`

Defined in: [tween/Tween.ts:10](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L10)

***

### loop

> **loop**: `boolean` = `false`

Defined in: [tween/Tween.ts:8](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L8)

***

### $tweens

> `protected` `readonly` `static` **$tweens**: [`Tween`](../variables/default.md#tween)[] = `[]`

Defined in: [tween/Tween.ts:181](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L181)

## Accessors

### paused

#### Get Signature

> **get** **paused**(): `boolean`

Defined in: [tween/Tween.ts:27](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L27)

##### Returns

`boolean`

***

### stopped

#### Get Signature

> **get** **stopped**(): `boolean`

Defined in: [tween/Tween.ts:31](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L31)

##### Returns

`boolean`

## Methods

### $easeProps()

> `protected` **$easeProps**(`stepIndex`, `props`, `position`, `duration`, `ease`): `void`

Defined in: [tween/Tween.ts:158](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L158)

#### Parameters

##### stepIndex

`number`

##### props

`Object`

##### position

`number`

##### duration

`number`

##### ease

`Function`

#### Returns

`void`

***

### $nextFrame()

> `protected` **$nextFrame**(`dt`): `void`

Defined in: [tween/Tween.ts:106](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L106)

#### Parameters

##### dt

`number`

#### Returns

`void`

***

### $onEnterFrame()

> `protected` **$onEnterFrame**(`e`): `void`

Defined in: [tween/Tween.ts:102](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L102)

#### Parameters

##### e

[`Event`](../variables/default.md#event)

#### Returns

`void`

***

### $saveOriginalProps()

> `protected` **$saveOriginalProps**(`stepIndex`, `props`): `void`

Defined in: [tween/Tween.ts:148](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L148)

#### Parameters

##### stepIndex

`number`

##### props

`Object`

#### Returns

`void`

***

### $setProps()

> `protected` **$setProps**(`props`): `void`

Defined in: [tween/Tween.ts:174](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L174)

#### Parameters

##### props

`Object`

#### Returns

`void`

***

### call()

> **call**(`callback`): `this`

Defined in: [tween/Tween.ts:61](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L61)

#### Parameters

##### callback

`Function`

#### Returns

`this`

***

### emit()

#### Call Signature

> **emit**(`event`): `boolean`

Defined in: [event/EventEmitter.ts:42](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L42)

##### Parameters

###### event

[`Event`](../variables/default.md#event)

##### Returns

`boolean`

##### Inherited from

[`EventEmitter`](../variables/default.md#eventemitter).[`emit`](../variables/default.md#eventemitteremit)

#### Call Signature

> **emit**(`type`, ...`args`): `boolean`

Defined in: [event/EventEmitter.ts:43](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L43)

##### Parameters

###### type

`string`

###### args

...`any`[]

##### Returns

`boolean`

##### Inherited from

[`EventEmitter`](../variables/default.md#eventemitter).[`emit`](../variables/default.md#eventemitteremit)

***

### hasEventListener()

> **hasEventListener**(`type`): `boolean`

Defined in: [event/EventEmitter.ts:80](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L80)

#### Parameters

##### type

`string`

#### Returns

`boolean`

#### Inherited from

[`EventEmitter`](../variables/default.md#eventemitter).[`hasEventListener`](../variables/default.md#eventemitterhaseventlistener)

***

### off()

> **off**(`type`, `listener?`): `this`

Defined in: [event/EventEmitter.ts:16](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L16)

#### Parameters

##### type

`string`

##### listener?

[`Listener`](../type-aliases/Listener.md)

#### Returns

`this`

#### Inherited from

[`EventEmitter`](../variables/default.md#eventemitter).[`off`](../variables/default.md#eventemitteroff)

***

### on()

> **on**(`type`, `listener`): `this`

Defined in: [event/EventEmitter.ts:9](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L9)

#### Parameters

##### type

`string`

##### listener

[`Listener`](../type-aliases/Listener.md)

#### Returns

`this`

#### Inherited from

[`EventEmitter`](../variables/default.md#eventemitter).[`on`](../variables/default.md#eventemitteron)

***

### once()

> **once**(`type`, `listener`): `this`

Defined in: [event/EventEmitter.ts:33](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L33)

#### Parameters

##### type

`string`

##### listener

[`Listener`](../type-aliases/Listener.md)

#### Returns

`this`

#### Inherited from

[`EventEmitter`](../variables/default.md#eventemitter).[`once`](../variables/default.md#eventemitteronce)

***

### pause()

> **pause**(): `this`

Defined in: [tween/Tween.ts:77](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L77)

#### Returns

`this`

***

### play()

> **play**(): `this`

Defined in: [tween/Tween.ts:69](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L69)

#### Returns

`this`

***

### removeAllListeners()

> **removeAllListeners**(): `this`

Defined in: [event/EventEmitter.ts:85](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/event/EventEmitter.ts#L85)

#### Returns

`this`

#### Inherited from

[`EventEmitter`](../variables/default.md#eventemitter).[`removeAllListeners`](../variables/default.md#eventemitterremovealllisteners)

***

### resume()

> **resume**(): `this`

Defined in: [tween/Tween.ts:83](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L83)

#### Returns

`this`

***

### set()

> **set**(`props`): `this`

Defined in: [tween/Tween.ts:35](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L35)

#### Parameters

##### props

`Object`

#### Returns

`this`

***

### stop()

> **stop**(): `this`

Defined in: [tween/Tween.ts:92](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L92)

#### Returns

`this`

***

### to()

> **to**(`props`, `duration`, `ease?`): `this`

Defined in: [tween/Tween.ts:43](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L43)

#### Parameters

##### props

`Object`

##### duration

`number`

##### ease?

`Function`

#### Returns

`this`

***

### wait()

> **wait**(`duration`): `this`

Defined in: [tween/Tween.ts:53](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L53)

#### Parameters

##### duration

`number`

#### Returns

`this`

***

### get()

> `static` **get**(`target`, `option?`): [`Tween`](../variables/default.md#tween)

Defined in: [tween/Tween.ts:183](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L183)

#### Parameters

##### target

[`Layer`](../variables/default.md#layer)

##### option?

###### loop?

`boolean`

#### Returns

[`Tween`](../variables/default.md#tween)

***

### pauseTweens()

> `static` **pauseTweens**(`target`): `void`

Defined in: [tween/Tween.ts:187](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L187)

#### Parameters

##### target

[`Layer`](../variables/default.md#layer)

#### Returns

`void`

***

### removeAllTweens()

> `static` **removeAllTweens**(): `void`

Defined in: [tween/Tween.ts:215](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L215)

#### Returns

`void`

***

### removeTweens()

> `static` **removeTweens**(`target`): `void`

Defined in: [tween/Tween.ts:205](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L205)

#### Parameters

##### target

[`Layer`](../variables/default.md#layer)

#### Returns

`void`

***

### resumeTweens()

> `static` **resumeTweens**(`target`): `void`

Defined in: [tween/Tween.ts:196](https://github.com/Lanfei/playable.js/blob/004dd2949dc30ea042ea81ee39afc5c0553fde31/src/tween/Tween.ts#L196)

#### Parameters

##### target

[`Layer`](../variables/default.md#layer)

#### Returns

`void`
