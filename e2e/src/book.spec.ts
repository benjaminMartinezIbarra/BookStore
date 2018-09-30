import {Book, JsonBook} from '../../src/app/core/model/book';


export const jsonBook1: JsonBook = {
  _id: {$oid: '3AIRUROEO'},
  title: 'A',
  author: 'X',
  price: 10.10
};

export const jsonBook2: JsonBook = {
  _id: {$oid: '3AIRUROE1'},
  title: 'B',
  author: 'Y',
  price: 5.00
};

export const book1 = new Book(jsonBook1);
export const book2 = new Book(jsonBook2);
