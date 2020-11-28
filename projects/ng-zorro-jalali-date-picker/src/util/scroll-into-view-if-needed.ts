 
import { NzSafeAny } from '../types/any';

export function scrollIntoView(node: HTMLElement): void {
  const nodeAsAny = node as NzSafeAny;
  if (nodeAsAny.scrollIntoViewIfNeeded) {
    /* tslint:disable-next-line:no-string-literal */
    nodeAsAny.scrollIntoViewIfNeeded(false);
    return;
  }
  if (node.scrollIntoView) {
    node.scrollIntoView(false);
    return;
  }
}
