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
   logInSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.logIn(this.email, this.password).subscribe((x : any) =>{
      // console.log(x + ' x');
      this.authService.saveUserToken(x?.token);
      this.router.navigateByUrl('/dashboard/post-job');

      (err) =>{
        console.log('Hell error ' + err);
      }
    })
  }

  /**
   * Get form values from controls
   */
  get formField() {
    return this.loginForm.controls;
  }
}
