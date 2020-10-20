// Last Updated: 10/18/2020
// File Name: footer.component.ts
// Description: 
//     Contains the typescript code for the footer displayed on the bottom of all pages of the website.
// Related Files:
//     footer.component.css
//     footer.component.html
//     footer.component.spec.ts

import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  constructor() { }

  ngOnInit() {
  }

}
