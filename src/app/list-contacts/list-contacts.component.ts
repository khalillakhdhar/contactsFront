import { Component } from '@angular/core';
import { ContactService } from '../shared/services/contact.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrl: './list-contacts.component.css'
})
export class ListContactsComponent {
  contacts:any;
  constructor(private constactService:ContactService)
  {
    this.loadContacts();
  }
  loadContacts()
  {
    this.constactService.getAllContacts().subscribe(data=>
      {
        this.contacts=data;
        console.log("contact",this.contacts.content);
      }
    )
  }

}
