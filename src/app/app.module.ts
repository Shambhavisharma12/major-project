import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AfterloginhomeComponent } from './afterloginhome/afterloginhome.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { DetailedpageComponent } from './detailedpage/detailedpage.component';
import { ContactComponent } from './contact/contact.component'

@NgModule({
  declarations: [
    AppComponent,
  


    HomeComponent,
    LoginComponent,
    AfterloginhomeComponent,
    
    RegistrationComponent,
    
    DetailedpageComponent,
    
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
