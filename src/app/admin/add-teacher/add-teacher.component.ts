import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {


  employee:Teacher=new Teacher();
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  

  constructor(private teacherSerivce:TeacherService,private router:Router) { }

  ngOnInit(): void {
    
  }

goToAdmin(){
  this.router.navigate(['/admin/teachers'])

}

  //creaing new teacher

  saveTeacher()
  {
      this.teacherSerivce.createNewTeacher(this.employee).subscribe(data=>{
          console.log("data saved success");
          this.goToAdmin();
          
      },
      error=>{
        console.log("errror saving teacher...");
        
      })
  }

//Method for form submission for Add New Teacher
  onSubmit(){
    console.log("On submitt called.");
    console.log(this.employee);
    this.saveTeacher();
    
  }

}
