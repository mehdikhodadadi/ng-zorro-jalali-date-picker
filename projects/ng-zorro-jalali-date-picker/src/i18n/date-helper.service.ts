import { formatDate } from '@angular/common';
import { Inject, Injectable, Injector, Optional } from '@angular/core';
import fnsFormat from 'date-fns-jalali/format';
import fnsGetISOWeek from 'date-fns-jalali/getISOWeek';
import fnsParse from 'date-fns-jalali/parse';

import { WeekDayIndex } from '../time/candy-date';
import { NgTimeParser } from '../time/time-parser';
import { mergeDateConfig, NzDateConfig, NZ_DATE_CONFIG } from './date-config';
import { NzI18nService } from './nz-i18n.service';

export function DATE_HELPER_SERVICE_FACTORY(injector: Injector, config: NzDateConfig): DateHelperService {
  const i18n = injector.get(NzI18nService);
  return i18n.getDateLocale() ? new DateHelperByDateFns(i18n, config) : new DateHelperByDatePipe(i18n, config);
}

/**
 * Abstract DateHelperService(Token via Class)
 * Compatibility: compact for original usage by default which using DatePipe
 */
@Injectable({
  providedIn: 'root',
  useFactory: DATE_HELPER_SERVICE_FACTORY,
  deps: [Injector, [new Optional(), NZ_DATE_CONFIG]]
})
export abstract class DateHelperService {
  constructor(protected i18n: NzI18nService, @Optional() @Inject(NZ_DATE_CONFIG) protected config: NzDateConfig) {
    this.config = mergeDateConfig(this.config);
  }

  abstract getISOWeek(date: Date): number;
  abstract getFirstDayOfWeek(): WeekDayIndex;
  abstract format(date: Date | null, formatStr: string): string;
  abstract parseDate(text: string, formatStr?: string): Date;
  abstract parseTime(text: string, formatStr?: string): Date | undefined;
}

/**
 * DateHelper that handles date formats with date-fns
 */
export class DateHelperByDateFns extends DateHelperService {
  getISOWeek(date: Date): number {
    return fnsGetISOWeek(date);
  }

  // Use date-fns's "weekStartsOn" to support different locale when "config.firstDayOfWeek" is null
  // https://github.com/date-fns/date-fns/blob/v2.0.0-alpha.27/src/locale/en-US/index.js#L23
  getFirstDayOfWeek(): WeekDayIndex {
    let defaultWeekStartsOn: WeekDayIndex;
    try {
      defaultWeekStartsOn = this.i18n.getDateLocale().options!.weekStartsOn!;
    } catch (e) {
      defaultWeekStartsOn = 1;
    }
    return this.config.firstDayOfWeek == null ? defaultWeekStartsOn : this.config.firstDayOfWeek;
  }

  /**
   * Format a date
   * @see https://date-fns.org/docs/format#description
   * @param date Date
   * @param formatStr format string
   */
  format(date: Date, formatStr: string): string {
    return date ? fnsFormat(date, formatStr, { locale: this.i18n.getDateLocale() }) : '';
  }

  parseDate(text: string, formatStr: string): Date {
    return fnsParse(text, formatStr, new Date(), {
      locale: this.i18n.getDateLocale(),
      weekStartsOn: this.getFirstDayOfWeek()
    });
  }

  parseTime(text: string, formatStr: string): Date | undefined {
    return this.parseDate(text, formatStr);
  }
}

/**
 * DateHelper that handles date formats with angular's date-pipe
 *
 * @see https://github.com/NG-ZORRO/jalali-date-picker/issues/2406 - DatePipe may cause non-standard week bug, see:
 *
 */
export class DateHelperByDatePipe extends DateHelperService {
  getISOWeek(date: Date): number {
    return +this.format(date, 'w');
  }

  getFirstDayOfWeek(): WeekDayIndex {
    if (this.config.firstDayOfWeek === undefined) {
      const locale = this.i18n.getLocaleId();
      return locale && ['zh-cn', 'zh-tw'].indexOf(locale.toLowerCase()) > -1 ? 1 : 0;
    }
    return this.config.firstDayOfWeek;
  }

  format(date: Date | null, formatStr: string): string {
    return date ? formatDate(date, formatStr, this.i18n.getLocaleId())! : '';
  }

  parseDate(text: string): Date {
    return new Date(text);
  }

  parseTime(text: string, formatStr: string): Date {
    const parser = new NgTimeParser(formatStr, this.i18n.getLocaleId());
    return parser.toDate(text);
  }
}
