import { Component, OnInit } from '@angular/core';

// import { Recepie } from './recepie.model';
// import { RecepieService } from './recepie.service';

@Component({
  selector: 'app-recepie-book',
  templateUrl: './recepie-book.component.html',
  styleUrls: ['./recepie-book.component.css'],
  // providers: [RecepieService],
})
export class RecepieBookComponent implements OnInit {
  // selectedRecipe: Recepie;

  constructor() {}

  ngOnInit(): void {
    // this.recipeService.recipeSelected.subscribe((recipe: Recepie) => {
    //   this.selectedRecipe = recipe;
    // });
  }
}
