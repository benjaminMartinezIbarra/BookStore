import {By, element} from 'protractor';
import {ListPage} from './list.po';

export class CatalogPage extends ListPage {


  buyBooksOnRow(rowIndex: number) {
    this.getOnRow(rowIndex, 'app-buy-book-button button').click();
  }

  getRowClass(): string {
    return 'app-catalog-list-item';
  }
}
