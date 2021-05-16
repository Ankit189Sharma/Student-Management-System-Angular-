import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AdminComponent } from './admin.component';
import { StudentSectionComponent } from './student-section/student-section.component';
import { TeacherSectionComponent } from './teacher-section/teacher-section.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';

const routes: Routes = [
      { path: '', component: AdminComponent, children:
      [
        {
        path:'students',component:StudentSectionComponent
        },
        {
          path:'teachers',component:TeacherSectionComponent
        },
        {
          path:'addNewTeacher',component:AddTeacherComponent
        },{
          path:'updateTeacher/:email',component:UpdateTeacherComponent
        },{
          path:'updateStudent/:email',
          component:UpdateStudentComponent
        }
       
    ]},

    {
      path:'admin',component:AdminComponent
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
