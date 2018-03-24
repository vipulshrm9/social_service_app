import { Component, ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
import { RegisterPage } from "../register/register";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('slider') slider: Slides;
  page=0;

  constructor(public navCtrl: NavController) {
  }

  painting(){
  this.navCtrl.push(RegisterPage);
  }

  selectedTab(index) {
  this.slider.slideTo(index);
  }
}
