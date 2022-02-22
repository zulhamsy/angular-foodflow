import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: '[app-recipe]',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService],
})
export class RecipeComponent implements OnInit {
  recipes: Recipe[] = [];

  currentRecipe: Recipe = new Recipe(
    'Nasi Goreng Jakarta',
    'Nasi goreng spesial dari Jakarta',
    'https://awsimages.detik.net.id/community/media/visual/2021/08/25/resep-nasi-goreng-sosis-ala-warung-bhakti_43.jpeg'
  );

  changeResep(resep: Recipe) {
    this.currentRecipe = resep;
  }

  constructor(private RecipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.RecipeService.getRecipes();
  }
}
