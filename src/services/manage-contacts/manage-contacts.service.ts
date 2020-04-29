import { Injectable } from '@angular/core';
import { IContact } from 'src/modals/icontact';

@Injectable({
  providedIn: 'root'
})
export class ManageContactsService {

  contacts: Array<IContact> = [];

  constructor() { }
  addContact(contact:IContact):Array<IContact>{

    this.contacts.push(contact);
    return this.contacts;
  }
}
