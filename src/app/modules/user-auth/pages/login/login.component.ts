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
  state = {
    togglePassword: false,
    verifyingCredentials: false,
    emailValid: false,
    passwordValid: false,
    emailFocus: false,
    passwordFocus: false,
    loginError: false,
  };

  loginForm: FormGroup;
  submitted = false;
  loading = false;
  password;
  email;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  //formFieldValue
  get formField() {
    return this.loginForm.controls;
  }

  // onSubmit()
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.signIn(this.email, this.password).subscribe((x: any) => {
      this.state.verifyingCredentials = false;

      // save user token
      this.authService.saveUserToken(x.token);

      // go back to The Page From Here
      //  const url = this.states
      this.router.navigateByUrl('/dashboard');
    });

  }
}
