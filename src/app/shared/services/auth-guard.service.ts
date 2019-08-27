import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate {

  loggedIn;
  flag: boolean = true;

  constructor(public router: Router){
    
    let token = localStorage.getItem('token');
    if(token){
     this.loggedIn = new BehaviorSubject<boolean>(true);
    } else{
      this.loggedIn = new BehaviorSubject<boolean>(false);
    }
  }

  logout(){
    localStorage.removeItem('token');
    this.isLoggedIn();
  }

  loginListener():Observable<boolean> {
    return this.loggedIn;
  }

  isLoggedIn(){
    let token = localStorage.getItem('token');
    if(token){
      this.loggedIn.next(true);
      return true;
    }
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
    return false;
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.isLoggedIn();
  }
}