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
  @State() _inputValues: { name: string; value: string }[] = [];

  /**
   * Returns an array of objects containing the input fields that users have changed
   */
  @Event() handleSubmit: EventEmitter;

  @Listen('handleOnChange')
  handleChange(ev) {
    const newInput = ev.detail;

    const index = this._inputValues.findIndex(input => input.name === newInput.name);
    if (index > -1) {
      this._inputValues[index] = newInput;
    } else {
      this._inputValues.push(newInput);
    }
  }

  private onSubmitHandler(e) {
    e.preventDefault();

    this.handleSubmit.emit(this._inputValues);
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmitHandler(e)} class="container">
        <slot></slot>

        <input type="submit" />
      </form>
    );
  }
}
