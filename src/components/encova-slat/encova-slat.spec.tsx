import { newSpecPage } from '@stencil/core/testing';
import { EncovaSlat } from './encova-slat';

describe('encova-slat', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EncovaSlat],
      html: `<encova-slat></encova-slat>`,
    });
    expect(page.root).toEqualHtml(`
      <encova-slat>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </encova-slat>
    `);
  });
});
