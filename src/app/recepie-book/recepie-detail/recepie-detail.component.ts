import { Component, OnInit } from '@angular/core';

import { Recepie } from '../recepie.model';
import { RecepieService } from '../recepie.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css'],
})
export class RecepieDetailComponent implements OnInit {
  recipe: Recepie;
  id: number;

  constructor(
    private recipeService: RecepieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
