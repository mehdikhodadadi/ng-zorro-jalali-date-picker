 import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzTransButtonDirective } from './nz-trans-button.directive';

@NgModule({
  declarations: [NzTransButtonDirective],
  exports: [NzTransButtonDirective],
  imports: [CommonModule]
})
export class NzTransButtonModule {}
