import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class LoginService {

  host: string;
  token: string;

  constructor(private http: HttpClient){
    this.host = 'https://3101dd61.ngrok.io/';
  }

  getHeaders(){
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
  }
  postLogin(username:String, password:String){
    return this.http.post(`${this.host}login`, {
      username: username,
      password: password
    });
  }
}
