import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  
  registerForm: FormGroup;
  constructor( private formBuilder:FormBuilder) {
    this.registerForm = formBuilder.group({
      fullname:['',[Validators.required, Validators.minLength(2),Validators.maxLength(25)]],

      mobileno:['',[Validators.required, Validators.pattern]],

      aleternatemobileno:['',[Validators.required, Validators.pattern]],

      caddress:['',[Validators.required, Validators.minLength(10),Validators.maxLength(150)]],
      
      tov : ['',[Validators.required, ]]


    })     
   }

  ngOnInit(): void {
  }
  postdata(){
    console.log(this.registerForm);
    console.log(this.registerForm.value)
  }

}
