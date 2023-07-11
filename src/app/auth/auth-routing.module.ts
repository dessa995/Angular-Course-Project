import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SignupComponent } from "./signup/signup.component";
import { SignInComponent } from "./sign-in/sign-in.component";

const authRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SignInComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(authRoutes) ]
})
export class AuthRoutnigModule {}