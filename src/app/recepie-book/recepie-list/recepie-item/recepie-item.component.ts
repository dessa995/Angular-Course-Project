import { Component, Input, OnInit } from '@angular/core';
import { Recepie } from '../../recepie.model';
import { RecepieService } from '../../recepie.service';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css'],
})
export class RecepieItemComponent {
  @Input() recipe: Recepie;

  constructor(private recipeService: RecepieService) {}
  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
