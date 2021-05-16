import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent } from './main-screen/main-screen.component';

import { AddTeacherComponent } from './admin/add-teacher/add-teacher.component';
import { FilesDownloadingComponent } from './files-downloading/files-downloading.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path:'signup' ,component:UserSignUpComponent
  },
 {
  path:'files',component:FilesDownloadingComponent
 },
  {
    path:'home',component:MainScreenComponent
  },

{
    path:'',redirectTo:'home',pathMatch:'full'
  },
  

  {
    path:'login', component:UserLoginComponent
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

  { path: 'teacherDept', loadChildren: () => import('./teacher-module/teacher-module.module').then(m => m.TeacherModuleModule) },

  { path: 'studentSection', loadChildren: () => import('./student-section/student-section.module').then(m => m.StudentSectionModule) 
  },
 {
   path:"**",component:PageNotFoundComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
