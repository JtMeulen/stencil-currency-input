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
          <slot></slot>
        </mock:shadow-root>
      </rabo-form>
    `);
  });
});
