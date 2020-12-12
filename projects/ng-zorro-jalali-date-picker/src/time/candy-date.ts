import addMonths from 'date-fns-jalali/addMonths';
import addYears from 'date-fns-jalali/addYears';
import differenceInCalendarDays from 'date-fns-jalali/differenceInCalendarDays';
import differenceInCalendarMonths from 'date-fns-jalali/differenceInCalendarMonths';
import differenceInCalendarYears from 'date-fns-jalali/differenceInCalendarYears';
import differenceInHours from 'date-fns-jalali/differenceInHours';
import differenceInMinutes from 'date-fns-jalali/differenceInMinutes';
import differenceInSeconds from 'date-fns-jalali/differenceInSeconds';
import isFirstDayOfMonth from 'date-fns-jalali/isFirstDayOfMonth';
import isLastDayOfMonth from 'date-fns-jalali/isLastDayOfMonth';
import isSameDay from 'date-fns-jalali/isSameDay';
import isSameHour from 'date-fns-jalali/isSameHour';
import isSameMinute from 'date-fns-jalali/isSameMinute';
import isSameMonth from 'date-fns-jalali/isSameMonth';
import isSameSecond from 'date-fns-jalali/isSameSecond';
import isSameYear from 'date-fns-jalali/isSameYear';
import isToday from 'date-fns-jalali/isToday';
import isValid from 'date-fns-jalali/isValid';
import setDay from 'date-fns-jalali/setDay';
import setMonth from 'date-fns-jalali/setMonth';
import setYear from 'date-fns-jalali/setYear';
import startOfMonth from 'date-fns-jalali/startOfMonth';
import startOfWeek from 'date-fns-jalali/startOfWeek';
import getDate from 'date-fns-jalali/getDate';
import getMonth from 'date-fns-jalali/getMonth';
import { warn } from '../logger/logger';
import { NzSafeAny } from '../types/any';
import { IndexableObject } from '../types/indexable';

export type CandyDateMode = 'decade' | 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second';
export type NormalizedMode = 'decade' | 'year' | 'month';
export type WeekDayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type CandyDateType = CandyDate | Date | null;
export type SingleValue = CandyDate | null;
export type CompatibleValue = SingleValue | SingleValue[];

export function wrongSortOrder(rangeValue: SingleValue[]): boolean {
  const [start, end] = rangeValue;
  return !!start && !!end && end.isBeforeDay(start);
}

export function normalizeRangeValue(value: SingleValue[], allowSameInTwoPanel: boolean, type: NormalizedMode = 'month'): CandyDate[] {
  const [start, end] = value;
  let newStart: CandyDate = start || new CandyDate();
  let newEnd: CandyDate = end || new CandyDate();
  if (start && !end) {
    newStart = start;
    newEnd = start.add(1, type);
  } else if (!start && end) {
    newStart = end.add(-1, type);
    newEnd = end;
  }
  if (newEnd.isSame(newStart, type) && !allowSameInTwoPanel) {
    newEnd = newStart.add(1, type);
  }
  return [newStart, newEnd];
}

export function cloneDate(value: CompatibleValue): CompatibleValue {
  if (Array.isArray(value)) {
    return value.map(v => (v instanceof CandyDate ? v.clone() : null));
  } else {
    return value instanceof CandyDate ? value.clone() : null;
  }
}

/**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
export class CandyDate implements IndexableObject {
  nativeDate: Date;
  // locale: string; // Custom specified locale ID
  constructor(date?: Date | string | number) {
    if (date) {
      if (date instanceof Date) {
        this.nativeDate = date;
      } else if (typeof date === 'string' || typeof date === 'number') {
        warn('The string type is not recommended for date-picker, use "Date" type');
        this.nativeDate = new Date(date);
      } else {
        throw new Error('The input date type is not supported ("Date" is now recommended)');
      }
    } else {
      this.nativeDate = new Date();
    }
  }

  calendarStart(options?: { weekStartsOn: WeekDayIndex | undefined }): CandyDate {
    return new CandyDate(startOfWeek(startOfMonth(this.nativeDate), options));
  }

  // ---------------------------------------------------------------------
  // | Native shortcuts
  // -----------------------------------------------------------------------------\

  getYear(): number {
    return this.nativeDate.getFullYear();
  }

  getMonth(): number {
    return this.nativeDate.getMonth();
  }

   getDay(): number {
    return this.nativeDate.getDay();
  }

  getTime(): number {
    return this.nativeDate.getTime();
  }

  getDate(): number {
    return this.nativeDate.getDate();
  }

  getJalaliMonthTitle(): string {
    let month: number = getMonth(this.nativeDate);
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

  getJalaliDate(): number {
    return getDate(this.nativeDate);
  }

  getHours(): number {
    return this.nativeDate.getHours();
  }

  getMinutes(): number {
    return this.nativeDate.getMinutes();
  }

  getSeconds(): number {
    return this.nativeDate.getSeconds();
  }

  getMilliseconds(): number {
    return this.nativeDate.getMilliseconds();
  }

  // ---------------------------------------------------------------------
  // | New implementing APIs
  // ---------------------------------------------------------------------

  clone(): CandyDate {
    return new CandyDate(new Date(this.nativeDate));
  }

  setHms(hour: number, minute: number, second: number): CandyDate {
    return new CandyDate(this.nativeDate.setHours(hour, minute, second));
  }

  setYear(year: number): CandyDate {
    return new CandyDate(setYear(this.nativeDate, year));
  }

  setJalaliYear(year: number): CandyDate {
    return new CandyDate(setYear(this.nativeDate, year));
  }

  addYears(amount: number): CandyDate {
    return new CandyDate(addYears(this.nativeDate, amount));
  }

  // NOTE: month starts from 0
  // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
  setMonth(month: number): CandyDate {
    return new CandyDate(setMonth(this.nativeDate, month));
  }

  addMonths(amount: number): CandyDate {
    return new CandyDate(addMonths(this.nativeDate, amount));
  }

  setDay(day: number, options?: { weekStartsOn: WeekDayIndex }): CandyDate {
    return new CandyDate(setDay(this.nativeDate, day, options));
  }

  setDate(amount: number): CandyDate {
    const date = new Date(this.nativeDate);
    date.setDate(amount);
    return new CandyDate(date);
  }

  addDays(amount: number): CandyDate {
    return this.setDate(this.getDate() + amount);
  }

  add(amount: number, mode: NormalizedMode): CandyDate {
    switch (mode) {
      case 'decade':
        return this.addYears(amount * 10);
        break;
      case 'year':
        return this.addYears(amount);
        break;
      case 'month':
        return this.addMonths(amount);
        break;
      default:
        return this.addMonths(amount);
        break;
    }
  }

  isSame(date: CandyDateType, grain: CandyDateMode = 'day'): boolean {
    let fn;
    switch (grain) {
      case 'decade':
        fn = (pre: Date, next: Date) => Math.abs(pre.getFullYear() - next.getFullYear()) < 11;
        break;
      case 'year':
        fn = isSameYear;
        break;
      case 'month':
        fn = isSameMonth;
        break;
      case 'day':
        fn = isSameDay;
        break;
      case 'hour':
        fn = isSameHour;
        break;
      case 'minute':
        fn = isSameMinute;
        break;
      case 'second':
        fn = isSameSecond;
        break;
      default:
        fn = isSameDay;
        break;
    }
    return fn(this.nativeDate, this.toNativeDate(date));
  }

  isSameYear(date: CandyDateType): boolean {
    return this.isSame(date, 'year');
  }

  isSameMonth(date: CandyDateType): boolean {
    return this.isSame(date, 'month');
  }

  isSameDay(date: CandyDateType): boolean {
    return this.isSame(date, 'day');
  }

  isSameHour(date: CandyDateType): boolean {
    return this.isSame(date, 'hour');
  }

  isSameMinute(date: CandyDateType): boolean {
    return this.isSame(date, 'minute');
  }

  isSameSecond(date: CandyDateType): boolean {
    return this.isSame(date, 'second');
  }

  isBefore(date: CandyDateType, grain: CandyDateMode = 'day'): boolean {
    if (date === null) {
      return false;
    }
    let fn;
    switch (grain) {
      case 'year':
        fn = differenceInCalendarYears;
        break;
      case 'month':
        fn = differenceInCalendarMonths;
        break;
      case 'day':
        fn = differenceInCalendarDays;
        break;
      case 'hour':
        fn = differenceInHours;
        break;
      case 'minute':
        fn = differenceInMinutes;
        break;
      case 'second':
        fn = differenceInSeconds;
        break;
      default:
        fn = differenceInCalendarDays;
        break;
    }
    return fn(this.nativeDate, this.toNativeDate(date)) < 0;
  }

  isBeforeYear(date: CandyDateType): boolean {
    return this.isBefore(date, 'year');
  }

  isBeforeMonth(date: CandyDateType): boolean {
    return this.isBefore(date, 'month');
  }

  isBeforeDay(date: CandyDateType): boolean {
    return this.isBefore(date, 'day');
  }

  // Equal to today accurate to "day"
  isToday(): boolean {
    return isToday(this.nativeDate);
  }

  isValid(): boolean {
    return isValid(this.nativeDate);
  }

  isFirstDayOfMonth(): boolean {
    return isFirstDayOfMonth(this.nativeDate);
  }

  isLastDayOfMonth(): boolean {
    return isLastDayOfMonth(this.nativeDate);
  }

  private toNativeDate(date: NzSafeAny): Date {
    return date instanceof CandyDate ? date.nativeDate : date;
  }
}
