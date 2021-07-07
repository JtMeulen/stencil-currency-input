# rabo-currency-input
A simple component with two separate input fields which returns a 2 decimal value back.
It accepts two optional props: 'currency' and 'separator' which how the currency is being shown to the user.
A required unique 'name' prop must be used.

## Usage
```
<rabo-currency-input currency="€" separator="," name="euro"></rabo-currency-input>

<script>
  var inputform = document.querySelector('rabo-currency-input');

  inputform.addEventListener('handleOnChange', (value) => {
    // your functionality here
  })
</script>
```

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                       | Type     | Default     |
| ----------- | ----------- | --------------------------------------------------------------------------------- | -------- | ----------- |
| `currency`  | `currency`  | Currency icon to be rendered on the left hand side of the input fields            | `string` | `'$'`       |
| `name`      | `name`      | Required name field of the prop. Used to update the correct state in form element | `string` | `undefined` |
| `separator` | `separator` | Type of separator between the integer and decimal input fields <"." or ",">       | `string` | `'.'`       |


## Events

| Event            | Description                                       | Type                  |
| ---------------- | ------------------------------------------------- | --------------------- |
| `handleOnChange` | Returns the name and value object to the Listener | `CustomEvent<object>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
