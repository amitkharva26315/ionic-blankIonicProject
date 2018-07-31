import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { ActiveSheetsComponent } from '../../components/active-sheets/active-sheets'
import { ActiveSheetsPage } from '../active-sheets/active-sheets';
import { AlertsPage } from '../alerts/alerts';
import { SmallConceptsPage } from '../small-concepts/small-concepts';
import { ButtonsPage } from '../buttons/buttons';
import { CardsPage } from '../cards/cards';
import { CheckBoxPage } from '../check-box/check-box';
import { FabPage } from '../fab/fab';
import { GesturesPage } from '../gestures/gestures';
import { GridViewPage } from '../grid-view/grid-view';
import { AllInOnePage } from '../all-in-one/all-in-one';

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
    else if (componentName == 'SmallConcepts')
      this.navCtrl.push(SmallConceptsPage);
    else if (componentName == 'Buttons')
      this.navCtrl.push(ButtonsPage);
    else if (componentName == 'Cards')
      this.navCtrl.push(CardsPage);
    else if (componentName == 'CheckBox')
      this.navCtrl.push(CheckBoxPage);
    else if (componentName == 'Fab')
      this.navCtrl.push(FabPage);
    else if (componentName == 'Gestures')
      this.navCtrl.push(GesturesPage);
    else if (componentName == 'Grid')
      this.navCtrl.push(GridViewPage);
    else if (componentName == 'AllInOne')
      this.navCtrl.push(AllInOnePage);
  }

}
