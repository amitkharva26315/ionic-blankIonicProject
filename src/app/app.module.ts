import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
// import { FileEncryption } from '@ionic-native/file-encryption';

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
import { ListsPage } from '../pages/lists/lists';
import { NavigationPage } from '../pages/navigation/navigation';
import { NavigationDetailsPage } from '../pages/navigation-details/navigation-details';
import { ModalPage } from '../pages/modal/modal';
import { ModalContentPage } from '../pages/modal-content/modal-content';
import { ToastPage } from '../pages/toast/toast';
import { ToolbarPage } from '../pages/toolbar/toolbar';
import { InnerToolbarPage } from '../pages/inner-toolbar/inner-toolbar';
import { NativePage } from '../pages/native/native';
import { NativeCameraPage } from '../pages/native-camera/native-camera';
import { NativeFilePage } from '../pages/native-file/native-file';

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
    ListsPage,
    NavigationPage,
    NavigationDetailsPage,
    ModalPage,
    ModalContentPage,
    ToastPage,
    ToolbarPage,
    InnerToolbarPage,
    NativePage,
    NativeCameraPage,
    NativeFilePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
    ListsPage,
    NavigationPage,
    NavigationDetailsPage,
    ModalPage,
    ModalContentPage,
    ToastPage,
    ToolbarPage,
    InnerToolbarPage,
    NativePage,
    NativeCameraPage,
    NativeFilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    File,
    FileChooser,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }

// FileEncryption,