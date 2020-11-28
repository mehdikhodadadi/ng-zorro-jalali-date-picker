 

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzTransitionPatchModule } from '../transition-patch/transition-patch.module';
import { NzWaveModule } from '../wave/nz-wave.module';
import { NzIconModule } from '../icon/icon.module';
import { NzButtonGroupComponent } from './button-group.component';
import { NzButtonComponent } from './button.component';

@NgModule({
  declarations: [NzButtonComponent, NzButtonGroupComponent],
  exports: [NzButtonComponent, NzButtonGroupComponent, NzTransitionPatchModule, NzWaveModule],
  imports: [CommonModule, NzWaveModule, NzIconModule, NzTransitionPatchModule]
})
export class NzButtonModule {}
