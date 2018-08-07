import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InnerToolbarPage } from '../inner-toolbar/inner-toolbar';

/**
 * Generated class for the ToolbarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-toolbar',
  templateUrl: 'toolbar.html',
})
export class ToolbarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToolbarPage');
  }

  toobarChangeView(event, toolbar) {
    // That's right, we're pushing to ourselves!        
    this.navCtrl.push(InnerToolbarPage, { toolbar: toolbar });
  }

}
