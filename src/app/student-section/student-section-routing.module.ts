import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentSectionComponent } from './student-section.component';

const routes: Routes = [{ path: '', component: StudentSectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentSectionRoutingModule { }
