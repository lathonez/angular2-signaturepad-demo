import { SignaturepadDemoPage } from './app.po';

describe('signaturepad-demo App', function() {
  let page: SignaturepadDemoPage;

  beforeEach(() => {
    page = new SignaturepadDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
