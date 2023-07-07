import firebase from 'firebase/compat/app'; // Use 'compat' to support older syntax
import 'firebase/compat/auth'; // Import the firebase/auth module

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  signupUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log('Signup Error ', error);
      });
  }
}
