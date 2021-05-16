import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherModuleRoutingModule } from './teacher-module-routing.module';
import { TeacherModuleComponent } from './teacher-module.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TeacherModuleComponent,
    ManageStudentsComponent,
    AddStudentComponent
  ],
  imports: [
    CommonModule,
    TeacherModuleRoutingModule,
    FormsModule
  ]
})
export class TeacherModuleModule { }
