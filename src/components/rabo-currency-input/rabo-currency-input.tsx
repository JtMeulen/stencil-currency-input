import { Component, Event, EventEmitter, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'rabo-currency-input',
  styleUrl: 'rabo-currency-input.css',
  shadow: true,
})
export class RaboCurrencyInput {
  /**
   * Currency icon to be rendered on the left hand side of the input fields
   */
  @Prop() currency: string = '$';

  /**
   * Type of separator between the integer and decimal input fields
   * <"." or ",">
   */
  @Prop() separator: string = '.';

  /**
   * Required name field of the prop.
   * Used to update the correct state in form element
   */
  @Prop() name: string;

  @State() _integer: number = 0;
  @State() _decimal: number = 0;
  @State() _error: boolean = false;

  /**
   * Whenever the input fields get changed, check the validity of the total input.
   * Render an error border around the input if the checks are not passed
   */
  @Watch('_integer')
  @Watch('_decimal')
  checkValidity(): void {
    const value = this.constructValue();
    const hasError = isNaN(this._integer) || isNaN(this._decimal) || +value < 0;

    this._error = hasError;

    this.handleOnChange.emit({
      name: this.name,
      value,
      hasError,
    });
  }

  /**
   * Returns the name and value object to the Listener
   */
  @Event() handleOnChange: EventEmitter<object>;

  private constructValue(): string {
    return parseFloat(`${this._integer}.${this._decimal}`).toFixed(2);
  }

  private handleIntegerInputChange(e) {
    this._integer = +e.target.value;
  }

  private handleDecimalInputChange(e) {
    this._decimal = +e.target.value;
  }

  render() {
    return (
      <div class="input-wrapper">
        <span class="currency">{this.currency}</span>

        <input 
          class={'integer ' + (this._error && 'error')} 
          type="text" 
          inputmode="decimal" 
          onInput={e => this.handleIntegerInputChange(e)} 
          maxLength={16} 
          placeholder="0" 
        />

        <span class="separator">{this.separator}</span>

        <input 
          class={'decimal ' + (this._error && 'error')} 
          type="text" 
          inputmode="decimal" 
          onInput={e => this.handleDecimalInputChange(e)} 
          maxLength={2} 
          placeholder="00" 
        />
      </div>
    );
  }
}
