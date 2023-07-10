import firebase from 'firebase/compat/app'; // Use 'compat' to support older syntax
import 'firebase/compat/auth'; // Import the firebase/auth module

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log('Signup Error ', error);
      });
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      (response) => {
        this.router.navigate(['/'])
        console.log('Sign in valid ', response);
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => {
              this.token = token;
            }
          )
      }
    ).catch(
      (error) => {
        console.log('SignIn error ', error);
        
      }
    )
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => {
          this.token = token;
        }
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
