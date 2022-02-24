import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShoppingListService } from '../shopping.service';

@Component({
  selector: '[app-shopping-list-edit]',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @Output() onCancelEdit = new EventEmitter();
  inputProp: string;

  cancel() {
    this.onCancelEdit.emit();
  }

  save() {
    this.ShoppingService.editIngridient(this.inputProp);
    this.cancel();
  }

  constructor(private ShoppingService: ShoppingListService) {}

  ngOnInit(): void {
    this.inputProp = this.ShoppingService.current_ingridient.bahan;
  }
}
