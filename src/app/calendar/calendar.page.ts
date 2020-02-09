import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import * as moment from 'moment/moment';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})

export class CalendarPage {


  eventSource = [];
  viewTitle: string; 
  selectedDay = new Date();

  calendar = { 
    mode: 'month',
    currentDate: this.selectedDay
  };


  constructor(
    public navCtrl: NavController, 
    private modalCtrl: ModalController, 
    private alertCtrl: AlertController,
    ) { 
    
  }

  // addEvent() {
  //   let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
  //   modal.present();


  // }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onEventSelected(event) {
     let start = moment(event.startTime).format('LLLL');  
     let end = moment(event.startTime).format('LLLL');

    //  let alert = this.alertCtrl.create({
    //    title: '' + event.title,
    //    subTitle: 'From: ' + start + '<br>To: ' + end,
    //    buttons: ['OK']
    //  })


     
  }

  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTIme;
 
  }

  onCurrentDateChanged(event: Date) {

  }

  onRangeChanged(ev) {
    
  }

  ngOnInit() {
  }

}
