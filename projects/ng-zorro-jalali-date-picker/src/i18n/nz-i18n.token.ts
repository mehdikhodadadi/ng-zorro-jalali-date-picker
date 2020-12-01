 import { InjectionToken } from '@angular/core';

import { DateLocale, NzI18nInterface } from './nz-i18n.interface';

export const NZ_I18N = new InjectionToken<NzI18nInterface>('nz-i18n');

export const NZ_DATE_LOCALE = new InjectionToken<DateLocale>('nz-date-locale');
