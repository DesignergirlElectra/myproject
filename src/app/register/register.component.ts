import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  tform={
    name: 0,
    email: "nk32209@gmail.com",
    password: "xyz"
  }
  constructor(private authvar : AuthServiceService , private routervar : Router) {
   }

is_successfull=false;
is_signUpFailed = false; 
error_msg = "";

registerform(){
  let username= this.tform.name;
  let email = this.tform.email;
  let password= this.tform.password;
  this.authvar.register(username,email,password).subscribe({
    next: (data) =>{
      console.log(data);
      this.is_successfull=true;
      this.is_signUpFailed=false;
      alert('Form submitted successfully');      
      this.routervar.navigate(['login'])

    },
    error:err => {
      this.error_msg = err.error.message;
      this.is_signUpFailed = true;
    }
  });
  
  
}

}


