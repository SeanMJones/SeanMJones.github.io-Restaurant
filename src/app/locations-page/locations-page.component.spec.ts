// Last Updated: 10/18/2020
// File Name: locations-page.component.spec.ts
// Description: 
//     Contains the typescript testing code for the locations page of the website in which the all the locations are displayed
//     on a google map, with the addresses listed below it, and the times that they are open at.
// Related Files:
//     locations-page.component.ts
//     locations-page.component.html
//     locations-page.component.css

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsPageComponent } from './locations-page.component';

describe('LocationsPageComponent', () => {
  let component: LocationsPageComponent;
  let fixture: ComponentFixture<LocationsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
