import { SellinguiPage } from './app.po';

describe('sellingui App', function() {
  let page: SellinguiPage;

  beforeEach(() => {
    page = new SellinguiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
