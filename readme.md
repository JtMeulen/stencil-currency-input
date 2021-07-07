# Rabobank Stencil Challenge

## Introduction
This repo contains two separate components build with StencilJS.
There is one 'rabo-form' component, which expects one or more 'rabo-currency-input' elements. 
Submitting the form will return an array of objects with the user input.
- [Rabo Input element](src/components/rabo-currency-input/readme.md)
- [Rabo Form element](src/components/rabo-form/readme.md)


### Run the project locally
To see the results of submitting the form, please check the console in the developer tools!
```
npm install
npm run start
```

### Tests
Tests can be run with
```
npm run test
```

## Improvements / Future work
* Use locale string as prop to generate correct currency and separator
* Improve styling and make responsive
* Allow for disabled input fields by passing prop
