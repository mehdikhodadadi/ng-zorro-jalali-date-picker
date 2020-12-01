 import { NzSafeAny } from './any';

export type NgClassType = string | string[] | Set<string> | NgClassInterface;

export interface NgClassInterface {
  [klass: string]: NzSafeAny;
}

export interface NgStyleInterface {
  [klass: string]: NzSafeAny;
}
