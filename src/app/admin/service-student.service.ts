import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Teacher } from './teacher';

@Injectable({
  providedIn: 'root'
})
export class ServiceStudentService {

  constructor(private http:HttpClient) { }

  public getAllStudents():Observable<Teacher[]>{
    return this.http.get<Teacher[]>("http://localhost:8080/allStudents");
  }

 public getStudentByemail(email:string):Observable<Teacher>{
    return this.http.get<Teacher>(`http://localhost:8080/teacher/${email}`)
  }


}
