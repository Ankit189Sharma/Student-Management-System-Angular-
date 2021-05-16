import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Teacher } from './../teacher';
import { Component, OnInit } from '@angular/core';
import { ServiceStudentService } from '../service-student.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-student-section',
  templateUrl: './student-section.component.html',
  styleUrls: ['./student-section.component.css']
})
export class StudentSectionComponent implements OnInit {

  student:Teacher[];
  constructor(private http:HttpClient,private studentService:ServiceStudentService,private router:Router,private teacherService:TeacherService) { }

  ngOnInit(): void {
    console.log("on in it called..");
    
    this.getStudentList();
  }

  //adding new student to list
  addStudent(){
    this.router.navigate(['/admin/addNewTeacher']);
  }

// list of all students
  getStudentList(){
    this.studentService.getAllStudents().subscribe(data=>{
      this.student=data;
      console.log(data);
      
    },error=>{
      console.log("sorry error in student section ");
      
    })
  }

  //update student 
  updateRecordStudent(email:string){
    console.log("update");
    this.router.navigate(["/admin/updateStudent",email]);
    
  }

  //deleting Student
  deleteStudent(email:string)
  {
    console.log("delte studern");
    
     console.log("delete teached called..");
  
  
  this.teacherService.deleteTeacherByemail(email).subscribe(
    data=>
    {
      console.log("Above data..");
      
      console.log(data);
      this.getStudentList();
  },
  error=>{
    console.log("Some error..");
    
  });

  }

}
