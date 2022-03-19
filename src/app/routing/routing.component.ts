import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';
import { Servers } from './servers.model';
import { NeedDeactivate } from '../app-guard.service';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css'],
  providers: [ServersService],
})
export class RoutingComponent implements OnInit, NeedDeactivate {
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

  canExit(): boolean {
    console.log('can Exit function called');
    if (confirm('Do you want to exit? | canDeactivate Function')) {
      return true;
    } else {
      return false;
    }
  }
}
