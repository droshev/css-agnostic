import { InjectionToken, Injectable } from '@angular/core';

export let ICON_CONFIG = new InjectionToken('icon.config');

export enum IconLib {
  FontAwesome = 'fa',
  Material = 'mat',
  Foundation = 'fi'
}

export interface IconConfig {
  fontLib: IconLib;
}

export const IconConfig: IconConfig = {
  fontLib: IconLib.FontAwesome
};
