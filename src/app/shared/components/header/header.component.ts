import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
