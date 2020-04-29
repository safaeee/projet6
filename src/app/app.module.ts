import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as firebase from 'firebase';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
/**
 * Put your firebase configurations to replace 'YOUR_FIREBASE_CONFIG'
 */

const firebaseConfig = {
  apiKey: "AIzaSyCn6cS_r124Mc6Tathms-uHajmDfE6TbRk",
  authDomain: "projet6-7d03e.firebaseapp.com",
  databaseURL: "https://projet6-7d03e.firebaseio.com",
  projectId: "projet6-7d03e",
  storageBucket: "projet6-7d03e.appspot.com",
  messagingSenderId: "32909150839",
  appId: "1:32909150839:web:2b538d29396495a8835472",
  measurementId: "G-E7BS73BTPP"

 
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
