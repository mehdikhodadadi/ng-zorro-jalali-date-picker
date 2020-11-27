 

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzTimeRangePipe } from './time-range.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [NzTimeRangePipe],
  declarations: [NzTimeRangePipe]
})
export class NzPipesModule {}
