import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmallConceptsPage } from './small-concepts';

@NgModule({
  declarations: [
    SmallConceptsPage,
  ],
  imports: [
    IonicPageModule.forChild(SmallConceptsPage),
  ],
})
export class SmallConceptsPageModule {}
