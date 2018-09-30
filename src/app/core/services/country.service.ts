import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) {
  }

  search(name: string): Observable<string[]> {
    name = name && name.trim();
    if (name) {
      const url = 'https://restcountries.eu/rest/v2/name/' + name;
      return this.http.get<Country[]>(url)
        .pipe(
          map(countries => countries.map( country => country.translations.fr )
          , catchError(err => of([])))
        );
    } else {
      return of([]);
    }

  }
}

interface Country {
  name: string;
  translations:
    {
    fr: string;
  };

}
