import { newE2EPage } from '@stencil/core/testing';

describe('encova-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<encova-form></encova-form>');

    const element = await page.find('encova-form');
    expect(element).toHaveClass('hydrated');
  });
});
