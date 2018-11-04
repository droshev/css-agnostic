import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlainComponent } from './plain/plain.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TypographyComponent } from './typography/typography.component';
import { IconMapperDirective } from './icon-mapper.directive';
import { LayoutComponent } from './layout/layout.component';
import { ICON_CONFIG, IconConfig } from './icon.config';
import { Image1Component } from './layout/image1/image1.component';
import { Image2Component } from './layout/image2/image2.component';

@NgModule({
  declarations: [
    AppComponent,
    PlainComponent,
    ButtonsComponent,
    TypographyComponent,
    IconMapperDirective,
    LayoutComponent,
    Image1Component,
    Image2Component
  ],
  imports: [BrowserModule],

  providers: [{ provide: ICON_CONFIG, useValue: IconConfig }],
  bootstrap: [AppComponent]
})
export class AppModule {}
