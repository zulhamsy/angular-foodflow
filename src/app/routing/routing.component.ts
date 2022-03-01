import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServersService } from './servers.service';
import { Servers } from './servers.model';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css'],
})
export class RoutingComponent implements OnInit {
  constructor(private router: Router, private ServersService: ServersService) {}

  ngOnInit(): void {
    this.servers = this.ServersService.servers;
  }

  servers: Servers[];

  showServer(id: number): void {
    this.router.navigate(['servers'], { queryParams: { id: id, show: true } });
  }
}
