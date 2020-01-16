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

  resetOpacity() {
    document.getElementById("homeLink").style.opacity = '100%';
    document.getElementById("menuLink").style.opacity = '100%';
    document.getElementById("resLink").style.opacity = '100%';
    document.getElementById("locLink").style.opacity = '100%';
    document.getElementById("conLink").style.opacity = '100%';
  }

  opacity50(element) {
    document.getElementById(element).style.opacity = '50%';
  }

}
