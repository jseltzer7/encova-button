import { newSpecPage } from '@stencil/core/testing';
import { EncovaForm } from './encova-form';

describe('encova-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EncovaForm],
      html: `<encova-form></encova-form>`,
    });
    expect(page.root).toEqualHtml(`
      <encova-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </encova-form>
    `);
  });
});
