import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddTaskformComponent } from '../add-taskform/add-taskform.component';
import { TaskprojectService } from '../services/taskproject.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AddTaskformComponent]
})
export class DashboardComponent {
  taskstory:any;
  today = new Date();

  constructor(private abc :Router, private taskobj:AddTaskformComponent, private myapi : TaskprojectService) {

      this.myapi.getapi().subscribe({
        next : response => { 
          this.taskstory= response 
        },
        error : err => {
          console.log(err.error.message)
         }
      })
      }
  
   

   addtask(){
      this.abc.navigate(['addtask'])
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

      this.myapi.updateapi(this.taskobj.addtaskform.value,item.id).subscribe({
        next:response => {
        alert("Mark as completed")
        window.location.reload();
      },
        error :err =>{
          console.log(err.error.message)
        }
      })
   }
delete(item:any){
  //  this.myapi.deleteApi(id).subscribe({
  //   next : response => {
  //     alert("Deleted Successfully")
  //     window.location.reload();
  //   },
  //   error : err =>{ 
  //     console.log(err.error.message)
  //   }
  // })RELOAD PE JO HMARI API WHA DELETE FUNCTION CHLRA THA ID KO LEKE
  this.taskobj.addtaskform.value.taskname=item.taskname;
    this.taskobj.addtaskform.value.taskdetails= item.taskdetails;
    this.taskobj.addtaskform.value.author= item.author;
    this.taskobj.addtaskform.value.status='deleted';
    this.taskobj.addtaskform.value.submittedAt = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
      // after updating values

      this.myapi.updateapi(this.taskobj.addtaskform.value,item.id).subscribe({
        next:response => {
        alert("Task Deleted")
        window.location.reload();
      },
        error :err =>{
          console.log(err.error.message)
        }
      })

}


closePopup(item:any,value:any,createvalue:any) {
  console.log('to check')
  this.taskobj.addtaskform.value.taskname=item.taskname;
  this.taskobj.addtaskform.value.taskdetails= value;
  this.taskobj.addtaskform.value.author=createvalue;
  // this.taskobj.addtaskform.value.status= item.status;
  this.taskobj.addtaskform.value.status= 'updated';
  this.taskobj.addtaskform.value.submittedAt = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
  // after updating values

    this.myapi.updateapi(this.taskobj.addtaskform.value,item.id).subscribe({
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
displayStyle = "none";

openPopup() {
  this.displayStyle = "block";
}
compdelete(id:any){
  this.myapi.deleteApi(id).subscribe({
      next : response => {
        alert("Deleted Successfully")
        window.location.reload();
      },
      error : err =>{ 
        console.log(err.error.message)
      }
    })
}
   // httpclient object.patch( url,data).subsribe...
   //this.baseUrl+'/'+item.id = http://localhost:3000/posts/3
  close(){
    this.displayStyle = "none";
  }
}
