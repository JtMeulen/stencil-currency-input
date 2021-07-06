import { newE2EPage } from '@stencil/core/testing';

describe('rabo-currency-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rabo-currency-input></rabo-currency-input>');

    const element = await page.find('rabo-currency-input');
    expect(element).toHaveClass('hydrated');
  });
});
