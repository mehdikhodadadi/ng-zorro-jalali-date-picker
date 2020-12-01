 import { Directive, Host, Optional } from '@angular/core';
import { NzDatePickerComponent } from './date-picker.component';

@Directive({
  selector: 'nz-range-picker',
  exportAs: 'nzRangePicker'
})
// tslint:disable-next-line:directive-class-suffix
export class NzRangePickerComponent {
  constructor(@Optional() @Host() public datePicker: NzDatePickerComponent) {
    this.datePicker.isRange = true;
  }
}
