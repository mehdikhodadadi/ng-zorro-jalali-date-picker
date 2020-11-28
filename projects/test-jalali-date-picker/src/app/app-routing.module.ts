import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NzDatePickerModule } from '../../../ng-zorro-jalali-date-picker/src/date-picker.module'

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), NzDatePickerModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
