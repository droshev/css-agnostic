import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plain',
  templateUrl: './plain.component.html',
  styleUrls: ['./plain.component.scss']
})
export class PlainComponent {
  @Input()
  type: string;
}
