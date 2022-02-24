import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping.service';

@Component({
  selector: '[app-shopping]',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  providers: [ShoppingListService],
})
export class ShoppingComponent implements OnInit {
  belanjaan: string[] = [];
  editModal = false; // stay
  currentIndex: number; // move
  currentBahan: string; // move

  toggleEditModal(bahan: string, index: number) {
    this.editModal = true; // stay
    this.currentIndex = index;
    this.currentBahan = bahan;
    this.ShoppingService.current_ingridient = {
      index,
      bahan,
    };
  }

  cancelEdit() {
    // stay
    this.editModal = false;
  }

  constructor(private ShoppingService: ShoppingListService) {}

  ngOnInit(): void {
    this.belanjaan = this.ShoppingService.getList();
  }
}
