import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ErrorStateMatcher } from '@angular/material/core';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  constructor(
    // private auth: AuthService,
    // private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {

  }

  loginSubmit() {

  }

}
