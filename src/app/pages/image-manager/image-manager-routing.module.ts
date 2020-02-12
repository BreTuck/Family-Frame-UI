import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageManagerPage } from './image-manager.page';

const routes: Routes = [
  {
    path: '',
    component: ImageManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageManagerPageRoutingModule {}
