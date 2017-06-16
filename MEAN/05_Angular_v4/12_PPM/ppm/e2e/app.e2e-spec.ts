import { PpmPage } from './app.po';

describe('ppm App', () => {
  let page: PpmPage;

  beforeEach(() => {
    page = new PpmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
