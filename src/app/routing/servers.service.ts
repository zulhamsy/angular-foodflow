import { Injectable } from '@angular/core';
import { Servers } from './servers.model';

@Injectable({
  providedIn: 'root',
})
export class ServersService {
  servers: Servers[] = [
    {
      id: 1,
      name: 'Jarvis Data System',
      status: 'Online',
    },
    {
      id: 2,
      name: 'Fire Engine Cloud',
      status: 'Offline',
    },
    {
      id: 3,
      name: 'Amazon Data Central',
      status: 'Maintenance',
    },
  ];

  getServerById(id: number) {
    return this.servers.filter((server) => server.id == id);
  }
}
