[API Reference](../README.md) > [Texture](../classes/texture.md)

# Class: Texture

## Hierarchy

↳  [Media](media.md)

**↳ Texture**

## Index

### Constructors

* [constructor](texture.md#constructor)

### Properties

* [$boundOnError](texture.md#_boundonerror)
* [$boundOnLoad](texture.md#_boundonload)
* [$element](texture.md#_element)
* [$events](texture.md#_events)
* [$stage](texture.md#_stage)
* [pixelRatio](texture.md#pixelratio)
* [NO_REPEAT](texture.md#no_repeat)
* [REPEAT](texture.md#repeat)
* [REPEAT_X](texture.md#repeat_x)
* [REPEAT_Y](texture.md#repeat_y)
* [SCALE](texture.md#scale)
* [defaultPixelRatio](texture.md#defaultpixelratio)

### Accessors

* [element](texture.md#element)
* [height](texture.md#height)
* [url](texture.md#url)
* [width](texture.md#width)

### Methods

* [$onError](texture.md#_onerror)
* [$onLoad](texture.md#_onload)
* [emit](texture.md#emit)
* [hasEventListener](texture.md#haseventlistener)
* [off](texture.md#off)
* [on](texture.md#on)
* [removeAllListeners](texture.md#removealllisteners)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Texture**(stage: *[Stage](stage.md)*): [Texture](texture.md)

*Overrides [Media](media.md).[constructor](media.md#constructor)*

*Defined in [media/Texture.ts:16](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Texture.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| stage | [Stage](stage.md) |

**Returns:** [Texture](texture.md)

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
<a id="_element"></a>

### `<Protected>` $element

**● $element**: *`HTMLImageElement`*

*Overrides [Media](media.md).[$element](media.md#_element)*

*Defined in [media/Texture.ts:16](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Texture.ts#L16)*

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

*Inherited from [Media](media.md).[$stage](media.md#_stage)*

*Defined in [media/Media.ts:9](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Media.ts#L9)*

___
<a id="pixelratio"></a>

###  pixelRatio

**● pixelRatio**: *`number`* =  Texture.defaultPixelRatio

*Defined in [media/Texture.ts:14](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Texture.ts#L14)*

___
<a id="no_repeat"></a>

### `<Static>` NO_REPEAT

**● NO_REPEAT**: *[FillMode](../#fillmode)* = "no-repeat"

*Defined in [media/Texture.ts:10](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Texture.ts#L10)*

___
<a id="repeat"></a>

### `<Static>` REPEAT

**● REPEAT**: *[FillMode](../#fillmode)* = "repeat"

*Defined in [media/Texture.ts:7](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Texture.ts#L7)*

___
<a id="repeat_x"></a>

### `<Static>` REPEAT_X

**● REPEAT_X**: *[FillMode](../#fillmode)* = "repeat-x"

*Defined in [media/Texture.ts:8](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Texture.ts#L8)*

___
<a id="repeat_y"></a>

### `<Static>` REPEAT_Y

**● REPEAT_Y**: *[FillMode](../#fillmode)* = "repeat-y"

*Defined in [media/Texture.ts:9](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Texture.ts#L9)*

___
<a id="scale"></a>

### `<Static>` SCALE

**● SCALE**: *[FillMode](../#fillmode)* = "scale"

*Defined in [media/Texture.ts:6](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Texture.ts#L6)*

___
<a id="defaultpixelratio"></a>

### `<Static>` defaultPixelRatio

**● defaultPixelRatio**: *`number`* = 1

*Defined in [media/Texture.ts:12](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Texture.ts#L12)*

___

## Accessors

<a id="element"></a>

###  element

getelement(): `HTMLImageElement`

*Overrides [Media](media.md).[element](media.md#element)*

*Defined in [media/Texture.ts:27](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Texture.ts#L27)*

**Returns:** `HTMLImageElement`

___
<a id="height"></a>

###  height

getheight(): `number`

*Defined in [media/Texture.ts:35](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Texture.ts#L35)*

**Returns:** `number`

___
<a id="url"></a>

###  url

geturl(): `string`seturl(url: *`string`*): `void`

*Inherited from [Media](media.md).[url](media.md#url)*

*Defined in [media/Media.ts:24](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Media.ts#L24)*

**Returns:** `string`

*Inherited from [Media](media.md).[url](media.md#url)*

*Defined in [media/Media.ts:28](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Media.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `void`

___
<a id="width"></a>

###  width

getwidth(): `number`

*Defined in [media/Texture.ts:31](https://github.com/Lanfei/playable.js/blob/76571fa/src/media/Texture.ts#L31)*

**Returns:** `number`

___

## Methods

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

*Inherited from [Media](media.md).[$onLoad](media.md#_onload)*

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

