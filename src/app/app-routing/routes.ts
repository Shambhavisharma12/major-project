import { Routes } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { AppComponent } from '../app.component';

export const routes: Routes = [
    { path: 'signup',  component: SignupComponent },
    { path : 'home' , component :AppComponent},
   // {  path: '', redirectTo: '/home', pathMatch: 'full'}
  ];