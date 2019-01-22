# playable.js

A lightweight HTML5 game engine.

## Installation

### Webpack/Browserify

```bash
$ npm install playable.js
```

### Direct `<script>` Include

Simply [download](https://github.com/Lanfei/playable.js/releases) and include with a script tag. `playable` will be registered as a global variable.

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/playable.js/dist/playable.min.js"></script>
```

You can browse the source of the NPM package at [cdn.jsdelivr.net/npm/playable.js](https://cdn.jsdelivr.net/npm/playable.js/).

## Examples

```js
let stage = new playable.Stage();
let textView = new playable.TextView('Hello playable.js');
stage.addChild(textView);
```

## Documentation

Check out the documentation [here](http://lanfei.github.io/playable.js/docs/).
