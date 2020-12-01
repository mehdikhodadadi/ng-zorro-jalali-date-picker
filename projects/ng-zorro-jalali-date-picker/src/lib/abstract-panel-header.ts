 import { Directive, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CandyDate } from '../time/candy-date';
import { NzCalendarI18nInterface } from '../i18n/nz-i18n.interface';
import { NzDateMode } from '../standard-types';
import { PanelSelector } from './interface';
import getMonth from 'date-fns-jalali/getMonth';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class AbstractPanelHeader implements OnInit, OnChanges {
  prefixCls: string = `ant-picker-header`;
  selectors: PanelSelector[] = [];

  @Input() value!: CandyDate;
  @Input() locale!: NzCalendarI18nInterface;
  @Input() showSuperPreBtn: boolean = true;
  @Input() showSuperNextBtn: boolean = true;
  @Input() showPreBtn: boolean = true;
  @Input() showNextBtn: boolean = true;

  @Output() readonly panelModeChange = new EventEmitter<NzDateMode>();
  @Output() readonly valueChange = new EventEmitter<CandyDate>();

  getJalaliMonthTitle(date: Date): string {
    let month: number = getMonth(date);
    let value: string;

     switch(month)
     {
      case 0:
        value = "فروردین";
        break;
      case 1:
        value = "اردیبهشت";
        break;
      case 2:
        value = "خرداد";
        break;
      case 3:
        value = "تیر";
        break;
      case 4:
        value = "مرداد";
        break;
      case 5:
        value = "شهریور";
        break;
      case 6:
        value = "مهر";
        break;
      case 7:
        value = "آبان";
        break;
      case 8:
        value = "آذر";
        break;
      case 9:
        value = "دی";
        break;
      case 10:
        value = "بهمن";
        break;
      case 11:
        value = "اسفند";
        break;
     }

    return value;
  }

  abstract getSelectors(): PanelSelector[];

  superPreviousTitle(): string {
    return this.locale.previousYear;
  }

  previousTitle(): string {
    return this.locale.previousMonth;
  }

  superNextTitle(): string {
    return this.locale.nextYear;
  }

  nextTitle(): string {
    return this.locale.nextMonth;
  }

  superPrevious(): void {
    this.changeValue(this.value.addYears(-1));
  }

  superNext(): void {
    this.changeValue(this.value.addYears(1));
  }

  previous(): void {
    this.changeValue(this.value.addMonths(-1));
  }

  next(): void {
    this.changeValue(this.value.addMonths(1));
  }

  changeValue(value: CandyDate): void {
    if (this.value !== value) {
      this.value = value;
      this.valueChange.emit(this.value);
      this.render();
    }
  }

  changeMode(mode: NzDateMode): void {
    this.panelModeChange.emit(mode);
  }

  private render(): void {
    if (this.value) {
      this.selectors = this.getSelectors();
    }
  }

  ngOnInit(): void {
    if (!this.value) {
      this.value = new CandyDate(); // Show today by default
    }
    this.selectors = this.getSelectors();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value || changes.locale) {
      this.render();
    }
  }
}
