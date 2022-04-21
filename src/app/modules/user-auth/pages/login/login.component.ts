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
    private authService: AuthService,
    private router: Router
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
    this.authService.signIn(this.email, this.password).subscribe({
      next: (response: any) => {
        /**
         * Save user token
         */
        this.authService.saveUserToken(response?.token);
        this.router.navigateByUrl('/dashboard/post-job');
        // save user token
      },
      error: ({ error }) => {
        if (error.username || error.password) {
          this.loginForm.setErrors({ credentials: true });
        }
      },
    });
  }

  /**
   * Get form values from controls
   */
  get formField() {
    return this.loginForm.controls;
  }
}
