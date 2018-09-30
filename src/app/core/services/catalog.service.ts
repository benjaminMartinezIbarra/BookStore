import {Injectable, NgZone} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book, JsonBook} from '../model/book';
import {delay, map, shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  list$: Observable<Book[]>;

  constructor(private http: HttpClient,
              private ngZone: NgZone) {
    this.load();
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.ngZone.run(() => {
          this.load();
        });
      },15 * 1000);
      });
}
  load() {
    const url = 'https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';
    this.list$ = this.http.get<JsonBook[]>(url).pipe(
      map(jsonArray => jsonArray.map(json => new Book(json))), shareReplay(1)
    );
  }

  getList(): Observable<Book[]> {
    return this.list$;
  }

  getBook(id: string): Observable<Book> {

    return this.list$.pipe(
      map(list => list.find(book => book.id === id))
    );
  }
}
