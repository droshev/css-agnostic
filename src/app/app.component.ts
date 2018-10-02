import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  uiSystems = ['materialize', 'bootstrap', 'bulma', 'foundation', 'fundamental-ui'];
  activePanel = 'buttons';
}
