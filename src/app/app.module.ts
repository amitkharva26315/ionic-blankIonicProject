import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ActiveSheetsPage } from '../pages/active-sheets/active-sheets';
import { AlertsPage } from '../pages/alerts/alerts';
import { SmallConceptsPage } from '../pages/small-concepts/small-concepts';
import { ButtonsPage } from '../pages/buttons/buttons';
import { CardsPage } from '../pages/cards/cards';
import { CheckBoxPage } from '../pages/check-box/check-box';
import { FabPage } from '../pages/fab/fab';
import { GesturesPage } from '../pages/gestures/gestures';
import { GridViewPage } from '../pages/grid-view/grid-view';
import { AllInOnePage } from '../pages/all-in-one/all-in-one';
import { NavigationPage } from '../pages/navigation/navigation';
import { NavigationDetailsPage } from '../pages/navigation-details/navigation-details';

//import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActiveSheetsPage,
    AlertsPage,
    SmallConceptsPage,
    ButtonsPage,
    CardsPage,
    CheckBoxPage,
    FabPage,
    GesturesPage,
    GridViewPage,
    AllInOnePage,
    NavigationPage,
    NavigationDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ActiveSheetsPage,
    AlertsPage,
    SmallConceptsPage,
    ButtonsPage,
    CardsPage,
    CheckBoxPage,
    FabPage,
    GesturesPage,
    GridViewPage,
    AllInOnePage,
    NavigationPage,
    NavigationDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
