import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingListService } from './shopping.service';

@Component({
  selector: '[app-shopping]',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
})
export class ShoppingComponent implements OnInit {
  belanjaan: string[] = [];
  editModal = false; // stay
  currentIndex: number; // move
  currentBahan: string; // move
  id: string;

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

  testRoutes() {
    // this.router.navigate(['/']);
    this.router.navigate(['shopping', 200]);
  }

  constructor(
    private ShoppingService: ShoppingListService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.belanjaan = this.ShoppingService.getList();
    // this.id = this.route.snapshot.params.id; cara ini tidak async
    // Cara ini atau yang dibawahnya
    // https://stackoverflow.com/questions/47809357/angular-4-5-route-parammap-vs-params

    // Pake paramMap lebih efisien karena params memiliki method spt get, getAll, has
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    // this.route.params.subscribe((params) => {
    //   this.id = params.id;
    // });
  }
}
