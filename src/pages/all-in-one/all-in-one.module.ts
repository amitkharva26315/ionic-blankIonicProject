import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllInOnePage } from './all-in-one';

@NgModule({
  declarations: [
    AllInOnePage,
  ],
  imports: [
    IonicPageModule.forChild(AllInOnePage),
  ],
})
export class AllInOnePageModule {}
