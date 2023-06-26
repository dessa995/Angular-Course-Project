import { Injectable, EventEmitter } from '@angular/core';

import { Recepie } from './recepie.model';
import { Ingredient } from '../shared/ingredient.mode;';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecepieService {
  recipeSelected = new EventEmitter<Recepie>();

  private recepies: Recepie[] = [
    new Recepie(
      'Steak',
      'A tasty steak',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recepie(
      'Bean Soup',
      'A brown soup with beans and carrots',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS20BQpDgclE1ym5LOanCrNBX2oFJ2YylcpIA&usqp=CAU',
      [new Ingredient('Beans', 20), new Ingredient('Carrots', 2)]
    ),
  ];

  getRecipes() {
    return this.recepies.slice();
  }

  getRecipe(index: number) {
    return this.recepies[index];
  }

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
