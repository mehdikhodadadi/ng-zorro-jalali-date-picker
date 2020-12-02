import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NzDatePickerModule } from '../../../../dist/ng-zorro-jalali-date-picker/';
 //import { NzDatePickerModule } from '../../../ng-zorro-jalali-date-picker/src/';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
 //   BrowserAnimationsModule,
    AppRoutingModule,
    NzDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
