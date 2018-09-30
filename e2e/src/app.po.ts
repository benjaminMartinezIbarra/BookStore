import {browser, By, by, element} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }


  getTitleText() {
    return element(By.css('app-root h1')).getText();
  }
  getParagraphText () {
    return element(by.css('app-root h1')).getText();
  }

  clickOnMenu(name: string) {
    element(By.linkText(name)).click();
  }
}
