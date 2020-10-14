import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
 // @ViewChild('fform') signupFormDirective;

  /*formgroup: FormGroup;
  signup:SignUp;*/

  constructor(private router:Router) {
    //this.createForm();
    
   }

  ngOnInit(): void {
  }
/*
  createForm() {
    this.formgroup = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      telnum: ['', [Validators.required, Validators.pattern] ],
      email: ['', [Validators.required, Validators.email] ],
      password:''
    });
  }

  onSubmit() {
    this.signup = this.formgroup.value;
    console.log(this.signup);
    this.signupFormDirective.resetForm();
  }*/


  sign(){
    Swal.fire({
      title: 'sing up successfuly',
      text: 'How you want to register as a owner if yes then click on register if not then click on Done button',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText : 'OWNER',
      cancelButtonText: 'DONE'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(["/home"])
      } 
      else if (result.dismiss === Swal.DismissReason.cancel) {
        this.router.navigate(["/home"])
      }
    })
  }


  
}