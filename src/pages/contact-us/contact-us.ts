import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { FormGroup, FormControl,Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',

})
export class ContactUsPage {

   myform: FormGroup;
 


  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl:ViewController) {
  
   this.myform = new FormGroup({
   name: new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(12)]),
   email:new FormControl('',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
   phone:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{10}$/)]),
   message:new FormControl('',[Validators.required,Validators.maxLength(100),Validators.minLength(5)]),
   })

  
  }

 

   validation_messages = {
    'name': [
		{ type: 'required', message: 'Name is required.' },
		{ type: 'minlength', message: 'Name must be at least 5 characters long.' },
		{ type: 'maxlength', message: 'Name cannot be more than 25 characters long.' }
	],
     'email': [
		{ type: 'required',  message: 'E-mail is required.' },
		{ type: 'pattern',   message: 'Invalid E-mail' }
	],
	 'phone': [
	    { type: 'required',  message: 'Phone is required.' },
		{ type: 'pattern',   message: 'Invalid Phone no.' }
	 ],
      'message': [
        { type: 'required',  message: 'Message is required.' } ,
		{ type: 'minlength', message: 'Message must be at least 5 characters long.' },
		{ type: 'maxlength', message: 'Message cannot be more than 100 characters long.' }
      ]	

                         }


  
  dismiss(){
  	this.viewCtrl.dismiss();
  }

}
