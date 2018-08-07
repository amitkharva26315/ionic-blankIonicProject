import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InnerToolbarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-inner-toolbar',
  templateUrl: 'inner-toolbar.html',
})
export class InnerToolbarPage {
  toolbar: number = 0;
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.toolbar = this.navParams.get('toolbar');
    console.log(this.navParams);
  }

  ionViewDidLoad() {
    this.initializeItems();
    console.log('ionViewDidLoad InnerToolbarPage');
  }

  back() {
    this.navCtrl.pop();
  }

  initializeItems() {
    this.items = ["Angular 1.x", "Angular 2", "ReactJS", "SPFX", "Typescript", "IONIC"];
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
