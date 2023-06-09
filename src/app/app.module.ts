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
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
