import { newSpecPage } from '@stencil/core/testing';
import { RaboForm } from '../rabo-form';

describe('rabo-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RaboForm],
      html: `<rabo-form></rabo-form>`,
    });
    expect(page.root).toEqualHtml(`
      <rabo-form>
        <mock:shadow-root>
          <form class="container">
            <slot></slot>
            <input type="submit">
          </form>
        </mock:shadow-root>
      </rabo-form>
    `);
  });
});
