import { Component } from '@angular/core';
import { Contact } from '../shared/classes/contact';
import { ContactService } from '../shared/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {
  contact= {} as Contact;
  constructor(private contactService:ContactService)
  {

  }
  addContact()
  {
    this.contactService.createOneContact(this.contact).subscribe(
      (data)=>{
        console.log("contact ajouté avec succés"+data);
        this.contact={} as Contact;
      }
    )
  }

}
