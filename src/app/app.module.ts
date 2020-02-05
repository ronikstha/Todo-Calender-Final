import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgCalendarModule  } from 'ionic2-calendar';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage'  ;


import { environment } from '../environments/environment';
// modal imports
import { SignupPageModule } from './signup/signup.module';
import { AddPageModule } from './add/add.module';
import { NoteDetailPageModule } from './note-detail/note-detail.module';
// camera 
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
//vibration 
import {Vibration} from '@ionic-native/vibration/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AddPageModule,
    NoteDetailPageModule,
    NgCalendarModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // Camera provider  
    // Camera,
    
    // vibration provider
    Vibration   
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
