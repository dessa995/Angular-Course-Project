import { Component, Input } from '@angular/core';

import { Recepie } from '../recepie.model';
import { RecepieService } from '../recepie.service';
@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css'],
})
export class RecepieDetailComponent {
  @Input() recipe: Recepie;

  constructor(private recipeService: RecepieService) {}

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
