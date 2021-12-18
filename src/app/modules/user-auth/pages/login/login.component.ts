import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import {
  FormControl,
  NgForm,
  FormGroupDirective,
  FormGroup, Validators,
  FormArray,
  FormBuilder
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

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
