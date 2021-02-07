import { Contact } from './../../models/contact';
import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {
  contacts: any [];
  statusContact: boolean = false;
  myContact:Contact;

  constructor(private contactService: ContactService) {
   }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(contacts=> {
      this.contacts = contacts;
      console.log(this.contacts);
    });
  }

  editContact(contact){
    this.statusContact = true;
    this.myContact = contact;
  }


  updateContact(contact: Contact){
    this.contactService.updateContact(contact);
    this.statusContact = false;
  }

  deleteContact(contact: Contact){
    if(confirm('Are you absolutely sure you want to delete this contact?')){
      this.contactService.deleteContact(contact);
    }else {
      this.statusContact = false;
    }
    
  }

}
