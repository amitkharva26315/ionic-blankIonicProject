import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckBoxPage } from './check-box';

@NgModule({
  declarations: [
    CheckBoxPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckBoxPage),
  ],
})
export class CheckBoxPageModule {}
