API Reference

# API Reference

## Table of contents

### Classes

- [Ease](classes/Ease.md)
- [Event](classes/Event.md)
- [EventEmitter](classes/EventEmitter.md)
- [Image](classes/Image.md)
- [Input](classes/Input.md)
- [Layer](classes/Layer.md)
- [Matrix](classes/Matrix.md)
- [Media](classes/Media.md)
- [MovieClip](classes/MovieClip.md)
- [Rectangle](classes/Rectangle.md)
- [Request](classes/Request.md)
- [ResourceManager](classes/ResourceManager.md)
- [Scroller](classes/Scroller.md)
- [Sound](classes/Sound.md)
- [Stage](classes/Stage.md)
- [Text](classes/Text.md)
- [Texture](classes/Texture.md)
- [Ticker](classes/Ticker.md)
- [TouchEvent](classes/TouchEvent.md)
- [Tween](classes/Tween.md)
- [Vector](classes/Vector.md)

### Interfaces

- [InputOption](interfaces/InputOption.md)
- [MovieClipFrame](interfaces/MovieClipFrame.md)
- [RequestOption](interfaces/RequestOption.md)
- [ResourceInfo](interfaces/ResourceInfo.md)
- [ResourceManagerOption](interfaces/ResourceManagerOption.md)
- [TextOption](interfaces/TextOption.md)
- [TweenOption](interfaces/TweenOption.md)
- [TweenStep](interfaces/TweenStep.md)

### Type Aliases

- [FillMode](README.md#fillmode)
- [FontStyle](README.md#fontstyle)
- [FontWeight](README.md#fontweight)
- [InputType](README.md#inputtype)
- [Listener](README.md#listener)
- [TextAlign](README.md#textalign)
- [VerticalAlign](README.md#verticalalign)

## Type Aliases

### FillMode

Ƭ **FillMode**: ``"scale"`` \| ``"repeat"`` \| ``"repeat-x"`` \| ``"repeat-y"``

#### Defined in

[display/Image.ts:200](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Image.ts#L200)

___

### FontStyle

Ƭ **FontStyle**: ``"normal"`` \| ``"italic"`` \| ``"oblique"``

#### Defined in

[display/Text.ts:338](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Text.ts#L338)

___

### FontWeight

Ƭ **FontWeight**: ``"normal"`` \| ``"bold"`` \| ``"bolder"`` \| ``"lighter"`` \| ``100`` \| ``200`` \| ``300`` \| ``400`` \| ``500`` \| ``600`` \| ``700`` \| ``800`` \| ``900``

#### Defined in

[display/Text.ts:339](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Text.ts#L339)

___

### InputType

Ƭ **InputType**: ``"text"`` \| ``"password"`` \| ``"email"`` \| ``"url"`` \| ``"number"`` \| ``"range"`` \| ``"tel"`` \| ``"date"`` \| ``"month"`` \| ``"week"`` \| ``"time"`` \| ``"datetime"`` \| ``"datetime-local"``

#### Defined in

[display/Input.ts:221](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Input.ts#L221)

___

### Listener

Ƭ **Listener**: (...`args`: `any`[]) => `any`

#### Type declaration

▸ (...`args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

#### Defined in

[event/EventEmitter.ts:92](https://github.com/Lanfei/playable.js/blob/99bdc51/src/event/EventEmitter.ts#L92)

___

### TextAlign

Ƭ **TextAlign**: ``"left"`` \| ``"right"`` \| ``"center"``

#### Defined in

[display/Text.ts:340](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Text.ts#L340)

___

### VerticalAlign

Ƭ **VerticalAlign**: ``"top"`` \| ``"middle"`` \| ``"bottom"``

#### Defined in

[display/Text.ts:341](https://github.com/Lanfei/playable.js/blob/99bdc51/src/display/Text.ts#L341)
