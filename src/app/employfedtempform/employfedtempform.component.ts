import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employfedtempform',
  templateUrl: './employfedtempform.component.html',
  styleUrls: ['./employfedtempform.component.css']
})
export class EmployfedtempformComponent {
  feedbackform= {
    name: '',
    empid: '',
    feedback: ''
  }

  constructor() { }
feedsub(fitem:any){
  if (fitem.invalid) {
    // here potentially add some visual feedback for a user
     return;
  }
alert("form submitted successfully");
}

}

