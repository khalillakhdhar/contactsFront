import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../classes/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url="http://localhost:8080/contacts";
// injecter le service HttpClient
  constructor(private http:HttpClient) { }
  getAllContacts(){
    return this.http.get(this.url);
    // observable de liste de l'objet contact
  }
  getContactById(id:number)
  {
    return this.http.get(this.url+"/"+id);
  }
  createOneContact(contact:Contact)
  {
    return this.http.post(this.url,contact);
  }
  updateOneContact(contact:Contact,id:number)
  {
    return this.http.put(this.url+"/"+id,contact);
  }
  deleteOneContact(id:number)
  {
    return this.http.delete(this.url+"/"+id);
  }
}
