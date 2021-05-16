import { Teacher } from './teacher';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http:HttpClient) { }

  public getAllTeachers():Observable<Teacher[]>{
  
      return this.http.get<Teacher[]>("http://localhost:8080/allTeachers")
  }


  allRegistration(data:any):Observable<any>{
    console.log(data);
    
   return  this.http.post<any>("http://localhost:8080/signup",data);
  }

  //Creating new Teacher

  createNewTeacher(employee:Teacher):Observable<Object>{
     return this.http.post<Object>("http://localhost:8080/addNewTeacher",employee);
  }

  getTeacherByemail(email:string):Observable<Teacher>{
    return this.http.get<Teacher>(`http://localhost:8080/teacher/${email}`)
  }


  updateTeacher(email:string,teacher:Teacher):Observable<Object>{
    return this.http.put(`http://localhost:8080/updateTeacher/${email}`,teacher);
  }
  

  deleteTeacherByemail(email:string):Observable<any>
  {
    return this.http.delete<any>(`http://localhost:8080/deleteTeacher/${email}`);
  }


}
