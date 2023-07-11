import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SignupComponent } from './signup/signup.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthRoutnigModule } from './auth-routing.module';



@NgModule({
  declarations: [
    SignupComponent,
    SignInComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutnigModule,
  ]
})
export class AuthModule { }
