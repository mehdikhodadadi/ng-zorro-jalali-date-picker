 

import { Directive, Host, Optional } from '@angular/core';
import { NzDatePickerComponent } from './date-picker.component';

@Directive({
  selector: 'nz-year-picker',
  exportAs: 'nzYearPicker'
})
// tslint:disable-next-line:directive-class-suffix
export class NzYearPickerComponent {
  constructor(@Optional() @Host() public datePicker: NzDatePickerComponent) {
    this.datePicker.nzMode = 'year';
  }
}
