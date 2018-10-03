import { Injectable, Inject } from '@angular/core';
import { IconLib, ICON_CONFIG, IconConfig } from './icon.config';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public iconLib: BehaviorSubject<IconLib> = new BehaviorSubject(null);

  constructor(@Inject(ICON_CONFIG) private config: IconConfig) {
    this.lib = config.fontLib;
  }

  set lib(lib: IconLib) {
    this.iconLib.next(lib);
  }
}
