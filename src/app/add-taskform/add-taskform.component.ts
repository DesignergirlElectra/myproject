import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskprojectService } from '../services/taskproject.service';


@Component({
  selector: 'app-add-taskform',
  templateUrl: './add-taskform.component.html',
  styleUrls: ['./add-taskform.component.css']
})
export class AddTaskformComponent {
 today = new Date();
addtaskform = new FormGroup({
  taskname : new FormControl('',[Validators.required]),
  taskdetails : new FormControl('', Validators.required),
  author :  new FormControl('', Validators.required),
  status:new FormControl(''),
  submittedAt: new FormControl('')
  })
    constructor( private apivar: TaskprojectService , private routerabc : Router) { }

get taskname(){
  return this.addtaskform.get('taskname');
}
get taskdetails(){
  return this.addtaskform.get('taskdetails');
}
get author(){
  return this.addtaskform.get('author');
}

submit(){
  this.addtaskform.value.status= 'pending';
  this.addtaskform.value.submittedAt = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
  this.apivar.postapi(this.addtaskform.value).subscribe({
    next: response=>{ 
      alert('Form submitted successfully')
      window.location.reload();
    },
    error: err=>{
      console.log(err.error.message)
    }
  })
  
  this.routerabc.navigate(['/dash']);
}
}
