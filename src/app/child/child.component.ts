import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ChangeService } from '../change.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ChangeService]
})
export class ChildComponent {
  @Input() parentData!: { name: string };
  childData: number = 0;

  constructor(private myService: ChangeService) { }

  updateChildData() {
    this.childData += 1;
  }

  incrementServiceCounter() {
    this.myService.incrementCounter();
    console.log('Child Service Counter:', this.myService.getCounter());
  }

}
