[playable.js](../README.md) > ["net/ResourceManager"](../modules/_net_resourcemanager_.md) > [ResourceManager](../classes/_net_resourcemanager_.resourcemanager.md)

# Class: ResourceManager

## Hierarchy

 [EventEmitter](_event_eventemitter_.eventemitter.md)

**↳ ResourceManager**

## Index

### Constructors

* [constructor](_net_resourcemanager_.resourcemanager.md#constructor)

### Properties

* [$errorCount](_net_resourcemanager_.resourcemanager.md#_errorcount)
* [$events](_net_resourcemanager_.resourcemanager.md#_events)
* [$list](_net_resourcemanager_.resourcemanager.md#_list)
* [$loadedCount](_net_resourcemanager_.resourcemanager.md#_loadedcount)
* [$loadingCount](_net_resourcemanager_.resourcemanager.md#_loadingcount)
* [$resources](_net_resourcemanager_.resourcemanager.md#_resources)
* [$stage](_net_resourcemanager_.resourcemanager.md#_stage)
* [$total](_net_resourcemanager_.resourcemanager.md#_total)
* [retryTimes](_net_resourcemanager_.resourcemanager.md#retrytimes)
* [threads](_net_resourcemanager_.resourcemanager.md#threads)
* [timeout](_net_resourcemanager_.resourcemanager.md#timeout)
* [TYPE_BINARY](_net_resourcemanager_.resourcemanager.md#type_binary)
* [TYPE_IMAGE](_net_resourcemanager_.resourcemanager.md#type_image)
* [TYPE_JSON](_net_resourcemanager_.resourcemanager.md#type_json)
* [TYPE_SOUND](_net_resourcemanager_.resourcemanager.md#type_sound)
* [TYPE_SOUND_EFFECT](_net_resourcemanager_.resourcemanager.md#type_sound_effect)
* [TYPE_TEXT](_net_resourcemanager_.resourcemanager.md#type_text)

### Accessors

* [errorCount](_net_resourcemanager_.resourcemanager.md#errorcount)
* [loadedCount](_net_resourcemanager_.resourcemanager.md#loadedcount)
* [total](_net_resourcemanager_.resourcemanager.md#total)

### Methods

* [$checkPendingTasks](_net_resourcemanager_.resourcemanager.md#_checkpendingtasks)
* [$load](_net_resourcemanager_.resourcemanager.md#_load)
* [emit](_net_resourcemanager_.resourcemanager.md#emit)
* [get](_net_resourcemanager_.resourcemanager.md#get)
* [has](_net_resourcemanager_.resourcemanager.md#has)
* [hasEventListener](_net_resourcemanager_.resourcemanager.md#haseventlistener)
* [off](_net_resourcemanager_.resourcemanager.md#off)
* [on](_net_resourcemanager_.resourcemanager.md#on)
* [removeAllListeners](_net_resourcemanager_.resourcemanager.md#removealllisteners)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ResourceManager**(stage: *[Stage](_display_stage_.stage.md)*, list: *`Array`<[ResourceInfo](../interfaces/_net_resourcemanager_.resourceinfo.md)>*, options?: *[ResourceManagerOption](../interfaces/_net_resourcemanager_.resourcemanageroption.md)*): [ResourceManager](_net_resourcemanager_.resourcemanager.md)

*Defined in [net/ResourceManager.ts:29](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/ResourceManager.ts#L29)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| stage | [Stage](_display_stage_.stage.md) |
| list | `Array`<[ResourceInfo](../interfaces/_net_resourcemanager_.resourceinfo.md)> |
| `Optional` options | [ResourceManagerOption](../interfaces/_net_resourcemanager_.resourcemanageroption.md) |

**Returns:** [ResourceManager](_net_resourcemanager_.resourcemanager.md)

___

## Properties

<a id="_errorcount"></a>

### `<Private>` $errorCount

**● $errorCount**: *`number`* = 0

*Defined in [net/ResourceManager.ts:23](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/ResourceManager.ts#L23)*

___
<a id="_events"></a>

### `<Protected>` $events

**● $events**: *`Object`*

*Inherited from [EventEmitter](_event_eventemitter_.eventemitter.md).[$events](_event_eventemitter_.eventemitter.md#_events)*

*Defined in [event/EventEmitter.ts:3](https://github.com/Lanfei/playable.js/blob/9a36445/src/event/EventEmitter.ts#L3)*

___
<a id="_list"></a>

### `<Private>` $list

**● $list**: *`Array`<[ResourceInfo](../interfaces/_net_resourcemanager_.resourceinfo.md)>*

*Defined in [net/ResourceManager.ts:26](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/ResourceManager.ts#L26)*

___
<a id="_loadedcount"></a>

### `<Private>` $loadedCount

**● $loadedCount**: *`number`* = 0

*Defined in [net/ResourceManager.ts:24](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/ResourceManager.ts#L24)*

___
<a id="_loadingcount"></a>

### `<Private>` $loadingCount

**● $loadingCount**: *`number`* = 0

*Defined in [net/ResourceManager.ts:25](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/ResourceManager.ts#L25)*

___
<a id="_resources"></a>

### `<Private>` $resources

**● $resources**: *`Object`*

*Defined in [net/ResourceManager.ts:29](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/ResourceManager.ts#L29)*

___
<a id="_stage"></a>

### `<Private>` $stage

**● $stage**: *[Stage](_display_stage_.stage.md)*

*Defined in [net/ResourceManager.ts:28](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/ResourceManager.ts#L28)*

___
<a id="_total"></a>

### `<Private>` $total

**● $total**: *`number`*

*Defined in [net/ResourceManager.ts:27](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/ResourceManager.ts#L27)*

___
<a id="retrytimes"></a>

###  retryTimes

**● retryTimes**: *`number`*

*Defined in [net/ResourceManager.ts:21](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/ResourceManager.ts#L21)*

___
<a id="threads"></a>

###  threads

**● threads**: *`number`*

*Defined in [net/ResourceManager.ts:19](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/ResourceManager.ts#L19)*

___
<a id="timeout"></a>

###  timeout

**● timeout**: *`number`*

*Defined in [net/ResourceManager.ts:20](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/ResourceManager.ts#L20)*

___
<a id="type_binary"></a>

### `<Static>` TYPE_BINARY

**● TYPE_BINARY**: *`string`* = "binary"

*Defined in [net/ResourceManager.ts:14](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/ResourceManager.ts#L14)*

___
<a id="type_image"></a>

### `<Static>` TYPE_IMAGE

**● TYPE_IMAGE**: *`string`* = "image"

*Defined in [net/ResourceManager.ts:15](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/ResourceManager.ts#L15)*

___
<a id="type_json"></a>

### `<Static>` TYPE_JSON

**● TYPE_JSON**: *`string`* = "json"

*Defined in [net/ResourceManager.ts:13](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/ResourceManager.ts#L13)*

___
<a id="type_sound"></a>

### `<Static>` TYPE_SOUND

**● TYPE_SOUND**: *`string`* = "sound"

*Defined in [net/ResourceManager.ts:16](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/ResourceManager.ts#L16)*

___
<a id="type_sound_effect"></a>

### `<Static>` TYPE_SOUND_EFFECT

**● TYPE_SOUND_EFFECT**: *`string`* = "soundEffect"

*Defined in [net/ResourceManager.ts:17](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/ResourceManager.ts#L17)*

___
<a id="type_text"></a>

### `<Static>` TYPE_TEXT

**● TYPE_TEXT**: *`string`* = "text"

*Defined in [net/ResourceManager.ts:12](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/ResourceManager.ts#L12)*

___

## Accessors

<a id="errorcount"></a>

###  errorCount

geterrorCount(): `number`

*Defined in [net/ResourceManager.ts:47](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/ResourceManager.ts#L47)*

**Returns:** `number`

___
<a id="loadedcount"></a>

###  loadedCount

getloadedCount(): `number`

*Defined in [net/ResourceManager.ts:51](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/ResourceManager.ts#L51)*

**Returns:** `number`

___
<a id="total"></a>

###  total

gettotal(): `number`

*Defined in [net/ResourceManager.ts:43](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/ResourceManager.ts#L43)*

**Returns:** `number`

___

## Methods

<a id="_checkpendingtasks"></a>

### `<Private>` $checkPendingTasks

▸ **$checkPendingTasks**(): `void`

*Defined in [net/ResourceManager.ts:55](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/ResourceManager.ts#L55)*

**Returns:** `void`

___
<a id="_load"></a>

### `<Private>` $load

▸ **$load**(info: *[ResourceInfo](../interfaces/_net_resourcemanager_.resourceinfo.md)*, attempts: *`number`*): `void`

*Defined in [net/ResourceManager.ts:62](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/ResourceManager.ts#L62)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| info | [ResourceInfo](../interfaces/_net_resourcemanager_.resourceinfo.md) |
| attempts | `number` |

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
<a id="get"></a>

###  get

▸ **get**<`Media`>(name: *`string`*): `Media`

*Defined in [net/ResourceManager.ts:154](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/ResourceManager.ts#L154)*

**Type parameters:**

#### Media 
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Media`

___
<a id="has"></a>

###  has

▸ **has**(name: *`string`*): `boolean`

*Defined in [net/ResourceManager.ts:150](https://github.com/Lanfei/playable.js/blob/9a36445/src/net/ResourceManager.ts#L150)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

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

