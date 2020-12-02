import { Injectable } from '@angular/core';

import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: User;
  redirectUrl: string;

  constructor() {}

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }
  login(userName: string, password: string): void {
    this.currentUser = {
      id: 1,
      userName,
      isAdmin: true,
    };

    return;
  }

  logout(): void {
    this.currentUser = null;
  }
}
