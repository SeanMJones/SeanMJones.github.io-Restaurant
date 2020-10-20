// Last Updated: 10/18/2020
// File Name: home-page.component.ts
// Description: 
//     Contains the typescript code for the home page of the website where 
//     the user is able to access the menu, see the locations, and browse the other pages.
// Related Files:
//     home-page.component.spec.ts
//     home-page.component.hmtl
//     home-page.component.css

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

  // Function Name: opacitySet
  // Description: Sets the opacity of them menu link to 50% when the user is hovered over it.

  opacitySet() {
    document.getElementById("menu").style.opacity = '50%';
  }

  // Function Name: resetOpacity
  // Description: Sets the opacity of the menu link to 100% when the user isnt hovered over it.
  opacityReset() {
    document.getElementById("menu").style.opacity = '100%';

  }

}
