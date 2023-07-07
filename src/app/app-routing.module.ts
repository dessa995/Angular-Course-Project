import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecepieBookComponent } from './recepie-book/recepie-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recepie-book/recipe-start/recipe-start.component';
import { RecepieDetailComponent } from './recepie-book/recepie-detail/recepie-detail.component';
import { RecipeEditComponent } from './recepie-book/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecepieBookComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecepieDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
