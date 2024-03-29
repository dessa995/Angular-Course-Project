import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private authService: AuthService) {}

  onSignin(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    
    this.authService.signinUser(email, password)
  }
}
