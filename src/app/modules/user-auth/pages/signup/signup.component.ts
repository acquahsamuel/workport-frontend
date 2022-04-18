import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  submitted = false;
  isLoading = false;
  signUpForm: FormGroup;


  constructor(
    private authService: AuthService,
    private router : Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
     /**
      * Signup form control
      */
    this.signUpForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get formField() {
    return this.signUpForm.controls;
  }

   /**
   * @description handles signup
   * @returns 
   */
  signUp() {
    this.submitted = true;
    this.isLoading = true;
    if (this.signUpForm.invalid) {
      return;
    }
    this.authService.signUp(this.signUpForm.value).subscribe({
      /**Handle the this keyword with arrow function */
      next: (response :any) => {  
        console.log(response);
        this.authService.saveUserToken(response?.token);
        this.router.navigateByUrl('/dashboard');
      },
      error: (err) => {
        console.log(err);
        if(!err.status){
          this.isLoading = false;
        }
      },
    });
  }


  onReset(){
    this.signUpForm.reset();
  }
}
