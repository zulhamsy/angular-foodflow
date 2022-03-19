import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private isLogged = true;

  isUserLogged() {
    return this.isLogged;
  }
}
