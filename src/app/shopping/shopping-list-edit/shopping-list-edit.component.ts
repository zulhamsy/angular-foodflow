import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: '[app-shopping-list-edit]',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @Output() onCancelEdit = new EventEmitter();
  @Output() onSaveEdit = new EventEmitter();
  @Input() inputProp: string;

  cancel() {
    this.onCancelEdit.emit();
  }

  save() {
    this.onSaveEdit.emit(this.inputProp);
  }

  constructor() {}

  ngOnInit(): void {}
}
