[playable.js](../README.md) > ["media/SoundEffect"](../modules/_media_soundeffect_.md) > [SoundEffect](../classes/_media_soundeffect_.soundeffect.md)

# Class: SoundEffect

## Hierarchy

↳  [Sound](_media_sound_.sound.md)

**↳ SoundEffect**

## Index

### Constructors

* [constructor](_media_soundeffect_.soundeffect.md#constructor)

### Properties

* [$boundOnError](_media_soundeffect_.soundeffect.md#_boundonerror)
* [$boundOnLoad](_media_soundeffect_.soundeffect.md#_boundonload)
* [$boundOnTouch](_media_soundeffect_.soundeffect.md#_boundontouch)
* [$element](_media_soundeffect_.soundeffect.md#_element)
* [$events](_media_soundeffect_.soundeffect.md#_events)
* [$loops](_media_soundeffect_.soundeffect.md#_loops)
* [$paused](_media_soundeffect_.soundeffect.md#_paused)
* [$stage](_media_soundeffect_.soundeffect.md#_stage)
* [$startTime](_media_soundeffect_.soundeffect.md#_starttime)

### Accessors

* [element](_media_soundeffect_.soundeffect.md#element)
* [url](_media_soundeffect_.soundeffect.md#url)
* [volume](_media_soundeffect_.soundeffect.md#volume)

### Methods

* [$checkOnTouch](_media_soundeffect_.soundeffect.md#_checkontouch)
* [$checkStatus](_media_soundeffect_.soundeffect.md#_checkstatus)
* [$onEnded](_media_soundeffect_.soundeffect.md#_onended)
* [$onError](_media_soundeffect_.soundeffect.md#_onerror)
* [$onLoad](_media_soundeffect_.soundeffect.md#_onload)
* [$onTickerPause](_media_soundeffect_.soundeffect.md#_ontickerpause)
* [$onTickerResume](_media_soundeffect_.soundeffect.md#_ontickerresume)
* [$onTouch](_media_soundeffect_.soundeffect.md#_ontouch)
* [emit](_media_soundeffect_.soundeffect.md#emit)
* [hasEventListener](_media_soundeffect_.soundeffect.md#haseventlistener)
* [off](_media_soundeffect_.soundeffect.md#off)
* [on](_media_soundeffect_.soundeffect.md#on)
* [play](_media_soundeffect_.soundeffect.md#play)
* [removeAllListeners](_media_soundeffect_.soundeffect.md#removealllisteners)
* [stop](_media_soundeffect_.soundeffect.md#stop)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SoundEffect**(stage: *[Stage](_display_stage_.stage.md)*): [SoundEffect](_media_soundeffect_.soundeffect.md)

*Overrides [Sound](_media_sound_.sound.md).[constructor](_media_sound_.sound.md#constructor)*

*Defined in [media/SoundEffect.ts:4](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/SoundEffect.ts#L4)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| stage | [Stage](_display_stage_.stage.md) |

**Returns:** [SoundEffect](_media_soundeffect_.soundeffect.md)

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
<a id="_boundontouch"></a>

### `<Protected>` $boundOnTouch

**● $boundOnTouch**: *`function`*

*Inherited from [Sound](_media_sound_.sound.md).[$boundOnTouch](_media_sound_.sound.md#_boundontouch)*

*Defined in [media/Sound.ts:11](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Sound.ts#L11)*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="_element"></a>

### `<Protected>` $element

**● $element**: *`HTMLAudioElement`*

*Inherited from [Sound](_media_sound_.sound.md).[$element](_media_sound_.sound.md#_element)*

*Overrides [Media](_media_media_.media.md).[$element](_media_media_.media.md#_element)*

*Defined in [media/Sound.ts:10](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Sound.ts#L10)*

___
<a id="_events"></a>

### `<Protected>` $events

**● $events**: *`Object`*

*Inherited from [EventEmitter](_event_eventemitter_.eventemitter.md).[$events](_event_eventemitter_.eventemitter.md#_events)*

*Defined in [event/EventEmitter.ts:3](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/EventEmitter.ts#L3)*

___
<a id="_loops"></a>

### `<Protected>` $loops

**● $loops**: *`number`* = 1

*Inherited from [Sound](_media_sound_.sound.md).[$loops](_media_sound_.sound.md#_loops)*

*Defined in [media/Sound.ts:7](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Sound.ts#L7)*

___
<a id="_paused"></a>

### `<Protected>` $paused

**● $paused**: *`boolean`* = false

*Inherited from [Sound](_media_sound_.sound.md).[$paused](_media_sound_.sound.md#_paused)*

*Defined in [media/Sound.ts:9](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Sound.ts#L9)*

___
<a id="_stage"></a>

### `<Protected>` $stage

**● $stage**: *[Stage](_display_stage_.stage.md)*

*Inherited from [Media](_media_media_.media.md).[$stage](_media_media_.media.md#_stage)*

*Defined in [media/Media.ts:9](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Media.ts#L9)*

___
<a id="_starttime"></a>

### `<Protected>` $startTime

**● $startTime**: *`number`* = 0

*Inherited from [Sound](_media_sound_.sound.md).[$startTime](_media_sound_.sound.md#_starttime)*

*Defined in [media/Sound.ts:8](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Sound.ts#L8)*

___

## Accessors

<a id="element"></a>

###  element

getelement(): `HTMLAudioElement`

*Inherited from [Sound](_media_sound_.sound.md).[element](_media_sound_.sound.md#element)*

*Overrides [Media](_media_media_.media.md).[element](_media_media_.media.md#element)*

*Defined in [media/Sound.ts:26](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Sound.ts#L26)*

**Returns:** `HTMLAudioElement`

___
<a id="url"></a>

###  url

seturl(url: *`string`*): `void`

*Inherited from [Sound](_media_sound_.sound.md).[url](_media_sound_.sound.md#url)*

*Overrides [Media](_media_media_.media.md).[url](_media_media_.media.md#url)*

*Defined in [media/Sound.ts:30](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Sound.ts#L30)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `void`

___
<a id="volume"></a>

###  volume

getvolume(): `number`setvolume(volume: *`number`*): `void`

*Inherited from [Sound](_media_sound_.sound.md).[volume](_media_sound_.sound.md#volume)*

*Defined in [media/Sound.ts:39](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Sound.ts#L39)*

**Returns:** `number`

*Inherited from [Sound](_media_sound_.sound.md).[volume](_media_sound_.sound.md#volume)*

*Defined in [media/Sound.ts:43](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Sound.ts#L43)*

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

*Inherited from [Sound](_media_sound_.sound.md).[$checkOnTouch](_media_sound_.sound.md#_checkontouch)*

*Defined in [media/Sound.ts:47](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Sound.ts#L47)*

**Returns:** `void`

___
<a id="_checkstatus"></a>

### `<Protected>` $checkStatus

▸ **$checkStatus**(): `void`

*Inherited from [Sound](_media_sound_.sound.md).[$checkStatus](_media_sound_.sound.md#_checkstatus)*

*Defined in [media/Sound.ts:52](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Sound.ts#L52)*

**Returns:** `void`

___
<a id="_onended"></a>

### `<Protected>` $onEnded

▸ **$onEnded**(): `void`

*Inherited from [Sound](_media_sound_.sound.md).[$onEnded](_media_sound_.sound.md#_onended)*

*Defined in [media/Sound.ts:65](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Sound.ts#L65)*

**Returns:** `void`

___
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

*Inherited from [Sound](_media_sound_.sound.md).[$onLoad](_media_sound_.sound.md#_onload)*

*Overrides [Media](_media_media_.media.md).[$onLoad](_media_media_.media.md#_onload)*

*Defined in [media/Sound.ts:103](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Sound.ts#L103)*

**Returns:** `void`

___
<a id="_ontickerpause"></a>

### `<Protected>` $onTickerPause

▸ **$onTickerPause**(): `void`

*Inherited from [Sound](_media_sound_.sound.md).[$onTickerPause](_media_sound_.sound.md#_ontickerpause)*

*Defined in [media/Sound.ts:76](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Sound.ts#L76)*

**Returns:** `void`

___
<a id="_ontickerresume"></a>

### `<Protected>` $onTickerResume

▸ **$onTickerResume**(): `void`

*Inherited from [Sound](_media_sound_.sound.md).[$onTickerResume](_media_sound_.sound.md#_ontickerresume)*

*Defined in [media/Sound.ts:82](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Sound.ts#L82)*

**Returns:** `void`

___
<a id="_ontouch"></a>

### `<Protected>` $onTouch

▸ **$onTouch**(): `void`

*Inherited from [Sound](_media_sound_.sound.md).[$onTouch](_media_sound_.sound.md#_ontouch)*

*Defined in [media/Sound.ts:59](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Sound.ts#L59)*

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
<a id="play"></a>

###  play

▸ **play**(startTime?: *`number`*, loops?: *`number`*): `this`

*Inherited from [Sound](_media_sound_.sound.md).[play](_media_sound_.sound.md#play)*

*Defined in [media/Sound.ts:88](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Sound.ts#L88)*

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

*Inherited from [EventEmitter](_event_eventemitter_.eventemitter.md).[removeAllListeners](_event_eventemitter_.eventemitter.md#removealllisteners)*

*Defined in [event/EventEmitter.ts:41](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/EventEmitter.ts#L41)*

**Returns:** `this`

___
<a id="stop"></a>

###  stop

▸ **stop**(): `this`

*Inherited from [Sound](_media_sound_.sound.md).[stop](_media_sound_.sound.md#stop)*

*Defined in [media/Sound.ts:97](https://github.com/Lanfei/playable.js/blob/9a36445/src/media/Sound.ts#L97)*

**Returns:** `this`

___

