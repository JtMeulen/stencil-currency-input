# rabo-currency-input
A simple component with two separate input fields which returns a 2 decimal value back.
It accepts two optional props: 'currency' and 'separator' which how the currency is being shown to the user.
On pressing Submit button or pressing 'Enter' a 'handleSubmit' event is being 
emitted which returns the combined input of the two fields.

## Usage
```
<rabo-currency-input currency="€" separator=","></rabo-currency-input>

<script>
  var inputform = document.querySelector('rabo-currency-input');

  inputform.addEventListener('handleSubmit', (value) => {
    // your functionality here
  })
</script>
```

## Properties

| Property    | Attribute   | Description                                                                 | Type     | Default |
| ----------- | ----------- | --------------------------------------------------------------------------- | -------- | ------- |
| `currency`  | `currency`  | Currency icon to be rendered on the left hand side of the input fields      | `string` | `'$'`   |
| `separator` | `separator` | Type of separator between the integer and decimal input fields <"." or ","> | `string` | `'.'`   |


## Events

| Event          | Description                                               | Type                  |
| -------------- | --------------------------------------------------------- | --------------------- |
| `handleSubmit` | Returns a two decimal float when the form get's submitted | `CustomEvent<number>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
