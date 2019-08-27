import { Component, OnInit } from '@angular/core';

import { AuthGuardService } from './shared/services/auth-guard.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  
  name = 'Angular';
  guest: any;
  admin: any;
  routes: any;
  
  constructor(private auth: AuthGuardService){
    this.guest = [
      {
        route: '/',
        value: ' Lookup '
      },
      // {
      //   route: '/browse',
      //   value: ' Browse '
      // },
      {
        route: '/login',
        value: ' Login/SignUp '
      }
    ];
    this.admin = [
      {
        route: '/admin',
        value: ' Admin '
      },
      {
        route: '/logout',
        value: 'Logout'
      }
    ]
  }

  ngOnInit() {
    this.auth.loginListener()
    .subscribe({
      next: (flag) => {
        console.log("====>", flag);
        if(flag){
          this.routes = this.admin;
        } else{
          this.routes = this.guest
        }
      }
    })
  }

}
