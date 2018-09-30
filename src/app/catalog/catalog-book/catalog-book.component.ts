import { Component, OnInit } from '@angular/core';
import {CatalogService} from '../../core/services/catalog.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Book} from '../../core/model/book';
import {switchMap, tap} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-catalog-book',
  templateUrl: './catalog-book.component.html',
  styleUrls: ['./catalog-book.component.css']
})
export class CatalogBookComponent implements OnInit {

book$: Observable<Book>;

  constructor(private catalog: CatalogService,
              private route: ActivatedRoute,
              private title: Title) { }

  ngOnInit() {
    this.book$ = this.route.paramMap.pipe(switchMap(params => {
      const id = params.get('id');
      return this.catalog.getBook(id);
    }),
      tap(book => this.title.setTitle(book.title)));
  }

}
