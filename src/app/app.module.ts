/* 
    Last Updated: 10/20/2020
    File Name: app.module.ts
    Description: 
        Contains all the imported modules used throughout the entire website.
    Related Files:
        app.component.ts
        app.component.html
        app.component.css
        app.component.spec.ts
        app-routing.module.ts
*/

//Angular Modules 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//Angular Modules that require Installation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

//Third Party Modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AgmCoreModule } from '@agm/core';

//Components
import { AppComponent } from './app.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { ReservationsPageComponent } from './reservations-page/reservations-page.component';
import { LocationsPageComponent } from './locations-page/locations-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';

//Routes
const appRoutes: Routes = [
  { path: 'contact', component: ContactPageComponent},
  { path: 'reservations', component: ReservationsPageComponent},
  { path: 'menu', component: MenuPageComponent},
  { path: 'locations', component: LocationsPageComponent},
  { path: '', component: HomePageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    MenuPageComponent,
    ReservationsPageComponent,
    LocationsPageComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FlexLayoutModule,
    FontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCb-krZqLT_J0zsgPONYcfxUBFy_0aF2cw'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
