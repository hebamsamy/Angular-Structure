import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { loginViewModel } from 'src/app/Models/SignUpViewModel';


let routes :Routes=[
  {},
  {path:'login',component:loginViewModel},
  {path:'register',component:SignupComponent},
]

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule
    ,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]

})
export class AccountModule { }
