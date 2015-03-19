/**
 * 文本显示类，用于文本排列和显示。
 * @author Lanfei
 * @class TextField
 * @extends Sprite
 *
 * @constructor
 * @param {string} [text] 要显示的文本
 */
var TextField = go2d.TextField = Sprite.extend({
	__init: function(text, options) {
		this._super();
		this.on('render', this._onRender);
		options = options || {};
		var properties = {

			/**
			 * 是否粗体
			 * @property bold
			 * @type Boolean
			 * @default false
			 */
			bold: options.bold || false,

			/**
			 * 是否斜体
			 * @property italic
			 * @type Boolean
			 * @default false
			 */
			italic: options.italic || false,

			/**
			 * 字体大小
			 * @property fontSize
			 * @type number
			 * @default 24
			 */
			fontSize: options.fontSize || 24,

			/**
			 * 字体颜色或样式
			 * @property color
			 * @type string
			 * @default black |Object
			 */
			color: options.color || 'black',

			/**
			 * 对齐方式
			 * @property textAlign
			 * @type string
			 * @default left
			 */
			textAlign: options.textAlign || 'left',

			/**
			 * 行高，可为百分比
			 * @property lineHeight
			 * @type number
			 * @default 120% |string
			 */
			lineHeight: options.lineHeight || '120%',

			/**
			 * 描边大小
			 * @property strokeSize
			 * @type number
			 * @default 0
			 */
			strokeSize: options.strokeSize || 0,

			/**
			 * 描边颜色或样式
			 * @property strokeColor
			 * @type string
			 * @default null |Object
			 */
			strokeColor: options.strokeColor || null,

			/**
			 * 文本字体
			 * @property fontFamily
			 * @type string
			 * @default Arial
			 */
			fontFamily: options.fontFamily || 'Arial',

			/**
			 * 是否允许在单词内部换行
			 * @property breakWord
			 * @type Boolean
			 * @default false
			 */
			breakWord: options.breakWord || false,

			/**
			 * 是否自动调整宽高
			 * @property autoResize
			 * @type Boolean
			 * @default false
			 */
			autoResize: options.autoResize || false,

			/**
			 * 顶部内边距
			 * @property paddingTop
			 * @type number
			 * @default 0
			 */
			paddingTop: options.paddingTop || 0,

			/**
			 * 左部内边距
			 * @property paddingLeft
			 * @type number
			 * @default 0
			 */
			paddingLeft: options.paddingLeft || 0,

			/**
			 * 右部内边距
			 * @property paddingRight
			 * @type number
			 * @default 0
			 */
			paddingRight: options.paddingRight || 0,

			/**
			 * 底部内边距
			 * @property paddingBottom
			 * @type number
			 * @default 0
			 */
			paddingBottom: options.paddingBottom || 0,

			/**
			 * 自动调整宽高时的最大宽度
			 * @property maxWidth
			 * @type number
			 * @default 0xffffff
			 */
			maxWidth: options.maxWidth || 0xffffff,

			/**
			 * 自动调整宽高时的最大高度
			 * @property maxHeight
			 * @type number
			 * @default 0xffffff
			 */
			maxHeight: options.maxHeight || 0xffffff
		};

		forEach(properties, function(value, key) {
			Object.defineProperty(this, key, {
				set: function(value) {
					if (properties[key] !== value) {
						properties[key] = value;
						this._updateContext();
						this.update();
					}
				},
				get: function() {
					return properties[key];
				}
			});
		}, this);

		/**
		 * 文字渲染的宽高
		 * @property textRange
		 * @type number
		 */
		Object.defineProperty(this, 'textRange', {
			set: function() {},
			get: function() {
				return this._getTextRange(this._splitLines());
			}
		});

		/**
		 * 文字渲染的宽度
		 * @property textWidth
		 * @type number
		 */
		Object.defineProperty(this, 'textWidth', {
			set: function() {},
			get: function() {
				return this.textRange.width;
			}
		});

		/**
		 * 文字渲染的高度
		 * @property textHeight
		 * @type number
		 */
		Object.defineProperty(this, 'textHeight', {
			set: function() {},
			get: function() {
				return this.textRange.height;
			}
		});

		/**
		 * 要显示的文字
		 * @property text
		 * @type string
		 */
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
	},
	_updateContext: function() {
		var ctx = this.context,
			italicStr = this.italic ? 'italic' : 'normal',
			boldStr = this.bold ? 'bold' : 'normal',
			sizeStr = this.fontSize + 'px';

		ctx.font = italicStr + ' ' + boldStr + ' ' + sizeStr + ' ' + this.fontFamily;
		ctx.textAlign = this.textAlign;
		ctx.textBaseline = 'top';
		ctx.fillStyle = this.color;
		ctx.lineWidth = this.strokeSize;
		ctx.strokeStyle = this.strokeColor;
	},
	_getLineHeight: function() {
		var lineHeight = this.lineHeight;
		if (/%/.test(lineHeight)) {
			return Math.round(parseFloat(lineHeight) * this.fontSize / 100);
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
	_onRender: function() {
		var lines = this._splitLines();
		this._updateContext();
		if (this.autoResize) {
			var range = this._getTextRange(lines);
			this.width = Math.min(range.width, this.maxWidth) + this.paddingLeft + this.paddingRight;
			this.height = Math.min(range.height, this.maxHeight) + this.paddingTop + this.paddingBottom;
			this._updateContext();
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
			ctx.fillText(text, x, y);
		}
		if (this.strokeSize && this.strokeColor) {
			ctx.strokeText(text, x, y);
		}
		ctx.restore();
	},
	/**
	 * 设置要显示的文字
	 * @function setText
	 * @return {this}
	 */
	setText: function(text) {
		this.text = text;
		return this;
	}
});