import { CustomElement } from "./element.js";
export declare abstract class AbstractInput extends CustomElement {
    abstract value: any;
    static readonly errorClass = "error";
    static nameAttribute: string;
    private static readonly containerId;
    private static readonly errorSpanId;
    protected static readonly inputContainerId = "input-container";
    private readonly container;
    private readonly errorMessageSpan;
    protected readonly inputContainer: HTMLElement;
    protected constructor();
    static readonly observedAttributes: string[];
    readonly css: string;
    name: string;
    errorMessage: string;
    render(shadowRoot: ShadowRoot): void;
}
export declare class Input extends AbstractInput {
    protected input: HTMLInputElement;
    protected label: HTMLLabelElement;
    static valueClass: string;
    static typeAttribute: string;
    /**
     * @event
     */
    static EVENT_CHANGE: string;
    constructor();
    static readonly observedAttributes: string[];
    readonly css: string;
    value: any;
    type: string;
    updateAttributes(attributes: {
        [p: string]: string | null;
    }): void;
    protected onValueChange(): void;
}
export declare class BooleanInput extends Input {
    private checkId;
    constructor();
    static readonly observedAttributes: string[];
    readonly css: string;
    value: boolean;
    updateAttributes(attributes: {
        [p: string]: string | null;
    }): void;
}
export declare class SelectInput extends AbstractInput {
    static multiAttribute: string;
    private static readonly floatClass;
    protected select: HTMLSelectElement;
    protected label: HTMLLabelElement;
    constructor();
    static readonly observedAttributes: string[];
    readonly css: string;
    multi: boolean;
    value: any;
    private moveLabel;
    updateAttributes(attributes: {
        [p: string]: string | null;
    }): void;
}
export declare class SelectOption extends CustomElement {
    static typeAttribute: string;
    static valueAttribute: string;
    option: HTMLOptionElement;
    constructor();
    static readonly observedAttributes: string[];
    readonly css: string;
    value: any;
    type: string;
    selected: boolean;
    readonly parentSelect: HTMLSelectElement | null;
    updateAttributes(attributes: {
        [p: string]: string | null;
    }): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
export declare class Form extends CustomElement {
    private readonly container;
    private readonly errorMessage;
    lastResponse: Response | null;
    static containerClass: string;
    static loadingClass: string;
    static successClass: string;
    static errorClass: string;
    static defaultErrorMessage: string;
    /**
     * @event
     */
    static EVENT_SUBMIT: string;
    /**
     * @event
     */
    static EVENT_SUCCESS: string;
    /**
     * @event
     */
    static EVENT_ERROR: string;
    constructor();
    readonly css: string;
    action: string | null;
    method: string | null;
    updateAttributes(attributes: {
        [p: string]: string | null;
    }): void;
    render(shadowRoot: ShadowRoot): void;
    protected getResponse(): Promise<Response>;
    protected handleResponse(response: Response): Promise<void>;
    submit(): void;
    onSuccess(): void;
    onError(fieldErrors: {
        [field: string]: string;
    }, errorMessage: string): void;
}
