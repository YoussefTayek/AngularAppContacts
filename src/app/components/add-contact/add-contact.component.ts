import { ContactService } from './../../services/contact.service';
import { Contact } from './../../models/contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  statusContact: boolean = false;
  contact: Contact = {
    name: '',
    phone: 0
  };
  active:boolean = true;
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  newContact(){
    this.contactService.createContact(this.contact);
    this.statusContact = false;
    this.contact = {
      name: '',
      phone:0
    }
  }

}
