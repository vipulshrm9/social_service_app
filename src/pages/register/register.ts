import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams.ViewController  } from 'ionic-angular';
import {  FormGroup, FormControl,Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {


    myform: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController) {
   
   this.myform = new FormGroup({
   name: new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(12)]),
   email:new FormControl('',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
   phone:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{10}$/)]),
   roll_no:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(7)]),
   })

  }

  validation_messages = {
    'name': [
		{ type: 'required', message: 'Name is required.' },
		{ type: 'minlength', message: 'Name must be at least 5 characters long.' },
		{ type: 'maxlength', message: 'Name cannot be more than 25 characters long.' }
	],
	 'roll_no': [
        { type: 'required',  message: 'Roll no. is required.' } ,
		{ type: 'minlength', message: 'Roll no. must be at least 7 characters long.' },
		{ type: 'maxlength', message: 'Roll no. cannot be more than 10 characters long.' }
      ],	
     'email': [
		{ type: 'required',  message: 'E-mail is required.' },
		{ type: 'pattern',   message: 'Invalid E-mail' }
	],
	 'phone': [
	    { type: 'required',  message: 'Phone is required.' },
		{ type: 'pattern',   message: 'Invalid Phone no.' }
	 ]
      

	                      }



  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  dismiss(){
  	this.viewCtrl.dismiss();
  }


}
