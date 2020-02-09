import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { PictureService } from '../picture.service';
import { Vibration } from '@ionic-native/vibration/ngx';
import { NavController, AlertController } from '@ionic/angular';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  private addForm:FormGroup;

  constructor( 
    private formBuilder: FormBuilder, 
    private modal: ModalController,
    private picture: PictureService,
    private vibration: Vibration,
    public navCtrl: NavController, 
    private modalCtrl: ModalController, 
    private alertCtrl: AlertController
  ) { 

  }

  eventSource = [];
  viewTitle: string; 
  selectedDay = new Date();

  calendar = { 
    mode: 'month',
    currentDate: this.selectedDay
  };



   addEvent() {
}

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onEventSelected(event) {
     let start = moment(event.startTime).format('LLLL');  
     let end = moment(event.startTime).format('LLLL');
  
  }

  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTIme;
 
  }

  onCurrentDateChanged(event: Date) {

  }

  onRangeChanged(ev) {
    
  }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3) ] ],
      note: ['', [Validators.required, Validators.minLength(5) ] ]
    })
  }

  close() {
    this.modal.dismiss();
  }

  submit() {
    // get data from form
    let name = this.addForm.controls.name.value;
    let note = this.addForm.controls.note.value;
    let date = new Date();
    let noteData = { name: name, date: date, note: note };
    this.modal.dismiss( noteData );
    this.vibration.vibrate(50);
  }

  takePhoto() {
    this.picture.takePicture();
  }

  vibrate() {
    this.vibration.vibrate(50);
  }
}
