# rabo-form
A form wrapper listening to its child input fields changes. 
On pressing Submit button or pressing 'Enter' a 'handleSubmit' event is being 
emitted which returns the combined input of the two fields.

## Usage
```
<rabo-form>
  <rabo-currency-input currency="€" separator="," name="euro"></rabo-currency-input>
  <rabo-currency-input currency="$" separator="." name="dollar"></rabo-currency-input>
  <rabo-currency-input currency="¢" separator=";" name="yen"></rabo-currency-input>
</rabo-form>

<script>
  var inputform = document.querySelector('rabo-form');

  inputform.addEventListener('handleSubmit', (value) => {
    // your functionality here
  })
</script>
```


<!-- Auto Generated Below -->


## Events

| Event          | Description                                                                     | Type               |
| -------------- | ------------------------------------------------------------------------------- | ------------------ |
| `handleSubmit` | Returns an array of objects containing the input fields that users have changed | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
