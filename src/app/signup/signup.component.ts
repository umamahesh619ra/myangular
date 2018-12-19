import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
username: string;
password: number;
  constructor(email: FormControl, form: FormGroupName) {
  }
  ngOnInit() {
  }

}
