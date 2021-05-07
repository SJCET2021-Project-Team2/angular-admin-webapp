import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AngularFireModule } from '@angular/fire'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { RecordPreviewComponent } from './components/record-preview/record-preview.component';

const firebaseConfig = {
  apiKey: "AIzaSyA4gok4qRwSIokmMDuqk0M5d4-pQ4ckH5w",
  authDomain: "virus-tracker-sjcet.firebaseapp.com",
  projectId: "virus-tracker-sjcet",
  storageBucket: "virus-tracker-sjcet.appspot.com",
  messagingSenderId: "729451828950",
  appId: "1:729451828950:web:9d7a66e2f15ff784cddb77"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    RecordPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
