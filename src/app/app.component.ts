import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp(
      {
        apiKey: "AIzaSyA70jtBejkn2wH5RzL-J6DHSx797ahriwI",
        authDomain: "ng-recipe-book-e0b6f.firebaseapp.com",
      });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
