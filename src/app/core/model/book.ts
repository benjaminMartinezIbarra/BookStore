export interface JsonBook {
  _id?: {
    $oid: string;
  };
  isbn10?: string;
  title: string;
  author: string;
  price: number;
  pages?: number;
  rating?: number;
  votes?: number;
  image?: string;
  description?: string;
}

export class Book {
  _id?: {
    $oid: string;
  };
  isbn10?: string;
  title: string;
  author: string;
  price: number;
  pages?: number;
  rating?: number;
  votes?: number;
  image?: string;
  description?: string;
  constructor(json: JsonBook) {
    Object.assign(this, json);
  }
  get id(): string {
    return this._id.$oid;
  }
  set id(newId: string) {
    this._id.$oid = newId;
  }
}
