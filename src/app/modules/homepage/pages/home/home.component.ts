import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    //  console.log(this.route.snapshot.params.j)
  }


  onClick() {
    console.log('Hello world');
  }

  pageTitle = "Home";
  pageBrand = "Workport"


}
