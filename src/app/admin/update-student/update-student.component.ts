import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from './../teacher';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { ServiceStudentService } from '../service-student.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  email:string;
  employee:Teacher=new Teacher();
  constructor(private studentService:ServiceStudentService,private router:Router,private activatedRoute:ActivatedRoute,
    private teacherService:TeacherService) { }

  ngOnInit(): void {
    this.email=this.activatedRoute.snapshot.params['email'];
     this.studentService.getStudentByemail(this.email).subscribe(data=>{
       this.employee=data;
     },
     error=>{
       console.log("some error in update student component...");
       
     })
  
  }

  updateEmployee(){
    this.teacherService.updateTeacher(this.email,this.employee).subscribe(data=>{
      this.employee=new Teacher();
      this.router.navigate(["/admin/students"]);
    },
    error=>{
      console.log("error in update student ");
      
    })
  }


  onSubmit(){
    console.log("update called.. student");
    
    this.updateEmployee();
  }

}
