import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import  "rxjs/add/operator/map";
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users : Observable<any>;

  constructor(public navCtrl: NavController, private httpClient : HttpClient,
     private plt : Platform, private alertCtrl : AlertController) {

    this.users = this.httpClient.get('https://randomuser.me/api/?results=20').map(res => res['results']);

  }

  checkPlatform() {
    let alert = this.alertCtrl.create({
      title: 'Platform',
      message: 'You are running on: ' + this.plt.platforms(),
      buttons: ['OK']
    });
    alert.present();
 
    if (this.plt.is('cordova')) {
      // Do Cordova stuff
    } else {
      // Do stuff inside the regular browser
    }
  }

}
