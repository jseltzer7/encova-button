import { newSpecPage } from '@stencil/core/testing';
import { EncovaButton } from './encova-button';

describe('encova-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EncovaButton],
      html: `<encova-button></encova-button>`,
    });
    expect(page.root).toEqualHtml(`
      <encova-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </encova-button>
    `);
  });
});
