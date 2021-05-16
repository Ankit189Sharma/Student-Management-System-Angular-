import { User } from './user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public loginUserFromRemoteSide(data:any):Observable<any>
  {
    return this.http.post<any>("http://localhost:8080/login",data)
  }

}
