import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class SearchService {

  host: string;
  token: string;

  constructor(private http: HttpClient){
    this.host = 'https://app-happy-minds.herokuapp.com/query/';
  }

  getHeaders(){
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
  }
  search(word:String){
    return this.http.get(`${this.host}?term=${word}`);
  }
}
