import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsMailPage } from './details-mail.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsMailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsMailPageRoutingModule {}
