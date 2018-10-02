import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlainComponent } from './plain/plain.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TypographyComponent } from './typography/typography.component';

@NgModule({
  declarations: [
    AppComponent,
    PlainComponent,
    ButtonsComponent,
    TypographyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
