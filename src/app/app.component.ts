import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    var config = {
      apiKey: "AIzaSyCNMElYdnn7owqvMZm_Ycnna49-z9oObzM",
      authDomain: "bookshelves-kaopuk.firebaseapp.com",
      databaseURL: "https://bookshelves-kaopuk.firebaseio.com",
      projectId: "bookshelves-kaopuk",
      storageBucket: "bookshelves-kaopuk.appspot.com",
      messagingSenderId: "6496419940"
    };
    firebase.initializeApp(config);
  }
}
