 

import { PlatformModule } from '@angular/cdk/platform';
import { NgModule } from '@angular/core';
import { NzTransitionPatchDirective } from '../transition-patch/transition-patch.directive';

@NgModule({
  imports: [PlatformModule],
  exports: [NzTransitionPatchDirective],
  declarations: [NzTransitionPatchDirective]
})
export class NzTransitionPatchModule {}
