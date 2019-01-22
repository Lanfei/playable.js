[playable.js](../README.md) > ["tween/Tween"](../modules/_tween_tween_.md) > [Tween](../classes/_tween_tween_.tween.md)

# Class: Tween

## Hierarchy

 [EventEmitter](_event_eventemitter_.eventemitter.md)

**↳ Tween**

## Index

### Constructors

* [constructor](_tween_tween_.tween.md#constructor)

### Properties

* [$boundOnEnterFrame](_tween_tween_.tween.md#_boundonenterframe)
* [$events](_tween_tween_.tween.md#_events)
* [$paused](_tween_tween_.tween.md#_paused)
* [$shouldSaveProps](_tween_tween_.tween.md#_shouldsaveprops)
* [$stepIndex](_tween_tween_.tween.md#_stepindex)
* [$stepPosition](_tween_tween_.tween.md#_stepposition)
* [$stepProps](_tween_tween_.tween.md#_stepprops)
* [$steps](_tween_tween_.tween.md#_steps)
* [$target](_tween_tween_.tween.md#_target)
* [loop](_tween_tween_.tween.md#loop)
* [$tweens](_tween_tween_.tween.md#_tweens)

### Accessors

* [paused](_tween_tween_.tween.md#paused)

### Methods

* [$easeProps](_tween_tween_.tween.md#_easeprops)
* [$onEnterFrame](_tween_tween_.tween.md#_onenterframe)
* [$saveOriginalProps](_tween_tween_.tween.md#_saveoriginalprops)
* [$setProps](_tween_tween_.tween.md#_setprops)
* [call](_tween_tween_.tween.md#call)
* [emit](_tween_tween_.tween.md#emit)
* [hasEventListener](_tween_tween_.tween.md#haseventlistener)
* [off](_tween_tween_.tween.md#off)
* [on](_tween_tween_.tween.md#on)
* [pause](_tween_tween_.tween.md#pause)
* [play](_tween_tween_.tween.md#play)
* [removeAllListeners](_tween_tween_.tween.md#removealllisteners)
* [set](_tween_tween_.tween.md#set)
* [to](_tween_tween_.tween.md#to)
* [wait](_tween_tween_.tween.md#wait)
* [get](_tween_tween_.tween.md#get)
* [pauseTweens](_tween_tween_.tween.md#pausetweens)
* [removeAllTweens](_tween_tween_.tween.md#removealltweens)
* [removeTweens](_tween_tween_.tween.md#removetweens)
* [resumeTweens](_tween_tween_.tween.md#resumetweens)

---

## Constructors

<a id="constructor"></a>

### `<Private>` constructor

⊕ **new Tween**(target: *[Layer](_display_layer_.layer.md)*, option?: *`object`*): [Tween](_tween_tween_.tween.md)

*Defined in [tween/Tween.ts:17](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L17)*

**Parameters:**

**target: [Layer](_display_layer_.layer.md)**

**`Optional` option: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` loop | `boolean` |

**Returns:** [Tween](_tween_tween_.tween.md)

___

## Properties

<a id="_boundonenterframe"></a>

### `<Protected>` $boundOnEnterFrame

**● $boundOnEnterFrame**: *`function`*

*Defined in [tween/Tween.ts:17](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L17)*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="_events"></a>

### `<Protected>` $events

**● $events**: *`Object`*

*Inherited from [EventEmitter](_event_eventemitter_.eventemitter.md).[$events](_event_eventemitter_.eventemitter.md#_events)*

*Defined in [event/EventEmitter.ts:3](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/EventEmitter.ts#L3)*

___
<a id="_paused"></a>

### `<Protected>` $paused

**● $paused**: *`boolean`* = true

*Defined in [tween/Tween.ts:11](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L11)*

___
<a id="_shouldsaveprops"></a>

### `<Protected>` $shouldSaveProps

**● $shouldSaveProps**: *`boolean`* = true

*Defined in [tween/Tween.ts:16](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L16)*

___
<a id="_stepindex"></a>

### `<Protected>` $stepIndex

**● $stepIndex**: *`number`* = 0

*Defined in [tween/Tween.ts:12](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L12)*

___
<a id="_stepposition"></a>

### `<Protected>` $stepPosition

**● $stepPosition**: *`number`* = 0

*Defined in [tween/Tween.ts:13](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L13)*

___
<a id="_stepprops"></a>

### `<Protected>` $stepProps

**● $stepProps**: *`Array`<`Object`>* =  []

*Defined in [tween/Tween.ts:15](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L15)*

___
<a id="_steps"></a>

### `<Protected>` $steps

**● $steps**: *`Array`<[TweenStep](../interfaces/_tween_tween_.tweenstep.md)>* =  []

*Defined in [tween/Tween.ts:14](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L14)*

___
<a id="_target"></a>

### `<Protected>` $target

**● $target**: *[Layer](_display_layer_.layer.md)* =  null

*Defined in [tween/Tween.ts:10](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L10)*

___
<a id="loop"></a>

###  loop

**● loop**: *`boolean`* = false

*Defined in [tween/Tween.ts:8](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L8)*

___
<a id="_tweens"></a>

### `<Static>``<Private>` $tweens

**● $tweens**: *`Array`<[Tween](_tween_tween_.tween.md)>* =  []

*Defined in [tween/Tween.ts:160](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L160)*

___

## Accessors

<a id="paused"></a>

###  paused

getpaused(): `boolean`

*Defined in [tween/Tween.ts:26](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L26)*

**Returns:** `boolean`

___

## Methods

<a id="_easeprops"></a>

### `<Protected>` $easeProps

▸ **$easeProps**(stepIndex: *`number`*, props: *`Object`*, position: *`number`*, duration: *`number`*, ease: *`Function`*): `void`

*Defined in [tween/Tween.ts:137](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L137)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| stepIndex | `number` |
| props | `Object` |
| position | `number` |
| duration | `number` |
| ease | `Function` |

**Returns:** `void`

___
<a id="_onenterframe"></a>

### `<Protected>` $onEnterFrame

▸ **$onEnterFrame**(dt: *`number`*): `void`

*Defined in [tween/Tween.ts:85](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L85)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| dt | `number` |

**Returns:** `void`

___
<a id="_saveoriginalprops"></a>

### `<Protected>` $saveOriginalProps

▸ **$saveOriginalProps**(stepIndex: *`number`*, props: *`Object`*): `void`

*Defined in [tween/Tween.ts:127](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L127)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| stepIndex | `number` |
| props | `Object` |

**Returns:** `void`

___
<a id="_setprops"></a>

### `<Protected>` $setProps

▸ **$setProps**(props: *`Object`*): `void`

*Defined in [tween/Tween.ts:153](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L153)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| props | `Object` |

**Returns:** `void`

___
<a id="call"></a>

###  call

▸ **call**(callback: *`Function`*): `this`

*Defined in [tween/Tween.ts:56](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L56)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | `Function` |

**Returns:** `this`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string`*, ...args: *`any`[]*): `boolean`

*Inherited from [EventEmitter](_event_eventemitter_.eventemitter.md).[emit](_event_eventemitter_.eventemitter.md#emit)*

*Defined in [event/EventEmitter.ts:25](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/EventEmitter.ts#L25)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="haseventlistener"></a>

###  hasEventListener

▸ **hasEventListener**(event: *`string`*): `boolean`

*Inherited from [EventEmitter](_event_eventemitter_.eventemitter.md).[hasEventListener](_event_eventemitter_.eventemitter.md#haseventlistener)*

*Defined in [event/EventEmitter.ts:36](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/EventEmitter.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |

**Returns:** `boolean`

___
<a id="off"></a>

###  off

▸ **off**(event: *`string`*, listener?: *`function`*): `this`

*Inherited from [EventEmitter](_event_eventemitter_.eventemitter.md).[off](_event_eventemitter_.eventemitter.md#off)*

*Defined in [event/EventEmitter.ts:12](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/EventEmitter.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| `Optional` listener | `function` |

**Returns:** `this`

___
<a id="on"></a>

###  on

▸ **on**(event: *`string`*, listener: *`function`*): `this`

*Inherited from [EventEmitter](_event_eventemitter_.eventemitter.md).[on](_event_eventemitter_.eventemitter.md#on)*

*Defined in [event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/EventEmitter.ts#L5)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `function` |

**Returns:** `this`

___
<a id="pause"></a>

###  pause

▸ **pause**(): `this`

*Defined in [tween/Tween.ts:73](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L73)*

**Returns:** `this`

___
<a id="play"></a>

###  play

▸ **play**(): `this`

*Defined in [tween/Tween.ts:64](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L64)*

**Returns:** `this`

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(): `this`

*Inherited from [EventEmitter](_event_eventemitter_.eventemitter.md).[removeAllListeners](_event_eventemitter_.eventemitter.md#removealllisteners)*

*Defined in [event/EventEmitter.ts:41](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/EventEmitter.ts#L41)*

**Returns:** `this`

___
<a id="set"></a>

###  set

▸ **set**(props: *`Object`*): `this`

*Defined in [tween/Tween.ts:30](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L30)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| props | `Object` |

**Returns:** `this`

___
<a id="to"></a>

###  to

▸ **to**(props: *`Object`*, duration: *`number`*, ease?: *`Function`*): `this`

*Defined in [tween/Tween.ts:38](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L38)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| props | `Object` |
| duration | `number` |
| `Optional` ease | `Function` |

**Returns:** `this`

___
<a id="wait"></a>

###  wait

▸ **wait**(duration: *`number`*): `this`

*Defined in [tween/Tween.ts:48](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L48)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| duration | `number` |

**Returns:** `this`

___
<a id="get"></a>

### `<Static>` get

▸ **get**(target: *[Layer](_display_layer_.layer.md)*, option?: *`object`*): [Tween](_tween_tween_.tween.md)

*Defined in [tween/Tween.ts:162](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L162)*

**Parameters:**

**target: [Layer](_display_layer_.layer.md)**

**`Optional` option: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` loop | `boolean` |

**Returns:** [Tween](_tween_tween_.tween.md)

___
<a id="pausetweens"></a>

### `<Static>` pauseTweens

▸ **pauseTweens**(target: *[Layer](_display_layer_.layer.md)*): `void`

*Defined in [tween/Tween.ts:166](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L166)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| target | [Layer](_display_layer_.layer.md) |

**Returns:** `void`

___
<a id="removealltweens"></a>

### `<Static>` removeAllTweens

▸ **removeAllTweens**(): `void`

*Defined in [tween/Tween.ts:194](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L194)*

**Returns:** `void`

___
<a id="removetweens"></a>

### `<Static>` removeTweens

▸ **removeTweens**(target: *[Layer](_display_layer_.layer.md)*): `void`

*Defined in [tween/Tween.ts:184](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L184)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| target | [Layer](_display_layer_.layer.md) |

**Returns:** `void`

___
<a id="resumetweens"></a>

### `<Static>` resumeTweens

▸ **resumeTweens**(target: *[Layer](_display_layer_.layer.md)*): `void`

*Defined in [tween/Tween.ts:175](https://github.com/Lanfei/playable.js/blob/9a36445/src/tween/Tween.ts#L175)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| target | [Layer](_display_layer_.layer.md) |

**Returns:** `void`

___

