import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck } from 'rxjs';
import { Contact } from 'src/app/models/models';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  currContact: Contact = {
    uuid: '',
    fullName: '',
    dateOfBirth: Date.now(),
    mobileNumber: '',
    address: {
      uuid: null,
      city: '',
      postalCode: 0
    }
  }

  message = '';

  constructor(private contactService: ContactsService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.message = '';
    this.getContactById(this.route.snapshot.params['id']);
  }


  getContactById(id: string): void {
    this.contactService.get(id).pipe(pluck('data'))
      .subscribe((res: any) => {
        this.currContact = res;
        console.log('curr :', this.currContact);
      });
  }


  updateContact(): void {
    this.message = '';

    this.contactService.createOrUpdate(this.currContact)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'Contact updated successfully!';
        },
        error => {
          console.log(error);
        });
  }


  deleteContact(): void {
    this.contactService.delete(this.currContact.uuid!)
      .subscribe(
        response => {
          this.router.navigate(['/contacts']);
        },
        error => {
          console.log(error);
        });
  }

}
