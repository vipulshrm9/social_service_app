import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from "../register/register";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
S

  constructor(public navCtrl: NavController) {


  }

  painting(){
  this.navCtrl.push(RegisterPage);
  }

}
