 

import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from './button';

import { NzNoAnimationModule } from './no-animation';
import { NzOutletModule } from './outlet';
import { NzOverlayModule } from './overlay';
import { NzIconModule } from './icon';
import { NzTimePickerModule } from './time-picker';
import { CalendarFooterComponent } from './calendar-footer.component';

import { NzDatePickerComponent } from './date-picker.component';
import { DateRangePopupComponent } from './date-range-popup.component';
import { InnerPopupComponent } from './inner-popup.component';

import { LibPackerModule } from './lib/lib-packer.module';
import { NzMonthPickerComponent } from './month-picker.component';
import { NzPickerComponent } from './picker.component';
import { NzRangePickerComponent } from './range-picker.component';
import { NzWeekPickerComponent } from './week-picker.component';
import { NzYearPickerComponent } from './year-picker.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    LibPackerModule,
    NzIconModule,
    NzOverlayModule,
    NzNoAnimationModule,
    NzOutletModule,
    NzTimePickerModule,
    NzButtonModule,
    LibPackerModule
  ],
  exports: [NzDatePickerComponent, NzRangePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent],
  declarations: [
    NzPickerComponent,
    NzDatePickerComponent,
    NzMonthPickerComponent,
    NzYearPickerComponent,
    NzWeekPickerComponent,
    NzRangePickerComponent,

    CalendarFooterComponent,
    InnerPopupComponent,
    DateRangePopupComponent
  ]
})
export class NzDatePickerModule {}
