import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceStudentService } from 'src/app/admin/service-student.service';
import { Teacher } from 'src/app/admin/teacher';
import { TeacherService } from 'src/app/admin/teacher.service';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements OnInit {

  student:Teacher[];
  constructor(private http:HttpClient,private studentService:ServiceStudentService,private router:Router,private teacherService:TeacherService) { }

  ngOnInit(): void {
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
