import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { LoginUser } from 'src/modals/login-user';
import { AuthentificationService } from 'src/services/authentification/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  email: AbstractControl;
  password: AbstractControl;

  /*
   * Declare two variables (email and password) for ngModel inputs
   * email: string;
   * password: string;
  */

  registerUser: LoginUser;

  constructor(
    private formBuilder: FormBuilder,
    private authentificationService: AuthentificationService
  ) {
    this.registerForm = this.formBuilder.group({
      email: [null, [Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });

    this.email = this.registerForm.controls.email;
    this.password = this.registerForm.controls.password;
  }

  ngOnInit() {}

  /*
   *
   * Button event when you click onSubmit()
   *
   */
  onSubmit() {
    this.registerUser = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    };

    this.authentificationService
      .onRegister(this.registerUser)
      .then(responseAuthentification => {
        console.log(responseAuthentification);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
