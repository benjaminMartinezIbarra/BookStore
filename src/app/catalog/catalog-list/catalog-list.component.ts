import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../../core/model/book';
import {CatalogService} from '../../core/services/catalog.service';
import {ActionService} from '../../core/services/action.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {

  bookList$: Observable<Book[]>;

  constructor(private catalog: CatalogService,
              public action: ActionService,
              private title: Title) {
  }

  ngOnInit() {
    this.bookList$ = this.catalog.getList();
    this.title.setTitle('Cataloque');
  }

}
