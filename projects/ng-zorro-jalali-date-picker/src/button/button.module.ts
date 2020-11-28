 

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ɵNzTransitionPatchModule as NzTransitionPatchModule } from '../transition-patch';
import { NzWaveModule } from '../wave';
import { NzIconModule } from '../icon/icon.module';
import { NzButtonGroupComponent } from './button-group.component';
import { NzButtonComponent } from './button.component';

@NgModule({
  declarations: [NzButtonComponent, NzButtonGroupComponent],
  exports: [NzButtonComponent, NzButtonGroupComponent, NzTransitionPatchModule, NzWaveModule],
  imports: [CommonModule, NzWaveModule, NzIconModule, NzTransitionPatchModule]
})
export class NzButtonModule {}
