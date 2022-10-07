import {Component, OnInit} from '@angular/core';
import {Contact} from "../../models/models";

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  submitted: boolean = false;

  contact: Contact = {
    uuid: null,
    fullName: '',
    dateOfBirth: null,
    mobileNumber: null,
    address: {
      uuid: null,
      city: '',
      postalCode: 0
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  saveContact(): void {
    console.log('Save contact ::')
  }

  newContact(): void {
    console.log('Reset form ::')
    this.contact = {
      uuid: null,
      fullName: null,
      dateOfBirth: 0,
      mobileNumber: 0,
      address: {
        uuid: null,
        city: null,
        postalCode: 0
      }
    }
    this.submitted = false;
  }
}
