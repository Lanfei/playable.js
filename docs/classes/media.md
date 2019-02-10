[API Reference](../README.md) > [Media](../classes/media.md)

# Class: Media

## Hierarchy

 [EventEmitter](eventemitter.md)

**↳ Media**

↳  [Texture](texture.md)

↳  [Sound](sound.md)

## Index

### Constructors

* [constructor](media.md#constructor)

### Properties

* [$boundOnError](media.md#_boundonerror)
* [$boundOnLoad](media.md#_boundonload)
* [$element](media.md#_element)
* [$events](media.md#_events)
* [$stage](media.md#_stage)

### Accessors

* [element](media.md#element)
* [url](media.md#url)

### Methods

* [$onError](media.md#_onerror)
* [$onLoad](media.md#_onload)
* [emit](media.md#emit)
* [hasEventListener](media.md#haseventlistener)
* [off](media.md#off)
* [on](media.md#on)
* [removeAllListeners](media.md#removealllisteners)

---

## Constructors

<a id="constructor"></a>

### `<Protected>` constructor

⊕ **new Media**(stage: *[Stage](stage.md)*): [Media](media.md)

*Defined in [media/Media.ts:11](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Media.ts#L11)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| stage | [Stage](stage.md) |

**Returns:** [Media](media.md)

___

## Properties

<a id="_boundonerror"></a>

### `<Protected>` $boundOnError

**● $boundOnError**: *`function`*

*Defined in [media/Media.ts:11](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Media.ts#L11)*

#### Type declaration
▸(e: *`ErrorEvent`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | `ErrorEvent` |

**Returns:** `void`

___
<a id="_boundonload"></a>

### `<Protected>` $boundOnLoad

**● $boundOnLoad**: *`function`*

*Defined in [media/Media.ts:10](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Media.ts#L10)*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="_element"></a>

### `<Protected>` $element

**● $element**: *`HTMLImageElement` \| `HTMLAudioElement`*

*Defined in [media/Media.ts:7](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Media.ts#L7)*

___
<a id="_events"></a>

### `<Protected>` $events

**● $events**: *`Object`*

*Inherited from [EventEmitter](eventemitter.md).[$events](eventemitter.md#_events)*

*Defined in [event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/EventEmitter.ts#L5)*

___
<a id="_stage"></a>

### `<Protected>` $stage

**● $stage**: *[Stage](stage.md)*

*Defined in [media/Media.ts:9](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Media.ts#L9)*

___

## Accessors

<a id="element"></a>

###  element

getelement(): `HTMLImageElement` \| `HTMLAudioElement`

*Defined in [media/Media.ts:20](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Media.ts#L20)*

**Returns:** `HTMLImageElement` \| `HTMLAudioElement`

___
<a id="url"></a>

###  url

geturl(): `string`seturl(url: *`string`*): `void`

*Defined in [media/Media.ts:24](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Media.ts#L24)*

**Returns:** `string`

*Defined in [media/Media.ts:28](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Media.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `void`

___

## Methods

<a id="_onerror"></a>

### `<Protected>` $onError

▸ **$onError**(e: *`ErrorEvent`*): `void`

*Defined in [media/Media.ts:37](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Media.ts#L37)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | `ErrorEvent` |

**Returns:** `void`

___
<a id="_onload"></a>

### `<Protected>` $onLoad

▸ **$onLoad**(): `void`

*Defined in [media/Media.ts:32](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Media.ts#L32)*

**Returns:** `void`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *[Event](event.md)*): `boolean`

▸ **emit**(type: *`string`*, ...args: *`any`[]*): `boolean`

*Inherited from [EventEmitter](eventemitter.md).[emit](eventemitter.md#emit)*

*Defined in [event/EventEmitter.ts:27](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/EventEmitter.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [Event](event.md) |

**Returns:** `boolean`

*Inherited from [EventEmitter](eventemitter.md).[emit](eventemitter.md#emit)*

*Defined in [event/EventEmitter.ts:28](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/EventEmitter.ts#L28)*

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

*Defined in [event/EventEmitter.ts:56](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/EventEmitter.ts#L56)*

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

*Defined in [event/EventEmitter.ts:14](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/EventEmitter.ts#L14)*

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

*Defined in [event/EventEmitter.ts:7](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/EventEmitter.ts#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| listener | `function` |

**Returns:** `this`

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(): `this`

*Inherited from [EventEmitter](eventemitter.md).[removeAllListeners](eventemitter.md#removealllisteners)*

*Defined in [event/EventEmitter.ts:61](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/EventEmitter.ts#L61)*

**Returns:** `this`

___

