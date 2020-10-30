import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AfterloginhomeComponent } from './afterloginhome/afterloginhome.component';

import { RegistrationComponent } from './registration/registration.component'


const routes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path : 'regist' , component : RegistrationComponent},
  { path : 'home' , component : HomeComponent},
  {  path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path : 'after' , component : AfterloginhomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
