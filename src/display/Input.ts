import {Text, TextOption} from './Text';
import {TouchEvent} from '../event/TouchEvent';

export class Input extends Text {

	protected static $focusedInput: Input;
	protected static $inputElement: HTMLInputElement;
	protected static $textAreaElement: HTMLTextAreaElement;

	protected $value: string = '';
	protected $type: InputType = 'text';
	protected $maxLength: number = 0xffffff;
	protected $placeholder: string = '';
	protected $placeholderColor: string = '#888';
	protected $explicitColor: string = 'black';
	protected $boundFocus: () => void;

	public constructor(value?: string, options: InputOption = {}) {
		super('', options);
		this.$value = value;
		this.$type = options.type || this.$type;
		this.$maxLength = options.maxLength || this.$maxLength;
		this.$placeholder = options.placeholder || this.$placeholder;
		this.$placeholderColor = options.placeholderColor || this.$placeholderColor;
		this.$boundFocus = this.focus.bind(this);
		this.$updateText();
		this.on(TouchEvent.TOUCH_TAP, this.$onTouchTap);
	}

	public set text(text: string) {
	}

	public get value(): string {
		return this.$value;
	}

	public set value(value: string) {
		this.$value = value;
		this.$updateText();
	}

	public get type(): InputType {
		return this.$type;
	}

	public set type(type: InputType) {
		this.$type = type;
		this.$updateText();
	}

	public get color(): string {
		return this.$explicitColor;
	}

	public set color(color: string) {
		this.$explicitColor = color;
		if (this.$value) {
			this.$color = color;
		} else {
			this.$color = this.$placeholderColor;
		}
		this.$markDirty();
	}

	public get maxLength(): number {
		return this.$maxLength;
	}

	public set maxLength(maxLength: number) {
		this.$maxLength = maxLength;
	}

	public get placeholder(): string {
		return this.$placeholder;
	}

	public set placeholder(placeholder: string) {
		this.$placeholder = placeholder;
		this.$updateText();
	}

	public selectAll(): this {
		let element = this.$updateElement();
		this.focus();
		element.selectionStart = 0;
		element.selectionEnd = this.$value.length;
		return this;
	}

	public focus(): this {
		let element = this.$updateElement();
		element.style.display = 'block';
		element.value = this.$value;
		element.focus();
		Input.$focusedInput = this;
		return this;
	}

	public blur(): this {
		let element = this.$updateElement();
		element.style.display = 'none';
		element.blur();
		if (Input.$focusedInput === this) {
			this.value = element.value;
			Input.$focusedInput = null;
		}
		return this;
	}

	protected $updateText(): void {
		let text;
		let type = this.$type;
		let value = this.$value;
		if (type === 'password') {
			text = '';
			for (let i = 0, l = value.length; i < l; ++i) {
				text += '•';
			}
		} else {
			text = value;
		}
		if (text) {
			this.$text = text;
		} else {
			this.$text = this.$placeholder;
		}
		this.color = this.$explicitColor;
		this.$resizeCanvas();
	}

	protected $updateElement(): HTMLInputElement | HTMLTextAreaElement {
		let tagName = this.$multiline && this.$type === 'text' ? 'textarea' : 'input';
		let element = Input.$getElement(tagName);
		let isInput = tagName === 'input';
		if (isInput) {
			// @ts-ignore
			element.type = this.$type;
		}
		element.maxLength = this.$maxLength;
		element.placeholder = this.$placeholder;
		element.style.left = '0';
		element.style.bottom = '0';
		element.style.margin = '0';
		element.style.width = '100%';
		element.style.height = (isInput ? this.$fontSize * this.$lineHeight + 24 : this.height) + 'px';
		element.style.minHeight = isInput ? '0' : (this.$fontSize * this.$lineHeight) * 5 + 12 + 'px';
		element.style.maxHeight = '50%';
		element.style.padding = '6px';
		element.style.border = 'none';
		element.style.resize = 'none';
		element.style.outline = 'none';
		element.style.position = 'fixed';
		element.style.boxSizing = 'border-box';
		element.style.color = this.$explicitColor;
		element.style.fontSize = this.$fontSize + 'px';
		element.style.fontStyle = this.$fontStyle;
		element.style.fontFamily = this.$fontFamily;
		element.style.textAlign = this.$textAlign;
		element.style.lineHeight = this.$lineHeight + '';
		element.style.fontWeight = this.$fontWeight + '';
		element.style.wordBreak = this.$breakWord ? 'break-all' : 'normal';
		element.style.backgroundColor = this.$backgroundColor;
		element.style.webkitTapHighlightColor = 'transparent';
		element.style.boxShadow = '0 0 8px #aaa';
		return element;
	}

	protected $markDirty(sizeDirty?: boolean): void {
		super.$markDirty(sizeDirty);
		if (Input.$focusedInput) {
			this.$updateElement();
		}
	}

	protected $onTouchTap(): void {
		setTimeout(this.$boundFocus, 100);
	}

	protected static $getElement(tagName: string): HTMLInputElement | HTMLTextAreaElement {
		let element;
		if (tagName === 'input') {
			element = this.$inputElement;
		} else if (tagName === 'textarea') {
			element = this.$textAreaElement;
		}
		if (!element) {
			element = document.createElement(tagName);
			element.style.display = 'none';
			document.body.appendChild(element);
			element.addEventListener('input', () => {
				Input.$focusedInput.value = element.value;
			});
			element.addEventListener('blur', () => {
				Input.$focusedInput.blur();
			});
			if (tagName === 'input') {
				element.addEventListener('keydown', e => {
					if (e.keyCode === 13) {
						Input.$focusedInput.blur();
					}
				});
				this.$inputElement = element;
			} else if (tagName === 'textarea') {
				this.$textAreaElement = element;
			}
		}
		return element;
	}

}

export type InputType =
	'text'
	| 'password'
	| 'email'
	| 'url'
	| 'number'
	| 'range'
	| 'tel'
	| 'date'
	| 'month'
	| 'week'
	| 'time'
	| 'datetime'
	| 'datetime-local';

export interface InputOption extends TextOption {
	type?: InputType,
	maxLength?: number,
	placeholder?: string,
	placeholderColor?: string
}
