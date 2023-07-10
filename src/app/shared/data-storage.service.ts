import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecepieService } from '../recepie-book/recepie.service';
import { Recepie } from '../recepie-book/recepie.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from './ingredient.mode;';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecepieService,
    private slService: ShoppingListService,
    private authService: AuthService
  ) {}

  storeData() {
    return this.http.put(
      'https://ng-recipe-book-7ee4f-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
      this.recipeService.getRecipes()
    );
  }

  storeShoppingList() {
    return this.http.put(
      'https://ng-recipe-book-7ee4f-default-rtdb.europe-west1.firebasedatabase.app/shopping-list.json',
      this.slService.getIngredients()
    );
  }

  fetchData() {
    const token = this.authService.getToken();
    this.http
      .get<Recepie[]>(
        'https://ng-recipe-book-7ee4f-default-rtdb.europe-west1.firebasedatabase.app/recipes.json?auth=' + token
      )
      .subscribe((recipes: Recepie[]) => {
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            console.log(recipes);
            recipe['ingredients'] = [];
          }
        }
        this.recipeService.setRecipes(recipes);
      });
  }

  fetchShoppingList() {
    this.http
      .get<Ingredient[]>(
        'https://ng-recipe-book-7ee4f-default-rtdb.europe-west1.firebasedatabase.app/shopping-list.json'
      )
      .subscribe((ingredients: Ingredient[]) => {
        this.slService.setIngredients(ingredients);
      });
  }
}
