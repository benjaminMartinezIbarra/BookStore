import {Component, ContentChild, Input, OnInit, Optional} from '@angular/core';
import {FormGroupDirective, NgControl, NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() label: string;

  @ContentChild(NgControl) control: NgControl;

  get form() {
    return this.ngform || this.formGroupDir;
  }

  constructor(@Optional() private ngform: NgForm,
              @Optional() private formGroupDir: FormGroupDirective) { }

  ngOnInit() {
  }

}
