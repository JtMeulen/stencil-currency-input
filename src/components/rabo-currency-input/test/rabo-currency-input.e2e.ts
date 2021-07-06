import { newE2EPage } from '@stencil/core/testing';

describe('rabo-currency-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rabo-currency-input></rabo-currency-input>');
    const element = await page.find('rabo-currency-input');

    expect(element).toHaveClass('hydrated');
  });

  it('disables the submit button when there is no input', async () => {
    const page = await newE2EPage();
    await page.setContent('<rabo-currency-input></rabo-currency-input>');
    const buttonEl = await page.find('rabo-currency-input >>> input[type="submit"]');

    expect(buttonEl).toEqualAttribute('disabled', "");
  });

  it('enables the submit button when there is no input', async () => {
    const page = await newE2EPage();

    await page.setContent('<rabo-currency-input></rabo-currency-input>');
    const decimalEl = await page.find('rabo-currency-input >>> .decimal');

    let value = await decimalEl.getProperty('value');
    expect(value).toBe('');

    await decimalEl.press('8');
    await decimalEl.press('8');
    
    const buttonEl = await page.find('rabo-currency-input >>> input[type="submit"]');

    expect(buttonEl).toEqualAttribute('disabled', null);
  });

  it('renders an error message for wrong input and disables the submit button', async () => {
    const page = await newE2EPage();

    await page.setContent('<rabo-currency-input></rabo-currency-input>');
    const decimalEl = await page.find('rabo-currency-input >>> .decimal');

    let value = await decimalEl.getProperty('value');
    expect(value).toBe('');

    await decimalEl.press('A');
    await page.waitForChanges();

    const buttonEl = await page.find('rabo-currency-input >>> input[type="submit"]');
    expect(buttonEl).toEqualAttribute('disabled', "");

    const errorEl = await page.find('rabo-currency-input >>> .error-message');
    expect(errorEl.textContent).toEqual("Incorrect input");
  });

  it('emits the handleSubmit event when form is submitted', async () => {
    const page = await newE2EPage();

    await page.setContent('<rabo-currency-input></rabo-currency-input>');
    const decimalEl = await page.find('rabo-currency-input >>> .decimal');

    const onSubmit = await page.spyOnEvent('handleSubmit');

    let value = await decimalEl.getProperty('value');
    expect(value).toBe('');

    await decimalEl.press('8');
    await decimalEl.press('8');
    
    const buttonEl = await page.find('rabo-currency-input >>> input[type="submit"]');
    buttonEl.click();

    await page.waitForChanges();
    
    expect(onSubmit).toHaveReceivedEventDetail(0.88);
  });
});
