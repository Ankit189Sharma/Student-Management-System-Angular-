import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

  signUpForm:FormGroup;

  constructor(public router:Router,public formBuilder:FormBuilder,private sign:SignUpService) { }
  obj:{
    name:string,
    email:string,
    password:string,
    mobile:string,
    role:string,
  }
  ngOnInit(): void {

    this.signUpForm=this.formBuilder.group(
      {
        name:['',[Validators.required,Validators.minLength(4)]],
        email:['',[Validators.required,Validators.email]],
        password:['',Validators.required],
        repeatPassword:['',Validators.required],
        mobile:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        select:['',Validators.required],
        check:['',Validators.requiredTrue]

      }
    )
    this.signUpForm.get('email').statusChanges.subscribe(data=>
      {
        console.log(data);
        
      })

  }



Registration(){

console.log(this.signUpForm);
this.obj={
  name:this.signUpForm.get('name').value,
  email:this.signUpForm.get('email').value,
  password:this.signUpForm.get('password').value,
  mobile:this.signUpForm.get('mobile').value,
  role:this.signUpForm.get('select').value
}
this.sign.allRegistration(this.obj).subscribe(
  data=>{
        console.log("value inserted");
        console.log(this.obj.role);
        this.router.navigate(['login'])
        
        
  },
  error=>{
      console.log("error occured");
      console.log(error.message);
      
      
  }
);

}

  gotoLogin()
  {
      this.router.navigate(['login'])
  }
  cancel(){
    this.router.navigate(['home']);
  }
  signIn()
  {
    this.router.navigate(['login'])
  }
}
