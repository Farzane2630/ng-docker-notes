import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { noteType } from '../types';

@Component({
  selector: 'app-new-note',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-note.component.html',
  styleUrl: './new-note.component.scss',
})
export class NewNoteComponent {
  style!: string;
  @Output() closeEvent = new EventEmitter<boolean>();

  newNoteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
  });
  newNote: noteType = {
    title: '',
    content: '',
    category: '',
  };
  // close modal
  onClose() {
    this.closeEvent.emit();
  }

  handleSubmit() {
    this.newNote.title = this.newNoteForm.value.title;
    this.newNote.content = this.newNoteForm.value.content;
    this.newNote.content = this.newNoteForm.value.content;
    console.log(this.newNote);
  }
}
