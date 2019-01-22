[playable.js](../README.md) > ["media/Image"](../modules/_media_image_.md) > [Image](../classes/_media_image_.image.md)

# Class: Image

## Hierarchy

↳  [Media](_media_media_.media.md)

**↳ Image**

## Index

### Constructors

* [constructor](_media_image_.image.md#constructor)

### Properties

* [$boundOnError](_media_image_.image.md#_boundonerror)
* [$boundOnLoad](_media_image_.image.md#_boundonload)
* [$element](_media_image_.image.md#_element)
* [$events](_media_image_.image.md#_events)
* [$stage](_media_image_.image.md#_stage)
* [pixelRatio](_media_image_.image.md#pixelratio)
* [defaultPixelRatio](_media_image_.image.md#defaultpixelratio)

### Accessors

* [element](_media_image_.image.md#element)
* [height](_media_image_.image.md#height)
* [url](_media_image_.image.md#url)
* [width](_media_image_.image.md#width)

### Methods

* [$onError](_media_image_.image.md#_onerror)
* [$onLoad](_media_image_.image.md#_onload)
* [emit](_media_image_.image.md#emit)
* [hasEventListener](_media_image_.image.md#haseventlistener)
* [off](_media_image_.image.md#off)
* [on](_media_image_.image.md#on)
* [removeAllListeners](_media_image_.image.md#removealllisteners)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Image**(stage: *[Stage](_display_stage_.stage.md)*): [Image](_media_image_.image.md)

*Overrides [Media](_media_media_.media.md).[constructor](_media_media_.media.md#constructor)*

*Defined in [media/Image.ts:9](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Image.ts#L9)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| stage | [Stage](_display_stage_.stage.md) |

**Returns:** [Image](_media_image_.image.md)

___

## Properties

<a id="_boundonerror"></a>

### `<Protected>` $boundOnError

**● $boundOnError**: *`function`*

*Inherited from [Media](_media_media_.media.md).[$boundOnError](_media_media_.media.md#_boundonerror)*

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

*Inherited from [Media](_media_media_.media.md).[$boundOnLoad](_media_media_.media.md#_boundonload)*

*Defined in [media/Media.ts:10](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Media.ts#L10)*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="_element"></a>

### `<Protected>` $element

**● $element**: *`HTMLImageElement`*

*Overrides [Media](_media_media_.media.md).[$element](_media_media_.media.md#_element)*

*Defined in [media/Image.ts:9](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Image.ts#L9)*

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

*Inherited from [Media](_media_media_.media.md).[$stage](_media_media_.media.md#_stage)*

*Defined in [media/Media.ts:9](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Media.ts#L9)*

___
<a id="pixelratio"></a>

###  pixelRatio

**● pixelRatio**: *`number`* =  Image.defaultPixelRatio

*Defined in [media/Image.ts:8](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Image.ts#L8)*

___
<a id="defaultpixelratio"></a>

### `<Static>` defaultPixelRatio

**● defaultPixelRatio**: *`number`* = 1

*Defined in [media/Image.ts:6](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Image.ts#L6)*

___

## Accessors

<a id="element"></a>

###  element

getelement(): `HTMLImageElement`

*Overrides [Media](_media_media_.media.md).[element](_media_media_.media.md#element)*

*Defined in [media/Image.ts:20](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Image.ts#L20)*

**Returns:** `HTMLImageElement`

___
<a id="height"></a>

###  height

getheight(): `number`setheight(height: *`number`*): `void`

*Defined in [media/Image.ts:32](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Image.ts#L32)*

**Returns:** `number`

*Defined in [media/Image.ts:36](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Image.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| height | `number` |

**Returns:** `void`

___
<a id="url"></a>

###  url

seturl(url: *`string`*): `void`

*Inherited from [Media](_media_media_.media.md).[url](_media_media_.media.md#url)*

*Defined in [media/Media.ts:24](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Media.ts#L24)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `void`

___
<a id="width"></a>

###  width

getwidth(): `number`setwidth(width: *`number`*): `void`

*Defined in [media/Image.ts:24](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Image.ts#L24)*

**Returns:** `number`

*Defined in [media/Image.ts:28](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Image.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| width | `number` |

**Returns:** `void`

___

## Methods

<a id="_onerror"></a>

### `<Protected>` $onError

▸ **$onError**(e: *[Event](_event_event_.event.md)*): `void`

*Inherited from [Media](_media_media_.media.md).[$onError](_media_media_.media.md#_onerror)*

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

*Inherited from [Media](_media_media_.media.md).[$onLoad](_media_media_.media.md#_onload)*

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

