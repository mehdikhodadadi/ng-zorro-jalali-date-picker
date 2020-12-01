import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import fa from '@angular/common/locales/fa';
registerLocaleData(fa);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-jalali-date-picker';
}
