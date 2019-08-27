import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class GuestGuardService implements CanActivate {

  constructor(public router: Router){
  }

  isLoggedIn(){
    let token = localStorage.getItem('token');
    if(!token){
      return true;
    }
    this.router.navigate(['/admin']);
    return false;
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.isLoggedIn();
  }
}