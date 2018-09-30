import { TestBed } from '@angular/core/testing';

import { CatalogService } from './catalog.service';
import {book2, jsonBook1} from '../model/book.spec';
import {HttpClientTestingBackend} from '@angular/common/http/testing/src/backend';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('CatalogService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: CatalogService = TestBed.get(CatalogService);
    expect(service).toBeTruthy();
  });

  it('should load books list', () => {
    const service: CatalogService = TestBed.get(CatalogService);
    const httptestingController: HttpTestingController = TestBed.get(HttpTestingController);

    const url = 'https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';
    httptestingController.expectOne(url)
      .flush([jsonBook1, book2]);
  });
});
