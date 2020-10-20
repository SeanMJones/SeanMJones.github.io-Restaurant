// Last Updated: 10/18/2020
// File Name: reservations-page.component.spec.ts
// Description: 
//     Contains the typescript testing code for the reservations page of the restaurant in which the the user can reserve
//     a time at a specific restaurant location.
// Related Files:
//     reservations-page.component.ts
//     reservations-page.component.html
//     reservations-page.component.css

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsPageComponent } from './reservations-page.component';

describe('ReservationsPageComponent', () => {
  let component: ReservationsPageComponent;
  let fixture: ComponentFixture<ReservationsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
