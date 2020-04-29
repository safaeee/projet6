import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IContact } from 'src/modals/icontact';
import { ManageContactsService } from 'src/services/manage-contacts/manage-contacts.service';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
 // contact:IContact;
  //contacts: Array<IContact>;


  // constructor(private manageContact: ManageContactsService) {
  //   this.contact={
  //     lastname:null,
  //     firstname:null,
  //     phonenumber:null,
  //     email:null
  //   }
  //  }
   data= {
    lastname: '',
    firstname:'',
    phonenumber:'',
    email:''
}
   
    
      itemList:AngularFireList<any>
    constructor(public db:AngularFireDatabase){
     this.itemList=db.list('contacts')
    }
    



  ngOnInit() {
    console.log(this.data.lastname)
  }
   onSubmit(){
    this.itemList.push({
    lastname:this.data.lastname,
     firstname:this.data.firstname,
     phonenumber:this.data.phonenumber,
     email:this.data.email
           })
        
           console.log(this.data);
      
   }
 // onSubmit(contact:IContact){
    //console.log(contact);
    //this.contacts=this.manageContact.addContact(contact);
    //console.log(this.contacts);
//}

}
