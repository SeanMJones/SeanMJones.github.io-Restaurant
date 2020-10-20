// Last Updated: 10/18/2020
// File Name: menu-page.component.spec.ts
// Description: 
//     Contains the typescript testing code for the menu page of the website in which all food options are listed
//     that are available at the restaurant.
// Related Files:
//     menu-page.component.ts
//     menu-page.component.html
//     menu-page.component.css

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPageComponent } from './menu-page.component';

describe('MenuPageComponent', () => {
  let component: MenuPageComponent;
  let fixture: ComponentFixture<MenuPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
