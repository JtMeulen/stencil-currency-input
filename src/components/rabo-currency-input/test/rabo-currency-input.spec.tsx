import { newSpecPage } from '@stencil/core/testing';
import { RaboCurrencyInput } from '../rabo-currency-input';

describe('rabo-currency-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RaboCurrencyInput],
      html: `<rabo-currency-input></rabo-currency-input>`,
    });
    expect(page.root).toEqualHtml(`
      <rabo-currency-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rabo-currency-input>
    `);
  });
});
