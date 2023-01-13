import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private abc :Router) { }

  ngOnInit(): void {
  }
  addtask(){
    this.abc.navigate(['addtask'])
 }
 viewtask(){
  this.abc.navigate(['register'])
 }
}
