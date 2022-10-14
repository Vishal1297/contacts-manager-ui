import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ContactsListComponent} from "./components/contacts-list/contacts-list.component";
import {ContactDetailsComponent} from "./components/contact-details/contact-details.component";
import {AddContactComponent} from "./components/add-contact/add-contact.component";

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'contacts', component: ContactsListComponent },
  { path: 'contact/:id', component: ContactDetailsComponent },
  { path: 'add', component: AddContactComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
