import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-section',
  templateUrl: './teacher-section.component.html',
  styleUrls: ['./teacher-section.component.css']
})
export class TeacherSectionComponent implements OnInit {

  teacher:Teacher[];
  deletedSuccess=false;
  constructor(private http:HttpClient,private teacherService:TeacherService,private router:Router) {
      
   }

  ngOnInit(): void {

    this.getTeacherList();
  }

  getTeacherList()
  {
    this.teacherService.getAllTeachers().subscribe(data=>{
      this.teacher=data;
      console.log(data);
      
    },
    error=>{
      console.log("Something happended...");
      
    })
  }

  // Addding new Teacher on Button Cick
  addTeacher(){
      this.router.navigate(['admin/addNewTeacher'])
  }

  //updating teacher records...
  updateRecordTeacher(email:string){
    this.router.navigate(["/admin/updateTeacher",email]);

  }

  //delete teacher
  deleteTeacher(email:string)
  {
    console.log("delete teached called..");
    this.deletedSuccess=true;
    setTimeout(() => {
      this.deletedSuccess=false;
    }, 5000);
    
    this.teacherService.deleteTeacherByemail(email).subscribe(
      data=>
      {
        console.log("Above data..");
        
        console.log(data);
        this.getTeacherList();
    },
    error=>{
      console.log("Some error..");
      
    });
  }

}
