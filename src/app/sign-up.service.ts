import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http:HttpClient) { }

  allRegistration(data:any):Observable<any>{
    console.log(data);
    
   return  this.http.post<any>("http://localhost:8080/signup",data);
  }

}
