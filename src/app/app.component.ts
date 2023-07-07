import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: 'AIzaSyBg43xfoJ4pzwnGO-Z60qpEvE7iVBj-hL8',
      authDomain: 'ng-recipe-book-7ee4f.firebaseapp.com',
    };
    firebase.initializeApp(firebaseConfig);
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
