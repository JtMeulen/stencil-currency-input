import { newE2EPage } from '@stencil/core/testing';

describe('rabo-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rabo-form></rabo-form>');

    const element = await page.find('rabo-form');
    expect(element).toHaveClass('hydrated');
  });

  it('disables the submit button when there is wrong input', async () => {
    const page = await newE2EPage();

    await page.setContent('<rabo-form><rabo-currency-input name="euro"></rabo-currency-input></rabo-form>');
    const inputEl = await page.find('rabo-currency-input >>> .integer');

    await inputEl.press('A');
    await page.waitForChanges();

    const submitBtn = await page.find('rabo-form >>> input');

    expect(submitBtn).toEqualAttribute('disabled', "");
  });

  it('emits the handleSubmit event when form is submitted', async () => {
    const page = await newE2EPage();

    await page.setContent('<rabo-form><rabo-currency-input name="euro"></rabo-currency-input></rabo-form>');
    const inputEl = await page.find('rabo-currency-input >>> .decimal');

    await inputEl.press('8');
    await page.waitForChanges();

    const submitBtn = await page.find('rabo-form >>> input');

    const onSubmit = await page.spyOnEvent('handleSubmit');

    await submitBtn.click();
    
    await page.waitForChanges();
    
    expect(onSubmit).toHaveReceivedEventDetail([
      {
        "name": "euro",
        "value": "0.80",
      },
    ]);
  });
});
