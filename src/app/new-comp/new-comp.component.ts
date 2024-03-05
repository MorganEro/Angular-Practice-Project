import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrl: './new-comp.component.css',
})
export class NewCompComponent {
  @Input() featureSet: any;
}
