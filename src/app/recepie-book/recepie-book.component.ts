import { Component } from '@angular/core';
import { Recepie } from './recepie.model';

@Component({
  selector: 'app-recepie-book',
  templateUrl: './recepie-book.component.html',
  styleUrls: ['./recepie-book.component.css'],
})
export class RecepieBookComponent {
  selectedRecipe: Recepie;
}
