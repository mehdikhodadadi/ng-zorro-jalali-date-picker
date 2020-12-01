import { NgModule } from '@angular/core';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { NzIconModule } from '../icon/icon.module';
import { NZ_ICONS } from '../icon/icon.service';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};

const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => {
  const i = antDesignIcons[key];
  return i;
});

/**
 * Include this module in every testing spec, except `icon.spec.ts`.
 */
// @dynamic
@NgModule({
  exports: [NzIconModule],
  providers: [
    {
      provide: NZ_ICONS,
      useValue: icons
    }
  ]
})
export class NzIconTestModule {}
