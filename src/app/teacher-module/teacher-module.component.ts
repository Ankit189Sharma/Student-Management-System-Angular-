import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-module',
  templateUrl: './teacher-module.component.html',
  styleUrls: ['./teacher-module.component.css']
})
export class TeacherModuleComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  loadStudents(){
    console.log("cicked");
    
    this.router.navigate(['/teacherDept/manage_students'])
  }


  addNewStudent(){
    console.log("add student ");
    this.router.navigate(['/teacherDept/addStudent'])
    
  }

}
