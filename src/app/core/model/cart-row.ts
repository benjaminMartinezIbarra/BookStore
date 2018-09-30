import {Book} from './book';

export class CartRow {

  constructor(public book: Book,
              public quantity: number) {

  }

  get amount(): number {
    return this.book.price * this.quantity;
  }
}
