import { Directive, TemplateRef, ElementRef, Inject, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { ICON_CONFIG, IconConfig, IconLib } from './icon.config';
import { of } from 'rxjs';
import { ConfigService } from './config.service';

const FA_ICONS = {
  trash: 'trash',
  search: 'search',
  shoppingcart: 'shopping-cart'
};

const MAT_ICONS = {
  trash: 'delete',
  search: 'search',
  shoppingcart: 'shopping_cart'
};

const FI_ICONS = {
  trash: 'trash',
  search: 'magnifying-glass',
  shoppingcart: 'shopping-cart'
};

@Directive({
  selector: '[button > i]'
})
export class IconMapperDirective {
  initialClass;
  constructor(private element: ElementRef<HTMLElement>, private config: ConfigService) {
    this.initialClass = this.element.nativeElement.className;
    this.config.iconLib.subscribe(lib => this.addIcon(lib, this.initialClass));
  }

  addIcon(iconLib: IconLib, iconType: string) {
    const element = this.element.nativeElement;
    switch (iconLib) {
      case IconLib.FontAwesome:
        element.className = 'fas fa-' + FA_ICONS[iconType];
        element.innerText = '';
        break;
      case IconLib.Material:
        element.className = 'material-icons';
        element.style.verticalAlign = 'middle'; // temporary fix
        element.innerText = MAT_ICONS[iconType];
        break;
      case IconLib.Foundation:
        element.className = 'fi-' + FI_ICONS[iconType];
        element.innerText = '';
        break;
    }
  }
}
