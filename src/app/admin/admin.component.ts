import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Teacher } from './teacher';
import { TeacherService } from './teacher.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  newTeacher:FormGroup
  public teacher:Teacher[];
  constructor(public teacherService:TeacherService,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getTeachers();

    this.newTeacher=this.formBuilder.group(
      {
        name:['',[Validators.required,Validators.minLength(4)]],
        email:['',[Validators.email,Validators.required]],
        password:['',Validators.required],
        role :['teacher',Validators.required],
        mobile:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]

      }
    )
  }





  addedTeacher(){
    console.log("Teacher added succesess.");
      console.log(this.newTeacher);

      this.teacherService.allRegistration(this.newTeacher.value).subscribe(
        data=>{
            console.log("data received...");
           
            
        }
        ,error=>{
          console.log("Error");
          
        }
      )
      
  }

  loadStudent(){
    this.router.navigate(['students'])
  }
  ErrorFound:boolean=false;

  public getTeachers(){
    this.teacherService.getAllTeachers().subscribe(
      (response:Teacher[])=>{
        this.teacher=response;
      },
      (error: HttpErrorResponse)=>
      {
        // alert(error.message);
        this.ErrorFound=true;
        console.log(error.message);
        
      }
    )
  }

}
