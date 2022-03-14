import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  allowEdit: boolean;

  ngOnInit(): void {
    this.route.queryParams.subscribe((query) => {
      this.allowEdit = query['allowEdit'] === 'true' ? true : false;
    });
  }
}
