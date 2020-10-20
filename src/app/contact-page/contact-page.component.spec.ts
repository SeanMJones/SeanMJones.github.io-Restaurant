// Last Updated: 10/18/2020
// File Name: contact-page.component.spec.ts
// Description: 
//     Contains the typescript testing code for the contact page of the website in 
//     which the user is able to contact the restaurant via email.
// Related Files:
//     contact-page.component.css
//     contact-page.component.hmtl
//     contact-page.component.ts 

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPageComponent } from './contact-page.component';

describe('ContactPageComponent', () => {
  let component: ContactPageComponent;
  let fixture: ComponentFixture<ContactPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
