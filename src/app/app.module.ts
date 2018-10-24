import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlainComponent } from './plain/plain.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TypographyComponent } from './typography/typography.component';
import { IconMapperDirective } from './icon-mapper.directive';
import { LayoutComponent } from './layout/layout.component';
import { ICON_CONFIG, IconConfig } from './icon.config';

@NgModule({
  declarations: [
    AppComponent,
    PlainComponent,
    ButtonsComponent,
    TypographyComponent,
    IconMapperDirective,
    LayoutComponent
  ],
  imports: [BrowserModule],

  providers: [{ provide: ICON_CONFIG, useValue: IconConfig }],
  bootstrap: [AppComponent]
})
export class AppModule {}
