import { newE2EPage } from '@stencil/core/testing';

describe('rabo-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rabo-form></rabo-form>');

    const element = await page.find('rabo-form');
    expect(element).toHaveClass('hydrated');
  });

  // it('disables the submit button when there is no input', async () => {
  //   const page = await newE2EPage();
  //   await page.setContent('<rabo-currency-input></rabo-currency-input>');
  //   const buttonEl = await page.find('rabo-currency-input >>> input[type="submit"]');

  //   expect(buttonEl).toEqualAttribute('disabled', "");
  // });

  // it('enables the submit button when there is no input', async () => {
  //   const page = await newE2EPage();

  //   await page.setContent('<rabo-currency-input></rabo-currency-input>');
  //   const decimalEl = await page.find('rabo-currency-input >>> .decimal');

  //   let value = await decimalEl.getProperty('value');
  //   expect(value).toBe('');

  //   await decimalEl.press('8');
  //   await decimalEl.press('8');
    
  //   const buttonEl = await page.find('rabo-currency-input >>> input[type="submit"]');

  //   expect(buttonEl).toEqualAttribute('disabled', null);
  // });

  it('emits the handleOnChange event when form is submitted', async () => {
    const page = await newE2EPage();

    await page.setContent('<rabo-form></rabo-form>');
    const submitBtn = await page.find('rabo-form >>> input');

    const onSubmit = await page.spyOnEvent('handleSubmit');

    await submitBtn.click();
    
    await page.waitForChanges();
    
    expect(onSubmit).toHaveReceivedEventDetail([]);
  });
});
