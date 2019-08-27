import { Component, OnInit } from '@angular/core';

import { AuthGuardService } from './shared/services/auth-guard.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class LogoutComponent implements OnInit  {

  constructor(private auth: AuthGuardService){}

  ngOnInit() {
    
    this.auth.logout(); 
  }

}