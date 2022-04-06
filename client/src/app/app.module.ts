import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {faGithub, faInstagram, faLinkedin, faSkype, faStrava, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faBriefcase, faBusinessTime, faClock, faEnvelope, faGraduationCap} from "@fortawesome/free-solid-svg-icons";

import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {EmployeeComponent, SafeHtmlPipe} from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { CompanyComponent } from './company/company.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SafeHtmlPipe,
    DashboardComponent,
    CustomerComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FontAwesomeModule,
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faLinkedin, faGithub, faTwitter, faInstagram, faStrava, faSkype, faBriefcase, faBusinessTime, faClock, faGraduationCap, faEnvelope);
  }
}

