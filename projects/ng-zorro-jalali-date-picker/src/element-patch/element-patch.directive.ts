 

import { Directive, ElementRef } from '@angular/core';
import { NzSafeAny } from '../types';

/**
 * A patch directive to select the element of a component.
 */
@Directive({
  selector: '[nzElement], [nz-element]',
  exportAs: 'nzElement'
})
export class NzElementPatchDirective {
  get nativeElement(): NzSafeAny {
    return this.elementRef.nativeElement;
  }

  constructor(public elementRef: ElementRef) {}
}
