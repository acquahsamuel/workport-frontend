import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor() { }

  title = 'Workport';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/home', icon: 'home', title: 'Home' }
  ]

}
