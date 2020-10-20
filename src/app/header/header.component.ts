// Last Updated: 10/18/2020
// File Name: header.component.ts
// Description: 
//     Contains the typescript code for the header displayed at the top of all pages on the website.
// Related Files:
//     header.component.spec.ts
//     header.component.html
//     header.component.css

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
  // Function Name: changeOpacity
  // Description: Changes the opacity of all the links the user isnt hovering over to 50% so as to give
  // the link the user is hovering over a highlighted effect.
  changeOpacity(linkRef) {
    console.log(linkRef);
    switch (linkRef) {
      case 'home': {
        this.opacity50('menuLink');
        this.opacity50('resLink');
        this.opacity50('locLink');
        this.opacity50('conLink');
        break;
      }
      case 'menu': {
        this.opacity50('homeLink');
        this.opacity50('resLink');
        this.opacity50('locLink');
        this.opacity50('conLink');
        break;
      }
      case 'res': {
        this.opacity50('homeLink');
        this.opacity50('menuLink');
        this.opacity50('locLink');
        this.opacity50('conLink');
        break;
      }
      case 'loc': {
        this.opacity50('homeLink');
        this.opacity50('menuLink');
        this.opacity50('resLink');
        this.opacity50('conLink');
        break;
      }
      case 'con': {
        this.opacity50('homeLink');
        this.opacity50('menuLink');
        this.opacity50('resLink');
        this.opacity50('locLink');
        break;
      }
      default: {
        console.log("Unexpected error while changing opacity of header links.")
        break;
      }
    }
  }

// Function Name: resetOpacity
// Description: Sets the opacity of all the links in the header to 100%.
  resetOpacity() {
    document.getElementById("homeLink").style.opacity = '100%';
    document.getElementById("menuLink").style.opacity = '100%';
    document.getElementById("resLink").style.opacity = '100%';
    document.getElementById("locLink").style.opacity = '100%';
    document.getElementById("conLink").style.opacity = '100%';
  }
// Function Name: opacity50
// Description: Sets the specificed inputted elements opacity to 50%.
  opacity50(element) {
    document.getElementById(element).style.opacity = '50%';
  }

}
