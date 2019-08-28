import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class AdminService {

  host: string;
  token: string;

  constructor(private http: HttpClient){
    this.host = 'https://app-happy-minds.herokuapp.com/admin/';
  }

  getHeaders(){
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
  }
  postData(data){
    return this.http.post(`${this.host}`, data);
  }
}
