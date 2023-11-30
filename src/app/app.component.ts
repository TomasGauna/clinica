import { Component } from '@angular/core';
import  firebase  from 'firebase/compat/app';
import { environment } from 'src/environments/environment';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { slideInAnimation } from './animaciones';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'clinica';

  constructor(private contexts: ChildrenOutletContexts){}

  ngOnInit(){
    firebase.initializeApp({"projectId":"clinica-cd258",
    "appId":"1:252489975231:web:7b94256a52773662cf4d0a",
    "storageBucket":"clinica-cd258.appspot.com",
    "apiKey":"AIzaSyAqXh8A0XH2BMCGSgpOYGtjrEcDb0hb9RQ",
    "authDomain":"clinica-cd258.firebaseapp.com",
    "messagingSenderId":"252489975231"});
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
