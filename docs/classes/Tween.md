[API Reference](../README.md) / Tween

# Class: Tween

## Hierarchy

- [`EventEmitter`](../README.md#eventemitter)

  ↳ **`Tween`**

## Table of contents

### Constructors

- [constructor](Tween.md#constructor)

### Properties

- [$boundOnEnterFrame](Tween.md#$boundonenterframe)
- [$emittingType](Tween.md#$emittingtype)
- [$events](Tween.md#$events)
- [$paused](Tween.md#$paused)
- [$removedListeners](Tween.md#$removedlisteners)
- [$shouldSaveProps](Tween.md#$shouldsaveprops)
- [$stepIndex](Tween.md#$stepindex)
- [$stepPosition](Tween.md#$stepposition)
- [$stepProps](Tween.md#$stepprops)
- [$steps](Tween.md#$steps)
- [$stopped](Tween.md#$stopped)
- [$target](Tween.md#$target)
- [loop](Tween.md#loop)
- [$tweens](Tween.md#$tweens)

### Accessors

- [paused](Tween.md#paused)
- [stopped](Tween.md#stopped)

### Methods

- [$easeProps](Tween.md#$easeprops)
- [$nextFrame](Tween.md#$nextframe)
- [$onEnterFrame](Tween.md#$onenterframe)
- [$saveOriginalProps](Tween.md#$saveoriginalprops)
- [$setProps](Tween.md#$setprops)
- [call](Tween.md#call)
- [emit](Tween.md#emit)
- [hasEventListener](Tween.md#haseventlistener)
- [off](Tween.md#off)
- [on](Tween.md#on)
- [once](Tween.md#once)
- [pause](Tween.md#pause)
- [play](Tween.md#play)
- [removeAllListeners](Tween.md#removealllisteners)
- [resume](Tween.md#resume)
- [set](Tween.md#set)
- [stop](Tween.md#stop)
- [to](Tween.md#to)
- [wait](Tween.md#wait)
- [get](Tween.md#get)
- [pauseTweens](Tween.md#pausetweens)
- [removeAllTweens](Tween.md#removealltweens)
- [removeTweens](Tween.md#removetweens)
- [resumeTweens](Tween.md#resumetweens)

## Constructors

### constructor

• `Protected` **new Tween**(`target`, `option?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`Layer`](../README.md#layer) |
| `option?` | [`TweenOption`](../interfaces/TweenOption.md) |

#### Overrides

[EventEmitter](../README.md#eventemitter).[constructor](../README.md#constructor)

#### Defined in

[tween/Tween.ts:20](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L20)

## Properties

### $boundOnEnterFrame

• `Protected` **$boundOnEnterFrame**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[tween/Tween.ts:18](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L18)

___

### $emittingType

• `Protected` **$emittingType**: `string` = `null`

#### Inherited from

[EventEmitter](../README.md#eventemitter).[$emittingType](../README.md#$emittingtype)

#### Defined in

[event/EventEmitter.ts:6](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L6)

___

### $events

• `Protected` **$events**: `Object` = `{}`

#### Inherited from

[EventEmitter](../README.md#eventemitter).[$events](../README.md#$events)

#### Defined in

[event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L5)

___

### $paused

• `Protected` **$paused**: `boolean` = `true`

#### Defined in

[tween/Tween.ts:11](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L11)

___

### $removedListeners

• `Protected` **$removedListeners**: [`Listener`](../README.md#listener)[] = `[]`

#### Inherited from

[EventEmitter](../README.md#eventemitter).[$removedListeners](../README.md#$removedlisteners)

#### Defined in

[event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L7)

___

### $shouldSaveProps

• `Protected` **$shouldSaveProps**: `boolean` = `true`

#### Defined in

[tween/Tween.ts:17](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L17)

___

### $stepIndex

• `Protected` **$stepIndex**: `number` = `0`

#### Defined in

[tween/Tween.ts:13](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L13)

___

### $stepPosition

• `Protected` **$stepPosition**: `number` = `0`

#### Defined in

[tween/Tween.ts:14](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L14)

___

### $stepProps

• `Protected` **$stepProps**: `Object`[] = `[]`

#### Defined in

[tween/Tween.ts:16](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L16)

___

### $steps

• `Protected` **$steps**: [`TweenStep`](../interfaces/TweenStep.md)[] = `[]`

#### Defined in

[tween/Tween.ts:15](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L15)

___

### $stopped

• `Protected` **$stopped**: `boolean` = `true`

#### Defined in

[tween/Tween.ts:12](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L12)

___

### $target

• `Protected` **$target**: [`Layer`](../README.md#layer) = `null`

#### Defined in

[tween/Tween.ts:10](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L10)

___

### loop

• **loop**: `boolean` = `false`

#### Defined in

[tween/Tween.ts:8](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L8)

___

### $tweens

▪ `Static` `Protected` `Readonly` **$tweens**: [`Tween`](../README.md#tween)[] = `[]`

#### Defined in

[tween/Tween.ts:181](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L181)

## Accessors

### paused

• `get` **paused**(): `boolean`

#### Returns

`boolean`

#### Defined in

[tween/Tween.ts:27](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L27)

___

### stopped

• `get` **stopped**(): `boolean`

#### Returns

`boolean`

#### Defined in

[tween/Tween.ts:31](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L31)

## Methods

### $easeProps

▸ `Protected` **$easeProps**(`stepIndex`, `props`, `position`, `duration`, `ease`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stepIndex` | `number` |
| `props` | `Object` |
| `position` | `number` |
| `duration` | `number` |
| `ease` | `Function` |

#### Returns

`void`

#### Defined in

[tween/Tween.ts:158](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L158)

___

### $nextFrame

▸ `Protected` **$nextFrame**(`dt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dt` | `number` |

#### Returns

`void`

#### Defined in

[tween/Tween.ts:106](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L106)

___

### $onEnterFrame

▸ `Protected` **$onEnterFrame**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`Event`](../README.md#event) |

#### Returns

`void`

#### Defined in

[tween/Tween.ts:102](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L102)

___

### $saveOriginalProps

▸ `Protected` **$saveOriginalProps**(`stepIndex`, `props`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stepIndex` | `number` |
| `props` | `Object` |

#### Returns

`void`

#### Defined in

[tween/Tween.ts:148](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L148)

___

### $setProps

▸ `Protected` **$setProps**(`props`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |

#### Returns

`void`

#### Defined in

[tween/Tween.ts:174](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L174)

___

### call

▸ **call**(`callback`): [`Tween`](../README.md#tween)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Function` |

#### Returns

[`Tween`](../README.md#tween)

#### Defined in

[tween/Tween.ts:61](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L61)

___

### emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../README.md#event) |

#### Returns

`boolean`

#### Inherited from

[EventEmitter](../README.md#eventemitter).[emit](../README.md#emit)

#### Defined in

[event/EventEmitter.ts:42](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L42)

▸ **emit**(`type`, `...args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[EventEmitter](../README.md#eventemitter).[emit](../README.md#emit)

#### Defined in

[event/EventEmitter.ts:43](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L43)

___

### hasEventListener

▸ **hasEventListener**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`boolean`

#### Inherited from

[EventEmitter](../README.md#eventemitter).[hasEventListener](../README.md#haseventlistener)

#### Defined in

[event/EventEmitter.ts:80](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L80)

___

### off

▸ **off**(`type`, `listener?`): [`Tween`](../README.md#tween)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener?` | [`Listener`](../README.md#listener) |

#### Returns

[`Tween`](../README.md#tween)

#### Inherited from

[EventEmitter](../README.md#eventemitter).[off](../README.md#off)

#### Defined in

[event/EventEmitter.ts:16](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L16)

___

### on

▸ **on**(`type`, `listener`): [`Tween`](../README.md#tween)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`Listener`](../README.md#listener) |

#### Returns

[`Tween`](../README.md#tween)

#### Inherited from

[EventEmitter](../README.md#eventemitter).[on](../README.md#on)

#### Defined in

[event/EventEmitter.ts:9](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L9)

___

### once

▸ **once**(`type`, `listener`): [`Tween`](../README.md#tween)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`Listener`](../README.md#listener) |

#### Returns

[`Tween`](../README.md#tween)

#### Inherited from

[EventEmitter](../README.md#eventemitter).[once](../README.md#once)

#### Defined in

[event/EventEmitter.ts:33](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L33)

___

### pause

▸ **pause**(): [`Tween`](../README.md#tween)

#### Returns

[`Tween`](../README.md#tween)

#### Defined in

[tween/Tween.ts:77](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L77)

___

### play

▸ **play**(): [`Tween`](../README.md#tween)

#### Returns

[`Tween`](../README.md#tween)

#### Defined in

[tween/Tween.ts:69](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L69)

___

### removeAllListeners

▸ **removeAllListeners**(): [`Tween`](../README.md#tween)

#### Returns

[`Tween`](../README.md#tween)

#### Inherited from

[EventEmitter](../README.md#eventemitter).[removeAllListeners](../README.md#removealllisteners)

#### Defined in

[event/EventEmitter.ts:85](https://github.com/Lanfei/playable.js/blob/2369e26/src/event/EventEmitter.ts#L85)

___

### resume

▸ **resume**(): [`Tween`](../README.md#tween)

#### Returns

[`Tween`](../README.md#tween)

#### Defined in

[tween/Tween.ts:83](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L83)

___

### set

▸ **set**(`props`): [`Tween`](../README.md#tween)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |

#### Returns

[`Tween`](../README.md#tween)

#### Defined in

[tween/Tween.ts:35](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L35)

___

### stop

▸ **stop**(): [`Tween`](../README.md#tween)

#### Returns

[`Tween`](../README.md#tween)

#### Defined in

[tween/Tween.ts:92](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L92)

___

### to

▸ **to**(`props`, `duration`, `ease?`): [`Tween`](../README.md#tween)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `duration` | `number` |
| `ease?` | `Function` |

#### Returns

[`Tween`](../README.md#tween)

#### Defined in

[tween/Tween.ts:43](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L43)

___

### wait

▸ **wait**(`duration`): [`Tween`](../README.md#tween)

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `number` |

#### Returns

[`Tween`](../README.md#tween)

#### Defined in

[tween/Tween.ts:53](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L53)

___

### get

▸ `Static` **get**(`target`, `option?`): [`Tween`](../README.md#tween)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`Layer`](../README.md#layer) |
| `option?` | `Object` |
| `option.loop?` | `boolean` |

#### Returns

[`Tween`](../README.md#tween)

#### Defined in

[tween/Tween.ts:183](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L183)

___

### pauseTweens

▸ `Static` **pauseTweens**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`Layer`](../README.md#layer) |

#### Returns

`void`

#### Defined in

[tween/Tween.ts:187](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L187)

___

### removeAllTweens

▸ `Static` **removeAllTweens**(): `void`

#### Returns

`void`

#### Defined in

[tween/Tween.ts:215](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L215)

___

### removeTweens

▸ `Static` **removeTweens**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`Layer`](../README.md#layer) |

#### Returns

`void`

#### Defined in

[tween/Tween.ts:205](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L205)

___

### resumeTweens

▸ `Static` **resumeTweens**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`Layer`](../README.md#layer) |

#### Returns

`void`

#### Defined in

[tween/Tween.ts:196](https://github.com/Lanfei/playable.js/blob/2369e26/src/tween/Tween.ts#L196)
