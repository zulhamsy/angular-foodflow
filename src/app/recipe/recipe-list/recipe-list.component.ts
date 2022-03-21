import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
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

  constructor(
    private RecipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.resep = this.RecipeService.getRecipes();
    // Simulate server response in 2s
    // setTimeout(() => {
    //   this.resep = this.RecipeService.getRecipes();
    // }, 2000);
    // Subscribe data fetched by recipe-resolver
    this.route.data.subscribe((data: Data) => {
      console.log(data);
      this.resep = data['recipe'];
    });
  }
}
