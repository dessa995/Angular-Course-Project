import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecepieBookComponent } from './recepie-book.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecepieListComponent } from './recepie-list/recepie-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecepieDetailComponent } from './recepie-detail/recepie-detail.component';
import { RecepieItemComponent } from './recepie-list/recepie-item/recepie-item.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    RecepieBookComponent,
    RecipeStartComponent,
    RecepieListComponent,
    RecipeEditComponent,
    RecepieDetailComponent,
    RecepieItemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule,
  ]
})
export class RecipesModule { }
