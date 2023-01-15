import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employfedtempform',
  templateUrl: './employfedtempform.component.html',
  styleUrls: ['./employfedtempform.component.css']
})
export class EmployfedtempformComponent implements OnInit {
  feedbackform= {
    name: '',
    empid: '',
    feedback: ''
  }

  constructor() { }
feedsub(){

alert("form submitted successfully");
}
  ngOnInit(): void {
  }

}
