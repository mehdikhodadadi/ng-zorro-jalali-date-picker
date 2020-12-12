 import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { DateHelperService } from '../i18n/date-helper.service';
import { AbstractPanelHeader } from './abstract-panel-header';
import { PanelSelector } from './interface';
import { transCompatFormat } from './util';
import getYear from 'date-fns-jalali/getYear';

@Component({
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'date-header', // tslint:disable-line:component-selector
  exportAs: 'dateHeader',
  templateUrl: './abstract-panel-header.html'
})
export class DateHeaderComponent extends AbstractPanelHeader {
  constructor(private dateHelper: DateHelperService) {
    super();
  }

  getSelectors(): PanelSelector[] {
    return [
      {
        className: `${this.prefixCls}-year-btn`,
        title: this.locale.yearSelect,
        onClick: () => this.changeMode('year'),
        label: getYear(this.value.nativeDate).toString()
      },
      {
        className: `${this.prefixCls}-month-btn`,
        title: this.locale.monthSelect,
        onClick: () => this.changeMode('month'),
        label: this.value.getJalaliMonthTitle()
      }
    ];
  }

 
}
