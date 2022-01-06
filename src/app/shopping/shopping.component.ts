import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-shopping]',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
})
export class ShoppingComponent implements OnInit {
  belanjaan = ['Cabe Rawit', 'Cabe Keriting', 'Kentang Emas', 'Paprika Merah'];
  editModal = false;
  currentIndex: number;
  currentBahan: string;

  toggleEditModal({ bahan, i }) {
    this.editModal = true;
    this.currentIndex = i;
    this.currentBahan = bahan;
  }

  cancelEdit() {
    this.editModal = false;
  }

  saveEdit(payload: string) {
    this.belanjaan[this.currentIndex] = payload;
    this.editModal = false;
  }

  constructor() {}

  ngOnInit(): void {}
}
