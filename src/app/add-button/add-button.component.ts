import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.scss',
})
export class AddButtonComponent {
  @Output() addNewEvent = new EventEmitter<boolean>();

  ocClick() {
    this.addNewEvent.emit();
  }
}
