import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: '[app-recipe-list]',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Nasi Goreng Jakarta',
      'Nasi goreng spesial dari Jakarta',
      'https://awsimages.detik.net.id/community/media/visual/2021/08/25/resep-nasi-goreng-sosis-ala-warung-bhakti_43.jpeg'
    ),
    new Recipe(
      'Nasi Uduk',
      'Nasi uduk yang kaga ada duanya',
      'https://asset.kompas.com/crops/YJXX1aIeNs-2WHjw4VJDWJBywT0=/0x0:1000x667/750x500/data/photo/2020/07/05/5f01435b5c965.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
