import { newE2EPage } from '@stencil/core/testing';

describe('encova-slat', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<encova-slat></encova-slat>');

    const element = await page.find('encova-slat');
    expect(element).toHaveClass('hydrated');
  });
});
