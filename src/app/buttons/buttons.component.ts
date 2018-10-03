import { Component, OnInit, Inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ICON_CONFIG, IconConfig, IconLib } from '../icon.config';
import { Observable, of } from 'rxjs';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  libs = IconLib;

  constructor(private cd: ChangeDetectorRef, private config: ConfigService) {}

  set iconLib(event) {
    this.config.lib = event.target.value;
  }
}
