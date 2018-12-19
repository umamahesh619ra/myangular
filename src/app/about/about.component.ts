import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
imgeurl = 'http://www.esa.int/var/esa/storage/images/esa_multimedia/images/2017/06/france/17012277-1-eng-GB/France.jpg';
  constructor() { }

  ngOnInit() {
  }

}
