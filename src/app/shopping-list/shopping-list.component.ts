import { Component, Output, NgModule } from '@angular/core';
import { Ingredient } from '../shared/ingredient.mode;';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  @Output() ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 10),
  ];

  onAddedIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
