import { newE2EPage } from '@stencil/core/testing';

describe('rabo-currency-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rabo-currency-input></rabo-currency-input>');
    const element = await page.find('rabo-currency-input');

    expect(element).toHaveClass('hydrated');
  });

  it('renders an error boundary around the input', async () => {
    const page = await newE2EPage();

    await page.setContent('<rabo-currency-input></rabo-currency-input>');
    const decimalEl = await page.find('rabo-currency-input >>> .decimal');
    const integerEl = await page.find('rabo-currency-input >>> .integer');

    let value = await decimalEl.getProperty('value');
    expect(value).toBe('');

    await decimalEl.press('A');
    await page.waitForChanges();

    expect(integerEl.classList.contains('error'));
  });

  it('emits the handleOnChange event when form is submitted', async () => {
    const page = await newE2EPage();

    await page.setContent('<rabo-currency-input name="euro"></rabo-currency-input>');
    const decimalEl = await page.find('rabo-currency-input >>> .decimal');

    const onChange = await page.spyOnEvent('handleOnChange');

    let value = await decimalEl.getProperty('value');
    expect(value).toBe('');

    await decimalEl.press('8');
    await decimalEl.press('8');
    
    await page.waitForChanges();
    
    expect(onChange).toHaveReceivedEventDetail({
      name: "euro",
      value: "0.88",
      hasError: false,
    });
  });
});
