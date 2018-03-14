import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FloatButtonsPage } from './float-buttons';

@NgModule({
  declarations: [
    FloatButtonsPage,
  ],
  imports: [
    IonicPageModule.forChild(FloatButtonsPage),
  ],
})
export class FloatButtonsPageModule {}
