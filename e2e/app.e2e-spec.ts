import { MusicqlPage } from './app.po';

describe('musicql App', () => {
  let page: MusicqlPage;

  beforeEach(() => {
    page = new MusicqlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('musicql works!');
  });
});
