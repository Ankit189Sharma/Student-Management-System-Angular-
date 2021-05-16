import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../user';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user=new User();
  msg='';

  ifError=false;
  loginForm:FormGroup;

  constructor(private activatedRoute:ActivatedRoute,private router:Router,
    public formBuilder:FormBuilder,
    private serice:LoginService
    ) { 

    }

    obj:{
      name:string;
      email:string;
      password:string;
      mobile:string;
      role:string;

    }


  ngOnInit(): void {

  
    
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]]
      ,
      password:['',Validators.required],
      
     check:['',Validators.requiredTrue]

    })


    // this.loginForm.get('email').statusChanges.subscribe(data=>{
    //   console.log(data);
      
    // })

    
  }
role:any;
  signUp()
  {
    this.router.navigate(['signup']),{relativeTo:this.activatedRoute}
  }


  loginSuccess(){
    this.serice.loginUserFromRemoteSide(this.loginForm.value).subscribe(
      data=>{
                console.log("response received");
                
                console.log(data.role);
                console.log(this.loginForm);

                if(data.role=="admin")
                {
                  this.router.navigate(["admin"]);
                }
                if(data.role=="teacher")
                {
                  this.router.navigate(["teacherDept"])
                }
                if(data.role=="student")
                {
                  this.router.navigate(["studentSection"])
                }
                
                
                
      }
      ,error=>
      {
        this.ifError=true;
        console.log("exception occured.");
        this.msg="Bad Credentials, User does not exist."
        
      }
    )
    
    
  }
}
