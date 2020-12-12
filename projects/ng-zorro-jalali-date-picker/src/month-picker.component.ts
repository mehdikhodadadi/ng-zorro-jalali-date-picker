 import { Directive, Host, Optional } from '@angular/core';
import { NzDatePickerComponent } from './date-picker.component';
import { NzI18nService } from './i18n/nz-i18n.service';
import { fa_IR } from './i18n';

import { registerLocaleData } from '@angular/common';
import fa from '@angular/common/locales/fa';
registerLocaleData(fa);

@Directive({
  selector: 'nz-month-picker',
  providers: [NzI18nService],
  exportAs: 'nzMonthPicker'
})
// tslint:disable-next-line:directive-class-suffix
export class NzMonthPickerComponent {
  constructor(@Optional() @Host() public datePicker: NzDatePickerComponent, protected i18n: NzI18nService) {
    this.i18n.setLocale(fa_IR);
    this.datePicker.nzMode = 'month';
  }
}
