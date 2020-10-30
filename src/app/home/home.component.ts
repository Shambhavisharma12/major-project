import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let tabPanes = document.getElementsByClassName("tab-header")[0].getElementsByTagName("div");

    for(let i=0;i<tabPanes.length;i++){
      tabPanes[i].addEventListener("click",function(){
        document.getElementsByClassName("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
        tabPanes[i].classList.add("active");
        
        document.getElementsByClassName("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
        document.getElementsByClassName("tab-content")[0].getElementsByClassName("tab-body")[i].classList.add("active");
      });
    }
    
    $(window).scroll(function(){
      $('nav').toggleClass("scrolled",$(this).scrollTop()>55);
    })
  
  }

 
}
