import { CampaignCatalogPage } from './app.po';

describe('campaign-catalog App', () => {
  let page: CampaignCatalogPage;

  beforeEach(() => {
    page = new CampaignCatalogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
