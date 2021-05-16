import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-section',
  templateUrl: './student-section.component.html',
  styleUrls: ['./student-section.component.css']
})
export class StudentSectionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  do(){
    window.location.href="https://www.google.com";
  }
  files(){
    this.router.navigate(["files"])
  }
  codeshef(){
    window.location.href="https://www.codechef.com/";
  
  }
  gfg(){
    window.location.href="https://www.geeksforgeeks.org/";
   
  }
  hacker(){
    window.location.href="https://www.hackerrank.com/";
  }
}
