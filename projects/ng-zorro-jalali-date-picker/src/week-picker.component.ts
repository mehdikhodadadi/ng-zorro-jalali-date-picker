 

import { Directive, Host, Optional } from '@angular/core';
import { NzDatePickerComponent } from './date-picker.component';

@Directive({
  selector: 'nz-week-picker',
  exportAs: 'nzWeekPicker'
})
// tslint:disable-next-line:directive-class-suffix
export class NzWeekPickerComponent {
  constructor(@Optional() @Host() public datePicker: NzDatePickerComponent) {
    this.datePicker.nzMode = 'week';
  }
}
