import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';
import { Servers } from './servers.model';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css'],
  providers: [ServersService],
})
export class RoutingComponent implements OnInit {
  constructor(
    private router: Router,
    private ServersService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.servers = this.ServersService.servers;
  }

  servers: Servers[];

  showServer(id: number): void {
    this.router.navigate(['show'], {
      queryParams: { id: id, show: true, allowEdit: id == 1 ? true : false },
      relativeTo: this.route,
    });
  }
}
