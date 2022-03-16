import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private isLogged = false;

  isUserLogged() {
    return this.isLogged;
  }
}
