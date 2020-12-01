 import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

export type NzButtonGroupSize = 'large' | 'default' | 'small';

@Component({
  selector: 'nz-button-group',
  exportAs: 'nzButtonGroup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ant-btn-group]': `true`,
    '[class.ant-btn-group-lg]': `nzSize === 'large'`,
    '[class.ant-btn-group-sm]': `nzSize === 'small'`
  },
  preserveWhitespaces: false,
  template: ` <ng-content></ng-content> `
})
export class NzButtonGroupComponent {
  @Input() nzSize: NzButtonGroupSize = 'default';
}
