import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageTitle = "Home";
  pageBrand = "Workport"
  jobs = [];

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit(): void {}
  

  onClick() {
    console.log('Hello world');
  }

}
