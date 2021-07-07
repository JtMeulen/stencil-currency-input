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

  @State() _integer: number = 0;
  @State() _decimal: number = 0;
  @State() _error: boolean = false;

  /**
   * Whenever the input fields get changed, check the validity of the total input.
   * Render an error message if the checks are not passed
   */
  @Watch('_integer')
  @Watch('_decimal')
  checkValidity(): void {
    const value = this.constructValue();

    this._error = isNaN(value) || value < 0;
  }

  /**
   * Returns a two decimal float when the form get's submitted
   */
  @Event() handleSubmit: EventEmitter<number>;

  private constructValue(): number {
    // .toFixed(2) returns a string so we have to cast that to a number too
    return +(+`${this._integer}.${this._decimal}`).toFixed(2);
  }

  private onSubmitHandler(e) {
    e.preventDefault();
    
    if (this._error) {
      return
    };

    this.handleSubmit.emit(this.constructValue());
  }

  private handleIntegerInputChange(e) {
    this._integer = +e.target.value;
  }

  private handleDecimalInputChange(e) {
    this._decimal = +e.target.value;
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmitHandler(e)} class="container">
        <div class="input-wrapper">
          <span class="currency">{this.currency}</span>

          <input type="tel" onInput={e => this.handleIntegerInputChange(e)} maxLength={16} placeholder="0" />

          <span class="separator">{this.separator}</span>

          <input class="decimal" type="tel" onInput={e => this.handleDecimalInputChange(e)} maxLength={2} placeholder="00" />

          <input type="submit" disabled={this._error || this.constructValue() <= 0} />
        </div>

        {this._error && <p class="error-message">Incorrect input</p>}
      </form>
    );
  }
}
