import { Component, OnInit } from '@angular/core';
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
  title = '';

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.contactsService.getAll()
      .subscribe(
        data => {
          this.contacts = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currContact = undefined;
    this.currentIndex = -1;
  }

  setActiveTutorial(contact: Contact, index: number): void {
    this.currContact = contact;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    // this.contactsService.deleteAll()
    //   .subscribe(
    //     response => {
    //       console.log(response);
    //       this.refreshList();
    //     },
    //     error => {
    //       console.log(error);
    //     });
  }

  searchTitle(): void {
    this.currContact = undefined;
    this.currentIndex = -1;

    // this.tutorialService.findByTitle(this.title)
    //   .subscribe(
    //     data => {
    //       this.tutorials = data;
    //       console.log(data);
    //     },
    //     error => {
    //       console.log(error);
    //     });
  }

}
