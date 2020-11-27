 

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzHighlightPipe } from './highlight.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [NzHighlightPipe],
  declarations: [NzHighlightPipe]
})
export class NzHighlightModule {}
