 

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzStringTemplateOutletDirective } from './string_template_outlet.directive';

@NgModule({
  imports: [CommonModule],
  exports: [NzStringTemplateOutletDirective],
  declarations: [NzStringTemplateOutletDirective]
})
export class NzOutletModule {}
