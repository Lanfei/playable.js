/**
 * Text Field
 */
var TextField = go2d.TextField = Sprite.extend({
	__init: function(text, options) {
		this._super();
		this.on('render', this._onRender);
		options = options || {};
		var properties = {
			bold: options.bold || false,
			italic: options.italic || false,
			fontSize: options.fontSize || 12,
			color: options.color || 'black',
			textAlign: options.textAlign || 'left',
			lineHeight: options.lineHeight || '120%',
			strokeSize: options.strokeSize || 0,
			strokeStyle: options.strokeStyle || null,
			fontFamily: options.fontFamily || 'Arial',
			breakWord: options.breakWord || false,
			autoResize: options.autoResize || false,
			paddingTop: options.paddingTop || 0,
			paddingLeft: options.paddingLeft || 0,
			paddingRight: options.paddingRight || 0,
			paddingBottom: options.paddingBottom || 0,
			maxWidth: options.maxWidth || 0xffffff,
			maxHeight: options.maxHeight || 0xffffff
		};
		forEach(properties, function(value, key) {
			Object.defineProperty(this, key, {
				set: function(value) {
					if (properties[key] !== value) {
						properties[key] = value;
						this._updateFont();
						this.update();
					}
				},
				get: function() {
					return properties[key];
				}
			});
		}, this);
		Object.defineProperty(this, 'textWidth', {
			set: function() {},
			get: function() {
				return this._getTextRange(this._splitLines()).width;
			}
		});
		Object.defineProperty(this, 'textHeight', {
			set: function() {},
			get: function() {
				return this._getTextRange(this._splitLines()).height;
			}
		});
		Object.defineProperty(this, 'text', {
			set: function(value) {
				if (value === undefined || value === null) {
					value = '';
				} else {
					value = '' + value;
				}
				if (text !== value) {
					text = value;
					this.update();
				}
			},
			get: function() {
				return text;
			}
		});
		this.text = text;
		this._updateFont();
	},
	_updateFont: function() {
		var ctx = this.context,
			italicStr = this.italic ? 'italic' : 'normal',
			boldStr = this.bold ? 'bold' : 'normal',
			sizeStr = this.fontSize + 'px';
		ctx.font = italicStr + ' ' + boldStr + ' ' + sizeStr + ' ' + this.fontFamily;
		ctx.textAlign = this.textAlign;
		ctx.textBaseline = 'top';
	},
	_getLineHeight: function() {
		var lineHeight = this.lineHeight;
		if (/%/.test(lineHeight)) {
			return parseFloat(lineHeight) * this.fontSize / 100;
		}
		return lineHeight;
	},
	_splitLines: function() {
		var newLines = [],
			ctx = this.context,
			lines = this.text.split('\n'),
			breakWord = this.breakWord,
			width = this.autoResize ? this.maxWidth : this.width;
		width -= this.paddingLeft + this.paddingRight;
		forEach(lines, function(line) {
			if (ctx.measureText(line).width < width) {
				newLines.push(line);
			} else if (breakWord) {
				var i = 0;
				while (line.length > 0) {
					++i;
					if (ctx.measureText(line.substr(0, i + 1)).width > width || i === line.length) {
						newLines.push(line.substr(0, i));
						line = line.substr(i);
						i = 0;
					}
				}
			} else {
				var word, bound,
					words = [],
					newLine = '',
					splits = line.split(/\b/);
				while (splits.length) {
					word = splits.shift();
					if (/\w+/i.test(word)) {
						words.push(word);
					} else {
						words = words.concat(word.split(''));
					}
				}
				while (words.length) {
					word = words[0];
					if (ctx.measureText(newLine + word).width > width && newLine) {
						newLines.push(newLine);
						newLine = '';
					} else {
						newLine += words.shift();
					}
				}
				if (newLine) {
					newLines.push(newLine);
				}
			}
		}, this);
		return newLines;
	},
	_onResize: function(width, height) {
		this._super(width, height);
		this._updateFont();
	},
	_onRender: function() {
		var lines = this._splitLines();
		if (this.autoResize) {
			var range = this._getTextRange(lines);
			this.width = Math.min(range.width, this.maxWidth) + this.paddingLeft + this.paddingRight;
			this.height = Math.min(range.height, this.maxHeight) + this.paddingTop + this.paddingBottom;
		}
		this._drawLines(lines);
	},
	_getTextRange: function(lines) {
		var width = 0,
			height = 0,
			ctx = this.context,
			lineHeight = this._getLineHeight();
		forEach(lines, function(line) {
			width = Math.max(width, ctx.measureText(line).width);
			height += lineHeight;
		});
		return {
			width: width,
			height: height
		};
	},
	_drawLines: function(lines) {
		var x = 0,
			y = 0,
			paddingLeft = this.paddingLeft,
			paddingTop = this.paddingTop,
			lineHeight = this._getLineHeight();
		if (this.textAlign === 'center') {
			x = paddingLeft + this.width / 2;
		} else if (this.textAlign === 'right') {
			x = paddingLeft + this.width;
		} else {
			x = paddingLeft;
		}
		forEach(lines, function(line, i) {
			y = paddingTop + i * lineHeight;
			this._drawText(line, x, y);
		}, this);
	},
	_drawText: function(text, x, y) {
		var ctx = this.context;
		ctx.save();
		if (this.color) {
			ctx.fillStyle = this.color;
			ctx.fillText(text, x, y);
		}
		if (this.strokeStyle) {
			ctx.lineWidth = this.strokeSize;
			ctx.strokeStyle = this.strokeStyle;
			ctx.strokeText(text, x, y);
		}
		ctx.restore();
	},
	setText: function(text) {
		this.text = text;
		return this;
	}
});
