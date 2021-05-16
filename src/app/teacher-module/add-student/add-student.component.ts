import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/admin/teacher';
import { TeacherService } from 'src/app/admin/teacher.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  

  employee:Teacher=new Teacher();
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  

  constructor(private teacherSerivce:TeacherService,private router:Router) { }

  ngOnInit(): void {
  }

  
goToAdmin(){
  console.log("create clicked..");
  
  this.router.navigate(['teacherDept'])

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
