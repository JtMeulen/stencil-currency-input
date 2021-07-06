import { Component, Event, EventEmitter, h, State, Watch } from '@stencil/core';

@Component({
  tag: 'rabo-currency-input',
  styleUrl: 'rabo-currency-input.css',
  shadow: true,
})
export class RaboCurrencyInput {
  @State() integer: number = 0;
  @State() decimal: number = 0;
  @State() error: boolean = false;

  @Watch('integer')
  @Watch('decimal')
  checkValidity(): void {
    const value = this.constructValue();
    
    this.error = isNaN(value) || value < 0;
  }
  
  @Event() handleSubmit: EventEmitter<number>;


  private constructValue(): number {
    // .toFixed(2) returns a string so we have to cast that to a number too
    return +(+`${this.integer}.${this.decimal}`).toFixed(2);
  }

  onSubmitHandler(e) {
    e.preventDefault();

    this.handleSubmit.emit(this.constructValue());
  }

  handleIntegerInputChange(e) {
    this.integer = +e.target.value;
  }

  handleDecimalInputChange(e) {
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
          <input type="submit" disabled={this.error || this.constructValue() <= 0} />
        </div>
        {this.error && <p class="error-message">Incorrect input</p>}
      </form>
    );
  }
}
