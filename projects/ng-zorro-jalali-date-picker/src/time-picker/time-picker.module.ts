 import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from '../button/button.module';
import { NzOutletModule } from '../outlet/outlet.module';
import { NzOverlayModule } from '../overlay/nz-overlay.module';

import { NzI18nModule } from '../i18n/nz-i18n.module';
import { NzIconModule } from '../icon/icon.module';

import { NzTimePickerPanelComponent } from './time-picker-panel.component';
import { NzTimePickerComponent } from './time-picker.component';

@NgModule({
  declarations: [NzTimePickerComponent, NzTimePickerPanelComponent],
  exports: [NzTimePickerPanelComponent, NzTimePickerComponent],
  imports: [CommonModule, FormsModule, NzI18nModule, OverlayModule, NzIconModule, NzOverlayModule, NzOutletModule, NzButtonModule]
})
export class NzTimePickerModule {}
