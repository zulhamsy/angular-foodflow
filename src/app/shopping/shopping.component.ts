import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-shopping]',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
})
export class ShoppingComponent implements OnInit {
  belanjaan = ['Cabe Rawit', 'Cabe Keriting', 'Kentang Emas', 'Paprika Merah'];
  constructor() {}

  ngOnInit(): void {}
}
