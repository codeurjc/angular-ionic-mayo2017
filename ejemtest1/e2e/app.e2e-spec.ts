import { Ejemtest1Page } from './app.po';

describe('ejemtest1 App', () => {
  let page: Ejemtest1Page;

  beforeEach(() => {
    page = new Ejemtest1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
