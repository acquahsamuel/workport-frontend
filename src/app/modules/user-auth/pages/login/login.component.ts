import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  isLoading = false;
  password;
  email;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    /**
     * Login form control
     */
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  /**
   * @description handles login
   * @returns 
   */
  logIn() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.authService.signIn(this.email, this.password).subscribe((x: any) => {
    // this.state.verifyingCredentials = false;

    // save user token
    this.authService.saveUserToken(x.token);

      // go back to The Page From Here
      //  const url = this.states
      // this.router.navigateByUrl('/dashboard');
    });
  }


  /**
   * Get form values from controls
   */
   get formField() {
    return this.loginForm.controls;
  }

}
