import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  urls = ['https://developers.google.com/speed/webp/gallery1'];
  message = 'test message from me';

  constructor() { }

  ngOnInit() {
  }
  save(text) {
   this.message = text ;
  }
}
