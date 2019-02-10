[API Reference](../README.md) > [Sound](../classes/sound.md)

# Class: Sound

## Hierarchy

↳  [Media](media.md)

**↳ Sound**

## Index

### Constructors

* [constructor](sound.md#constructor)

### Properties

* [$boundOnError](sound.md#_boundonerror)
* [$boundOnLoad](sound.md#_boundonload)
* [$boundOnTouch](sound.md#_boundontouch)
* [$element](sound.md#_element)
* [$events](sound.md#_events)
* [$loops](sound.md#_loops)
* [$paused](sound.md#_paused)
* [$stage](sound.md#_stage)
* [$startTime](sound.md#_starttime)

### Accessors

* [element](sound.md#element)
* [paused](sound.md#paused)
* [url](sound.md#url)
* [volume](sound.md#volume)

### Methods

* [$checkOnTouch](sound.md#_checkontouch)
* [$checkStatus](sound.md#_checkstatus)
* [$onEnded](sound.md#_onended)
* [$onError](sound.md#_onerror)
* [$onLoad](sound.md#_onload)
* [$onRemovedFromStage](sound.md#_onremovedfromstage)
* [$onTickerPause](sound.md#_ontickerpause)
* [$onTickerResume](sound.md#_ontickerresume)
* [$onTouch](sound.md#_ontouch)
* [emit](sound.md#emit)
* [hasEventListener](sound.md#haseventlistener)
* [off](sound.md#off)
* [on](sound.md#on)
* [play](sound.md#play)
* [removeAllListeners](sound.md#removealllisteners)
* [stop](sound.md#stop)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Sound**(stage: *[Stage](stage.md)*): [Sound](sound.md)

*Overrides [Media](media.md).[constructor](media.md#constructor)*

*Defined in [media/Sound.ts:11](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Sound.ts#L11)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| stage | [Stage](stage.md) |

**Returns:** [Sound](sound.md)

___

## Properties

<a id="_boundonerror"></a>

### `<Protected>` $boundOnError

**● $boundOnError**: *`function`*

*Inherited from [Media](media.md).[$boundOnError](media.md#_boundonerror)*

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

*Inherited from [Media](media.md).[$boundOnLoad](media.md#_boundonload)*

*Defined in [media/Media.ts:10](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Media.ts#L10)*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="_boundontouch"></a>

### `<Protected>` $boundOnTouch

**● $boundOnTouch**: *`function`*

*Defined in [media/Sound.ts:11](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Sound.ts#L11)*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="_element"></a>

### `<Protected>` $element

**● $element**: *`HTMLAudioElement`*

*Overrides [Media](media.md).[$element](media.md#_element)*

*Defined in [media/Sound.ts:10](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Sound.ts#L10)*

___
<a id="_events"></a>

### `<Protected>` $events

**● $events**: *`Object`*

*Inherited from [EventEmitter](eventemitter.md).[$events](eventemitter.md#_events)*

*Defined in [event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/EventEmitter.ts#L5)*

___
<a id="_loops"></a>

### `<Protected>` $loops

**● $loops**: *`number`* = 1

*Defined in [media/Sound.ts:7](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Sound.ts#L7)*

___
<a id="_paused"></a>

### `<Protected>` $paused

**● $paused**: *`boolean`* = true

*Defined in [media/Sound.ts:9](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Sound.ts#L9)*

___
<a id="_stage"></a>

### `<Protected>` $stage

**● $stage**: *[Stage](stage.md)*

*Inherited from [Media](media.md).[$stage](media.md#_stage)*

*Defined in [media/Media.ts:9](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Media.ts#L9)*

___
<a id="_starttime"></a>

### `<Protected>` $startTime

**● $startTime**: *`number`* = 0

*Defined in [media/Sound.ts:8](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Sound.ts#L8)*

___

## Accessors

<a id="element"></a>

###  element

getelement(): `HTMLAudioElement`

*Overrides [Media](media.md).[element](media.md#element)*

*Defined in [media/Sound.ts:27](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Sound.ts#L27)*

**Returns:** `HTMLAudioElement`

___
<a id="paused"></a>

###  paused

getpaused(): `boolean`

*Defined in [media/Sound.ts:52](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Sound.ts#L52)*

**Returns:** `boolean`

___
<a id="url"></a>

###  url

geturl(): `string`seturl(url: *`string`*): `void`

*Overrides [Media](media.md).[url](media.md#url)*

*Defined in [media/Sound.ts:31](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Sound.ts#L31)*

**Returns:** `string`

*Overrides [Media](media.md).[url](media.md#url)*

*Defined in [media/Sound.ts:35](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Sound.ts#L35)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `void`

___
<a id="volume"></a>

###  volume

getvolume(): `number`setvolume(volume: *`number`*): `void`

*Defined in [media/Sound.ts:44](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Sound.ts#L44)*

**Returns:** `number`

*Defined in [media/Sound.ts:48](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Sound.ts#L48)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| volume | `number` |

**Returns:** `void`

___

## Methods

<a id="_checkontouch"></a>

### `<Protected>` $checkOnTouch

▸ **$checkOnTouch**(): `void`

*Defined in [media/Sound.ts:71](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Sound.ts#L71)*

**Returns:** `void`

___
<a id="_checkstatus"></a>

### `<Protected>` $checkStatus

▸ **$checkStatus**(): `void`

*Defined in [media/Sound.ts:76](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Sound.ts#L76)*

**Returns:** `void`

___
<a id="_onended"></a>

### `<Protected>` $onEnded

▸ **$onEnded**(): `void`

*Defined in [media/Sound.ts:92](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Sound.ts#L92)*

**Returns:** `void`

___
<a id="_onerror"></a>

### `<Protected>` $onError

▸ **$onError**(e: *`ErrorEvent`*): `void`

*Inherited from [Media](media.md).[$onError](media.md#_onerror)*

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

*Overrides [Media](media.md).[$onLoad](media.md#_onload)*

*Defined in [media/Sound.ts:121](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Sound.ts#L121)*

**Returns:** `void`

___
<a id="_onremovedfromstage"></a>

### `<Protected>` $onRemovedFromStage

▸ **$onRemovedFromStage**(): `void`

*Defined in [media/Sound.ts:115](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Sound.ts#L115)*

**Returns:** `void`

___
<a id="_ontickerpause"></a>

### `<Protected>` $onTickerPause

▸ **$onTickerPause**(): `void`

*Defined in [media/Sound.ts:103](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Sound.ts#L103)*

**Returns:** `void`

___
<a id="_ontickerresume"></a>

### `<Protected>` $onTickerResume

▸ **$onTickerResume**(): `void`

*Defined in [media/Sound.ts:109](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Sound.ts#L109)*

**Returns:** `void`

___
<a id="_ontouch"></a>

### `<Protected>` $onTouch

▸ **$onTouch**(): `void`

*Defined in [media/Sound.ts:86](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Sound.ts#L86)*

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
<a id="play"></a>

###  play

▸ **play**(startTime?: *`number`*, loops?: *`number`*): `this`

*Defined in [media/Sound.ts:56](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Sound.ts#L56)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` startTime | `number` | 0 |
| `Default value` loops | `number` | 1 |

**Returns:** `this`

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(): `this`

*Inherited from [EventEmitter](eventemitter.md).[removeAllListeners](eventemitter.md#removealllisteners)*

*Defined in [event/EventEmitter.ts:61](https://github.com/Lanfei/playable.js/blob/76571fa/src/event/EventEmitter.ts#L61)*

**Returns:** `this`

___
<a id="stop"></a>

###  stop

▸ **stop**(): `this`

*Defined in [media/Sound.ts:65](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Sound.ts#L65)*

**Returns:** `this`

___

