import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { ActiveSheetsComponent } from '../../components/active-sheets/active-sheets'
import { ActiveSheetsPage } from '../active-sheets/active-sheets';
import { AlertsPage } from '../alerts/alerts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  changeView(event, componentName) {
    // That's right, we're pushing to ourselves!
    if (componentName == 'ActiveSheets')
      this.navCtrl.push(ActiveSheetsPage);
    else if (componentName == 'Alerts')
      this.navCtrl.push(AlertsPage);
  }

}
