import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: '[app-recipe-list]',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  resep: Recipe[] = [];

  selectResep(payload: Recipe) {
    this.RecipeService.selectedRecipe.emit(payload);
  }

  constructor(private RecipeService: RecipeService) {}

  ngOnInit(): void {
    this.resep = this.RecipeService.getRecipes();
  }
}
