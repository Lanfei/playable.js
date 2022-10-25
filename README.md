# playable.js

[![Build Status][build-image]][build-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Version][version-image]][version-url]
[![License][license-image]][license-url]

A lightweight HTML5 game engine.

## Installation

### Webpack/Browserify

```bash
npm install playable.js
```

### Direct `<script>` Include

Simply [download](https://github.com/Lanfei/playable.js/releases) and include with a script tag. `playable` will be registered as a global variable.

### CDN

For prototyping or learning purposes, you can use the latest version with:

```html
<script src="https://cdn.jsdelivr.net/npm/playable.js"></script>
```

For production, we recommend linking to a specific version number and build to avoid unexpected breakage from newer versions:

```html
<script src="https://cdn.jsdelivr.net/npm/playable.js@3.4.5/dist/playable.min.js"></script>
```

You can browse the source of the NPM package at [jsDelivr](https://cdn.jsdelivr.net/npm/playable.js/) or [unpkg](https://unpkg.com/playable.js/).

## Hello World

### JavaScript

```js
let stage = new playable.Stage();
let text = new playable.Text('Hello playable.js');
stage.addChild(text);
```

[Try it on CodePen](https://codepen.io/Lanfei/pen/WPzBLW/left/?editors=0010)

### TypeScript(Recommended)

```typescript
class Main extends playable.Stage {
  
  public constructor() {
    super();
    let text = new playable.Text('Hello playable.js');
    this.addChild(text);
  }
  
}

new Main();
```

[Try it on CodePen](https://codepen.io/Lanfei/pen/qgoeZg/left/?editors=0010)

## Documentation

- [Guide](https://lanfei.github.io/playable.js/)
- [Examples](https://lanfei.github.io/playable.js/examples/)
- [API Reference](https://lanfei.github.io/playable.js/docs/)

[build-url]: https://circleci.com/gh/Lanfei/playable.js
[build-image]: https://img.shields.io/circleci/project/github/Lanfei/playable.js.svg
[coverage-url]: https://coveralls.io/github/Lanfei/playable.js
[coverage-image]: https://coveralls.io/repos/github/Lanfei/playable.js/badge.svg
[version-url]: https://npmjs.org/package/playable.js
[version-image]: https://img.shields.io/npm/v/playable.js.svg
[license-url]: https://github.com/Lanfei/playable.js/blob/master/LICENSE
[license-image]: https://img.shields.io/npm/l/playable.js.svg
