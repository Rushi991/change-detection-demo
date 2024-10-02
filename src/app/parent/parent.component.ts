import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ChangeService } from '../change.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  changeDetection: ChangeDetectionStrategy.Default, // Default strategy
  providers: [ChangeService] // Service provided at parent level
})
export class ParentComponent {
  primitiveData: number = 0; // Primitive data
  nonPrimitiveData: { name: string } = { name: 'Initial Value' }; // Non-primitive data

  constructor(private myService: ChangeService) {}

  updatePrimitive() {
    this.primitiveData += 1; // Update primitive data
  }

  updateNonPrimitive() {
    this.nonPrimitiveData.name = 'Updated Value ' + new Date().getTime(); // Update non-primitive data
  }

  incrementServiceCounter() {
    this.myService.incrementCounter();
    console.log('Parent Service Counter:', this.myService.getCounter());
  }
}
