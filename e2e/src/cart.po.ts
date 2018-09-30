import {ListPage} from './list.po';
import {By, element} from 'protractor';

export class CartPage extends ListPage {

  getRowClass(): string {
    return 'cart-row';
  }

  getQuantityOnRow(rowIndex: number) {
    return this.getOnRow(rowIndex, '.row-quantity input').getAttribute('value').then(text => +text);
  }

  setQuantityOnRow(rowIdex: number, newQuantity: number) {
    const input = this.getOnRow(rowIdex, '.row-quantity input');
    input.clear();
    input.sendKeys('' + newQuantity);
  }

  getTotalQuantity() {
    return element(By.css('.total-quantity'))
      .getText();  }

  getTotalPrice() {
    return element(By.css('.total-price'))
      .getText();  }
}
