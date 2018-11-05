import {
  Component,
  Inject,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild('dynamic', {
    read: ViewContainerRef
  })
  viewContainerRef: ViewContainerRef;

  service: LoaderService;
  componentOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  componentPerRow = 1;
  setComponentCount(event) {
    this.componentPerRow = event.target.value;
  }

  getLayoutClass() {
    return `cx-layout-${this.componentPerRow}-horizontal-components`;
  }

  constructor(
    @Inject(LoaderService) service,
    @Inject(ViewContainerRef) viewContainerRef
  ) {
    this.service = service;
    service.setRootViewContainerRef(viewContainerRef);
    service.addDynamicComponent();
  }

  ngOnInit() {
    this.service.setRootViewContainerRef(this.viewContainerRef);
    this.service.addDynamicComponent();
  }
}
