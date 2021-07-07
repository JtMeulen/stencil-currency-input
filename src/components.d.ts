/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface RaboCurrencyInput {
        /**
          * Currency icon to be rendered on the left hand side of the input fields
         */
        "currency": string;
        /**
          * Required name field of the prop. Used to update the correct state in form element
         */
        "name": string;
        /**
          * Type of separator between the integer and decimal input fields <"." or ",">
         */
        "separator": string;
    }
    interface RaboForm {
    }
}
declare global {
    interface HTMLRaboCurrencyInputElement extends Components.RaboCurrencyInput, HTMLStencilElement {
    }
    var HTMLRaboCurrencyInputElement: {
        prototype: HTMLRaboCurrencyInputElement;
        new (): HTMLRaboCurrencyInputElement;
    };
    interface HTMLRaboFormElement extends Components.RaboForm, HTMLStencilElement {
    }
    var HTMLRaboFormElement: {
        prototype: HTMLRaboFormElement;
        new (): HTMLRaboFormElement;
    };
    interface HTMLElementTagNameMap {
        "rabo-currency-input": HTMLRaboCurrencyInputElement;
        "rabo-form": HTMLRaboFormElement;
    }
}
declare namespace LocalJSX {
    interface RaboCurrencyInput {
        /**
          * Currency icon to be rendered on the left hand side of the input fields
         */
        "currency"?: string;
        /**
          * Required name field of the prop. Used to update the correct state in form element
         */
        "name"?: string;
        /**
          * Returns the name and
         */
        "onHandleOnChange"?: (event: CustomEvent<object>) => void;
        /**
          * Type of separator between the integer and decimal input fields <"." or ",">
         */
        "separator"?: string;
    }
    interface RaboForm {
        /**
          * Returns a two decimal float when the form get's submitted
         */
        "onHandleSubmit"?: (event: CustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "rabo-currency-input": RaboCurrencyInput;
        "rabo-form": RaboForm;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "rabo-currency-input": LocalJSX.RaboCurrencyInput & JSXBase.HTMLAttributes<HTMLRaboCurrencyInputElement>;
            "rabo-form": LocalJSX.RaboForm & JSXBase.HTMLAttributes<HTMLRaboFormElement>;
        }
    }
}
