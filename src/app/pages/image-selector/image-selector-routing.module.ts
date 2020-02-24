import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageSelectorPage } from './image-selector.page';
import { AuthGuard } from '../../services/auth/guard/auth.guard';
import { DataResolver } from '../../services/auth/resolver/data.resolver';

const routes: Routes = [
  {
    path: '',
    component: ImageSelectorPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageSelectorPageRoutingModule {}
