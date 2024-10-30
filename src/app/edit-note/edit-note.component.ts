import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { noteType } from '../types';

@Component({
  selector: 'app-edit-note',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.scss',
})
export class EditNoteComponent {
  style!: string;
  @Input() noteId!: number;
  @Input() note!: noteType;

  editNoteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
  });

  @Output() closeEvent = new EventEmitter<any>();
  @Output() editEvent = new EventEmitter<any>();

  onClose() {
    this.closeEvent.emit();
  }

  editNote(noteID: number) {
    this.note.title = this.editNoteForm.value.title;
    this.note.content = this.editNoteForm.value.content;
    this.note.category = this.editNoteForm.value.category;
    this.editEvent.emit(noteID);
  }
}
