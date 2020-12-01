import { dispatchFakeEvent } from './dispatch-events';

export function typeInElement(value: string, element: HTMLInputElement | HTMLTextAreaElement): void {
  element.focus();
  element.value = value;
  dispatchFakeEvent(element, 'input');
}
