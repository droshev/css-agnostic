import {
  ComponentFactoryResolver,
  Injectable,
  Inject,
  ReflectiveInjector
} from '@angular/core';

import { Image1Component } from '../layout/image1/image1.component';
import { Image2Component } from '../layout/image2/image2.component';

@Injectable()
export class LoaderService {
  factoryResolver: ComponentFactoryResolver;
  rootViewContainer: any;

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver;
  }
  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }
  addDynamicComponent() {
    const factory = this.factoryResolver.resolveComponentFactory(
      Image1Component
    );
    const component = factory.create(this.rootViewContainer.parentInjector);
    this.rootViewContainer.insert(component.hostView);
  }
}
