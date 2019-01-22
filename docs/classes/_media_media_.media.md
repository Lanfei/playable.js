[playable.js](../README.md) > ["media/Media"](../modules/_media_media_.md) > [Media](../classes/_media_media_.media.md)

# Class: Media

## Hierarchy

 [EventEmitter](_event_eventemitter_.eventemitter.md)

**↳ Media**

↳  [Image](_media_image_.image.md)

↳  [Sound](_media_sound_.sound.md)

## Index

### Constructors

* [constructor](_media_media_.media.md#constructor)

### Properties

* [$boundOnError](_media_media_.media.md#_boundonerror)
* [$boundOnLoad](_media_media_.media.md#_boundonload)
* [$element](_media_media_.media.md#_element)
* [$events](_media_media_.media.md#_events)
* [$stage](_media_media_.media.md#_stage)

### Accessors

* [element](_media_media_.media.md#element)
* [url](_media_media_.media.md#url)

### Methods

* [$onError](_media_media_.media.md#_onerror)
* [$onLoad](_media_media_.media.md#_onload)
* [emit](_media_media_.media.md#emit)
* [hasEventListener](_media_media_.media.md#haseventlistener)
* [off](_media_media_.media.md#off)
* [on](_media_media_.media.md#on)
* [removeAllListeners](_media_media_.media.md#removealllisteners)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Media**(stage: *[Stage](_display_stage_.stage.md)*): [Media](_media_media_.media.md)

*Defined in [media/Media.ts:11](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Media.ts#L11)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| stage | [Stage](_display_stage_.stage.md) |

**Returns:** [Media](_media_media_.media.md)

___

## Properties

<a id="_boundonerror"></a>

### `<Protected>` $boundOnError

**● $boundOnError**: *`function`*

*Defined in [media/Media.ts:11](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Media.ts#L11)*

#### Type declaration
▸(e: *[Event](_event_event_.event.md)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [Event](_event_event_.event.md) |

**Returns:** `void`

___
<a id="_boundonload"></a>

### `<Protected>` $boundOnLoad

**● $boundOnLoad**: *`function`*

*Defined in [media/Media.ts:10](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Media.ts#L10)*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="_element"></a>

### `<Protected>` $element

**● $element**: *`HTMLImageElement` | `HTMLAudioElement`*

*Defined in [media/Media.ts:7](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Media.ts#L7)*

___
<a id="_events"></a>

### `<Protected>` $events

**● $events**: *`Object`*

*Inherited from [EventEmitter](_event_eventemitter_.eventemitter.md).[$events](_event_eventemitter_.eventemitter.md#_events)*

*Defined in [event/EventEmitter.ts:3](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/EventEmitter.ts#L3)*

___
<a id="_stage"></a>

### `<Protected>` $stage

**● $stage**: *[Stage](_display_stage_.stage.md)*

*Defined in [media/Media.ts:9](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Media.ts#L9)*

___

## Accessors

<a id="element"></a>

###  element

getelement(): `HTMLImageElement` | `HTMLAudioElement`

*Defined in [media/Media.ts:20](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Media.ts#L20)*

**Returns:** `HTMLImageElement` | `HTMLAudioElement`

___
<a id="url"></a>

###  url

seturl(url: *`string`*): `void`

*Defined in [media/Media.ts:24](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Media.ts#L24)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `void`

___

## Methods

<a id="_onerror"></a>

### `<Protected>` $onError

▸ **$onError**(e: *[Event](_event_event_.event.md)*): `void`

*Defined in [media/Media.ts:33](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Media.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [Event](_event_event_.event.md) |

**Returns:** `void`

___
<a id="_onload"></a>

### `<Protected>` $onLoad

▸ **$onLoad**(): `void`

*Defined in [media/Media.ts:28](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Media.ts#L28)*

**Returns:** `void`

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
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(): `this`

*Inherited from [EventEmitter](_event_eventemitter_.eventemitter.md).[removeAllListeners](_event_eventemitter_.eventemitter.md#removealllisteners)*

*Defined in [event/EventEmitter.ts:41](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/EventEmitter.ts#L41)*

**Returns:** `this`

___

