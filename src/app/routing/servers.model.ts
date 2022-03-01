export class Servers {
  public id: number;
  public name: string;
  public status: 'Online' | 'Offline' | 'Maintenance';

  constructor(
    id: number,
    name: string,
    status: 'Online' | 'Offline' | 'Maintenance'
  ) {
    this.id = id;
    this.name = name;
    this.status = status;
  }
}
