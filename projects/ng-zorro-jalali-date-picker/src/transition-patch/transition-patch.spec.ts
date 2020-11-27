 

import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ɵcreateComponentBed as createComponentBed } from '../core-testing';
import { NzTransitionPatchDirective } from './transition-patch.directive';
import { NzTransitionPatchModule } from './transition-patch.module';

describe('transition-patch', () => {
  it('should visible after afterViewInit', () => {
    const testBed = createComponentBed(TestTransitionPatchComponent, { imports: [NzTransitionPatchModule] });
    const buttonElement = testBed.debugElement.query(By.directive(NzTransitionPatchDirective)).nativeElement;
    expect(buttonElement.getAttribute('hidden')).toBeFalsy();
  });
  it('should hidden after afterViewInit', () => {
    const testBed = createComponentBed(TestTransitionPatchHiddenComponent, { imports: [NzTransitionPatchModule] });
    const buttonElement = testBed.debugElement.query(By.directive(NzTransitionPatchDirective)).nativeElement;
    expect(buttonElement.getAttribute('hidden')).toBeFalsy();
  });
  it('should restore after afterViewInit', () => {
    const testBed = createComponentBed(TestTransitionPatchRestoreComponent, { imports: [NzTransitionPatchModule] });
    const buttonElement = testBed.debugElement.query(By.directive(NzTransitionPatchDirective)).nativeElement;
    expect(buttonElement.getAttribute('hidden')).toBe('abc');
  });
  it('should work if hidden binding', () => {
    const testBed = createComponentBed(TestTransitionPatchHiddenBindingComponent, { imports: [NzTransitionPatchModule] });
    const buttonElement = testBed.debugElement.query(By.directive(NzTransitionPatchDirective)).nativeElement;
    expect(buttonElement.getAttribute('hidden')).toBeFalsy();
    testBed.component.hidden = true;
    testBed.fixture.detectChanges();
    expect(buttonElement.getAttribute('hidden')).toBe('');
  });
});

@Component({
  template: ` <button nz-button></button> `
})
export class TestTransitionPatchComponent {}

@Component({
  template: ` <button nz-button hidden></button> `
})
export class TestTransitionPatchHiddenComponent {}

@Component({
  template: ` <button nz-button hidden="abc"></button> `
})
export class TestTransitionPatchRestoreComponent {}

@Component({
  template: ` <button nz-button [hidden]="hidden"></button> `
})
export class TestTransitionPatchHiddenBindingComponent {
  hidden = false;
}
