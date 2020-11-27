 
import { NzSafeAny } from '../types';

export function isPromise<T>(obj: NzSafeAny): obj is Promise<T> {
  return !!obj && typeof obj.then === 'function' && typeof obj.catch === 'function';
}
