import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GridViewPage } from './grid-view';

@NgModule({
  declarations: [
    GridViewPage,
  ],
  imports: [
    IonicPageModule.forChild(GridViewPage),
  ],
})
export class GridViewPageModule {}
