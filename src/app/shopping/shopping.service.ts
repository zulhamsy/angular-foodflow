import { Injectable } from '@angular/core';

@Injectable({
  providedIn: null,
})
export class ShoppingListService {
  private shopping_list: string[] = [
    'Cabe Rawit',
    'Cabe Keriting',
    'Kentang Emas',
    'Paprika Merah',
  ];

  current_ingridient: { index: number; bahan: string };

  getList() {
    return this.shopping_list;
  }

  editIngridient(payload: string) {
    this.shopping_list[this.current_ingridient.index] = payload;
  }
}
