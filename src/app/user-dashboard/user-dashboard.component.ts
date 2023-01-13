import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddTaskformComponent } from '../add-taskform/add-taskform.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TokenserviceService } from '../service/tokenservice.service';
import { TaskprojectService } from '../services/taskproject.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
   providers: [AddTaskformComponent]
})
export class UserDashboardComponent{
apivar:any; 
today = new Date();
  displayStyle = "none";
  constructor(private tokensignvar: TokenserviceService , private nav : Router,private task : TaskprojectService,private taskobj:AddTaskformComponent) { 
    
  }

logout(){
  this.tokensignvar.signOut();
  this.nav.navigate(['']);
}
// api get call krna 
welview(){
  this.task.getapi().subscribe(
    {
      next : data =>{this.apivar=data;
      // window.location.reload();
      },
      error : err => {alert(err.error.message)}
    }
  )
}

  //  updatedata for api 

  mark(item:any){
    // as soon as this line is hit
    this.taskobj.addtaskform.value.taskname=item.taskname;
    this.taskobj.addtaskform.value.taskdetails= item.taskdetails;
    this.taskobj.addtaskform.value.author= item.author;
    this.taskobj.addtaskform.value.status='completed';
    this.taskobj.addtaskform.value.submittedAt = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
      // after updating values
      // 
      this.task.updateapi(this.taskobj.addtaskform.value,item.id).subscribe({
        next:response => {
        alert("Mark as completed")
        window.location.reload();
      },
        error :err =>{
          console.log(err.error.message)
        }
      })
   }

   openPopup() {
    this.displayStyle = "block";
  }
  close(){
    this.displayStyle = "none";
  }
  closePopup(item:any,value:any,createvalue:any) {
  
    this.taskobj.addtaskform.value.taskname=item.taskname;
    this.taskobj.addtaskform.value.taskdetails= value;
    this.taskobj.addtaskform.value.author=createvalue;
    // this.taskobj.addtaskform.value.status= item.status;
    this.taskobj.addtaskform.value.status= 'updated';
    this.taskobj.addtaskform.value.submittedAt = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    // after updating values
  
      this.task.updateapi(this.taskobj.addtaskform.value,item.id).subscribe({
        next:response => {
        alert("Edit complete")
        window.location.reload();
      },
        error :err =>{
          console.log(err.error.message)
        }
      })
      this.displayStyle = "none";
  }

  style1='none';
  style2='none';
  alltaskview(){
    this.style1='block';
    this.style2='none';
    this.welview();
  }
  deletedtaskview(){
    this.style2='flex';
    this.style1='none';
    this.welview();
  }
}
