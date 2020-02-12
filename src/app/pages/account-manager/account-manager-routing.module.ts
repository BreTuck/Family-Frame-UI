import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountManagerPage } from './account-manager.page';

const routes: Routes = [
  {
    path: '',
    component: AccountManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountManagerPageRoutingModule {}
