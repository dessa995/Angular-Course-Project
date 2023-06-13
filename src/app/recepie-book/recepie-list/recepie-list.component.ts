import { Component, Output, EventEmitter } from '@angular/core';

import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css'],
})
export class RecepieListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recepie>();

  @Output() recepies: Recepie[] = [
    new Recepie(
      'a test recepie',
      'this is simply a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'
    ),
    new Recepie(
      'Test 2',
      'Another Test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS20BQpDgclE1ym5LOanCrNBX2oFJ2YylcpIA&usqp=CAU'
    ),
  ];

  onRecepieSelected(recipe: Recepie) {
    this.recipeWasSelected.emit(recipe);
  }
}
