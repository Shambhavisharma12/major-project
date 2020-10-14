import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from 'src/app/signup/signup.component'
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AfterloginhomeComponent } from './afterloginhome/afterloginhome.component';


const routes: Routes = [
  { path: 'signup',  component: SignupComponent },
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
