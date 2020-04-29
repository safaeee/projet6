import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/***
 *
 * Importation des modules FormsModule et ReactiveFormsModule pour gérer
 *                              le formulaire.
 *
***/
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,

    // Ajouter les modules dans le tableau imports []
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }
