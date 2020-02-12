import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountManagerPageRoutingModule } from './account-manager-routing.module';

import { AccountManagerPage } from './account-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountManagerPageRoutingModule
  ],
  declarations: [AccountManagerPage]
})
export class AccountManagerPageModule {}
