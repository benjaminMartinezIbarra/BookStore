import {By, element} from 'protractor';

export abstract class ListPage {

abstract getRowClass(): string;


  getRows() {
    return element.all(By.className(this.getRowClass()));

  }

  getRowsCount() {
    return this.getRows().count();
  }

  getOnRow(rowIndex: number, cssSelector: string) {
    return this.getRows().get(rowIndex).element(By.css(cssSelector));
  }

  getAuthorOnRow(rowIndex: number) {
    return this.getOnRow(rowIndex, '.row-author').getText();
  }



}
