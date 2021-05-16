import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentSectionRoutingModule } from './student-section-routing.module';
import { StudentSectionComponent } from './student-section.component';


@NgModule({
  declarations: [
    StudentSectionComponent
  ],
  imports: [
    CommonModule,
    StudentSectionRoutingModule
  ]
})
export class StudentSectionModule { }
