import { NgSwitchCase } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';
import { TokenserviceService } from '../service/tokenservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  isLoggedIn = false;
  isLoginFailed = false;
  logintest=false;
  errorMessage = '';
  roles: string[] = [];

  lform = {
    username : "",
    password : ""
  }

  constructor(private route : Router , private token_user : TokenserviceService , private authuser : AuthServiceService ) { }

  ngOnInit(): void {
    if (this.token_user.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.token_user.getUser().roles;
    }
  }
  login(){
    let username= this.lform.username;
    let password= this.lform.password;
  
    this.authuser.login(username,password).subscribe({
      next: data=>{
        this.token_user.saveToken(data.accessToken);
        this.token_user.saveUser(data);
  
        this.isLoggedIn=true;
        this.isLoginFailed=false;
        this.logintest=true;
        this.roles=this.token_user.getUser().roles;
        this.reloadPage();
      },
      error:err=>{
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.logintest=true;
        alert(this.errorMessage);
      }
    })
    
   }

  reloadPage(): void {
  
    this.route.navigate(['userdash']);
    // window.location.reload();
  }

}
