import { Component, Event, EventEmitter, h, State } from '@stencil/core';

@Component({
  tag: 'rabo-currency-input',
  styleUrl: 'rabo-currency-input.css',
  shadow: true,
})
export class RaboCurrencyInput {
  @State() integer: number = 0;
  @State() decimal: number = 0;
  @State() error: boolean = false;

  @Event() handleSubmit: EventEmitter<number>;

  onSubmitHandler(e) {
    e.preventDefault();

    // .toFixed(2) returns a string so we have to cast that to a number too
    const constructedValue = +(+`${this.integer}.${this.decimal}`).toFixed(2);

    this.handleSubmit.emit(constructedValue);
  }

  handleIntegerInputChange(e) {
    const value = e.target.value;

    this.error = isNaN(value);
    this.integer = +e.target.value;
  }

  handleDecimalInputChange(e) {
    const value = e.target.value;

    this.error = isNaN(value);
    this.decimal = +e.target.value;
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmitHandler(e)} class="container">
        <div class="input-wrapper">
          <span>$</span>
          <input type="tel" onInput={e => this.handleIntegerInputChange(e)} placeholder="0" />
          <span>,</span>
          <input type="tel" onInput={e => this.handleDecimalInputChange(e)} maxLength={2} placeholder="00" />
          <input type="submit" disabled={this.error} />
        </div>
        {this.error && <p class="error-message">Errorr</p>}
      </form>
    );
  }
}
