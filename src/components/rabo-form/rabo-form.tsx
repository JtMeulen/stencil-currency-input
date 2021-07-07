import { Component, Event, EventEmitter, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'rabo-form',
  styleUrl: 'rabo-form.css',
  shadow: true,
})
export class RaboForm {
  /**
   * Array of objects containing the user input values for each
   * input field given to this form
   */
  @State() _inputValues: { name: string; value: string , hasError: boolean}[] = [];
  
  @State() _isInvalid: boolean = true; //default to true as the form has no values

  /**
   * Returns an array of objects containing the input fields that users have changed
   */
  @Event() handleSubmit: EventEmitter;

  @Listen('handleOnChange')
  handleChange(ev) {
    const newInput = ev.detail;

    // Check if the value is already added to the inputValues
    const index = this._inputValues.findIndex(input => input.name === newInput.name);
    if (index > -1) {
      this._inputValues[index] = newInput;
    } else {
      this._inputValues.push(newInput);
    }

    this._isInvalid = this._inputValues.some((each) => each.hasError);
  }

  private onSubmitHandler(e) {
    e.preventDefault();

    const parsedInputValues = this._inputValues.map((each) => ({ name: each.name, value: each.value }));
    this.handleSubmit.emit(parsedInputValues);
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmitHandler(e)} class="container">
        <slot></slot>

        <input type="submit" disabled={this._isInvalid}/>
      </form>
    );
  }
}
