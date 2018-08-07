import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
// import { ActiveSheetsComponent } from './components/active-sheets/active-sheets'
import { ActiveSheetsPage } from '../active-sheets/active-sheets';
import { AlertsPage } from '../alerts/alerts';
import { SmallConceptsPage } from '../small-concepts/small-concepts';
import { ButtonsPage } from '../buttons/buttons';
import { CardsPage } from '../cards/cards';
import { CheckBoxPage } from '../check-box/check-box';
import { FabPage } from '../fab/fab';
import { GesturesPage } from '../gestures/gestures';
import { GridViewPage } from '../grid-view/grid-view';
import { ListsPage } from '../lists/lists';
import { NavigationPage } from '../navigation/navigation';
import { ModalPage } from '../modal/modal';
import { ToastPage } from '../toast/toast';
import { ToolbarPage } from '../toolbar/toolbar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  showName: string;
  constructor(public navCtrl: NavController, private storage: Storage) {

  }

  changeView(event, componentName) {
    // That's right, we're pushing to ourselves!    
    if (componentName == 'Navigation')
      this.navCtrl.push(NavigationPage);
    else if (componentName == 'ActiveSheets')
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
      this.navCtrl.push(ListsPage);
    else if (componentName == 'modals')
      this.navCtrl.push(ModalPage);
    else if (componentName == 'toast')
      this.navCtrl.push(ToastPage);
    else if (componentName == 'toolbar')
      this.navCtrl.push(ToolbarPage);
  }

  ionViewDidLoad() {
    this.storage.get('name').then((val) => {
      this.showName = val;
      console.log('Your name is', val);
    });
  }

  setLocalStorage(text) {
    this.storage.set('name', text);
  }
  getLocalStorage() {
    this.storage.get('name').then((val) => {
      this.showName = val;
    });
  }
  clearLocalStorage() {
    this.storage.remove('name');
  }

}
