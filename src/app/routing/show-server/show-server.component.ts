import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Servers } from '../servers.model';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-show-server',
  templateUrl: './show-server.component.html',
  styleUrls: ['./show-server.component.css'],
})
export class ShowServerComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private ServersService: ServersService
  ) {}

  id: number;
  server: Servers[];
  showStatus: string;

  ngOnInit(): void {
    // this.id = this.route.snapshot.params.id;
    this.route.queryParams.subscribe((query) => {
      this.id = query.id;
      this.showStatus = query.show;
      this.server = this.ServersService.getServerById(this.id);
    });
  }
}
