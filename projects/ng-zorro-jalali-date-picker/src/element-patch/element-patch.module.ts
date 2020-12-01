 import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzElementPatchDirective } from './element-patch.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [NzElementPatchDirective],
  exports: [NzElementPatchDirective]
})
export class NzElementPatchModule {}
