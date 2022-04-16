import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  submitted = false;
  signUpForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
     /**
      * Signup forms
      */
    this.signUpForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get formField() {
    return this.signUpForm.controls;
  }

  onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }
    console.log(this.signUpForm.value);
    this.authService.signUp(this.signUpForm.value).subscribe({
      /**Handle the this keyword with arrow function */
      next: (response) => {
        
      },
      complete() {},
      error: (err) => {
        // console.log(err);
        if(!err.status){
          this.signUpForm.setErrors({ noConnection : true });
        }
      },
    });
  }
}
