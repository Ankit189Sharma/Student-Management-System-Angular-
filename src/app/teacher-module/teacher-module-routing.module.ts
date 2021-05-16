import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { TeacherModuleComponent } from './teacher-module.component';

const routes: Routes = [{ path: '', component: TeacherModuleComponent,
  children:[
    {
      path:'manage_students',component:ManageStudentsComponent
    },
    {
      path:'addStudent',component:AddStudentComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherModuleRoutingModule { }
