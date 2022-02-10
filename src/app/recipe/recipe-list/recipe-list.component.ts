import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: '[app-recipe-list]',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Input() resep: Recipe[];
  @Output() clickResep = new EventEmitter();

  selectResep($event: Recipe) {
    this.clickResep.emit($event);
  }

  constructor() {}

  ngOnInit(): void {}
}
