import {book1} from './book.spec';
import {CartRow} from '../../src/app/core/model/cart-row';


fdescribe('CartRow class', () => {
  it('should compute row amount', () => {
    const cartRow1 = new CartRow(book1, 1);
    expect(cartRow1.amount).toBeCloseTo(10.10, 2);
    const cartRow2 = new CartRow(book1, 2);
    expect(cartRow1.amount).toBeCloseTo(20.20, 2);
    const cartRow3 = new CartRow(book1, 3);
    expect(cartRow1.amount).toBeCloseTo(30.30, 2);

  });
});
