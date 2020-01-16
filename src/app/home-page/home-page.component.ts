import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  opacitySet() {
    document.getElementById("menu").style.opacity = '50%';
  }
  opacityReset() {
    document.getElementById("menu").style.opacity = '100%';

  }

}
