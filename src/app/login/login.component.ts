import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { LoginUser } from 'src/modals/login-user';
import { AuthentificationService } from 'src/services/authentification/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  email: AbstractControl;
  password: AbstractControl;

  /*
   * Declare two variables (email and password) for ngModel inputs
   *
   *email: string;
   *password: string;
   */

  loginUser: LoginUser;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authentificationService: AuthentificationService
  ) {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });

    this.email = this.loginForm.controls.email;
    this.password = this.loginForm.controls.password;
  }

  ngOnInit() {}

  /*
   *
   * Button event when you click onSubmit()
   *
   */
  onSubmit() {
    this.loginUser = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.authentificationService
      .onLogin(this.loginUser)
      .then(responseAuthentification => {
        console.log(responseAuthentification);
        this.router.navigate(["contact-form"]);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
