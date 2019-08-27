import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../login.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [
    LoginService
  ]
})
export class LoginComponent {
  
  username: String;
  password: String;

  constructor(private loginService: LoginService, private router: Router) {}

  login(){
    this.loginService.postLogin(this.username, this.password)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['admin']);
      }
    )
  }
}