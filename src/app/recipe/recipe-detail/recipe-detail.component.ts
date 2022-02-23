import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: '[app-recipe-detail]',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private RecipeService: RecipeService) {}

  ngOnInit(): void {
    this.RecipeService.selectedRecipe.subscribe(
      (recipe) =>
        // console.log(recipe)
        (this.selectedRecipe = recipe)
    );
  }
}
