import { EventEmitter, Injectable, NgZone } from '@angular/core';

@Injectable()
export class MockNgZone extends NgZone {
  // tslint:disable-next-line:no-any
  onStable: EventEmitter<any> = new EventEmitter(false);

  constructor() {
    super({ enableLongStackTrace: false });
  }

  // tslint:disable-next-line:no-any ban-types
  run(fn: Function): any {
    return fn();
  }

  // tslint:disable-next-line:ban-types no-any
  runOutsideAngular(fn: Function): any {
    return fn();
  }

  simulateZoneExit(): void {
    this.onStable.emit(null);
  }
}
