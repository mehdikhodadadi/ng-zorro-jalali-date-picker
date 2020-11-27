 

import { Directive, Host, Optional } from '@angular/core';
import { NzDatePickerComponent } from './date-picker.component';

@Directive({
  selector: 'nz-month-picker',
  exportAs: 'nzMonthPicker'
})
// tslint:disable-next-line:directive-class-suffix
export class NzMonthPickerComponent {
  constructor(@Optional() @Host() public datePicker: NzDatePickerComponent) {
    this.datePicker.nzMode = 'month';
  }
}
