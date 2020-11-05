import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // $(window).scroll(function(){
    //   $('nav').toggleClass("scrolled",$(this).scrollTop()<55);
    // })
  }
  changetext(){
    document.getElementById("#1").innerHTML="Home";
   
  }
  dt(){
   document.getElementById('#1').innerHTML="<span class='fa fa-home'></span>"
  }
  changetext2(){
   document.getElementById("#2").innerHTML="About";
  
 }
 dt2(){
  document.getElementById('#2').innerHTML="<span class='fa fa-info'></span>"
 }
 changetext3(){
   document.getElementById("#3").innerHTML="Contact";
  
 }
 dt3(){
  document.getElementById('#3').innerHTML="<span class='fa fa-phone'></span>"
 }
 changetext4(){
   document.getElementById("#4").innerHTML="Myaccount";
  
 }
 dt4(){
  document.getElementById('#4').innerHTML="<span class='fa fa-user-circle-o'></span>"
 }
 changetext5(){
   document.getElementById("#5").innerHTML="Register";
  
 }
 dt5(){
   document.getElementById('#5').innerHTML="<span class='fa fa-user-plus'></span>"
  }
  changetext6(){
    document.getElementById("#6").innerHTML="Logout";
   
  }
  dt6(){
    document.getElementById('#6').innerHTML="<span class='fa fa-power-off'></span>"
   }
}
