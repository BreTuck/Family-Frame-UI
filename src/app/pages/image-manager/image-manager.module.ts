import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageManagerPageRoutingModule } from './image-manager-routing.module';

import { ImageManagerPage } from './image-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageManagerPageRoutingModule
  ],
  declarations: [ImageManagerPage]
})
export class ImageManagerPageModule {}
