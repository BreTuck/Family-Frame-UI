import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ImageShareComponent } from './image-share.component';

@NgModule({
    declarations: [ImageShareComponent],
    imports: [
        CommonModule,
        IonicModule
    ],
    entryComponents: [ImageShareComponent],
})

export class ImageShareComponentModule {}