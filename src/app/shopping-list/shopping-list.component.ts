import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.mode;';
import { ShoppingListService } from './shopping-list.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  constructor(
    private shoppingListService: ShoppingListService,
    private dataStorageService: DataStorageService
  ) {}
  ingredients: Ingredient[];
  private subscription: Subscription;

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

  onSaveList() {
    this.dataStorageService
      .storeShoppingList()
      .subscribe((response: Response) => {
        console.log(response);
      });
  }

  onFetchlist() {
    this.dataStorageService.fetchShoppingList();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // onAddedIngredient(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }
}
