import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageManagerPageRoutingModule } from './image-manager-routing.module';

import { ImageManagerPage } from './image-manager.page';

import { ImageEditComponentModule } from '../../components/image-edit/image-edit.module';
import { ImageShareComponentModule } from '../../components/image-share/image-share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageManagerPageRoutingModule,
    ImageEditComponentModule,
    ImageShareComponentModule
  ],
  declarations: [ImageManagerPage]
})
export class ImageManagerPageModule {}
