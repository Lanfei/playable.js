[API Reference](../README.md) > [Tween](../classes/tween.md)

# Class: Tween

## Hierarchy

 [EventEmitter](eventemitter.md)

**↳ Tween**

## Index

### Constructors

* [constructor](tween.md#constructor)

### Properties

* [$boundOnEnterFrame](tween.md#_boundonenterframe)
* [$events](tween.md#_events)
* [$paused](tween.md#_paused)
* [$shouldSaveProps](tween.md#_shouldsaveprops)
* [$stepIndex](tween.md#_stepindex)
* [$stepPosition](tween.md#_stepposition)
* [$stepProps](tween.md#_stepprops)
* [$steps](tween.md#_steps)
* [$stopped](tween.md#_stopped)
* [$target](tween.md#_target)
* [loop](tween.md#loop)
* [$tweens](tween.md#_tweens)

### Accessors

* [paused](tween.md#paused)
* [stopped](tween.md#stopped)

### Methods

* [$easeProps](tween.md#_easeprops)
* [$nextFrame](tween.md#_nextframe)
* [$onEnterFrame](tween.md#_onenterframe)
* [$saveOriginalProps](tween.md#_saveoriginalprops)
* [$setProps](tween.md#_setprops)
* [call](tween.md#call)
* [emit](tween.md#emit)
* [hasEventListener](tween.md#haseventlistener)
* [off](tween.md#off)
* [on](tween.md#on)
* [pause](tween.md#pause)
* [play](tween.md#play)
* [removeAllListeners](tween.md#removealllisteners)
* [resume](tween.md#resume)
* [set](tween.md#set)
* [stop](tween.md#stop)
* [to](tween.md#to)
* [wait](tween.md#wait)
* [get](tween.md#get)
* [pauseTweens](tween.md#pausetweens)
* [removeAllTweens](tween.md#removealltweens)
* [removeTweens](tween.md#removetweens)
* [resumeTweens](tween.md#resumetweens)

---

## Constructors

<a id="constructor"></a>

### `<Protected>` constructor

⊕ **new Tween**(target: *[Layer](layer.md)*, option?: *[TweenOption](../interfaces/tweenoption.md)*): [Tween](tween.md)

*Defined in [tween/Tween.ts:18](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L18)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| target | [Layer](layer.md) |
| `Optional` option | [TweenOption](../interfaces/tweenoption.md) |

**Returns:** [Tween](tween.md)

___

## Properties

<a id="_boundonenterframe"></a>

### `<Protected>` $boundOnEnterFrame

**● $boundOnEnterFrame**: *`function`*

*Defined in [tween/Tween.ts:18](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L18)*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="_events"></a>

### `<Protected>` $events

**● $events**: *`Object`*

*Inherited from [EventEmitter](eventemitter.md).[$events](eventemitter.md#_events)*

*Defined in [event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/EventEmitter.ts#L5)*

___
<a id="_paused"></a>

### `<Protected>` $paused

**● $paused**: *`boolean`* = true

*Defined in [tween/Tween.ts:11](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L11)*

___
<a id="_shouldsaveprops"></a>

### `<Protected>` $shouldSaveProps

**● $shouldSaveProps**: *`boolean`* = true

*Defined in [tween/Tween.ts:17](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L17)*

___
<a id="_stepindex"></a>

### `<Protected>` $stepIndex

**● $stepIndex**: *`number`* = 0

*Defined in [tween/Tween.ts:13](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L13)*

___
<a id="_stepposition"></a>

### `<Protected>` $stepPosition

**● $stepPosition**: *`number`* = 0

*Defined in [tween/Tween.ts:14](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L14)*

___
<a id="_stepprops"></a>

### `<Protected>` $stepProps

**● $stepProps**: *`Array`<`Object`>* =  []

*Defined in [tween/Tween.ts:16](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L16)*

___
<a id="_steps"></a>

### `<Protected>` $steps

**● $steps**: *`Array`<[TweenStep](../interfaces/tweenstep.md)>* =  []

*Defined in [tween/Tween.ts:15](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L15)*

___
<a id="_stopped"></a>

### `<Protected>` $stopped

**● $stopped**: *`boolean`* = true

*Defined in [tween/Tween.ts:12](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L12)*

___
<a id="_target"></a>

### `<Protected>` $target

**● $target**: *[Layer](layer.md)* =  null

*Defined in [tween/Tween.ts:10](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L10)*

___
<a id="loop"></a>

###  loop

**● loop**: *`boolean`* = false

*Defined in [tween/Tween.ts:8](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L8)*

___
<a id="_tweens"></a>

### `<Static>``<Protected>` $tweens

**● $tweens**: *`Array`<[Tween](tween.md)>* =  []

*Defined in [tween/Tween.ts:181](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L181)*

___

## Accessors

<a id="paused"></a>

###  paused

getpaused(): `boolean`

*Defined in [tween/Tween.ts:27](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L27)*

**Returns:** `boolean`

___
<a id="stopped"></a>

###  stopped

getstopped(): `boolean`

*Defined in [tween/Tween.ts:31](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L31)*

**Returns:** `boolean`

___

## Methods

<a id="_easeprops"></a>

### `<Protected>` $easeProps

▸ **$easeProps**(stepIndex: *`number`*, props: *`Object`*, position: *`number`*, duration: *`number`*, ease: *`Function`*): `void`

*Defined in [tween/Tween.ts:158](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L158)*

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
<a id="_nextframe"></a>

### `<Protected>` $nextFrame

▸ **$nextFrame**(dt: *`number`*): `void`

*Defined in [tween/Tween.ts:106](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L106)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| dt | `number` |

**Returns:** `void`

___
<a id="_onenterframe"></a>

### `<Protected>` $onEnterFrame

▸ **$onEnterFrame**(e: *[Event](event.md)*): `void`

*Defined in [tween/Tween.ts:102](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L102)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [Event](event.md) |

**Returns:** `void`

___
<a id="_saveoriginalprops"></a>

### `<Protected>` $saveOriginalProps

▸ **$saveOriginalProps**(stepIndex: *`number`*, props: *`Object`*): `void`

*Defined in [tween/Tween.ts:148](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L148)*

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

*Defined in [tween/Tween.ts:174](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L174)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| props | `Object` |

**Returns:** `void`

___
<a id="call"></a>

###  call

▸ **call**(callback: *`Function`*): `this`

*Defined in [tween/Tween.ts:61](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L61)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | `Function` |

**Returns:** `this`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *[Event](event.md)*): `boolean`

▸ **emit**(type: *`string`*, ...args: *`any`[]*): `boolean`

*Inherited from [EventEmitter](eventemitter.md).[emit](eventemitter.md#emit)*

*Defined in [event/EventEmitter.ts:27](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/EventEmitter.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [Event](event.md) |

**Returns:** `boolean`

*Inherited from [EventEmitter](eventemitter.md).[emit](eventemitter.md#emit)*

*Defined in [event/EventEmitter.ts:28](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/EventEmitter.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="haseventlistener"></a>

###  hasEventListener

▸ **hasEventListener**(type: *`string`*): `boolean`

*Inherited from [EventEmitter](eventemitter.md).[hasEventListener](eventemitter.md#haseventlistener)*

*Defined in [event/EventEmitter.ts:56](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/EventEmitter.ts#L56)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |

**Returns:** `boolean`

___
<a id="off"></a>

###  off

▸ **off**(type: *`string`*, listener?: *`function`*): `this`

*Inherited from [EventEmitter](eventemitter.md).[off](eventemitter.md#off)*

*Defined in [event/EventEmitter.ts:14](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/EventEmitter.ts#L14)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| `Optional` listener | `function` |

**Returns:** `this`

___
<a id="on"></a>

###  on

▸ **on**(type: *`string`*, listener: *`function`*): `this`

*Inherited from [EventEmitter](eventemitter.md).[on](eventemitter.md#on)*

*Defined in [event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/EventEmitter.ts#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| listener | `function` |

**Returns:** `this`

___
<a id="pause"></a>

###  pause

▸ **pause**(): `this`

*Defined in [tween/Tween.ts:77](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L77)*

**Returns:** `this`

___
<a id="play"></a>

###  play

▸ **play**(): `this`

*Defined in [tween/Tween.ts:69](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L69)*

**Returns:** `this`

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(): `this`

*Inherited from [EventEmitter](eventemitter.md).[removeAllListeners](eventemitter.md#removealllisteners)*

*Defined in [event/EventEmitter.ts:61](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/EventEmitter.ts#L61)*

**Returns:** `this`

___
<a id="resume"></a>

###  resume

▸ **resume**(): `this`

*Defined in [tween/Tween.ts:83](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L83)*

**Returns:** `this`

___
<a id="set"></a>

###  set

▸ **set**(props: *`Object`*): `this`

*Defined in [tween/Tween.ts:35](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L35)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| props | `Object` |

**Returns:** `this`

___
<a id="stop"></a>

###  stop

▸ **stop**(): `this`

*Defined in [tween/Tween.ts:92](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L92)*

**Returns:** `this`

___
<a id="to"></a>

###  to

▸ **to**(props: *`Object`*, duration: *`number`*, ease?: *`Function`*): `this`

*Defined in [tween/Tween.ts:43](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L43)*

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

*Defined in [tween/Tween.ts:53](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L53)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| duration | `number` |

**Returns:** `this`

___
<a id="get"></a>

### `<Static>` get

▸ **get**(target: *[Layer](layer.md)*, option?: *`object`*): [Tween](tween.md)

*Defined in [tween/Tween.ts:183](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L183)*

**Parameters:**

**target: [Layer](layer.md)**

**`Optional` option: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` loop | `boolean` |

**Returns:** [Tween](tween.md)

___
<a id="pausetweens"></a>

### `<Static>` pauseTweens

▸ **pauseTweens**(target: *[Layer](layer.md)*): `void`

*Defined in [tween/Tween.ts:187](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L187)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| target | [Layer](layer.md) |

**Returns:** `void`

___
<a id="removealltweens"></a>

### `<Static>` removeAllTweens

▸ **removeAllTweens**(): `void`

*Defined in [tween/Tween.ts:215](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L215)*

**Returns:** `void`

___
<a id="removetweens"></a>

### `<Static>` removeTweens

▸ **removeTweens**(target: *[Layer](layer.md)*): `void`

*Defined in [tween/Tween.ts:205](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L205)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| target | [Layer](layer.md) |

**Returns:** `void`

___
<a id="resumetweens"></a>

### `<Static>` resumeTweens

▸ **resumeTweens**(target: *[Layer](layer.md)*): `void`

*Defined in [tween/Tween.ts:196](https://github.com/Lanfei/playable.js/blob/877c13c/src/tween/Tween.ts#L196)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| target | [Layer](layer.md) |

**Returns:** `void`

___

