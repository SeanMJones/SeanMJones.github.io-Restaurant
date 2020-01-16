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
