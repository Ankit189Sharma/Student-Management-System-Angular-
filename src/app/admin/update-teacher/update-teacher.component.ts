import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {

  email:string;

  employee:Teacher=new Teacher();
  constructor(private teacherSerivce:TeacherService,private router:Router,private activatedRoute:ActivatedRoute) { }

  
  ngOnInit(): void {
  this.email=this.activatedRoute.snapshot.params['email'];
    this.teacherSerivce.getTeacherByemail(this.email).subscribe(data=>{
      this.employee=data;
    },
    error=>{
      console.log("Some error...");
      
    })
  }

  updateEmployee()
  {
    console.log("inside update employee being called.");
    
    this.teacherSerivce.updateTeacher(this.email,this.employee).subscribe(data=>{
      console.log(data);
      console.log("Upade empoyee called..");
      
      this.employee=new Teacher();
      this.router.navigate(["/admin/teachers"]);
      
    },error=>{
      console.log("error ocucred..");
      
    })
  }

  onSubmit(){
    console.log("on submit called..");
    
    this.updateEmployee();
  }
}
