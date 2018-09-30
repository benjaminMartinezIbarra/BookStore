import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyBookButtonComponent } from './buy-book-button.component';

describe('BuyBookButtonComponent', () => {
  let component: BuyBookButtonComponent;
  let fixture: ComponentFixture<BuyBookButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyBookButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyBookButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
