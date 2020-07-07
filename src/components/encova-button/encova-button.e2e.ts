import { newE2EPage } from '@stencil/core/testing';

describe('encova-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<encova-button></encova-button>');

    const element = await page.find('encova-button');
    expect(element).toHaveClass('hydrated');
  });
});
