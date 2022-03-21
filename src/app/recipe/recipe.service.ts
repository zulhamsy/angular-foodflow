import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Nasi Goreng Jakarta',
      'Nasi goreng spesial dari Jakarta',
      'https://awsimages.detik.net.id/community/media/visual/2021/08/25/resep-nasi-goreng-sosis-ala-warung-bhakti_43.jpeg',
      ['Ayam Suwir', 'Nasi Putih', 'Bawang Merah', 'Bawang Putih']
    ),
    new Recipe(
      'Nasi Uduk',
      'Nasi uduk yang kaga ada duanya',
      'https://asset.kompas.com/crops/YJXX1aIeNs-2WHjw4VJDWJBywT0=/0x0:1000x667/750x500/data/photo/2020/07/05/5f01435b5c965.jpg',
      ['Nasi Putih', 'Santan Instan', 'Daun Bawang', 'Pandan']
    ),
  ];

  getRecipes(): Promise<any> {
    // return this.recipes.slice();
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.recipes.slice());
      }, 2000);
    });
    return promise;
  }

  selectedRecipe = new EventEmitter<Recipe>();
}
