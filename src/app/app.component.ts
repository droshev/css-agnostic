import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  systems = [
    {
      label: 'bootstrap',
      icon: 'https://p14.zdassets.com/hc/settings_assets/1810307/115000215608/hkXSVzrjij0E80QkkJw67Q-logo.png'
    },
    {
      label: 'materialize',
      icon: 'https://seeklogo.com/images/M/materialize-logo-0FCAD8A6F8-seeklogo.com.png'
    },

    {
      label: 'foundation',
      icon: 'https://seeklogo.com/images/F/foundation-logo-AA9B725281-seeklogo.com.jpg'
    },
    {
      label: 'bulma',
      icon: 'https://jgthms.com/web-design-in-4-minutes/bulma.png'
    },
    {
      label: 'fundamental-ui',
      icon: 'http://sap.github.io/techne/images/home-designers-letters.png'
    }
  ];
  activeUI = this.systems[0].label;
  activePanel = 'alert';
}
