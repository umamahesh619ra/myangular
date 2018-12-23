import { Component, OnInit } from '@angular/core';
import {CookieStorage, LocalStorage, SessionStorage } from 'ngx-store';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
private email = '';
private password = '';
details: any [] = [];
click: boolean;
@LocalStorage()emaildetails = this.emaildetails;
@LocalStorage()passworddetails = this.password;
@SessionStorage()haha = 'haha';
login() {
  console.log('clicked') ;
  this.details.push({mail: this.email, pass: this.password});
  this.passworddetails = this.password;
  this.click = !this.click ;
  alert(this.emaildetails + '\n' + ' sucessfully login in');
  console.log(this.details);
  window.location.pathname = '/home';
}

  ngOnInit() {
  }
}

