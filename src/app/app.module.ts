import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AddContactComponent} from './components/add-contact/add-contact.component';
import {ContactDetailsComponent} from './components/contact-details/contact-details.component';
import {ContactsListComponent} from './components/contacts-list/contacts-list.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterLinkWithHref, RouterModule, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    ContactDetailsComponent,
    ContactsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLinkWithHref,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
