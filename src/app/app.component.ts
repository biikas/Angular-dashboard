import { Component, OnInit } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  template: `
    <nb-menu [items]="items"></nb-menu>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  items: NbMenuItem[] = [];

  constructor(private authService: NbAuthService) {}

  ngOnInit() {
    this.authService.onAuthenticationChange()
        .subscribe((isAuthenticated: boolean) => {
          console.log(`isAuthenticated: ${isAuthenticated}`);
          if (isAuthenticated) {
            this.items = [{ title: 'Logout', link: 'auth/logout' }];
          } else {
            this.items = [{ title: 'Login', link: 'auth/login' }];
          }
        });
  }
}
