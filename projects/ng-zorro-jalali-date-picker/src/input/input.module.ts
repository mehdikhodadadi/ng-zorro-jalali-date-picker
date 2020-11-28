 

import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzOutletModule } from '../outlet/outlet.module';

import { NzIconModule } from '../icon/icon.module';
import { NzAutosizeDirective } from './autosize.directive';
import { NzInputGroupSlotComponent } from './input-group-slot.component';
import { NzInputGroupComponent, NzInputGroupWhitSuffixOrPrefixDirective } from './input-group.component';
import { NzInputDirective } from './input.directive';

@NgModule({
  declarations: [
    NzInputDirective,
    NzInputGroupComponent,
    NzAutosizeDirective,
    NzInputGroupSlotComponent,
    NzInputGroupWhitSuffixOrPrefixDirective
  ],
  exports: [NzInputDirective, NzInputGroupComponent, NzAutosizeDirective, NzInputGroupWhitSuffixOrPrefixDirective],
  imports: [CommonModule, NzIconModule, PlatformModule, NzOutletModule]
})
export class NzInputModule {}
