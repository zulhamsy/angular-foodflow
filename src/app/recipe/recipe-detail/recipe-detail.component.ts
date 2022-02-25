import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping/shopping.service';

@Component({
  selector: '[app-recipe-detail]',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(
    private RecipeService: RecipeService,
    private ShoppingService: ShoppingListService
  ) {}

  addToShoppingList() {
    // console.log(this.selectedRecipe.recipe);
    this.ShoppingService.addIngridient(this.selectedRecipe.recipe);
  }

  ngOnInit(): void {
    this.RecipeService.selectedRecipe.subscribe(
      (recipe) =>
        // console.log(recipe)
        (this.selectedRecipe = recipe)
    );
  }
}
