import {Component, OnInit} from '@angular/core';
import { Contact } from "../../models/models";
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  submitted: boolean = false;

  contact: Contact = {
    uuid: '',
    fullName: '',
    dateOfBirth: Date.now(),
    mobileNumber: '',
    address: {
      uuid: '',
      city: '',
      postalCode: 0
    }
  }

  constructor(private contactService: ContactsService) {
  }

  ngOnInit(): void {
  }

  saveContact(): void {
    const toSave = {
      fullName: this.contact.fullName,
      dateOfBirth: this.contact.dateOfBirth ? new Date(this.contact.dateOfBirth).getTime() : Date.now(),
      mobileNumber: this.contact.mobileNumber,
      address: {
        city: this.contact.address?.city,
        postalCode: this.contact.address?.postalCode
      }
    }

    console.log('Save contact ::', toSave);

    this.contactService.createOrUpdate(toSave).subscribe(
      res => {
        console.log('saved response', res);
        this.submitted = true;
      },
      err => {
        console.log('Error on save', err);
      }
    )

  }

  newContact(): void {
    console.log('Reset form ::')
    this.contact = {
      uuid: '',
      fullName: '',
      dateOfBirth: 0,
      mobileNumber: '',
      address: {
        uuid: '',
        city: '',
        postalCode: 0
      }
    }
    this.submitted = false;
  }
}
