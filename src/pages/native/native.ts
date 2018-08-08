import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeCameraPage } from '../native-camera/native-camera';
import { NativeFilePage } from '../native-file/native-file';

/**
 * Generated class for the NativePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-native',
  templateUrl: 'native.html',
})
export class NativePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NativePage');
  }

  nativeView(event, nativeCompName) {
    if (nativeCompName == 'camera')
      this.navCtrl.push(NativeCameraPage);
    else if (nativeCompName == 'file')
      this.navCtrl.push(NativeFilePage);

  }

}
