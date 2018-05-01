import { Component, ViewChild } from '@angular/core';
import { NavController,Slides,NavParams } from 'ionic-angular';
import { RegisterPage } from "../register/register";
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('slider') slider: Slides;
  page=0;

  events: Events[];

  constructor(public navCtrl: NavController,private eventsService: EventsService) {
  }

  ionViewDidEnter(){
    this.eventsService.eventList()
     .subscribe(
      (events: Events[]) => this.events = events,
      (error: Response) => console.log(error)
     );
  }

  painting(id){
  this.navCtrl.push(RegisterPage,{
    value: id,
  });
  }

  selectedTab(index) {
  this.slider.slideTo(index);
  }
}
