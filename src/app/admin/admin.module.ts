import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherSectionComponent } from './teacher-section/teacher-section.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { StudentSectionComponent } from './student-section/student-section.component';
import { UpdateStudentComponent } from './update-student/update-student.component';


@NgModule({
  declarations: [
    AdminComponent,
  
    TeacherSectionComponent,
    AddTeacherComponent,
    UpdateTeacherComponent,
    StudentSectionComponent,
    UpdateStudentComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule
  ]
})
export class AdminModule { }
