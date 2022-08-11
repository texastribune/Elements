import { CustomElement } from "./element.js";
/**
 * A collapsible menu. Requires page have <meta name="viewport" content="width=device-width"> set in HTML to collapse.
 * CSS variables for theming:
 *    --menu-color
 *    --menu-background-color
 *    --menu-button-size
 *    --menu-float
 */
export declare class Menu extends CustomElement {
    static defaultCollapseWidth: number;
    static collapseWidthAttribute: string;
    protected openedClass: string;
    private readonly button;
    private readonly container;
    constructor();
    static get observedAttributes(): string[];
    get css(): string;
    get opened(): boolean;
    get collapseWidth(): number;
    set collapseWidth(value: number);
    updateFromAttributes(attributes: {
        [p: string]: string | null;
    }): void;
    toggleOpened(): void;
    open(): void;
    close(): void;
    isOutsideTarget(event: Event): boolean;
    handleEvent(event: Event): void;
}
