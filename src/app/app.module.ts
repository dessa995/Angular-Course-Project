import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecepieBookComponent } from './recepie-book/recepie-book.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { HeaderComponent } from './header/header.component';
import { RecepieListComponent } from './recepie-book/recepie-list/recepie-list.component';
import { RecepieDetailComponent } from './recepie-book/recepie-detail/recepie-detail.component';
import { RecepieItemComponent } from './recepie-book/recepie-list/recepie-item/recepie-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recepie-book/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recepie-book/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecepieService } from './recepie-book/recepie.service';
import { HttpClientModule } from '@angular/common/http';
import { DataStorageService } from './shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecepieBookComponent,
    ShoppingListEditComponent,
    HeaderComponent,
    RecepieListComponent,
    RecepieDetailComponent,
    RecepieItemComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    SignupComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ShoppingListService,
    RecepieService,
    DataStorageService,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
