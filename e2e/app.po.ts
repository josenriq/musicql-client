import { browser, element, by } from 'protractor';

export class MusicqlPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('musicql-root h1')).getText();
  }
}
