import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/shared/service/auth/auth.service';
import { Directus } from 'src/app/shared/models/directus.model';
import { DirecutsService } from 'src/app/shared/service/services/directus/direcuts.service';
import { DirecutsResolverService } from 'src/app/shared/service/resolvers/directus/direcuts-resolver.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  directusData: Directus[];
  errorMessage: string;
  directusSubscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private direcutsService: DirecutsService,
    private direcutsResolverService: DirecutsResolverService
  ) {}

  ngOnInit(): void {
    this.directusData = this.route.snapshot.data['directusData'];
  }

  /**
   * // TODO : Needs to remove after dynamic content is received
   * Stores subsidary selection
   * @param subsidaryName selected subsidary name
   */
  storeSubsidarySelection(subsidaryName: string): void {
    this.direcutsService.selectedSubsidaryName = subsidaryName;
    this.directusSubscription = this.direcutsResolverService
      .getDirectusList$('login')
      .subscribe((data: Directus[]): void => {
        this.directusData = data;
      });
  }

  /**
   * Takes to valid URL if user is logged in else to home screen
   * @param loginForm validates login
   */
  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;

      this.authService.login(userName, password);

      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(['/home']);
      }
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }

  ngOnDestroy(): void {
    this.directusSubscription.unsubscribe();
  }
}
