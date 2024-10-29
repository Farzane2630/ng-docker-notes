import { Component } from '@angular/core';
import { NewNoteComponent } from "../new-note/new-note.component";
import { SearchBoxComponent } from "../search-box/search-box.component";
import { AddButtonComponent } from "../add-button/add-button.component";
import { noteCardComponent } from "../note-card/note-card.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NewNoteComponent, SearchBoxComponent, AddButtonComponent, noteCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  style: string = 'visibility: hidden';

  addNewNote() {
    this.style = 'visibility: visible';
  }
  closeModal() {
    this.style = 'visibility: hidden';
  }
}
