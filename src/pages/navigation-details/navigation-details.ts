import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NavigationDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-navigation-details',
  templateUrl: 'navigation-details.html',
})
export class NavigationDetailsPage {
  item;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.data.paramitem;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationDetailsPage');
  }

}
