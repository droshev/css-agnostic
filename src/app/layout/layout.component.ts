import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  componentOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  componentPerRow = 1;
  setComponentCount(event) {
    this.componentPerRow = event.target.value;
  }

  getLayoutClass() {
    return `cx-layout-${this.componentPerRow}-horizontal-components`;
  }
}
