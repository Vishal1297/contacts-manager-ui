import { Component, OnInit } from '@angular/core';
import { pluck } from 'rxjs';
import { Contact } from 'src/app/models/models';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts?: Contact[];
  currContact?: Contact;
  currentIndex = -1;
  fullName = '';

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.fetchAllContacts();
  }

  fetchAllContacts(): void {
    this.contactsService.getAll()
      .pipe(pluck('data'))
      .subscribe((res: any) => {
        this.contacts = res;
      });
  }

  refreshList(): void {
    this.fetchAllContacts();
    this.currContact = undefined;
    this.currentIndex = -1;
  }

  setActiveContact(contact: Contact, index: number): void {
    console.log('set active : ', contact.fullName);

    this.currContact = contact;
    this.currentIndex = index;
  }

  removeAllContacts(): void {
    this.contactsService.deleteAll()
      .subscribe(
        response => {
          this.refreshList();
        },
        error => {
          console.log('Error while remove all contacts :', error);
        });
  }

  searchByFullName(): void {
    this.currContact = undefined;
    this.currentIndex = -1;

    this.contactsService.searchByFullName(this.fullName)
      .subscribe(
        data => {
          this.contacts = data;
        },
        error => {
          console.log('Error on search by fullName :', error);
        });
  }

}
