import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsMailPageRoutingModule } from './details-mail-routing.module';

import { DetailsMailPage } from './details-mail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsMailPageRoutingModule
  ],
  declarations: [DetailsMailPage]
})
export class DetailsMailPageModule {}
