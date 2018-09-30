import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {ActionService} from '../../services/action.service';

@Component({
  selector: 'app-buy-book-button',
  templateUrl: './buy-book-button.component.html',
  styleUrls: ['./buy-book-button.component.css']
})
export class BuyBookButtonComponent implements OnInit {

  @Input() book: Book;

  constructor(public action: ActionService) { }

  ngOnInit() {
  }

}
