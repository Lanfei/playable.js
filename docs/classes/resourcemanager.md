[API Reference](../README.md) > [ResourceManager](../classes/resourcemanager.md)

# Class: ResourceManager

## Hierarchy

 [EventEmitter](eventemitter.md)

**↳ ResourceManager**

## Index

### Constructors

* [constructor](resourcemanager.md#constructor)

### Properties

* [$errorCount](resourcemanager.md#_errorcount)
* [$events](resourcemanager.md#_events)
* [$list](resourcemanager.md#_list)
* [$loadedCount](resourcemanager.md#_loadedcount)
* [$loadingCount](resourcemanager.md#_loadingcount)
* [$resources](resourcemanager.md#_resources)
* [$stage](resourcemanager.md#_stage)
* [$total](resourcemanager.md#_total)
* [retryTimes](resourcemanager.md#retrytimes)
* [threads](resourcemanager.md#threads)
* [timeout](resourcemanager.md#timeout)
* [TYPE_BINARY](resourcemanager.md#type_binary)
* [TYPE_JSON](resourcemanager.md#type_json)
* [TYPE_SOUND](resourcemanager.md#type_sound)
* [TYPE_TEXT](resourcemanager.md#type_text)
* [TYPE_TEXTURE](resourcemanager.md#type_texture)

### Accessors

* [errorCount](resourcemanager.md#errorcount)
* [loadedCount](resourcemanager.md#loadedcount)
* [total](resourcemanager.md#total)

### Methods

* [$checkPendingTasks](resourcemanager.md#_checkpendingtasks)
* [$load](resourcemanager.md#_load)
* [emit](resourcemanager.md#emit)
* [get](resourcemanager.md#get)
* [has](resourcemanager.md#has)
* [hasEventListener](resourcemanager.md#haseventlistener)
* [off](resourcemanager.md#off)
* [on](resourcemanager.md#on)
* [removeAllListeners](resourcemanager.md#removealllisteners)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ResourceManager**(stage: *[Stage](stage.md)*, list: *`Array`<[ResourceInfo](../interfaces/resourceinfo.md)>*, options?: *[ResourceManagerOption](../interfaces/resourcemanageroption.md)*): [ResourceManager](resourcemanager.md)

*Defined in [net/ResourceManager.ts:27](https://github.com/Lanfei/playable.js/blob/877c13c/src/net/ResourceManager.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| stage | [Stage](stage.md) |
| list | `Array`<[ResourceInfo](../interfaces/resourceinfo.md)> |
| `Optional` options | [ResourceManagerOption](../interfaces/resourcemanageroption.md) |

**Returns:** [ResourceManager](resourcemanager.md)

___

## Properties

<a id="_errorcount"></a>

### `<Protected>` $errorCount

**● $errorCount**: *`number`* = 0

*Defined in [net/ResourceManager.ts:21](https://github.com/Lanfei/playable.js/blob/877c13c/src/net/ResourceManager.ts#L21)*

___
<a id="_events"></a>

### `<Protected>` $events

**● $events**: *`Object`*

*Inherited from [EventEmitter](eventemitter.md).[$events](eventemitter.md#_events)*

*Defined in [event/EventEmitter.ts:5](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/EventEmitter.ts#L5)*

___
<a id="_list"></a>

### `<Protected>` $list

**● $list**: *`Array`<[ResourceInfo](../interfaces/resourceinfo.md)>*

*Defined in [net/ResourceManager.ts:24](https://github.com/Lanfei/playable.js/blob/877c13c/src/net/ResourceManager.ts#L24)*

___
<a id="_loadedcount"></a>

### `<Protected>` $loadedCount

**● $loadedCount**: *`number`* = 0

*Defined in [net/ResourceManager.ts:22](https://github.com/Lanfei/playable.js/blob/877c13c/src/net/ResourceManager.ts#L22)*

___
<a id="_loadingcount"></a>

### `<Protected>` $loadingCount

**● $loadingCount**: *`number`* = 0

*Defined in [net/ResourceManager.ts:23](https://github.com/Lanfei/playable.js/blob/877c13c/src/net/ResourceManager.ts#L23)*

___
<a id="_resources"></a>

### `<Protected>` $resources

**● $resources**: *`Object`*

*Defined in [net/ResourceManager.ts:27](https://github.com/Lanfei/playable.js/blob/877c13c/src/net/ResourceManager.ts#L27)*

___
<a id="_stage"></a>

### `<Protected>` $stage

**● $stage**: *[Stage](stage.md)*

*Defined in [net/ResourceManager.ts:26](https://github.com/Lanfei/playable.js/blob/877c13c/src/net/ResourceManager.ts#L26)*

___
<a id="_total"></a>

### `<Protected>` $total

**● $total**: *`number`*

*Defined in [net/ResourceManager.ts:25](https://github.com/Lanfei/playable.js/blob/877c13c/src/net/ResourceManager.ts#L25)*

___
<a id="retrytimes"></a>

###  retryTimes

**● retryTimes**: *`number`*

*Defined in [net/ResourceManager.ts:19](https://github.com/Lanfei/playable.js/blob/877c13c/src/net/ResourceManager.ts#L19)*

___
<a id="threads"></a>

###  threads

**● threads**: *`number`*

*Defined in [net/ResourceManager.ts:17](https://github.com/Lanfei/playable.js/blob/877c13c/src/net/ResourceManager.ts#L17)*

___
<a id="timeout"></a>

###  timeout

**● timeout**: *`number`*

*Defined in [net/ResourceManager.ts:18](https://github.com/Lanfei/playable.js/blob/877c13c/src/net/ResourceManager.ts#L18)*

___
<a id="type_binary"></a>

### `<Static>` TYPE_BINARY

**● TYPE_BINARY**: *`string`* = "binary"

*Defined in [net/ResourceManager.ts:13](https://github.com/Lanfei/playable.js/blob/877c13c/src/net/ResourceManager.ts#L13)*

___
<a id="type_json"></a>

### `<Static>` TYPE_JSON

**● TYPE_JSON**: *`string`* = "json"

*Defined in [net/ResourceManager.ts:12](https://github.com/Lanfei/playable.js/blob/877c13c/src/net/ResourceManager.ts#L12)*

___
<a id="type_sound"></a>

### `<Static>` TYPE_SOUND

**● TYPE_SOUND**: *`string`* = "sound"

*Defined in [net/ResourceManager.ts:15](https://github.com/Lanfei/playable.js/blob/877c13c/src/net/ResourceManager.ts#L15)*

___
<a id="type_text"></a>

### `<Static>` TYPE_TEXT

**● TYPE_TEXT**: *`string`* = "text"

*Defined in [net/ResourceManager.ts:11](https://github.com/Lanfei/playable.js/blob/877c13c/src/net/ResourceManager.ts#L11)*

___
<a id="type_texture"></a>

### `<Static>` TYPE_TEXTURE

**● TYPE_TEXTURE**: *`string`* = "texture"

*Defined in [net/ResourceManager.ts:14](https://github.com/Lanfei/playable.js/blob/877c13c/src/net/ResourceManager.ts#L14)*

___

## Accessors

<a id="errorcount"></a>

###  errorCount

geterrorCount(): `number`

*Defined in [net/ResourceManager.ts:45](https://github.com/Lanfei/playable.js/blob/877c13c/src/net/ResourceManager.ts#L45)*

**Returns:** `number`

___
<a id="loadedcount"></a>

###  loadedCount

getloadedCount(): `number`

*Defined in [net/ResourceManager.ts:49](https://github.com/Lanfei/playable.js/blob/877c13c/src/net/ResourceManager.ts#L49)*

**Returns:** `number`

___
<a id="total"></a>

###  total

gettotal(): `number`

*Defined in [net/ResourceManager.ts:41](https://github.com/Lanfei/playable.js/blob/877c13c/src/net/ResourceManager.ts#L41)*

**Returns:** `number`

___

## Methods

<a id="_checkpendingtasks"></a>

### `<Protected>` $checkPendingTasks

▸ **$checkPendingTasks**(): `void`

*Defined in [net/ResourceManager.ts:53](https://github.com/Lanfei/playable.js/blob/877c13c/src/net/ResourceManager.ts#L53)*

**Returns:** `void`

___
<a id="_load"></a>

### `<Protected>` $load

▸ **$load**(info: *[ResourceInfo](../interfaces/resourceinfo.md)*, attempts: *`number`*): `void`

*Defined in [net/ResourceManager.ts:60](https://github.com/Lanfei/playable.js/blob/877c13c/src/net/ResourceManager.ts#L60)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| info | [ResourceInfo](../interfaces/resourceinfo.md) |
| attempts | `number` |

**Returns:** `void`

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
<a id="get"></a>

###  get

▸ **get**<`Resource`>(name: *`string`*): `Resource`

*Defined in [net/ResourceManager.ts:147](https://github.com/Lanfei/playable.js/blob/877c13c/src/net/ResourceManager.ts#L147)*

**Type parameters:**

#### Resource 
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Resource`

___
<a id="has"></a>

###  has

▸ **has**(name: *`string`*): `boolean`

*Defined in [net/ResourceManager.ts:143](https://github.com/Lanfei/playable.js/blob/877c13c/src/net/ResourceManager.ts#L143)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

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
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(): `this`

*Inherited from [EventEmitter](eventemitter.md).[removeAllListeners](eventemitter.md#removealllisteners)*

*Defined in [event/EventEmitter.ts:61](https://github.com/Lanfei/playable.js/blob/877c13c/src/event/EventEmitter.ts#L61)*

**Returns:** `this`

___

