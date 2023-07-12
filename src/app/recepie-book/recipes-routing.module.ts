import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

import { RecepieBookComponent } from "./recepie-book.component"
import { RecipeStartComponent } from "./recipe-start/recipe-start.component"
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component"
import { AuthGuardService } from "../auth/auth-guard.service"
import { RecepieDetailComponent } from "./recepie-detail/recepie-detail.component"

const recipesRoutes: Routes = [
  {
    path: '',
    component: RecepieBookComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService] },
      { path: ':id', component: RecepieDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService] },
    ],
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuardService,
  ]
})
export class RecipesRoutingModule {}