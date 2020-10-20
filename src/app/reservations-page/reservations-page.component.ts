// Last Updated: 10/18/2020
// File Name: reservations-page.component.ts
// Description: 
//     Contains the typescript code for the reservations page of the restaurant in which the the user can reserve
//     a time at a specific restaurant location.
// Related Files:
//     reservations-page.component.spec.ts
//     reservations-page.component.html
//     reservations-page.component.css

import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';

@Component({
  selector: 'app-reservations-page',
  templateUrl: './reservations-page.component.html',
  styleUrls: ['./reservations-page.component.css']
})
export class ReservationsPageComponent implements OnInit {
  colorTheme = 'theme-default';
  bsConfig: Partial<BsDatepickerConfig>;
  constructor() { 
  }

  ngOnInit() {
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme});
  }

}
