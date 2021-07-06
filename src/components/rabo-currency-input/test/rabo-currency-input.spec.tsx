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
          <form class="container">
            <div class="input-wrapper">
              <span class="currency">
                $
              </span>
              <input placeholder="0" type="tel">
              <span class="separator">
                .
              </span>
              <input class="decimal" maxlength="2" placeholder="00" type="tel">
              <input disabled="" type="submit">
            </div>
          </form>
        </mock:shadow-root>
      </rabo-currency-input>
    `);
  });

  it('renders with separator prop', async () => {
    const { root } = await newSpecPage({
      components: [RaboCurrencyInput],
      html: `<rabo-currency-input separator="."></rabo-currency-input>`,
    });
    expect(root).toEqualHtml(`
      <rabo-currency-input separator=".">
        <mock:shadow-root>
          <form class="container">
            <div class="input-wrapper">
              <span class="currency">
                $
              </span>
              <input placeholder="0" type="tel">
              <span class="separator">
                .
              </span>
              <input class="decimal" maxlength="2" placeholder="00" type="tel">
              <input disabled="" type="submit">
            </div>
          </form>
        </mock:shadow-root>
      </rabo-currency-input>
    `);
  });

  it('renders with currency prop', async () => {
    const { root } = await newSpecPage({
      components: [RaboCurrencyInput],
      html: `<rabo-currency-input currency="¢"></rabo-currency-input>`,
    });
    expect(root).toEqualHtml(`
      <rabo-currency-input currency="¢">
        <mock:shadow-root>
          <form class="container">
            <div class="input-wrapper">
              <span class="currency">
                ¢
              </span>
              <input placeholder="0" type="tel">
              <span class="separator">
                .
              </span>
              <input class="decimal" maxlength="2" placeholder="00" type="tel">
              <input disabled="" type="submit">
            </div>
          </form>
        </mock:shadow-root>
      </rabo-currency-input>
    `);
  });

  it('renders with all props', async () => {
    const { root } = await newSpecPage({
      components: [RaboCurrencyInput],
      html: `<rabo-currency-input separator="," currency="€"></rabo-currency-input>`,
    });
    expect(root).toEqualHtml(`
      <rabo-currency-input currency="€" separator=",">
        <mock:shadow-root>
          <form class="container">
            <div class="input-wrapper">
              <span class="currency">
                €
              </span>
              <input placeholder="0" type="tel">
              <span class="separator">
                ,
              </span>
              <input class="decimal" maxlength="2" placeholder="00" type="tel">
              <input disabled="" type="submit">
            </div>
          </form>
        </mock:shadow-root>
      </rabo-currency-input>
    `);
  });
});
