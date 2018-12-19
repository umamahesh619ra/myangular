import { Component, OnInit } from '@angular/core';
import {CookieStorage, LocalStorage, SessionStorage } from 'ngx-store';

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
@LocalStorage()userNote = 'Leave your note here';
@SessionStorage() title = 'Homepage';
@CookieStorage() fuck = 'mylife' ;
login() {
  console.log('clicked') ;
  this.details.push({mail: this.email, pass: this.password});
}

  ngOnInit() {
  }
}

