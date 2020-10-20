// Last Updated: 10/18/2020
// File Name: home-page.component.spec.ts
// Description: 
//     Contains the typescript testing code for the home page of the website where 
//     the user is able to access the menu, see the locations, and browse the other pages.
// Related Files:
//     home-page.component.css
//     home-page.component.html
//     home-page.component.ts

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
