import { Text, TextOption } from './Text';
export declare class Input extends Text {
    protected static $focusedInput: Input;
    protected static $inputElement: HTMLInputElement;
    protected static $textAreaElement: HTMLTextAreaElement;
    protected $value: string;
    protected $type: InputType;
    protected $maxLength: number;
    protected $placeholder: string;
    protected $placeholderColor: string;
    protected $explicitColor: string;
    protected $boundFocus: () => void;
    constructor(value?: string, options?: InputOption);
    set text(text: string);
    get value(): string;
    set value(value: string);
    get type(): InputType;
    set type(type: InputType);
    get color(): string;
    set color(color: string);
    get maxLength(): number;
    set maxLength(maxLength: number);
    get placeholder(): string;
    set placeholder(placeholder: string);
    get placeholderColor(): string;
    set placeholderColor(placeholderColor: string);
    selectAll(): this;
    focus(): this;
    blur(): this;
    protected $updateText(): void;
    protected $updateElement(): HTMLInputElement | HTMLTextAreaElement;
    protected $markDirty(sizeDirty?: boolean): void;
    protected $onTouchTap(): void;
    protected static $getElement(tagName: string): HTMLInputElement | HTMLTextAreaElement;
}
export declare type InputType = 'text' | 'password' | 'email' | 'url' | 'number' | 'range' | 'tel' | 'date' | 'month' | 'week' | 'time' | 'datetime' | 'datetime-local';
export interface InputOption extends TextOption {
    type?: InputType;
    maxLength?: number;
    placeholder?: string;
    placeholderColor?: string;
}
